import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { 
  FileText, Copy, Check, ExternalLink, Globe, 
  ThumbsUp, MessageSquare, Repeat2, Send, 
  Heart, Bookmark, MoreHorizontal, Share2, 
  ShieldCheck, ArrowRight, Sparkles 
} from 'lucide-react';
import { CONTENT_STUDIO_PREVIEWS } from '../../constants/aiAdsConstants';

const PLATFORM_LIST = [
  {
    id: 'linkedin', label: 'LinkedIn', color: '#0077b5',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    id: 'instagram', label: 'Instagram', color: '#e1306c',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    )
  },
  {
    id: 'x', label: 'X (Twitter)', color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.257 5.626L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    )
  },
  {
    id: 'email', label: 'Email Newsletter', color: '#7c3aed',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    )
  }
];

export default function ContentStudio() {
  const shouldReduceMotion = useReducedMotion();
  const [activePlatform, setActivePlatform] = useState('linkedin');
  const [copied, setCopied] = useState(false);
  const activeContent = CONTENT_STUDIO_PREVIEWS[activePlatform];

  const handleCopy = () => {
    navigator.clipboard?.writeText(`${activeContent.headline}\n\n${activeContent.body}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="aiads-section aiads-content-studio-section" id="content-studio" style={{ background: '#ffffff', padding: '44px 0' }}>
      <div className="aiads-container">
        <div className="aiads-content-studio-layout">
          {/* LEFT COLUMN: Strategic Headlines & Channel Controls */}
          <div className="aiads-content-studio-controls">
            <h2 className="aiads-studio-heading">
              One Idea. Every Channel, <br />
              <span className="aiads-gradient-title">Flawlessly Native.</span>
            </h2>

            <p className="aiads-studio-desc">
              Repurposing content shouldn't mean copy-pasting the exact same generic text. 
              AI Ads automatically rewrites and formats your core message into native formats for every platform.
            </p>

            {/* Interactive Platform Selector Cards */}
            <div className="aiads-studio-platform-list">
              {PLATFORM_LIST.map((plat) => {
                const isActive = activePlatform === plat.id;
                return (
                  <button
                    key={plat.id}
                    type="button"
                    onClick={() => setActivePlatform(plat.id)}
                    className={`aiads-studio-platform-card ${isActive ? 'active' : ''}`}
                    style={{
                      borderColor: isActive ? plat.color : 'var(--aiads-border)',
                      background: isActive ? `${plat.color}08` : '#ffffff',
                    }}
                  >
                    <div className="aiads-studio-platform-icon" style={{ background: `${plat.color}15`, color: plat.color }}>
                      {plat.icon}
                    </div>
                    <div className="aiads-studio-platform-info">
                      <div className="aiads-studio-platform-name" style={{ color: isActive ? plat.color : 'var(--aiads-text-main)' }}>
                        {plat.label}
                      </div>
                      <div className="aiads-studio-platform-desc">
                        {plat.id === 'linkedin' && 'Executive Thought Leadership & Carousels'}
                        {plat.id === 'instagram' && 'Visual Story Drops & Feed Captions'}
                        {plat.id === 'x' && 'Viral Thread Hooks & Punchy Takes'}
                        {plat.id === 'email' && 'Curated Executive Briefs & Broadcasts'}
                      </div>
                    </div>
                    {isActive && (
                      <span className="aiads-studio-active-dot" style={{ background: plat.color }}></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feature Highlights Pills */}
            <div className="aiads-studio-features">
              <div className="aiads-studio-feature-pill">
                <ShieldCheck size={14} style={{ color: '#10b981' }} />
                <span>100% Brand DNA Compliance</span>
              </div>
              <div className="aiads-studio-feature-pill">
                <Sparkles size={14} style={{ color: '#7c3aed' }} />
                <span>Native Format Synthesis</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Active Native Post Experience Preview */}
          <div className="aiads-content-studio-preview-col">
            <div className="aiads-content-studio-preview-window" style={{ minHeight: '520px', height: '520px', overflowY: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePlatform}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25 }}
                >
              {/* ========================================================
                  1. LINKEDIN NATIVE POST PREVIEW
                  ======================================================== */}
              {activePlatform === 'linkedin' && (
                <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e0e0e0', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                  {/* LinkedIn Top Header */}
                  <div style={{ padding: '16px 20px 12px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, #0a66c2 0%, #004182 100%)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', boxShadow: '0 2px 8px rgba(10,102,194,0.3)', flexShrink: 0 }}>
                        AJ
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#191919' }}>Alex Jenkins</span>
                          <span style={{ fontSize: '0.72rem', color: '#666666' }}>• 1st</span>
                        </div>
                        <div style={{ fontSize: '0.74rem', color: '#575757', lineHeight: 1.3 }}>
                          Chief Marketing Officer @ HyperScale | Scaling Brand DNA with AI Ads™
                        </div>
                        <div style={{ fontSize: '0.7rem', color: '#8c8c8c', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                          <span>2h • Edited •</span>
                          <Globe size={11} style={{ color: '#666666' }} />
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        type="button"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          background: 'transparent',
                          border: 'none',
                          color: '#0a66c2',
                          fontWeight: 700,
                          fontSize: '0.86rem',
                          cursor: 'pointer',
                          padding: '4px 8px',
                          borderRadius: '4px'
                        }}
                      >
                        <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>+</span> Follow
                      </button>
                      <button
                        type="button"
                        onClick={handleCopy}
                        title="Copy Content"
                        style={{
                          background: '#f3f4f6',
                          border: '1px solid #e5e7eb',
                          borderRadius: '6px',
                          padding: '5px 10px',
                          fontSize: '0.72rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: copied ? '#10b981' : '#374151'
                        }}
                      >
                        {copied ? <Check size={12} /> : <Copy size={12} />}
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>

                  {/* LinkedIn Post Text Body */}
                  <div style={{ padding: '0 20px 10px 20px' }}>
                    <p style={{ fontSize: '0.88rem', color: '#191919', fontWeight: 700, lineHeight: 1.45, marginBottom: '8px' }}>
                      Most enterprise AI marketing tools fail because they generate content without a memory.
                    </p>
                    <p style={{ fontSize: '0.83rem', color: '#262626', lineHeight: 1.5, marginBottom: '8px' }}>
                      They treat every prompt like a blank slate — one day your brand sounds like a startup; the next, like an academic textbook.
                    </p>
                    <p style={{ fontSize: '0.83rem', color: '#262626', lineHeight: 1.5, marginBottom: '10px' }}>
                      AI Ads™ anchors every post, campaign, and creative to a centralized Brand DNA Engine — voice, personas, and USPs stay 100% consistent. Here are 3 ways it's replacing disconnected SaaS stacks ⬇️
                    </p>
                    <div style={{ fontSize: '0.8rem', color: '#0a66c2', fontWeight: 600, display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '10px' }}>
                      <span>#AIMarketing</span>
                      <span>#EnterpriseGrowth</span>
                      <span>#BrandStrategy</span>
                      <span>#CMO</span>
                    </div>

                    {/* LinkedIn Embedded Rich Media Attachment */}
                    <div style={{ border: '1px solid #e0e0e0', borderRadius: '8px', overflow: 'hidden', background: '#f8fafc' }}>
                      <div style={{ height: '64px', background: 'linear-gradient(135deg, #0a66c2 0%, #7c3aed 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', padding: '12px' }}>
                        <div style={{ textAlign: 'center' }}>
                          <div style={{ fontSize: '0.66rem', textTransform: 'uppercase', letterSpacing: '0.06em', opacity: 0.9 }}>AI ADS™ STRATEGY BRIEF</div>
                          <div style={{ fontSize: '0.88rem', fontWeight: 800 }}>The Compounding Autonomous Marketing Loop</div>
                        </div>
                      </div>
                      <div style={{ padding: '8px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff' }}>
                        <div>
                          <div style={{ fontSize: '0.66rem', color: '#666666', textTransform: 'uppercase' }}>uwo.ai · 4 min read</div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#191919' }}>Read the complete strategy breakdown →</div>
                        </div>
                        <ExternalLink size={13} style={{ color: '#0a66c2' }} />
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn Social Reactions Count Bar */}
                  <div style={{ padding: '8px 20px', borderTop: '1px solid #f0f0f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.74rem', color: '#666666' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center' }}>
                        <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#0a66c2', color: '#fff', fontSize: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>👍</span>
                        <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#057642', color: '#fff', fontSize: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-4px' }}>💡</span>
                        <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: '#df704d', color: '#fff', fontSize: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginLeft: '-4px' }}>❤️</span>
                      </span>
                      <span style={{ fontWeight: 600, marginLeft: '4px' }}>1,842</span>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <span>236 comments</span>
                      <span>•</span>
                      <span>84 reposts</span>
                    </div>
                  </div>

                  {/* LinkedIn Interaction Actions Footer */}
                  <div style={{ padding: '4px 14px', borderTop: '1px solid #f0f0f0', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px' }}>
                    <button type="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px 0', background: 'transparent', border: 'none', color: '#5e5e5e', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer', borderRadius: '4px' }}>
                      <ThumbsUp size={16} />
                      <span>Like</span>
                    </button>
                    <button type="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px 0', background: 'transparent', border: 'none', color: '#5e5e5e', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer', borderRadius: '4px' }}>
                      <MessageSquare size={16} />
                      <span>Comment</span>
                    </button>
                    <button type="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px 0', background: 'transparent', border: 'none', color: '#5e5e5e', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer', borderRadius: '4px' }}>
                      <Repeat2 size={16} />
                      <span>Repost</span>
                    </button>
                    <button type="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', padding: '10px 0', background: 'transparent', border: 'none', color: '#5e5e5e', fontWeight: 600, fontSize: '0.8rem', cursor: 'pointer', borderRadius: '4px' }}>
                      <Send size={16} />
                      <span>Send</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ========================================================
                  2. INSTAGRAM NATIVE FEED POST PREVIEW
                  ======================================================== */}
              {activePlatform === 'instagram' && (
                <div style={{ background: '#ffffff', borderRadius: '14px', border: '1px solid #dbdbdb', boxShadow: '0 2px 14px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                  {/* Instagram Top Header */}
                  <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #efefef' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {/* Story Gradient Ring */}
                      <div style={{ padding: '2px', borderRadius: '50%', background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}>
                        <div style={{ padding: '2px', background: '#ffffff', borderRadius: '50%' }}>
                          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #ec4899)', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.78rem', fontWeight: 800 }}>
                            AI
                          </div>
                        </div>
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <span style={{ fontSize: '0.84rem', fontWeight: 700, color: '#262626' }}>aiads.studio</span>
                          <span style={{ color: '#0095f6', fontSize: '10px' }}>●</span>
                          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#0095f6', cursor: 'pointer' }}>Follow</span>
                        </div>
                        <div style={{ fontSize: '0.68rem', color: '#8e8e8e' }}>Sponsored • Brand DNA Scoped</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        type="button"
                        onClick={handleCopy}
                        style={{
                          background: '#f8fafc',
                          border: '1px solid #e2e8f0',
                          borderRadius: '6px',
                          padding: '4px 8px',
                          fontSize: '0.7rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: copied ? '#10b981' : '#374151'
                        }}
                      >
                        {copied ? <Check size={11} /> : <Copy size={11} />}
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                      <MoreHorizontal size={18} style={{ color: '#262626', cursor: 'pointer' }} />
                    </div>
                  </div>

                  {/* Instagram Visual Creative Preview */}
                  <div style={{ 
                    width: '100%', 
                    aspectRatio: '4 / 3', 
                    maxHeight: '200px',
                    background: 'linear-gradient(135deg, #18181b 0%, #2e1065 50%, #4c0519 100%)', 
                    position: 'relative', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    justifyContent: 'space-between', 
                    padding: '16px',
                    color: '#ffffff'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ padding: '4px 10px', borderRadius: '9999px', background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                        ✨ AUTONOMOUS MARKETING STUDIO
                      </span>
                      <span style={{ fontSize: '0.72rem', opacity: 0.8 }}>1/4</span>
                    </div>

                    <div style={{ textAlign: 'center', maxWidth: '360px', margin: '0 auto' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 900, lineHeight: 1.25, marginBottom: '8px', color: '#ffffff' }}>
                        From Raw Idea to Commercial Ad in 60s.
                      </h3>
                      <p style={{ fontSize: '0.78rem', opacity: 0.85, lineHeight: 1.4 }}>
                        Stop juggling 7 different design tools and copywriting apps. Anchor everything to verified Brand DNA.
                      </p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff' }}></span>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }}></span>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }}></span>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }}></span>
                      </div>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#ec4899', background: '#ffffff', padding: '4px 10px', borderRadius: '6px' }}>
                        Try AI Ads™
                      </span>
                    </div>
                  </div>

                  {/* Instagram Action Icons Row */}
                  <div style={{ padding: '10px 16px 6px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                      <Heart size={22} style={{ color: '#ed4956', fill: '#ed4956', cursor: 'pointer' }} />
                      <MessageSquare size={21} style={{ color: '#262626', cursor: 'pointer' }} />
                      <Send size={20} style={{ color: '#262626', cursor: 'pointer' }} />
                    </div>
                    <Bookmark size={21} style={{ color: '#262626', cursor: 'pointer' }} />
                  </div>

                  {/* Instagram Likes & Caption */}
                  <div style={{ padding: '0 16px 14px 16px' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#262626', marginBottom: '6px' }}>
                      4,289 likes
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#262626', lineHeight: 1.5, marginBottom: '6px' }}>
                      <span style={{ fontWeight: 700, marginRight: '6px' }}>aiads.studio</span>
                      Stop juggling 7 different design tools and copywriting apps. With AI Ads™:
                      <br /><br />
                      1️⃣ Ingest Brand DNA<br />
                      2️⃣ Generate 1:1, 16:9 &amp; 9:16 visual creatives<br />
                      3️⃣ Write platform-optimized captions<br />
                      4️⃣ Export directly to your campaign manager
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#00376b', display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '6px' }}>
                      <span>#CreativeAutomation</span>
                      <span>#AdCreatives</span>
                      <span>#GrowthMarketing</span>
                      <span>#BrandDesign</span>
                    </div>
                    <div style={{ fontSize: '0.74rem', color: '#8e8e8e', cursor: 'pointer', marginBottom: '4px' }}>
                      View all 142 comments
                    </div>
                    <div style={{ fontSize: '0.64rem', color: '#8e8e8e', letterSpacing: '0.04em' }}>
                      2 HOURS AGO
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================
                  3. X (TWITTER) NATIVE TWEET PREVIEW
                  ======================================================== */}
              {activePlatform === 'x' && (
                <div style={{ background: '#ffffff', borderRadius: '14px', border: '1px solid #eff3f4', boxShadow: '0 2px 12px rgba(0,0,0,0.06)', padding: '20px 24px' }}>
                  {/* Tweet Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: '#000000', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1rem', flexShrink: 0 }}>
                        𝕏
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <span style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f1419' }}>AI Ads™ Official</span>
                          <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', borderRadius: '50%', background: '#1d9bf0', color: '#ffffff', fontSize: '9px', fontWeight: 900 }}>✓</span>
                          <span style={{ fontSize: '0.82rem', color: '#536471' }}>@aiads_os · 3h</span>
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#536471' }}>
                          Autonomous Marketing OS · Built by UWO™
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        type="button"
                        onClick={handleCopy}
                        style={{
                          background: '#f7f9f9',
                          border: '1px solid #cfd9de',
                          borderRadius: '9999px',
                          padding: '4px 10px',
                          fontSize: '0.72rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          color: copied ? '#10b981' : '#0f1419'
                        }}
                      >
                        {copied ? <Check size={11} /> : <Copy size={11} />}
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                      <MoreHorizontal size={17} style={{ color: '#536471', cursor: 'pointer' }} />
                    </div>
                  </div>

                  {/* Tweet Content */}
                  <div style={{ fontSize: '0.92rem', color: '#0f1419', lineHeight: 1.55, marginBottom: '14px' }}>
                    <p style={{ marginBottom: '10px' }}>
                      Traditional marketing workflow is broken:
                    </p>
                    <div style={{ paddingLeft: '12px', borderLeft: '2px solid #cfd9de', marginBottom: '12px', color: '#536471', fontSize: '0.86rem' }}>
                      <div>• Copywriter writes in Google Docs</div>
                      <div>• Designer builds in Figma</div>
                      <div>• SEO lead optimizes in Ahrefs</div>
                      <div>• Media buyer exports to Meta</div>
                    </div>
                    <p style={{ fontWeight: 700, marginBottom: '8px' }}>
                      Zero alignment. Days lost.
                    </p>
                    <p style={{ marginBottom: '10px' }}>
                      AI Ads™ replaces the fragmented 8-tool stack with one unified operating system: Strategy ➔ SEO ➔ Copy ➔ 8K Creatives ➔ Landing Pages in minutes 🧵
                    </p>
                    <div style={{ color: '#1d9bf0', display: 'flex', gap: '8px', flexWrap: 'wrap', fontSize: '0.84rem' }}>
                      <span>#MarketingAI</span>
                      <span>#SaaS</span>
                      <span>#BuildInPublic</span>
                    </div>
                  </div>

                  {/* Tweet Timestamp & Analytics Bar */}
                  <div style={{ padding: '10px 0', borderTop: '1px solid #eff3f4', borderBottom: '1px solid #eff3f4', fontSize: '0.76rem', color: '#536471', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <span>2:45 PM · Oct 2, 2026 · </span>
                      <span style={{ fontWeight: 800, color: '#0f1419' }}>148.5K</span> Views
                    </div>
                  </div>

                  {/* Tweet Actions (Reply, Repost, Like, Bookmark, Share) */}
                  <div style={{ padding: '10px 4px 2px 4px', display: 'flex', justifyContent: 'space-between', color: '#536471', fontSize: '0.78rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                      <MessageSquare size={16} />
                      <span>128</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                      <Repeat2 size={16} />
                      <span>432</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                      <Heart size={16} style={{ color: '#f91880' }} />
                      <span>2.4K</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                      <Bookmark size={16} />
                      <span>895</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                      <Share2 size={16} />
                    </div>
                  </div>
                </div>
              )}

              {/* ========================================================
                  4. EMAIL NEWSLETTER INBOX CLIENT PREVIEW
                  ======================================================== */}
              {activePlatform === 'email' && (
                <div style={{ background: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.06)', overflow: 'hidden' }}>
                  {/* macOS Window Title Bar */}
                  <div style={{ background: '#f8fafc', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
                      <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
                      <span style={{ fontSize: '0.72rem', color: '#64748b', marginLeft: '12px', fontFamily: 'var(--aiads-font-mono)' }}>
                        Mail › Inbox › AI Ads Strategic Dispatch
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={handleCopy}
                      style={{
                        background: '#ffffff',
                        border: '1px solid #cbd5e1',
                        borderRadius: '6px',
                        padding: '4px 10px',
                        fontSize: '0.7rem',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        color: copied ? '#10b981' : '#374151'
                      }}
                    >
                      {copied ? <Check size={11} /> : <Copy size={11} />}
                      <span>{copied ? 'Copied' : 'Copy HTML'}</span>
                    </button>
                  </div>

                  {/* Email Client Header Metadata */}
                  <div style={{ padding: '12px 18px', borderBottom: '1px solid #f1f5f9', background: '#fafbfc' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4px' }}>
                      <h3 style={{ fontSize: '0.92rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                        Issue #42: How AeroPulse unlocked 3.4x ad ROAS with zero agency overhead
                      </h3>
                      <span style={{ fontSize: '0.68rem', color: '#94a3b8', whiteSpace: 'nowrap' }}>9:00 AM (2h ago)</span>
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#475569', lineHeight: 1.4 }}>
                      <div><strong>From:</strong> AI Ads Strategic Dispatch &lt;newsletter@uwo.ai&gt;</div>
                      <div><strong>To:</strong> Marketing Leadership Group (14,200 subscribers)</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '0.66rem', marginTop: '2px' }}>
                        <ShieldCheck size={12} />
                        <span>Verified TLS · Authenticated Brand DNA Pipeline</span>
                      </div>
                    </div>
                  </div>

                  {/* Email Body Newsletter Template */}
                  <div style={{ padding: '14px 20px', maxWidth: '640px', margin: '0 auto' }}>
                    {/* Editorial Issue Header Tag */}
                    <div style={{ textAlign: 'center', marginBottom: '12px', paddingBottom: '10px', borderBottom: '1px dashed #e2e8f0' }}>
                      <span style={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.08em', color: '#7c3aed', textTransform: 'uppercase' }}>
                        AI ADS™ WEEKLY EXECUTIVE BRIEF · ISSUE #42
                      </span>
                      <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>October 2026 · Curated by AI Ads Strategic Intelligence</div>
                    </div>

                    <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: 1.5, marginBottom: '8px' }}>
                      Hi Sarah,
                    </p>
                    <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: 1.5, marginBottom: '8px' }}>
                      When we audited our Q3 campaigns, our ad creative copy didn’t match our landing page messaging.
                    </p>

                    {/* Highlight Blockquote */}
                    <div style={{ background: '#f5f3ff', borderLeft: '3px solid #7c3aed', padding: '8px 12px', borderRadius: '0 6px 6px 0', margin: '10px 0', fontSize: '0.78rem', color: '#4c1d95', fontStyle: 'italic', lineHeight: 1.45 }}>
                      "By unifying our editorial and creative pipeline through AI Ads™, every headline, visual banner, and email nurture sequence now draws from the exact same Brand DNA repository."
                    </div>

                    <p style={{ fontSize: '0.82rem', color: '#334155', lineHeight: 1.5, marginBottom: '10px' }}>
                      Here is the exact 4-step framework we used to scale conversions:
                    </p>

                    {/* Newsletter CTA Button */}
                    <div style={{ textAlign: 'center', margin: '12px 0' }}>
                      <a
                        href="#modules"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          background: '#7c3aed',
                          color: '#ffffff',
                          fontWeight: 700,
                          fontSize: '0.78rem',
                          padding: '8px 20px',
                          borderRadius: '8px',
                          textDecoration: 'none',
                          boxShadow: '0 4px 14px rgba(124, 58, 237, 0.25)'
                        }}
                      >
                        <span>Access the 30-Day Marketing Roadmap</span>
                        <ArrowRight size={13} />
                      </a>
                    </div>

                    {/* Email Telemetry Stats Badge */}
                    <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '8px 12px', display: 'flex', justifyContent: 'space-around', textAlign: 'center', margin: '12px 0' }}>
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>44.8%</div>
                        <div style={{ fontSize: '0.64rem', color: '#64748b' }}>Open Rate</div>
                      </div>
                      <div style={{ borderLeft: '1px solid #e2e8f0' }}></div>
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>6.2%</div>
                        <div style={{ fontSize: '0.64rem', color: '#64748b' }}>CTR</div>
                      </div>
                      <div style={{ borderLeft: '1px solid #e2e8f0' }}></div>
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0f172a' }}>3.4x</div>
                        <div style={{ fontSize: '0.64rem', color: '#64748b' }}>ROAS Lift</div>
                      </div>
                    </div>

                    {/* Footer */}
                    <div style={{ textAlign: 'center', fontSize: '0.66rem', color: '#94a3b8', borderTop: '1px solid #f1f5f9', paddingTop: '8px', marginTop: '8px' }}>
                      <div>You received this because you are an AI Ads™ Enterprise Member.</div>
                      <div style={{ marginTop: '3px' }}>
                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>Unsubscribe</span> · 
                        <span style={{ textDecoration: 'underline', cursor: 'pointer', margin: '0 4px' }}>Preferences</span> · 
                        <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>View in Browser</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
