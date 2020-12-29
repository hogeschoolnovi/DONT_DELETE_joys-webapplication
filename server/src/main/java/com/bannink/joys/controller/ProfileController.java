package com.bannink.joys.controller;

import com.bannink.joys.domain.ChallengeInformation;
import com.bannink.joys.domain.GameInformation;
import com.bannink.joys.domain.User;
import com.bannink.joys.payload.request.*;
import com.bannink.joys.payload.response.*;
import com.bannink.joys.repository.IChallengeInformationRepository;
import com.bannink.joys.repository.IUserRepository;
import com.bannink.joys.repository.IUserRepository;
import com.bannink.joys.response.ProfileResponse;
import com.bannink.joys.response.UserResponse;
import com.bannink.joys.service.AuthorizationService;

import com.bannink.joys.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Uitleg over CrossOrigin en CORS:
 * https://medium.com/@baphemot/understanding-cors-18ad6b478e2b
 *
 * Gebruik in Spring-boot (op controller en globally)
 * https://www.tutorialspoint.com/spring_boot/spring_boot_cors_support.htm
 *
 * Zoals je hieronder ziet, kun je ook op klasse-niveau een adres configureren. Iaw alle methodes hieronder, hebben
 * /api/auth voor de link staan.
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/profile")
public class ProfileController {

    @Autowired
    AuthorizationService authorizationService;

    @Autowired
    IUserRepository userRepository;

    @Autowired
    IChallengeInformationRepository challengeInformationRepository;

    @GetMapping("/{id}")
    public ResponseEntity<ProfileResponse> getUserById(@PathVariable(value = "id") Long id) {
        Optional<User> user = userRepository.findById(id);
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (user.isPresent() && userDetails.getId() == id) {
            ProfileResponse profileResponse = new ProfileResponse(user.get().getUsername(), user.get().getEmail());
            profileResponse.setPrivateToDo(user.get().getPrivateToDo());
            profileResponse.setPublicToDo(user.get().getPublicToDo());
            profileResponse.setCompletedToDo(user.get().getCompletedToDo());
            return ResponseEntity.ok(profileResponse);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/privatetodo/{challengeId}")
    public ResponseEntity addChallengeToPrivateToDo(@PathVariable(value = "challengeId") Long challengeId){
        Optional<ChallengeInformation> challenge = challengeInformationRepository.findById(challengeId);
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<User> user = userRepository.findById(userDetails.getId());
        if (user.isPresent() && challenge.isPresent()){
            user.get().getPrivateToDo().add(challenge.get());
            userRepository.save(user.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @DeleteMapping("/privatetodo/{challengeId}")
    public ResponseEntity removeChallengeFromPrivateToDo(@PathVariable(value = "challengeId") Long challengeId){
        Optional<ChallengeInformation> challenge = challengeInformationRepository.findById(challengeId);
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<User> user = userRepository.findById(userDetails.getId());
        if (user.isPresent() && challenge.isPresent()){
            user.get().getPrivateToDo().remove(challenge.get());
            userRepository.save(user.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/publictodo/{challengeId}")
    public ResponseEntity addChallengeToPublicToDo(@PathVariable(value = "challengeId") Long challengeId){
        Optional<ChallengeInformation> challenge = challengeInformationRepository.findById(challengeId);
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<User> user = userRepository.findById(userDetails.getId());
        if (user.isPresent() && challenge.isPresent()){
            user.get().getPublicToDo().add(challenge.get());
            userRepository.save(user.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/publictodo/{challengeId}")
    public ResponseEntity removeChallengeFromPublicToDo(@PathVariable(value = "challengeId") Long challengeId){
        Optional<ChallengeInformation> challenge = challengeInformationRepository.findById(challengeId);
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<User> user = userRepository.findById(userDetails.getId());
        if (user.isPresent() && challenge.isPresent()){
            user.get().getPublicToDo().remove(challenge.get());
            userRepository.save(user.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/completedtodo/{challengeId}")
    public ResponseEntity addCompletedToPublicToDo(@PathVariable(value = "challengeId") Long challengeId){
        Optional<ChallengeInformation> challenge = challengeInformationRepository.findById(challengeId);
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<User> user = userRepository.findById(userDetails.getId());
        if (user.isPresent() && challenge.isPresent()){
            user.get().getCompletedToDo().add(challenge.get());
            userRepository.save(user.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/completedtodo/{challengeId}")
    public ResponseEntity removeChallengeFromCompletedToDo(@PathVariable(value = "challengeId") Long challengeId){
        Optional<ChallengeInformation> challenge = challengeInformationRepository.findById(challengeId);
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Optional<User> user = userRepository.findById(userDetails.getId());
        if (user.isPresent() && challenge.isPresent()){
            user.get().getCompletedToDo().remove(challenge.get());
            userRepository.save(user.get());
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}