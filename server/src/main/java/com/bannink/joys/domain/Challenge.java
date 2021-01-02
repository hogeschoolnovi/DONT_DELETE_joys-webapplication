package com.bannink.joys.domain;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

@Entity
public class Challenge {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private long id;
    @ManyToOne
    private Game game;
    private String level;
    private String name;
    private String description;
    private int value;

    public Challenge() {

    }
    public Challenge(long id, String level, String name, String description, int value) {
        this.id = id;
        this.level = level;
        this.name = name;
        this.description = description;
        this.value = value;
    }

    public long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
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

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }
}
