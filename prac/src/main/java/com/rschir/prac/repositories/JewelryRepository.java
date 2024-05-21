package com.rschir.prac.repositories;

import com.rschir.prac.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JewelryRepository extends JpaRepository<Jewelry, Long> {
    List<Jewelry> findAllByJewelryType(ProductType type);
    List<Jewelry> findAllByJewelryMaterial(ProductMaterial material);

    List<Jewelry> findAllByJewelryTypeAndJewelryMaterial(ProductType type, ProductMaterial material);

}

