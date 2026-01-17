import React, { useState, useEffect, lazy, Suspense } from "react";
import "./styles/App.css";

const LinkButton = lazy(() => import("./components/LinkButton/LinkButton"));

const ButtonFallback = () => (
  <div className="link-button-fallback">
    <div className="button-loader"></div>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);

    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);

    window.addEventListener("resize", checkIfMobile);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader" />
        <div className="loading-text">
          <span role="img" aria-label="loading">
            ⏳
          </span>
          loading...
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <header className="header">
        <h1 className="main-title">
          <span className="arched-text">Vinsmoke</span>
        </h1>

        <div className="logo" aria-hidden="true"></div>

        <div className="sub-texts">
          <p className="welcome-text">Welcome to my space! 🚀</p>
          <p className="arabic-motto">
            ...شكون انا احبيبي شكون إز فنسموك جوووون سينا ...
          </p>
        </div>
      </header>

      <div className="links-container">
        <Suspense fallback={<ButtonFallback />}>
          <LinkButton
            url="https://www.instagram.com/vins.moke921?igsh=MXVsc2R2bXAyMmhxeg%3D%3D&utm_source=qr"
            text="Follow on Instagram"
            icon="instagram"
            isMobile={isMobile}
          />
          <LinkButton
            url="https://kick.com/vinsmoke921"
            text="Watch Kick Live Stream"
            icon="kick"
            isMobile={isMobile}
          />
          <LinkButton
            url="https://chat.whatsapp.com/I0x3eaXFeFg9J2V1UNDrAW"
            text="Join WhatsApp Group"
            icon="whatsapp"
            isMobile={isMobile}
          />
          <LinkButton
            url="https://www.tiktok.com/search?q=vinsmoke&t=1739252858280"
            text="Follow on TikTok"
            icon="tiktok"
            isMobile={isMobile}
          />
          <LinkButton
            url="https://discord.gg/tuxpwdCEZQ"
            text="Join My Discord"
            icon="discord"
            isMobile={isMobile}
          />
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
            <strong>vinsmoke 2026 🌟</strong>
          </p>
          <p>Please enable JavaScript for the best experience.</p>
        </div>
      </footer>
    </div>
  );
};

export default React.memo(App);
