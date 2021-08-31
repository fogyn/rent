package com.dip.rent.security;

import com.dip.rent.model.Person;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class Filter extends OncePerRequestFilter {

    private JwtTokenService jwtTokenService;
    public Filter(JwtTokenService jwtTokenService){
        this.jwtTokenService = jwtTokenService;
    }
    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {

        if(httpServletRequest.getRequestURI().equals("/") ) {
            filterChain.doFilter(httpServletRequest,httpServletResponse);
            return;
        }
        //
        //
        if(httpServletRequest.getRequestURI().equals("/registration.html") ) {
            filterChain.doFilter(httpServletRequest,httpServletResponse);
            return;
        }
        //
        if(httpServletRequest.getRequestURI().equals("/create-new-person") ) {
            filterChain.doFilter(httpServletRequest,httpServletResponse);
            return;
        }

        if(httpServletRequest.getRequestURI().equals("/autentification") ) {
            System.out.println("зашел по аутентификации");
            filterChain.doFilter(httpServletRequest,httpServletResponse);
            return;
        }
        //|| httpServletRequest.getRequestURI().equals("/create-new-person") ||
        //                httpServletRequest.getRequestURI().equals("/") || httpServletRequest.getRequestURI().equals("/create-new_flat")
//        if(httpServletRequest.getRequestURI().equals("/create-new-order") ) {
//            System.out.println("зашел по созданию ордера");
//            filterChain.doFilter(httpServletRequest,httpServletResponse);
//            return;
//        }


        // "Authorization" - ?
        String token = httpServletRequest.getHeader("Authorization");
        if(token==null) {
            httpServletResponse.sendError(HttpServletResponse.SC_FORBIDDEN);
            return;
        }
        Person user = jwtTokenService.findUserByToken(token);
        if(user==null){
            httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED);
            return;
        }
        filterChain.doFilter(httpServletRequest,httpServletResponse);


    }
}
