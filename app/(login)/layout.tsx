// Import your globals here
// import "@/styles/globals.css";
import '../colors.css';
export const metadata = {
    title: "E-learning Login",
    description: "Login / Sign up Page",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
       <>{children}</>
    );
}