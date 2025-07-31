import Player from '@/components/Player';
import Image from 'next/image';
import * as s from './analise.module.css';
import PricePlans from '@/components/PricePlans';
import ImageComparison from '@/components/ImageComparison';

export default async function Page() {
  const pricePlans = [
    {
      name: "Básico",
      price: "R$ 197,00",
      link: "https://buy.stripe.com/28oaG15fPbHg18I5kB",
      monthly: true,
      features: [
        "✓ 5000 registros/mês",
        "✓ a cada 1000 registros adicionais - R$ 49,00",
      ]
    },
    {
      name: "Intermediário",
      price: "R$ 597,00",
      link: "https://buy.stripe.com/4gw29v6jT4eO4kUeVc",
      highlight: true,
      monthly: true,
      features: [
        "✓ 20000 registros/mês",
        "✓ a cada 1000 registros adicionais - R$ 35,00",
      ]
    },
    {
      name: "Avançado",
      price: "R$ 997,00",
      link: "https://buy.stripe.com/3csdSdgYx4eO2cMcN5",
      monthly: true,
      features: [
        "✓ 50000 registros/mês",
        "✓ a cada 1000 registros adicionais - R$ 25,00",
      ]
    },
  ];

  return (
    <div className={s.product}  id="agente-sdr">
      <section className={s.head}>
        <div className={s.headTitle}>
          <h1>Agente SDR</h1>
          <h3>Prospecção Automatizada de Clientes</h3>
          <p>
          Encontre clientes ideais e entre em contato instantaneamente usando IA! Com 1 clique, busque comércios no Google Maps e outras fontes, extraia seus dados e envie mensagens automáticas no WhatsApp.
          </p>
        </div>
        <div className={s.media}>
          <Player className={s.video} src="/videos/sdr.mp4" loop controls />
        </div>
      </section>

      <section className={s.imageComparison}>
        <h1>Exporte todos os dados e use-os como quiser!</h1>
        <h3 style={{ marginBottom: '20px', color: '#0a87ff'  }}>Envie campanhas automaticamente pelo whatsapp ou exporte os dados em CSV</h3>
        <ImageComparison />
      </section>

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
