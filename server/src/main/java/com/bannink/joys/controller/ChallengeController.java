package com.bannink.joys.controller;

import com.bannink.joys.domain.ChallengeInformation;
import com.bannink.joys.domain.Game;
import com.bannink.joys.domain.GameInformation;
import com.bannink.joys.repository.IChallengeInformationRepository;
import com.bannink.joys.repository.IGameInformationRepository;
import com.bannink.joys.response.ChallengeResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/challenge")
public class ChallengeController {
//    @Autowired
//    IGameInformationRepository gameInformationRepository;
    @Autowired
    IChallengeInformationRepository challengeInformationRepository;
//
//    @GetMapping("")
//    public List<GameInformation> index(){
//        List<GameInformation> games = gameInformationRepository.findAll();
//        return games;
//    }
    @GetMapping("/{id}")
    public ResponseEntity<ChallengeResponse> getForId (@PathVariable ("id") long id) {
        Optional<ChallengeInformation> challengeInformation = challengeInformationRepository.findById(id);
        if (challengeInformation.isPresent()) {
//            ChallengeInformation challengeInfo = challengeInformation.get();
            ChallengeResponse challengeResponse = new ChallengeResponse(challengeInformation.get().getId(), challengeInformation.get().getLevel(), challengeInformation.get().getName(), challengeInformation.get().getDescription(), challengeInformation.get().getValue());
            return ResponseEntity.ok(challengeResponse);
        }else {
            return ResponseEntity.notFound().build();
        }
    }}
