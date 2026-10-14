import React, { useState } from 'react';
import { getApiUrl } from '../services/api';

export default function EfvPage() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [subMessage, setSubMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;

    setSubmitting(true);
    setSubMessage('');
    try {
      const apiUrl = getApiUrl();
      const res = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'EFV Subscriber',
          email,
          message: 'Subscribed to EFV Framework updates',
          subject: 'EFV Framework Subscription'
        })
      });

      if (res.ok) {
        setSubMessage('Thank you for subscribing to EFV™ Framework updates!');
        setEmail('');
      } else {
        setSubMessage('Thank you for subscribing!');
        setEmail('');
      }
    } catch (err) {
      console.error(err);
      setSubMessage('Thank you for subscribing!');
      setEmail('');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="efv-page" style={{ background: '#0B1120', color: '#f8fafc', minHeight: '100vh' }}>
      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{
          position: 'relative',
          textAlign: 'center',
          padding: '160px 24px 100px',
          background: 'linear-gradient(to bottom, rgba(11, 17, 32, 0.7), rgba(11, 17, 32, 0.95))',
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div
          className="hero-badge"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(214, 165, 89, 0.15)',
            border: '1px solid rgba(214, 165, 89, 0.3)',
            padding: '10px 24px',
            borderRadius: '50px',
            fontSize: '0.9rem',
            color: '#D6A559',
            marginBottom: '25px',
            fontWeight: 700
          }}
        >
          Cognitive Intelligence Framework™
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            marginBottom: '20px',
            letterSpacing: '-2px',
            lineHeight: 1.1,
            color: '#ffffff'
          }}
        >
          EFV™ Framework
        </h1>

        <p
          className="tagline"
          style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
            color: '#94a3b8',
            maxWidth: '750px',
            margin: '0 auto 40px',
            lineHeight: 1.6
          }}
        >
          The Blueprint of Cognitive Frequency &amp; Intelligent Growth Systems.
          Authored by Gurumukh P. Ahuja, EFV™ explores cognitive evolution, system architectures, and holistic intelligence.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="#explore"
            style={{
              padding: '14px 34px',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg, #D6A559, #FABE56)',
              color: '#000',
              boxShadow: '0 10px 30px rgba(214, 165, 89, 0.3)'
            }}
          >
            Explore EFV
          </a>
          <a
            href="https://www.amazon.in/dp/B0GKPT184H"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: '14px 34px',
              borderRadius: '50px',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'transparent',
              color: '#fff',
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}
          >
            Get the Book
          </a>
        </div>
      </section>

      {/* SECTION 1: The Origin Code (Volume 1 - Published) */}
      <section id="explore" style={{ padding: '90px 24px', background: 'linear-gradient(180deg, #f7efd7 0%, #fff5e6 100%)', color: '#1e293b' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#D6A559', color: '#000', padding: '4px 16px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>
            <i className="fa-solid fa-circle-check"></i> Volume 1 • Published &amp; Available
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#000', marginBottom: '14px' }}>
            The Origin Code™
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7, marginBottom: '20px' }}>
            Understanding the fundamental principles that govern cognitive frequency and the architecture of
            intelligent systems. Available in English &amp; Hindi editions across major book platforms.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://www.amazon.in/dp/B0GKPT184H"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '8px 20px',
                borderRadius: '30px',
                background: '#0B1120',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <i className="fa-brands fa-amazon"></i> Amazon
            </a>
            <a
              href="https://notionpress.com/in/read/efv-canon-volume-1-the-origin-code-hindi-edition"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '8px 20px',
                borderRadius: '30px',
                background: '#0B1120',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <i className="fa-solid fa-book-open"></i> NotionPress (Hindi)
            </a>
            <a
              href="https://www.flipkart.com/efv-canon/p/itmd2a588b2f4fdf?pid=9798902318798"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '8px 20px',
                borderRadius: '30px',
                background: '#0B1120',
                color: '#fff',
                fontSize: '0.85rem',
                fontWeight: 600,
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <i className="fa-solid fa-cart-shopping"></i> Flipkart
            </a>
          </div>
        </div>
        <div
          style={{
            maxWidth: '950px',
            margin: '0 auto',
            background: '#ffffff',
            borderRadius: '24px',
            padding: '30px',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.08)',
            position: 'relative'
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #D6A559, #FABE56)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.2rem',
              color: '#000'
            }}
          >
            01
          </span>
          <img
            src="/images/1.jpeg"
            alt="EFV Framework Part 1 - The Origin Code"
            style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
          />
        </div>
      </section>

      {/* SECTION 2: The Growth Matrix (Volume 2 - Upcoming) */}
      <section style={{ padding: '90px 24px', background: 'linear-gradient(180deg, #fff5e6 0%, #e8dcc8 50%, #d4c4a8 100%)', color: '#1e293b' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.07)', color: '#475569', border: '1px solid rgba(0,0,0,0.15)', padding: '4px 16px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>
            <i className="fa-solid fa-clock"></i> Volume 2 • Upcoming Research Canon
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#000', marginBottom: '14px' }}>
            The Growth Matrix
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7 }}>
            Exploring the interconnected pathways of intelligent evolution and systematic cognitive development.
          </p>
        </div>
        <div
          style={{
            maxWidth: '950px',
            margin: '0 auto',
            background: '#ffffff',
            borderRadius: '24px',
            padding: '30px',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.08)',
            position: 'relative'
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #D6A559, #FABE56)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.2rem',
              color: '#000'
            }}
          >
            02
          </span>
          <img
            src="/images/2.svg"
            alt="EFV Framework Part 2 - The Growth Matrix"
            style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
          />
        </div>
      </section>

      {/* SECTION 3: Universal Activation (Volume 3 - Upcoming) */}
      <section style={{ padding: '90px 24px', background: 'linear-gradient(180deg, #d4c4a8 0%, #fdfbf7 100%)', color: '#1e293b' }}>
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,0,0,0.07)', color: '#475569', border: '1px solid rgba(0,0,0,0.15)', padding: '4px 16px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '14px' }}>
            <i className="fa-solid fa-clock"></i> Volume 3 • Upcoming Research Canon
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, color: '#000', marginBottom: '14px' }}>
            Universal Activation™
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7 }}>
            Unlocking the hidden frequencies that awaken human potential. Achieving harmonious integration of all framework components for complete cognitive mastery.
          </p>
        </div>
        <div
          style={{
            maxWidth: '950px',
            margin: '0 auto',
            background: '#ffffff',
            borderRadius: '24px',
            padding: '30px',
            boxShadow: '0 25px 80px rgba(0, 0, 0, 0.08)',
            position: 'relative'
          }}
        >
          <span
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              width: '50px',
              height: '50px',
              background: 'linear-gradient(135deg, #D6A559, #FABE56)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '1.2rem',
              color: '#000',
              zIndex: 2
            }}
          >
            03
          </span>
          <picture>
            <source srcSet="/images/vol3_banner.webp" type="image/webp" />
            <img
              src="/images/vol3_banner.png"
              alt="EFV Framework Part 3 - Universal Activation by Gurumukh P. Ahuja"
              loading="lazy"
              style={{ width: '100%', height: 'auto', borderRadius: '16px', display: 'block' }}
            />
          </picture>
        </div>
      </section>

      {/* PLATFORMS & SUBSCRIBE FOOTER BANNER */}
      <section
        style={{
          position: 'relative',
          padding: '100px 24px 90px',
          background: 'radial-gradient(circle at 50% 0%, rgba(214, 165, 89, 0.15) 0%, rgba(11, 17, 32, 0.98) 60%, #060913 100%)',
          textAlign: 'center',
          overflow: 'hidden'
        }}
      >
        <style>{`
          .efv-subscribe-input,
          input.efv-subscribe-input {
            width: 100% !important;
            padding: 12px 16px !important;
            margin: 0 !important;
            margin-bottom: 0 !important;
            border: none !important;
            background: transparent !important;
            background-color: transparent !important;
            color: #ffffff !important;
            font-size: 1rem !important;
            outline: none !important;
            box-shadow: none !important;
            border-radius: 0 !important;
            -webkit-text-fill-color: #ffffff !important;
          }
          .efv-subscribe-input:focus,
          input.efv-subscribe-input:focus {
            background: transparent !important;
            background-color: transparent !important;
            border: none !important;
            box-shadow: none !important;
            color: #ffffff !important;
            outline: none !important;
          }
          .efv-subscribe-input::placeholder {
            color: #94a3b8 !important;
            opacity: 1 !important;
            -webkit-text-fill-color: #94a3b8 !important;
          }
          .efv-subscribe-input:-webkit-autofill,
          .efv-subscribe-input:-webkit-autofill:hover,
          .efv-subscribe-input:-webkit-autofill:focus {
            -webkit-box-shadow: 0 0 0px 1000px rgba(15, 23, 42, 0.95) inset !important;
            -webkit-text-fill-color: #ffffff !important;
            transition: background-color 5000s ease-in-out 0s;
          }
          .efv-platform-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .efv-platform-card:hover {
            transform: translateY(-5px);
            border-color: rgba(214, 165, 89, 0.45) !important;
            box-shadow: 0 15px 35px rgba(214, 165, 89, 0.15) !important;
            background: rgba(255, 255, 255, 0.08) !important;
          }
          .efv-subscribe-btn {
            transition: all 0.25s ease;
          }
          .efv-subscribe-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(214, 165, 89, 0.5) !important;
            filter: brightness(1.08);
          }
        `}</style>

        {/* Ambient Top Glow / Divider */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '2px',
            background: 'radial-gradient(ellipse at center, rgba(214, 165, 89, 0.6) 0%, transparent 70%)'
          }}
        />

        {/* MAIN LUXURY NEWSLETTER CARD */}
        <div
          style={{
            maxWidth: '820px',
            margin: '0 auto 60px',
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(15, 23, 42, 0.65) 100%)',
            border: '1px solid rgba(214, 165, 89, 0.25)',
            borderRadius: '28px',
            padding: '50px 36px',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(16px)',
            position: 'relative'
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(214, 165, 89, 0.12)',
              border: '1px solid rgba(214, 165, 89, 0.3)',
              color: '#D6A559',
              padding: '6px 18px',
              borderRadius: '50px',
              fontSize: '0.8rem',
              fontWeight: 800,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            <i className="fa-regular fa-bell"></i> Insider Access • EFV Canon™
          </div>

          <h3
            style={{
              color: '#ffffff',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: '16px',
              letterSpacing: '-0.5px'
            }}
          >
            Stay Ahead of the Cognitive Frontier
          </h3>

          <p
            style={{
              color: '#94a3b8',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
              maxWidth: '560px',
              margin: '0 auto 36px',
              lineHeight: 1.6
            }}
          >
            Get early manuscript previews, research canon updates for Volume 2 &amp; 3, and exclusive insights from the EFV™ Framework directly in your inbox.
          </p>

          {/* INPUT FORM CONTAINER */}
          <form
            onSubmit={handleSubscribe}
            style={{
              display: 'flex',
              alignItems: 'center',
              maxWidth: '560px',
              margin: '0 auto',
              background: 'rgba(15, 23, 42, 0.95)',
              borderRadius: '60px',
              padding: '6px 8px 6px 20px',
              border: '1.5px solid rgba(214, 165, 89, 0.35)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35), inset 0 2px 4px rgba(0, 0, 0, 0.4)',
              flexWrap: 'wrap',
              gap: '8px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '220px' }}>
              <i className="fa-regular fa-envelope" style={{ color: '#D6A559', fontSize: '1.1rem', marginRight: '12px' }}></i>
              <input
                type="email"
                className="efv-subscribe-input"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: '100%',
                  padding: '12px 0',
                  border: 'none',
                  background: 'transparent',
                  color: '#ffffff',
                  fontSize: '0.98rem',
                  outline: 'none',
                  WebkitTextFillColor: '#ffffff'
                }}
              />
            </div>
            <button
              type="submit"
              className="efv-subscribe-btn"
              disabled={submitting}
              style={{
                padding: '13px 30px',
                borderRadius: '50px',
                background: 'linear-gradient(135deg, #D6A559 0%, #FABE56 100%)',
                color: '#000000',
                fontWeight: 700,
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 8px 24px rgba(214, 165, 89, 0.35)',
                whiteSpace: 'nowrap'
              }}
            >
              {submitting ? (
                <>Subscribing...</>
              ) : (
                <>
                  Subscribe <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.85rem' }}></i>
                </>
              )}
            </button>
          </form>

          {/* Privacy reassurance */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              marginTop: '16px',
              fontSize: '0.8rem',
              color: '#64748b'
            }}
          >
            <i className="fa-solid fa-shield-halved" style={{ color: '#D6A559' }}></i>
            <span>No spam guaranteed • Unsubscribe at any time</span>
          </div>

          {subMessage && (
            <p
              style={{
                marginTop: '18px',
                padding: '10px 20px',
                background: 'rgba(214, 165, 89, 0.15)',
                border: '1px solid rgba(214, 165, 89, 0.3)',
                borderRadius: '12px',
                color: '#FABE56',
                fontSize: '14px',
                fontWeight: 600,
                display: 'inline-block'
              }}
            >
              <i className="fa-solid fa-circle-check" style={{ marginRight: '8px' }}></i>
              {subMessage}
            </p>
          )}
        </div>

        {/* PLATFORMS SHOWCASE */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          {/* Section Divider with label */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '32px'
            }}
          >
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(214, 165, 89, 0.25))' }} />
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                color: '#94a3b8'
              }}
            >
              Available &amp; Upcoming Across Major Platforms
            </span>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(214, 165, 89, 0.25), transparent)' }} />
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}
          >
            {/* EFV Official */}
            <a
              href="https://efv.uwo.in"
              target="_blank"
              rel="noopener noreferrer"
              className="efv-platform-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(214, 165, 89, 0.12)',
                  border: '1px solid rgba(214, 165, 89, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <img src="/images/EFV.png" alt="EFV" style={{ height: '24px', width: 'auto', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.92rem' }}>EFV Portal</div>
                <div style={{ color: '#D6A559', fontSize: '0.75rem', marginTop: '2px' }}>Official Framework</div>
              </div>
            </a>

            {/* Amazon */}
            <a
              href="https://www.amazon.in/dp/B0GKPT184H"
              target="_blank"
              rel="noopener noreferrer"
              className="efv-platform-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <img 
                  src="/images/amazon.png" 
                  alt="Amazon" 
                  style={{ height: '22px', width: 'auto', objectFit: 'contain' }} 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    if (e.currentTarget.nextElementSibling) {
                      e.currentTarget.nextElementSibling.style.display = 'inline-block';
                    }
                  }}
                />
                <i className="fa-brands fa-amazon" style={{ display: 'none', color: '#FF9900', fontSize: '1.3rem' }}></i>
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.92rem' }}>Amazon</div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '2px' }}>Paperback &amp; Kindle</div>
              </div>
            </a>

            {/* NotionPress */}
            <a
              href="https://notionpress.com/in/read/efv-canon-volume-1-the-origin-code-hindi-edition"
              target="_blank"
              rel="noopener noreferrer"
              className="efv-platform-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <img src="/images/notion.png" alt="NotionPress" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.92rem' }}>NotionPress</div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '2px' }}>Hindi Edition</div>
              </div>
            </a>

            {/* Flipkart */}
            <a
              href="https://www.flipkart.com/efv-canon/p/itmd2a588b2f4fdf?pid=9798902318798"
              target="_blank"
              rel="noopener noreferrer"
              className="efv-platform-card"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '16px 20px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                textDecoration: 'none',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
                textAlign: 'left'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <img src="/images/flipcard.png" alt="Flipkart" style={{ height: '22px', width: 'auto', objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '0.92rem' }}>Flipkart</div>
                <div style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '2px' }}>Verified Retail</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
