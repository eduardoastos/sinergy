'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../Button'
import * as s from './pricePlans.module.css'

export default function PricePlans({ pricePlans }) {
  const pathname = usePathname();
  const isAgendaRoute = pathname?.includes('agente-sdr');

  return (
    <section className={s.pricePlans}>
      {pricePlans.map((plan, index) => {
        if (plan.description) {
          return (
            <div className={`${s.card} ${plan.highlight ? s.highlight : ''}`} key={plan.name.toLowerCase()}>
              <div className={s.texts}>
                <h2>{plan.name}</h2>
                <p>{`${plan.description} cada página por:`}</p>
              </div>
              <div className={s.cta}>
                <span>{plan.price}</span>
                <Link href={plan.link} target="_blank">
                  <Button variant="big">
                    {index === pricePlans.length - 1 && !isAgendaRoute ? 'Contato' : 'Contratar Agora'}
                  </Button>
                </Link>
              </div>
            </div>
          )
        }
        if (plan.features.length > 0) {
          return (
            <div className={`${s.card2} ${plan.highlight ? s.highlight : ''}`} key={plan.name.toLowerCase()}>
              <div className={s.texts}>
                <h1>{plan.name}</h1>
                <div>{plan?.features.map((feature, i) => <p key={feature.split(" ")[1].toLowerCase() + i}>{feature}</p>)}</div>
                <span>{plan.price}</span>
                <Link href={plan.link} target="_blank">
                  <Button variant="big">
                    {index === pricePlans.length - 1 && !isAgendaRoute ? 'Contato' : 'Contratar Agora'}
                  </Button>
                </Link>
              </div>
            </div>
          )
        }
      })}
    </section>
  )
}
