package com.chodak.authentication;

import org.springframework.security.web.csrf.CsrfToken;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.security.Principal;

/**
 * Created by marekchodak on 16/07/16.
 */
@RestController
public class TokenController {

    @RequestMapping(value = "/token", method = RequestMethod.GET)
    public String csrf(HttpServletRequest httpServletRequest){
        CsrfToken token = (CsrfToken)httpServletRequest.getAttribute(CsrfToken.class.getName());
        return token.getToken();
    }
}
