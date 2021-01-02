package com.bannink.joys.controller;

import com.bannink.joys.domain.Challenge;
import com.bannink.joys.repository.IChallengeRepository;
import com.bannink.joys.response.ChallengeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/challenge")
public class ChallengeController {

    @Autowired
    IChallengeRepository challengeRepository;

    @GetMapping("/{id}")
    public ResponseEntity<ChallengeResponse> getForId (@PathVariable ("id") long id) {
        Optional<Challenge> challenge = challengeRepository.findById(id);
        if (challenge.isPresent()) {
            ChallengeResponse challengeResponse = new ChallengeResponse(challenge.get().getId(), challenge.get().getLevel(), challenge.get().getName(), challenge.get().getDescription(), challenge.get().getValue());
            return ResponseEntity.ok(challengeResponse);
        }else {
            return ResponseEntity.notFound().build();
        }
    }}
