import { AuthProvider } from "@/lib/AuthProvider";

export default async function RootLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <html>
      <head />
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
