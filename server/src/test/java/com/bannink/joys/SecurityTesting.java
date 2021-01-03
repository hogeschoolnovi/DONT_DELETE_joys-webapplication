package com.bannink.joys;

import com.bannink.joys.controller.ProfileController;
import com.bannink.joys.repository.IUserRepository;
import org.aspectj.lang.annotation.Before;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.Authentication;


import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class SecurityTesting {


    @InjectMocks
    private ProfileController profileController;

    @Mock
    private IUserRepository userRepository;

    @Mock
    Authentication authentication;
    @Mock
    SecurityContext securityContext;

    @Before("")
    public void init() { MockitoAnnotations.initMocks(this); }

    @Test
    public void TestProfile(){
        when(userRepository.findById(1L)).thenReturn(Optional.empty());
        when(securityContext.getAuthentication()).thenReturn(authentication);
        SecurityContextHolder.setContext(securityContext);
        when(SecurityContextHolder.getContext().getAuthentication().getPrincipal()).thenReturn(null);
        ResponseEntity response = profileController.getUserById(1L);
        assertEquals(response, ResponseEntity.notFound().build());
    }

}
