package com.example.security.service;

import com.example.security.models.Client;
import com.example.security.repositories.ClientsRepository;
import com.example.security.util.ForbiddenLoginOrPasswordException;
import com.example.security.util.LoginAlreadyDefinedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Service
public class ClientsService {

    private final ClientsRepository clientsRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public ClientsService(ClientsRepository clientsRepository, PasswordEncoder passwordEncoder) {
        this.clientsRepository = clientsRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<Client> findAllClientId() {
        return (List<Client>) clientsRepository.findAll();
    }

    @Transactional
    public void register(Client client) {
        if (Objects.equals(client.getPassword(), "") || Objects.equals(client.getLogin(), "")) {
            throw new ForbiddenLoginOrPasswordException();
        }
        client.setPassword(passwordEncoder.encode(client.getPassword()));
        client.setRole("ROLE_USER");
        client.setClientId(clientsRepository.count());
        if (clientsRepository.findById(client.getLogin()).isPresent()) {
            throw new LoginAlreadyDefinedException();
        }
        clientsRepository.save(client);
    }

    @Transactional(readOnly = true)
    public Client readByLogin(String login) {
        return clientsRepository.findById(login).orElseThrow(() -> new UsernameNotFoundException("Client not found"));
    }

}
