package com.desafio.agenda.user;

import com.desafio.agenda.user.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    public Optional<User> findOneByEmail(String email);
    public Optional<User> findOneByEmailAndPassword(String email, String password);
    public Optional<User> findOneById(Long id);
}
