import { Cart } from '@/types/cart'
import { CartItemQuantity } from '@/components/cart/item-quantity'

type Props = {
  item: Cart
}
export const CartItem = ({ item }: Props) => {
  return (
    <div className='flex gap-2 items-center'>
      <div className='w-16 overflow-hidden'>
        <img
          src={item.product.image}
          alt={item.product.name}
          className='w-full h-auto object-cover'
        />
      </div>
      <div className='flex-1'>
        <p className='text-md'>{item.product.name}</p>
        <p className='text-xs font-extralight opacity-50'>
          {item.product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
      </div>
      <div>
        <p className='text-xs font-extralight'>
          <CartItemQuantity cartItem={item} />
        </p>
      </div>
    </div>
  )
}
