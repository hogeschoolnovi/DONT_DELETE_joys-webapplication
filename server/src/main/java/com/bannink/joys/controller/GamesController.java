package com.bannink.joys.controller;

import com.bannink.joys.domain.ChallengeInformation;
import com.bannink.joys.domain.Game;
import com.bannink.joys.domain.GameInformation;
import com.bannink.joys.repository.IChallengeInformationRepository;
import com.bannink.joys.repository.IGameInformationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/games")
public class GamesController {

    @Autowired
    IGameInformationRepository gameInformationRepository;
    @Autowired
    IChallengeInformationRepository challengeInformationRepository;

    @GetMapping("")
    public List<GameInformation> index(){
        List<GameInformation> games = gameInformationRepository.findAll();
        return games;
    }
    @GetMapping("/{id}")
    public Game getForId (@PathVariable ("id") long id) {
        Optional<GameInformation> gameInformation = gameInformationRepository.findById(id);
        if (gameInformation.isPresent()) {
            GameInformation gameInfo = gameInformation.get();
            List<ChallengeInformation> challenges = challengeInformationRepository.findByGameId(gameInfo.getId());
            Game game = new Game(gameInfo.getId(), gameInfo.getName(), gameInfo.getDescription(), challenges);
            return game;
        }else {
            return null;
        }
    }}
