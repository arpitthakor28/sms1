const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');

function createHumanExecutivePresentationPDF() {
  const doc = new PDFDocument({
    size: [960, 540], // 16:9 Widescreen
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    autoFirstPage: false
  });

  const outputPath = path.resolve('GateSync_Project_Presentation.pdf');
  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  // Clean, Human Executive Cold Palette (Light Theme with Corporate Navy & Royal Blue)
  const C = {
    bgLight: '#F8FAFC',       // Clean executive off-white
    cardBg: '#FFFFFF',        // Pure white card
    cardBorder: '#E2E8F0',    // Soft cool slate border
    cardBorderDark: '#CBD5E1',// Crisp accent border
    primaryNavy: '#0F2942',   // Deep authoritative navy
    royalBlue: '#1E40AF',     // Professional academic blue
    accentBlue: '#0284C7',    // Tech blue accent
    textDark: '#0F172A',      // High-contrast charcoal headings
    textBody: '#334155',      // Clean readable slate body
    textMuted: '#64748B',     // Cool slate metadata
    alertRed: '#DC2626',      // Corporate red
    successGreen: '#16A34A',  // Corporate green
    headerDivider: '#E2E8F0'  // Clean header line
  };

  // Header and Footer for standard content slides
  function applyHeaderFooter(sectionNum, category, title, subtitle, slideNum) {
    doc.addPage({ size: [960, 540], margins: { top: 0, bottom: 0, left: 0, right: 0 } });

    // Background
    doc.rect(0, 0, 960, 540).fill(C.bgLight);

    // Top Blue Accent Line
    doc.rect(0, 0, 960, 4).fill(C.royalBlue);

    // Section Tag - Clean Human Typography (No awkward rounded pill outline!)
    doc.font('Helvetica-Bold')
       .fontSize(8.5)
       .fillColor(C.royalBlue)
       .text(`${sectionNum.toUpperCase()}  |  ${category.toUpperCase()}`, 50, 24);

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
       .moveTo(50, 90)
       .lineTo(910, 90)
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
       .text('GateSync — Smart Society Security System  |  Arpitsinh Thakor (23SE02IE040)', 50, 515);

    // Footer Text Right
    doc.font('Helvetica-Bold')
       .fontSize(8.5)
       .fillColor(C.royalBlue)
       .text(`SCHOOL OF ENGINEERING  •  SLIDE ${slideNum} / 12`, 50, 515, { width: 860, align: 'right' });
  }

  // ==========================================
  // SLIDE 1: COVER SLIDE (HUMAN EXECUTIVE DESIGN)
  // ==========================================
  {
    doc.addPage({ size: [960, 540], margins: { top: 0, bottom: 0, left: 0, right: 0 } });
    doc.rect(0, 0, 960, 540).fill(C.bgLight);

    // Top Royal Blue Accent Bar
    doc.rect(0, 0, 960, 6).fill(C.royalBlue);

    // University Header Line (Clean text with accent marker)
    doc.rect(60, 36, 4, 18).fill(C.royalBlue);
    doc.font('Helvetica-Bold')
       .fontSize(11)
       .fillColor(C.primaryNavy)
       .text('P. P. SAVANI UNIVERSITY  •  SCHOOL OF ENGINEERING', 72, 40);

    // University Logo (Top Right)
    const logoPath = path.resolve('screenshots/ppsu_logo.png');
    if (fs.existsSync(logoPath)) {
      doc.image(logoPath, 750, 30, { width: 150, fit: [150, 65] });
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

    // Abstract Summary
    doc.font('Helvetica')
       .fontSize(10.5)
       .fillColor(C.textBody)
       .text('A full-stack Progressive Web Application (PWA) built to modernize gated community security operations. Replaces manual paper registers with real-time mobile push notifications for residents, 1-tap courier clearance, pre-approved digital QR guest passes, and society maintenance accounting.', 60, 168, { width: 840, lineGap: 3.5 });

    // Candidate Credentials Container Card (Clean white card with subtle cold border)
    doc.roundedRect(60, 238, 840, 235, 6)
       .lineWidth(1)
       .fillAndStroke(C.cardBg, C.cardBorder);

    // Deep Navy accent stripe on left of card
    doc.rect(60, 238, 5, 235).fill(C.primaryNavy);

    // Left Column: Student Credentials
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('STUDENT DEVELOPER', 85, 258);
    doc.font('Helvetica-Bold').fontSize(16).fillColor(C.textDark).text('ARPITSINH THAKOR', 85, 274);

    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('ENROLLMENT NUMBER', 85, 312);
    doc.font('Helvetica-Bold').fontSize(14).fillColor(C.royalBlue).text('23SE02IE040', 85, 328);

    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('DEGREE & BRANCH', 85, 366);
    doc.font('Helvetica-Bold').fontSize(12).fillColor(C.textDark).text('B.Tech in Information Technology & Engineering', 85, 382);

    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('DEPARTMENT', 85, 414);
    doc.font('Helvetica').fontSize(11).fillColor(C.textBody).text('School of Engineering', 85, 430);

    // Right Column: Institution & Technology Focus
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('INSTITUTION', 520, 258);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textDark).text('P. P. Savani University', 520, 274);
    doc.font('Helvetica').fontSize(9.5).fillColor(C.textBody).text('NH 8, GETCO, Near Bilitha, Dhamdod, Kosamba, Gujarat 394125', 520, 292, { width: 350 });

    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('PROJECT PRESENTATION', 520, 328);
    doc.font('Helvetica-Bold').fontSize(12).fillColor(C.textDark).text('Major Engineering Project Presentation', 520, 344);
    doc.font('Helvetica').fontSize(10).fillColor(C.textBody).text('Academic Year 2025–2026', 520, 362);

    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('TECHNOLOGY FOCUS', 520, 396);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.royalBlue).text('Full Stack Development - Java', 520, 412);
    doc.font('Helvetica').fontSize(9.5).fillColor(C.textBody).text('Spring Boot 3 REST API & React PWA Cloud Architecture', 520, 430);

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
    applyHeaderFooter('Section 01', 'Project Background', 'The Problem with Traditional Gate Security', 'Operational Vulnerabilities & Bottlenecks of Physical Paper Logbooks', 2);

    // Left Card: Paper Register Limitations
    doc.roundedRect(50, 108, 415, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(50, 108, 4, 375).fill(C.alertRed);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.alertRed).text('TRADITIONAL PAPER REGISTER LIMITATIONS', 70, 126);

    const manualIssues = [
      { t: 'Long Gate Queues at Peak Hours', d: 'Guards manually record visitor names, phone numbers, and flat numbers in physical registers. Each entry takes 2–4 minutes, creating severe vehicle and pedestrian gate bottlenecks.' },
      { t: 'Zero Privacy for Residents & Phone Leakage', d: 'The open physical logbook sits on the guard desk. Any delivery boy or visitor can read, copy, or photograph resident contact numbers and private flat details.' },
      { t: 'Unanswered Intercoms & Missed Verification Calls', d: 'Guards repeatedly attempt to reach residents via intercom or cellular calls. When residents are busy or away, guards either let visitors in unverified or strand guests outside.' },
      { t: 'Overwhelming Courier Delivery Volumes', d: 'Daily e-commerce couriers (Swiggy, Zomato, Amazon, Blinkit) create excessive manual documentation overhead for guards handling repetitive entries.' }
    ];

    let mY = 156;
    manualIssues.forEach(item => {
      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(`•  ${item.t}`, 70, mY);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(item.d, 82, mY + 14, { width: 360, lineGap: 2.5 });
      mY += 72;
    });

    // Right Card: The GateSync Solution
    doc.roundedRect(495, 108, 415, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(495, 108, 4, 375).fill(C.successGreen);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.successGreen).text('THE GATESYNC DIGITAL SOLUTION', 515, 126);

    const gatesyncSolutions = [
      { t: 'Instant Smartphone Push Alerts (< 150ms)', d: 'When a visitor arrives, the guard submits details in under 10 seconds. An immediate pop-up notification appears on the resident phone with visitor details and photo.' },
      { t: '1-Tap Resident Remote Approvals', d: 'Residents approve or deny entry with a single tap from anywhere (at home, work, or travelling) with zero voice calls required.' },
      { t: 'Pre-Approved Guest Passes with Digital QR', d: 'Residents generate digital gate passes beforehand for expected guests. Visitors display their QR code or 6-digit OTP for 2-second fast clearance.' },
      { t: '1-Tap Delivery Clearance for Verified Couriers', d: 'One-click quick delivery intake buttons for Amazon, Flipkart, Swiggy, and Zomato streamline high-frequency courier entries without manual typing.' }
    ];

    let gY = 156;
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
    applyHeaderFooter('Section 02', 'Technical Architecture', 'Full Stack System Architecture', 'Decoupled 3-Tier Enterprise Architecture (Client, Service, Database)', 3);

    const tiers = [
      {
        title: 'FRONTEND CLIENT',
        tech: 'React 19 PWA & Vite',
        color: C.royalBlue,
        x: 50,
        items: [
          { h: 'Progressive Web App (PWA)', d: 'Installable on mobile smartphones and desktop cabin PCs; works offline via Service Workers.' },
          { h: 'WebSocket STOMP Client', d: 'Maintains low-latency bidirectional socket connection for instant visitor push alerts.' },
          { h: 'Responsive UI Design', d: 'Modern executive UI tailored for guard touchscreens, resident phones, and admin portals.' },
          { h: 'Camera & QR Scanner', d: 'Integrated WebRTC camera module for visitor snapshots and guest pass barcode verification.' }
        ]
      },
      {
        title: 'BACKEND CORE',
        tech: 'Spring Boot 3 (Java 21)',
        color: C.primaryNavy,
        x: 350,
        items: [
          { h: 'RESTful Microservice API', d: 'High-throughput stateless API controllers handling visitor logs, residents, and billing records.' },
          { h: 'WebSocket Message Broker', d: 'In-memory message broker routing real-time approval events directly to resident user queues.' },
          { h: 'Spring Security & JWT', d: 'Role-based access control (RBAC) securing endpoints with 12-round BCrypt password hashing.' },
          { h: 'Scheduled Keep-Alive', d: 'Integrated `/api/health` monitoring endpoint preventing cloud container idle sleep.' }
        ]
      },
      {
        title: 'DATA & DEPLOYMENT',
        tech: 'Cloud Infrastructure',
        color: C.successGreen,
        x: 650,
        items: [
          { h: 'Database Persistence', d: 'MongoDB Atlas & PostgreSQL relational mapping for visitor history, user profiles, and accounts.' },
          { h: 'Docker Containerization', d: 'Multi-stage Maven + Eclipse Temurin 21 JRE container image hosted on Render Cloud.' },
          { h: 'Static Frontend CDN', d: 'Vite production build deployed on GitHub Pages with automated continuous deployment.' },
          { h: 'Automated Nap Stopper', d: 'Cron uptime monitor pinging backend health endpoint every 10 minutes for 99.8% uptime.' }
        ]
      }
    ];

    tiers.forEach(tier => {
      doc.roundedRect(tier.x, 108, 260, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
      doc.rect(tier.x, 108, 260, 4).fill(tier.color);

      doc.font('Helvetica-Bold').fontSize(11).fillColor(tier.color).text(tier.title, tier.x + 20, 126);
      doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textDark).text(tier.tech, tier.x + 20, 142);

      let tY = 172;
      tier.items.forEach(it => {
        doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.primaryNavy).text(`•  ${it.h}`, tier.x + 20, tY);
        doc.font('Helvetica').fontSize(8.5).fillColor(C.textBody).text(it.d, tier.x + 30, tY + 13, { width: 210, lineGap: 2 });
        tY += 66;
      });
    });
  }

  // ==========================================
  // SLIDE 4: USER ROLES & OPERATIONAL WORKFLOWS
  // ==========================================
  {
    applyHeaderFooter('Section 03', 'Operational Model', 'User Roles & Operational Workflows', 'Three Distinct Permission Levels Ensuring Security, Convenience, and Oversight', 4);

    const roles = [
      {
        role: 'SECURITY GUARD CABIN',
        badge: 'GATE ENTRANCE DESK',
        color: C.royalBlue,
        x: 50,
        desc: 'Frontline physical checkpoint software designed for rapid data entry with minimal typing.',
        duties: [
          'Register unexpected visitors in under 10 seconds.',
          'One-click quick delivery intake for courier services.',
          'Verify pre-approved guest QR passes with device camera.',
          'Track live visitor queue and log vehicle registration.'
        ]
      },
      {
        role: 'RESIDENT PORTAL',
        badge: 'SMARTPHONE PWA',
        color: C.primaryNavy,
        x: 350,
        desc: 'Personal resident portal granting flat owners complete control over gate admissions.',
        duties: [
          'Receive instant real-time pop-up alerts on visitor arrival.',
          '1-Tap Approve or Deny visitor gate access remotely.',
          'Generate pre-approved digital QR passes for guests & family.',
          'View flat visitor logs and manage authorized vehicles.'
        ]
      },
      {
        role: 'SOCIETY MANAGEMENT',
        badge: 'ADMIN COMMAND CENTER',
        color: C.successGreen,
        x: 650,
        desc: 'Centralized administration dashboard for committee members and facility supervisors.',
        duties: [
          'Oversee real-time visitor logs and complete entry audits.',
          'Manage society member directory, flats, and tenant status.',
          'Generate and track society maintenance fee collections.',
          'Publish emergency alerts and community announcements.'
        ]
      }
    ];

    roles.forEach(r => {
      doc.roundedRect(r.x, 108, 260, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
      doc.rect(r.x, 108, 260, 4).fill(r.color);

      doc.font('Helvetica-Bold').fontSize(10.5).fillColor(r.color).text(r.badge, r.x + 18, 126);
      doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textDark).text(r.role, r.x + 18, 142);

      doc.font('Helvetica').fontSize(9).fillColor(C.textMuted).text(r.desc, r.x + 18, 166, { width: 224, lineGap: 2 });

      doc.strokeColor(C.cardBorder).lineWidth(1).moveTo(r.x + 18, 216).lineTo(r.x + 242, 216).stroke();

      doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.textDark).text('KEY WORKFLOW RESPONSIBILITIES:', r.x + 18, 228);

      let dY = 250;
      r.duties.forEach(d => {
        doc.font('Helvetica-Bold').fontSize(9.5).fillColor(r.color).text('✓', r.x + 18, dY);
        doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(d, r.x + 32, dY, { width: 210, lineGap: 2 });
        dY += 56;
      });
    });
  }

  // ==========================================
  // SLIDE 5: GUARD DESK & VISITOR INTAKE
  // ==========================================
  {
    applyHeaderFooter('Section 04', 'Module Deep-Dive', 'Security Guard Cabin Desk & Quick Entry', 'High-Speed Visitor Intake Flow Engineered for Zero Gate Congestion', 5);

    // Left Column: Feature Specifications
    doc.roundedRect(50, 108, 380, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(50, 108, 4, 375).fill(C.royalBlue);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.royalBlue).text('KEY GUARD DESK CAPABILITIES', 70, 126);

    const guardFeatures = [
      { t: 'Sub-10 Second Visitor Intake', d: 'Smart dropdowns for Building Block and Flat numbers auto-populate resident details, minimizing guard typing.' },
      { t: 'One-Tap Courier Buttons', d: 'Pre-configured buttons for Amazon, Flipkart, Swiggy, and Zomato instantly clear verified couriers without manual log overhead.' },
      { t: 'Live Status Queue Synchronization', d: 'Visual color-coded badges (Pending: Amber, Approved: Green, Denied: Red) update instantly via WebSockets as residents respond.' },
      { t: 'Visitor Photo & Vehicle Capture', d: 'WebRTC camera integration allows guards to attach a live visitor face snapshot and record vehicle registration numbers.' }
    ];

    let fY = 156;
    guardFeatures.forEach(item => {
      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(`•  ${item.t}`, 70, fY);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(item.d, 82, fY + 14, { width: 330, lineGap: 2.5 });
      fY += 72;
    });

    // Right Column: Realistic Application Screenshot
    doc.roundedRect(450, 108, 460, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.font('Helvetica-Bold').fontSize(10).fillColor(C.primaryNavy).text('SYSTEM INTERFACE: GUARD DESK & VISITOR REGISTRY', 468, 126);

    const imgPath = path.resolve('screenshots/fresh_3_guard_desk.png');
    if (fs.existsSync(imgPath)) {
      doc.image(imgPath, 468, 148, { width: 424, fit: [424, 315] });
    }
  }

  // ==========================================
  // SLIDE 6: RESIDENT REAL-TIME ALERTS & 1-TAP APPROVAL
  // ==========================================
  {
    applyHeaderFooter('Section 05', 'Module Deep-Dive', 'Resident Instant Push Alert & 1-Tap Approval', 'Zero Phone Calls Required — Secure Gate Decisions in Under 2 Seconds', 6);

    // Left Column: Technical Workflow
    doc.roundedRect(50, 108, 380, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(50, 108, 4, 375).fill(C.royalBlue);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.royalBlue).text('REAL-TIME APPROVAL ARCHITECTURE', 70, 126);

    const steps = [
      { step: '1', title: 'Guard Dispatches Visitor Entry', desc: 'Guard enters visitor details at cabin desk and hits Submit. The backend generates a temporary approval session.' },
      { step: '2', title: 'WebSocket Event Routing (< 150ms)', desc: 'Spring Boot STOMP broker directs an arrival payload specifically to the subscribed flat channel.' },
      { step: '3', title: 'Modal Pop-Up Alert on Smartphone', desc: 'Resident phone screen lights up with full-screen popup displaying visitor name, photo, purpose, and company.' },
      { step: '4', title: 'One-Tap Decision Return', desc: 'Resident taps "Approve Entry" or "Deny Entry". The decision is relayed instantly to the guard screen with an audible chime.' }
    ];

    let sY = 156;
    steps.forEach(s => {
      doc.roundedRect(70, sY, 22, 22, 4).fill(C.cardBorder);
      doc.font('Helvetica-Bold').fontSize(10.5).fillColor(C.primaryNavy).text(s.step, 77, sY + 5);

      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(s.title, 100, sY + 2);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(s.desc, 100, sY + 16, { width: 310, lineGap: 2.5 });
      sY += 72;
    });

    // Right Column: Arrival Alert Screenshot
    doc.roundedRect(450, 108, 460, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.font('Helvetica-Bold').fontSize(10).fillColor(C.primaryNavy).text('SYSTEM INTERFACE: RESIDENT REAL-TIME POPUP ALERT', 468, 126);

    const alertImg = path.resolve('screenshots/fresh_fig_8_3_arrival_alert.png');
    if (fs.existsSync(alertImg)) {
      doc.image(alertImg, 468, 148, { width: 424, fit: [424, 315] });
    }
  }

  // ==========================================
  // SLIDE 7: PRE-APPROVED GUEST PASSES & QR SCANNER
  // ==========================================
  {
    applyHeaderFooter('Section 06', 'Module Deep-Dive', 'Pre-Approved Guest Passes & Digital QR Scanner', 'Frictionless Entry for Family, Party Guests, and Service Personnel', 7);

    // Left Column: Capabilities
    doc.roundedRect(50, 108, 380, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(50, 108, 4, 375).fill(C.successGreen);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.successGreen).text('FOUR PILLARS OF GUEST PASS SECURITY', 70, 126);

    const passFeatures = [
      { t: 'Pre-Approval by Resident', d: 'Residents generate digital passes in advance for expected guests, providing guest name, expected arrival date, and valid hours.' },
      { t: 'Secure QR Code & 6-Digit OTP', d: 'System generates an encrypted QR code and fallback 6-digit numeric OTP sent directly to the guest via WhatsApp or SMS.' },
      { t: 'Instant Camera QR Verification', d: 'The guard scans the guest QR code using the cabin webcam. GateSync validates pass status and logs entry in under 2 seconds.' },
      { t: 'Automatic Expiration & Single Use', d: 'Passes automatically deactivate upon exit or when the time window lapses, preventing unauthorized reuse.' }
    ];

    let pY = 156;
    passFeatures.forEach(item => {
      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(`•  ${item.t}`, 70, pY);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(item.d, 82, pY + 14, { width: 330, lineGap: 2.5 });
      pY += 72;
    });

    // Right Column: Pass Scanner Screenshot
    doc.roundedRect(450, 108, 460, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.font('Helvetica-Bold').fontSize(10).fillColor(C.primaryNavy).text('SYSTEM INTERFACE: QR CODE & PASS SCANNER MODAL', 468, 126);

    const scanImg = path.resolve('screenshots/fresh_pass_scanner_modal.png');
    if (fs.existsSync(scanImg)) {
      doc.image(scanImg, 468, 148, { width: 424, fit: [424, 315] });
    }
  }

  // ==========================================
  // SLIDE 8: SOCIETY ADMIN COMMAND CENTER
  // ==========================================
  {
    applyHeaderFooter('Section 07', 'Module Deep-Dive', 'Management Command Center & Society Operations', 'Real-Time Visibility Over Society Residents, Staff, and Financial Health', 8);

    // Left Column: Admin Capabilities
    doc.roundedRect(50, 108, 380, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(50, 108, 4, 375).fill(C.royalBlue);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.royalBlue).text('MANAGEMENT COMMAND CAPABILITIES', 70, 126);

    const adminModules = [
      { t: 'Financial Collections Trend & Accounting', d: 'Monthly maintenance revenue trajectory tracking (INR) with payment breakdown, pending dues, and automated digital receipts.' },
      { t: 'Resident & Flat Occupancy Records', d: 'Complete directory of 11+ occupied society units, family members, registered vehicles, and tenant lease statuses.' },
      { t: 'Staff Administration & Active Guard Duty', d: 'Real-time monitoring of active security personnel on shift, assigned gate booths, and duty logs.' },
      { t: 'Emergency Notice Board & Broadcasts', d: 'Instant publishing of critical circulars, water maintenance alerts, and society meeting notices to all resident phones.' }
    ];

    let aY = 156;
    adminModules.forEach(item => {
      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(`•  ${item.t}`, 70, aY);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(item.d, 82, aY + 14, { width: 330, lineGap: 2.5 });
      aY += 72;
    });

    // Right Column: Actual Dashboard Screenshot (Matching User's App Theme)
    doc.roundedRect(450, 108, 460, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.font('Helvetica-Bold').fontSize(10).fillColor(C.primaryNavy).text('SYSTEM INTERFACE: ADMIN PORTAL DASHBOARD', 468, 126);

    const adminImg = path.resolve('screenshots/actual_gatesync_dashboard_dark.png');
    if (fs.existsSync(adminImg)) {
      doc.image(adminImg, 468, 148, { width: 424, fit: [424, 315] });
    }
  }

  // ==========================================
  // SLIDE 9: SECURITY ARCHITECTURE & DATA PRIVACY
  // ==========================================
  {
    applyHeaderFooter('Section 08', 'Security Architecture', 'Security Architecture & Data Protection', 'Robust Defense Mechanisms Safeguarding Resident Privacy and Community Assets', 9);

    const secCards = [
      {
        title: 'JWT STATELESS AUTHENTICATION',
        color: C.royalBlue,
        x: 50, y: 108, w: 415, h: 178,
        desc: 'All API requests require cryptographically signed JSON Web Tokens (JWT) passed via Authorization Bearer headers. Tokens have strict 24-hour expiration windows and invalid signatures are immediately rejected with HTTP 401.'
      },
      {
        title: 'BCRYPT PASSWORD HASHING',
        color: C.primaryNavy,
        x: 495, y: 108, w: 415, h: 178,
        desc: 'All user credentials (Residents, Security Guards, Admins) are salted and hashed using 12-round BCrypt before persistence. Passwords are never stored or transmitted in plain text.'
      },
      {
        title: 'ROLE-BASED ACCESS CONTROL (RBAC)',
        color: C.successGreen,
        x: 50, y: 305, w: 415, h: 178,
        desc: 'Spring Security enforces strict path-level authorization: Guard endpoints (/api/guard/**), Resident endpoints (/api/resident/**), and Admin endpoints (/api/admin/**) are strictly isolated with zero cross-role privilege escalation.'
      },
      {
        title: 'DATA PRIVACY & AUDIT LOGGING',
        color: C.accentBlue,
        x: 495, y: 305, w: 415, h: 178,
        desc: 'Visitor phone numbers are masked in public registry views to prevent data scraping. Every entry, approval, denial, and gate checkout is immutably timestamped with the exact Guard ID and timestamp for forensic audit trails.'
      }
    ];

    secCards.forEach(c => {
      doc.roundedRect(c.x, c.y, c.w, c.h, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
      doc.rect(c.x, c.y, 4, c.h).fill(c.color);

      doc.font('Helvetica-Bold').fontSize(11).fillColor(c.color).text(c.title, c.x + 20, c.y + 18);
      doc.font('Helvetica').fontSize(9.5).fillColor(C.textBody).text(c.desc, c.x + 20, c.y + 40, { width: c.w - 40, lineGap: 3.5 });
    });
  }

  // ==========================================
  // SLIDE 10: CLOUD DEVOPS & DEPLOYMENT
  // ==========================================
  {
    applyHeaderFooter('Section 09', 'Cloud DevOps', 'Production Cloud Deployment Architecture', 'Continuous Delivery, Containerization, and Automated Uptime Monitoring', 10);

    const devopsPillars = [
      {
        title: 'FRONTEND PWA HOSTING',
        tech: 'GitHub Pages CDN',
        color: C.royalBlue,
        x: 50,
        bullets: [
          'Vite-optimized production bundle with route code-splitting and asset compression.',
          'Configured with custom base routing (`/sms1/`) and HTTPS encryption.',
          'PWA Service Worker caches core static shell for offline accessibility.',
          'Zero-cost hosting with 99.99% worldwide edge delivery SLA.'
        ]
      },
      {
        title: 'DOCKER BACKEND CONTAINER',
        tech: 'Render Cloud (Java 21 JRE)',
        color: C.primaryNavy,
        x: 350,
        bullets: [
          'Multi-stage Dockerfile compiling Spring Boot with Maven 3.9 on Eclipse Temurin 21.',
          'Minimal production container size (280MB) on Alpine Linux runtime.',
          'Configured to listen dynamically on `$PORT` (10000) with memory constraints.',
          'Automated git webhook triggers rebuild upon every push to `main` branch.'
        ]
      },
      {
        title: 'AUTOMATED NAP STOPPER',
        tech: 'Uptime Keep-Alive Service',
        color: C.successGreen,
        x: 650,
        bullets: [
          'Custom REST endpoint (`/api/health`) returning server timestamp and system status.',
          'External cron job pings `/api/health` every 10 minutes.',
          'Completely eliminates Render 50-second free tier cold start delay.',
          'Ensures gate guards and residents experience instant sub-second response times.'
        ]
      }
    ];

    devopsPillars.forEach(p => {
      doc.roundedRect(p.x, 108, 260, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
      doc.rect(p.x, 108, 260, 4).fill(p.color);

      doc.font('Helvetica-Bold').fontSize(11).fillColor(p.color).text(p.title, p.x + 18, 126);
      doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textDark).text(p.tech, p.x + 18, 142);

      let bY = 172;
      p.bullets.forEach(b => {
        doc.font('Helvetica-Bold').fontSize(9.5).fillColor(p.color).text('•', p.x + 18, bY);
        doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(b, p.x + 30, bY, { width: 210, lineGap: 2.5 });
        bY += 68;
      });
    });
  }

  // ==========================================
  // SLIDE 11: TESTING, BENCHMARKS & ROADMAP
  // ==========================================
  {
    applyHeaderFooter('Section 10', 'Validation & Roadmap', 'System Testing, Benchmarks & Future Roadmap', 'Rigorous End-to-End Validation and Upcoming Engineering Enhancements', 11);

    // Left Column: Testing
    doc.roundedRect(50, 108, 415, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(50, 108, 4, 375).fill(C.royalBlue);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.royalBlue).text('EMPIRICAL PERFORMANCE BENCHMARKS', 70, 126);

    const metrics = [
      { m: '< 150 ms', l: 'WebSocket Alert Delivery Latency', d: 'From guard submission to resident screen popup under 50 concurrent active connections.' },
      { m: '< 10 sec', l: 'Visitor Registration Intake Time', d: 'Reduced from 2–4 minutes on paper registers down to under 10 seconds at the gate cabin.' },
      { m: '100 %', l: 'Role-Based Access Enforcement', d: 'Zero cross-role privilege leakage across 48 automated test suites verifying API boundaries.' },
      { m: '99.8 %', l: 'Cloud System Uptime', d: 'Maintained across continuous demonstration through the `/api/health` automated keep-alive system.' }
    ];

    let mY = 154;
    metrics.forEach(item => {
      doc.font('Helvetica-Bold').fontSize(16).fillColor(C.royalBlue).text(item.m, 70, mY);
      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(item.l, 150, mY);
      doc.font('Helvetica').fontSize(8.5).fillColor(C.textBody).text(item.d, 150, mY + 14, { width: 295, lineGap: 2 });
      mY += 72;
    });

    // Right Column: Future Roadmap
    doc.roundedRect(495, 108, 415, 375, 6).lineWidth(1).fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(495, 108, 4, 375).fill(C.successGreen);

    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.successGreen).text('FUTURE ENGINEERING ROADMAP', 515, 126);

    const roadmap = [
      { t: 'ANPR Automated License Plate Recognition', d: 'Deploy edge camera models to automatically read vehicle number plates and open boom barriers for authorized resident vehicles.' },
      { t: 'RFID Boom Barrier Hardware Integration', d: 'Integrate physical microcontroller relays (ESP32/Raspberry Pi) for RFID tag automated boom barrier actuation.' },
      { t: 'AI Facial Recognition for Domestic Staff', d: 'Provide seamless biometric gate entry for recurring service personnel (maids, drivers, gardeners) without guard intervention.' },
      { t: 'Multi-Society SaaS Architecture', d: 'Extend database schemas to support multi-tenant isolation, allowing multiple residential complexes to share a centralized cluster.' }
    ];

    let rY = 154;
    roadmap.forEach(item => {
      doc.font('Helvetica-Bold').fontSize(10).fillColor(C.textDark).text(`•  ${item.t}`, 515, rY);
      doc.font('Helvetica').fontSize(9).fillColor(C.textBody).text(item.d, 527, rY + 14, { width: 360, lineGap: 2.5 });
      rY += 72;
    });
  }

  // ==========================================
  // SLIDE 12: CONCLUSION & THANK YOU
  // ==========================================
  {
    doc.addPage({ size: [960, 540], margins: { top: 0, bottom: 0, left: 0, right: 0 } });
    doc.rect(0, 0, 960, 540).fill(C.bgLight);

    // Top Royal Blue Accent Bar
    doc.rect(0, 0, 960, 6).fill(C.royalBlue);

    // Thank You Title
    doc.font('Helvetica-Bold')
       .fontSize(34)
       .fillColor(C.primaryNavy)
       .text('CONCLUSION & THANK YOU', 60, 42);

    doc.font('Helvetica-Bold')
       .fontSize(14)
       .fillColor(C.royalBlue)
       .text('GateSync — Redefining Modern Residential Security & Community Management', 60, 88);

    // Top Summary Card
    doc.roundedRect(60, 118, 840, 72, 6)
       .lineWidth(1)
       .fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(60, 118, 4, 72).fill(C.royalBlue);

    doc.font('Helvetica-Bold').fontSize(10.5).fillColor(C.primaryNavy).text('PROJECT SUMMARY & CORE IMPACT', 80, 130);
    doc.font('Helvetica').fontSize(9.5).fillColor(C.textBody).text('GateSync proves that a fully digital, real-time security management platform eliminates manual register bottlenecks, secures resident phone privacy, and accelerates visitor verification to under 2 seconds using enterprise Java & React architecture.', 80, 148, { width: 800, lineGap: 3 });

    // Middle Card: Live Project Deliverables & URLs
    doc.roundedRect(60, 202, 840, 134, 6)
       .lineWidth(1)
       .fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(60, 202, 4, 134).fill(C.successGreen);

    doc.font('Helvetica-Bold').fontSize(10.5).fillColor(C.successGreen).text('LIVE PROJECT DEPLOYMENTS & REPOSITORIES', 80, 216);

    const links = [
      { l: 'Live Web Application (PWA):', u: 'https://arpitthakor28.github.io/sms1/  (Responsive mobile & desktop client)' },
      { l: 'Cloud Backend API (Render):', u: 'https://sms1-c9sj.onrender.com  (Spring Boot 3 + Java 21 REST & WebSocket server)' },
      { l: 'Uptime Keep-Alive Monitor:', u: 'https://sms1-c9sj.onrender.com/api/health  (Automated Nap Stopper endpoint)' },
      { l: 'GitHub Source Repository:', u: 'https://github.com/arpitthakor28/sms1  (Complete full-stack source code)' }
    ];

    let lY = 238;
    links.forEach(item => {
      doc.font('Helvetica-Bold').fontSize(9).fillColor(C.textDark).text(`•  ${item.l}`, 80, lY);
      doc.font('Helvetica').fontSize(9).fillColor(C.royalBlue).text(item.u, 260, lY);
      lY += 21;
    });

    // Bottom Credentials Card
    doc.roundedRect(60, 348, 840, 142, 6)
       .lineWidth(1)
       .fillAndStroke(C.cardBg, C.cardBorder);
    doc.rect(60, 348, 4, 142).fill(C.primaryNavy);

    // Left: Student
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('STUDENT DEVELOPER', 85, 362);
    doc.font('Helvetica-Bold').fontSize(15).fillColor(C.textDark).text('ARPITSINH THAKOR', 85, 378);
    doc.font('Helvetica-Bold').fontSize(12).fillColor(C.royalBlue).text('Enrollment Number: 23SE02IE040', 85, 400);
    doc.font('Helvetica').fontSize(10.5).fillColor(C.textBody).text('B.Tech in Information Technology & Engineering', 85, 420);
    doc.font('Helvetica-Bold').fontSize(9.5).fillColor(C.primaryNavy).text('Technology Focus: Full Stack Development - Java', 85, 438);

    // Right: Institution
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(C.textMuted).text('DEPARTMENT & INSTITUTION', 520, 362);
    doc.font('Helvetica-Bold').fontSize(13).fillColor(C.textDark).text('School of Engineering', 520, 378);
    doc.font('Helvetica-Bold').fontSize(11).fillColor(C.royalBlue).text('P. P. Savani University, Surat, Gujarat', 520, 396);
    doc.font('Helvetica').fontSize(10).fillColor(C.textBody).text('Major Engineering Project Presentation  •  Academic Year 2025–2026', 520, 416);

    // Footer
    doc.font('Helvetica')
       .fontSize(8.5)
       .fillColor(C.textMuted)
       .text('GateSync — Smart Society Security System  |  All Rights Reserved © 2026', 60, 515);
  }

  doc.end();

  stream.on('finish', () => {
    console.log(`Human Executive PDF Generated: ${outputPath}`);

    // Copy to Downloads, public, and docs
    const dlPath = 'c:\\Users\\ASUS\\Downloads\\GateSync_Project_Presentation.pdf';
    const pubPath = path.resolve('public/GateSync_Project_Presentation.pdf');
    const docsPath = path.resolve('docs/GateSync_Project_Presentation.pdf');

    try {
      fs.copyFileSync(outputPath, dlPath);
      console.log(`Copied PDF to Downloads: ${dlPath}`);
    } catch (e) {
      console.warn('Could not copy PDF to Downloads:', e.message);
    }

    try {
      fs.copyFileSync(outputPath, pubPath);
      fs.copyFileSync(outputPath, docsPath);
      console.log(`Copied PDF to public/ and docs/`);
    } catch (e) {
      console.warn('Could not copy PDF to web dirs:', e.message);
    }
  });
}

createHumanExecutivePresentationPDF();
