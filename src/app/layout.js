// src/app/layout.jsx

import "./globals.css";

import Header from "../components/Header/Header.jsx";

export const metadata = {
  title: "W. News Homepage",
  description: "A news homepage built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="container">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
