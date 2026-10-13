import React, { useState, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileDrawer from './MobileDrawer';
import EarnReferModal from '../modals/EarnReferModal';
import LegalModal from '../modals/LegalModal';
import CookieConsent from '../modals/CookieConsent';
import ChatbotWidget from '../widgets/ChatbotWidget';

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [earnReferOpen, setEarnReferOpen] = useState(false);
  const [legalModalState, setLegalModalState] = useState({ isOpen: false, type: 'privacy' });

  const location = useLocation();
  const navigate = useNavigate();

  // Helper to determine legal type from URL pathname, hash, or query param
  const getLegalType = (loc) => {
    if (!loc) return null;
    const decodedPath = decodeURIComponent(loc.pathname || '').toLowerCase().trim();
    if (
      decodedPath === '/terms-and-conditions' ||
      decodedPath === '/terms' ||
      decodedPath === '/terms-conditions' ||
      decodedPath === '/terms & conditions' ||
      decodedPath === '/terms%20&%20conditions' ||
      decodedPath === '/terms-of-service' ||
      decodedPath === '/terms-of-use'
    ) {
      return 'terms';
    }
    if (
      decodedPath === '/privacy-policy' ||
      decodedPath === '/privacy' ||
      decodedPath === '/privacy-notice'
    ) {
      return 'privacy';
    }
    if (
      decodedPath === '/cookies-policy' ||
      decodedPath === '/cookie-policy' ||
      decodedPath === '/cookies' ||
      decodedPath === '/cookie'
    ) {
      return 'cookies';
    }

    const hash = (loc.hash || '').toLowerCase();
    if (hash === '#terms') return 'terms';
    if (hash === '#privacy') return 'privacy';
    if (hash === '#cookies') return 'cookies';

    const params = new URLSearchParams(loc.search || '');
    const modalParam = params.get('modal');
    if (modalParam === 'terms' || modalParam === 'privacy' || modalParam === 'cookies') {
      return modalParam;
    }

    return null;
  };

  // Sync modal state whenever route pathname, hash, or search changes
  useEffect(() => {
    const legalType = getLegalType(location);
    if (legalType) {
      setLegalModalState({ isOpen: true, type: legalType });
    } else {
      setLegalModalState(prev => (prev.isOpen ? { ...prev, isOpen: false } : prev));
    }

    // Earn & refer modal query/hash listeners
    const params = new URLSearchParams(location.search || '');
    const hash = (location.hash || '').toLowerCase();
    if (params.get('action') === 'earn-refer' || params.get('open') === 'earn-refer' || hash === '#earn-refer') {
      setEarnReferOpen(true);
    }
  }, [location.pathname, location.hash, location.search]);

  // Global window helpers for legacy compatibility
  useEffect(() => {
    window.openEarnReferModal = () => setEarnReferOpen(true);
    window.closeEarnReferModal = () => setEarnReferOpen(false);

    return () => {
      delete window.openEarnReferModal;
      delete window.closeEarnReferModal;
    };
  }, []);

  const handleOpenLegal = (type) => {
    let target = '/terms-and-conditions';
    if (type === 'privacy') target = '/privacy-policy';
    else if (type === 'cookies') target = '/cookies-policy';

    if (location.pathname !== target) {
      navigate(target);
    } else {
      setLegalModalState({ isOpen: true, type });
    }
  };

  const handleCloseLegal = () => {
    setLegalModalState(prev => ({ ...prev, isOpen: false }));
    const currentLegal = getLegalType(location);
    if (currentLegal) {
      if (window.history.state && window.history.state.idx > 0) {
        navigate(-1);
      } else {
        navigate('/', { replace: true });
      }
    } else if (location.hash || location.search.includes('modal=')) {
      navigate(location.pathname, { replace: true });
    }
  };

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar 
        onOpenEarnRefer={() => setEarnReferOpen(true)}
        onToggleDrawer={() => setDrawerOpen(!drawerOpen)}
      />

      {/* Mobile Drawer */}
      <MobileDrawer 
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onOpenEarnRefer={() => setEarnReferOpen(true)}
      />

      {/* Main Routed Page Content */}
      <main className="main-content page-transition">
        <Outlet context={{ openEarnRefer: () => setEarnReferOpen(true) }} />
      </main>

      {/* Global Footer */}
      <Footer onOpenLegal={handleOpenLegal} onOpenEarnRefer={() => setEarnReferOpen(true)} />

      {/* 2-Field Earn & Refer Modal */}
      <EarnReferModal 
        isOpen={earnReferOpen} 
        onClose={() => setEarnReferOpen(false)} 
      />

      {/* Legal Overlay (Terms / Privacy) */}
      <LegalModal 
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={handleCloseLegal}
      />

      {/* Cookie Consent Banner */}
      <CookieConsent onOpenPrivacy={() => handleOpenLegal('privacy')} />

      {/* Floating AI Chatbot */}
      <ChatbotWidget />
    </div>
  );
}
