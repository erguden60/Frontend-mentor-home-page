// src/components/TopArticles/TopArticles.jsx
import Image from "next/image";
import Link from "next/link";
import styles from "./TopArticles.module.css";

// Makale verilerini bir dizi olarak tutmak, kodu daha yönetilir kılmak için oluşturldu.
const articlesData = [
  {
    number: "01",
    title: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
    image: "/images/image-retro-pcs.jpg",
  },
  {
    number: "02",
    title: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
    image: "/images/image-top-laptops.jpg",
  },
  {
    number: "03",
    title: "The Growth of Gaming",
    description: "How the pandemic has sparked fresh opportunities.",
    image: "/images/image-gaming-growth.jpg",
  },
];

const TopArticles = () => {
  return (
    <section className={styles.topArticlesContainer}>
      {articlesData.map((article) => (
        <article key={article.number} className={styles.articleCard}>
          <div className={styles.imageWrapper}>
            <Image
              src={article.image}
              alt={article.title}
              width={100}
              height={127}
            />
          </div>
          <div className={styles.content}>
            <span className={styles.number}>{article.number}</span>
            <Link href="#">
              <h4 className={styles.title}>{article.title}</h4>
            </Link>
            <p className={styles.description}>{article.description}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default TopArticles;
