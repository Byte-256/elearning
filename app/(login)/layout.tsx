// Import your globals here
// import "@/styles/globals.css";
import { Inter,Poppins as FontSans, Poppins } from "next/font/google";
import '../colors.css';

const inter = Inter({
    subsets: ["latin"],
});

export const poppins = FontSans({
    subsets: ["latin"],
    weight: "400",
});

export const metadata = {
    title: "E-learning Login",
    description: "Login / Sign up Page",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className={inter.className + " " + "loginbody"}>{children}</body>
        </html>
    );
}