FROM eclipse-temurin:17-jdk-alpine
WORKDIR /app
COPY mvnw pom.xml ./
COPY .mvn .mvn
COPY src src
RUN ./mvnw -q -DskipTests package
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/target/stock-savant-backend-0.1.0.jar"]
