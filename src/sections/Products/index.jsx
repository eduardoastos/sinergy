'use client';

import Image from 'next/image'
import * as s from './products.module.css'
import Link from 'next/link';
import Button from '@/components/Button';

export default function Products() {

  const products = [
    {
      id: 'analise-de-documentos',
      title: 'Análise de Documentos (OCR)',
      description: 'Elimine a digitação manual, reduza erros e otimize seus processos com uma solução que extrai informações automáticamente com precisão e agilidade incomparáveis! Colete dados de uma base de curriculos, CNHs ou qualquer outro documento',
      icon: '/ocr.svg',
      icontAlt: 'Icone com um gráfico em azul'
    },
    {
      id: 'bots-de-atendimento-no-whatsapp',
      title: 'Bots de Atendimento',
      description: 'Automatize o atendimento da sua empresa com bots inteligentes que interagem naturalmente com seus clientes, gerenciam agendamentos e otimizam seu tempo. Experimente uma solução que revolucionará o relacionamento com o seu público!',
      icon: '/cel.svg',
      icontAlt: 'Icone minimalista de um celular somente com as bordas em azul e interior em branco'
    },
    {
      id: 'controle-de-agenda',
      title: 'Controle de Agenda',
      description: 'Revolucione o modo como você lida com seus agendamentos! Automatize todo o processo de agendamento para que seus clientes possam agendar qualquer serviço de forma totalmente independente sem necessidade de intervenção humana, reduzindo consideravelmente seu tempo de resposta e melhorando a experiência dos seus clientes',
      icon: '/schedule.svg',
      icontAlt: 'Icone minimalista de um notebook aberto visto de frente feito apenas com linhas azuis de mesma expessura e interior branco'
    },
    {
      id: 'mensagens-ativas-no-whatsapp',
      title: 'Mensagens Ativas no WhatsApp',
      description: 'Dispare mensagens para todos seus clientes com um só clique! Faça um pós venda personalizado agregando muito valor a experiência do seu cliente e coletando os melhores dados para aprimorar ainda mais seu atendimento. Envie promoções com facilidade e lembre aquele cliente que sempre compra com você para garantir aquela venda no fim do mês',
      icon: '/wpp.svg',
      icontAlt: 'Icone do aplicativo de celular WhatsApp somente feito com as bordas em azul'
    },
    {
      id: 'chat-com-e-commerce',
      title: 'Chat com IA para E-commerce',
      description: 'Transforme seu e-commerce com atendimento inteligente 24/7. Nossa solução de IA, em parceria com a FoxAppy, aumenta suas vendas, reduz abandonos de carrinho e melhora a satisfação dos clientes.',
      icon: '/shop.svg',
      icontAlt: 'Icone do carrinho de compras feito com borda azul'
    },
    {
      id: 'agente-sdr',
      title: 'Agente SDR',
      description: 'Encontre clientes ideais e entre em contato instantaneamente usando IA! Com 1 clique, busque comércios no Google Maps e outras fontes, extraia seus dados e envie mensagens automáticas no WhatsApp.',
      icon: '/magnet.svg',
      icontAlt: 'Icone do carrinho de compras feito com borda azul'
    },
    ,
    {
      id: 'provador-virtual',
      title: 'Provador Virtual',
      description: 'Leve a experiência de compra online a um novo nível! Com o Provador Virtual, seus clientes experimentam roupas de forma interativa e realista antes de comprar, aumentando o engajamento e reduzindo trocas e devoluções. Transforme sua vitrine digital com tecnologia de ponta que simula caimento, cores e tamanhos com precisão!',
      icon: '/dress.svg',
      icontAlt: 'Icone de uma roupa'
    },
  ];

  return (
    <section className={s.products} id="melhores-ferramentas">
      <div className={s.titles}>
        <h3>Produtos</h3>
        <h2>As melhores ferramentas</h2>
      </div>
      <div className={s.productsGrid}>
        {products.map((product) => (
          <div className={s.producsCard} key={product.id}>
            <div className={s.productsCardTitle}>
              <Image src={product.icon} alt={product.icontAlt} width={24} height={24} />
              <h4>{product.title}</h4>
            </div>
            <p>{product.description}</p>
            <Button variant="secondary">
              {product.id === "provador-virtual" ? (
                <Link href="https://virtualbay.com.br/" target="_blank">Contrate Já!</Link>
              ) : (
                <Link href={`/produtos/${product.id}`} scroll={false} onClick={() => window.scrollTo({ top: document.getElementById(`${product.id}`).offsetTop - 80, behavior: 'smooth' })}>Contrate Já!</Link>
              )}
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
