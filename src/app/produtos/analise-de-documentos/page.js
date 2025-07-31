import Player from '@/components/Player';
import Image from 'next/image';
import * as s from './analise.module.css';
import PricePlans from '@/components/PricePlans';

export default async function Page() {
  const pricePlans = [
    {
      name: "Básico",
      price: "R$ 500,00",
      features: [
        "✔ até 500 páginas processadas/mês",
        "✔ R$ 1,00/página",
      ],
      link: "https://buy.stripe.com/cN25lH23DdPo04EeV5"
    },
    {
      name: "Intermediário",
      price: "R$ 950,00",
      features: [
        "✔ até 1000 páginas processadas/mês",
        "✔ R$ 0,95/página",
      ],
      link: "https://buy.stripe.com/00g3dzbEd26G5oY9AK",
      highlight: true,
    },
    {
      name: "Customizado",
      price: "Sob demanda",
      features: [
        "✔ mais de 1000 páginas processadas/mês",        
      ],
      link: "https://wa.me/+5511935031331/?text=Olá!"
    },
  ];

  return (
    <div className={s.product} id="analise-de-documentos">
      <section className={s.head}>
        <div className={s.headTitle}>
          <h1>Análise de Documentos (OCR)	</h1>
          <h3>Optical Character Recognition</h3>
          <h3>ou Reconhecimento ótico de caracteres</h3>
          <p>
            Automatize a extração de dados de documentos com nossa solução de OCR. 
            Transforme documentos físicos em digitais com precisão e rapidez, 
            economizando tempo e recursos da sua empresa.
          </p>
        </div>
        <div className={s.media}>
          <Player className={s.video} src="/sinergy/videos/ocr.mp4" loop controls />
        </div>
      </section>

      {/* <section className={s.ocr}>
        <div className={s.texts}>
          <h1>OCR</h1>
          <h3>Optical Character Recognition<br /> ou Reconhecimento ótico de caracteres</h3>
          <p>
            Nosso software utiliza tecnologia avançada de OCR para digitalizar documentos físicos, transformando-os em dados digitais de forma rápida e precisa. Ele automatiza o processo de extração de informações, minimizando erros e otimizando a eficiência dos seus fluxos de trabalho.
          </p>
        </div>
        <div className={s.media}>
          <Image className={s.videoBgWeb} src="/sinergy/videos-bg.svg" alt="Tres circulos alinhados e rotacionados que ficam ao fundo do player de video" width={300} height={500} />
          <Player className={s.videoWeb} src="/sinergy/videos/ocr.mp4" controls />
        </div>
      </section> */}

      <section className={s.pricing}>
        <div className={s.pricingText}>
          <h3>Preços</h3>
          <h1>Planos flexíveis que crescem com você!</h1>
        </div>
        <PricePlans pricePlans={pricePlans} />

      </section>


    </div>
  );
}
