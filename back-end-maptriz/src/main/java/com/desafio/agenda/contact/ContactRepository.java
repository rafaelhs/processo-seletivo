package com.desafio.agenda.contact;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    @Query("select c from Contact c where c.user.id = :userId and (" +
            "lower(c.name) like lower(concat('%', :search, '%')) or " +
            "lower(c.lastName) like lower(concat('%', :search, '%')) or " +
            "cast(c.document as string) like lower(concat('%', :search, '%')) or " +
            "lower(c.email) like lower(concat('%', :search, '%')) or " +
            "cast(c.phone as string) like lower(concat('%', :search, '%')) or " +
            "lower(c.address) like lower(concat('%', :search, '%')) or " +
            "lower(c.city) like lower(concat('%', :search, '%')) or " +
            "cast(c.zip as string) like lower(concat('%', :search, '%'))" +
            ")")
    public Page<Contact> findSearch(@Param("userId") Long userId, @Param("search") String search, Pageable pageable);
}
