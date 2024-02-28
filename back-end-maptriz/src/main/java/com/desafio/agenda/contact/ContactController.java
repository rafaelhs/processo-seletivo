package com.desafio.agenda.contact;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping("/create")
    public ResponseEntity<Contact> createContact(@RequestBody Contact contact) {
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
