package com.desafio.agenda.contact;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long>{
    public Optional<Contact> findOneById(Long id);


    public List<Contact> findAllByUserId(Long userId);
}
