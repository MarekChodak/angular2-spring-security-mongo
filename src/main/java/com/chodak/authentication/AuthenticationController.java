package com.chodak.authentication;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

/**
 * Created by marekchodak on 26/07/16.
 */
@RestController
@RequestMapping("/rest")
public class AuthenticationController {

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public String principal(Principal principal){
        return principal.getName();
    }

}
