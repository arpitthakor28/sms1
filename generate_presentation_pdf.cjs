const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function createPresentationPDF() {
  const doc = new PDFDocument({
    size: [960, 540], // 16:9 Widescreen
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    autoFirstPage: false
  });

  const outputPath = path.resolve('GateSync_Project_Presentation.pdf');
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  // Cold temperature color palette (Matching Second PPT)
  const C = {
    bgDark: '#0B132B',       // Deepest slate navy
    bgCard: '#162238',       // Cold card background
    bgCardBorder: '#243656', // Crisp slate outline
    accentCyan: '#38BDF8',   // Icy cyan highlight
    accentBlue: '#0284C7',   // Cold sky blue
    accentEmerald: '#10B981',// Mint confirmation
    accentPurple: '#A855F7', // Royal purple accent
    accentRed: '#EF4444',    // Danger / Problem red
    textWhite: '#FFFFFF',    // Pure white
    textLight: '#CBD5E1',    // Cool silver text
    textMuted: '#94A3B8',    // Muted slate gray
  };

  // Helper for slide common header and footer
  function applyHeaderFooter(category, title, subtitle, slideNum) {
    doc.addPage({ size: [960, 540], margins: { top: 0, bottom: 0, left: 0, right: 0 } });

    // Solid background
    doc.rect(0, 0, 960, 540).fill(C.bgDark);

    // Top icy accent bar
    doc.rect(0, 0, 960, 5).fill(C.accentBlue);

    // Category / Tag
    doc.font('Helvetica-Bold')
       .fontSize(10)
       .fillColor(C.accentCyan)
       .text(category.toUpperCase(), 50, 32, { width: 860 });

    // Slide Title
    doc.font('Helvetica-Bold')
       .fontSize(21)
       .fillColor(C.textWhite)
       .text(title, 50, 48, { width: 860 });

    // Slide Subtitle
    if (subtitle) {
      doc.font('Helvetica')
         .fontSize(10.5)
         .fillColor(C.textMuted)
         .text(subtitle, 50, 76, { width: 860 });
    }

    // Bottom footer line
    doc.strokeColor(C.bgCardBorder)
       .lineWidth(1)
       .moveTo(50, 505)
       .lineTo(910, 505)
       .stroke();

    // Footer Text Left
    doc.font('Helvetica')
       .fontSize(9)
       .fillColor(C.textMuted)
       .text('GATESYNC • Smart Residential Security Platform  |  Arpitsinh Thakor (23SE02IE040)', 50, 514);

    // Footer Text Right
    doc.font('Helvetica-Bold')
       .fontSize(9)
       .fillColor(C.accentCyan)
       .text(`SCHOOL OF ENGINEERING  •  SLIDE ${slideNum} / 12`, 50, 514, { width: 860, align: 'right' });
  }

  // ==========================================
  // SLIDE 1: COVER SLIDE
  // ==========================================
  {
    doc.addPage({ size: [960, 540], margins: { top: 0, bottom: 0, left: 0, right: 0 } });
    doc.rect(0, 0, 960, 540).fill(C.bgDark);

    // Decorative icy accent line
    doc.rect(0, 0, 960, 8).fill(C.accentCyan);

    // Institution Badge
    doc.roundedRect(60, 42, 480, 32, 6)
       .fillAndStroke(C.bgCard, C.bgCardBorder);
    doc.font('Helvetica-Bold')
       .fontSize(10)
       .fillColor(C.accentCyan)
       .text('P. P. SAVANI UNIVERSITY • SCHOOL OF ENGINEERING', 75, 52);

    // University Logo
    const logoPath = path.resolve('screenshots/ppsu_logo.png');
    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, 760, 36, { width: 140, fit: [140, 70] });
    }

    // Main Title: GATESYNC
    doc.font('Helvetica-Bold')
       .fontSize(48)
       .fillColor(C.textWhite)
       .text('GATESYNC', 60, 96, { characterSpacing: 2 });

    // Subtitle
    doc.font('Helvetica-Bold')
       .fontSize(15)
       .fillColor(C.accentCyan)
       .text('Smart Gated Community Security & Real-Time Visitor Management Platform', 60, 156);

    // Brief Overview paragraph
    doc.font('Helvetica')
       .fontSize(11)
       .fillColor(C.textLight)
       .text('An enterprise-grade, offline-first Progressive Web Application (PWA) replacing legacy paper visitor registers with sub-150ms bidirectional STOMP WebSocket gatekeeper alerts, 1-tap logistics clearance, and cryptographic guest access.', 60, 188, { width: 840, lineGap: 4 });

    // Student Information Card
    doc.roundedRect(60, 252, 840, 218, 8)
       .lineWidth(1.5)
       .fillAndStroke(C.bgCard, C.accentBlue);

    // Inner Card Content: Left Column
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.accentCyan).text('DEVELOPED & PRESENTED BY:', 85, 272);
    doc.font('Helvetica-Bold').fontSize(16).fillColor(C.textWhite).text('ARPITSINH THAKOR', 85, 288);

    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.accentCyan).text('ENROLLMENT NUMBER:', 85, 324);
    doc.font('Helvetica-Bold').fontSize(14).fillColor(C.textWhite).text('23SE02IE040', 85, 340);

    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.accentCyan).text('ACADEMIC PROGRAM:', 85, 376);
    doc.font('Helvetica-Bold').fontSize(11.5).fillColor(C.textWhite).text('B.Tech in Information Technology & Engineering', 85, 392);
    doc.font('Helvetica').fontSize(10.5).fillColor(C.textLight).text('School of Engineering', 85, 410);

    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.accentCyan).text('TECHNOLOGY FOCUS:', 85, 432);
    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.accentEmerald).text('Full Stack Development - Java', 85, 446);

    // Inner Card Content: Right Column
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.accentCyan).text('ACADEMIC INSTITUTION:', 520, 272);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textWhite).text('School of Engineering', 520, 288);
    doc.font('Helvetica').fontSize(10.5).fillColor(C.textLight).text('P. P. Savani University, Surat, Gujarat, India', 520, 306);

    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.accentCyan).text('PROJECT CATEGORY:', 520, 342);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textWhite).text('Final Year Project', 520, 358);

    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.accentCyan).text('ACADEMIC YEAR:', 520, 394);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.accentCyan).text('Academic Year 2026–2027', 520, 410);
    doc.font('Helvetica').fontSize(10).fillColor(C.textMuted).text('Major Project Presentation (AY 2026–2027)', 520, 430);

    // Bottom slide footer
    doc.font('Helvetica')
       .fontSize(8.5)
       .fillColor(C.textMuted)
       .text('GateSync Production Platform  •  https://github.com/arpitthakor28/sms1', 60, 514);
  }

  // ==========================================
  // SLIDE 2: PROBLEM STATEMENT & MOTIVATION
  // ==========================================
  {
    applyHeaderFooter('01. Background & Challenges', 'Problem Statement & Motivation', 'Why Traditional Physical Gatehouse Registers Fail in Modern Residential Societies', 2);

    // Left Column: The Problem
    doc.roundedRect(50, 110, 415, 370, 8).lineWidth(1.5).fillAndStroke(C.bgCard, C.accentRed);
    doc.font('Helvetica-Bold').fontSize(11).fillColor('#F87171').text('CRITICAL LIMITATIONS OF PAPER LOGBOOKS', 70, 128);

    const problems = [
      { t: 'Severe Gate Queue Bottlenecks', d: 'Manual pen-and-paper logging consumes 3–5 minutes per entering vehicle, causing long congestion queues at society entry gates.' },
      { t: 'Privacy Vulnerabilities', d: 'Visitors write personal phone numbers and visiting flat numbers in an open book, easily viewed and photographed by any third party.' },
      { t: 'Unreliable Resident Verification', d: 'Guards must phone or intercom residents. Unanswered calls often lead to guards waving visitors in unverified.' },
      { t: 'E-Commerce Courier Overload', d: 'Modern high-frequency logistics (Swiggy, Zomato, Amazon, Blinkit) overwhelm gatekeepers with constant repetitive manual logging.' }
    ];

    let pY = 160;
    problems.forEach(p => {
      doc.font('Helvetica-Bold').fontSize(10.5).fillColor(C.textWhite).text(`• ${p.t}:`, 70, pY);
      doc.font('Helvetica').fontSize(9.5).fillColor(C.textLight).text(p.d, 70, pY + 14, { width: 375, lineGap: 3 });
      pY += 72;
    });

    // Right Column: The Solution
    doc.roundedRect(495, 110, 415, 370, 8).lineWidth(1.5).fillAndStroke(C.bgCard, C.accentCyan);
    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.accentCyan).text('THE GATESYNC DIGITAL TRANSFORMATION', 515, 128);

    const solutions = [
      { t: 'Sub-150ms Instant Push Alerting', d: 'Bidirectional STOMP WebSockets push arrival alerts straight to the resident mobile screen before the visitor reaches the barrier.' },
      { t: '1-Tap Resident Remote Approvals', d: 'Residents verify visitor identity with arrival photo and tap Approve or Deny from anywhere in the world.' },
      { t: 'Pre-Approved QR & 6-Digit Passes', d: 'Residents generate digital passes in advance for expected guests. Guards verify in 2 seconds via optical camera QR scanning.' },
      { t: '1-Tap Logistics Partner Clearing', d: 'Dedicated 1-tap fast ingress for Swiggy, Zomato, Amazon, and Blinkit completely eliminates typing bottlenecks.' }
    ];

    let sY = 160;
    solutions.forEach(s => {
      doc.font('Helvetica-Bold').fontSize(10.5).fillColor(C.textWhite).text(`• ${s.t}:`, 515, sY);
      doc.font('Helvetica').fontSize(9.5).fillColor(C.textLight).text(s.d, 515, sY + 14, { width: 375, lineGap: 3 });
      sY += 72;
    });
  }

  // ==========================================
  // SLIDE 3: SYSTEM ARCHITECTURE & TECH STACK
  // ==========================================
  {
    applyHeaderFooter('02. Engineering Architecture', 'Full-Stack Architecture & Technology Stack', 'Robust Multi-Tier Cloud Architecture Built for Real-Time Responsiveness and Zero Data Loss', 3);

    const tiers = [
      { name: 'CLIENT PRESENTATION TIER (PWA)', col: C.accentCyan, tech: 'React 19 • Vite • Lucide Icons • STOMP over SockJS • Service Worker Precaching', desc: 'Installable Progressive Web App (PWA) with responsive layouts, offline transaction queue, and audible chime notifications.' },
      { name: 'BACKEND MICROSERVICE CORE (JAVA)', col: C.accentBlue, tech: 'Java 21 LTS • Spring Boot 3.3.4 • Spring Security 6 • JJWT • RESTful APIs', desc: 'Stateless multi-tenant controllers, WebSocket message broker (/topic and /user/queue), and atomic concurrency locks.' },
      { name: 'DUAL-DATABASE PERSISTENCE STRATEGY', col: C.accentEmerald, tech: 'MongoDB Atlas Cloud (Distributed NoSQL) + Relational Enterprise Mapping', desc: 'MongoDB Atlas stores high-throughput notifications, pre-approved passes, and audit trails; robust relational schemas for billing.' },
      { name: 'CLOUD DEPLOYMENT & CI/CD INFRASTRUCTURE', col: C.accentPurple, tech: 'Render Cloud (Dockerized Spring Boot Container) + GitHub Pages (Production PWA)', desc: 'Fully automated continuous deployment with sub-second health monitors (/api/health) and automated failovers.' }
    ];

    let tY = 110;
    tiers.forEach(t => {
      doc.roundedRect(50, tY, 530, 84, 6).lineWidth(1).fillAndStroke(C.bgCard, C.bgCardBorder);
      doc.font('Helvetica-Bold').fontSize(9.5).fillColor(t.col).text(t.name, 65, tY + 10);
      doc.font('Helvetica-Bold').fontSize(10.5).fillColor(C.textWhite).text(t.tech, 65, tY + 26);
      doc.font('Helvetica').fontSize(9).fillColor(C.textLight).text(t.desc, 65, tY + 44, { width: 500, lineGap: 2 });
      tY += 94;
    });

    // Right Column: Key Architectural Benchmarks Box
    doc.roundedRect(600, 110, 310, 370, 8).lineWidth(1.5).fillAndStroke(C.bgCard, C.accentCyan);
    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.accentCyan).text('ARCHITECTURAL BENCHMARKS', 620, 128);

    const benchmarks = [
      { stat: '< 150 ms', desc: 'STOMP WebSocket Alert Latency' },
      { stat: '100 %', desc: 'Tenant Isolation per Society' },
      { stat: 'Zero Trust', desc: '15-min Rotating JWT Access Tokens' },
      { stat: 'Offline First', desc: 'Auto-syncing LocalStorage Queue' }
    ];

    let bY = 165;
    benchmarks.forEach(b => {
      doc.font('Helvetica-Bold').fontSize(22).fillColor(C.textWhite).text(b.stat, 620, bY);
      doc.font('Helvetica').fontSize(10).fillColor(C.textLight).text(b.desc, 620, bY + 28);
      bY += 75;
    });
  }

  // Helper function for Screenshot slides
  function addScreenshotSlide(cat, title, sub, bullets, imgName, slideNum) {
    applyHeaderFooter(cat, title, sub, slideNum);

    // Left Column: Text & Features
    doc.roundedRect(50, 110, 420, 370, 8).lineWidth(1).fillAndStroke(C.bgCard, C.bgCardBorder);
    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.accentCyan).text('CORE FUNCTIONALITY & WORKFLOW', 70, 128);

    let bY = 160;
    bullets.forEach(b => {
      doc.font('Helvetica-Bold').fontSize(10.5).fillColor(C.textWhite).text(`• ${b.h}:`, 70, bY);
      doc.font('Helvetica').fontSize(9.5).fillColor(C.textLight).text(b.d, 70, bY + 14, { width: 380, lineGap: 3 });
      bY += 70;
    });

    // Right Column: Framed Screenshot
    doc.roundedRect(490, 110, 420, 370, 8).lineWidth(1.5).fillAndStroke(C.bgCard, C.accentBlue);

    const imgPath = path.resolve('screenshots/' + imgName);
    if (fs.existsSync(imgPath)) {
      doc.image(imgPath, 500, 120, { width: 400, height: 350, fit: [400, 350], align: 'center', valign: 'center' });
    }
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
      { h: 'Multi-Tenant Scoping', d: 'Strict role-based isolation guarantees that committee members only view statistics belonging to their society.' }
    ],
    'actual_gatesync_dashboard_dark.png',
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
        icon: 'SHIELD',
        col: C.accentCyan,
        points: [
          '15-Minute rotating JWT access tokens kept in-memory (XSS immune).',
          'Secure HttpOnly SameSite=Strict cookies for refresh tokens.',
          'BCrypt salted password hashing with forced first-login password update.',
          'Strict Role-Based Access Control (RBAC): ADMIN, RESIDENT, and GUARD.'
        ]
      },
      {
        title: 'OFFLINE-FIRST PWA RESILIENCE',
        icon: 'LIGHTNING',
        col: C.accentBlue,
        points: [
          'Service Worker precaches assets for 100% offline application startup.',
          'Offline Transaction Queue stores visitor entries in LocalStorage.',
          'Automatic synchronization immediately when network reconnects.',
          'Segregated dual-database design: In-memory mapping + MongoDB Atlas.'
        ]
      },
      {
        title: 'AUDITING & EMERGENCY SOS',
        icon: 'ALERT',
        col: C.accentEmerald,
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
      doc.roundedRect(sX, 110, 266, 370, 8).lineWidth(1.5).fillAndStroke(C.bgCard, b.col);
      doc.font('Helvetica-Bold').fontSize(10.5).fillColor(b.col).text(b.title, sX + 15, 128);

      let pY = 165;
      b.points.forEach(pt => {
        doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.textWhite).text('•', sX + 15, pY);
        doc.font('Helvetica').fontSize(9).fillColor(C.textLight).text(pt, sX + 28, pY, { width: 220, lineGap: 3 });
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
    doc.rect(0, 0, 960, 540).fill(C.bgDark);

    // Decorative top accent line
    doc.rect(0, 0, 960, 8).fill(C.accentCyan);

    // Thank You Title
    doc.font('Helvetica-Bold')
       .fontSize(46)
       .fillColor(C.textWhite)
       .text('THANK YOU', 60, 48, { characterSpacing: 2 });

    doc.font('Helvetica-Bold')
       .fontSize(15)
       .fillColor(C.accentCyan)
       .text('GateSync — Smart Society Security Platform  |  Evaluation & Discussion', 60, 110);

    // Live Deployment Card
    doc.roundedRect(60, 142, 840, 185, 8).lineWidth(1.5).fillAndStroke(C.bgCard, C.accentBlue);
    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.accentCyan).text('LIVE DELIVERABLES & PRODUCTION CLOUD ENDPOINTS', 85, 160);

    const links = [
      { label: 'Live Progressive Web App (PWA):', url: 'https://arpitthakor28.github.io/sms1/', note: 'Installable mobile/desktop frontend' },
      { label: 'Live Cloud Backend API (Render):', url: 'https://sms1-c9sj.onrender.com', note: 'Spring Boot 3 + Java 21 container' },
      { label: 'Cloud Nap Stopper / Health Check:', url: 'https://sms1-c9sj.onrender.com/api/health', note: 'Continuous uptime monitor' },
      { label: 'GitHub Source Code Repository:', url: 'https://github.com/arpitthakor28/sms1', note: 'Full-stack source with reports & slides' }
    ];

    let lY = 186;
    links.forEach(l => {
      doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.textWhite).text(`• ${l.label}`, 85, lY);
      doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.accentCyan).text(l.url, 330, lY);
      doc.font('Helvetica').fontSize(8.5).fillColor(C.textMuted).text(`(${l.note})`, 670, lY);
      lY += 30;
    });

    // Student Credentials Card
    doc.roundedRect(60, 345, 840, 140, 8).lineWidth(1).fillAndStroke(C.bgCard, C.bgCardBorder);

    // Left Column
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.accentCyan).text('PROJECT DEVELOPED BY:', 85, 362);
    doc.font('Helvetica-Bold').fontSize(15).fillColor(C.textWhite).text('ARPITSINH THAKOR', 85, 378);
    doc.font('Helvetica-Bold').fontSize(12).fillColor(C.accentCyan).text('Enrollment Number: 23SE02IE040', 85, 400);
    doc.font('Helvetica').fontSize(10.5).fillColor(C.textLight).text('B.Tech in Information Technology & Engineering', 85, 420);
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.accentEmerald).text('Technology Focus: Full Stack Development - Java', 85, 438);

    // Right Column
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.accentCyan).text('DEPARTMENT & INSTITUTION:', 520, 362);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textWhite).text('School of Engineering', 520, 378);
    doc.font('Helvetica').fontSize(10.5).fillColor(C.textLight).text('P. P. Savani University, Surat, Gujarat', 520, 396);
    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.accentCyan).text('Final Year Project  •  Academic Year 2026–2027', 520, 420);

    // Footer
    doc.font('Helvetica')
       .fontSize(8.5)
       .fillColor(C.textMuted)
       .text('GATESYNC • Smart Residential Security Platform  |  All Rights Reserved © 2026–2027', 60, 514);
  }

  doc.end();

  stream.on('finish', () => {
    console.log(`Presentation PDF generated successfully: ${outputPath}`);

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

createPresentationPDF();
