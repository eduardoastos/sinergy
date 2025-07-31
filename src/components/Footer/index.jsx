'use client';

import Image from 'next/image'
import * as s from './footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.content}>
        <ul className={s.contacts}>
          <li>
            <Image
              className={s.header}
              src="/logo.png"
              alt="Sinergy logo"
              
              width={80}
              height={18}
              priority
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </li>
          <li><a target="_blank" href="mailto:contato@sinergy.com.br"><Image src="/email.svg" alt="Icone de email. Um desenho de um envelope em azul" width={20} height={20} />contato@sinergy-ia.com</a></li>
          <li><a target="_blank" href="https://wa.me/+5511935031331/?text=Olá!"><Image src="/whats.svg" alt="Ícone do WhatsApp em azul" width={20} height={20} />+55 11 9 3503-1331</a></li>
          <li><a target="_blank" href="https://www.instagram.com/sinergy.ia"><Image src="/insta.svg" alt="Icone do instagram em azul" width={20} height={20} />sinergy.ia</a></li>
          {/* <li><a target="__blank" href=""><Image src="/linkedin.svg" alt="Icone do linkedin em azul" width={20} height={20} />sinergy ia</a></li> */}
        </ul>
        <ul className={`${s.linksList} ${s.disableMobile}`}>
          <li>
            <h2 className={`${s.header} ${s.links}`}>Produtos</h2>
          </li>
          <li><Link href="/produtos/analise-de-documentos" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('analise-de-documentos').offsetTop - 100, behavior: 'smooth' })}>Análise de Documentos (OCR)</Link></li>
          <li><Link href="/produtos/bots-de-atendimento-no-whatsapp" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('bots-de-atendimento-no-whatsapp').offsetTop - 100, behavior: 'smooth' })}>Bots de Atendimento</Link></li>
          <li><Link href="/produtos/controle-de-agenda" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('controle-de-agenda').offsetTop - 100, behavior: 'smooth' })}>Controle de Agenda</Link></li>
          <li><Link href="/produtos/mensagens-ativas-no-whatsapp" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('mensagens-ativas-no-whatsapp').offsetTop - 100, behavior: 'smooth' })}>Mensagens ativas no Whatsapp</Link></li>
          <li><Link href="/produtos/chat-com-e-commerce" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('chat-com-e-commerce').offsetTop - 100, behavior: 'smooth' })}>Chat com IA para e-commerce</Link></li>
          <li><Link href="/produtos/agente-sdr" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('agente-sdr').offsetTop - 100, behavior: 'smooth' })}>Agente SDR</Link></li>
          <li><Link href="https://virtualbay.com.br/" target="_blank">Provador Virtual</Link></li>
        </ul>
        <ul className={s.linksList}>
          <li>
            <h2 className={`${s.header} ${s.links}`}>Links</h2>
          </li>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/#melhores-ferramentas" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('melhores-ferramentas').offsetTop - 100, behavior: 'smooth' })}>As Melhores Ferramentas</Link></li>
          <li><Link href="/#por-que" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('por-que').offsetTop - 80, behavior: 'smooth' })}>Por que Contratar</Link></li>
          <li><Link href="/#faq" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('faq').offsetTop - 80, behavior: 'smooth' })}>FAQ</Link></li>
          <li><Link href="/#contact" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('contact').offsetTop - 80, behavior: 'smooth' })}>Contato</Link></li>
        </ul>
      </div>
      <div className={s.copy}>
        <p>2025 © <b>Sinergy IA</b>. Todos os direitos reservados</p>
      </div>
    </footer>
  )
}
