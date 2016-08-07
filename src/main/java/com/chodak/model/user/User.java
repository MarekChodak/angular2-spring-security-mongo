package com.chodak.model.user;

import org.springframework.data.annotation.Id;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;

/**
 * Created by marekchodak on 05/08/16.
 */
public class User implements Serializable {

    @Id
    private String id;

    private String username;

    private String password;

    private boolean enabled;

    private String email;

    private Collection<String> userRoles;

    public Collection<String> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Collection<String> userRoles) {
        this.userRoles = userRoles;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void addRole(String role) {
        if(userRoles == null){
            userRoles = new ArrayList<>();
        }
        userRoles.add(role);
    }
}
