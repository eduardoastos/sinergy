import * as s from './faq.module.css'

export default function Faq() {
  const faqs = [
    {
      question: 'Como funciona o sistema?',
      answer: 'O sistema é simples e intuitivo. Basta cadastrar seu nome, email e telefone, escolher o plano de assinatura e começar a utilizar.'
    },
    {
      question: 'Posso cancelar minha assinatura?',
      answer: 'Sim, você pode cancelar a sua assinatura a qualquer momento. Basta entrar em contato com o nosso atendimento ou utilizar o link de cancelamento fornecido em seu email de confirmação.'
    },
    {
      question: 'Preciso saber sobre T.I para usar o serviço?',
      answer: 'Não. Nossos serviços são intuitivos e simples e mesmo assim prestamos todo o suporte necessário.'
    },
    {
      question: 'Preciso contratar um servidor para usar?',
      answer: 'Não é necessário o uso de um cloud. Após a contratação o cliente tem acesso instantâneo as ferramentas!'
    }
  ];
  return (
    <section className={s.faq} id="faq">
      <div className={s.title}>
        <h3>FAQ</h3>
        <h2>Perguntas Frequentes</h2>
      </div>
      <div className={s.list}>
        {faqs.map((faq, i) => (
          <div key={faq.question} className={s.faqItem}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
