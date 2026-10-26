const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function createProfessionalPresentationPDF() {
  const doc = new PDFDocument({
    size: [960, 540], // 16:9 Widescreen
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    autoFirstPage: false
  });

  const outputPath = path.resolve('GateSync_Project_Presentation.pdf');
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  // Clean, professional, human-designed color palette (Light theme with executive blue accents)
  const C = {
    bgLight: '#F8FAFC',      // Crisp executive off-white
    cardBg: '#FFFFFF',       // Pure white card
    cardBorder: '#E2E8F0',   // Subtle soft gray border
    cardShadow: '#CBD5E1',   // Soft shadow
    primaryNavy: '#0F2942',  // Deep professional navy
    royalBlue: '#1E40AF',    // Strong academic blue
    accentBlue: '#0284C7',   // Crisp tech blue
    accentCyan: '#0EA5E9',   // Light cyan accent
    badgeBg: '#EFF6FF',      // Soft blue pill badge
    badgeBorder: '#BFDBFE',  // Light blue border
    textDark: '#0F172A',     // High-contrast charcoal/black
    textBody: '#334155',     // Readable slate gray
    textMuted: '#64748B',    // Subdued gray for captions
    successGreen: '#16A34A', // Clean green
    alertRed: '#DC2626'      // Clean red
  };

  // Helper for consistent header and footer on content slides
  function applyHeaderFooter(category, title, subtitle, slideNum) {
    doc.addPage({ size: [960, 540], margins: { top: 0, bottom: 0, left: 0, right: 0 } });

    // Page Background
    doc.rect(0, 0, 960, 540).fill(C.bgLight);

    // Subtle top accent line
    doc.rect(0, 0, 960, 4).fill(C.accentBlue);

    // Section Category Pill Badge
    doc.roundedRect(50, 24, 220, 20, 10).fillAndStroke(C.badgeBg, C.badgeBorder);
    doc.font('Helvetica-Bold')
       .fontSize(8.5)
       .fillColor(C.royalBlue)
       .text(category.toUpperCase(), 62, 29);

    // Slide Title
    doc.font('Helvetica-Bold')
       .fontSize(20)
       .fillColor(C.primaryNavy)
       .text(title, 50, 50, { width: 860 });

    // Slide Subtitle
    if (subtitle) {
      doc.font('Helvetica')
         .fontSize(10)
         .fillColor(C.textMuted)
         .text(subtitle, 50, 75, { width: 860 });
    }

    // Header divider line
    doc.strokeColor(C.cardBorder)
       .lineWidth(1)
       .moveTo(50, 94)
       .lineTo(910, 94)
       .stroke();

    // Footer divider line
    doc.strokeColor(C.cardBorder)
       .lineWidth(1)
       .moveTo(50, 505)
       .lineTo(910, 505)
       .stroke();

    // Footer Text Left
    doc.font('Helvetica')
       .fontSize(8.5)
       .fillColor(C.textMuted)
       .text('GateSync — Smart Society Security & Visitor Management  |  Arpitsinh Thakor (23SE02IE040)', 50, 514);

    // Footer Text Right
    doc.font('Helvetica-Bold')
       .fontSize(8.5)
       .fillColor(C.royalBlue)
       .text(`P. P. SAVANI UNIVERSITY  •  SLIDE ${slideNum} / 12`, 50, 514, { width: 860, align: 'right' });
  }

  // ==========================================
  // SLIDE 1: COVER SLIDE (CLEAN & HUMAN)
  // ==========================================
  {
    doc.addPage({ size: [960, 540], margins: { top: 0, bottom: 0, left: 0, right: 0 } });
    doc.rect(0, 0, 960, 540).fill(C.bgLight);

    // Top Brand Accent
    doc.rect(0, 0, 960, 6).fill(C.royalBlue);

    // University Header Pill
    doc.roundedRect(60, 36, 460, 26, 13).fillAndStroke(C.badgeBg, C.badgeBorder);
    doc.font('Helvetica-Bold')
       .fontSize(9.5)
       .fillColor(C.royalBlue)
       .text('P. P. SAVANI UNIVERSITY  •  SCHOOL OF ENGINEERING', 75, 43);

    // University Logo (Top Right)
    const logoPath = path.resolve('screenshots/ppsu_logo.png');
    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, 760, 32, { width: 140, fit: [140, 65] });
    }

    // Main Project Title
    doc.font('Helvetica-Bold')
       .fontSize(44)
       .fillColor(C.primaryNavy)
       .text('GATESYNC', 60, 88);

    // Subtitle
    doc.font('Helvetica-Bold')
       .fontSize(16)
       .fillColor(C.accentBlue)
       .text('Smart Residential Society Security & Real-Time Visitor Management System', 60, 142);

    // Human-style Project Summary
    doc.font('Helvetica')
       .fontSize(11)
       .fillColor(C.textBody)
       .text('A full-stack, installable Progressive Web Application (PWA) designed for modern gated residential societies. It replaces manual paper logbooks with instant mobile push notifications for residents, 1-tap courier clearance, pre-approved QR guest passes, and society maintenance accounting.', 60, 172, { width: 840, lineGap: 4 });

    // Student Information Container Card
    doc.roundedRect(60, 250, 840, 215, 8)
       .lineWidth(1)
       .fillAndStroke(C.cardBg, C.cardBorder);

    // Subtle blue accent bar on left of card
    doc.rect(60, 250, 5, 215).fill(C.royalBlue);

    // Left Details Column
    doc.font('Helvetica-Bold').fontSize(9).fillColor(C.textMuted).text('STUDENT NAME', 85, 272);
    doc.font('Helvetica-Bold').fontSize(16).fillColor(C.textDark).text('ARPITSINH THAKOR', 85, 288);

    doc.font('Helvetica-Bold').fontSize(9).fillColor(C.textMuted).text('ENROLLMENT NUMBER', 85, 326);
    doc.font('Helvetica-Bold').fontSize(15).fillColor(C.royalBlue).text('23SE02IE040', 85, 342);

    doc.font('Helvetica-Bold').fontSize(9).fillColor(C.textMuted).text('DEGREE & DEPARTMENT', 85, 380);
    doc.font('Helvetica-Bold').fontSize(12).fillColor(C.textDark).text('B.Tech in Information Technology & Engineering', 85, 396);
    doc.font('Helvetica').fontSize(10).fillColor(C.textBody).text('Department of Information Technology, School of Engineering', 85, 414);

    // Right Details Column
    doc.font('Helvetica-Bold').fontSize(9).fillColor(C.textMuted).text('INSTITUTION', 520, 272);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textDark).text('P. P. Savani University', 520, 288);
    doc.font('Helvetica').fontSize(10).fillColor(C.textBody).text('NH 8, GETCO, Near Bilitha, Dhamdod, Kosamba, Gujarat 394125', 520, 306, { width: 350 });

    doc.font('Helvetica-Bold').fontSize(9).fillColor(C.textMuted).text('PROJECT TYPE & ACADEMIC YEAR', 520, 345);
    doc.font('Helvetica-Bold').fontSize(12).fillColor(C.textDark).text('Final Year Capstone Engineering Project', 520, 361);
    doc.font('Helvetica').fontSize(10.5).fillColor(C.textBody).text('Academic Year 2025–2026', 520, 379);

    doc.font('Helvetica-Bold').fontSize(9).fillColor(C.textMuted).text('TECHNOLOGY FOCUS', 520, 410);
    doc.font('Helvetica').fontSize(10).fillColor(C.textBody).text('WebSockets (STOMP), Spring Boot, React 19 PWA, MongoDB Atlas', 520, 426);

    // Footer
    doc.font('Helvetica')
       .fontSize(8.5)
       .fillColor(C.textMuted)
       .text('GateSync System Presentation  •  Candidate: Arpitsinh Thakor (23SE02IE040)', 60, 514);
  }

  // ==========================================
  // SLIDE 2: PROJECT OVERVIEW & MOTIVATION
  // ==========================================
  {
    applyHeaderFooter('01. Project Background', 'Introduction & Motivation', 'Why Gated Communities Need a Modern Digital Gate Security System', 2);

    // Left Box: Current Manual Process
    doc.roundedRect(50, 110, 415, 370, 8).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(50, 110, 4, 370).fill(C.alertRed);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.alertRed).text('TRADITIONAL PAPER REGISTER PROBLEMS', 70, 128);

    const manualIssues = [
      { t: 'Long Gate Queues at Peak Hours', d: 'Guards manually write down visitor names, phone numbers, and flat numbers in a physical book. Each car takes 2–4 minutes, causing entry traffic.' },
      { t: 'Zero Privacy for Residents & Visitors', d: 'The paper logbook sits open at the security cabin. Anyone standing at the gate can read or photograph resident phone numbers and visiting flats.' },
      { t: 'Unanswered Intercoms & Calls', d: 'Guards frequently call residents on intercom or phone to verify visitors. When calls are missed, guards let visitors in unverified or keep them waiting outside.' },
      { t: 'High Volume of E-Commerce Deliveries', d: 'Daily delivery couriers (Swiggy, Zomato, Amazon, Blinkit) create huge manual overhead for guards who have to log repetitive entries.' }
    ];

    let mY = 158;
    manualIssues.forEach(item => {
      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(`•  ${item.t}`, 70, mY);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(item.d, 82, mY + 14, { width: 360, lineGap: 2.5 });
      mY += 72;
    });

    // Right Box: What GateSync Solves
    doc.roundedRect(495, 110, 415, 370, 8).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(495, 110, 4, 370).fill(C.successGreen);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.successGreen).text('THE GATESYNC DIGITAL SOLUTION', 515, 128);

    const gatesyncSolutions = [
      { t: 'Instant Mobile Push Alerts (< 150ms)', d: 'When a visitor arrives, the guard enters details and an instant pop-up alert appears on the resident phone with visitor info and photo.' },
      { t: '1-Tap Resident Remote Approvals', d: 'Residents simply tap Approve or Deny from their smartphone anywhere (at home, office, or travelling) without phone calls.' },
      { t: 'Pre-Approved Guest Passes with QR Code', d: 'Residents create guest passes beforehand for friends or family. Guests show their QR code or 6-digit OTP for 2-second fast clearance.' },
      { t: '1-Tap Fast Delivery Partner Entry', d: 'One-click buttons for Swiggy, Zomato, Amazon, and Blinkit allow guards to clear couriers without typing names manually.' }
    ];

    let gY = 158;
    gatesyncSolutions.forEach(item => {
      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(`•  ${item.t}`, 515, gY);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(item.d, 527, gY + 14, { width: 360, lineGap: 2.5 });
      gY += 72;
    });
  }

  // ==========================================
  // SLIDE 3: SYSTEM ARCHITECTURE & TECH STACK
  // ==========================================
  {
    applyHeaderFooter('02. System Architecture', 'System Architecture & Technologies Used', 'Full-Stack Web & Mobile Architecture Built for Reliability, Speed and Security', 3);

    const techTiers = [
      {
        title: 'FRONTEND CLIENT TIER (Progressive Web App)',
        badge: 'UI & REAL-TIME',
        col: C.royalBlue,
        tech: 'React 19, Vite, Lucide Icons, STOMP over SockJS, Service Worker',
        desc: 'Responsive, mobile-friendly interface installable on Android and iOS. Includes client-side offline queueing to store entries if the gate internet is down.'
      },
      {
        title: 'BACKEND APPLICATION TIER (REST & WebSocket Server)',
        badge: 'BUSINESS LOGIC',
        col: C.primaryNavy,
        tech: 'Java 21 LTS, Spring Boot 3.3.4, Spring Security 6, JJWT',
        desc: 'Stateless microservice handling user authentication, role-based access control, WebSocket message broker (/topic and /user/queue), and transactional business logic.'
      },
      {
        title: 'DATABASE & PERSISTENCE TIER',
        badge: 'DATA STORAGE',
        col: C.accentBlue,
        tech: 'MongoDB Atlas (Cloud NoSQL) & H2 In-Memory Relational Engine',
        desc: 'MongoDB Atlas persistently stores visitor logs, device push tokens, guest passes, and audit trails. In-memory relational mapping is used for fast user lookup.'
      },
      {
        title: 'CLOUD HOSTING & DEPLOYMENT',
        badge: 'CLOUD INFRASTRUCTURE',
        col: C.successGreen,
        tech: 'Render Cloud (Dockerized Spring Boot) & GitHub Pages (PWA Hosting)',
        desc: 'Containerized production backend deployed on Render with automated health check (/api/health) and static frontend deployed on GitHub Pages.'
      }
    ];

    let tY = 110;
    techTiers.forEach(t => {
      doc.roundedRect(50, tY, 860, 84, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
      doc.rect(50, tY, 4, 84).fill(t.col);

      doc.font('Helvetica-Bold').fontSize(10).fillColor(t.col).text(t.title, 68, tY + 10);
      doc.font('Helvetica-Bold').fontSize(10.5).fillColor(C.textDark).text(t.tech, 68, tY + 26);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(t.desc, 68, tY + 44, { width: 820, lineGap: 2 });
      tY += 94;
    });
  }

  // Helper for UI Feature Slides (Left: Human bullets, Right: Clean Screenshot)
  function addModuleSlide(cat, title, sub, bullets, imgName, slideNum) {
    applyHeaderFooter(cat, title, sub, slideNum);

    // Left Column: Features & Workflow
    doc.roundedRect(50, 110, 420, 370, 8).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(50, 110, 4, 370).fill(C.royalBlue);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.primaryNavy).text('KEY FEATURES & USER WORKFLOW', 68, 128);

    let bY = 158;
    bullets.forEach(b => {
      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(`•  ${b.h}`, 68, bY);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(b.d, 80, bY + 14, { width: 370, lineGap: 2.5 });
      bY += 72;
    });

    // Right Column: Framed Screenshot Container
    doc.roundedRect(490, 110, 420, 370, 8).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);

    const imgPath = path.resolve('screenshots/' + imgName);
    if (fs.existsSync(imgPath)) {
      doc.image(imgPath, 500, 120, { width: 400, height: 350, fit: [400, 350], align: 'center', valign: 'center' });
    }
  }

  // ==========================================
  // SLIDE 4: ADMIN DASHBOARD
  // ==========================================
  addModuleSlide(
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

  // ==========================================
  // SLIDE 5: GUARD DESK TERMINAL
  // ==========================================
  addModuleSlide(
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

  // ==========================================
  // SLIDE 6: RESIDENT LIVE ALERTING
  // ==========================================
  addModuleSlide(
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

  // ==========================================
  // SLIDE 7: 1-TAP QUICK DELIVERY
  // ==========================================
  addModuleSlide(
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

  // ==========================================
  // SLIDE 8: PRE-APPROVED GUEST PASSES & QR
  // ==========================================
  addModuleSlide(
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

  // ==========================================
  // SLIDE 9: VISITOR REGISTRY & CHECKOUT
  // ==========================================
  addModuleSlide(
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

  // ==========================================
  // SLIDE 10: MAINTENANCE BILLING
  // ==========================================
  addModuleSlide(
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

  // ==========================================
  // SLIDE 11: SECURITY & OFFLINE RELIABILITY
  // ==========================================
  {
    applyHeaderFooter('10. Security & Reliability', 'Security Architecture & Offline Reliability', 'How GateSync Protects Resident Data and Keeps Working When Internet Drops', 11);

    const secCards = [
      {
        title: 'USER AUTH & DATA PRIVACY',
        col: C.royalBlue,
        points: [
          'Zero-Trust JWT Authentication: 15-minute rotating session tokens keep user accounts secure.',
          'Encrypted Passwords: Passwords hashed with BCrypt; default passwords force a reset on first login.',
          'Strict Role-Based Access: Admin, Resident, and Guard roles only access authorized screens.',
          'Privacy by Design: Visitor phone numbers and personal resident data are hidden from public view.'
        ]
      },
      {
        title: 'OFFLINE-FIRST GATE CONTINUITY',
        col: C.accentBlue,
        points: [
          'Service Worker Caching: The web app starts up and opens even if the gate Wi-Fi is disconnected.',
          'Offline Entry Queue: Visitor entries recorded without internet are stored safely in local browser memory.',
          'Automatic Reconnection Sync: Once internet connectivity restores, queued entries sync automatically.',
          'No Lost Visitor Logs: Guards never have to fall back to paper registers during network blips.'
        ]
      },
      {
        title: 'CLOUD DATABASE & BACKUPS',
        col: C.successGreen,
        points: [
          'MongoDB Atlas Cloud Cluster: Multi-tenant database hosted in the cloud with automated replication.',
          '2-Second Alert Deduplication: Prevents double-notification spam if a button is accidentally clicked twice.',
          'Emergency SOS Siren: Residents or guards can trigger campus panic alert with immediate guard siren.',
          'Tamper-Proof Audit Trail: Every admin and security action logs timestamp and actor identity.'
        ]
      }
    ];

    let scX = 50;
    secCards.forEach(c => {
      doc.roundedRect(scX, 110, 266, 370, 8).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
      doc.rect(scX, 110, 4, 370).fill(c.col);

      doc.font('Helvetica-Bold').fontSize(10).fillColor(c.col).text(c.title, scX + 16, 128);

      let pY = 160;
      c.points.forEach(pt => {
        doc.font('Helvetica-Bold').fontSize(9).fillColor(C.textDark).text('•', scX + 16, pY);
        doc.font('Helvetica').fontSize(8.8).fillColor(C.textBody).text(pt, scX + 28, pY, { width: 222, lineGap: 3 });
        pY += 68;
      });

      scX += 296;
    });
  }

  // ==========================================
  // SLIDE 12: THANK YOU & LIVE DELIVERABLES
  // ==========================================
  {
    doc.addPage({ size: [960, 540], margins: { top: 0, bottom: 0, left: 0, right: 0 } });
    doc.rect(0, 0, 960, 540).fill(C.bgLight);

    // Top Brand Accent Line
    doc.rect(0, 0, 960, 6).fill(C.royalBlue);

    // Thank You Title
    doc.font('Helvetica-Bold')
       .fontSize(44)
       .fillColor(C.primaryNavy)
       .text('THANK YOU', 60, 45);

    doc.font('Helvetica-Bold')
       .fontSize(15)
       .fillColor(C.accentBlue)
       .text('Questions & Project Evaluation Discussion', 60, 98);

    // Live Links Box
    doc.roundedRect(60, 135, 840, 185, 8).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(60, 135, 5, 185).fill(C.accentBlue);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.royalBlue).text('PROJECT LIVE DELIVERABLES & CLOUD ENDPOINTS', 85, 152);

    const projectLinks = [
      { label: 'Live Web Application (PWA):', url: 'https://arpitthakor28.github.io/sms1/', note: 'Installable responsive frontend' },
      { label: 'Live Cloud Backend API (Render):', url: 'https://sms1-c9sj.onrender.com', note: 'Spring Boot 3 + Java 21 container' },
      { label: 'Continuous Health Check (Nap Stopper):', url: 'https://sms1-c9sj.onrender.com/api/health', note: 'Uptime monitoring endpoint' },
      { label: 'GitHub Source Code Repository:', url: 'https://github.com/arpitthakor28/sms1', note: 'Complete code, documentation & poster' }
    ];

    let lY = 178;
    projectLinks.forEach(item => {
      doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.textDark).text(`•  ${item.label}`, 85, lY);
      doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.royalBlue).text(item.url, 330, lY);
      doc.font('Helvetica').fontSize(8.5).fillColor(C.textMuted).text(`(${item.note})`, 670, lY);
      lY += 28;
    });

    // Student Credentials Container
    doc.roundedRect(60, 335, 840, 145, 8).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(60, 335, 5, 145).fill(C.primaryNavy);

    // Left Side: Student Info
    doc.font('Helvetica-Bold').fontSize(9).fillColor(C.textMuted).text('STUDENT DEVELOPER', 85, 355);
    doc.font('Helvetica-Bold').fontSize(16).fillColor(C.textDark).text('ARPITSINH THAKOR', 85, 372);
    doc.font('Helvetica-Bold').fontSize(12).fillColor(C.royalBlue).text('Enrollment Number: 23SE02IE040', 85, 396);
    doc.font('Helvetica').fontSize(10.5).fillColor(C.textBody).text('B.Tech in Information Technology & Engineering', 85, 418);

    // Right Side: Department Info
    doc.font('Helvetica-Bold').fontSize(9).fillColor(C.textMuted).text('DEPARTMENT & UNIVERSITY', 520, 355);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textDark).text('Department of Information Technology', 520, 372);
    doc.font('Helvetica').fontSize(10.5).fillColor(C.textBody).text('School of Engineering (SOE)\nP. P. Savani University, Surat, Gujarat', 520, 392, { lineGap: 3 });
    doc.font('Helvetica').fontSize(10).fillColor(C.textMuted).text('Academic Year 2025–2026', 520, 432);

    // Footer
    doc.font('Helvetica')
       .fontSize(8.5)
       .fillColor(C.textMuted)
       .text('GateSync — Smart Society Security System  |  All Rights Reserved © 2026', 60, 514);
  }

  doc.end();

  stream.on('finish', () => {
    console.log(`Professional Presentation PDF generated successfully: ${outputPath}`);

    // Copy to Downloads, public, and docs
    const dlPath = 'c:\\Users\\ASUS\\Downloads\\GateSync_Project_Presentation.pdf';
    const pubPath = path.resolve('public/GateSync_Project_Presentation.pdf');
    const docsPath = path.resolve('docs/GateSync_Project_Presentation.pdf');

    try {
      fs.copyFileSync(outputPath, dlPath);
      console.log(`Copied to Downloads: ${dlPath}`);
    } catch (e) {
      console.warn('Could not copy to Downloads:', e.message);
    }

    try {
      fs.copyFileSync(outputPath, pubPath);
      fs.copyFileSync(outputPath, docsPath);
      console.log(`Copied to public/ and docs/`);
    } catch (e) {
      console.warn('Could not copy to web dirs:', e.message);
    }
  });
}

createProfessionalPresentationPDF();
