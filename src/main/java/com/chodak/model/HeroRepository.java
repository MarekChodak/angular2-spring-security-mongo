package com.chodak.model;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface HeroRepository extends MongoRepository<Hero, String> {

    public Hero findByName(String name);

}