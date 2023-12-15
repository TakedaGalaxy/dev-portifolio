import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>
        Em desenvolvimento !<br />
        🤝
        <br />
        <a
          className={styles.ancora}
          href="https://github.com/TakedaGalaxy"
          target="_blank"
          title="GitHub"
        >
          GitHub
        </a>
      </h1>
    </main>
  );
}
