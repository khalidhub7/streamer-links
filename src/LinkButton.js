import React from 'react';
import './LinkButton.css';

const icons = {
  discord: 'fab fa-discord',
  instagram: 'fab fa-instagram',
  twitch: 'fab fa-twitch',
  youtube: 'fab fa-youtube',
  twitter: 'fab fa-twitter',
  facebook: 'fab fa-facebook',
  tiktok: 'fab fa-tiktok',
  kick: 'fas fa-play', // Assuming a simple play icon for Kick live stream
  whatsapp: 'fab fa-whatsapp', // WhatsApp icon
};

const iconColors = {
  discord: '#7289da', // Discord blue
  instagram: '#E4405F', // Instagram pink-red
  twitch: '#9146FF', // Twitch purple
  youtube: '#FF0000', // YouTube red
  twitter: '#1DA1F2', // Twitter blue
  facebook: '#1877F2', // Facebook blue
  tiktok: '#69C9D0', // TikTok teal
  kick: '#00FF00', // Kick green for the live stream
  whatsapp: '#25D366', // WhatsApp green
};

function LinkButton({ url, text, icon }) {
  const handleClick = (e) => {
    if (url === '#') {
      e.preventDefault();
      alert('⏳ mazal ma tht lien 🔗');
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
      onClick={handleClick}
    >
      <i 
        className={`${icons[icon]} icon`} 
        style={{ color: iconColors[icon] }} 
      ></i>
      <span className="link-text">{text}</span>
    </a>
  );
}

export default LinkButton;
