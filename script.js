* {
  box-sizing: border-box;
}

:root {
  --bg: #f6f3ee;
  --panel: #ffffff;
  --panel-alt: #f1efe9;
  --text: #17181b;
  --muted: #5d5f66;
  --line: rgba(23, 24, 27, 0.12);
  --soft-line: rgba(23, 24, 27, 0.06);
  --accent: #a69a84;
  --accent-deep: #73675a;
  --shadow: 0 18px 42px rgba(17, 24, 39, 0.08);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 96px 0;
}

.muted-section {
  background: rgba(255, 255, 255, 0.42);
  border-top: 1px solid var(--soft-line);
  border-bottom: 1px solid var(--soft-line);
}

.eyebrow {
  margin: 0 0 12px;
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-deep);
  font-weight: 700;
}

.eyebrow.dark {
  color: var(--text);
}

h1, h2, h3 {
  margin: 0 0 16px;
  line-height: 1.1;
}

h1 {
  font-size: clamp(2.8rem, 5vw, 5rem);
  letter-spacing: -0.06em;
  max-width: 650px;
}

h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  letter-spacing: -0.05em;
  max-width: 760px;
}

h3 {
  font-size: 1.25rem;
  letter-spacing: -0.03em;
}

p {
  margin: 0 0 16px;
  color: var(--muted);
  font-size: 1.02rem;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(18px);
  background: rgba(246, 243, 238, 0.8);
  border-bottom: 1px solid var(--soft-line);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 78px;
  gap: 20px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: -0.03em;
}

.brand-mark {
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: var(--text);
  color: white;
  font-size: 0.9rem;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 26px;
  color: var(--muted);
  font-size: 0.94rem;
}

.main-nav a {
  transition: color 0.2s ease;
}

.main-nav a:hover,
.main-nav a:focus-visible {
  color: var(--text);
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  background: var(--text);
  color: #fff;
  border-radius: 999px;
  border: 1px solid var(--text);
  font-weight: 600;
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.09);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.button:hover,
.button:focus-visible {
  transform: translateY(-1px);
}

.button-small {
  min-height: 40px;
  padding: 0 16px;
  font-size: 0.9rem;
}

.button-secondary {
  background: transparent;
  color: var(--text);
  border-color: var(--line);
  box-shadow: none;
}

.hero {
  padding: 72px 0 54px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 34px;
  align-items: center;
}

.lead {
  margin-top: 22px;
  font-size: 1.12rem;
  max-width: 640px;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 28px;
}

.hero-tags span {
  padding: 8px 12px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.45);
  border-radius: 999px;
  color: var(--muted);
  font-size: 0.8rem;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 30px;
}

.hero-panel {
  display: flex;
  justify-content: center;
}

.profile-card {
  width: min(100%, 420px);
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 28px 28px 18px;
  box-shadow: var(--shadow);
}

.card-label {
  margin-bottom: 12px;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent-deep);
  font-weight: 700;
}

.profile-card h2 {
  font-size: clamp(1.6rem, 2.7vw, 2.3rem);
}

.profile-card ul {
  margin: 18px 0 0;
  padding-left: 18px;
  color: var(--muted);
}

.profile-card li + li {
  margin-top: 10px;
}

.section-header {
  margin-bottom: 36px;
}

.narrow {
  max-width: 720px;
}

.compact {
  margin-bottom: 26px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 34px;
  align-items: start;
}

.stats-panel {
  display: grid;
  grid-template-columns: repeat(2, minmax(170px, 1fr));
  gap: 18px;
}

.stat-item {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 24px 18px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.04);
}

.stat-item strong {
  font-size: clamp(1.4rem, 2vw, 2rem);
  letter-spacing: -0.06em;
  margin-bottom: 8px;
}

.stat-item span {
  color: var(--muted);
  font-size: 0.92rem;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
}

.expertise-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 22px 18px;
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.expertise-card:hover {
  transform: translateY(-2px);
  border-color: rgba(115, 103, 90, 0.35);
}

.icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: grid;
  place-items: center;
  background: rgba(166, 154, 132, 0.12);
  color: var(--accent-deep);
  font-size: 1.2rem;
  margin-bottom: 18px;
}

.expertise-card h3 {
  font-size: 1.1rem;
  margin: 0;
}

.sample-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 22px;
}

.sample-card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 10px 30px rgba(17, 24, 39, 0.03);
}

.sample-card.featured {
  background: linear-gradient(180deg, #ffffff, #f5f2ee);
}

.sample-header {
  margin-bottom: 18px;
}

.sample-card ul {
  margin: 20px 0;
  padding-left: 18px;
  color: var(--muted);
}

.mini-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 18px;
}

.mini-list span {
  padding: 8px 12px;
  border-radius: 999px;
  background: var(--panel-alt);
  border: 1px solid var(--soft-line);
  font-size: 0.8rem;
  color: var(--text);
}

.gallery-preview {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin: 18px 0 22px;
}

.gallery-box {
  min-height: 108px;
  border-radius: 16px;
  border: 1px solid var(--line);
  display: flex;
  align-items: end;
  justify-content: start;
  padding: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(23, 24, 27, 0.8);
}

.box-one {
  background: linear-gradient(135deg, rgba(166, 154, 132, 0.35), rgba(255, 255, 255, 0.7));
}

.box-two {
  background: linear-gradient(135deg, rgba(232, 224, 207, 0.7), rgba(255, 255, 255, 0.7));
}

.box-three {
  background: linear-gradient(135deg, rgba(201, 195, 181, 0.38), rgba(255, 255, 255, 0.7));
}

.box-four {
  background: linear-gradient(135deg, rgba(150, 143, 128, 0.25), rgba(255, 255, 255, 0.7));
}

.timeline {
  position: relative;
  max-width: 860px;
  margin: 0 auto;
}

.timeline::before {
  content: "";
  position: absolute;
  left: 16px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--line);
}

.timeline-item {
  position: relative;
  padding-left: 58px;
  margin-bottom: 26px;
}

.timeline-dot {
  position: absolute;
  left: 8px;
  top: 8px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: var(--text);
  border: 4px solid var(--bg);
  box-shadow: 0 0 0 2px var(--text);
}

.timeline-content {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 24px 20px;
}

.timeline-content h3 {
  margin-bottom: 8px;
}

.timeline-content p {
  margin-bottom: 12px;
  font-weight: 600;
  color: var(--text);
}

.timeline-content ul {
  margin: 0;
  padding-left: 18px;
  color: var(--muted);
}

.portfolio-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 28px 32px;
}

.tools-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}

.tools-grid span {
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.5);
  font-weight: 500;
}

.work-approach {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 18px;
}

.approach-item {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 22px 18px;
  min-height: 200px;
}

.approach-item h3 {
  margin-bottom: 12px;
}

.accent-strip {
  padding-top: 56px;
  padding-bottom: 56px;
}

.cta-panel {
  background: linear-gradient(135deg, #f0efe9, #ffffff);
  border: 1px solid var(--line);
  border-radius: 28px;
  padding: 26px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
}

.site-footer {
  padding: 52px 0 74px;
  border-top: 1px solid var(--soft-line);
}

.footer-wrap {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 26px;
  align-items: center;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 14px;
}

.contact-grid a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 0 14px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: var(--panel);
  color: var(--text);
  font-weight: 600;
}

@media (max-width: 980px) {
  .hero-grid,
  .about-grid,
  .sample-grid,
  .footer-wrap,
  .portfolio-block {
    grid-template-columns: 1fr;
    display: grid;
  }

  .expertise-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .work-approach {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .main-nav {
    display: none;
  }

  .hero {
    padding-top: 48px;
  }

  .section {
    padding: 74px 0;
  }

  .stats-panel,
  .expertise-grid,
  .work-approach,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .cta-panel {
    flex-direction: column;
    align-items: flex-start;
  }
}
