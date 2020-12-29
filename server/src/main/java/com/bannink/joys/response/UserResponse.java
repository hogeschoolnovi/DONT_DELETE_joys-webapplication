package com.bannink.joys.response;

public class UserResponse {
    private String username;
    private String accessToken;
    private String email;
    private Long id;

    public UserResponse(String username, String accessToken, String email, Long id) {
        this.username = username;
        this.accessToken = accessToken;
        this.email = email;
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }
}
