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
};

function LinkButton({ url, text, icon }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
    >
      <i className={`${icons[icon]} icon`}></i>
      <span className="link-text">{text}</span>
    </a>
  );
}

export default LinkButton;