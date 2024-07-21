import { Logo } from '@/components/logo'
import { ThemeToggle } from '@/components/theme-toggle'
import { CartSidebar } from '@/components/cart/sidebar'

export const Header = () => {
  return (
    <header className='flex justify-between items-center mt-14 mb-5 mx-3'>
      <div className='flex items-center gap-x-3'>
        <Logo />
        <ThemeToggle />
      </div>
      <div className='flex items-center gap-x-3'>
        <CartSidebar />
      </div>
    </header>
  )
}
