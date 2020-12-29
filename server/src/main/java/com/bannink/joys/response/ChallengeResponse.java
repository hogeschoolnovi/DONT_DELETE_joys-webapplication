package com.bannink.joys.response;

public class ChallengeResponse {
    private long id;
    private String level;
    private String name;
    private String description;
    private int value;

    public ChallengeResponse(long id, String level, String name, String description, int value) {
        this.id = id;
        this.level = level;
        this.name = name;
        this.description = description;
        this.value = value;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
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

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
