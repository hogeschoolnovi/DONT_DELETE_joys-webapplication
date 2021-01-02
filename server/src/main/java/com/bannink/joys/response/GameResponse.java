package com.bannink.joys.response;

import com.bannink.joys.domain.Challenge;

import java.util.List;

public class GameResponse {
    private Long id;
    private String name;
    private String description;
    private List<Challenge> challenges;

    public GameResponse(Long id, String name, String description, List<Challenge> challenges) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.challenges = challenges;
    }

    public List<Challenge> getChallenges() {
        return challenges;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setChallenges(List<Challenge> challenges) {
        this.challenges = challenges;
    }
}
