package com.desafio.agenda.contact;

import jakarta.persistence.criteria.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "contact")
public class ContactController {

    private final ContactRepository contactRepository;

    @Autowired
    public ContactController(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @GetMapping(path = "/{id}")
    public ResponseEntity<Contact> getContact(@PathVariable("id") Long id) {
        Optional<Contact> contact = contactRepository.findOneById(id);
        if(contact.isPresent()) {
            return ResponseEntity.ok().body(contact.get());
        }
        return ResponseEntity.badRequest().body(null);
    }

    @PostMapping("/create")
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
        contact.setCreatedAt(LocalDateTime.now());
        return ResponseEntity.ok().body(contactRepository.save(contact));
    }

    @PostMapping("/update")
    public ResponseEntity<Contact> updateContact(@RequestBody Contact contact) {
        return ResponseEntity.ok().body(contactRepository.save(contact));
    }

    @GetMapping(path = "/list/{id}")
    public ResponseEntity<List<Contact>> getContactList(@PathVariable("id") Long id) {
        List<Contact> contacts = contactRepository.findAllByUserId(id);
        return ResponseEntity.ok().body(contacts);
    }
    @GetMapping(path = "/search/{id}")
    public ResponseEntity<Page<Contact>> queryContact(
            @PathVariable("id") Long id,
            @RequestParam(required = false, defaultValue = "") String search,
            @RequestParam(required = false, defaultValue = "createdAt") String variable,
            @RequestParam(required = false, defaultValue = "ASC") String order
    ){
        Pageable page = PageRequest.of(
                0, Integer.MAX_VALUE,
                Sort.by(order.equals("ASC") ? Sort.Direction.ASC : Sort.Direction.DESC,
                        variable));
        return ResponseEntity.ok().body(contactRepository.findSearch(id, search, page));
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<?> removeContact(@PathVariable("id") Long id) {
        Optional<Contact> contactAux = contactRepository.findOneById(id);
        if(contactAux.isPresent()) {
            contactRepository.delete(contactAux.get());
            return ResponseEntity.ok().body(id);
        }
        return ResponseEntity.badRequest().body(id);
    }



}
