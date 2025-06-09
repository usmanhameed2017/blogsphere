import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLock, FaUserShield, FaInfoCircle, FaCookieBite, FaExchangeAlt, FaClipboardList, FaRegClock } from 'react-icons/fa';

function Privacy() {
    return (
        <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
            <h1> Privacy Policy </h1>
            <p>
            Your privacy matters to us. This policy explains how we collect, use, and safeguard your information while you're using our platform.
            </p>
        </section>

        {/* Divider */}
        <div className="section-divider"> <FaInfoCircle className="me-2" /> What We Collect</div>

        {/* Content Sections */}
        <section className="about-content">
            <div className="about-card">
            <h2><FaUserShield className="me-2" /> Personal Information</h2>
            <p>
                We may collect your name, email, profile photo, and other contact details during registration or usage. This helps personalize your experience.
            </p>
            </div>

            <div className="about-card">
            <h2><FaClipboardList className="me-2" /> Activity Data</h2>
            <p>
                We monitor actions such as comments, likes, and posts for analytical and moderation purposes.
            </p>
            </div>

            <div className="about-card">
            <h2><FaLock className="me-2" /> Device & Log Info</h2>
            <p>
                For security and analytics, we collect browser type, IP address, and timestamps when you access our site.
            </p>
            </div>
        </section>

        {/* Divider */}
        <div className="section-divider"><FaExchangeAlt className="me-2" /> How We Use Data</div>

        <section className="about-content">
            <div className="about-card">
            <h2><FaClipboardList className="me-2" /> Improving Services</h2>
            <p>
                Your data helps us understand user behavior, improve features, and offer personalized content.
            </p>
            </div>

            <div className="about-card">
            <h2><FaUserShield className="me-2" /> Security & Compliance</h2>
            <p>
                We use encryption and other best practices to protect your information. We may disclose information if required by law.
            </p>
            </div>

            <div className="about-card">
            <h2><FaExchangeAlt className="me-2" /> Third-Party Sharing</h2>
            <p>
                We don’t sell your data. We may share with trusted partners for analytics or communication purposes—with strict confidentiality.
            </p>
            </div>
        </section>

        {/* Divider */}
        <div className="section-divider"><FaCookieBite className="me-2" /> Cookies & Control</div>

        <section className="about-content">
            <div className="about-card">
            <h2><FaCookieBite className="me-2" /> Cookie Usage</h2>
            <p>
                We use cookies to store preferences and enhance your experience. You can disable them anytime in browser settings.
            </p>
            </div>

            <div className="about-card">
            <h2><FaUserShield className="me-2" /> Your Rights</h2>
            <p>
                You can request access, deletion, or correction of your data by contacting us directly.
            </p>
            </div>

            <div className="about-card">
            <h2><FaRegClock className="me-2" /> Policy Updates</h2>
            <p>
                This privacy policy may change over time. We’ll notify you of major changes via email or platform announcements.
            </p>
            </div>
        </section>
        </div>
    );
}

export default Privacy;