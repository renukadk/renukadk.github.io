/* ---------- Global ---------- */
:root {
  --background: #080e1c;
  --surface: #101a2e;
  --surface-light: #15223a;
  --cyan: #21d4fd;
  --blue: #2196f3;
  --white: #f3f7ff;
  --muted: #a5b2c8;
  --border: rgba(255,255,255,0.09);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--background);
  color: var(--white);
  line-height: 1.7;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font: inherit;
}

.container {
  width: min(1100px, 90%);
  margin: auto;
}

.section {
  padding: 100px 0;
}

.alternate {
  background: #0b1425;
}

.eyebrow {
  color: var(--cyan);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 3px;
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(30px, 5vw, 42px);
  margin-bottom: 40px;
  font-weight: 800;
}

.section-title span,
.hero h1 span {
  color: var(--cyan);
}

/* ---------- Navbar ---------- */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(8,14,28,0.95);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(12px);
}

.navbar {
  min-height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 23px;
  font-weight: 800;
  letter-spacing: 1px;
}

.logo span {
  color: var(--cyan);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 22px;
}

.nav-links a {
  color: var(--muted);
  font-size: 12px;
  transition: .3s;
}

.nav-links a:hover {
  color: var(--cyan);
}

.menu-toggle {
  display: none;
  background: transparent;
  border: 0;
  color: var(--white);
  font-size: 27px;
  cursor: pointer;
}

/* ---------- Hero ---------- */
.hero {
  min-height: 650px;
  display: flex;
  align-items: center;
  background:
    radial-gradient(ellipse at 15% 20%, #102a4c 0%, transparent 45%),
    var(--background);
}

.hero-content {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 55px;
  align-items: center;
}

.hero h1 {
  font-size: clamp(38px, 6vw, 65px);
  line-height: 1.2;
  margin-bottom: 15px;
}

.hero h2 {
  font-size: 22px;
  color: #d9e7fa;
  margin-bottom: 18px;
}

.hero-description {
  color: var(--muted);
  max-width: 570px;
  margin-bottom: 30px;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin: 25px 0;
}

.btn {
  display: inline-block;
  padding: 12px 22px;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 700;
  transition: .3s;
  cursor: pointer;
}

.btn-primary {
  background: var(--cyan);
  color: #06101e;
}

.btn-primary:hover {
  background: #8deaff;
  transform: translateY(-3px);
}

.btn-outline {
  border: 1px solid var(--cyan);
  color: var(--cyan);
}

.btn-outline:hover {
  background: var(--cyan);
  color: #06101e;
}

.social-links {
  display: flex;
  gap: 25px;
  color: var(--muted);
  font-size: 13px;
}

.social-links a:hover {
  color: var(--cyan);
}

.hero-card {
  padding: 38px 25px;
  border: 1px solid var(--border);
  background: linear-gradient(145deg, #142440, #0e182b);
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,.25);
}

.profile-circle {
  width: 140px;
  height: 140px;
  margin: 0 auto 25px;
  border: 3px solid var(--cyan);
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 45px;
  font-weight: 800;
  color: var(--cyan);
  background: #0b1930;
}

.hero-card h3 {
  margin-bottom: 5px;
}

.hero-card p {
  color: var(--muted);
  font-size: 13px;
}

.hero-tags, .project-tags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;
}

.hero-tags span, .project-tags span {
  padding: 6px 10px;
  border-radius: 20px;
  background: rgba(33,212,253,.09);
  color: var(--cyan);
  font-size: 10px;
}

/* ---------- About ---------- */
.about-card {
    padding: 35px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  color: var(--muted);
}

.about-card p + p {
  margin-top: 17px;
}

/* ---------- Education ---------- */
.timeline {
  border-left: 2px solid var(--cyan);
  padding-left: 30px;
  margin-left: 10px;
}

.timeline-item {
  position: relative;
  margin-bottom: 40px;
  padding: 25px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
}

.timeline-item::before {
  content: "";
  position: absolute;
  left: -39px;
  top: 30px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--cyan);
  box-shadow: 0 0 12px var(--cyan);
}

.timeline-date {
  color: var(--cyan);
  font-size: 12px;
  font-weight: 700;
}

.timeline-item h3 {
  margin: 8px 0 3px;
}

.timeline-item h4 {
  font-size: 14px;
  color: #c5d6ed;
}

.timeline-item p {
  color: var(--muted);
  font-size: 13px;
}

.timeline-item .highlight-text {
  color: var(--cyan);
  margin-top: 8px;
}

/* ---------- Skills ---------- */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.skill-card {
  background: var(--surface);
  padding: 25px;
  border: 1px solid var(--border);
  border-radius: 10px;
  transition: .3s;
}

.skill-card:hover, .project-card:hover {
  transform: translateY(-5px);
  border-color: var(--cyan);
}

.skill-card h3 {
  color: var(--cyan);
  margin-bottom: 10px;
  font-size: 17px;
}

.skill-card p {
  color: var(--muted);
  font-size: 13px;
}

/* ---------- Projects ---------- */
.project-filters {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
}

.filter-btn {
  background: var(--surface);
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 20px;
  padding: 9px 17px;
  font-size: 12px;
  cursor: pointer;
}

.filter-btn.active,
.filter-btn:hover {
  background: var(--cyan);
  color: #06101e;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.project-card {
  padding: 28px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: .3s;
}

.project-card.hidden {
  display: none;
}

.project-number {
  color: var(--cyan);
  font-size: 12px;
  font-weight: 800;
}

.project-card h3 {
  margin: 12px 0;
  font-size: 18px;
}

.project-card p {
  color: var(--muted);
  font-size: 13px;
}

.project-tags {
  justify-content: flex-start;
}

/* ---------- Certifications ---------- */
.cert-list {
  display: grid;
  gap: 14px;
}

.cert-item {
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 9px;
}

.cert-item > span {
  color: var(--cyan);
  font-weight: 800;
}

.cert-item h3 {
  font-size: 15px;
}

.cert-item p {
  color: var(--muted);
  font-size: 12px;
}

/* ---------- Contact ---------- */
.contact-card {
  max-width: 700px;
  padding: 40px;
  margin: auto;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  text-align: center;
}

.contact-card h3 {
  font-size: 23px;
  margin-bottom: 12px;
}

.contact-card p {
  color: var(--muted);
  margin-bottom: 20px;
}

.contact-link {
  display: block;
  color: var(--cyan);
  margin: 10px;
  font-size: 14px;
}

.contact-card .hero-buttons {
  justify-content: center;
}

/* ---------- Footer ---------- */
.footer {
  padding: 25px;
  text-align: center;
  background: #060b15;
  border-top: 1px solid var(--border);
  color: var(--muted);
  font-size: 12px;
}

.footer span {
  color: var(--cyan);
}

/* ---------- Responsive ---------- */
@media (max-width: 850px) {
  .nav-links {
    gap: 12px;
  }

  .nav-links a {
    font-size: 10px;
  }

  .hero-content {
    grid-template-columns: 1fr;
  }

  .hero-card {
    max-width: 430px;
  }
}

@media (max-width: 650px) {
  .section {
    padding: 70px 0;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 75px;
    left: 0;
    width: 100%;
    padding: 20px 5%;
    flex-direction: column;
    background: #0b1425;
    border-bottom: 1px solid var(--border);
  }

  .nav-links.open {
    display: flex;
  }

  .nav-links a {
    display: block;
    font-size: 14px;
    padding: 7px;
  }

  .hero {
    min-height: auto;
  }

  .hero-content {
    gap: 35px;
  }

  .skills-grid,
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .about-card,
  .contact-card {
    padding: 25px;
  }
}