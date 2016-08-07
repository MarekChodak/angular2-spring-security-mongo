package com.chodak.model;
/**
 * Created by marekchodak on 06/07/16.
 */

import com.chodak.model.Hero;
import com.chodak.model.HeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest")
public class HeroController {

    @Autowired
    private HeroRepository heroRepository;

    @RequestMapping(value = "/heroes", method = RequestMethod.GET)
    public List<Hero> heroes() {
        return heroRepository.findAll();
    }
}
