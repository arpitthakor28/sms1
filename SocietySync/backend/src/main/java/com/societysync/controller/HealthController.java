package com.societysync.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.time.Instant;
import java.util.HashMap;
import java.util.Map;

@RestController
public class HealthController {

    @GetMapping("/")
    public RedirectView rootRedirect() {
        // Directly open the web application without any intermediate popup or card
        return new RedirectView("https://arpitthakor28.github.io/sms1/");
    }

    @GetMapping({"/api/health", "/health"})
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> response = new HashMap<>();
        response.put("status", "OK");
        response.put("message", "Your API is running");
        response.put("timestamp", Instant.now().toString());
        return ResponseEntity.ok(response);
    }
}
