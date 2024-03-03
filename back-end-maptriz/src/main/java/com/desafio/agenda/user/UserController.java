package com.desafio.agenda.user;

import com.desafio.agenda.user.User;
import com.desafio.agenda.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.nio.file.Path;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "user")
public class UserController {
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @PostMapping("/create")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        Optional<User> userAux = userRepository.findOneByEmail(user.getEmail());
        if(userAux.isEmpty()) {
            return ResponseEntity.ok().body(userRepository.save(user));
        }
        throw new ResponseStatusException(HttpStatus.CONFLICT, "email in use");
    }

    @PostMapping
    public ResponseEntity<User> login(@RequestBody User user) {
        Optional<User> userAux = userRepository.findOneByEmailAndPassword(user.getEmail(), user.getPassword());
        if(userAux.isPresent()) {
            return ResponseEntity.ok().body(userAux.get());
        }
        throw new ResponseStatusException(HttpStatus.FORBIDDEN, "wrong credentials");
    }

    @DeleteMapping(path = "{id}")
    public ResponseEntity<?> removeUser(@PathVariable("id") Long id) {
        Optional<User> userAux = userRepository.findOneById(id);
        if(userAux.isPresent()) {
            userRepository.delete(userAux.get());
            return ResponseEntity.ok().body(id);
        }
        return ResponseEntity.badRequest().body(id);
    }


}
