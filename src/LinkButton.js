import React, { useEffect, useRef, useState } from 'react';
import './LinkButton.css';
import hoverSound from './img/hover-sound.wav';

const icons = {
  discord: 'fab fa-discord',
  instagram: 'fab fa-instagram',
  whatsapp: 'fab fa-whatsapp',
  tiktok: 'fab fa-tiktok',
  kick: 'fas fa-play'
};

const iconColors = {
  discord: '#7289da',
  instagram: '#E4405F',
  whatsapp: '#25D366',
  tiktok: '#69C9D0',
  kick: '#00FF00'
};

function LinkButton({ url, text, icon, iconSrc, onClick }) {
  const audioRef = useRef(null);
  const [audioReady, setAudioReady] = useState(false);

  useEffect(() => {
    const audio = new Audio(hoverSound);
    audioRef.current = audio;

    const unlockAudio = () => {
      audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
        setAudioReady(true);
        document.removeEventListener('click', unlockAudio);
      }).catch(() => {});
    };

    document.addEventListener('click', unlockAudio);
  }, []);

  const handleClick = (e) => {
    if (url === '#') {
      e.preventDefault();
      if (onClick) onClick();
    }
  };

  const handleHover = () => {
    if (audioReady) {
      audioRef.current?.play().catch(() => {});
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
      onClick={handleClick}
      onMouseEnter={handleHover}
      dir={text.startsWith('أ') ? 'rtl' : 'ltr'}
    >
      {iconSrc ? (
        <img src={iconSrc} alt="" className="custom-icon" />
      ) : (
        <i className={`${icons[icon]} icon`} style={{ color: iconColors[icon] }}></i>
      )}
      <span className="link-text">{text}</span>
    </a>
  );
}

export default LinkButton;
