import type { Metadata } from "next";
import { Heebo } from "next/font/google";

const heebo = Heebo({ subsets: ["latin"], weight: ['400', '500', '700', '900'] });

export const metadata: Metadata = {
    title: "MacBuildServer login",
    description: "MacBuildServer",
};

export default function LoginLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={heebo.className}>
            {children}
        </div>
    );
}