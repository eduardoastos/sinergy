'use client'

import PricePlans from '@/components/PricePlans';
import dynamic from 'next/dynamic';
import animationData from '../../../assets/transition.json';
import Player from '../../../components/Player';
import * as s from './bots.module.css';
// import Lottie from 'react-lottie'; 
// Somente para uso em ambiente de desenvolvimento

const Lottie = dynamic(() => import('react-lottie'), { 
  ssr: false,
  loading: () => <div>Carregando...</div>
});

// Adicione este wrapper component
const LottieWrapper = ({ options, height, width, isClickToPauseDisabled }) => {
  return (
    <div style={{ minHeight: height }}>
      <Lottie 
        height={height} 
        width={width}
        options={options} 
        isClickToPauseDisabled={isClickToPauseDisabled}
      />
    </div>
  );
};

export default function Page() {

  const defaultOptions = {
    animationData,
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const pricePlans = [
    {
      name: "Básico",
      price: "R$ 850,00",
      link: "https://buy.stripe.com/7sIcO9bEddPo4kUcMV",
      monthly: true,
      features: [
        "✔ 500 sessões por mês (Janela 24 horas)",
        "✔ 1 Assistente virtual",
        "✔ 1 Acesso para atendimento humano",
        "✔ 3 fluxos ativos desenvolvidos pelo nosso time",
        "✔ Integração com Whatsapp",
        "✔ Chat integrado ao seu site (Web Widget)",
        "✔ Suporte via email",
        "✔ Dashboard de consumo dos serviços",
        "X  Acesso ao Slot Flow",
        "X  Acesso ao cadastro de intenções",
        "X  Acesso ao cadastro de entidades",
        "X  Respostas com Openai (RAG)",
        "X  Webhook",
        "X  Histórico das mensagens",
        "X  Dashboard de uso e métricas do assistente virtual",
        "X  Dashboard de uso de APIs integradas aos fluxos",
        
        // "✘ trace api",
        // "✔ ATH",
      ]
    },
    {
      name: "Intermediário",
      price: "R$ 2.400,00",
      link: "https://buy.stripe.com/28ocO9bEddPodVu6ow",
      monthly: true,
      highlight: true,
      features: [
        "✔ 1500 sessões por mês (Janela 24 horas)",
        "✔ 3 Assistente virtual",
        "✔ 3 Acessos para atendimento humano",
        "✔ 8 fluxos ativos desenvolvidos pelo nosso time",
        "✔ Integração com Whatsapp",
        "✔ Chat integrado ao seu site (Web Widget)",
        "✔ Suporte via email e chat",
        "✔ Dashboard de consumo dos serviços",
        "✔ Respostas com Openai (RAG)",
        "X  Acesso ao Slot Flow",
        "X  Acesso ao cadastro de intenções",
        "X  Acesso ao cadastro de entidades",
        "X  Webhook",
        "X  Histórico das mensagens",
        "X  Dashboard de uso e métricas do assistente virtual",
        "X  Dashboard de uso de APIs integradas aos fluxos",
      ]
    },
    {
      name: "Avançado",
      price: "Sob consulta",
      link: "https://wa.me/+5511935031331/?text=Olá!",
      features: [
       "✔ + de 1500 sessões por mês (Janela 24 horas)",
        "✔ Assistente virtual (ilimitado)",
        "✔ Acessos para atendimento humano (ilimitado)",
        "✔ Fluxos ativos desenvolvidos pelo nosso time (Verificar disponibilidade)",
        "✔ Integração com Whatsapp",
        "✔ Chat integrado ao seu site (Web Widget)",
        "✔ Suporte via email, chat e whatsapp",
        "✔ Dashboard de consumo dos serviços",
        "✔ Respostas com Openai (RAG)",
        "✔  Acesso ao Slot Flow",
        "✔  Acesso ao cadastro de intenções",
        "✔  Acesso ao cadastro de entidades",
        "✔  Webhook",
        "✔  Histórico das mensagens",
        "✔  Dashboard de uso e métricas do assistente virtual",
        "✔  Dashboard de uso de APIs integradas aos fluxos",
      ]
    },
  ];

  return (
    <div className={s.bots} id="bots-de-atendimento-no-whatsapp">
      <section className={s.head}>
        <div className={s.headTitle}>
          <h1>Bots De Atendimento</h1>
          <h3>Revolucione a Comunicação com Seus Clientes!</h3>
          <p>No mundo digital de hoje, a agilidade no atendimento ao cliente é essencial para o sucesso de qualquer negócio. Com um bot de atendimento no WhatsApp, você automatiza conversas, responde rapidamente às dúvidas e melhora a experiência do cliente de forma eficiente e escalável.</p>
        </div>
        <div className={s.media}>
          <Player className={s.video} src="/sinergy/videos/bots-de-atendimento.mp4" loop controls />
        </div>
      </section>

      
      <div>
        <h2>Atenda seus clientes em um só lugar!</h2>
        <Player className={s.videoATH} src="/sinergy/videos/bots-de-atendimento-ATH.mp4" loop controls />
      </div>

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
