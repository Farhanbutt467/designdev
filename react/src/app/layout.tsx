import "../styles/globals.css";
import "@/styles/main.css";
import Provider from "@/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body suppressHydrationWarning={true}>
        <Provider>
          <div className="has-smooth" id="has_smooth"></div>
          {children}
        </Provider>
      </body>
    </html>
  );
}
