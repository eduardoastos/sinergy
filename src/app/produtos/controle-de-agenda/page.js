import Player from '@/components/Player';
import PricePlans from '@/components/PricePlans';
import * as s from './control.module.css';

export default async function Page() {
  const pricePlans = [
    {
      name: "Básico",
      price: "R$ 247,00",
      link: "https://buy.stripe.com/9AQ7tP0ZzfXwbNmdR2",
      monthly: true,
      features: [
        "✓ Funcionários ilimitados",
        "✓ Clientes ilimitados",
        "✓ 250 notificações/mês",
        "✓ Retenção de dados por 30 dias",
      ]
    },
    {
      name: "Intermediário",
      price: "R$ 485,00",
      link: "https://buy.stripe.com/8wM01n6jT9z8g3C9AN",
      highlight: true,
      monthly: true,
      features: [
        "✓ Funcionários ilimitados",
        "✓ Clientes ilimitados",
        "✓ 500 notificações/mês",
        "✓ Retenção de dados por 90 dias"
      ]
    },
    {
      name: "Avançado",
      price: "Sob demanda",
      link: "https://wa.me/+556792833166/?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20Básico%20do%20Controle%20dem%20agenda",
      monthly: true,
      features: [
        "✓ Funcionários ilimitados",
        "✓ Clientes ilimitados",
        "✓ Retenção de dados por 120 dias",
      ]
    },
  ];

  return (
    <div className={s.product} id="controle-de-agenda">
      <section className={s.head}>
        <div className={s.headTitle}>
          <h1>Controle de Agenda</h1>
          <h3>Gestão ágil e precisa</h3>
          <p>
            {/* O Controle de Agenda permite que você gerencie seus compromissos de forma eficiente,
             pois conta com recursos automatizados que agendam, reagendam e cancelam compromissos
              com facilidade, garantindo que você nunca perca uma reunião importante! Além disso, */}
               


                Revolucione o modo como você lida com seus compromissos diários,
                 automatizando as intervenções manuais, reduzindo o risco de erros e garantindo que você nunca perca uma reunião importante!
                  Nossa solução permite que você visualize e gerencie seus compromissos 
                  de forma prática e intuitiva em um só lugar, otimizando seu tempo
                   e aumentando a produtividade da sua equipe.
                   O sistema envia lembretes automáticos para você e seus clientes, facilitando a
                comunicação e melhorando a experiência.
          </p>
        </div>
        <div className={s.media}>
          <Player className={s.video} src="/videos/controle-de-agenda02.mp4" loop controls />
        </div>
      </section>
      

      <section className={s.managementSection}>
        <div className={s.textBlock}>
          <h3>Funcionalidades</h3>
          <h2 className={s.managementTitle}>Alertas De Agendamento</h2>
          <p>Não precisa acompanhar manualmente seus visitantes. O bot cuida de tudo e alerta automaticamente seus clientes para agendamentos próximos.</p>
        </div>
        <div className={s.imageContainer}>
          <Player className={s.video2} src="/videos/confirmacao.mp4" loop controls />
        </div>
      </section>



      <section>
        <div className={s.reschedule}>
          <div className={s.rescheduleTexts}>
            <h3>Funcionalidades</h3>
            <h2>Reagendamento Automático</h2>
            <p>Seus clientes podem reagendar compromissos de forma autônoma através do bot, sem precisar entrar em contato diretamente. Tudo de forma simples e automatizada.</p>
          </div>
          <div className={s.imageContainer}>
            <Player className={s.video2} src="/videos/reagendamento.mp4" loop controls />
          </div>
        </div>

      </section>

      <section className={s.managementSection}>
        <div className={s.textBlock}>
          <h3>Funcionalidades</h3>
          <h2 className={s.managementTitle}>Cancelamento Simplificado</h2>
          <p>Permita que seus clientes cancelem compromissos de forma autônoma através do bot com um processo simples e rápido, sem necessidade de intervenção manual da sua equipe.</p>
        </div>
        <div className={s.imageContainer}>
          <Player className={s.video2} src="/videos/cancelamento.mp4" loop controls />
        </div>
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

