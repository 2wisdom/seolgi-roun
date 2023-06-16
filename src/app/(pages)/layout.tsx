import Navbar from "../components/Navbar";
import "../style/globals.css";

export const metadata = {
  title: "설기로운",
  description: "반려동물 수제간식 전문점 설기로운 🥣",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Navbar isLoggedIn={false} />
        {children}
      </body>
    </html>
  );
}
