import Providers from "@/components/Providers";
import { generateMetadata } from "@/data/generateMetadata.data";
import { viewport } from "@/data/viewport.data";
import { fonts } from "@/data/fonts.data";
import "@coinbase/onchainkit/styles.css";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

export { generateMetadata, viewport };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-neutral-100 ${fonts}`}>
        <Providers>
          <Toaster richColors theme="light" />
          <div className="max-w-xl mx-auto">
            <Navbar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
