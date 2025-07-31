'use client'
import Button from '@/components/Button'
import * as s from './contact.module.css'
import Image from 'next/image'

export default function Contact() {
  return (
    <section className={s.contact} id="contact">
      <div className={s.side}>
        <div className={s.cta}>
          <h1 className={s.title}>Converse agora com nosso atendimento automático e nos conte como podemos ajudar!</h1>
          <h2 className={s.subtitle}>Aproveite para testar nossa ferramenta </h2>
          <Button className={s.button} variant="primary" onClick={() => window.open("https://wa.me/+5511935031331/?text=Olá!", "_blank")}>Começe já</Button>
        </div>
        <Image src="/sinergy/cel-contact.png" className={s.img} width={20} height={20} alt="Um celular apresentando a tela do whatsapp com um exemplo de conversa com o bot de atendimento" style={{
          width: '100%',
          height: 'auto'
        }}/>
      </div>
    </section>
  )
}
