import { useCartStore } from '@/stores/cart-store'
import { useCheckoutStore } from '@/stores/ckeckout-store'

export const generateMessage = () => {
  const { name, address } = useCheckoutStore((state) => state)
  const { cart } = useCartStore((state) => state)

  let orderProducts = []
  for (let item of cart) {
    orderProducts.push(
      `${item.quantity < 9 ? '0' : ''}${item.quantity}x   | ${
        item.product.name
      }`
    )
  }

  return `*Dados do cliente*
*Nome:* ${name}
*Endereço:* ${address.street} ${address.number} (${address.complement}) ${
    address.district
  }, ${address.city}/${address.state}
=====================
*Pedido:*
*Qt*     | *Item*    
------|---------
${orderProducts.join('\n')}
`
}
