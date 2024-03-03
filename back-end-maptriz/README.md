# Desafio Back-end

## Introdução
Este Projeto foi desenvolvido utilizando os projetos bases apresentados pelo desafio, utilizando as mesmas tecnologias e versões originais.

Usa Spring Boot 3.1.9 e Java 17.

## Configuração

O banco de dados está configurado no arquivo [application.properties](/src/main/resources/application.properties).
O arquivo pode ser modificado, mas é preciso que o banco, usuário e permissões sejam configuradas anteriormente.

```
spring.datasource.url=jdbc:postgresql://localhost:5432/maptriz
spring.datasource.username=maptriz
spring.datasource.password=123456
```