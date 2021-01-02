package com.bannink.joys.domain;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(
            strategy= GenerationType.AUTO,
            generator="native"
    )
    @GenericGenerator(
            name = "native",
            strategy = "native"
    )
    @Column(columnDefinition = "serial")
    private long id;
    private String username;
    private String email;
    private String password;

    @ManyToMany
    @JoinTable (name = "user_role",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles;

    @ManyToMany
    @JoinTable (name = "user_private_to_do",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "challenge_id"))
    private List<Challenge> privateToDo;

    @ManyToMany
    @JoinTable (name = "user_public_to_do",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "challenge_id"))
    private List<Challenge> publicToDo;

    @ManyToMany
    @JoinTable (name = "user_completed_to_do",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "challenge_id"))
    private List<Challenge> completedToDo;

    public User() {

    }

    public User(String username, String email, String password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
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

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<Role> getRoles() {
        return roles;
    }

    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    public List<Challenge> getPrivateToDo() {
        return privateToDo;
    }

    public void setPrivateToDo(List<Challenge> privateToDo) {
        this.privateToDo = privateToDo;
    }

    public List<Challenge> getPublicToDo() {
        return publicToDo;
    }

    public void setPublicToDo(List<Challenge> publicToDo) {
        this.publicToDo = publicToDo;
    }

    public List<Challenge> getCompletedToDo() {
        return completedToDo;
    }

    public void setCompletedToDo(List<Challenge> completedToDo) {
        this.completedToDo = completedToDo;
    }
}
