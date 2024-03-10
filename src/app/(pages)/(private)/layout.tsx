import type { Metadata, } from "next";
import { Heebo } from "next/font/google";
import Header from "@/app/components/home/header/Header";
import { ProtectedRoute } from "@/app/store/IsAuth";

const heebo = Heebo({ subsets: ["latin"], weight: ['400', '500', '700', '900'] });

export const metadata: Metadata = {
    title: "MacBuildServer public",
    description: "MacBuildServer",
};

export default function PrivateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className={heebo.className} style={{
            display: 'grid', justifyItems: 'center',
        }}>
            <Header />
            <ProtectedRoute>
                {children}
            </ProtectedRoute>
        </div>
    );
}