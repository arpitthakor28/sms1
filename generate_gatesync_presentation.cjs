const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

async function createHumanExecutivePPTX() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9'; // 10 x 5.625 inches
  pres.author = 'Arpitsinh Thakor (23SE02IE040)';
  pres.title = 'GATESYNC - Smart Residential Security & Visitor Management System';
  pres.company = 'School of Engineering, P. P. Savani University';

  // Clean, Human Executive Cold Palette (Light Theme with Corporate Navy & Royal Blue)
  const C = {
    bgLight: 'F8FAFC',       // Clean executive off-white
    cardBg: 'FFFFFF',        // Pure white card
    cardBorder: 'E2E8F0',    // Soft cool slate border
    primaryNavy: '0F2942',   // Deep authoritative navy
    royalBlue: '1E40AF',     // Professional academic blue
    accentBlue: '0284C7',    // Tech blue accent
    textDark: '0F172A',      // High-contrast charcoal headings
    textBody: '334155',      // Clean readable slate body
    textMuted: '64748B',     // Cool slate metadata
    alertRed: 'DC2626',      // Corporate red
    successGreen: '16A34A',  // Corporate green
    headerDivider: 'E2E8F0'  // Clean header line
  };

  function applyHeaderFooter(slide, sectionNum, category, title, subtitle, slideNum) {
    slide.background = { color: C.bgLight };

    // Top Royal Blue Accent Line
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.05,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    // Section Tag - Clean Human Typography (No awkward oval pill buttons)
    slide.addText(`${sectionNum.toUpperCase()}  |  ${category.toUpperCase()}`, {
      x: 0.6, y: 0.24, w: 6.0, h: 0.22,
      fontSize: 8.5, fontFace: 'Calibri', color: C.royalBlue, bold: true
    });

    // Slide Title
    slide.addText(title, {
      x: 0.6, y: 0.46, w: 8.8, h: 0.38,
      fontSize: 18, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });

    // Subtitle
    if (subtitle) {
      slide.addText(subtitle, {
        x: 0.6, y: 0.84, w: 8.8, h: 0.22,
        fontSize: 9.5, fontFace: 'Calibri', color: C.textMuted
      });
    }

    // Header divider line
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.1, w: 8.8, h: 0.01,
      fill: { color: C.headerDivider },
      line: { color: C.headerDivider, width: 0 }
    });

    // Footer divider line
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 5.2, w: 8.8, h: 0.01,
      fill: { color: C.headerDivider },
      line: { color: C.headerDivider, width: 0 }
    });

    // Footer text left
    slide.addText('GateSync — Smart Society Security System  |  Arpitsinh Thakor (23SE02IE040)', {
      x: 0.6, y: 5.25, w: 6.5, h: 0.22,
      fontSize: 8.5, fontFace: 'Calibri', color: C.textMuted
    });

    // Footer text right
    slide.addText(`SCHOOL OF ENGINEERING  •  SLIDE ${slideNum} / 12`, {
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

    // Top Royal Blue Accent Bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.08,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    // University Header Line (Clean human layout)
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 0.36, w: 0.05, h: 0.22,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });
    slide.addText('P. P. SAVANI UNIVERSITY  •  SCHOOL OF ENGINEERING', {
      x: 0.72, y: 0.36, w: 6.0, h: 0.24,
      fontSize: 10.5, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });

    // University Logo
    const logoPath = path.resolve('screenshots/ppsu_logo.png');
    if (fs.existsSync(logoPath)) {
      slide.addImage({ path: logoPath, x: 7.8, y: 0.3, w: 1.6, h: 0.65 });
    }

    // Main Project Title
    slide.addText('GATESYNC', {
      x: 0.6, y: 0.8, w: 8.8, h: 0.65,
      fontSize: 40, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });

    // Subtitle
    slide.addText('Smart Residential Society Security & Visitor Management System', {
      x: 0.6, y: 1.42, w: 8.8, h: 0.3,
      fontSize: 15, fontFace: 'Calibri', color: C.royalBlue, bold: true
    });

    // Abstract
    slide.addText('A full-stack Progressive Web Application (PWA) designed to modernize residential community security operations. Replaces manual paper registers with real-time mobile push notifications for residents, 1-tap courier clearance, pre-approved digital QR guest passes, and society maintenance accounting.', {
      x: 0.6, y: 1.76, w: 8.8, h: 0.55,
      fontSize: 10, fontFace: 'Calibri', color: C.textBody
    });

    // Credentials Container Card (Clean white card with navy stripe)
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 2.45, w: 8.8, h: 2.5,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 2.45, w: 0.08, h: 2.5,
      fill: { color: C.primaryNavy },
      line: { color: C.primaryNavy, width: 0 }
    });

    // Left Column: Student Credentials
    slide.addText([
      { text: 'STUDENT DEVELOPER\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'ARPITSINH THAKOR\n\n', options: { fontSize: 16, color: C.textDark, bold: true } },
      { text: 'ENROLLMENT NUMBER\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: '23SE02IE040\n\n', options: { fontSize: 14, color: C.royalBlue, bold: true } },
      { text: 'DEGREE & BRANCH\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'B.Tech in Information Technology & Engineering\n', options: { fontSize: 11, color: C.textDark, bold: true } },
      { text: 'School of Engineering', options: { fontSize: 10, color: C.textBody } }
    ], {
      x: 0.85, y: 2.6, w: 4.2, h: 2.2, fontFace: 'Calibri'
    });

    // Right Column: Institution & Technology Focus
    slide.addText([
      { text: 'INSTITUTION\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'P. P. Savani University\n', options: { fontSize: 13, color: C.textDark, bold: true } },
      { text: 'Surat, Gujarat, India\n\n', options: { fontSize: 9.5, color: C.textBody } },
      { text: 'PROJECT PRESENTATION\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'Major Engineering Project Presentation\n', options: { fontSize: 12, color: C.textDark, bold: true } },
      { text: 'Academic Year 2025–2026\n\n', options: { fontSize: 10, color: C.textBody } },
      { text: 'TECHNOLOGY FOCUS\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'Full Stack Development - Java\n', options: { fontSize: 13, color: C.royalBlue, bold: true } },
      { text: 'Spring Boot 3 REST API & React PWA Cloud Architecture', options: { fontSize: 9.5, color: C.textBody } }
    ], {
      x: 5.3, y: 2.6, w: 3.9, h: 2.2, fontFace: 'Calibri'
    });
  }

  // ==========================================
  // SLIDE 2: PROBLEM STATEMENT & MOTIVATION
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, 'Section 01', 'Project Background', 'The Problem with Traditional Gate Security', 'Operational Vulnerabilities & Bottlenecks of Physical Paper Logbooks', 2);

    // Left Card: Paper Register Limitations
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 4.25, h: 3.8,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 0.08, h: 3.8,
      fill: { color: C.alertRed },
      line: { color: C.alertRed, width: 0 }
    });

    slide.addText('TRADITIONAL PAPER REGISTER LIMITATIONS', {
      x: 0.85, y: 1.4, w: 3.85, h: 0.28,
      fontSize: 11, fontFace: 'Calibri', color: C.alertRed, bold: true
    });

    slide.addText([
      { text: '•  Long Gate Queues at Peak Hours\n', options: { bold: true, color: C.textDark } },
      { text: 'Guards manually record visitor names, phone numbers, and flat numbers in physical registers. Each entry takes 2–4 minutes, creating severe vehicle and pedestrian gate bottlenecks.\n\n', options: { color: C.textBody } },
      { text: '•  Zero Privacy for Residents & Phone Leakage\n', options: { bold: true, color: C.textDark } },
      { text: 'The open physical logbook sits on the guard desk. Any delivery boy or visitor can read, copy, or photograph resident contact numbers and private flat details.\n\n', options: { color: C.textBody } },
      { text: '•  Unanswered Intercoms & Missed Verification Calls\n', options: { bold: true, color: C.textDark } },
      { text: 'Guards repeatedly attempt to reach residents via intercom or cellular calls. When residents are busy or away, guards either let visitors in unverified or strand guests outside.\n\n', options: { color: C.textBody } },
      { text: '•  Overwhelming Courier Delivery Volumes\n', options: { bold: true, color: C.textDark } },
      { text: 'Daily e-commerce couriers (Swiggy, Zomato, Amazon, Blinkit) create excessive manual documentation overhead for guards handling repetitive entries.', options: { color: C.textBody } }
    ], {
      x: 0.85, y: 1.75, w: 3.85, h: 3.15,
      fontSize: 8.5, fontFace: 'Calibri'
    });

    // Right Card: The GateSync Solution
    slide.addShape(pres.ShapeType.rect, {
      x: 5.15, y: 1.25, w: 4.25, h: 3.8,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 5.15, y: 1.25, w: 0.08, h: 3.8,
      fill: { color: C.successGreen },
      line: { color: C.successGreen, width: 0 }
    });

    slide.addText('THE GATESYNC DIGITAL SOLUTION', {
      x: 5.4, y: 1.4, w: 3.85, h: 0.28,
      fontSize: 11, fontFace: 'Calibri', color: C.successGreen, bold: true
    });

    slide.addText([
      { text: '•  Instant Smartphone Push Alerts (< 150ms)\n', options: { bold: true, color: C.textDark } },
      { text: 'When a visitor arrives, the guard submits details in under 10 seconds. An immediate pop-up notification appears on the resident phone with visitor details and photo.\n\n', options: { color: C.textBody } },
      { text: '•  1-Tap Resident Remote Approvals\n', options: { bold: true, color: C.textDark } },
      { text: 'Residents approve or deny entry with a single tap from anywhere (at home, work, or travelling) with zero voice calls required.\n\n', options: { color: C.textBody } },
      { text: '•  Pre-Approved Guest Passes with Digital QR\n', options: { bold: true, color: C.textDark } },
      { text: 'Residents generate digital gate passes beforehand for expected guests. Visitors display their QR code or 6-digit OTP for 2-second fast clearance.\n\n', options: { color: C.textBody } },
      { text: '•  1-Tap Delivery Clearance for Verified Couriers\n', options: { bold: true, color: C.textDark } },
      { text: 'One-click quick delivery intake buttons for Amazon, Flipkart, Swiggy, and Zomato streamline high-frequency courier entries without manual typing.', options: { color: C.textBody } }
    ], {
      x: 5.4, y: 1.75, w: 3.85, h: 3.15,
      fontSize: 8.5, fontFace: 'Calibri'
    });
  }

  // ==========================================
  // SLIDE 3: SYSTEM ARCHITECTURE & TECH STACK
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, 'Section 02', 'Technical Architecture', 'Full Stack System Architecture', 'Decoupled 3-Tier Enterprise Architecture (Client, Service, Database)', 3);

    const tiers = [
      {
        title: 'FRONTEND CLIENT',
        tech: 'React 19 PWA & Vite',
        color: C.royalBlue,
        x: 0.6,
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
        x: 3.7,
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
        x: 6.8,
        items: [
          { h: 'Database Persistence', d: 'MongoDB Atlas & PostgreSQL relational mapping for visitor history, user profiles, and accounts.' },
          { h: 'Docker Containerization', d: 'Multi-stage Maven + Eclipse Temurin 21 JRE container image hosted on Render Cloud.' },
          { h: 'Static Frontend CDN', d: 'Vite production build deployed on GitHub Pages with automated continuous deployment.' },
          { h: 'Automated Nap Stopper', d: 'Cron uptime monitor pinging backend health endpoint every 10 minutes for 99.8% uptime.' }
        ]
      }
    ];

    tiers.forEach(tier => {
      slide.addShape(pres.ShapeType.rect, {
        x: tier.x, y: 1.25, w: 2.6, h: 3.8,
        fill: { color: C.cardBg },
        line: { color: C.cardBorder, width: 1 }
      });
      slide.addShape(pres.ShapeType.rect, {
        x: tier.x, y: 1.25, w: 2.6, h: 0.05,
        fill: { color: tier.color },
        line: { color: tier.color, width: 0 }
      });

      slide.addText(tier.title, {
        x: tier.x + 0.15, y: 1.4, w: 2.3, h: 0.22,
        fontSize: 10, fontFace: 'Calibri', color: tier.color, bold: true
      });
      slide.addText(tier.tech, {
        x: tier.x + 0.15, y: 1.62, w: 2.3, h: 0.25,
        fontSize: 12, fontFace: 'Calibri', color: C.textDark, bold: true
      });

      let textRuns = [];
      tier.items.forEach(it => {
        textRuns.push({ text: `•  ${it.h}\n`, options: { bold: true, color: C.primaryNavy } });
        textRuns.push({ text: `${it.d}\n\n`, options: { color: C.textBody } });
      });

      slide.addText(textRuns, {
        x: tier.x + 0.15, y: 1.95, w: 2.3, h: 2.95,
        fontSize: 8, fontFace: 'Calibri'
      });
    });
  }

  // ==========================================
  // SLIDE 4: USER ROLES & OPERATIONAL WORKFLOWS
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, 'Section 03', 'Operational Model', 'User Roles & Operational Workflows', 'Three Distinct Permission Levels Ensuring Security, Convenience, and Oversight', 4);

    const roles = [
      {
        role: 'SECURITY GUARD CABIN',
        badge: 'GATE ENTRANCE DESK',
        color: C.royalBlue,
        x: 0.6,
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
        x: 3.7,
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
        x: 6.8,
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
      slide.addShape(pres.ShapeType.rect, {
        x: r.x, y: 1.25, w: 2.6, h: 3.8,
        fill: { color: C.cardBg },
        line: { color: C.cardBorder, width: 1 }
      });
      slide.addShape(pres.ShapeType.rect, {
        x: r.x, y: 1.25, w: 2.6, h: 0.05,
        fill: { color: r.color },
        line: { color: r.color, width: 0 }
      });

      slide.addText(r.badge, {
        x: r.x + 0.15, y: 1.4, w: 2.3, h: 0.22,
        fontSize: 10, fontFace: 'Calibri', color: r.color, bold: true
      });
      slide.addText(r.role, {
        x: r.x + 0.15, y: 1.62, w: 2.3, h: 0.25,
        fontSize: 12, fontFace: 'Calibri', color: C.textDark, bold: true
      });
      slide.addText(r.desc, {
        x: r.x + 0.15, y: 1.9, w: 2.3, h: 0.55,
        fontSize: 8.5, fontFace: 'Calibri', color: C.textMuted
      });

      slide.addText('CORE RESPONSIBILITIES:', {
        x: r.x + 0.15, y: 2.5, w: 2.3, h: 0.2,
        fontSize: 8.5, fontFace: 'Calibri', color: C.textDark, bold: true
      });

      let dutiesText = r.duties.map(d => `✓  ${d}`).join('\n\n');
      slide.addText(dutiesText, {
        x: r.x + 0.15, y: 2.75, w: 2.3, h: 2.15,
        fontSize: 8.5, fontFace: 'Calibri', color: C.textBody
      });
    });
  }

  // ==========================================
  // SLIDE 5: GUARD DESK & VISITOR INTAKE
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, 'Section 04', 'Module Deep-Dive', 'Security Guard Cabin Desk & Quick Entry', 'High-Speed Visitor Intake Flow Engineered for Zero Gate Congestion', 5);

    // Left Column: Capabilities
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 4.0, h: 3.8,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 0.08, h: 3.8,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    slide.addText('KEY GUARD DESK CAPABILITIES', {
      x: 0.85, y: 1.4, w: 3.6, h: 0.28,
      fontSize: 11, fontFace: 'Calibri', color: C.royalBlue, bold: true
    });

    slide.addText([
      { text: '•  Sub-10 Second Visitor Intake\n', options: { bold: true, color: C.textDark } },
      { text: 'Smart dropdowns for Building Block and Flat numbers auto-populate resident details, minimizing guard typing.\n\n', options: { color: C.textBody } },
      { text: '•  One-Tap Courier Buttons\n', options: { bold: true, color: C.textDark } },
      { text: 'Pre-configured buttons for Amazon, Flipkart, Swiggy, and Zomato instantly clear verified couriers without manual log overhead.\n\n', options: { color: C.textBody } },
      { text: '•  Live Status Queue Synchronization\n', options: { bold: true, color: C.textDark } },
      { text: 'Visual color-coded badges (Pending: Amber, Approved: Green, Denied: Red) update instantly via WebSockets as residents respond.\n\n', options: { color: C.textBody } },
      { text: '•  Visitor Photo & Vehicle Capture\n', options: { bold: true, color: C.textDark } },
      { text: 'WebRTC camera integration allows guards to attach a live visitor face snapshot and record vehicle registration numbers.', options: { color: C.textBody } }
    ], {
      x: 0.85, y: 1.75, w: 3.6, h: 3.15,
      fontSize: 8.5, fontFace: 'Calibri'
    });

    // Right Column: Realistic Application Screenshot
    slide.addShape(pres.ShapeType.rect, {
      x: 4.85, y: 1.25, w: 4.55, h: 3.8,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addText('SYSTEM INTERFACE: GUARD DESK & VISITOR REGISTRY', {
      x: 5.05, y: 1.4, w: 4.15, h: 0.25,
      fontSize: 9.5, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });

    const imgPath = path.resolve('screenshots/fresh_3_guard_desk.png');
    if (fs.existsSync(imgPath)) {
      slide.addImage({ path: imgPath, x: 5.05, y: 1.75, w: 4.15, h: 3.1 });
    }
  }

  // ==========================================
  // SLIDE 6: RESIDENT REAL-TIME ALERTS & 1-TAP APPROVAL
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, 'Section 05', 'Module Deep-Dive', 'Resident Instant Push Alert & 1-Tap Approval', 'Zero Phone Calls Required — Secure Gate Decisions in Under 2 Seconds', 6);

    // Left Column: Technical Workflow
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 4.0, h: 3.8,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 0.08, h: 3.8,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    slide.addText('REAL-TIME APPROVAL ARCHITECTURE', {
      x: 0.85, y: 1.4, w: 3.6, h: 0.28,
      fontSize: 11, fontFace: 'Calibri', color: C.royalBlue, bold: true
    });

    slide.addText([
      { text: '1.  Guard Dispatches Visitor Entry\n', options: { bold: true, color: C.textDark } },
      { text: 'Guard enters visitor details at cabin desk and hits Submit. The backend generates a temporary approval session.\n\n', options: { color: C.textBody } },
      { text: '2.  WebSocket Event Routing (< 150ms)\n', options: { bold: true, color: C.textDark } },
      { text: 'Spring Boot STOMP broker directs an arrival payload specifically to the subscribed flat channel.\n\n', options: { color: C.textBody } },
      { text: '3.  Modal Pop-Up Alert on Smartphone\n', options: { bold: true, color: C.textDark } },
      { text: 'Resident phone screen lights up with full-screen popup displaying visitor name, photo, purpose, and company.\n\n', options: { color: C.textBody } },
      { text: '4.  One-Tap Decision Return\n', options: { bold: true, color: C.textDark } },
      { text: 'Resident taps "Approve Entry" or "Deny Entry". The decision is relayed instantly to the guard screen with an audible chime.', options: { color: C.textBody } }
    ], {
      x: 0.85, y: 1.75, w: 3.6, h: 3.15,
      fontSize: 8.5, fontFace: 'Calibri'
    });

    // Right Column: Arrival Alert Screenshot
    slide.addShape(pres.ShapeType.rect, {
      x: 4.85, y: 1.25, w: 4.55, h: 3.8,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addText('SYSTEM INTERFACE: RESIDENT REAL-TIME POPUP ALERT', {
      x: 5.05, y: 1.4, w: 4.15, h: 0.25,
      fontSize: 9.5, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });

    const alertImg = path.resolve('screenshots/fresh_fig_8_3_arrival_alert.png');
    if (fs.existsSync(alertImg)) {
      slide.addImage({ path: alertImg, x: 5.05, y: 1.75, w: 4.15, h: 3.1 });
    }
  }

  // ==========================================
  // SLIDE 7: PRE-APPROVED GUEST PASSES & QR SCANNER
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, 'Section 06', 'Module Deep-Dive', 'Pre-Approved Guest Passes & Digital QR Scanner', 'Frictionless Entry for Family, Party Guests, and Service Personnel', 7);

    // Left Column: Capabilities
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 4.0, h: 3.8,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 0.08, h: 3.8,
      fill: { color: C.successGreen },
      line: { color: C.successGreen, width: 0 }
    });

    slide.addText('FOUR PILLARS OF GUEST PASS SECURITY', {
      x: 0.85, y: 1.4, w: 3.6, h: 0.28,
      fontSize: 11, fontFace: 'Calibri', color: C.successGreen, bold: true
    });

    slide.addText([
      { text: '•  Pre-Approval by Resident\n', options: { bold: true, color: C.textDark } },
      { text: 'Residents generate digital passes in advance for expected guests, providing guest name, expected arrival date, and valid hours.\n\n', options: { color: C.textBody } },
      { text: '•  Secure QR Code & 6-Digit OTP\n', options: { bold: true, color: C.textDark } },
      { text: 'System generates an encrypted QR code and fallback 6-digit numeric OTP sent directly to the guest via WhatsApp or SMS.\n\n', options: { color: C.textBody } },
      { text: '•  Instant Camera QR Verification\n', options: { bold: true, color: C.textDark } },
      { text: 'The guard scans the guest QR code using the cabin webcam. GateSync validates pass status and logs entry in under 2 seconds.\n\n', options: { color: C.textBody } },
      { text: '•  Automatic Expiration & Single Use\n', options: { bold: true, color: C.textDark } },
      { text: 'Passes automatically deactivate upon exit or when the time window lapses, preventing unauthorized reuse.', options: { color: C.textBody } }
    ], {
      x: 0.85, y: 1.75, w: 3.6, h: 3.15,
      fontSize: 8.5, fontFace: 'Calibri'
    });

    // Right Column: Pass Scanner Screenshot
    slide.addShape(pres.ShapeType.rect, {
      x: 4.85, y: 1.25, w: 4.55, h: 3.8,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addText('SYSTEM INTERFACE: QR CODE & PASS SCANNER MODAL', {
      x: 5.05, y: 1.4, w: 4.15, h: 0.25,
      fontSize: 9.5, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });

    const scanImg = path.resolve('screenshots/fresh_pass_scanner_modal.png');
    if (fs.existsSync(scanImg)) {
      slide.addImage({ path: scanImg, x: 5.05, y: 1.75, w: 4.15, h: 3.1 });
    }
  }

  // ==========================================
  // SLIDE 8: SOCIETY ADMIN COMMAND CENTER
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, 'Section 07', 'Module Deep-Dive', 'Management Command Center & Society Operations', 'Real-Time Visibility Over Society Residents, Staff, and Financial Health', 8);

    // Left Column: Capabilities
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 4.0, h: 3.8,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 0.08, h: 3.8,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    slide.addText('MANAGEMENT COMMAND CAPABILITIES', {
      x: 0.85, y: 1.4, w: 3.6, h: 0.28,
      fontSize: 11, fontFace: 'Calibri', color: C.royalBlue, bold: true
    });

    slide.addText([
      { text: '•  Financial Collections Trend & Accounting\n', options: { bold: true, color: C.textDark } },
      { text: 'Monthly maintenance revenue trajectory tracking (INR) with payment breakdown, pending dues, and automated digital receipts.\n\n', options: { color: C.textBody } },
      { text: '•  Resident & Flat Occupancy Records\n', options: { bold: true, color: C.textDark } },
      { text: 'Complete directory of 11+ occupied society units, family members, registered vehicles, and tenant lease statuses.\n\n', options: { color: C.textBody } },
      { text: '•  Staff Administration & Active Guard Duty\n', options: { bold: true, color: C.textDark } },
      { text: 'Real-time monitoring of active security personnel on shift, assigned gate booths, and duty logs.\n\n', options: { color: C.textBody } },
      { text: '•  Emergency Notice Board & Broadcasts\n', options: { bold: true, color: C.textDark } },
      { text: 'Instant publishing of critical circulars, water maintenance alerts, and society meeting notices to all resident phones.', options: { color: C.textBody } }
    ], {
      x: 0.85, y: 1.75, w: 3.6, h: 3.15,
      fontSize: 8.5, fontFace: 'Calibri'
    });

    // Right Column: Dashboard Screenshot (User's Dark App Theme)
    slide.addShape(pres.ShapeType.rect, {
      x: 4.85, y: 1.25, w: 4.55, h: 3.8,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addText('SYSTEM INTERFACE: ADMIN PORTAL DASHBOARD', {
      x: 5.05, y: 1.4, w: 4.15, h: 0.25,
      fontSize: 9.5, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });

    const adminImg = path.resolve('screenshots/actual_gatesync_dashboard_dark.png');
    if (fs.existsSync(adminImg)) {
      slide.addImage({ path: adminImg, x: 5.05, y: 1.75, w: 4.15, h: 3.1 });
    }
  }

  // ==========================================
  // SLIDE 9: SECURITY ARCHITECTURE & DATA PRIVACY
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, 'Section 08', 'Security Architecture', 'Security Architecture & Data Protection', 'Robust Defense Mechanisms Safeguarding Resident Privacy and Community Assets', 9);

    const secCards = [
      {
        title: 'JWT STATELESS AUTHENTICATION',
        color: C.royalBlue,
        x: 0.6, y: 1.25, w: 4.25, h: 1.8,
        desc: 'All API requests require cryptographically signed JSON Web Tokens (JWT) passed via Authorization Bearer headers. Tokens have strict 24-hour expiration windows and invalid signatures are immediately rejected with HTTP 401.'
      },
      {
        title: 'BCRYPT PASSWORD HASHING',
        color: C.primaryNavy,
        x: 5.15, y: 1.25, w: 4.25, h: 1.8,
        desc: 'All user credentials (Residents, Security Guards, Admins) are salted and hashed using 12-round BCrypt before persistence. Passwords are never stored or transmitted in plain text.'
      },
      {
        title: 'ROLE-BASED ACCESS CONTROL (RBAC)',
        color: C.successGreen,
        x: 0.6, y: 3.25, w: 4.25, h: 1.8,
        desc: 'Spring Security enforces strict path-level authorization: Guard endpoints (/api/guard/**), Resident endpoints (/api/resident/**), and Admin endpoints (/api/admin/**) are strictly isolated with zero cross-role privilege escalation.'
      },
      {
        title: 'DATA PRIVACY & AUDIT LOGGING',
        color: C.accentBlue,
        x: 5.15, y: 3.25, w: 4.25, h: 1.8,
        desc: 'Visitor phone numbers are masked in public registry views to prevent data scraping. Every entry, approval, denial, and gate checkout is immutably timestamped with the exact Guard ID and timestamp for forensic audit trails.'
      }
    ];

    secCards.forEach(c => {
      slide.addShape(pres.ShapeType.rect, {
        x: c.x, y: c.y, w: c.w, h: c.h,
        fill: { color: C.cardBg },
        line: { color: C.cardBorder, width: 1 }
      });
      slide.addShape(pres.ShapeType.rect, {
        x: c.x, y: c.y, w: 0.08, h: c.h,
        fill: { color: c.color },
        line: { color: c.color, width: 0 }
      });

      slide.addText(c.title, {
        x: c.x + 0.2, y: c.y + 0.15, w: c.w - 0.4, h: 0.25,
        fontSize: 10.5, fontFace: 'Calibri', color: c.color, bold: true
      });
      slide.addText(c.desc, {
        x: c.x + 0.2, y: c.y + 0.45, w: c.w - 0.4, h: 1.2,
        fontSize: 9, fontFace: 'Calibri', color: C.textBody
      });
    });
  }

  // ==========================================
  // SLIDE 10: CLOUD DEVOPS & DEPLOYMENT
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, 'Section 09', 'Cloud DevOps', 'Production Cloud Deployment Architecture', 'Continuous Delivery, Containerization, and Automated Uptime Monitoring', 10);

    const devopsPillars = [
      {
        title: 'FRONTEND PWA HOSTING',
        tech: 'GitHub Pages CDN',
        color: C.royalBlue,
        x: 0.6,
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
        x: 3.7,
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
        x: 6.8,
        bullets: [
          'Custom REST endpoint (`/api/health`) returning server timestamp and system status.',
          'External cron job pings `/api/health` every 10 minutes.',
          'Completely eliminates Render 50-second free tier cold start delay.',
          'Ensures gate guards and residents experience instant sub-second response times.'
        ]
      }
    ];

    devopsPillars.forEach(p => {
      slide.addShape(pres.ShapeType.rect, {
        x: p.x, y: 1.25, w: 2.6, h: 3.8,
        fill: { color: C.cardBg },
        line: { color: C.cardBorder, width: 1 }
      });
      slide.addShape(pres.ShapeType.rect, {
        x: p.x, y: 1.25, w: 2.6, h: 0.05,
        fill: { color: p.color },
        line: { color: p.color, width: 0 }
      });

      slide.addText(p.title, {
        x: p.x + 0.15, y: 1.4, w: 2.3, h: 0.22,
        fontSize: 10, fontFace: 'Calibri', color: p.color, bold: true
      });
      slide.addText(p.tech, {
        x: p.x + 0.15, y: 1.62, w: 2.3, h: 0.25,
        fontSize: 12, fontFace: 'Calibri', color: C.textDark, bold: true
      });

      let bulletText = p.bullets.map(b => `•  ${b}`).join('\n\n');
      slide.addText(bulletText, {
        x: p.x + 0.15, y: 1.95, w: 2.3, h: 2.95,
        fontSize: 8.5, fontFace: 'Calibri', color: C.textBody
      });
    });
  }

  // ==========================================
  // SLIDE 11: TESTING, BENCHMARKS & ROADMAP
  // ==========================================
  {
    const slide = pres.addSlide();
    applyHeaderFooter(slide, 'Section 10', 'Validation & Roadmap', 'System Testing, Benchmarks & Future Roadmap', 'Rigorous End-to-End Validation and Upcoming Engineering Enhancements', 11);

    // Left Column: Testing
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 4.25, h: 3.8,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 0.08, h: 3.8,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    slide.addText('EMPIRICAL PERFORMANCE BENCHMARKS', {
      x: 0.85, y: 1.4, w: 3.85, h: 0.28,
      fontSize: 11, fontFace: 'Calibri', color: C.royalBlue, bold: true
    });

    slide.addText([
      { text: '< 150 ms  —  WebSocket Alert Latency\n', options: { bold: true, color: C.royalBlue } },
      { text: 'From guard submission to resident screen popup under 50 concurrent active connections.\n\n', options: { color: C.textBody } },
      { text: '< 10 sec  —  Visitor Registration Intake\n', options: { bold: true, color: C.royalBlue } },
      { text: 'Reduced from 2–4 minutes on paper registers down to under 10 seconds at the gate cabin.\n\n', options: { color: C.textBody } },
      { text: '100 %  —  Role-Based Access Enforcement\n', options: { bold: true, color: C.royalBlue } },
      { text: 'Zero cross-role privilege leakage across 48 automated test suites verifying API boundaries.\n\n', options: { color: C.textBody } },
      { text: '99.8 %  —  Cloud System Uptime\n', options: { bold: true, color: C.royalBlue } },
      { text: 'Maintained across continuous demonstration through the `/api/health` automated keep-alive system.', options: { color: C.textBody } }
    ], {
      x: 0.85, y: 1.75, w: 3.85, h: 3.15,
      fontSize: 8.5, fontFace: 'Calibri'
    });

    // Right Column: Future Roadmap
    slide.addShape(pres.ShapeType.rect, {
      x: 5.15, y: 1.25, w: 4.25, h: 3.8,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 5.15, y: 1.25, w: 0.08, h: 3.8,
      fill: { color: C.successGreen },
      line: { color: C.successGreen, width: 0 }
    });

    slide.addText('FUTURE ENGINEERING ROADMAP', {
      x: 5.4, y: 1.4, w: 3.85, h: 0.28,
      fontSize: 11, fontFace: 'Calibri', color: C.successGreen, bold: true
    });

    slide.addText([
      { text: '•  ANPR Automated License Plate Recognition\n', options: { bold: true, color: C.textDark } },
      { text: 'Deploy edge camera models to automatically read vehicle number plates and open boom barriers for authorized resident vehicles.\n\n', options: { color: C.textBody } },
      { text: '•  RFID Boom Barrier Hardware Integration\n', options: { bold: true, color: C.textDark } },
      { text: 'Integrate physical microcontroller relays (ESP32/Raspberry Pi) for RFID tag automated boom barrier actuation.\n\n', options: { color: C.textBody } },
      { text: '•  AI Facial Recognition for Domestic Staff\n', options: { bold: true, color: C.textDark } },
      { text: 'Provide seamless biometric gate entry for recurring service personnel (maids, drivers, gardeners) without guard intervention.\n\n', options: { color: C.textBody } },
      { text: '•  Multi-Society SaaS Architecture\n', options: { bold: true, color: C.textDark } },
      { text: 'Extend database schemas to support multi-tenant isolation, allowing multiple residential complexes to share a centralized cluster.', options: { color: C.textBody } }
    ], {
      x: 5.4, y: 1.75, w: 3.85, h: 3.15,
      fontSize: 8.5, fontFace: 'Calibri'
    });
  }

  // ==========================================
  // SLIDE 12: CONCLUSION & THANK YOU
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgLight };

    // Top Royal Blue Accent Bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.08,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    // Thank You Title
    slide.addText('CONCLUSION & THANK YOU', {
      x: 0.6, y: 0.35, w: 8.8, h: 0.55,
      fontSize: 32, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });

    slide.addText('GateSync — Redefining Modern Residential Security & Community Management', {
      x: 0.6, y: 0.88, w: 8.8, h: 0.28,
      fontSize: 13, fontFace: 'Calibri', color: C.royalBlue, bold: true
    });

    // Summary Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 8.8, h: 0.75,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 1.25, w: 0.08, h: 0.75,
      fill: { color: C.royalBlue },
      line: { color: C.royalBlue, width: 0 }
    });

    slide.addText('PROJECT SUMMARY & CORE IMPACT', {
      x: 0.85, y: 1.35, w: 8.3, h: 0.2,
      fontSize: 9.5, fontFace: 'Calibri', color: C.primaryNavy, bold: true
    });
    slide.addText('GateSync proves that a fully digital, real-time security management platform eliminates manual register bottlenecks, secures resident phone privacy, and accelerates visitor verification to under 2 seconds using enterprise Java & React architecture.', {
      x: 0.85, y: 1.58, w: 8.3, h: 0.35,
      fontSize: 9, fontFace: 'Calibri', color: C.textBody
    });

    // Live Links Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 2.15, w: 8.8, h: 1.35,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 2.15, w: 0.08, h: 1.35,
      fill: { color: C.successGreen },
      line: { color: C.successGreen, width: 0 }
    });

    slide.addText('LIVE PROJECT DEPLOYMENTS & REPOSITORIES', {
      x: 0.85, y: 2.25, w: 8.3, h: 0.2,
      fontSize: 9.5, fontFace: 'Calibri', color: C.successGreen, bold: true
    });

    slide.addText([
      { text: '•  Live Web Application (PWA):  ', options: { bold: true, color: C.textDark } },
      { text: 'https://arpitthakor28.github.io/sms1/  (Responsive mobile & desktop app)\n', options: { color: C.royalBlue } },
      { text: '•  Live Cloud Backend API:  ', options: { bold: true, color: C.textDark } },
      { text: 'https://sms1-c9sj.onrender.com  (Spring Boot 3 + Java 21 container on Render)\n', options: { color: C.royalBlue } },
      { text: '•  Continuous Health Monitor:  ', options: { bold: true, color: C.textDark } },
      { text: 'https://sms1-c9sj.onrender.com/api/health  (Nap Stopper Uptime Endpoint)\n', options: { color: C.royalBlue } },
      { text: '•  GitHub Source Code Repository:  ', options: { bold: true, color: C.textDark } },
      { text: 'https://github.com/arpitthakor28/sms1  (Full-stack codebase, reports & slides)', options: { color: C.royalBlue } }
    ], {
      x: 0.85, y: 2.5, w: 8.3, h: 0.95,
      fontSize: 8.5, fontFace: 'Calibri'
    });

    // Student Credentials Card
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 3.65, w: 8.8, h: 1.4,
      fill: { color: C.cardBg },
      line: { color: C.cardBorder, width: 1 }
    });
    slide.addShape(pres.ShapeType.rect, {
      x: 0.6, y: 3.65, w: 0.08, h: 1.4,
      fill: { color: C.primaryNavy },
      line: { color: C.primaryNavy, width: 0 }
    });

    slide.addText([
      { text: 'STUDENT DEVELOPER\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'ARPITSINH THAKOR\n', options: { fontSize: 14, color: C.textDark, bold: true } },
      { text: 'Enrollment Number: 23SE02IE040\n', options: { fontSize: 11, color: C.royalBlue, bold: true } },
      { text: 'B.Tech in Information Technology & Engineering\n', options: { fontSize: 9.5, color: C.textBody } },
      { text: 'Technology Focus: Full Stack Development - Java', options: { fontSize: 9.5, color: C.primaryNavy, bold: true } }
    ], {
      x: 0.85, y: 3.75, w: 4.4, h: 1.25, fontFace: 'Calibri'
    });

    slide.addText([
      { text: 'DEPARTMENT & INSTITUTION\n', options: { fontSize: 8.5, color: C.textMuted, bold: true } },
      { text: 'School of Engineering\n', options: { fontSize: 13, color: C.textDark, bold: true } },
      { text: 'P. P. Savani University, Surat, Gujarat\n', options: { fontSize: 10, color: C.royalBlue } },
      { text: 'Major Engineering Project Presentation  •  Academic Year 2025–2026', options: { fontSize: 9, color: C.textMuted } }
    ], {
      x: 5.4, y: 3.75, w: 3.8, h: 1.25, fontFace: 'Calibri'
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
  console.log(`Human Executive PPTX generated successfully: ${outputPath}`);

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

createHumanExecutivePPTX().catch(err => {
  console.error('Error generating PPTX:', err);
  process.exit(1);
});
