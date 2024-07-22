import { Cart } from '@/types/cart'

type Props = {
  cartItem: Cart
}
export const CartItemQuantity = ({ cartItem }: Props) => {
  return <div className='text-xs'>{cartItem.quantity}</div>
}
