import { useCheckoutStore } from '@/stores/ckeckout-store'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { generateMessage } from '@/lib/generate-message'

export const StepFinish = () => {
  const { name } = useCheckoutStore()

  const message = generateMessage()
  const linkZap = `https://wa.me//${
    process.env.NEXT_PUBLIC_ZAP
  }?text=${encodeURI(message)}`

  return (
    <div className='flex flex-col gap-5 text-center font-light text-sm'>
      <p>
        Perfeito <strong>{name}</strong>!
      </p>
      <p>
        Agora envie seu pedido ao nosso Whatsapp para concluir. Nosso atendente
        irá te guiar sobre o andamento do pedido.
      </p>
      <Link target='_blank' href={linkZap}>
        <Button className='w-full'>Enviar para o Whatsapp</Button>
      </Link>
    </div>
  )
}
