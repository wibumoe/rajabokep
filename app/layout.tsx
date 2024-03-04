import "./globals.css";

import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { SITENAME } from "@/lib/constants";
import { ThemeProvider } from "@/components/theme-provider";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: SITENAME,
    description: `${SITENAME} Bokepindo adalah situs streaming video bokep terbaru dan viral dari segala genre bokep. Nonton gratis bokep indo, bokep barat, bokep asia, bokep jepang.`,
    metadataBase: new URL("http://localhost:3000/"),
};

export const runtime = "edge";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <meta name="robots" content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"/>
            <meta name="google-site-verification" content="7NPvMDMIUaaRLoNby32XVj1qHTuAfWjzx6jdSBpggEM" />
<meta name="msvalidate.01" content="95303D372A99250F30B485C041CD858B" />
<meta name="yandex-verification" content="b55d6ec72ff0f251" />
            <script async src="https://js.wpadmngr.com/static/adManager.js" data-admpid="108615"></script>
            <body className={font.className}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
                <script type="text/javascript" src="//widget.supercounters.com/ssl/online_i.js"></script><script type="text/javascript">sc_online_i(1682765,"ffffff","00000");</script><br><noscript><a href="https://www.supercounters.com/">free online counter</a></noscript>
            </body>
        </html>
    );
}
