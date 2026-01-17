import React, { useState, useEffect } from "react";
import "./LinkButton.css";

// Import optimized icons (resized to appropriate dimensions)
import instagramIcon from "../../assets/icons/discord.png";
import kickIcon from "../../assets/icons/kick.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";
import tiktokIcon from "../../assets/icons/tik-tok.png";
import discordIcon from "../../assets/icons/discord.png";

const icons = {
  instagram: instagramIcon,
  kick: kickIcon,
  whatsapp: whatsappIcon,
  tiktok: tiktokIcon,
  discord: discordIcon,
};

// Simple image cache
const imageCache = {};

function LinkButton({ url, text, icon, isMobile }) {
  const [iconSrc, setIconSrc] = useState(null);

  useEffect(() => {
    let isMounted = true;

    if (icon && icons[icon]) {
      // If already cached, use it
      if (imageCache[icon]) {
        setIconSrc(imageCache[icon]);
        return;
      }

      // Preload the image
      const img = new Image();
      img.onload = () => {
        if (isMounted) {
          imageCache[icon] = icons[icon];
          setIconSrc(icons[icon]);
        }
      };
      img.onerror = () => {
        console.warn(`Failed to load icon: ${icon}`);
        if (isMounted) {
          setIconSrc(null);
        }
      };
      img.src = icons[icon];
    }

    return () => {
      isMounted = false;
    };
  }, [icon]);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
      aria-label={text}
      // Reduce animation intensity on mobile
      style={isMobile ? { "--animation-intensity": "0.5" } : {}}
    >
      {iconSrc && (
        <img
          src={iconSrc}
          alt=""
          className="custom-icon"
          loading="lazy"
          width="26"
          height="26"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      )}
      <span>{text}</span>
    </a>
  );
}

export default React.memo(LinkButton);
