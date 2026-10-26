package com.societysync.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.time.Instant;
import java.util.Map;

@RestController
public class HealthController {

    private final Instant startTime = Instant.now();

    @GetMapping("/")
    public RedirectView rootRedirect() {
        // Directly open the web application without any intermediate popup or card
        return new RedirectView("https://arpitthakor28.github.io/sms1/");
    }

    @GetMapping({"/health", "/api/health"})
    public ResponseEntity<Map<String, Object>> health() {
        return ResponseEntity.ok(Map.of(
                "status", "UP",
                "service", "sms1 Platform API",
                "version", "2.0.0",
                "timestamp", Instant.now(),
                "uptimeSeconds", Instant.now().getEpochSecond() - startTime.getEpochSecond()
        ));
    }
}
