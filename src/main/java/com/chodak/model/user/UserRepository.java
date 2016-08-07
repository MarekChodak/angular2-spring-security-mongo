package com.chodak.model.user;

import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * Created by marekchodak on 05/08/16.
 */
public interface UserRepository extends MongoRepository<User, String>{

    public User findByUsername(String username);

}
