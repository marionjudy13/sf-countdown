"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.scss";

export default function Hero() {
  const targetDate = new Date("2025-08-24T00:00:00");
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const total = targetDate - new Date();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    return { total, days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.hero}>
      <video
        className={styles.videoBackground}
        src="/video/bg-colors.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <img src="/images/sf.jpg" alt="Overlay" className={styles.imageOverlay} />

      <div className={styles.overlay}>
        <div className={styles.text}>
          <h1>San Francisco Countdown:</h1>
          <p>
            {timeLeft.total > 0 ? (
              <>
                {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
                {timeLeft.seconds}s
              </>
            ) : (
              "🎉 It’s time!"
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
