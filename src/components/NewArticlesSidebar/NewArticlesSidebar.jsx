// src/components/NewArticlesSidebar/NewArticlesSidebar.jsx
import Link from "next/link";
import styles from "./NewArticlesSidebar.module.css";

const NewArticlesSidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>New</h2>

      <article className={styles.article}>
        <Link href="#">
          <h3 className={styles.articleTitle}>Hydrogen VS Electric Cars</h3>
        </Link>
        <p className={styles.articlePreview}>
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </article>

      <hr className={styles.divider} />

      <article className={styles.article}>
        <Link href="#">
          <h3 className={styles.articleTitle}>The Downsides of AI Artistry</h3>
        </Link>
        <p className={styles.articlePreview}>
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </article>

      <hr className={styles.divider} />

      <article className={styles.article}>
        <Link href="#">
          <h3 className={styles.articleTitle}>Is VC Funding Drying Up?</h3>
        </Link>
        <p className={styles.articlePreview}>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </article>
    </aside>
  );
};

export default NewArticlesSidebar;
