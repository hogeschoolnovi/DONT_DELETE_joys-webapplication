package com.bannink.joys.domain;

import java.util.List;

public class Game{
    private Long id;
    private String name;
    private String description;
    private List<ChallengeInformation> challenges;

    public Game(Long id, String name, String description, List<ChallengeInformation> challenges) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.challenges = challenges;
    }

    public List<ChallengeInformation> getChallenges() {
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

    public void setChallenges(List<ChallengeInformation> challenges) {
        this.challenges = challenges;
    }
}
