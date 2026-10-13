import React, { useEffect } from 'react';

export default function LegalModal({ isOpen, type, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      const prevTitle = document.title;
      if (type === 'terms') {
        document.title = 'Terms & Conditions | UWO™';
      } else if (type === 'cookies') {
        document.title = 'Cookies Policy | UWO™';
      } else {
        document.title = 'Privacy Policy | UWO™';
      }
      return () => {
        document.title = prevTitle;
      };
    }
  }, [isOpen, type]);

  if (!isOpen) return null;

  const getModalMeta = () => {
    switch (type) {
      case 'cookies':
        return { title: 'Cookies Policy', badge: 'Cookie & Tracking Technologies' };
      case 'terms':
        return { title: 'Terms & Conditions', badge: 'Platform Terms of Use' };
      case 'privacy':
      default:
        return { title: 'Privacy Policy', badge: 'Data Protection & Privacy Notice' };
    }
  };

  const { title, badge } = getModalMeta();

  return (
    <div 
      className="uwo-legal-overlay active"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="uwo-legal-card" role="dialog" aria-modal="true">
        <div className="uwo-legal-header">
          <div>
            <div style={{ fontSize: '0.72rem', color: '#D6A559', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '2px' }}>
              {badge}
            </div>
            <h2 style={{ margin: 0 }}>{title}</h2>
          </div>
          <button type="button" className="uwo-legal-close" onClick={onClose} aria-label="Close">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="uwo-legal-body">
          {type === 'cookies' ? (
            <>
              <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '16px' }}>
                <strong>Effective Date:</strong> October 2026 &bull; <strong>Version:</strong> 2.4
              </p>

              <h3>1. What Are Cookies?</h3>
              <p>
                Cookies and similar local storage technologies are small text files placed on your browser or device when you interact with our websites, web applications, and customer portals. They allow our platform to recognize your device, maintain authenticated sessions, remember configured workspace preferences, and ensure optimal service delivery.
              </p>

              <h3>2. Categories of Cookies We Use</h3>
              <ul>
                <li>
                  <strong>Strictly Necessary / Essential Cookies:</strong> Required for the fundamental operation of the website and user dashboards. These enable secure login sessions, CSRF security verification, and basic navigation routing. They cannot be disabled.
                </li>
                <li>
                  <strong>Functional &amp; Preference Cookies:</strong> Store user-selected interface preferences, such as selected campus or organization filters, active tabs, and localized layout states, ensuring a continuous experience across visits.
                </li>
                <li>
                  <strong>Performance &amp; Telemetry Cookies:</strong> Aggregate anonymized metrics regarding page loading times, API responsiveness, and client telemetry to help our engineering team identify platform bottlenecks and optimize throughput.
                </li>
              </ul>

              <h3>3. Third-Party Integrations &amp; Security Services</h3>
              <p>
                Certain pages utilize trusted enterprise services for security, media delivery, and analytics, such as Google Cloud CDN, font and style delivery networks, and transactional session management. These providers process information strictly in accordance with their contractual service mandates and our security guidelines.
              </p>

              <h3>4. Managing Cookie Choices</h3>
              <p>
                You have the right to accept or decline non-essential cookies. You can modify your browser settings to decline all cookies or to alert you when a cookie is placed. Note that disabling essential cookies may impact certain platform functions, including portal authentication and interactive workspaces.
              </p>

              <h3>5. Contact for Cookie Queries</h3>
              <p>
                For questions regarding our use of cookies and tracking technologies, please contact our data team at <a href="mailto:admin@uwo24.com" style={{ color: '#D6A559' }}>admin@uwo24.com</a>.
              </p>
            </>
          ) : type === 'privacy' ? (
            <>
              <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '16px' }}>
                <strong>Effective Date:</strong> 8 October 2026 &bull; <strong>Last Updated:</strong> October 2026
              </p>

              <h3>1. Introduction &amp; Products Covered</h3>
              <p>
                Unified Web Options &amp; Services Pvt. Ltd. ("UWO", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy governs personal and organization data processed across our public website and digital platform portfolio:
              </p>
              <ul>
                <li><strong>AISA™:</strong> AI Super Assistant for personal and professional productivity.</li>
                <li><strong>AI Legal™:</strong> Legal research, contract drafting, and matter intelligence.</li>
                <li><strong>UWO Connect™:</strong> Unified communication and omnichannel workflow automation.</li>
                <li><strong>UWO™ AI Ecosystem for Education:</strong> Institution-isolated campus intelligence.</li>
                <li><strong>AI ADS™:</strong> Autonomous marketing intelligence and creative operating system.</li>
                <li><strong>EFV™ Framework:</strong> Research initiatives and cognitive intelligence frameworks.</li>
              </ul>

              <h3>2. The Data We Collect &amp; Purpose</h3>
              <p>We process personal and organizational data strictly as needed for legitimate business functions:</p>
              <ul>
                <li><strong>Identity &amp; Contact Data:</strong> Full name, institutional email, phone/WhatsApp number, organization name, and designation collected via demo requests and inquiries.</li>
                <li><strong>Workspace &amp; Tenant Data:</strong> Matter context, syllabus structures, or CRM metadata supplied by authorized users within isolated enterprise environments.</li>
                <li><strong>Technical &amp; Telemetry Data:</strong> IP addresses, browser specifications, diagnostic latency metrics, and API interaction logs to safeguard infrastructure integrity.</li>
              </ul>

              <h3>3. AI Infrastructure &amp; Cloud Service Providers</h3>
              <p>
                To provide high-reliability services, UWO leverages enterprise cloud infrastructure and verified AI model providers, including:
              </p>
              <ul>
                <li><strong>Google Cloud &amp; Vertex AI:</strong> Managed computing and secure model endpoints.</li>
                <li><strong>Microsoft Azure:</strong> Enterprise cloud services and document intelligence.</li>
                <li><strong>Amazon Web Services (AWS):</strong> Scalable storage and network infrastructure.</li>
                <li><strong>MongoDB Atlas:</strong> Encrypted multi-tenant operational data clusters.</li>
              </ul>
              <p>
                <em>Model Training Protection:</em> Customer case documents, student records, and confidential business communications ingested into isolated workspaces are never used to train generalized foundation models without explicit affirmative consent.
              </p>

              <h3>4. Retention, Security &amp; Deletion Process</h3>
              <p>
                All data is encrypted in transit using TLS 1.3 and at rest with AES-256 standards.
              </p>
              <p>
                <strong>Retention &amp; Deletion Timelines:</strong> Active customer and workspace records are retained for the subscription term. Upon formal written termination or verified deletion request, client data and associated embeddings are scheduled for cryptographic purge within 30 days, subject to mandatory statutory tax, billing, and regulatory retention rules.
              </p>

              <h3>5. User Rights &amp; Grievance Redressal Channel</h3>
              <p>
                Under the Information Technology Act 2000 and the Digital Personal Data Protection Act (DPDPA), users may request access, rectification, or deletion of their personal records. Inquiries and grievance escalations may be directed to our designated Grievance Officer:
              </p>
              <p style={{ marginTop: '8px' }}>
                <strong>Grievance Officer:</strong> Unified Web Options &amp; Services Pvt. Ltd.<br />
                <strong>Email:</strong> <a href="mailto:grievance@uwo24.com" style={{ color: '#D6A559' }}>grievance@uwo24.com</a> / <a href="mailto:admin@uwo24.com" style={{ color: '#D6A559' }}>admin@uwo24.com</a><br />
                <strong>Registered Office:</strong> SG Square, Rampur Chowk, Jabalpur, Madhya Pradesh 482008, India.<br />
                <strong>Response Window:</strong> Written acknowledgment within 48 hours; resolution within 30 days.
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: '0.82rem', color: '#64748b', marginBottom: '16px' }}>
                <strong>Effective Date:</strong> October 2026 &bull; <strong>Version:</strong> 2.4
              </p>

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
