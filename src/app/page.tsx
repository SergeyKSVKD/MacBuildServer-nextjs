'use client'

import styles from "./page.module.scss";
import RecentPost from "./components/home/recent-post/RecentPost";
import Footer from "./components/home/footer/Footer";
import Works from "./components/home/works/Works";
import Header from "./components/home/header/Header";

export default function Home() {

  return (
    <main className={styles.main}>
      <Header />
      <RecentPost />
      <Works />
      <Footer />
    </main>
  );
}
