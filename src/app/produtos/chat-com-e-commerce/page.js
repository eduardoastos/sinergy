import Image from "next/image";
import dynamic from 'next/dynamic';
import * as s from "./chat.module.css";
import Player from "@/components/Player";
import PricePlans from "@/components/PricePlans";
import { MdAccessTime, MdShoppingCart, MdInsertChart } from 'react-icons/md';

export default function Page() {
  const pricePlans = [
    {
      name: "Básico",
      price: "R$ 197,00",
      link: "https://buy.stripe.com/4gw3dz5fP9z88Ba00e",
      monthly: true,
      features: [
        "✓ Chat com IA integrado",
        "✓ Até 250 sessões de 24h",
        "✓ Personalização básica",
        "✓ Suporte por email",
        "✓ Integração com FoxAppy",
        "X Análise de conversas",
        "X Relatórios avançados",
        "X Personalização avançada"
      ]
      // em uma sessao de 24h o cliente pode enviar quantas mensagens quiser e será contabilizada apenas uma sessão. sendo para o mesmo cliente
    },
    {
      name: "Intermediário",
      price: "R$ 397,00",
      link: "https://buy.stripe.com/8wM5lHeQpbHg4kU14k",
      highlight: true,
      monthly: true,
      features: [
        "✓ Chat com IA integrado",
        "✓ Até 500 sessões de 24h",
        "✓ Personalização completa",
        "✓ Suporte prioritário",
        "✓ Integração com FoxAppy",
        "✓ Análise de conversas",
        "✓ Relatórios avançados",
        "✓ Personalização avançada"
      ]
    },
    {
      name: "Avançado",
      price: "Sob demanda",
      link: "https://wa.me/+556792833166/?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20Starter%20do%20Chat%20com%20IA",
      monthly: true,
      features: [
        "✓ Chat com IA integrado",
        "✓ Interações ilimitadas",
        "✓ Personalização completa",
        "✓ Suporte VIP 24/7",
        "✓ Integração com FoxAppy",
        "✓ Análise de conversas",
        "✓ Relatórios avançados",
        "✓ API personalizada",
        "✓ Treinamento da equipe"
      ]
    },
  ];

  return (
    <div className={s.product} id="chat-com-e-commerce">
      <section className={s.head}>
        <div className={s.headTitle}>
          <h1>Chat no seu E-commerce com IA</h1>
          <h3>Em parceria com FoxAppy</h3>
          <p>
          Transforme seu e-commerce com atendimento inteligente 24/7. Nossa solução de IA, em parceria com a FoxAppy, aumenta suas vendas, reduz abandonos de carrinho e melhora a satisfação dos clientes.
          </p>
        </div>
        <div className={s.media}>
          <Player className={s.video} src="/videos/foxy_appyy.mp4" loop controls />
        </div>
      </section>
      
      <section className={s.features}>
        <h2>Benefícios do Chat com IA</h2>
        <div className={s.featureGrid}>
          <div className={s.featureCard}>
            <MdAccessTime size={48} />
            <h3>Atendimento 24/7</h3>
            <p>Nunca perca uma venda por falta de atendimento</p>
          </div>
          <div className={s.featureCard}>
            <MdShoppingCart size={48} />
            <h3>Redução de Abandono</h3>
            <p>Recupere suas vendas dando o melhor suporte possível ao seu cliente</p>
          </div>
          <div className={s.featureCard}>
            <MdInsertChart size={48} />
            <h3>Análise de Dados</h3>
            <p>Insights valiosos sobre o comportamento dos clientes no funil com o assistente virtual</p>
          </div>
        </div>
      </section>

      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center' }}
      >
        <h2 style={{textAlign: 'center'}}>Atenda seus clientes em um só lugar!</h2>
        <Player className={s.videoATH} src="/videos/bots-de-atendimento-ATH.mp4" loop controls />
      </div>

      <section className={s.integration}>
        <div className={s.integrationContent}>
          <h2>Integração Perfeita com FoxAppy</h2>
          <p>
            Nossa parceria com a FoxAppy permite uma integração suave e eficiente,
            garantindo que você tenha todas as ferramentas necessárias para
            impulsionar suas vendas online.
          </p>
        </div>
        <Image
          src="/fox_sinergy02.png"
          alt="Diagrama mostrando a integração entre o chat IA e FoxAppy"
          width={648}
          height={300}
          className={s.integrationImage}
        />
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
