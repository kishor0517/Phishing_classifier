import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCode, FaLock, FaUserSecret } from 'react-icons/fa';
import './Home.css';

const ParticlesBackground = React.lazy(() => import('./ParticlesBackground'));

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      <Suspense fallback={<div style={{ position: 'absolute', inset: 0 }} />}>
        <ParticlesBackground />
      </Suspense>

      <div className="content-wrapper">
        
        <motion.div 
          className="hero-section"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>PHISHING DETECTION</h1>

          <p className="subtitle">
            Advanced AI-driven security to protect you from malicious URLs.
          </p>
          
          <motion.button 
            className="cta-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/scan')}
          >
            LAUNCH SCANNER
          </motion.button>
        </motion.div>

        <div className="features-grid">
          <FeatureCard 
            icon={<FaCode />} 
            title="AI Analysis" 
            desc="Uses Machine Learning algorithms to detect patterns in fake URLs." 
          />
          <FeatureCard 
            icon={<FaLock />} 
            title="Real-Time Protection" 
            desc="Instant scanning provides immediate feedback on link safety." 
          />
          <FeatureCard 
            icon={<FaUserSecret />} 
            title="Anti-Fraud" 
            desc="Identifies social engineering attacks before you click." 
          />
        </div>

      </div>

      {/* ✅ Footer INSIDE component */}
      <footer className="footer">
        DEVELOPED BY Mayank | Manish | Kishor
      </footer>

    </div>
  );
};

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div 
    className="feature-card"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="card-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{desc}</p>
  </motion.div>
);

export default Home;
