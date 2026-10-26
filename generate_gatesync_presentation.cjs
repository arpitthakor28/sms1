const pptxgen = require('pptxgenjs');
const path = require('path');
const fs = require('fs');

async function createPresentation() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_16x9'; // 10 x 5.625 inches
  pres.author = 'Arpitsinh Thakor (23SE02IE040)';
  pres.title = 'GATESYNC - Smart Residential Security & Visitor Management Platform';
  pres.company = 'P. P. Savani University';

  // Cold temperature color palette
  const C = {
    bgDark: '0B132B',       // Deepest navy
    bgCard: '162238',       // Cold slate card background
    bgCardBorder: '243656', // Cool slate outline
    accentCyan: '38BDF8',   // Icy cyan highlight
    accentBlue: '0284C7',   // Cold vibrant sky blue
    accentLight: 'E0F2FE',  // Frost white-blue
    accentEmerald: '10B981',// Mint confirmation
    textWhite: 'FFFFFF',    // Crisp white
    textMuted: '94A3B8',    // Slate gray
    textLight: 'CBD5E1',    // Cool silver text
  };

  // Helper for slide common header and footer
  function applyColdSlideHeader(slide, category, title, subtitle) {
    // Top subtle bar
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.08,
      fill: { color: C.accentBlue },
      line: { color: C.accentBlue, width: 0 }
    });

    // Category / Breadcrumb
    slide.addText(category.toUpperCase(), {
      x: 0.6, y: 0.35, w: 8.8, h: 0.25,
      fontSize: 10,
      fontFace: 'Arial',
      color: C.accentCyan,
      bold: true,
      letterSpacing: 2
    });

    // Slide Title
    slide.addText(title, {
      x: 0.6, y: 0.6, w: 8.8, h: 0.45,
      fontSize: 22,
      fontFace: 'Arial',
      color: C.textWhite,
      bold: true
    });

    // Slide Subtitle
    if (subtitle) {
      slide.addText(subtitle, {
        x: 0.6, y: 1.05, w: 8.8, h: 0.3,
        fontSize: 11,
        fontFace: 'Arial',
        color: C.textMuted
      });
    }

    // Bottom subtle line & footer
    slide.addShape(pres.ShapeType.line, {
      x: 0.6, y: 5.2, w: 8.8, h: 0,
      line: { color: C.bgCardBorder, width: 1 }
    });

    slide.addText('GATESYNC • Smart Residential Security Platform  |  Arpitsinh Thakor (23SE02IE040)', {
      x: 0.6, y: 5.25, w: 7.5, h: 0.25,
      fontSize: 9,
      fontFace: 'Arial',
      color: C.textMuted
    });

    // Slide numbers
    slide.addText('PPSU • 2026', {
      x: 8.2, y: 5.25, w: 1.2, h: 0.25,
      fontSize: 9,
      fontFace: 'Arial',
      color: C.textMuted,
      align: 'right'
    });
  }

  // ==========================================
  // SLIDE 1: COVER SLIDE
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };

    // Decorative icy glow top line
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.12,
      fill: { color: C.accentCyan }
    });

    // Institutional Banner Badge
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 0.55, w: 4.8, h: 0.38,
      rectRadius: 0.1,
      fill: { color: C.bgCard },
      line: { color: C.bgCardBorder, width: 1 }
    });
    slide.addText('P. P. SAVANI UNIVERSITY • SCHOOL OF ENGINEERING', {
      x: 0.9, y: 0.62, w: 4.6, h: 0.25,
      fontSize: 9.5,
      fontFace: 'Arial',
      color: C.accentCyan,
      bold: true
    });

    // University Logo if available
    const logoPath = path.resolve('screenshots/ppsu_logo.png');
    if (fs.existsSync(logoPath)) {
      slide.addImage({
        path: logoPath,
        x: 7.6, y: 0.5, w: 1.6, h: 0.85,
        sizing: { type: 'contain', w: 1.6, h: 0.85 }
      });
    }

    // Main Project Name
    slide.addText('GATESYNC', {
      x: 0.8, y: 1.25, w: 8.4, h: 0.95,
      fontSize: 48,
      fontFace: 'Arial',
      color: C.textWhite,
      bold: true,
      letterSpacing: 2
    });

    // Subtitle
    slide.addText('Next-Generation Smart Residential Security & Real-Time Visitor Management Platform', {
      x: 0.8, y: 2.2, w: 8.4, h: 0.45,
      fontSize: 16,
      fontFace: 'Arial',
      color: C.accentCyan,
      bold: true
    });

    slide.addText('Replacing legacy physical register books with a real-time, zero-trust digital gatehouse bridge featuring sub-150ms STOMP WebSocket alerts, 1-tap deliveries, and offline-first PWA resilience.', {
      x: 0.8, y: 2.68, w: 8.4, h: 0.55,
      fontSize: 11.5,
      fontFace: 'Arial',
      color: C.textLight,
      lineSpacing: 16
    });

    // Author Info Card Container
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 3.45, w: 8.4, h: 1.5,
      rectRadius: 0.12,
      fill: { color: C.bgCard },
      line: { color: C.accentBlue, width: 1.5 }
    });

    // Details Columns inside Card
    slide.addText([
      { text: 'CANDIDATE NAME:\n', options: { fontSize: 9.5, color: C.accentCyan, bold: true } },
      { text: 'ARPITSINH THAKOR\n\n', options: { fontSize: 13, color: C.textWhite, bold: true } },
      { text: 'ENROLLMENT NUMBER:\n', options: { fontSize: 9.5, color: C.accentCyan, bold: true } },
      { text: '23SE02IE040', options: { fontSize: 13, color: C.textWhite, bold: true } }
    ], {
      x: 1.1, y: 3.65, w: 3.8, h: 1.15,
      fontFace: 'Arial'
    });

    slide.addText([
      { text: 'ACADEMIC PROGRAM:\n', options: { fontSize: 9.5, color: C.accentCyan, bold: true } },
      { text: 'B.Tech Computer Engineering\n\n', options: { fontSize: 12, color: C.textLight, bold: true } },
      { text: 'GUIDE & INSTITUTION:\n', options: { fontSize: 9.5, color: C.accentCyan, bold: true } },
      { text: 'Department of Computer Engineering, PPSU', options: { fontSize: 11.5, color: C.textLight } }
    ], {
      x: 5.1, y: 3.65, w: 3.8, h: 1.15,
      fontFace: 'Arial'
    });
  }

  // ==========================================
  // SLIDE 2: PROBLEM STATEMENT & MOTIVATION
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };
    applyColdSlideHeader(slide, '01. Background & Challenges', 'Problem Statement & Motivation', 'Why Traditional Gated Security Systems Fail in Modern Communities');

    // Left Column: The Problem (Legacy Systems)
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.6, y: 1.45, w: 4.25, h: 3.55,
      rectRadius: 0.1,
      fill: { color: C.bgCard },
      line: { color: 'DC2626', width: 1.5 }
    });

    slide.addText('CRITICAL CHALLENGES IN PAPER LOGBOOKS', {
      x: 0.8, y: 1.6, w: 3.85, h: 0.3,
      fontSize: 11, fontFace: 'Arial', color: 'F87171', bold: true
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
      x: 0.8, y: 1.95, w: 3.85, h: 2.95,
      fontSize: 10, fontFace: 'Arial', lineSpacing: 14
    });

    // Right Column: The Solution (GateSync)
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.15, y: 1.45, w: 4.25, h: 3.55,
      rectRadius: 0.1,
      fill: { color: C.bgCard },
      line: { color: C.accentCyan, width: 1.5 }
    });

    slide.addText('THE GATESYNC DIGITAL ADVANTAGE', {
      x: 5.35, y: 1.6, w: 3.85, h: 0.3,
      fontSize: 11, fontFace: 'Arial', color: C.accentCyan, bold: true
    });

    slide.addText([
      { text: '• Instant Bidirectional Alerts: ', options: { bold: true, color: C.textWhite } },
      { text: 'Sub-150ms STOMP WebSocket push notifications directly to resident mobile screens.\n\n', options: { color: C.textLight } },
      { text: '• 1-Tap Remote Decisions: ', options: { bold: true, color: C.textWhite } },
      { text: 'Residents verify visitor identity with photo and tap Approve/Deny from anywhere in the world.\n\n', options: { color: C.textLight } },
      { text: '• 1-Tap Fast Deliveries: ', options: { bold: true, color: C.textWhite } },
      { text: 'Pre-configured courier ingress buttons eliminate guard keyboard input.\n\n', options: { color: C.textLight } },
      { text: '• Zero-Trust Security: ', options: { bold: true, color: C.textWhite } },
      { text: 'Multi-tenant isolation, rotating JWT tokens, optical QR pass scanners, and full offline PWA queueing.', options: { color: C.textLight } }
    ], {
      x: 5.35, y: 1.95, w: 3.85, h: 2.95,
      fontSize: 10, fontFace: 'Arial', lineSpacing: 14
    });
  }

  // ==========================================
  // SLIDE 3: SYSTEM ARCHITECTURE & TECH STACK
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };
    applyColdSlideHeader(slide, '02. Engineering & Design', 'System Architecture & Tech Stack', 'Multi-Tier Cloud Architecture Built for Sub-150ms Real-Time Responsiveness');

    // Left Column: Tech Stack Breakdowns
    const tiers = [
      {
        title: 'FRONTEND PWA CLIENT',
        color: C.accentCyan,
        tech: 'React 19 • Vite • Lucide • STOMP over SockJS • Service Worker',
        desc: 'Installable PWA with offline queueing, responsive layouts, and instant audio chimes.'
      },
      {
        title: 'BACKEND MICROSERVICE CORE',
        color: C.accentBlue,
        tech: 'Java 21 LTS • Spring Boot 3.3.4 • Spring Security 6 • JJWT',
        desc: 'Stateless REST controllers, WebSocket message broker, and atomic concurrency controls.'
      },
      {
        title: 'CLOUD PERSISTENCE STRATEGY',
        color: C.accentEmerald,
        tech: 'MongoDB Atlas Cloud • Relational In-Memory H2 DB',
        desc: 'Multi-tenant document collections (notifications, passes, audit logs) + relational schema.'
      },
      {
        title: 'DEPLOYMENT & CLOUD HOSTING',
        color: 'A855F7',
        tech: 'Render Cloud (Dockerized Container) • GitHub Pages (Static PWA)',
        desc: 'Automated GitHub Actions CI/CD pipeline delivering high-availability cloud uptime.'
      }
    ];

    let yPos = 1.45;
    tiers.forEach(t => {
      slide.addShape(pres.ShapeType.roundRect, {
        x: 0.6, y: yPos, w: 4.8, h: 0.8,
        rectRadius: 0.08,
        fill: { color: C.bgCard },
        line: { color: C.bgCardBorder, width: 1 }
      });

      slide.addText(t.title, {
        x: 0.8, y: yPos + 0.08, w: 4.4, h: 0.2,
        fontSize: 9, fontFace: 'Arial', color: t.color, bold: true
      });

      slide.addText(t.tech, {
        x: 0.8, y: yPos + 0.28, w: 4.4, h: 0.24,
        fontSize: 10, fontFace: 'Arial', color: C.textWhite, bold: true
      });

      slide.addText(t.desc, {
        x: 0.8, y: yPos + 0.52, w: 4.4, h: 0.22,
        fontSize: 8.5, fontFace: 'Arial', color: C.textMuted
      });

      yPos += 0.9;
    });

    // Right Column: Key Architectural Highlights Card
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.6, y: 1.45, w: 3.8, h: 3.5,
      rectRadius: 0.12,
      fill: { color: C.bgCard },
      line: { color: C.accentCyan, width: 1.5 }
    });

    slide.addText('CORE ARCHITECTURAL HIGHLIGHTS', {
      x: 5.8, y: 1.65, w: 3.4, h: 0.3,
      fontSize: 11, fontFace: 'Arial', color: C.accentCyan, bold: true
    });

    const metrics = [
      { num: '< 150 ms', label: 'Bidirectional STOMP push latency' },
      { num: '100 %', label: 'Multi-tenant isolation per society' },
      { num: 'Zero Trust', label: 'Stateless JWT with rotating HttpOnly cookies' },
      { num: 'Offline-First', label: 'Auto-syncing LocalStorage transaction queue' }
    ];

    let mY = 2.05;
    metrics.forEach(m => {
      slide.addText(m.num, {
        x: 5.8, y: mY, w: 3.4, h: 0.35,
        fontSize: 18, fontFace: 'Arial', color: C.textWhite, bold: true
      });
      slide.addText(m.label, {
        x: 5.8, y: mY + 0.32, w: 3.4, h: 0.25,
        fontSize: 9.5, fontFace: 'Arial', color: C.textLight
      });
      mY += 0.72;
    });
  }

  // Helper for Screenshot slides
  function addScreenshotSlide(slide, category, title, subtitle, bullets, imgName) {
    applyColdSlideHeader(slide, category, title, subtitle);

    // Left Column: Bullet Points & Explanation
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.6, y: 1.45, w: 4.3, h: 3.55,
      rectRadius: 0.1,
      fill: { color: C.bgCard },
      line: { color: C.bgCardBorder, width: 1 }
    });

    slide.addText('KEY FUNCTIONALITY & WORKFLOW', {
      x: 0.85, y: 1.65, w: 3.8, h: 0.25,
      fontSize: 10, fontFace: 'Arial', color: C.accentCyan, bold: true
    });

    const textRuns = [];
    bullets.forEach(b => {
      textRuns.push({ text: `• ${b.head}: `, options: { bold: true, color: C.textWhite } });
      textRuns.push({ text: `${b.body}\n\n`, options: { color: C.textLight } });
    });

    slide.addText(textRuns, {
      x: 0.85, y: 1.95, w: 3.8, h: 2.9,
      fontSize: 9.5, fontFace: 'Arial', lineSpacing: 13
    });

    // Right Column: Framed Screenshot
    slide.addShape(pres.ShapeType.roundRect, {
      x: 5.05, y: 1.45, w: 4.35, h: 3.55,
      rectRadius: 0.1,
      fill: { color: C.bgCard },
      line: { color: C.accentBlue, width: 1.5 }
    });

    const imgPath = path.resolve('screenshots/' + imgName);
    if (fs.existsSync(imgPath)) {
      slide.addImage({
        path: imgPath,
        x: 5.15, y: 1.55, w: 4.15, h: 3.35,
        sizing: { type: 'contain', w: 4.15, h: 3.35 }
      });
    }
  }

  // ==========================================
  // SLIDE 4: ADMIN DASHBOARD
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };
    addScreenshotSlide(
      slide,
      '03. Real-Time Operations',
      'Executive Admin Dashboard & Analytics',
      'Unified Command Center for Society Management, Gate Activity & Financials',
      [
        { head: 'High-Level Metrics', body: 'Displays real-time KPIs including 128 registered flats, 342 active residents, 8 guards on duty, and monthly billing totals.' },
        { head: 'Live Gate Feed', body: 'Visual monitoring of active gate requests, pending resident approvals, and recent checkouts with sub-second synchronization.' },
        { head: 'Interactive Quick Actions', body: 'Direct navigation to visitor registrations, staff management, resident directory, and emergency broadcasts.' },
        { head: 'Multi-Tenant Scope', body: 'Restricts analytics and resident information strictly within the authorized society boundary.' }
      ],
      'fresh_1_dashboard.png'
    );
  }

  // ==========================================
  // SLIDE 5: GUARD DESK TERMINAL
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };
    addScreenshotSlide(
      slide,
      '04. Gatehouse Ingress',
      'Guard Desk Terminal & Visitor Entry',
      'High-Speed Gatekeeper Workflow Replacing Bulky Paper Visitor Logs',
      [
        { head: 'Rapid Data Entry', body: 'Guards capture visitor full name, mobile number, visiting flat, purpose, and vehicle registration number in seconds.' },
        { head: 'Instant Resident Search', body: 'Auto-completing search for flat units and resident names eliminates phone directory lookups.' },
        { head: 'Instant Notification Dispatch', body: 'Submitting the entry request triggers immediate WebSocket push to the target resident device.' },
        { head: 'Queue Status Tracking', body: 'Guards observe the real-time decision status (Pending, Approved, Rejected) without leaving their station.' }
      ],
      'fresh_3_guard_desk.png'
    );
  }

  // ==========================================
  // SLIDE 6: RESIDENT LIVE ALERTING
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };
    addScreenshotSlide(
      slide,
      '05. Resident Verification',
      'Resident Real-Time Alert & 1-Tap Approval',
      'Sub-150ms Direct In-App Notification and Remote Gate Decisioning',
      [
        { head: 'Instant Alert Modal', body: 'Real-time WebSocket pop-up modal appears on the resident device the moment a visitor arrives at the gate.' },
        { head: 'Complete Verification Details', body: 'Presents visitor name, arrival gate, purpose of visit, and vehicle details with an audible arrival chime.' },
        { head: '1-Tap Binary Decision', body: 'Residents tap Approve Entry (Green) or Deny Entry (Red) with an optional denial note for the guard.' },
        { head: 'Double-Decision Guard', body: 'Server-side atomic lock prevents race conditions or conflicting decisions from co-residents.' }
      ],
      'fresh_fig_8_3_arrival_alert.png'
    );
  }

  // ==========================================
  // SLIDE 7: QUICK DELIVERY MANAGEMENT
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };
    addScreenshotSlide(
      slide,
      '06. Logistics Ingress',
      '1-Tap Fast Logistics & Courier Clearance',
      'Optimized Gate Workflow for High-Volume E-Commerce Delivery Partners',
      [
        { head: '1-Tap Logistics Presets', body: 'Dedicated branded buttons for Swiggy, Zomato, Amazon, Blinkit, and Flipkart eliminate typing delays.' },
        { head: 'Peak-Hour Throughput', body: 'Reduces courier entry clearance time from 2 minutes to under 5 seconds per delivery person.' },
        { head: 'Doorstep vs Gate Delivery', body: 'Residents can pre-authorize drop-at-gate or instruct guard to allow the courier directly to their unit.' },
        { head: 'Automated Courier Audit', body: 'Logs delivery company name, parcel target, timestamp, and gatekeeper ID in the MongoDB audit ledger.' }
      ],
      'fresh_real_quick_delivery_modal.png'
    );
  }

  // ==========================================
  // SLIDE 8: PRE-APPROVED GUEST PASSES & QR
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };
    addScreenshotSlide(
      slide,
      '07. Guest Access Automation',
      'Pre-Approved Guest Passes & QR Scanner',
      'Frictionless Self-Serve Invitations with Cryptographic Verification',
      [
        { head: 'Resident Self-Service', body: 'Residents generate digital passes in advance for family, event guests, or expected service workers.' },
        { head: '6-Digit OTP & QR Code', body: 'Each pass includes a time-bounded cryptographic numeric code and high-contrast scannable QR.' },
        { head: 'WhatsApp 1-Click Sharing', body: 'Generates a ready-to-share message and invite link directly sent to guests via WhatsApp.' },
        { head: 'Optical Camera Scanner', body: 'Gate guards verify passes in 2 seconds via optical QR scanning or numeric keypad entry.' }
      ],
      'fresh_pass_scanner_modal.png'
    );
  }

  // ==========================================
  // SLIDE 9: VISITOR REGISTRY & CHECKOUT
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };
    addScreenshotSlide(
      slide,
      '08. Security Governance',
      'Digital Visitor Registry & Audit Trail',
      'Tamper-Proof Historical Log of Every Gate Crossing and Checkout',
      [
        { head: 'Comprehensive Gate Registry', body: 'Live searchable table tracking visitor names, contact details, vehicle tags, arrival gate, and host flats.' },
        { head: 'Status Lifecycle Badges', body: 'Clear visual status indicators: INSIDE (active in campus), CHECKED_OUT (departed), or REJECTED.' },
        { head: '1-Tap Checkout Workflow', body: 'Guards log departure with a single tap, recording exact exit timestamps and duration of stay.' },
        { head: 'Filterable Audit History', body: 'Search historical records by date range, vehicle number, or flat for complete security auditing.' }
      ],
      'fresh_2_visitor_registry.png'
    );
  }

  // ==========================================
  // SLIDE 10: MAINTENANCE BILLING
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };
    addScreenshotSlide(
      slide,
      '09. Financial Governance',
      'Society Maintenance Billing & Accounting',
      'Automated Invoicing, Payment Tracking & Community Helpdesk',
      [
        { head: 'Digital Invoice Management', body: 'Maintains flat-wise monthly maintenance dues, utility charges, sinking funds, and penalty breakdowns.' },
        { head: 'Payment Status Tracking', body: 'Instant visual classification of Paid, Pending, and Overdue dues across all wings and blocks.' },
        { head: 'Printable PDF Receipts', body: 'Residents and committee members can view and print professional itemized invoices.' },
        { head: 'Community Problem Tracker', body: 'Residents file facility maintenance tickets (plumbing, electrical, elevator) with live status updates.' }
      ],
      'fresh_3_maintenance_billing.png'
    );
  }

  // ==========================================
  // SLIDE 11: ZERO-TRUST SECURITY & OFFLINE
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };
    applyColdSlideHeader(slide, '10. Security & Reliability', 'Zero-Trust Security & Offline Resilience', 'Hardened Data Protection, Multi-Tenant Boundaries & Offline Business Continuity');

    const secBoxes = [
      {
        title: 'ZERO-TRUST JWT SECURITY',
        icon: '🛡️',
        color: C.accentCyan,
        bullets: [
          '15-Minute rotating JWT access tokens in memory (XSS immune).',
          'Secure HttpOnly, SameSite=Strict cookies for refresh tokens.',
          'BCrypt salted password hashing with forced first-login reset.',
          'Strict Role-Based Access Control (RBAC): ADMIN, RESIDENT, GUARD.'
        ]
      },
      {
        title: 'OFFLINE-FIRST PWA RESILIENCE',
        icon: '⚡',
        color: C.accentBlue,
        bullets: [
          'Service Worker precaches app assets for 100% offline startup.',
          'Offline Transaction Queue stores visitor requests in LocalStorage.',
          'Automatic synchronization immediately when network reconnects.',
          'Dual database fallback: In-memory H2 mapping + MongoDB Atlas.'
        ]
      },
      {
        title: 'CLOUD AUDIT & DATA INTEGRITY',
        icon: '🔒',
        color: C.accentEmerald,
        bullets: [
          'Immutable audit logging capturing actor ID, IP address, and payload.',
          '2-second deduplication key window prevents duplicate alert spam.',
          'Strict multi-tenant partitioning ensures zero data leaks across societies.',
          'Emergency SOS triggers instant campus sirens and SMS dispatches.'
        ]
      }
    ];

    let bX = 0.6;
    secBoxes.forEach(b => {
      slide.addShape(pres.ShapeType.roundRect, {
        x: bX, y: 1.45, w: 2.75, h: 3.55,
        rectRadius: 0.1,
        fill: { color: C.bgCard },
        line: { color: b.color, width: 1.5 }
      });

      slide.addText(`${b.icon} ${b.title}`, {
        x: bX + 0.15, y: 1.65, w: 2.45, h: 0.35,
        fontSize: 10, fontFace: 'Arial', color: b.color, bold: true
      });

      const bRuns = [];
      b.bullets.forEach(item => {
        bRuns.push({ text: `• ${item}\n\n`, options: { color: C.textLight } });
      });

      slide.addText(bRuns, {
        x: bX + 0.15, y: 2.1, w: 2.45, h: 2.7,
        fontSize: 9, fontFace: 'Arial', lineSpacing: 13
      });

      bX += 3.0;
    });
  }

  // ==========================================
  // SLIDE 12: THANK YOU & LIVE DEPLOYMENT
  // ==========================================
  {
    const slide = pres.addSlide();
    slide.background = { color: C.bgDark };

    // Decorative top line
    slide.addShape(pres.ShapeType.rect, {
      x: 0, y: 0, w: 10, h: 0.12,
      fill: { color: C.accentCyan }
    });

    // Thank You Title
    slide.addText('THANK YOU', {
      x: 0.8, y: 0.6, w: 8.4, h: 0.8,
      fontSize: 44,
      fontFace: 'Arial',
      color: C.textWhite,
      bold: true,
      letterSpacing: 2
    });

    slide.addText('Q&A / Project Evaluation & Discussion', {
      x: 0.8, y: 1.35, w: 8.4, h: 0.35,
      fontSize: 15,
      fontFace: 'Arial',
      color: C.accentCyan,
      bold: true
    });

    // Project Live Links Card
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 1.85, w: 8.4, h: 1.7,
      rectRadius: 0.12,
      fill: { color: C.bgCard },
      line: { color: C.accentBlue, width: 1.5 }
    });

    slide.addText('LIVE DEPLOYMENTS & REPOSITORIES', {
      x: 1.1, y: 2.05, w: 7.8, h: 0.25,
      fontSize: 10, fontFace: 'Arial', color: C.accentCyan, bold: true
    });

    slide.addText([
      { text: '• Live Web Application (PWA): ', options: { bold: true, color: C.textWhite } },
      { text: 'https://arpitthakor28.github.io/sms1/\n\n', options: { color: C.accentCyan } },
      { text: '• Live Cloud Backend API: ', options: { bold: true, color: C.textWhite } },
      { text: 'https://sms1-c9sj.onrender.com (Nap Stopper: /api/health)\n\n', options: { color: C.accentCyan } },
      { text: '• GitHub Code Repository: ', options: { bold: true, color: C.textWhite } },
      { text: 'https://github.com/arpitthakor28/sms1', options: { color: C.accentCyan } }
    ], {
      x: 1.1, y: 2.35, w: 7.8, h: 1.1,
      fontSize: 10.5, fontFace: 'Arial', lineSpacing: 16
    });

    // Student & University Credentials Card
    slide.addShape(pres.ShapeType.roundRect, {
      x: 0.8, y: 3.75, w: 8.4, h: 1.25,
      rectRadius: 0.12,
      fill: { color: C.bgCard },
      line: { color: C.bgCardBorder, width: 1 }
    });

    slide.addText([
      { text: 'DEVELOPED BY:\n', options: { fontSize: 9.5, color: C.accentCyan, bold: true } },
      { text: 'ARPITSINH THAKOR  |  Enrollment: 23SE02IE040\n', options: { fontSize: 13, color: C.textWhite, bold: true } },
      { text: 'School of Engineering (SOE) • P. P. Savani University • Academic Year 2025–2026', options: { fontSize: 10, color: C.textMuted } }
    ], {
      x: 1.1, y: 3.9, w: 7.8, h: 0.95,
      fontFace: 'Arial', lineSpacing: 18
    });
  }

  // Save the presentation
  const outputPath = path.resolve('GateSync_Project_Presentation.pptx');
  await pres.writeFile({ fileName: outputPath });
  console.log(`Presentation generated successfully: ${outputPath}`);

  // Copy to public and docs directories for downloads
  const publicPath = path.resolve('public/GateSync_Project_Presentation.pptx');
  const docsPath = path.resolve('docs/GateSync_Project_Presentation.pptx');
  fs.copyFileSync(outputPath, publicPath);
  fs.copyFileSync(outputPath, docsPath);
  console.log(`Copied presentation to public/ and docs/`);
}

createPresentation().catch(err => {
  console.error('Error generating presentation:', err);
  process.exit(1);
});
