import React, { lazy, Suspense } from "react";
import "./styles/App.css";

const LinkButton = lazy(() => import("./components/LinkButton/LinkButton"));

const links = [
  {
    id: 1,
    url: "https://www.instagram.com/vins.moke921?igsh=MXVsc2R2bXAyMmhxeg%3D%3D&utm_source=qr",
    text: "Follow on Instagram",
    icon: "instagram",
  },
  {
    id: 2,
    url: "https://kick.com/vinsmoke921",
    text: "Watch Kick Live Stream",
    icon: "kick",
  },
  {
    id: 3,
    url: "https://chat.whatsapp.com/J3YwdIJuoXq5La4TRGhdDq",
    text: "Join WhatsApp Group",
    icon: "whatsapp",
  },
  {
    id: 4,
    url: "https://www.tiktok.com/search?q=vinsmoke&t=1739252858280",
    text: "Follow on TikTok",
    icon: "tiktok",
  },
  {
    id: 5,
    url: "https://discord.gg/yvQ8NqQEsW",
    text: "Join My Discord",
    icon: "discord",
  },
];

const ButtonFallback = () => (
  <div className="link-button-fallback">
    <div className="button-loader"></div>
  </div>
);

const App = () => (
  <div className="container">
    <header className="header">
      <h1 className="main-title">
        <span className="arched-text">Vinsmoke</span>
      </h1>

      <div className="logo" aria-hidden="true"></div>

      <div className="sub-texts">
        <p className="welcome-text">Welcome to my space! 🚀</p>
        {/* <p className="arabic-motto">
          ...شكون انا احبيبي شكون إز فنسموك جوووون سينا ...
        </p> */}

        <p className="arabic-motto"></p>
      </div>
    </header>

    <div className="links-container">
      <Suspense fallback={<ButtonFallback />}>
        {links.map((link) => (
          <LinkButton key={link.id} {...link} />
        ))}
      </Suspense>
    </div>

    <section className="events">
      <h2>upcoming events</h2>
      <ul>
        <li></li>
      </ul>
    </section>

    <footer className="footer">
      <div className="footer-right">
        <p>
          <strong>vinsmoke {new Date().getFullYear()} 🌟</strong>
        </p>
        <p>Please enable JavaScript for the best experience.</p>
      </div>
    </footer>
  </div>
);

export default React.memo(App);
