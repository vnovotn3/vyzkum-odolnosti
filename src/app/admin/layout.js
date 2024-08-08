import "../globals.css";

export const metadata = {
  title: "Výzkum Odolnosti | Admin",
  description: "Výzkum Odolnosti",
};

export default function RegisterLayout({ children }) {
  return (
    <html className="h-full bg-slate-50">
      <body className="h-full">{children}</body>
    </html>
  );
}