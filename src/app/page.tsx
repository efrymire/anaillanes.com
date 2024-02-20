import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Page() {
  return (
    <main className={styles.main}>
      <Image
        src="/logo.png"
        alt="Ana Illanes Logo"
        className={styles.vercelLogo}
        width={300}
        height={111}
        priority
      />
      <div className={styles.navigation}>
        <a href="https://www.linkedin.com/in/anaillanes/" target="_blank">LinkedIn</a>
        <Link href="/Ana_Illanes_CV.pdf" target="_blank">Resume</Link>
      </div>
    </main>
  );
}
