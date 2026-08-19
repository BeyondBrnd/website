import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import Script from "next/script";
const cerebri = localFont({
  src: [
    {
      path: "./fonts/CerebriSansPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/CerebriSansPro-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/CerebriSansPro-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/CerebriSansPro-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/CerebriSansPro-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-cerebri",
});

export const metadata: Metadata = {
  title: "BeyondBrnd",
  description: "Build serious B2B growth",
  icons: {
    icon: "/beyondbrnd-logo-cropped.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cerebri.variable} antialiased selection:bg-[#00BF63]/30 selection:text-white`}
      >
      <Script id="linkedin_insight_tag" strategy="lazyOnload">
        {
          `
//           <script type="text/javascript">
// _linkedin_partner_id = "10574081";
// window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
// window._linkedin_data_partner_ids.push(_linkedin_partner_id);
// </script><script type="text/javascript">
// (function(l) {
// if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
// window.lintrk.q=[]}
// var s = document.getElementsByTagName("script")[0];
// var b = document.createElement("script");
// b.type = "text/javascript";b.async = true;
// b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
// s.parentNode.insertBefore(b, s);})(window.lintrk);
// </script>
// <noscript>
// <img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=10574081&fmt=gif" />
// </noscript>
// ADDED THE LINKEDIN TAG HERE, THE ORIGINAL CODE STARTS FROM 58TH LINE
 _linkedin_partner_id = "10574081";
 window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script><script type="text/javascript">
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
          `
        }
        
        </Script>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
