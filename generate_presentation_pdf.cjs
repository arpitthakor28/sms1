const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function createWhiteExecutivePresentationPDF() {
  const doc = new PDFDocument({
    size: [960, 540], // 16:9 Widescreen
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    autoFirstPage: false
  });

  const outputPath = path.resolve('GateSync_Project_Presentation.pdf');
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  // Professional White & Cold Executive Palette
  const C = {
    bgLight: '#F8FAFC',       // Clean executive off-white background
    cardBg: '#FFFFFF',        // Pure white card container
    cardBorder: '#E2E8F0',    // Subtle soft cool slate border
    cardBorderDark: '#CBD5E1',// Crisp accent border
    primaryNavy: '#0F2942',   // Deep authoritative navy for titles
    royalBlue: '#1E40AF',     // Professional academic royal blue
    accentBlue: '#0284C7',    // Tech blue accent
    textDark: '#0F172A',      // High-contrast charcoal headings
    textBody: '#334155',      // Clean readable slate body text
    textMuted: '#64748B',     // Cool slate metadata
    alertRed: '#DC2626',      // Corporate danger red
    successGreen: '#16A34A',  // Corporate success green
    headerDivider: '#E2E8F0'  // Clean divider line
  };

  // Helper for slide common header and footer (NO awkward pill badge!)
  function applyHeaderFooter(category, title, subtitle, slideNum) {
    doc.addPage({ size: [960, 540], margins: { top: 0, bottom: 0, left: 0, right: 0 } });

    // Page Background
    doc.rect(0, 0, 960, 540).fill(C.bgLight);

    // Top Royal Blue Accent Line
    doc.rect(0, 0, 960, 4).fill(C.royalBlue);

    // Section Breadcrumb - Clean Human Typography
    doc.font('Helvetica-Bold')
       .fontSize(8.5)
       .fillColor(C.royalBlue)
       .text(category.toUpperCase(), 50, 24);

    // Slide Title
    doc.font('Helvetica-Bold')
       .fontSize(19)
       .fillColor(C.primaryNavy)
       .text(title, 50, 44, { width: 860 });

    // Subtitle
    if (subtitle) {
      doc.font('Helvetica')
         .fontSize(9.5)
         .fillColor(C.textMuted)
         .text(subtitle, 50, 68, { width: 860 });
    }

    // Header divider line
    doc.strokeColor(C.headerDivider)
       .lineWidth(1)
       .moveTo(50, 88)
       .lineTo(910, 88)
       .stroke();

    // Footer divider line
    doc.strokeColor(C.headerDivider)
       .lineWidth(1)
       .moveTo(50, 506)
       .lineTo(910, 506)
       .stroke();

    // Footer Text Left
    doc.font('Helvetica')
       .fontSize(8.5)
       .fillColor(C.textMuted)
       .text('GateSync — Smart Society Security Platform  |  Arpitsinh Thakor (23SE02IE040)', 50, 515);

    // Footer Text Right
    doc.font('Helvetica-Bold')
       .fontSize(8.5)
       .fillColor(C.royalBlue)
       .text(`SCHOOL OF ENGINEERING  •  SLIDE ${slideNum} / 12`, 50, 515, { width: 860, align: 'right' });
  }

  // Helper function for Screenshot slides
  function addScreenshotSlide(cat, title, sub, bullets, imgName, slideNum) {
    applyHeaderFooter(cat, title, sub, slideNum);

    // Left Column: Text & Features Card
    doc.roundedRect(50, 106, 415, 380, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(50, 106, 4, 380).fill(C.royalBlue);

    doc.font('Helvetica-Bold').fontSize(10.5).fillColor(C.royalBlue).text('CORE FUNCTIONALITY & WORKFLOW', 70, 124);

    let bY = 152;
    bullets.forEach(b => {
      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(`• ${b.h}:`, 70, bY);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(b.d, 70, bY + 14, { width: 375, lineGap: 2.5 });
      bY += 72;
    });

    // Right Column: Framed Screenshot Card
    doc.roundedRect(485, 106, 425, 380, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);

    const imgPath = path.resolve('screenshots/' + imgName);
    if (fs.existsSync(imgPath)) {
      doc.image(imgPath, 495, 116, { width: 405, height: 360, fit: [405, 360], align: 'center', valign: 'center' });
    }
  }

  // ==========================================
  // SLIDE 1: COVER SLIDE (WHITE EXECUTIVE THEME)
  // ==========================================
  {
    doc.addPage({ size: [960, 540], margins: { top: 0, bottom: 0, left: 0, right: 0 } });
    doc.rect(0, 0, 960, 540).fill(C.bgLight);

    // Top Royal Blue Accent Bar
    doc.rect(0, 0, 960, 6).fill(C.royalBlue);

    // University Header Line
    doc.rect(60, 36, 4, 18).fill(C.royalBlue);
    doc.font('Helvetica-Bold')
       .fontSize(10.5)
       .fillColor(C.primaryNavy)
       .text('P. P. SAVANI UNIVERSITY  •  SCHOOL OF ENGINEERING', 72, 40);

    // University Logo (Top Right)
    const logoPath = path.resolve('screenshots/ppsu_logo.png');
    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, 760, 30, { width: 140, fit: [140, 65] });
    }

    // Main Project Title
    doc.font('Helvetica-Bold')
       .fontSize(42)
       .fillColor(C.primaryNavy)
       .text('GATESYNC', 60, 84);

    // Subtitle
    doc.font('Helvetica-Bold')
       .fontSize(15)
       .fillColor(C.royalBlue)
       .text('Smart Residential Society Security & Visitor Management System', 60, 138);

    // Human Engineering Summary
    doc.font('Helvetica')
       .fontSize(10.5)
       .fillColor(C.textBody)
       .text('An enterprise-grade, offline-first Progressive Web Application (PWA) replacing legacy paper visitor registers with sub-150ms bidirectional STOMP WebSocket gatekeeper alerts, 1-tap logistics clearance, and cryptographic guest access.', 60, 168, { width: 840, lineGap: 3.5 });

    // Candidate Credentials Container Card (Pure white card with navy stripe)
    doc.roundedRect(60, 238, 840, 238, 6)
       .lineWidth(1)
       .fillAndStroke(C.cardBg, C.cardBorder);

    // Navy Accent Stripe on left
    doc.rect(60, 238, 5, 238).fill(C.primaryNavy);

    // Left Column: Student Credentials
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('STUDENT DEVELOPER', 85, 258);
    doc.font('Helvetica-Bold').fontSize(16).fillColor(C.textDark).text('ARPITSINH THAKOR', 85, 274);

    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('ENROLLMENT NUMBER', 85, 312);
    doc.font('Helvetica-Bold').fontSize(14).fillColor(C.royalBlue).text('23SE02IE040', 85, 328);

    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('DEGREE & BRANCH', 85, 366);
    doc.font('Helvetica-Bold').fontSize(11.5).fillColor(C.textDark).text('B.Tech in Information Technology & Engineering', 85, 382);
    doc.font('Helvetica').fontSize(10.5).fillColor(C.textBody).text('School of Engineering', 85, 400);

    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('TECHNOLOGY FOCUS', 85, 426);
    doc.font('Helvetica-Bold').fontSize(11.5).fillColor(C.successGreen).text('Full Stack Development - Java', 85, 442);

    // Right Column: Institution & Academic Details
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('INSTITUTION', 520, 258);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textDark).text('School of Engineering', 520, 274);
    doc.font('Helvetica').fontSize(10).fillColor(C.textBody).text('P. P. Savani University, Surat, Gujarat, India', 520, 292);

    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('PROJECT CATEGORY', 520, 328);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textDark).text('Final Year Project', 520, 344);

    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('ACADEMIC YEAR', 520, 380);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.royalBlue).text('Academic Year 2026–2027', 520, 396);
    doc.font('Helvetica').fontSize(10).fillColor(C.textMuted).text('Major Project Presentation (AY 2026–2027)', 520, 414);

    // Footer
    doc.font('Helvetica')
       .fontSize(8.5)
       .fillColor(C.textMuted)
       .text('GateSync — Smart Society Security System  |  School of Engineering, PPSU', 60, 515);
  }

  // ==========================================
  // SLIDE 2: PROBLEM STATEMENT & MOTIVATION
  // ==========================================
  {
    applyHeaderFooter('01. Background & Challenges', 'Problem Statement & Motivation', 'Why Traditional Physical Gatehouse Registers Fail in Modern Residential Societies', 2);

    // Left Column: The Problem
    doc.roundedRect(50, 106, 415, 380, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(50, 106, 4, 380).fill(C.alertRed);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.alertRed).text('CRITICAL LIMITATIONS OF PAPER LOGBOOKS', 70, 124);

    const problems = [
      { t: 'Severe Gate Queue Bottlenecks', d: 'Manual pen-and-paper logging consumes 3–5 minutes per entering vehicle, causing long congestion queues at society entry gates.' },
      { t: 'Privacy Vulnerabilities', d: 'Visitors write personal phone numbers and visiting flat numbers in an open book, easily viewed and photographed by any third party.' },
      { t: 'Unreliable Resident Verification', d: 'Guards must phone or intercom residents. Unanswered calls often lead to guards waving visitors in unverified.' },
      { t: 'E-Commerce Courier Overload', d: 'Modern high-frequency logistics (Swiggy, Zomato, Amazon, Blinkit) overwhelm gatekeepers with constant repetitive manual logging.' }
    ];

    let pY = 152;
    problems.forEach(p => {
      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(`• ${p.t}:`, 70, pY);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(p.d, 70, pY + 14, { width: 375, lineGap: 2.5 });
      pY += 72;
    });

    // Right Column: The Solution
    doc.roundedRect(485, 106, 425, 380, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(485, 106, 4, 380).fill(C.successGreen);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.successGreen).text('THE GATESYNC DIGITAL TRANSFORMATION', 505, 124);

    const solutions = [
      { t: 'Sub-150ms Instant Push Alerting', d: 'Bidirectional STOMP WebSockets push arrival alerts straight to the resident mobile screen before the visitor reaches the barrier.' },
      { t: '1-Tap Resident Remote Approvals', d: 'Residents verify visitor identity with arrival photo and tap Approve or Deny from anywhere in the world.' },
      { t: 'Pre-Approved QR & 6-Digit Passes', d: 'Residents generate digital passes in advance for expected guests. Guards verify in 2 seconds via optical camera QR scanning.' },
      { t: '1-Tap Logistics Partner Clearing', d: 'Dedicated 1-tap fast ingress for Swiggy, Zomato, Amazon, and Blinkit completely eliminates typing bottlenecks.' }
    ];

    let sY = 152;
    solutions.forEach(s => {
      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(`• ${s.t}:`, 505, sY);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(s.d, 505, sY + 14, { width: 385, lineGap: 2.5 });
      sY += 72;
    });
  }

  // ==========================================
  // SLIDE 3: SYSTEM ARCHITECTURE & TECH STACK
  // ==========================================
  {
    applyHeaderFooter('02. Engineering Architecture', 'Full-Stack Architecture & Technology Stack', 'Robust Multi-Tier Cloud Architecture Built for Real-Time Responsiveness and Zero Data Loss', 3);

    const tiers = [
      { name: 'CLIENT PRESENTATION TIER (PWA)', col: C.royalBlue, tech: 'React 19 • Vite • Lucide Icons • STOMP over SockJS • Service Worker Precaching', desc: 'Installable Progressive Web App (PWA) with responsive layouts, offline transaction queue, and audible chime notifications.' },
      { name: 'BACKEND MICROSERVICE CORE (JAVA)', col: C.primaryNavy, tech: 'Java 21 LTS • Spring Boot 3.3.4 • Spring Security 6 • JJWT • RESTful APIs', desc: 'Stateless multi-tenant controllers, WebSocket message broker (/topic and /user/queue), and atomic concurrency locks.' },
      { name: 'DUAL-DATABASE PERSISTENCE STRATEGY', col: C.successGreen, tech: 'MongoDB Atlas Cloud (Distributed NoSQL) + Relational Enterprise Mapping', desc: 'MongoDB Atlas stores high-throughput notifications, pre-approved passes, and audit trails; robust relational schemas for billing.' },
      { name: 'CLOUD DEPLOYMENT & CI/CD INFRASTRUCTURE', col: C.accentBlue, tech: 'Render Cloud (Dockerized Spring Boot Container) + GitHub Pages (Production PWA)', desc: 'Fully automated continuous deployment with sub-second health monitors (/api/health) and automated failovers.' }
    ];

    let tY = 106;
    tiers.forEach(t => {
      doc.roundedRect(50, tY, 530, 86, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
      doc.rect(50, tY, 4, 86).fill(t.col);

      doc.font('Helvetica-Bold').fontSize(9.5).fillColor(t.col).text(t.name, 65, tY + 10);
      doc.font('Helvetica-Bold').fontSize(10.5).fillColor(C.textDark).text(t.tech, 65, tY + 26);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(t.desc, 65, tY + 44, { width: 500, lineGap: 2 });
      tY += 96;
    });

    // Right Column: Key Architectural Benchmarks Box
    doc.roundedRect(600, 106, 310, 380, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(600, 106, 4, 380).fill(C.royalBlue);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.royalBlue).text('ARCHITECTURAL BENCHMARKS', 620, 124);

    const benchmarks = [
      { stat: '< 150 ms', desc: 'STOMP WebSocket Alert Latency' },
      { stat: '100 %', desc: 'Tenant Isolation per Society' },
      { stat: 'Zero Trust', desc: '15-min Rotating JWT Access Tokens' },
      { stat: 'Offline First', desc: 'Auto-syncing LocalStorage Queue' }
    ];

    let bY = 160;
    benchmarks.forEach(b => {
      doc.font('Helvetica-Bold').fontSize(22).fillColor(C.primaryNavy).text(b.stat, 620, bY);
      doc.font('Helvetica').fontSize(10).fillColor(C.textBody).text(b.desc, 620, bY + 28);
      bY += 76;
    });
  }

  // ==========================================
  // SLIDE 4: ADMIN DASHBOARD
  // ==========================================
  addScreenshotSlide(
    '03. Operational Command',
    'Executive Admin Dashboard & Analytics',
    'Comprehensive Centralized Command Center for Society Administrators & Committee Members',
    [
      { h: 'Real-Time Campus Metrics', d: 'Visual KPI cards monitoring registered residential units, active residents, on-duty security staff, and monthly billing totals.' },
      { h: 'Live Gatehouse Traffic Feed', d: 'Streaming monitor of active gate entries, pending resident approvals, and recent checkouts with sub-second WebSocket synchronization.' },
      { h: 'Rapid Operational Shortcuts', d: '1-tap access to visitor registries, staff management, resident directory, maintenance ledger, and campus broadcast dispatches.' },
      { h: 'Multi-Tenant Scoping', d: 'Strict role-based isolation guarantees that committee members only view statistics belonging to their society complex.' }
    ],
    'actual_gatesync_dashboard_white.png',
    4
  );

  // ==========================================
  // SLIDE 5: GUARD DESK TERMINAL
  // ==========================================
  addScreenshotSlide(
    '04. Gatehouse Operations',
    'Guard Desk Terminal & Fast Visitor Ingress',
    'Optimized High-Speed Interface Designed for Rapid Tablet and Gatehouse Terminal Input',
    [
      { h: 'Swift Data Capture', d: 'Guards register visitor full name, mobile number, target flat unit, vehicle plate, and visit category in under 15 seconds.' },
      { h: 'Auto-Complete Resident Search', d: 'Instant dynamic lookup by flat number (e.g., A-101) or resident name eliminates manual telephone book lookups.' },
      { h: 'Instant Push Notification Dispatch', d: 'Submitting entry automatically dispatches a real-time STOMP WebSocket notification to the resident smartphone.' },
      { h: 'Live Entry Queue Feedback', d: 'Guards view real-time decision updates (Pending, Approved, Denied) directly on screen without leaving their post.' }
    ],
    'fresh_3_guard_desk.png',
    5
  );

  // ==========================================
  // SLIDE 6: RESIDENT LIVE ALERTING
  // ==========================================
  addScreenshotSlide(
    '05. Resident Verification',
    'Resident Real-Time Alert & 1-Tap Remote Approval',
    'Instant Push Notification Modal Connecting Gate Arrival Directly to Resident Smartphone',
    [
      { h: 'Interactive Alert Modal', d: 'Instantaneous pop-up modal appears on resident device with an audible arrival chime the moment guard logs the visitor.' },
      { h: 'Identity & Arrival Details', d: 'Presents visitor photo, full name, visit category, entry gate ID, and vehicle registration for complete transparency.' },
      { h: '1-Tap Binary Decision', d: 'Resident taps Approve Entry (Green) to open the barrier or Deny Entry (Red) with optional reason sent back to the guard.' },
      { h: 'Atomic Concurrency Guard', d: 'Server-side conflict protection (HTTP 409) prevents conflicting decisions if multiple family members open the alert.' }
    ],
    'fresh_fig_8_3_arrival_alert.png',
    6
  );

  // ==========================================
  // SLIDE 7: 1-TAP QUICK DELIVERY
  // ==========================================
  addScreenshotSlide(
    '06. Logistics Ingress',
    '1-Tap Fast Logistics & Delivery Clearance',
    'Eliminating Typing Bottlenecks for High-Volume E-Commerce Delivery Personnel',
    [
      { h: 'Dedicated Provider Presets', d: 'Instant 1-tap buttons for Swiggy, Zomato, Amazon, Blinkit, and Flipkart eliminate tedious keyboard entry.' },
      { h: 'Peak Delivery Ingress Speed', d: 'Reduces courier entry processing from 2 minutes down to under 5 seconds per delivery executive.' },
      { h: 'Doorstep vs Gate Delivery Rules', d: 'Residents specify whether parcels are pre-approved to the door or must be left at the gate security desk.' },
      { h: 'Tamper-Evident Courier Log', d: 'Automatically logs delivery company name, parcel target flat, timestamp, and guard badge ID in the database.' }
    ],
    'fresh_real_quick_delivery_modal.png',
    7
  );

  // ==========================================
  // SLIDE 8: PRE-APPROVED PASSES & QR
  // ==========================================
  addScreenshotSlide(
    '07. Guest Automation',
    'Pre-Approved Guest Passes & QR Code Scanner',
    'Self-Serve Digital Invitations with Fast Optical Camera Verification at the Gate',
    [
      { h: 'Resident Self-Service Creation', d: 'Residents generate guest entry passes in advance with customized valid-from and valid-until date/time windows.' },
      { h: 'Cryptographic 6-Digit OTP & QR', d: 'Each generated pass embeds a unique cryptographic 6-digit numeric token and scannable high-contrast QR code.' },
      { h: '1-Click WhatsApp Sharing', d: 'Pre-formatted invitation message with pass link and QR code is sent directly to guests via WhatsApp.' },
      { h: 'Optical Camera Scanner', d: 'Gatekeeper terminal scans guest QR or enters the 6-digit OTP for instant 2-second automated gate clearance.' }
    ],
    'fresh_pass_scanner_modal.png',
    8
  );

  // ==========================================
  // SLIDE 9: VISITOR REGISTRY & CHECKOUT
  // ==========================================
  addScreenshotSlide(
    '08. Security Governance',
    'Digital Visitor Registry & Historical Security Logs',
    'Complete Tamper-Proof Audit Trail of Campus Traffic, Parking & Checkout Timestamps',
    [
      { h: 'Comprehensive Live Registry', d: 'Filterable, searchable ledger tracking visitor name, contact number, vehicle plate, arrival gate, and host flat.' },
      { h: 'Real-Time Status Badges', d: 'Color-coded visual status tracking: INSIDE (currently on campus), CHECKED_OUT (departed), or REJECTED.' },
      { h: '1-Tap Gate Checkout', d: 'Guards log departure with a single tap, recording exact exit timestamps and calculating total stay duration.' },
      { h: 'Auditing & Police Incident Export', d: 'Historical logs are exportable for society committee reviews, incident investigations, or local authorities.' }
    ],
    'fresh_2_visitor_registry.png',
    9
  );

  // ==========================================
  // SLIDE 10: MAINTENANCE BILLING
  // ==========================================
  addScreenshotSlide(
    '09. Financial Governance',
    'Society Maintenance Billing & Accounting Ledger',
    'Automated Dues Calculation, Payment Status Tracking & Community Issue Helpdesk',
    [
      { h: 'Digital Dues Management', d: 'Maintains flat-wise monthly maintenance bills with itemized breakdowns for water, security, sinking funds, and parking.' },
      { h: 'Real-Time Payment Tracking', d: 'Instant visual classification of Paid, Pending, and Overdue flat accounts across all society blocks and wings.' },
      { h: 'Printable Itemized PDF Invoices', d: 'Residents and administrators can view and print professional digital PDF invoices with detailed transaction logs.' },
      { h: 'Community Helpdesk Integration', d: 'Integrated problem ticketing module allows residents to file repair tickets (plumbing, electrical) with real-time status.' }
    ],
    'fresh_3_maintenance_billing.png',
    10
  );

  // ==========================================
  // SLIDE 11: ZERO-TRUST SECURITY & OFFLINE
  // ==========================================
  {
    applyHeaderFooter('10. Security & Resilience', 'Zero-Trust Security & Offline PWA Architecture', 'Hardened Protection, Multi-Tenant Boundary Isolation, and Continuous Offline Operation', 11);

    const secBoxes = [
      {
        title: 'ZERO-TRUST JWT SECURITY',
        col: C.royalBlue,
        points: [
          '15-Minute rotating JWT access tokens kept in-memory (XSS immune).',
          'Secure HttpOnly SameSite=Strict cookies for refresh tokens.',
          'BCrypt salted password hashing with forced first-login password update.',
          'Strict Role-Based Access Control (RBAC): ADMIN, RESIDENT, and GUARD.'
        ]
      },
      {
        title: 'OFFLINE-FIRST PWA RESILIENCE',
        col: C.primaryNavy,
        points: [
          'Service Worker precaches assets for 100% offline application startup.',
          'Offline Transaction Queue stores visitor entries in LocalStorage.',
          'Automatic synchronization immediately when network reconnects.',
          'Segregated dual-database design: In-memory mapping + MongoDB Atlas.'
        ]
      },
      {
        title: 'AUDITING & EMERGENCY SOS',
        col: C.successGreen,
        points: [
          'Immutable audit logging capturing actor ID, IP address, and payload.',
          '2-Second deduplication key window prevents duplicate alert spam.',
          '100% multi-tenant data isolation ensures zero data leaks across societies.',
          'Emergency SOS trigger sounds immediate guard desk alarm and siren.'
        ]
      }
    ];

    let sX = 50;
    secBoxes.forEach(b => {
      doc.roundedRect(sX, 106, 266, 380, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
      doc.rect(sX, 106, 4, 380).fill(b.col);

      doc.font('Helvetica-Bold').fontSize(10.5).fillColor(b.col).text(b.title, sX + 18, 124);

      let pY = 160;
      b.points.forEach(pt => {
        doc.font('Helvetica-Bold').fontSize(9.5).fillColor(b.col).text('•', sX + 18, pY);
        doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(pt, sX + 30, pY, { width: 220, lineGap: 3 });
        pY += 68;
      });

      sX += 296;
    });
  }

  // ==========================================
  // SLIDE 12: THANK YOU & DELIVERABLES
  // ==========================================
  {
    doc.addPage({ size: [960, 540], margins: { top: 0, bottom: 0, left: 0, right: 0 } });
    doc.rect(0, 0, 960, 540).fill(C.bgLight);

    // Decorative top accent line
    doc.rect(0, 0, 960, 6).fill(C.royalBlue);

    // Thank You Title
    doc.font('Helvetica-Bold')
       .fontSize(38)
       .fillColor(C.primaryNavy)
       .text('THANK YOU', 60, 42);

    doc.font('Helvetica-Bold')
       .fontSize(14)
       .fillColor(C.royalBlue)
       .text('GateSync — Smart Society Security Platform  |  Evaluation & Discussion', 60, 90);

    // Live Deployment Card
    doc.roundedRect(60, 120, 840, 172, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(60, 120, 4, 172).fill(C.royalBlue);

    doc.font('Helvetica-Bold').fontSize(10.5).fillColor(C.royalBlue).text('LIVE DELIVERABLES & PRODUCTION CLOUD ENDPOINTS', 80, 134);

    const links = [
      { label: 'Live Progressive Web App (PWA):', url: 'https://arpitthakor28.github.io/sms1/' },
      { label: 'Live Cloud Backend API (Render):', url: 'https://sms1-c9sj.onrender.com' },
      { label: 'Cloud Nap Stopper / Health Check:', url: 'https://sms1-c9sj.onrender.com/api/health' },
      { label: 'GitHub Source Code Repository:', url: 'https://github.com/arpitthakor28/sms1' }
    ];

    let lY = 160;
    links.forEach(l => {
      doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.textDark).text(`•  ${l.label}`, 80, lY);
      doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.royalBlue).text(l.url, 330, lY);
      lY += 28;
    });

    // Student Credentials Card
    doc.roundedRect(60, 310, 840, 178, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(60, 310, 4, 178).fill(C.primaryNavy);

    // Left Column
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('PROJECT DEVELOPED BY', 85, 326);
    doc.font('Helvetica-Bold').fontSize(16).fillColor(C.textDark).text('ARPITSINH THAKOR', 85, 342);
    doc.font('Helvetica-Bold').fontSize(12).fillColor(C.royalBlue).text('Enrollment Number: 23SE02IE040', 85, 366);
    doc.font('Helvetica').fontSize(10.5).fillColor(C.textBody).text('B.Tech in Information Technology & Engineering', 85, 386);
    doc.font('Helvetica-Bold').fontSize(10.5).fillColor(C.successGreen).text('Technology Focus: Full Stack Development - Java', 85, 406);

    // Right Column
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('DEPARTMENT & INSTITUTION', 520, 326);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textDark).text('School of Engineering', 520, 342);
    doc.font('Helvetica').fontSize(10.5).fillColor(C.textBody).text('P. P. Savani University, Surat, Gujarat', 520, 360);
    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.royalBlue).text('Final Year Project  •  Academic Year 2026–2027', 520, 384);

    // Footer
    doc.font('Helvetica')
       .fontSize(8.5)
       .fillColor(C.textMuted)
       .text('GATESYNC • Smart Residential Security Platform  |  All Rights Reserved © 2026–2027', 60, 515);
  }

  doc.end();

  stream.on('finish', () => {
    console.log(`White Executive Presentation PDF generated successfully: ${outputPath}`);

    // Copy to Downloads, public, and docs
    const dlPath = 'c:\\Users\\ASUS\\Downloads\\GateSync_Project_Presentation.pdf';
    const pubPath = path.resolve('public/GateSync_Project_Presentation.pdf');
    const docsPath = path.resolve('docs/GateSync_Project_Presentation.pdf');

    try {
      fs.copyFileSync(outputPath, dlPath);
      console.log(`Copied presentation PDF to Downloads: ${dlPath}`);
    } catch (e) {
      console.warn('Could not copy to Downloads:', e.message);
    }

    try {
      fs.copyFileSync(outputPath, pubPath);
      fs.copyFileSync(outputPath, docsPath);
      console.log(`Copied presentation PDF to public/ and docs/`);
    } catch (e) {
      console.warn('Could not copy to web dirs:', e.message);
    }
  });
}

createWhiteExecutivePresentationPDF();
