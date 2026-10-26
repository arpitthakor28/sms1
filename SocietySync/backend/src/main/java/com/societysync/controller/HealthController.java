package com.societysync.controller;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.Map;

@RestController
public class HealthController {

    private final Instant startTime = Instant.now();

    @GetMapping(value = "/", produces = MediaType.TEXT_HTML_VALUE)
    public ResponseEntity<String> rootLanding() {
        String html = """
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>sms1 Backend API - Live</title>
                <style>
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
                        background: #0f172a;
                        color: #f8fafc;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        min-height: 100vh;
                        margin: 0;
                        padding: 20px;
                        box-sizing: border-box;
                    }
                    .card {
                        background: #1e293b;
                        border: 1px solid #334155;
                        border-radius: 16px;
                        padding: 36px 32px;
                        max-width: 520px;
                        width: 100%;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.4);
                        text-align: center;
                    }
                    .badge {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        background: rgba(16, 185, 129, 0.15);
                        color: #10b981;
                        padding: 6px 16px;
                        border-radius: 20px;
                        font-size: 14px;
                        font-weight: 600;
                        margin-bottom: 20px;
                        border: 1px solid rgba(16, 185, 129, 0.3);
                    }
                    .dot {
                        width: 8px;
                        height: 8px;
                        background: #10b981;
                        border-radius: 50%;
                        box-shadow: 0 0 10px #10b981;
                    }
                    h1 {
                        margin: 0 0 10px 0;
                        font-size: 26px;
                        font-weight: 800;
                        color: #ffffff;
                    }
                    p {
                        color: #94a3b8;
                        font-size: 14px;
                        line-height: 1.6;
                        margin: 0 0 24px 0;
                    }
                    .btn {
                        display: inline-block;
                        background: linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%);
                        color: white;
                        text-decoration: none;
                        padding: 12px 24px;
                        border-radius: 10px;
                        font-weight: 600;
                        font-size: 14px;
                        box-shadow: 0 4px 14px rgba(14, 165, 233, 0.35);
                    }
                    .endpoints {
                        margin-top: 24px;
                        padding-top: 20px;
                        border-top: 1px solid #334155;
                        text-align: left;
                        font-size: 12px;
                        color: #64748b;
                    }
                    .endpoint-item {
                        display: flex;
                        justify-content: space-between;
                        padding: 6px 0;
                    }
                    .endpoint-item code {
                        color: #38bdf8;
                        font-family: monospace;
                    }
                </style>
            </head>
            <body>
                <div class="card">
                    <div class="badge">
                        <span class="dot"></span> Backend API is Live & Healthy
                    </div>
                    <h1>sms1 Platform Backend</h1>
                    <p>Spring Boot 3 + Java 21 + MongoDB Atlas + STOMP WebSockets are actively running on Render.</p>
                    <a href="https://arpitthakor28.github.io/sms1/" class="btn" target="_blank">Open sms1 Web App &rarr;</a>
                    <div class="endpoints">
                        <div class="endpoint-item"><span>Health Check:</span> <code>GET /health</code></div>
                        <div class="endpoint-item"><span>WebSocket:</span> <code>STOMP /ws</code></div>
                        <div class="endpoint-item"><span>Auth:</span> <code>POST /api/auth/login</code></div>
                    </div>
                </div>
            </body>
            </html>
            """;
        return ResponseEntity.ok(html);
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
