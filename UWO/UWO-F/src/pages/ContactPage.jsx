import React, { useState, useEffect, useRef } from 'react';
import { submitContact } from '../services/api';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    purpose: 'Product Demo',
    productOfInterest: 'AISA™ (AI Super Assistant)',
    preferredContactMethod: 'Email',
    message: ''
  });
  const [selectOpen, setSelectOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalState, setModalState] = useState({
    open: false,
    type: 'success',
    title: '',
    message: ''
  });

  const selectWrapRef = useRef(null);

  useEffect(() => {
    document.title = 'UWO™ | Contact Us';

    // Click outside listener for custom dropdown
    const handleOutsideClick = (e) => {
      if (selectWrapRef.current && !selectWrapRef.current.contains(e.target)) {
        setSelectOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectOpen(false);
    };

    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePurposePick = (val) => {
    setFormData((prev) => ({ ...prev, purpose: val }));
    setSelectOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setModalState({
        open: true,
        type: 'error',
        title: 'Something went wrong',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setLoading(true);

    try {
      const affiliateCode = typeof localStorage !== 'undefined' ? localStorage.getItem('uwo_affiliate_code') || '' : '';
      const productSlug = typeof localStorage !== 'undefined' ? localStorage.getItem('uwo_affiliate_product') || '' : '';

      await submitContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        organization: formData.organization.trim(),
        purpose: formData.purpose,
        productOfInterest: formData.productOfInterest,
        preferredContactMethod: formData.preferredContactMethod,
        message: formData.message.trim(),
        affiliateCode,
        productSlug
      });

      setModalState({
        open: true,
        type: 'success',
        title: 'Enquiry Received',
        message: "Thank you. Your enquiry has been received. Our team will contact you through the details provided."
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        purpose: 'Product Demo',
        productOfInterest: 'AISA™ (AI Super Assistant)',
        preferredContactMethod: 'Email',
        message: ''
      });
    } catch (err) {
      setModalState({
        open: true,
        type: 'error',
        title: 'Something went wrong',
        message: err.message || 'Unable to send message. Please check your connection.'
      });
    } finally {
      setLoading(false);
    }
  };

  const openWhatsApp = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const phone = '918358990909';
    const text = 'Hello UWO, I want to start a project';
    const appUrl = `whatsapp://send?phone=${phone}&text=${encodeURIComponent(text)}`;
    const webUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`;
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = appUrl;
      setTimeout(() => {
        window.open(webUrl, '_blank');
      }, 1200);
    } else {
      window.open(webUrl, '_blank');
    }
  };

  const purposes = [
    'Product Demo',
    'Institutional Demo',
    'Business Partnership',
    'Technical Support',
    'Media Enquiry'
  ];

  const products = [
    'AISA™ (AI Super Assistant)',
    'AI Legal™ (Drafting & Intelligence)',
    'UWO Connect™ (Unified Communication)',
    'UWO™ AI Ecosystem for Education',
    'AI ADS™ (Autonomous Advertising)',
    'EFV™ Framework',
    'Other / General Partnership'
  ];

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="hero hero-centered"
        style={{
          minHeight: '75vh',
          backgroundImage: "url('/images/contact-hero-user.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          backgroundRepeat: 'no-repeat',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          paddingTop: '10vh'
        }}
      >
        <div className="hero-content-centered">
          <h1>Get in Touch</h1>
          <p>
            Whether you are exploring our products, partnerships or business opportunities, we would love to hear from you.
          </p>
        </div>
      </section>

      {/* ================= CONTACT FORM ================= */}
      <section
        className="section section-gold"
        style={{ borderTop: '4px solid var(--primary)', borderBottom: '4px solid var(--primary)' }}
      >
        <div className="container">
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2 className="section-title-left" style={{ marginBottom: '8px' }}>
              Let's Find the Right UWO Solution for You
            </h2>
            <p style={{ color: '#475569', fontSize: '0.98rem', marginBottom: '24px' }}>
              Connect directly with our solutions team for live product demonstrations, institutional pilots, technical support, or partnership inquiries.
            </p>

            <form className="contact-form" style={{ maxWidth: '100%' }} onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
                <div>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '14px' }}>
                  <div>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone">Phone / WhatsApp (Optional)</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="organization">Organisation / Institution (Optional)</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    placeholder="Company or University name"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '14px' }}>
                  <div style={{ position: 'relative', zIndex: 50 }}>
                    <label htmlFor="purpose">Purpose of Enquiry</label>
                    <div
                      ref={selectWrapRef}
                      className={`csel-wrap${selectOpen ? ' csel-open' : ''}`}
                      id="cselWrap"
                    >
                      {/* Native select hidden */}
                      <select
                        id="purpose"
                        name="purpose"
                        className="csel-native"
                        aria-hidden="true"
                        value={formData.purpose}
                        onChange={handleChange}
                      >
                        {purposes.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>

                      {/* Custom visual trigger button */}
                      <button
                        type="button"
                        id="cselTrigger"
                        className="csel-trigger"
                        aria-haspopup="listbox"
                        aria-expanded={selectOpen}
                        onClick={() => setSelectOpen(!selectOpen)}
                      >
                        <span className="csel-t-label" id="cselLabel">{formData.purpose}</span>
                        <svg
                          className="csel-arrow"
                          id="cselArrow"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#D6A559"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          style={{
                            transform: selectOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.28s cubic-bezier(0.4, 0, 0.2, 1)'
                          }}
                        >
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </button>

                      {/* Custom options panel */}
                      <div
                        id="cselPanel"
                        className="csel-panel"
                        role="listbox"
                        style={{
                          maxHeight: selectOpen ? '200px' : '0',
                          overflowY: 'auto'
                        }}
                      >
                        {purposes.map((opt) => (
                          <div
                            key={opt}
                            className={`csel-option${formData.purpose === opt ? ' csel-selected' : ''}`}
                            role="option"
                            aria-selected={formData.purpose === opt}
                            onClick={() => handlePurposePick(opt)}
                          >
                            <span className="cso-label">{opt}</span>
                            {formData.purpose === opt && (
                              <svg
                                className="cso-check"
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#D6A559"
                                strokeWidth="2.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="productOfInterest">Product of Interest</label>
                    <select
                      id="productOfInterest"
                      name="productOfInterest"
                      value={formData.productOfInterest}
                      onChange={handleChange}
                    >
                      {products.map((prd) => (
                        <option key={prd} value={prd}>{prd}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredContactMethod">Preferred Contact Method (Optional)</label>
                  <select
                    id="preferredContactMethod"
                    name="preferredContactMethod"
                    value={formData.preferredContactMethod}
                    onChange={handleChange}
                  >
                    <option value="Email">Email</option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="WhatsApp">WhatsApp</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message">Message *</label>
                  <textarea
                    rows="4"
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements or enquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '20px' }}
                disabled={loading}
              >
                {loading ? 'Sending Message...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= GLOBAL FOOTPRINT ================= */}
      <section className="section flagship-white">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Have an idea or challenge in mind?
          </h2>
          <p className="section-subtitle">
            Our team collaborates seamlessly to design, build, and scale digital solutions.
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=918358990909"
            target="_blank"
            rel="noopener noreferrer"
            onClick={openWhatsApp}
            className="btn btn-glow"
          >
            Start a Project
          </a>
        </div>
      </section>

      {/* ================= POPUP MODAL ================= */}
      {modalState.open && (
        <div
          id="uwo-modal-overlay"
          className="uwo-modal-visible"
          onClick={(e) => {
            if (e.target.id === 'uwo-modal-overlay') {
              setModalState((prev) => ({ ...prev, open: false }));
            }
          }}
        >
          <div className="uwo-modal" id="uwo-modal">
            <div className="uwo-modal-icon">
              {modalState.type === 'success' ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="52" height="52">
                  <circle cx="26" cy="26" r="25" fill="none" stroke="#22c55e" strokeWidth="2" />
                  <path fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" d="M14 27l8 8 16-16" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" width="52" height="52">
                  <circle cx="26" cy="26" r="25" fill="none" stroke="#ef4444" strokeWidth="2" />
                  <line x1="17" y1="17" x2="35" y2="35" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                  <line x1="35" y1="17" x2="17" y2="35" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
                </svg>
              )}
            </div>
            <h3 className="uwo-modal-title">{modalState.title}</h3>
            <p className="uwo-modal-message">{modalState.message}</p>
            <button
              type="button"
              className="uwo-modal-btn"
              onClick={() => setModalState((prev) => ({ ...prev, open: false }))}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}
