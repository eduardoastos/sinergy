import { Inter, Inter_Tight, Montserrat } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import URLParamsHandler from './URLParamsHandler'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sinergy",
  description: "Descubra como redefinir o atendimento ao cliente com serviços de análise inteligente de documentos (OCR) e bots de atendimento no WhatsApp. Automatize o atendimento com bots sofisticados que interagem de forma natural, gerenciando agendamentos e otimizando seu tempo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="text/javascript" src="https://api.goaffpro.com/loader.js?shop=uizqzrqfvl"></script>
        
      </head>
      <body className={`${inter.variable} ${interTight.variable} ${montserrat.variable}`}>
        <URLParamsHandler />
        <Header />
        {children}
        <Footer />
        <script>
          {`(function(d,t) {
            var BASE_URL="https://atendimento.sinergy-ia.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
              window.chatwootSDK.run({
                websiteToken: 'yt2boxMxn12BUJ9GNg9yALtm',
                baseUrl: BASE_URL
              })
            }
          })(document,"script");`}
        </script>




        {/* <script type="text/javascript">
          {`debugger;
            if (typeof window !== "undefined") {
              window.goaffpro_order = {
                number: "#1001",
                total: 1000,
              };
              if (typeof window.goaffproTrackConversion !== "undefined") {
                window.goaffproTrackConversion(window.goaffpro_order);
              }
            }
          `}
        </script> */}



        


      </body>
    </html>
  );
}
