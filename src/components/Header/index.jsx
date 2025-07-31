'use client'

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
// import Lottie from 'react-lottie' Somente para uso em ambiente de desenvolvimento;
import animationData from '../../assets/hamburguer-lottie.json';
import Button from '../Button';
import * as s from './header.module.css';
import Arrow from '../../../public/arrow';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie'), { ssr: false });

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [direction, setDirection] = useState(-1);
  const [isClient, setIsClient] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const page = usePathname();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handleClick = () => {
    setIsPlaying(!isPlaying);
    setDirection(direction === 1 ? -1 : 1);
    setIsOpen(!isOpen);
  };

  const defaultOptions = {
    animationData,
    delay: 0,
    loop: false,
    autoplay: false,
    duration: 200,
    rendererSettings: { preserveAspectRatio: 'xMidYMid slice' }
  };

  return (
    <div className={`${s.container} ${isProductsOpen ? s.open : ''}`}>
      <header className={s.headerMobile}>
        <div onClick={() => { isOpen && handleClick(); }}>
          <Link href="/">
            <Image
              className={s.logo}
              src="/sinergy/logo.png"
              alt="Sinergy logo"
              width={100}
              height={38}
              priority
              style={{
                width: '100%',
                height: 'auto'
              }}
            />
          </Link>
        </div>
        <div className={s.headerWeb}>
          <nav>
            <ul className={s.menuOptions}>
              <li className={`${s.menuItem} ${page === '/' ? s.highlight : ''}`} onClick={() => { handleClick(); }}><Link href="/">Home</Link></li>
              <li className={s.menuItem}>
                <span className={`${s.productsButton} ${page.includes('/produtos') ? s.highlight : ''}`} onClick={() => { setIsProductsOpen(!isProductsOpen)}}>
                  Produtos
                  <Arrow color={page.includes('/produtos') || isProductsOpen ? "#0a87ff" : "#000000"} className={`${s.arrow} ${isProductsOpen ? s.arrowOpen : ''}`} />
                </span>
                <ul className={`${s.subNav} ${isProductsOpen ? s.subNavOpen : ''}`}>
                  <li className={`${s.menuItem} ${s.productsOptions}`}>
                    <Link href="/produtos/analise-de-documentos" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('analise-de-documentos').offsetTop - 100, behavior: 'smooth' })}>
                      <Button onClick={() => { setIsProductsOpen(false); }}>
                        <Image
                          src="/sinergy/ocr.svg"
                          width={20}
                          height={20}
                          alt="icon"
                        />
                        Análise de Documentos (OCR)
                      </Button>
                    </Link>
                  </li>
                  <li className={`${s.menuItem} ${s.productsOptions}`}>
                    <Link href="/produtos/bots-de-atendimento-no-whatsapp" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('bots-de-atendimento-no-whatsapp').offsetTop - 100, behavior: 'smooth' })}>
                      <Button onClick={() => { setIsProductsOpen(false); }}>
                        <Image
                          src="/sinergy/cel.svg"
                          width={20}
                          height={20}
                          alt="icon"
                        />
                        Bots de Atendimento
                      </Button>
                    </Link>
                  </li>
                  <li className={`${s.menuItem} ${s.productsOptions}`}>
                    <Link href="/produtos/controle-de-agenda" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('controle-de-agenda').offsetTop - 100, behavior: 'smooth' })}>
                      <Button onClick={() => { setIsProductsOpen(false); }}>
                        <Image
                          src="/sinergy/schedule.svg"
                          width={20}
                          height={20}
                          alt="icon"
                        />
                        Controle de Agenda
                      </Button>
                    </Link>
                  </li>
                  <li className={`${s.menuItem} ${s.productsOptions}`}>
                    <Link href="/produtos/mensagens-ativas-no-whatsapp" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('mensagens-ativas-no-whatsapp').offsetTop - 100, behavior: 'smooth' })}>
                      <Button onClick={() => { setIsProductsOpen(false); }}>
                        <Image
                          src="/sinergy/wpp.svg"
                          width={20}
                          height={20}
                          alt="icon"
                        />
                        Mensagens ativas no Whatsapp
                      </Button>
                    </Link>
                  </li>
                  <li className={`${s.menuItem} ${s.productsOptions}`}>
                    <Link href="/produtos/chat-com-e-commerce" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('chat-com-e-commerce').offsetTop - 100, behavior: 'smooth' })}>
                      <Button onClick={() => { setIsProductsOpen(false); }}>
                        <Image
                          src="/sinergy/shop.svg"
                          width={20}
                          height={20}
                          alt="icon"
                        />
                        Chat com IA para E-commerce
                      </Button>
                    </Link>
                  </li>
                  <li className={`${s.menuItem} ${s.productsOptions}`}>
                    <Link href="/produtos/agente-sdr" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('agente-sdr').offsetTop - 100, behavior: 'smooth' })}>
                      <Button onClick={() => { setIsProductsOpen(false); }}>
                        <Image
                          src="/sinergy/magnet.svg"
                          width={20}
                          height={20}
                          alt="icon"
                        />
                        Agente SDR
                      </Button>
                    </Link>
                  </li>
                  <li className={`${s.menuItem} ${s.productsOptions}`}>
                    <Link href="https://virtualbay.com.br/" target="_blank" >
                      <Button onClick={() => { setIsProductsOpen(false); }}>
                        <Image
                          src="/sinergy/dress.svg"
                          width={20}
                          height={20}
                          alt="icon"
                        />
                        Provador Virtual
                      </Button>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={s.contactNow}>
                <Link href="/#melhores-ferramentas" scroll={false} onClick={() => window.scrollTo({ top: document.getElementById('melhores-ferramentas').offsetTop - 100, behavior: 'smooth' })}><Button variant="primary" onClick={() => { handleClick(); }} style={{ marginLeft: '10vh' }}>Contrate Agora</Button></Link>
              </li>
            </ul>
          </nav>
        </div>
        <Button
          className={s.hamburguer}
          onClick={() => { handleClick(); }}
        >
          <Lottie
            className="unselectable"
            options={defaultOptions}
            height={50}
            width={50}
            isPlaying={!isPlaying}
            direction={direction}
          />
        </Button>
      </header>
      <div className={`${s.menuOverlay} ${isOpen ? s.menuOverlayOpen : ''}`}>
        <nav>
          <ul>
            <li className={s.menuItem} onClick={() => { handleClick(); }}><Link href="/">Home</Link></li>
            <li className={s.menuItem}>
              Produtos
              <ul className={s.subNav}>
                <li className={s.menuItem}>
                  <Link href="/produtos/analise-de-documentos">
                    <Button variant="secondaryFullWidth" onClick={() => { handleClick(); }}>
                      <Image
                        src="/sinergy/ocr.svg"
                        width={30}
                        height={30}
                        alt="icon"
                      />
                      Análise de Documentos (OCR)
                    </Button>
                  </Link>
                </li>
                <li className={s.menuItem}>
                  <Link href="/produtos/bots-de-atendimento-no-whatsapp">
                    <Button variant="secondaryFullWidth" onClick={() => { handleClick(); }}>
                      <Image
                        src="/sinergy/cel.svg"
                        width={30}
                        height={30}
                        alt="icon"
                      />
                      Bots de Atendimento
                    </Button>
                  </Link>
                </li>
                <li className={s.menuItem}>
                  <Link href="/produtos/controle-de-agenda">
                    <Button variant="secondaryFullWidth" onClick={() => { handleClick(); }}>
                      <Image
                        src="/sinergy/schedule.svg"
                        width={30}
                        height={30}
                        alt="icon"
                      />
                      Controle de Agenda
                    </Button>
                  </Link>
                </li>
                <li className={s.menuItem}>
                  <Link href="/produtos/mensagens-ativas-no-whatsapp">
                    <Button variant="secondaryFullWidth" onClick={() => { handleClick(); }}>
                      <Image
                        src="/sinergy/wpp.svg"
                        width={30}
                        height={30}
                        alt="icon"
                      />
                      Mensagens ativas no Whatsapp
                    </Button>
                  </Link>
                </li>
                <li className={s.menuItem}>
                  <Link href="/produtos/chat-com-e-commerce">
                    <Button variant="secondaryFullWidth" onClick={() => { handleClick(); }}>
                      <Image
                        src="/sinergy/shop.svg"
                        width={30}
                        height={30}
                        alt="icon"
                      />
                      Chat com IA para E-commerce
                    </Button>
                  </Link>
                </li>
                <li className={s.menuItem}>
                  <Link href="/produtos/agente-sdr">
                    <Button variant="secondaryFullWidth" onClick={() => { handleClick(); }}>
                      <Image
                        src="/sinergy/magnet.svg"
                        width={30}
                        height={30}
                        alt="icon"
                      />
                      Agente SDR
                    </Button>
                  </Link>
                </li>
                <li className={`${s.menuItem}`}>
                    <Link href="https://virtualbay.com.br/" target="_blank">
                      <Button variant="secondaryFullWidth" onClick={() => { handleClick(); }}>
                        <Image
                          src="/sinergy/dress.svg"
                          width={30}
                          height={30}
                          alt="icon"
                        />
                        Provador Virtual
                      </Button>
                    </Link>
                  </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div className={s.buttons}>
          <Link href="/#melhores-ferramentas"><Button variant="primary" onClick={() => { handleClick(); }}>Contrate Agora</Button></Link>
          <Link href="/#contact"><Button onClick={() => { handleClick(); }}>Fale Conosco</Button></Link>
        </div>
      </div>
      <div className={`${s.cover} ${isOpen ? s.coverOpen : ''}`} onClick={() => { handleClick(); }} />
    </div>
  )
}
