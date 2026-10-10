import React from 'react';

export default function AboutPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section 
        className="hero hero-centered" 
        style={{ 
          minHeight: '60vh', 
          backgroundImage: "url('/images/about-bg..webp')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat' 
        }}
      >
        <div className="hero-content-centered">
          <h1>About UWO<sup>&trade;</sup></h1>
          <p>
            Unified Web Options &amp; Services Pvt. Ltd. (UWO<sup>&trade;</sup>) is a Jabalpur-based technology company building AI platforms for personal productivity, business automation, legal workflows and education.
            UWO<sup>&trade;</sup> is a DPIIT-recognised startup, D-U-N-S registered and incubated at IIT Ropar&ndash;TBIF.
          </p>
        </div>
      </section>

      {/* ================= INCUBATION SPOTLIGHT SECTION ================= */}
      <section className="uwo-spotlight-section">
        <div className="container">
          <div className="uwo-spotlight-header">
            <span className="uwo-spotlight-subtitle">Empowering Next-Gen Tech with IIT Ropar</span>
            <h2 className="uwo-spotlight-title">INCUBATION <span className="gold-glow-text">SPOTLIGHT</span></h2>
          </div>
          
          <p className="uwo-spotlight-desc">
            UWO<sup>&trade;</sup> is officially incubated with <span className="gold-highlight">IIT Ropar &ndash; Technology Business Incubator Foundation (TBIF)</span>, empowering our vision to build intelligent digital platforms, AI-driven enterprise systems, and next-generation technology solutions.
          </p>

          <div className="uwo-spotlight-horizontal-divider"></div>

          <div className="uwo-spotlight-columns">
            {/* Left Column: IIT Ropar */}
            <div className="uwo-spotlight-column">
              <div className="uwo-spotlight-logo-container">
                <img 
                  src="/images/iit-ropar-logo.jpeg" 
                  alt="IIT Ropar Logo" 
                  className="uwo-spotlight-logo" 
                />
              </div>
              <h3 className="uwo-spotlight-col-title">IIT Institute</h3>
              <p className="uwo-spotlight-col-subtitle">Indian Institute of Technology</p>
            </div>

            {/* Vertical Divider */}
            <div className="uwo-spotlight-vertical-divider"></div>

            {/* Right Column: TBIF */}
            <div className="uwo-spotlight-column">
              <div className="uwo-spotlight-logo-container">
                <img 
                  src="/images/tbif-logo.png" 
                  alt="TBIF Logo" 
                  className="uwo-spotlight-logo" 
                />
              </div>
              <h3 className="uwo-spotlight-col-title gold-title">IIT Ropar &ndash; TBIF</h3>
              <p className="uwo-spotlight-col-subtitle">Technology Business Incubator</p>
            </div>
          </div>

          <p style={{ marginTop: '28px', fontSize: '0.85rem', color: '#64748b', textAlign: 'center', fontStyle: 'italic', maxWidth: '820px', margin: '28px auto 0', lineHeight: 1.6 }}>
            *Incubation support at IIT Ropar&ndash;TBIF provides technological mentorship, research infrastructure, and startup ecosystem access. Incubation represents institutional incubation support and does not constitute commercial product validation or institutional endorsement.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section 
        className="section section-gold" 
        style={{ 
          position: 'relative', 
          overflow: 'hidden', 
          backgroundImage: "url('/images/robot-bg..webp')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundBlendMode: 'soft-light' 
        }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(253, 251, 247, 0.92) 0%, rgba(226, 209, 195, 0.92) 100%)', zIndex: 1 }} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <h2 className="section-title">Who We Are</h2>
          <p className="section-subtitle">
            Unified Web Options &amp; Services Pvt. Ltd. (UWO<sup>&trade;</sup>) is an Indian technology company focused on practical AI platforms for everyday work and institutional operations. Our work focuses on foundational technology, supported by system architecture and research-led innovation. We design powerful, ethical and human-centric AI platforms that create meaningful impact.
          </p>
        </div>
      </section>

      {/* ================= VISION & MISSION ================= */}
      <section className="section flagship-white">
        <div className="container">
          <h2 className="section-title">Vision &amp; Mission</h2>

          <div className="features-grid" style={{ justifyContent: 'center' }}>
            {/* VISION CARD */}
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <img src="/images/vision..webp" alt="Our Vision" className="project-icon" style={{ width: '120px', height: '120px' }} />
              <h3>Our Vision</h3>
              <p>
                To make connected, human-centric AI useful and accessible across work, business and education.
              </p>
            </div>

            {/* MISSION CARD */}
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <img src="/images/mission..webp" alt="Our Mission" className="project-icon" style={{ width: '120px', height: '120px' }} />
              <h3>Our Mission</h3>
              <p>
                To build practical AI platforms that simplify workflows, connect information and help users make better-informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOUNDER SPOTLIGHT ================= */}
      <section className="section section-gold" style={{ background: '#FAF7F0', borderTop: '1px solid #E8DFCE', borderBottom: '1px solid #E8DFCE' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.88rem', fontWeight: 700, color: '#D6A559', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Leadership &amp; Vision
            </span>
            <h2 className="section-title" style={{ marginTop: '8px', marginBottom: '12px' }}>Meet Our Founder</h2>
          </div>

          <div style={{ display: 'flex', gap: '40px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', background: '#F0EAD8', padding: '40px', borderRadius: '24px', border: '1px solid #DDD0B8', boxShadow: '0 10px 30px rgba(0,0,0,0.04)' }}>
            <div style={{ width: '180px', height: '180px', borderRadius: '50%', overflow: 'hidden', border: '4px solid #D6A559', flexShrink: 0, boxShadow: '0 8px 24px rgba(214,165,89,0.2)' }}>
              <img 
                src="/images/founder..webp" 
                alt="Gurumukh P. Ahuja" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                onError={(e) => { e.currentTarget.src = '/images/uwo-logo.png'; }} 
              />
            </div>
            <div style={{ flex: '1 1 500px', minWidth: '280px' }}>
              <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.75rem', fontWeight: 800, color: '#000', margin: '0 0 6px' }}>
                Gurumukh P. Ahuja
              </h3>
              <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.05rem', fontWeight: 600, color: '#D6A559', margin: '0 0 16px' }}>
                Founder &amp; Managing Director
              </h4>
              <p style={{ color: '#334155', lineHeight: 1.7, fontSize: '0.98rem', margin: '0 0 12px' }}>
                Gurumukh P. Ahuja leads executive strategy, core systems architecture, and company building at Unified Web Options &amp; Services Pvt. Ltd. (UWO<sup>&trade;</sup>).
              </p>
              <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '0.94rem', margin: 0 }}>
                With a hands-on approach to company building, he guides multidisciplinary product and engineering teams to transform real-world friction into interconnected, multi-tenant AI software across personal productivity, business communications, legal workflows, and education ecosystems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MILESTONES & JOURNEY ================= */}
      <section className="section flagship-white">
        <div className="container" style={{ maxWidth: '1050px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '44px' }}>
            <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: '0.88rem', fontWeight: 700, color: '#D6A559', textTransform: 'uppercase', letterSpacing: '2px' }}>
              Company Journey
            </span>
            <h2 className="section-title" style={{ marginTop: '8px', marginBottom: '12px' }}>Dated Milestones &amp; Growth</h2>
            <p className="section-subtitle">A chronological record of our institutional milestones, recognition, and platform releases.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '22px' }}>
            <div style={{ background: '#FAF7F0', border: '1px solid #E8DFCE', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'inline-block', background: '#D6A559', color: '#000', fontWeight: 800, padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '12px' }}>
                2023
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>Inception &amp; Recognition</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Unified Web Options &amp; Services Pvt. Ltd. incorporated in Jabalpur. Accorded official DPIIT startup recognition and D-U-N-S registration.
              </p>
            </div>

            <div style={{ background: '#FAF7F0', border: '1px solid #E8DFCE', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'inline-block', background: '#D6A559', color: '#000', fontWeight: 800, padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '12px' }}>
                2024
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>IIT Ropar&ndash;TBIF Incubation</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Selected for incubation support at IIT Ropar Technology Business Incubator Foundation to engineer multi-tenant AI systems and foundational architecture.
              </p>
            </div>

            <div style={{ background: '#FAF7F0', border: '1px solid #E8DFCE', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'inline-block', background: '#D6A559', color: '#000', fontWeight: 800, padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '12px' }}>
                2025
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>AISA&trade; &amp; Enterprise Rollout</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Launch of AISA&trade; AI Super Assistant on Android and iOS. Commenced closed pilot engineering for UWO Connect&trade; and AI Legal&trade;.
              </p>
            </div>

            <div style={{ background: '#FAF7F0', border: '1px solid #E8DFCE', borderRadius: '16px', padding: '24px' }}>
              <div style={{ display: 'inline-block', background: '#D6A559', color: '#000', fontWeight: 800, padding: '4px 12px', borderRadius: '20px', fontSize: '0.85rem', marginBottom: '12px' }}>
                2026
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 8px', color: '#0f172a' }}>Integrated AI Ecosystem</h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>
                Expansion into institutional education ecosystems (AI Education&trade;), business automation suites, and commercial AI ADS&trade; marketing intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PHILOSOPHY ================= */}
      <section className="section section-gold">
        <div className="container">
          <h2 className="section-title">Our Engineering Philosophy</h2>
          <p className="section-subtitle">
            Our work is guided by four principles that prioritize reliability, clarity, and sustainable systems over fragmented tools.
          </p>

          <div style={{ maxWidth: '880px', margin: '30px auto 0', display: 'grid', gap: '18px' }}>
            <div style={{ background: '#FAF7F0', border: '1px solid #E8DFCE', borderRadius: '14px', padding: '20px 24px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>✅</span> Systems over fragmented tools
              </h3>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                We build unified data architectures rather than isolated point software. <em>Practical example:</em> UWO Connect<sup>&trade;</sup> integrates customer WhatsApp chats, lead pipelines, catalog sharing, and GST invoice drafts into one continuous workspace instead of juggling multiple detached tools.
              </p>
            </div>

            <div style={{ background: '#FAF7F0', border: '1px solid #E8DFCE', borderRadius: '14px', padding: '20px 24px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>✅</span> Clarity over unnecessary complexity
              </h3>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                Intelligence should make daily work simpler, not add cognitive overload. <em>Practical example:</em> AISA<sup>&trade;</sup> delivers structured cards and contextual recommendations rather than raw text walls or confusing technical prompts.
              </p>
            </div>

            <div style={{ background: '#FAF7F0', border: '1px solid #E8DFCE', borderRadius: '14px', padding: '20px 24px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>✅</span> Intelligence as native infrastructure
              </h3>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                AI belongs directly within daily workflows, not as a disconnected chatbot widget. <em>Practical example:</em> In AI Legal<sup>&trade;</sup>, document summarization, citation checks, and drafting happen natively in the document editor.
              </p>
            </div>

            <div style={{ background: '#FAF7F0', border: '1px solid #E8DFCE', borderRadius: '14px', padding: '20px 24px', textAlign: 'left' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 6px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>✅</span> Long-horizon architectural thinking
              </h3>
              <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                Platforms engineered for stability, multi-tenant privacy, and auditability. <em>Practical example:</em> AI Education<sup>&trade;</sup> enforces strict institution-isolated tenancy and RBAC controls to guarantee student and faculty data isolation across campuses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

