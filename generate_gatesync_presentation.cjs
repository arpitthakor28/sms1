const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

async function createPresentation() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9'; // 10 x 5.625 inches
  pres.author = 'Arpitsinh Thakor (23SE02IE040)';
  pres.title = 'GATESYNC - Smart Residential Security & Visitor Management Platform';
  pres.company = 'School of Engineering, P. P. Savani University';

  // Cold temperature color palette (Matching Second PPT)
  const C = {
    bgDark: '0B132B',       // Deepest navy
    bgCard: '162238',       // Cold slate card background
    bgCardBorder: '243656', // Cool slate outline
    accentCyan: '38BDF8',   // Icy cyan highlight
    accentBlue: '0284C7',   // Cold vibrant sky blue
    accentEmerald: '10B981',// Mint confirmation
    accentPurple: 'A855F7', // Royal purple accent
    accentRed: 'EF4444',    // Danger / Problem red
    textWhite: 'FFFFFF',    // Crisp white
    textLight: 'CBD5E1',    // Cool silver text
    textMuted: '94A3B8',    // Slate gray
  };

  // Helper for slide common header and footer
  function applyColdSlideHeader(slide, category, title, subtitle, slideNum) {
    slide.background = { color: C.bgDark };

    // Top icy accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.06,
      fill: { color: C.accentBlue },
      line: { color: C.accentBlue, width: 0 }
    });

    // Category / Breadcrumb
    slide.addText(category.toUpperCase(), {
      x: 0.6, y: 0.28, w: 8.8, h: 0.22,
      fontSize: 9.5, fontFace: 'Calibri', color: C.accentCyan, bold: true
    });

    // Slide Title
    slide.addText(title, {
      x: 0.6, y: 0.5, w: 8.8, h: 0.42,
      fontSize: 20, fontFace: 'Calibri', color: C.textWhite, bold: true
    });

    // Slide Subtitle
    if (subtitle) {
      slide.addText(subtitle, {
        x: 0.6, y: 0.92, w: 8.8, h: 0.25,
        fontSize: 10.5, fontFace: 'Calibri', color: C.textMuted
      });
    }

    // Bottom subtle line & footer
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 5.2, w: 8.8, h: 0.01,
      fill: { color: C.bgCardBorder },
      line: { color: C.bgCardBorder, width: 0 }
    });

    slide.addText('GATESYNC • Smart Residential Security Platform  |  Arpitsinh Thakor (23SE02IE040)', {
      x: 0.6, y: 5.25, w: 6.5, h: 0.22,
      fontSize: 8.5, fontFace: 'Calibri', color: C.textMuted
    });

    slide.addText(`SCHOOL OF ENGINEERING  •  SLIDE ${slideNum} / 12`, {
      x: 7.2, y: 5.25, w: 2.2, h: 0.22,
      fontSize: 8.5, fontFace: 'Calibri', color: C.accentCyan, bold: true, align: 'right'
    });
  }

  // Helper function for Screenshot slides
  function addScreenshotSlide(cat, title, sub, bullets, imgName, slideNum) {
    const slide = pres.addSlide();
    applyColdSlideHeader(slide, cat, title, sub, slideNum);

    // Left Column: Features Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 4.15, h: 3.8,
      fill: { color: C.bgCard },
      line: { color: C.bgCardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 0.08, h: 3.8,
      fill: { color: C.accentCyan },
      line: { color: C.accentCyan, width: 0 }
    });

    slide.addText('CORE FUNCTIONALITY & WORKFLOW', {
      x: 0.85, y: 1.4, w: 3.75, h: 0.25,
      fontSize: 10.5, fontFace: 'Calibri', color: C.accentCyan, bold: true
    });

    let textRuns = [];
    bullets.forEach(b => {
      textRuns.push({ text: `• ${b.h}:\n`, options: { bold: true, color: C.textWhite } });
      textRuns.push({ text: `${b.d}\n\n`, options: { color: C.textLight } });
    });

    slide.addText(textRuns, {
      x: 0.85, y: 1.7, w: 3.75, h: 3.2,
      fontSize: 8.5, fontFace: 'Calibri'
    });

    // Right Column: Framed Screenshot
    slide.addShape(pres.ShapeType.rect, {
      x: 4.95, y: 1.25, w: 4.45, h: 3.8,
      fill: { color: C.bgCard },
      line: { color: C.accentBlue, width: 1 }
    });

    const imgPath = path.resolve('screenshots/' + imgName);
    if (fs.existsSync(imgPath)) {
      slide.addImage({ path: imgPath, x: 5.05, y: 1.4, w: 4.25, h: 3.5 });
    }
  }

  // ==========================================
  // SLIDE 1: COVER SLIDE
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };

    // Decorative icy top line
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.08,
      fill: { color: C.accentCyan },
      line: { color: C.accentCyan, width: 0 }
    });

    // Institutional Banner Badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 0.35, w: 5.0, h: 0.35,
      fill: { color: C.bgCard },
      line: { color: C.bgCardBorder, width: 1 }
    });
    slide.addText('P. P. SAVANI UNIVERSITY • SCHOOL OF ENGINEERING', {
      x: 0.75, y: 0.4, w: 4.7, h: 0.25,
      fontSize: 10, fontFace: 'Calibri', color: C.accentCyan, bold: true
    });

    // University Logo
    const logoPath = path.resolve('screenshots/ppsu_logo.png');
    if (fs.existsSync(logoPath)) {
      slide.addImage({ path: logoPath, x: 7.8, y: 0.3, w: 1.6, h: 0.65 });
    }

    // Main Project Name
    slide.addText('GATESYNC', {
      x: 0.6, y: 0.85, w: 8.8, h: 0.65,
      fontSize: 44, fontFace: 'Calibri', color: C.textWhite, bold: true
    });

    // Subtitle
    slide.addText('Smart Gated Community Security & Real-Time Visitor Management Platform', {
      x: 0.6, y: 1.48, w: 8.8, h: 0.3,
      fontSize: 15, fontFace: 'Calibri', color: C.accentCyan, bold: true
    });

    slide.addText('An enterprise-grade, offline-first Progressive Web Application (PWA) replacing legacy paper visitor registers with sub-150ms bidirectional STOMP WebSocket gatekeeper alerts, 1-tap logistics clearance, and cryptographic guest access.', {
      x: 0.6, y: 1.82, w: 8.8, h: 0.55,
      fontSize: 10, fontFace: 'Calibri', color: C.textLight
    });

    // Credentials Card Container
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 2.5, w: 8.8, h: 2.45,
      fill: { color: C.bgCard },
      line: { color: C.accentBlue, width: 1.5 }
    });

    // Details Inside Card: Left Column
    slide.addText([
      { text: 'DEVELOPED & PRESENTED BY:\n', options: { fontSize: 9, color: C.accentCyan, bold: true } },
      { text: 'ARPITSINH THAKOR\n\n', options: { fontSize: 16, color: C.textWhite, bold: true } },
      { text: 'ENROLLMENT NUMBER:\n', options: { fontSize: 9, color: C.accentCyan, bold: true } },
      { text: '23SE02IE040\n\n', options: { fontSize: 14, color: C.textWhite, bold: true } },
      { text: 'ACADEMIC PROGRAM:\n', options: { fontSize: 9, color: C.accentCyan, bold: true } },
      { text: 'B.Tech in Information Technology & Engineering\n', options: { fontSize: 11, color: C.textLight, bold: true } },
      { text: 'School of Engineering\n\n', options: { fontSize: 10, color: C.textMuted } },
      { text: 'TECHNOLOGY FOCUS:  ', options: { fontSize: 9, color: C.accentCyan, bold: true } },
      { text: 'Full Stack Development - Java', options: { fontSize: 11, color: C.accentEmerald, bold: true } }
    ], {
      x: 0.85, y: 2.65, w: 4.2, h: 2.15, fontFace: 'Calibri'
    });

    // Details Inside Card: Right Column
    slide.addText([
      { text: 'ACADEMIC INSTITUTION:\n', options: { fontSize: 9, color: C.accentCyan, bold: true } },
      { text: 'School of Engineering\n', options: { fontSize: 13, color: C.textWhite, bold: true } },
      { text: 'P. P. Savani University, Surat, Gujarat\n\n', options: { fontSize: 10, color: C.textLight } },
      { text: 'PROJECT CATEGORY:\n', options: { fontSize: 9, color: C.accentCyan, bold: true } },
      { text: 'Final Year Project\n\n', options: { fontSize: 14, color: C.textWhite, bold: true } },
      { text: 'ACADEMIC YEAR:\n', options: { fontSize: 9, color: C.accentCyan, bold: true } },
      { text: 'Academic Year 2026–2027\n', options: { fontSize: 13, color: C.accentCyan, bold: true } },
      { text: 'Major Project Presentation (AY 2026–2027)', options: { fontSize: 9.5, color: C.textMuted } }
    ], {
      x: 5.3, y: 2.65, w: 3.9, h: 2.15, fontFace: 'Calibri'
    });
  }

  // ==========================================
  // SLIDE 2: PROBLEM STATEMENT & MOTIVATION
  // ==========================================
  {
    const slide = pres.addSlide();
    applyColdSlideHeader(slide, '01. Background & Challenges', 'Problem Statement & Motivation', 'Why Traditional Physical Gatehouse Registers Fail in Modern Residential Societies', 2);

    // Left Column: The Problem (Legacy Systems)
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 4.25, h: 3.8,
      fill: { color: C.bgCard },
      line: { color: C.accentRed, width: 1.5 }
    });

    slide.addText('CRITICAL CHALLENGES IN PAPER LOGBOOKS', {
      x: 0.85, y: 1.4, w: 3.85, h: 0.28,
      fontSize: 11, fontFace: 'Calibri', color: 'F87171', bold: true
    });

    slide.addText([
      { text: '• Severe Gate Congestion: ', options: { bold: true, color: C.textWhite } },
      { text: 'Manual pen-and-paper logging causes 3–5 min entry delays per vehicle during rush hours.\n\n', options: { color: C.textLight } },
      { text: '• Privacy Leaks: ', options: { bold: true, color: C.textWhite } },
      { text: 'Resident flat numbers and visitor phone numbers sit exposed in open paper ledgers.\n\n', options: { color: C.textLight } },
      { text: '• No Real-Time Verification: ', options: { bold: true, color: C.textWhite } },
      { text: 'Guards rely on intercoms or phone calls that go unanswered, leading to unverified entry.\n\n', options: { color: C.textLight } },
      { text: '• E-Commerce Logistics Surges: ', options: { bold: true, color: C.textWhite } },
      { text: 'Frequent deliveries (Swiggy, Zomato, Amazon, Blinkit) overwhelm gatekeepers with repetitive typing.', options: { color: C.textLight } }
    ], {
      x: 0.85, y: 1.75, w: 3.85, h: 3.15,
      fontSize: 9, fontFace: 'Calibri'
    });

    // Right Column: The Solution (GateSync)
    slide.addShape(pres.ShapeType.rect, {
      x: 5.15, y: 1.25, w: 4.25, h: 3.8,
      fill: { color: C.bgCard },
      line: { color: C.accentCyan, width: 1.5 }
    });

    slide.addText('THE GATESYNC DIGITAL TRANSFORMATION', {
      x: 5.4, y: 1.4, w: 3.85, h: 0.28,
      fontSize: 11, fontFace: 'Calibri', color: C.accentCyan, bold: true
    });

    slide.addText([
      { text: '• Sub-150ms Instant Push Alerting: ', options: { bold: true, color: C.textWhite } },
      { text: 'Bidirectional STOMP WebSockets push arrival alerts straight to the resident mobile screen before visitor reaches barrier.\n\n', options: { color: C.textLight } },
      { text: '• 1-Tap Resident Remote Approvals: ', options: { bold: true, color: C.textWhite } },
      { text: 'Residents verify visitor identity with arrival photo and tap Approve or Deny from anywhere in the world.\n\n', options: { color: C.textLight } },
      { text: '• Pre-Approved QR & 6-Digit Passes: ', options: { bold: true, color: C.textWhite } },
      { text: 'Residents generate digital passes in advance for expected guests. Guards verify in 2 seconds via optical QR scanning.\n\n', options: { color: C.textLight } },
      { text: '• 1-Tap Logistics Partner Clearing: ', options: { bold: true, color: C.textWhite } },
      { text: 'Dedicated 1-tap fast ingress for Swiggy, Zomato, Amazon, and Blinkit completely eliminates typing bottlenecks.', options: { color: C.textLight } }
    ], {
      x: 5.4, y: 1.75, w: 3.85, h: 3.15,
      fontSize: 9, fontFace: 'Calibri'
    });
  }

  // ==========================================
  // SLIDE 3: SYSTEM ARCHITECTURE & TECH STACK
  // ==========================================
  {
    const slide = pres.addSlide();
    applyColdSlideHeader(slide, '02. Engineering Architecture', 'Full-Stack Architecture & Technology Stack', 'Robust Multi-Tier Cloud Architecture Built for Real-Time Responsiveness and Zero Data Loss', 3);

    const tiers = [
      { name: 'CLIENT PRESENTATION TIER (PWA)', col: C.accentCyan, tech: 'React 19 • Vite • Lucide Icons • STOMP over SockJS • Service Worker Precaching', desc: 'Installable Progressive Web App (PWA) with responsive layouts, offline transaction queue, and audible chime notifications.' },
      { name: 'BACKEND MICROSERVICE CORE (JAVA)', col: C.accentBlue, tech: 'Java 21 LTS • Spring Boot 3.3.4 • Spring Security 6 • JJWT • RESTful APIs', desc: 'Stateless multi-tenant controllers, WebSocket message broker (/topic and /user/queue), and atomic concurrency locks.' },
      { name: 'DUAL-DATABASE PERSISTENCE STRATEGY', col: C.accentEmerald, tech: 'MongoDB Atlas Cloud (Distributed NoSQL) + Relational Enterprise Mapping', desc: 'MongoDB Atlas stores high-throughput notifications, pre-approved passes, and audit trails; robust relational schemas for billing.' },
      { name: 'CLOUD DEPLOYMENT & CI/CD INFRASTRUCTURE', col: C.accentPurple, tech: 'Render Cloud (Dockerized Spring Boot Container) + GitHub Pages (Production PWA)', desc: 'Fully automated continuous deployment with sub-second health monitors (/api/health) and automated failovers.' }
    ];

    let tY = 1.25;
    tiers.forEach(t => {
      slide.addShape(pres.ShapeType.rect, {
        x: 0.6, y: tY, w: 5.5, h: 0.86,
        fill: { color: C.bgCard },
        line: { color: C.bgCardBorder, width: 1 }
      });

      slide.addText(t.name, {
        x: 0.8, y: tY + 0.08, w: 5.1, h: 0.2,
        fontSize: 9, fontFace: 'Calibri', color: t.col, bold: true
      });
      slide.addText(t.tech, {
        x: 0.8, y: tY + 0.28, w: 5.1, h: 0.22,
        fontSize: 10, fontFace: 'Calibri', color: C.textWhite, bold: true
      });
      slide.addText(t.desc, {
        x: 0.8, y: tY + 0.48, w: 5.1, h: 0.32,
        fontSize: 8.5, fontFace: 'Calibri', color: C.textLight
      });

      tY += 0.96;
    });

    // Right Column: Architectural Benchmarks
    slide.addShape(pres.ShapeType.rect, {
      x: 6.35, y: 1.25, w: 3.05, h: 3.8,
      fill: { color: C.bgCard },
      line: { color: C.accentCyan, width: 1.5 }
    });

    slide.addText('ARCHITECTURAL BENCHMARKS', {
      x: 6.55, y: 1.4, w: 2.65, h: 0.28,
      fontSize: 11, fontFace: 'Calibri', color: C.accentCyan, bold: true
    });

    const benchmarks = [
      { stat: '< 150 ms', desc: 'STOMP WebSocket Alert Latency' },
      { stat: '100 %', desc: 'Tenant Isolation per Society' },
      { stat: 'Zero Trust', desc: '15-min Rotating JWT Access Tokens' },
      { stat: 'Offline First', desc: 'Auto-syncing LocalStorage Queue' }
    ];

    let bY = 1.8;
    benchmarks.forEach(b => {
      slide.addText(b.stat, {
        x: 6.55, y: bY, w: 2.65, h: 0.38,
        fontSize: 20, fontFace: 'Calibri', color: C.textWhite, bold: true
      });
      slide.addText(b.desc, {
        x: 6.55, y: bY + 0.35, w: 2.65, h: 0.25,
        fontSize: 9.5, fontFace: 'Calibri', color: C.textLight
      });
      bY += 0.76;
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
    const slide = pres.addSlide();
    applyColdSlideHeader(slide, '10. Security & Resilience', 'Zero-Trust Security & Offline PWA Architecture', 'Hardened Protection, Multi-Tenant Boundary Isolation, and Continuous Offline Operation', 11);

    const secBoxes = [
      {
        title: 'ZERO-TRUST JWT SECURITY',
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
        col: C.accentEmerald,
        points: [
          'Immutable audit logging capturing actor ID, IP address, and payload.',
          '2-Second deduplication key window prevents duplicate alert spam.',
          '100% multi-tenant data isolation ensures zero data leaks across societies.',
          'Emergency SOS trigger sounds immediate guard desk alarm and siren.'
        ]
      }
    ];

    let sX = 0.6;
    secBoxes.forEach(b => {
      slide.addShape(pres.ShapeType.rect, {
        x: sX, y: 1.25, w: 2.75, h: 3.8,
        fill: { color: C.bgCard },
        line: { color: b.col, width: 1.5 }
      });

      slide.addText(b.title, {
        x: sX + 0.15, y: 1.4, w: 2.45, h: 0.25,
        fontSize: 10, fontFace: 'Calibri', color: b.col, bold: true
      });

      let pointRuns = [];
      b.points.forEach(pt => {
        pointRuns.push({ text: `• ${pt}\n\n`, options: { color: C.textLight } });
      });

      slide.addText(pointRuns, {
        x: sX + 0.15, y: 1.75, w: 2.45, h: 3.15,
        fontSize: 8.5, fontFace: 'Calibri'
      });

      sX += 3.05;
    });
  }

  // ==========================================
  // SLIDE 12: THANK YOU & DELIVERABLES
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };

    // Decorative top accent line
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.08,
      fill: { color: C.accentCyan },
      line: { color: C.accentCyan, width: 0 }
    });

    // Thank You Title
    slide.addText('THANK YOU', {
      x: 0.6, y: 0.45, w: 8.8, h: 0.7,
      fontSize: 44, fontFace: 'Calibri', color: C.textWhite, bold: true
    });

    slide.addText('GateSync — Smart Society Security Platform  |  Evaluation & Discussion', {
      x: 0.6, y: 1.15, w: 8.8, h: 0.3,
      fontSize: 14, fontFace: 'Calibri', color: C.accentCyan, bold: true
    });

    // Live Deployment Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.55, w: 8.8, h: 1.8,
      fill: { color: C.bgCard },
      line: { color: C.accentBlue, width: 1.5 }
    });

    slide.addText('LIVE DELIVERABLES & PRODUCTION CLOUD ENDPOINTS', {
      x: 0.85, y: 1.7, w: 8.3, h: 0.25,
      fontSize: 10.5, fontFace: 'Calibri', color: C.accentCyan, bold: true
    });

    slide.addText([
      { text: '•  Live Progressive Web App (PWA):  ', options: { bold: true, color: C.textWhite } },
      { text: 'https://arpitthakor28.github.io/sms1/  (Installable mobile/desktop frontend)\n', options: { color: C.accentCyan } },
      { text: '•  Live Cloud Backend API (Render):  ', options: { bold: true, color: C.textWhite } },
      { text: 'https://sms1-c9sj.onrender.com  (Spring Boot 3 + Java 21 container)\n', options: { color: C.accentCyan } },
      { text: '•  Cloud Nap Stopper / Health Check:  ', options: { bold: true, color: C.textWhite } },
      { text: 'https://sms1-c9sj.onrender.com/api/health  (Continuous uptime monitor)\n', options: { color: C.accentCyan } },
      { text: '•  GitHub Source Code Repository:  ', options: { bold: true, color: C.textWhite } },
      { text: 'https://github.com/arpitthakor28/sms1  (Full-stack source with reports & slides)', options: { color: C.accentCyan } }
    ], {
      x: 0.85, y: 2.05, w: 8.3, h: 1.15,
      fontSize: 9, fontFace: 'Calibri'
    });

    // Student Credentials Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 3.5, w: 8.8, h: 1.45,
      fill: { color: C.bgCard },
      line: { color: C.bgCardBorder, width: 1 }
    });

    slide.addText([
      { text: 'PROJECT DEVELOPED BY:\n', options: { fontSize: 9, color: C.accentCyan, bold: true } },
      { text: 'ARPITSINH THAKOR\n', options: { fontSize: 15, color: C.textWhite, bold: true } },
      { text: 'Enrollment Number: 23SE02IE040\n', options: { fontSize: 12, color: C.accentCyan, bold: true } },
      { text: 'B.Tech in Information Technology & Engineering\n', options: { fontSize: 10, color: C.textLight } },
      { text: 'Technology Focus: Full Stack Development - Java', options: { fontSize: 9.5, color: C.accentEmerald, bold: true } }
    ], {
      x: 0.85, y: 3.65, w: 4.4, h: 1.25, fontFace: 'Calibri'
    });

    slide.addText([
      { text: 'DEPARTMENT & INSTITUTION:\n', options: { fontSize: 9, color: C.accentCyan, bold: true } },
      { text: 'School of Engineering\n', options: { fontSize: 13, color: C.textWhite, bold: true } },
      { text: 'P. P. Savani University, Surat, Gujarat\n\n', options: { fontSize: 10, color: C.textLight } },
      { text: 'Final Year Project  •  Academic Year 2026–2027', options: { fontSize: 11, color: C.accentCyan, bold: true } }
    ], {
      x: 5.4, y: 3.65, w: 3.8, h: 1.25, fontFace: 'Calibri'
    });

    // Footer
    slide.addText('GATESYNC • Smart Residential Security Platform  |  All Rights Reserved © 2026–2027', {
      x: 0.6, y: 5.25, w: 8.8, h: 0.22,
      fontSize: 8.5, fontFace: 'Calibri', color: C.textMuted
    });
  }

  // Save the presentation
  const outputPath = path.resolve('GateSync_Project_Presentation.pptx');
  await pres.writeFile({ fileName: outputPath });
  console.log(`Presentation PPTX generated successfully: ${outputPath}`);

  // Copy to Downloads, public, and docs
  const dlPath = 'c:\\Users\\ASUS\\Downloads\\GateSync_Project_Presentation.pptx';
  const pubPath = path.resolve('public/GateSync_Project_Presentation.pptx');
  const docsPath = path.resolve('docs/GateSync_Project_Presentation.pptx');

  try {
    fs.copyFileSync(outputPath, dlPath);
    console.log(`Copied PPTX to Downloads: ${dlPath}`);
  } catch (e) {
    console.warn('Could not copy to Downloads:', e.message);
  }

  try {
    fs.copyFileSync(outputPath, pubPath);
    fs.copyFileSync(outputPath, docsPath);
    console.log(`Copied PPTX to public/ and docs/`);
  } catch (e) {
    console.warn('Could not copy to web dirs:', e.message);
  }
}

createPresentation().catch(err => {
  console.error('Error generating presentation:', err);
  process.exit(1);
});
