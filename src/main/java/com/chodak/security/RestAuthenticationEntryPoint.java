package com.chodak.security;

import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by marekchodak on 17/07/16.
 */
public class RestAuthenticationEntryPoint implements AuthenticationEntryPoint {

    public void commence(HttpServletRequest request, HttpServletResponse response,
                         AuthenticationException authException ) throws IOException {
        // this is very important for a REST based API login.
        // WWW-Authenticate header should be set as FormBased , else browser will show login dialog with realm
        response.setHeader("WWW-Authenticate", "FormBased");
        response.setStatus( HttpServletResponse.SC_UNAUTHORIZED );
    }
}
