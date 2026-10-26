const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

async function createHumanStylePPTX() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9'; // 10 x 5.625 inches
  pres.author = 'Arpitsinh Thakor (23SE02IE040)';
  pres.title = 'GATESYNC - Smart Residential Security & Visitor Management System';
  pres.company = 'P. P. Savani University';

  // Professional Human Executive Light Theme Colors (Hex without # for pptxgenjs)
  const C = {
    bgLight: 'F8FAFC',      // Off-white background
    cardBg: 'FFFFFF',       // Pure white card
    cardBorder: 'E2E8F0',   // Light border
    primaryNavy: '0F2942',  // Deep corporate navy
    royalBlue: '1E40AF',    // Academic royal blue
    accentBlue: '0284C7',   // Tech blue
    badgeBg: 'EFF6FF',      // Soft blue pill
    badgeBorder: 'BFDBFE',  // Light blue border
    textDark: '0F172A',     // Charcoal heading
    textBody: '334155',     // Slate gray body
    textMuted: '64748B',    // Muted gray
    alertRed: 'DC2626',     // Clean red
    successGreen: '16A34A'  // Clean green
  };

  function applyHeaderFooter(slide, category, title, subtitle, slideNum) {
    slide.background = { color: C.bgLight };

    // Top accent bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.06,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    // Category Tag
    slide.addText(category.toUpperCase(), {
      x: 0.6, y: 0.28, w: 6.0, h: 0.22,
      fontSize: 9, fontFace: 'Calibri', color: C.royalBlue, bold: true
    });

    // Slide Title
    slide.addText(title, {
      x: 0.6, y: 0.52, w: 8.8, h: 0.38,
      fontSize: 18, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });

    // Subtitle
    if (subtitle) {
      slide.addText(subtitle, {
        x: 0.6, y: 0.9, w: 8.8, h: 0.22,
        fontSize: 10, fontFace: 'Calibri', color: C.textMuted
      });
    }

    // Divider line under header
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.15, w: 8.8, h: 0.01,
      fill: { color: C.cardBorder },
      line: { color: C.cardBorder, width: 0 }
    });

    // Footer divider line
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 5.2, w: 8.8, h: 0.01,
      fill: { color: C.cardBorder },
      line: { color: C.cardBorder, width: 0 }
    });

    // Footer text
    slide.addText('GateSync — Smart Society Security System  |  Arpitsinh Thakor (23SE02IE040)', {
      x: 0.6, y: 5.25, w: 6.5, h: 0.22,
      fontSize: 8.5, fontFace: 'Calibri', color: C.textMuted
    });

    slide.addText(`P. P. SAVANI UNIVERSITY  •  SLIDE ${slideNum} / 12`, {
      x: 7.2, y: 5.25, w: 2.2, h: 0.22,
      fontSize: 8.5, fontFace: 'Calibri', color: C.royalBlue, bold: true, align: 'right'
    });
  }

  // ==========================================
  // SLIDE 1: COVER SLIDE
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgLight };

    // Top Blue Accent Bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.08,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    // University Badge
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 0.35, w: 4.8, h: 0.32,
      fill: { color: C.badgeBg },
      line: { color: C.badgeBorder, width: 1 }
    });
    slide.addText('P. P. SAVANI UNIVERSITY  •  SCHOOL OF ENGINEERING', {
      x: 0.75, y: 0.42, w: 4.5, h: 0.2,
      fontSize: 9.5, fontFace: 'Calibri', color: C.royalBlue, bold: true
    });

    // University Logo
    const logoPath = path.resolve('screenshots/ppsu_logo.png');
    if (fs.existsSync(logoPath)) {
      slide.addImage({
        path: logoPath,
        x: 7.6, y: 0.35, w: 1.6, h: 0.75,
        sizing: { type: 'contain', w: 1.6, h: 0.75 }
      });
    }

    // Title & Subtitle
    slide.addText('GATESYNC', {
      x: 0.6, y: 0.85, w: 8.8, h: 0.7,
      fontSize: 40, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });

    slide.addText('Smart Residential Society Security & Real-Time Visitor Management System', {
      x: 0.6, y: 1.55, w: 8.8, h: 0.35,
      fontSize: 14, fontFace: 'Calibri', color: C.royalBlue, bold: true
    });

    slide.addText('A full-stack, installable Progressive Web Application (PWA) designed for modern gated housing societies. It replaces physical paper logbooks with instant mobile push notifications for residents, 1-tap courier clearance, pre-approved QR guest passes, and society maintenance accounting.', {
      x: 0.6, y: 1.95, w: 8.8, h: 0.55,
      fontSize: 10.5, fontFace: 'Calibri', color: C.textBody, lineSpacing: 16
    });

    // Student Credentials Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 2.7, w: 8.8, h: 2.2,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    // Left Accent Bar on Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 2.7, w: 0.08, h: 2.2,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    // Left Details
    slide.addText([
      { text: 'STUDENT NAME\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'ARPITSINH THAKOR\n\n', options: { fontSize: 15, color: C.textDark, bold: true } },
      { text: 'ENROLLMENT NUMBER\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: '23SE02IE040\n\n', options: { fontSize: 14, color: C.royalBlue, bold: true } },
      { text: 'DEGREE & DEPARTMENT\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'B.Tech in Information Technology & Engineering\nDepartment of Information Technology, SOE', options: { fontSize: 10.5, color: C.textBody } }
    ], {
      x: 0.9, y: 2.85, w: 4.4, h: 1.9, fontFace: 'Calibri'
    });

    // Right Details
    slide.addText([
      { text: 'INSTITUTION\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'P. P. Savani University\n', options: { fontSize: 12, color: C.textDark, bold: true } },
      { text: 'NH 8, GETCO, Near Bilitha, Dhamdod, Kosamba, Gujarat 394125\n\n', options: { fontSize: 9.5, color: C.textBody } },
      { text: 'PROJECT TYPE & ACADEMIC YEAR\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'Final Year Capstone Engineering Project  |  2025–2026\n\n', options: { fontSize: 11, color: C.textDark, bold: true } },
      { text: 'TECHNOLOGY STACK\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'React 19 PWA, Java 21 Spring Boot 3, MongoDB Atlas Cloud, STOMP WebSockets', options: { fontSize: 9.5, color: C.textBody } }
    ], {
      x: 5.4, y: 2.85, w: 3.8, h: 1.9, fontFace: 'Calibri'
    });
  }

  // ==========================================
  // SLIDE 2: INTRODUCTION & PROBLEM STATEMENT
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, '01. Background & Context', 'Introduction & Motivation', 'Why Gated Communities Need a Modern Digital Gate Security System', 2);

    // Left Column: The Problem
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.35, w: 4.25, h: 3.65,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.35, w: 0.06, h: 3.65,
      fill: { color: C.alertRed },
      line: { color: C.alertRed, width: 0 }
    });

    slide.addText('TRADITIONAL PAPER REGISTER PROBLEMS', {
      x: 0.8, y: 1.5, w: 3.85, h: 0.25,
      fontSize: 10.5, fontFace: 'Calibri', color: C.alertRed, bold: true
    });

    slide.addText([
      { text: '• Long Gate Queues at Peak Hours\n', options: { bold: true, color: C.textDark } },
      { text: 'Guards manually write down visitor names, phone numbers, and flat numbers in a physical book. Each car takes 2–4 minutes, causing entry traffic.\n\n', options: { color: C.textBody } },
      { text: '• Zero Privacy for Residents & Visitors\n', options: { bold: true, color: C.textDark } },
      { text: 'The paper logbook sits open at the security cabin. Anyone standing at the gate can read or photograph resident phone numbers and visiting flats.\n\n', options: { color: C.textBody } },
      { text: '• Unanswered Intercoms & Calls\n', options: { bold: true, color: C.textDark } },
      { text: 'Guards frequently call residents on intercom or phone to verify visitors. When calls are missed, guards let visitors in unverified.\n\n', options: { color: C.textBody } },
      { text: '• E-Commerce Logistics Overload\n', options: { bold: true, color: C.textDark } },
      { text: 'High volumes of daily couriers (Swiggy, Zomato, Amazon, Blinkit) create excessive manual typing overhead for gatekeepers.', options: { color: C.textBody } }
    ], {
      x: 0.8, y: 1.85, w: 3.85, h: 3.0,
      fontSize: 9.5, fontFace: 'Calibri', lineSpacing: 14
    });

    // Right Column: The Solution
    slide.addShape(pres.ShapeType.rect, {
      x: 5.15, y: 1.35, w: 4.25, h: 3.65,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 5.15, y: 1.35, w: 0.06, h: 3.65,
      fill: { color: C.successGreen },
      line: { color: C.successGreen, width: 0 }
    });

    slide.addText('THE GATESYNC DIGITAL SOLUTION', {
      x: 5.35, y: 1.5, w: 3.85, h: 0.25,
      fontSize: 10.5, fontFace: 'Calibri', color: C.successGreen, bold: true
    });

    slide.addText([
      { text: '• Instant Mobile Push Alerts (< 150ms)\n', options: { bold: true, color: C.textDark } },
      { text: 'When a visitor arrives, the guard enters details and an instant pop-up alert appears on the resident phone with visitor info and photo.\n\n', options: { color: C.textBody } },
      { text: '• 1-Tap Resident Remote Approvals\n', options: { bold: true, color: C.textDark } },
      { text: 'Residents simply tap Approve or Deny from their smartphone anywhere (at home, office, or travelling) without phone calls.\n\n', options: { color: C.textBody } },
      { text: '• Pre-Approved Guest Passes with QR Code\n', options: { bold: true, color: C.textDark } },
      { text: 'Residents create guest passes beforehand for friends or family. Guests show their QR code or 6-digit OTP for 2-second fast clearance.\n\n', options: { color: C.textBody } },
      { text: '• 1-Tap Fast Delivery Partner Entry\n', options: { bold: true, color: C.textDark } },
      { text: 'One-click buttons for Swiggy, Zomato, Amazon, and Blinkit allow guards to clear couriers without typing names manually.', options: { color: C.textBody } }
    ], {
      x: 5.35, y: 1.85, w: 3.85, h: 3.0,
      fontSize: 9.5, fontFace: 'Calibri', lineSpacing: 14
    });
  }

  // ==========================================
  // SLIDE 3: SYSTEM ARCHITECTURE & TECH STACK
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, '02. System Architecture', 'System Architecture & Technologies Used', 'Full-Stack Web & Mobile Architecture Built for Reliability, Speed and Security', 3);

    const techTiers = [
      {
        title: 'FRONTEND CLIENT TIER (Progressive Web App)',
        tech: 'React 19, Vite, Lucide Icons, STOMP over SockJS, Service Worker',
        desc: 'Responsive, mobile-friendly interface installable on Android and iOS. Includes client-side offline queueing to store entries if the gate internet is down.',
        col: C.royalBlue
      },
      {
        title: 'BACKEND APPLICATION TIER (REST & WebSocket Server)',
        tech: 'Java 21 LTS, Spring Boot 3.3.4, Spring Security 6, JJWT',
        desc: 'Stateless microservice handling user authentication, role-based access control, WebSocket message broker (/topic and /user/queue), and transactional business logic.',
        col: C.primaryNavy
      },
      {
        title: 'DATABASE & PERSISTENCE TIER',
        tech: 'MongoDB Atlas (Cloud NoSQL) & H2 In-Memory Relational Engine',
        desc: 'MongoDB Atlas persistently stores visitor logs, device push tokens, guest passes, and audit trails. In-memory relational mapping is used for fast user lookup.',
        col: C.accentBlue
      },
      {
        title: 'CLOUD HOSTING & DEPLOYMENT',
        tech: 'Render Cloud (Dockerized Spring Boot) & GitHub Pages (PWA Hosting)',
        desc: 'Containerized production backend deployed on Render with automated health check (/api/health) and static frontend deployed on GitHub Pages.',
        col: C.successGreen
      }
    ];

    let tY = 1.35;
    techTiers.forEach(t => {
      slide.addShape(pres.ShapeType.rect, {
        x: 0.6, y: tY, w: 8.8, h: 0.82,
        fill: { color: C.cardBg },
        line: { color: C.cardBorder, width: 1 }
      });
      slide.addShape(pres.ShapeType.rect, {
        x: 0.6, y: tY, w: 0.06, h: 0.82,
        fill: { color: t.col },
        line: { color: t.col, width: 0 }
      });

      slide.addText(t.title, {
        x: 0.8, y: tY + 0.08, w: 8.4, h: 0.2,
        fontSize: 9.5, fontFace: 'Calibri', color: t.col, bold: true
      });

      slide.addText(t.tech, {
        x: 0.8, y: tY + 0.28, w: 8.4, h: 0.22,
        fontSize: 10.5, fontFace: 'Calibri', color: C.textDark, bold: true
      });

      slide.addText(t.desc, {
        x: 0.8, y: tY + 0.5, w: 8.4, h: 0.25,
        fontSize: 9, fontFace: 'Calibri', color: C.textBody
      });

      tY += 0.92;
    });
  }

  // Helper for Screenshot Feature Slides
  function addFeatureSlide(slide, category, title, subtitle, bullets, imgName, slideNum) {
    applyHeaderFooter(slide, category, title, subtitle, slideNum);

    // Left Column: Features Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.35, w: 4.3, h: 3.65,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.35, w: 0.06, h: 3.65,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    slide.addText('KEY FEATURES & USER WORKFLOW', {
      x: 0.8, y: 1.5, w: 3.9, h: 0.25,
      fontSize: 10.5, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });

    const textRuns = [];
    bullets.forEach(b => {
      textRuns.push({ text: `•  ${b.h}\n`, options: { bold: true, color: C.textDark } });
      textRuns.push({ text: `${b.d}\n\n`, options: { color: C.textBody } });
    });

    slide.addText(textRuns, {
      x: 0.8, y: 1.85, w: 3.9, h: 3.0,
      fontSize: 9.5, fontFace: 'Calibri', lineSpacing: 14
    });

    // Right Column: Image Container
    slide.addShape(pres.ShapeType.rect, {
      x: 5.1, y: 1.35, w: 4.3, h: 3.65,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });

    const imgPath = path.resolve('screenshots/' + imgName);
    if (fs.existsSync(imgPath)) {
      slide.addImage({
        path: imgPath,
        x: 5.2, y: 1.45, w: 4.1, h: 3.45,
        sizing: { type: 'contain', w: 4.1, h: 3.45 }
      });
    }
  }

  // ==========================================
  // SLIDE 4: ADMIN DASHBOARD
  // ==========================================
  {
    const slide = pres.addSlide();
    addFeatureSlide(
      slide,
      '03. Admin Portal',
      'Society Admin Dashboard & Live Overview',
      'Centralized Web Portal for Society Office Bearers and Committee Members',
      [
        { h: 'Real-Time Society Statistics', d: 'Displays overall counts of flats (128), residents (342), active security guards, and total visitor traffic for the day.' },
        { h: 'Live Gate Traffic Feed', d: 'Shows visitors currently inside the society, pending gate approvals, and recent checkouts with instant live updates.' },
        { h: 'Quick Access Actions', d: 'One-click shortcuts to add/edit residents, manage security personnel, issue circulars, and review maintenance fees.' },
        { h: 'Secure Role Separation', d: 'Admins have full oversight but sensitive resident passwords are encrypted and individual privacy is strictly preserved.' }
      ],
      'fresh_1_dashboard.png',
      4
    );
  }

  // ==========================================
  // SLIDE 5: GUARD DESK TERMINAL
  // ==========================================
  {
    const slide = pres.addSlide();
    addFeatureSlide(
      slide,
      '04. Gatehouse Ingress',
      'Guard Terminal: Fast Visitor Registration',
      'Simple, Touch-Friendly Interface Designed for Security Guards on Tablets and Phones',
      [
        { h: 'Quick 15-Second Registration', d: 'Guard enters the visitor full name, mobile number, flat number, visit purpose, and vehicle registration number.' },
        { h: 'Fast Auto-Complete Flat Search', d: 'Guard types flat number (e.g., A-101) and the resident details appear instantly without looking up phone numbers.' },
        { h: 'Instant Push to Resident Mobile', d: 'Clicking Send Entry Request pushes the visitor notification directly to the resident phone over WebSockets.' },
        { h: 'On-Screen Status Tracking', d: 'The guard screen shows status badges: Waiting for Approval, Approved (Green), or Denied (Red) in real-time.' }
      ],
      'fresh_3_guard_desk.png',
      5
    );
  }

  // ==========================================
  // SLIDE 6: RESIDENT LIVE ALERTING
  // ==========================================
  {
    const slide = pres.addSlide();
    addFeatureSlide(
      slide,
      '05. Resident Verification',
      'Resident Real-Time Alert & 1-Tap Approval',
      'Instant Pop-Up Alert on Resident Smartphone for Fast Remote Entry Decisions',
      [
        { h: 'Automatic Screen Pop-Up Modal', d: 'When the guard logs a visitor, a clean modal immediately pops up on the resident screen accompanied by an alert chime.' },
        { h: 'Complete Visitor Information', d: 'Shows the visitor photo, full name, visit reason, vehicle number, and gate location for clear identification.' },
        { h: '1-Tap Binary Decision', d: 'Resident taps the Green Approve Entry button or Red Deny Entry button. A reason can be added if denying entry.' },
        { h: 'Prevents Conflicting Decisions', d: 'If two residents in the same flat view the alert, the first response is recorded and prevents double-approvals.' }
      ],
      'fresh_fig_8_3_arrival_alert.png',
      6
    );
  }

  // ==========================================
  // SLIDE 7: 1-TAP QUICK DELIVERY
  // ==========================================
  {
    const slide = pres.addSlide();
    addFeatureSlide(
      slide,
      '06. Delivery Automation',
      '1-Tap Fast Delivery & Courier Clearance',
      'Fast-Track Entry for Popular Logistics and Food Delivery Couriers',
      [
        { h: 'One-Tap Delivery Brand Buttons', d: 'Dedicated buttons for Swiggy, Zomato, Amazon, Blinkit, and Flipkart allow guards to clear couriers without typing.' },
        { h: 'Reduces Gate Bottlenecks', d: 'Cuts courier entry processing from 2 minutes down to under 5 seconds during busy lunch and dinner hours.' },
        { h: 'Doorstep vs Gate Delivery Options', d: 'Residents can instruct whether the delivery person is permitted to come upstairs or leave the parcel at the gate.' },
        { h: 'Searchable Delivery Records', d: 'Every courier entry is logged with provider name, target flat, and timestamp for parcel tracking.' }
      ],
      'fresh_real_quick_delivery_modal.png',
      7
    );
  }

  // ==========================================
  // SLIDE 8: PRE-APPROVED GUEST PASSES & QR
  // ==========================================
  {
    const slide = pres.addSlide();
    addFeatureSlide(
      slide,
      '07. Guest Passes',
      'Pre-Approved Digital Passes & QR Code Scanner',
      'Hassle-Free Entry for Family, Friends, Parties, and Expected Service Workers',
      [
        { h: 'Residents Create Passes in Advance', d: 'Residents enter guest details and pick valid dates/times (e.g., valid today from 5:00 PM to 10:00 PM).' },
        { h: 'Generates 6-Digit Code & QR Code', d: 'A secure 6-digit numeric pass code and scannable QR code are automatically generated for the guest.' },
        { h: '1-Click WhatsApp Sharing', d: 'Resident can directly share the invite message with the QR code and entry link to their guest via WhatsApp.' },
        { h: 'Camera QR Scan at Gatehouse', d: 'Guard scans the guest QR code with the tablet camera or enters the 6-digit code for instant 2-second entry.' }
      ],
      'fresh_pass_scanner_modal.png',
      8
    );
  }

  // ==========================================
  // SLIDE 9: VISITOR REGISTRY & CHECKOUT
  // ==========================================
  {
    const slide = pres.addSlide();
    addFeatureSlide(
      slide,
      '08. Visitor Records',
      'Digital Visitor Registry & Historical Gate Logs',
      'Searchable Digital Ledger of Every Person Entering and Leaving the Campus',
      [
        { h: 'Complete Real-Time Gate Registry', d: 'Searchable table showing visitor names, mobile numbers, vehicle numbers, entry time, and visiting flat.' },
        { h: 'Clear Visual Status Badges', d: 'Indicates who is currently INSIDE the society, who has CHECKED OUT, and which requests were REJECTED.' },
        { h: '1-Tap Departure Checkout', d: 'When a visitor leaves the campus, guards click Check Out with one click, recording exact exit time and duration of stay.' },
        { h: 'Easy Search & Security Export', d: 'Admins can search past logs by date range, vehicle number, or flat for security reviews or police inquiries.' }
      ],
      'fresh_2_visitor_registry.png',
      9
    );
  }

  // ==========================================
  // SLIDE 10: MAINTENANCE BILLING
  // ==========================================
  {
    const slide = pres.addSlide();
    addFeatureSlide(
      slide,
      '09. Society Finance',
      'Society Maintenance Billing & Problem Helpdesk',
      'Automated Monthly Billing, Dues Tracking, and Resident Repair Requests',
      [
        { h: 'Flat-Wise Maintenance Invoicing', d: 'Generates monthly society dues with clear breakdown for maintenance, parking, water, and sinking funds.' },
        { h: 'Payment Status Tracking', d: 'Tracks which flats have Paid, are Pending, or Overdue with simple color-coded badges for society managers.' },
        { h: 'Printable Digital PDF Invoices', d: 'Residents and committee members can view and download itemized PDF payment receipts.' },
        { h: 'Resident Maintenance Helpdesk', d: 'Residents can raise society maintenance tickets (e.g., plumbing leaks, elevator issues) with live progress tracking.' }
      ],
      'fresh_3_maintenance_billing.png',
      10
    );
  }

  // ==========================================
  // SLIDE 11: SECURITY & OFFLINE RELIABILITY
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, '10. Security & Reliability', 'Security Architecture & Offline Reliability', 'How GateSync Protects Resident Data and Keeps Working When Internet Drops', 11);

    const secCards = [
      {
        title: 'USER AUTH & PRIVACY',
        col: C.royalBlue,
        points: [
          'Zero-Trust JWT Auth: 15-minute rotating access tokens keep user sessions secure.',
          'Encrypted Passwords: Passwords hashed with BCrypt; forced reset on first login.',
          'Strict Role-Based Access: Admin, Resident, and Guard roles only view permitted screens.',
          'Privacy by Design: Visitor phone numbers and personal data are hidden from public view.'
        ]
      },
      {
        title: 'OFFLINE GATE CONTINUITY',
        col: C.accentBlue,
        points: [
          'Service Worker Caching: The web app starts up even if the gate Wi-Fi is down.',
          'Offline Entry Queue: Visitor entries recorded without internet store in local memory.',
          'Auto-Reconnection Sync: When internet restores, queued entries sync automatically.',
          'No Lost Logs: Guards never need to revert to manual paper registers during network blips.'
        ]
      },
      {
        title: 'CLOUD DATABASE & BACKUPS',
        col: C.successGreen,
        points: [
          'MongoDB Atlas Cluster: Cloud database with automated replication and high availability.',
          '2-Second Deduplication: Prevents double-notification spam if a button is double-tapped.',
          'Emergency SOS Siren: Residents or guards can sound an immediate campus security alarm.',
          'Tamper-Proof Audit Trail: Every admin and gate event logs timestamp and actor identity.'
        ]
      }
    ];

    let scX = 0.6;
    secCards.forEach(c => {
      slide.addShape(pres.ShapeType.rect, {
        x: scX, y: 1.35, w: 2.75, h: 3.65,
        fill: { color: C.cardBg },
        line: { color: C.cardBorder, width: 1 }
      });
      slide.addShape(pres.ShapeType.rect, {
        x: scX, y: 1.35, w: 0.06, h: 3.65,
        fill: { color: c.col },
        line: { color: c.col, width: 0 }
      });

      slide.addText(c.title, {
        x: scX + 0.15, y: 1.5, w: 2.45, h: 0.25,
        fontSize: 10, fontFace: 'Calibri', color: c.col, bold: true
      });

      const ptRuns = [];
      c.points.forEach(pt => {
        ptRuns.push({ text: `•  ${pt}\n\n`, options: { color: C.textBody } });
      });

      slide.addText(ptRuns, {
        x: scX + 0.15, y: 1.85, w: 2.45, h: 3.0,
        fontSize: 9, fontFace: 'Calibri', lineSpacing: 14
      });

      scX += 3.02;
    });
  }

  // ==========================================
  // SLIDE 12: THANK YOU & LIVE DELIVERABLES
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgLight };

    // Top Blue Accent Bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.08,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    // Thank You Title
    slide.addText('THANK YOU', {
      x: 0.6, y: 0.45, w: 8.8, h: 0.6,
      fontSize: 38, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });

    slide.addText('Questions & Project Evaluation Discussion', {
      x: 0.6, y: 1.05, w: 8.8, h: 0.3,
      fontSize: 13, fontFace: 'Calibri', color: C.royalBlue, bold: true
    });

    // Live Links Container Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.45, w: 8.8, h: 1.9,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.45, w: 0.08, h: 1.9,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    slide.addText('PROJECT LIVE DELIVERABLES & CLOUD ENDPOINTS', {
      x: 0.85, y: 1.6, w: 8.3, h: 0.22,
      fontSize: 10.5, fontFace: 'Calibri', color: C.royalBlue, bold: true
    });

    slide.addText([
      { text: '•  Live Web Application (PWA):  ', options: { bold: true, color: C.textDark } },
      { text: 'https://arpitthakor28.github.io/sms1/  (Responsive mobile & desktop app)\n\n', options: { color: C.royalBlue } },
      { text: '•  Live Cloud Backend API:  ', options: { bold: true, color: C.textDark } },
      { text: 'https://sms1-c9sj.onrender.com  (Spring Boot 3 + Java 21 container on Render)\n\n', options: { color: C.royalBlue } },
      { text: '•  Continuous Health Monitor:  ', options: { bold: true, color: C.textDark } },
      { text: 'https://sms1-c9sj.onrender.com/api/health  (Nap Stopper Uptime Endpoint)\n\n', options: { color: C.royalBlue } },
      { text: '•  GitHub Source Code Repository:  ', options: { bold: true, color: C.textDark } },
      { text: 'https://github.com/arpitthakor28/sms1  (Full-stack codebase, reports & slides)', options: { color: C.royalBlue } }
    ], {
      x: 0.85, y: 1.88, w: 8.3, h: 1.35,
      fontSize: 9.5, fontFace: 'Calibri', lineSpacing: 14
    });

    // Student Credentials Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 3.55, w: 8.8, h: 1.4,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 3.55, w: 0.08, h: 1.4,
      fill: { color: C.primaryNavy },
      line: { color: C.primaryNavy, width: 0 }
    });

    slide.addText([
      { text: 'STUDENT DEVELOPER\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'ARPITSINH THAKOR\n', options: { fontSize: 14, color: C.textDark, bold: true } },
      { text: 'Enrollment Number: 23SE02IE040\n', options: { fontSize: 11, color: C.royalBlue, bold: true } },
      { text: 'B.Tech in Information Technology & Engineering', options: { fontSize: 10, color: C.textBody } }
    ], {
      x: 0.85, y: 3.7, w: 4.4, h: 1.15, fontFace: 'Calibri'
    });

    slide.addText([
      { text: 'DEPARTMENT & UNIVERSITY\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'Department of Information Technology\n', options: { fontSize: 12, color: C.textDark, bold: true } },
      { text: 'School of Engineering (SOE), P. P. Savani University\n', options: { fontSize: 10, color: C.textBody } },
      { text: 'Academic Year 2025–2026', options: { fontSize: 9.5, color: C.textMuted } }
    ], {
      x: 5.4, y: 3.7, w: 3.8, h: 1.15, fontFace: 'Calibri'
    });

    // Footer
    slide.addText('GateSync — Smart Society Security System  |  All Rights Reserved © 2026', {
      x: 0.6, y: 5.25, w: 8.8, h: 0.22,
      fontSize: 8.5, fontFace: 'Calibri', color: C.textMuted
    });
  }

  // Save the presentation
  const outputPath = path.resolve('GateSync_Project_Presentation.pptx');
  await pres.writeFile({ fileName: outputPath });
  console.log(`Professional PPTX generated successfully: ${outputPath}`);

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

createHumanStylePPTX().catch(err => {
  console.error('Error generating PPTX:', err);
  process.exit(1);
});
