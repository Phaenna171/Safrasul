import Link from "next/link"


export default function CotacaoWhatsApp() {
  return (
    <>
      {/* Cotacao WhatsApp */}
      <a href="https://api.whatsapp.com/send?phone=+5567996100946&text=Ol%C3%A1%21+Como+podemos+ajudar%3F%0A%0APor+favor%2C+informe+sobre+qual+assunto+voc%C3%AA+gostaria+de+falar%3A%0A%0A1.Compra+de+Sementes%0A2.Entrega+de+Produtos%0A3.Pagamentos%0A4.Servi%C3%A7os+Administrativos" target="_blank" rel="noopener noreferrer">
        <div className="flex z-[123123123] flex-col items-end justify-center md:col-start-3 md:row-start-3 fixed right-10 bottom-16">
          <img
            src="./icons/cotacao-wpp.svg"
            className="w-auto h-10 md:h-12 lg:h-16"
            alt="Cotação WhatsApp"
          />
        </div>
      </a>
    </>
  )
}