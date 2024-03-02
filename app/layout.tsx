import { AuthProvider } from "@/lib/AuthProvider";

export default async function RootLayout({
  children,
}: {
  children: JSX.Element;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <main>
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
