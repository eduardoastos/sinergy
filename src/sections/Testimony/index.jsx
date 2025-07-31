'use client';

import Image from 'next/image';
import * as s from './testimony.module.css'
import { useEffect, useState } from 'react';

export default function Testimony() {
  const [active, setActive] = useState(0);
  const testimonials = {
    0: {
      id: 0,
      name: 'Pedro Raimondi',
      avatar: '/client4.jpg',
      title: 'A melhor empresa que contratei em anos!',
      description: '“Desde o primeiro contato com a empresa até o primeiro uso da ferramenta de análise de docs eu senti que essa empresa sabe o que esta fazendo. Minha produção que contava com 5 funcionários para coleta de dados agora esta inteiramente dedicada a outra função que me gera muito mais lucro!!!”'
    },
    1: {
      id: 1,
      name: 'Maria Ana',
      avatar: '/client2.jpg',
      title: 'Excelente atendimento!',
      description: '“Fui muito grata pelo atendimento que fiz durante a contratação da Sinergy. Eu consegui realizar minha coleta de dados com mais agilidade e eficiência que nunca tinha feito antes. A empresa me ajudou muito a melhorar minha produtividade e aumentar a minha receita!!!”'
    },
    2: {
      id: 2,
      name: 'João Silva',
      avatar: '/client1.jpg',
      title: 'Excelente atendimento!',
      description: '“Estou muito satisfeito com a sinergy, que me ajudou a realizar minha coleta de dados de maneira mais eficiente e confiável. A empresa me proporcionou um atendimento muito amigável e respeitoso, e o resultado foi o que eu esperava!!!”'
    }
  };

  return (
    <section className={s.testimony}>
      <div className={s.title}>
        <h3>Testemunhos</h3>
        <h2>O Que Nossos Clientes Dizem?</h2>
      </div>
      <div className={s.content}>
        <div className={s.contentImage}>
          <Image src="/sinergy/client4.jpg" className={`${s.client} ${s.client4}`} alt="" width={80} height={80} />
          <Image src="/sinergy/client3.jpg" className={`${s.client} ${s.client3}`} alt="" width={90} height={90} />
          <Image src="/sinergy/client2.jpg" className={`${s.client} ${s.client2}`} alt="" width={80} height={80} />
          <Image src="/sinergy/client1.jpg" className={`${s.client} ${s.client1}`} alt="" width={80} height={80} />
          <Image className={s.quote} src="/sinergy/quote.svg" width={50} height={50} alt="" />
          <Image className={s.img} src="/sinergy/videos-bg.svg" height={300} width={400} alt="" style={{
          width: '100%',
          height: 'auto'
        }}/>
        </div>
        <div className={s.testimonials}>
          <div className={s.testimonialsAvatars}>
            {Object.values(testimonials).map((testimony) => (
              <Image
                key={testimony.id + '-avatar'}
                onClick={() => { setActive(testimony.id) }}
                alt={`Imagem da testemunha ${testimony.name} que usou um dos serviços da Sinergy`}
                className={`${s.avatar} ${testimony.id === active ? s.avatarActive : ''}`}
                src={testimony.avatar}
                width={30}
                height={30}
              />
            ))}
          </div>
          <div key={testimonials[active]?.id} className={`${s.card} ${active === testimonials[active].id ? s.cardActive : ''}`}>
            <h4>{testimonials[active]?.title}</h4>
            <p>{testimonials[active]?.description}</p>
            <h5>{testimonials[active]?.name}</h5>
          </div>
        </div>

      </div>
    </section>
  )
}
