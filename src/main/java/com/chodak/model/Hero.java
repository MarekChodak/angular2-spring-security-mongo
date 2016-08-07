package com.chodak.model;

import org.springframework.data.annotation.Id;


public class Hero {

    @Id
    private String id;

    private String name;

    public Hero() {}

    public Hero(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    @Override
    public String toString() {
        return String.format(
                "Hero[id=%s, name='%s]",
                id, name);
    }
}