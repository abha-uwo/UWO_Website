import React, { useEffect } from 'react';
import AiAdsHero from '../components/aiads/AiAdsHero';
import ConvergenceSection from '../components/aiads/ConvergenceSection';
import ModuleShowcase from '../components/aiads/ModuleShowcase';
import ContentStudio from '../components/aiads/ContentStudio';
import MarketingPipeline from '../components/aiads/MarketingPipeline';
import AiAdsFinalCTA from '../components/aiads/AiAdsFinalCTA';
import { AI_ADS_META } from '../constants/aiAdsConstants';
import '../ai-ads.css';

export default function AiAdsPage() {
  // Document SEO, Meta Tags, and Structured Data
  useEffect(() => {
    document.title = AI_ADS_META.title;

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = AI_ADS_META.description;

    // OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.content = AI_ADS_META.title;

    // OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.content = AI_ADS_META.description;

    // JSON-LD Structured Data
    const schemaScript = document.createElement('script');
    schemaScript.type = 'application/ld+json';
    schemaScript.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'AI Ads™',
      'operatingSystem': 'Cloud Web Platform',
      'applicationCategory': 'BusinessApplication, MarketingApplication',
      'description': AI_ADS_META.description,
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Unified Web Options & Services Pvt. Ltd. (UWO™)',
        'url': 'https://uwo24.com'
      }
    });
    document.head.appendChild(schemaScript);

    return () => {
      if (document.head.contains(schemaScript)) {
        document.head.removeChild(schemaScript);
      }
    };
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="aiads-page-root">
      {/* 01. HERO with Marketing Command Center Visual */}
      <AiAdsHero onExploreClick={() => scrollToSection('modules')} />

      {/* 02. WHY AI ADS (Convergence: 8 Disconnected Tools vs 1 OS) */}
      <ConvergenceSection />

      {/* 03. ENTERPRISE ENGINES SHOWCASE (8 Interactive Engines in 1 Unified Space) */}
      <ModuleShowcase />

      {/* 04. MULTI-CHANNEL EDITORIAL STUDIO (One Idea. Every Channel, Flawlessly Native) */}
      <ContentStudio />

      {/* 05. AUTONOMOUS MARKETING PIPELINE (End-to-End Execution Flow) */}
      <MarketingPipeline />


      {/* 06. FINAL CALL TO ACTION */}
      <AiAdsFinalCTA onExploreClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </div>
  );
}
