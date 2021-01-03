package com.bannink.joys.controller;

import com.bannink.joys.domain.Challenge;
import com.bannink.joys.response.GameCompactResponse;
import com.bannink.joys.response.GameResponse;
import com.bannink.joys.domain.Game;
import com.bannink.joys.repository.IChallengeRepository;
import com.bannink.joys.repository.IGameRepository;
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
    IGameRepository gameRepository;
    @Autowired
    IChallengeRepository challengeInformationRepository;

    @GetMapping("")
    public List<GameCompactResponse> index(){
        List<Game> games = gameRepository.findAll();
        List<GameCompactResponse> gameCompactResponses = new ArrayList<>();
        for (Game game : games){
            gameCompactResponses.add(new GameCompactResponse(game.getId(), game.getName(), game.getDescription()));
        }
        return gameCompactResponses;
    }
    @GetMapping("/{id}")
    public GameResponse getForId (@PathVariable ("id") long id) {
        Optional<Game> game = gameRepository.findById(id);
        if (game.isPresent()) {
            Game gameInfo = game.get();
            List<Challenge> challenges = game.get().getChallenges();
            GameResponse gameResponse = new GameResponse(gameInfo.getId(), gameInfo.getName(), gameInfo.getDescription(), challenges);
            return gameResponse;
        }else {
            return null;
        }
    }}
