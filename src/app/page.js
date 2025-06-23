// src/app/page.jsx
import styles from "./page.module.css";

// Tüm ana bileşenlerimizi import ediyoruz
import Hero from "../components/Hero/Hero.jsx";
import NewArticlesSidebar from "../components/NewArticlesSidebar/NewArticlesSidebar.jsx";
import TopArticles from "../components/TopArticles/TopArticles.jsx";

export default function HomePage() {
  return (
    <div className={styles.homeGrid}>
      <main className={styles.heroArea}>
        <Hero />
      </main>

      {/* 2. Grid Alanı: Sidebar */}
      <aside className={styles.sidebarArea}>
        <NewArticlesSidebar />
      </aside>

      {/* 3. Grid Alanı: Top Articles (Bu alan altta tüm genişliği kaplayacak) */}
      <section className={styles.topArticlesArea}>
        <TopArticles />
      </section>
    </div>
  );
}
