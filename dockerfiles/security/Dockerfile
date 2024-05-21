FROM eclipse-temurin:19-jre-jammy
ARG JAR_FILE=*.jar
COPY ${JAR_FILE} application.jar
EXPOSE 8081
ENTRYPOINT ["java", "-jar", "application.jar"]
