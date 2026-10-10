import React, { useEffect } from 'react';

export default function LegalModal({ isOpen, type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';

  return (
    <div 
      className="uwo-legal-overlay active"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="uwo-legal-card" role="dialog" aria-modal="true">
        <div className="uwo-legal-header">
          <h2>{title}</h2>
          <button type="button" className="uwo-legal-close" onClick={onClose} aria-label="Close">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="uwo-legal-body">
          {isPrivacy ? (
            <>
              <h3>1. Introduction</h3>
              <p>
                Unified Web Options &amp; Services Pvt. Ltd. ("UWO", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we handle your personal data when you visit our website, apply to partner programs, or use our digital platforms (including AISA™, AI Legal™, UWO Connect™, UWO™ AI Ecosystem for Education, AI ADS™, and the EFV™ Framework).
              </p>

              <h3>2. The Data We Collect</h3>
              <p>We may collect, use, store, and transfer different kinds of personal data about you, including:</p>
              <ul>
                <li><strong>Identity Data:</strong> Full name, professional title, and organization name.</li>
                <li><strong>Contact Data:</strong> Business email address, telephone number, and communication history.</li>
                <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, and device telemetry.</li>
                <li><strong>Usage &amp; Workspace Data:</strong> Information about platform navigation, feature utilization, and configured preferences.</li>
              </ul>

              <h3>3. How We Use Your Data</h3>
              <p>We only use your personal data for legitimate business purposes, including:</p>
              <ul>
                <li>Scheduling product demonstrations and institutional pilots.</li>
                <li>Providing customer support and platform updates.</li>
                <li>Administering the Earn &amp; Refer affiliate program.</li>
                <li>Ensuring security, compliance, and system integrity.</li>
              </ul>

              <h3>4. Data Retention &amp; Security</h3>
              <p>
                Personal and workspace data is retained strictly as needed to fulfill the purposes for which it was collected, or to meet statutory obligations. All customer data and documents are encrypted in transit via TLS 1.3 and at rest using AES-256 encryption.
              </p>

              <h3>5. Grievance Officer &amp; Inquiries</h3>
              <p>
                In accordance with the Information Technology Act 2000 and the Digital Personal Data Protection Act (DPDPA), you may direct privacy queries, data access, or deletion requests to our designated Grievance Officer:
              </p>
              <p style={{ marginTop: '8px' }}>
                <strong>Grievance Officer:</strong> Unified Web Options &amp; Services Pvt. Ltd.<br />
                <strong>Email:</strong> <a href="mailto:grievance@uwo24.com" style={{ color: '#D6A559' }}>grievance@uwo24.com</a> / <a href="mailto:admin@uwo24.com" style={{ color: '#D6A559' }}>admin@uwo24.com</a><br />
                <strong>Registered Office:</strong> Jabalpur, Madhya Pradesh, India.
              </p>
            </>
          ) : (
            <>
              <h3>1. Terms of Use</h3>
              <p>
                By accessing or using the digital platforms, website, or APIs provided by UWO™ - Unified Web Options &amp; Services Pvt. Ltd., you agree to be bound by these Terms &amp; Conditions and all applicable laws and regulations.
              </p>

              <h3>2. Intellectual Property Rights</h3>
              <p>
                All content, trademarks, patents, proprietary algorithms, and brand assets associated with UWO™, AISA™, AI Legal™, UWO Connect™, AI ADS™, and EFV™ are the sole property of Unified Web Options &amp; Services Pvt. Ltd. No material may be reproduced or distributed without express written permission.
              </p>

              <h3>3. Partner &amp; Referral Program</h3>
              <p>
                Participation in the UWO™ Earn &amp; Refer program is subject to compliance with ethical marketing practices. Fraudulent clicks, spamming, self-referrals, or misrepresentation will result in immediate termination of partner access and forfeiture of accrued balances.
              </p>

              <h3>4. Professional Disclaimer</h3>
              <p>
                Our platforms leverage generative AI and machine learning workflows. Outputs, draft documents, statutory summaries, and analytics are designed to assist human professionals and should be independently verified prior to mission-critical or formal deployment.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
