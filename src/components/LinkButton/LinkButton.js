import "./LinkButton.css";
import React from "react";

import instagramIcon from "../../assets/icons/instagram.png";
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

const LinkButton = ({ url, text, icon }) => {
  const iconSrc = icons[icon];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-button"
    >
      {iconSrc && (
        <img src={iconSrc} alt="" width="26" height="26" loading="lazy" />
      )}
      <span>{text}</span>
    </a>
  );
};

export default React.memo(LinkButton);
