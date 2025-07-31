'use client';

import * as s from './smartSolutions.module.css'
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link';

export default function SmartSolutions() {
  return (
    <section className={s.first} id="home">
      <h1 className={s.title}>Soluções Inteligentes e Inovadoras</h1>
      <Image quality={100} className={s.img} src="/sinergy/cel-first-2.png" width={425} height={500} alt="Dois celulares apresentando telas do whatsapp com exemplos de funcionamento dos bots de atendiment" style={{
          width: '100%',
          height: 'auto'
        }}/>
      <p className={s.description}>
        Descubra como redefinir o atendimento ao cliente com 
        análise inteligente de documentos (OCR), bots de atendimento
        no WhatsApp, controle de agenda com lembretes automáticos para
        você e seus clientes, e mensagens ativas no WhatsApp para envio
        de notificações, promoções e atualizações em tempo real.
        Automatize processos, otimize seu tempo e mantenha seus clientes
         sempre informados com tecnologia eficiente e inovadora.
      </p>
      <div className={s.ctas}>
        <Link href="/#melhores-ferramentas" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('melhores-ferramentas').offsetTop - 80, behavior: 'smooth' })}><Button variant="primary">Começar Já</Button></Link>
        <Button className={s.demonstrationButton} onClick={() => window.open("https://wa.me/+5511935031331/?text=Olá!", "_blank")}>
          <Image src="/sinergy/wppBlack.svg" width={29} height={29} alt="Botão de play. Um circulo preto vazado com um triângulo rotacionado a 45 graus preto" />Veja uma demonstração
        </Button>
      </div>
    </section>
  )
}
