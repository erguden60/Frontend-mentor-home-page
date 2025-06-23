// src/components/Hero/Hero.jsx
import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      {}
      <picture className={styles.heroImageContainer}>
        {/* DÜZELTME: Yol '/images/' ile başlıyor */}
        <source
          media="(max-width: 768px)"
          srcSet="/images/image-web-3-mobile.jpg"
        />

        <Image
          src="/images/image-web-3-desktop.jpg"
          alt="Colorful abstract geometric shapes"
          width={730}
          height={300}
          className={styles.heroImage}
          priority // Bu resim önemli olduğu için hızlı yüklenmesini sağlar (LCP optimizasyonu)
        />
      </picture>

      <div className={styles.content}>
        <h1 className={styles.title}>The Bright Future of Web 3.0?</h1>
        <div className={styles.description}>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className={styles.readMoreButton}>READ MORE</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
