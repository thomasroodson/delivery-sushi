'use client'

import { CheckoutSteps } from '@/types/checkout-steps'
import { Dispatch, SetStateAction } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCheckoutStore } from '@/stores/ckeckout-store'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  name: z.string().min(2, 'Preencha seu nome'),
})

type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>
}
export const StepUser = ({ setStep }: Props) => {
  const { name, setName } = useCheckoutStore((state) => state)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setName(values.name)
    setStep('address')
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col gap-4'
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Seu Nome</FormLabel>
              <FormControl>
                <Input autoFocus placeholder='Qual seu nome?' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' variant='outline'>
          Próximo
        </Button>
      </form>
    </Form>
  )
}
