'use client'

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import dynamic from 'next/dynamic';
// import * as s from "./mensagens.module.css";
import Player from "@/components/Player";
import PricePlans from "@/components/PricePlans";

function AfiliadosContent() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = searchParams.get('session');
        const ref = localStorage.getItem('ref');
        const urlRef = searchParams.get('ref');
        const apiUrl = process.env.NEXT_PUBLIC_API_URL;

        if (!session || !ref) {
          console.error('Dados necessários não encontrados');
          return;
        }

        // Se já existe ref na URL e é igual ao do localStorage, não precisa recarregar
        if (urlRef === ref) {
          return;
        }

        const response = await fetch(`${apiUrl}/api/session/${session}?ref=${ref}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });

        const data = await response.json();
        debugger;
        if (data.id) {
          const totalAmount = data.amount_total / 100;

          window.goaffpro_order = {
            number: data.invoice +'2',
            total: totalAmount,
            email: data.customer_details.email,
            first_name: data.customer_details.name,
            phone: data.customer_details.phone,
            items: [{
              id: data.subscription,
              name: data.line_items.data[0].description,
              price: totalAmount,
              currency: data.currency,
              quantity: data.line_items.data[0].quantity,
            }],
          };

          if (typeof window.goaffproTrackConversion !== "undefined") {
            window.goaffproTrackConversion(window.goaffpro_order);
          }

          // Só recarrega se o ref não estiver na URL ou for diferente
          // const currentUrl = new URL(window.location.href);
          // currentUrl.searchParams.set('ref', ref);
          // window.location.href = currentUrl.toString();
        }
      } catch (error) {
        console.error('Erro ao processar dados:', error);
      }
    };

    fetchData();
  }, [searchParams]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh'
      }}
    >
      <div
        style={{ fontFamily: 'Roboto, sans-serif', textAlign: 'center', fontSize: '18px', lineHeight: '24px', margin: '0 auto', maxWidth: '480px' }}
      >
        <div
          style={{ position: 'relative', display: 'inline-block', marginBottom: '32px' }}
        >
          <div
            style={{ position: 'relative', zIndex: 1, background: 'url(./check-confetti.svg) center center no-repeat', backgroundSize: 'cover', width: '152px', height: '152px' }}
          ></div>
          <div
            style={{ position: 'absolute', top: '0', left: '0', background: 'url(./confeti_square.gif) center center no-repeat', backgroundSize: '97% 97%', width: '152px', height: '152px' }}
          ></div>
        </div>

        <p><strong>Pagamento confirmado com sucesso!</strong></p>

        <p>
          Agradecemos sua compra.<br/> A confirmação do seu pedido foi enviada
          para seu e-mail.
        </p>

        <p>Em breve você receberá mais informações sobre seu produto.</p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <AfiliadosContent />
    </Suspense>
  );
}
