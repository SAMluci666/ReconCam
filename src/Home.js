import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import logo from './logo.jpg'; // Ensure you have an image file in the specified path

const Home = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      {/* Project Title */}
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#2c3e50' ,marginTop: '0px' }}>ReconCam</h1>

      {/* Project Description */}
      <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: 'auto', color: '#34495e' }}>
        ReconCam is a cutting-edge face recognition system that leverages <strong>InsightFace</strong> for accurate facial recognition. 
        It is seamlessly deployed on <strong>AWS</strong>, ensuring high availability and scalability. To optimize performance, 
        ReconCam uses <strong>RedisDB</strong> as an in-memory cache, making it fast and efficient for real-time applications.
      </p>

      {/* Team Image */}
      <div style={{ margin: '30px auto' }}>
        <img
          src={logo}
          alt="logo"
          style={{ width: '30%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
        />
      </div>

      {/* Team Description */}
      <p style={{ fontSize: '1rem', color: '#7f8c8d' }}>
        Created by HakerXCoders at HTM 5.0 Hackathon
      </p>
      {/* Login Button */}
      {!isAuthenticated && (
        <button 
          onClick={() => loginWithRedirect()} 
          style={{
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: '#2c3e50',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Home;
