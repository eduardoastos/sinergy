'use client';

import Image from 'next/image';
import * as s from './whyContract.module.css';
import Button from '@/components/Button';
import Link from 'next/link';

export default function WhyContract() {
  return (
    <section className={s.whyContract} id="por-que">
      <div className={s.texts}>
        <div className={s.title}>
          <h3>Vantagens</h3>
          <h2>Por Que Contratar?</h2>
        </div>
        <div className={s.alert}>
          <Image src="/alert.svg" width={25} height={25} alt="Icone azul redondo com um sino desenhado no meio"/>
          <h4>Simplifique multiplicando</h4>
        </div>
        <p>Com os nossos serviços o seu fluxo de trabalho fica mais simples, mais rapido e mais eficiente. Pare de executar tarefas que podem ser completamente automatizadas aumentando sua produção com menos da metade do esforço!
        Descubra o poder da tecnologia no dia a dia da sua empresa com a <span className={s.textHighlight}>Sinergy IA!</span></p>
        <Link href="/#melhores-ferramentas" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('melhores-ferramentas').offsetTop - 80, behavior: 'smooth' })}>
          <Button variant="primary" >Contrate Já</Button>
        </Link>
      </div>
      <Image className={s.img} src="/banner.png" alt="Desenho de mão mexendo em um celular" width={100} height={200} style={{
          width: '100%',
          height: 'auto'
        }}/>
    </section>
  )
}
