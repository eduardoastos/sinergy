import SmartSolutions from "@/sections/SmartSolutions";
import * as s from "./home.module.css";
import Products from "@/sections/Products";
import WhyContract from "@/sections/WhyContract";
import Testimony from "@/sections/Testimony";
import Faq from "@/sections/Faq";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <main className={s.home}>
      <SmartSolutions />
      <Products />
      <WhyContract />
      <Testimony />
      <Faq />
      <Contact />
    </main>
  );
}
