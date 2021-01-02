package com.bannink.joys.response;

import com.bannink.joys.domain.Challenge;

import java.util.ArrayList;
import java.util.List;

public class PublicProfileResponse {
    private String username;
    private List<ChallengeResponse> publicToDo;
    private List<ChallengeResponse> completedToDo;

    public PublicProfileResponse(String username) {
        this.username = username;
    }

    public List<ChallengeResponse> getPublicToDo() {return publicToDo;}
    public List<ChallengeResponse> getCompletedToDo() {
        return completedToDo;
    }

    public void setPublicToDo(List<Challenge> publicToDo) {
        this.publicToDo = new ArrayList<>();
        for (Challenge toDo : publicToDo){
            this.publicToDo.add(new ChallengeResponse(toDo.getId(), toDo.getLevel(), toDo.getName(), toDo.getDescription(), toDo.getValue()));
        }
    }

    public void setCompletedToDo(List<Challenge> completedToDo) {
        this.completedToDo = new ArrayList<>();
        for (Challenge toDo : completedToDo) {
            this.completedToDo.add(new ChallengeResponse(toDo.getId(), toDo.getLevel(), toDo.getName(), toDo.getDescription(), toDo.getValue()));
        }
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
