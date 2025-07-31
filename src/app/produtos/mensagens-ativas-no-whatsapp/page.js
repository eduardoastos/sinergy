import Image from "next/image";
import dynamic from 'next/dynamic';
import * as s from "./mensagens.module.css";
import Player from "@/components/Player";
import PricePlans from "@/components/PricePlans";

export default function Page() {
  const pricePlans = [
    {
      name: "Básico",
      price: "R$ 485,00",
      link: "https://buy.stripe.com/3csaG1dMl3aK4kU9AH",
      monthly: true,
      features: [
        "✓ 500 mensagens ativas por mês (em uma janela de 24 horas, as demais mensagens ativas para o mesmo número não são cobradas)",
      ]
    },
    {
      name: "Intermediário",
      price: "R$ 850,00",
      link: "https://buy.stripe.com/9AQ5lH4bLdPodVu9AG",
      highlight: true,
      monthly: true,
      features: [
        "✓ 1000 mensagens ativas por mês (em uma janela de 24 horas, as demais mensagens ativas para o mesmo número não são cobradas)",
      ]
    },
    {
      name: "Avançado",
      price: "Sob demanda",
      link: "https://wa.me/+5511935031331/?text=Olá!",
      monthly: true,
      features: [
        "✓ + de 1000 mensagens ativas por mês (em uma janela de 24 horas, as demais mensagens ativas para o mesmo número não são cobradas)",
      ]
    },
  ];

  return (
    <div className={s.product} id="mensagens-ativas-no-whatsapp">
      <section className={s.head}>
        <div className={s.headTitle}>
          <h1>Mensagens ativas no Whatsapp</h1>
          <h3>comunicação Estratégica</h3>
          <p>
          Temos a plataforma definitiva para mensagens ativas e automáticas no WhatsApp.
          Diga adeus aos processos manuais e olá à eficiência que sua empresa merece!
          Com nossa solução, você pode se comunicar de forma proativa com seus clientes,
           enviando notificações, lembretes, promoções e atualizações em tempo real,
            tudo integrado ao WhatsApp Business API.
          </p>
        </div>
        <div className={s.media}>
          <Player className={s.video} src="/videos/confirmacao.mp4" loop controls />
        </div>
      </section>


      <section className={s.pricing} id="precos">
        <div className={s.pricingText}>
          <h3>Preços</h3>
          <h1>Planos flexíveis que crescem com você!</h1>
        </div>
        <PricePlans pricePlans={pricePlans} />

      </section>
      
    </div>
  );
}
