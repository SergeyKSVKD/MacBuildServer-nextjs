import type { Metadata } from "next";
import { Heebo } from "next/font/google";
import "./globals.scss";
import styles from './page.module.scss'
import StoreLayout from "./store/StoreLayout";
import IsAuth from "./store/IsAuth";

const heebo = Heebo({ subsets: ["latin"], weight: ['400', '500', '700', '900'] });

export const metadata: Metadata = {
  title: "MacBuildServer",
  description: "MacBuildServer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru-Ru">
      <StoreLayout>
        <IsAuth />
        <body className={heebo.className}>
          <div className={styles.main}>
            {children}
          </div>
        </body>
      </StoreLayout>
    </html>
  );
}
