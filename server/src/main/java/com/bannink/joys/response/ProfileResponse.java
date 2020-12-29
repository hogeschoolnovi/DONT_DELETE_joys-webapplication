package com.bannink.joys.response;

import com.bannink.joys.domain.ChallengeInformation;

import java.util.ArrayList;
import java.util.List;

public class ProfileResponse {
    private String username;
    private String email;
    private List<ChallengeResponse> privateToDo;
    private List<ChallengeResponse> publicToDo;
    private List<ChallengeResponse> completedToDo;

    public ProfileResponse(String username, String email) {
        this.username = username;
        this.email = email;
    }

    public List<ChallengeResponse> getPrivateToDo() {
        return privateToDo;
    }
    public List<ChallengeResponse> getPublicToDo() {return publicToDo;}
    public List<ChallengeResponse> getCompletedToDo() {
        return completedToDo;
    }


    public void setPrivateToDo(List<ChallengeInformation> privateToDo) {
        this.privateToDo = new ArrayList<>();
        for (ChallengeInformation toDo : privateToDo) {
            this.privateToDo.add(new ChallengeResponse(toDo.getId(), toDo.getLevel(), toDo.getName(), toDo.getDescription(), toDo.getValue()));
        }
    }

    public void setPublicToDo(List<ChallengeInformation> publicToDo) {
        this.publicToDo = new ArrayList<>();
        for (ChallengeInformation toDo : publicToDo){
            this.publicToDo.add(new ChallengeResponse(toDo.getId(), toDo.getLevel(), toDo.getName(), toDo.getDescription(), toDo.getValue()));
        }
    }

    public void setCompletedToDo(List<ChallengeInformation> completedToDo) {
        this.completedToDo = new ArrayList<>();
        for (ChallengeInformation toDo : completedToDo) {
            this.completedToDo.add(new ChallengeResponse(toDo.getId(), toDo.getLevel(), toDo.getName(), toDo.getDescription(), toDo.getValue()));
        }
    }


    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
