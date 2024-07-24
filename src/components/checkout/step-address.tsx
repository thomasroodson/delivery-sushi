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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '../ui/separator'

const formSchema = z.object({
  street: z.string().min(2, 'Preencha seu endereço'),
  number: z.string().min(2, 'Preencha o numero'),
  complement: z.string().optional(),
  district: z.string().min(2, 'Preencha o bairro'),
  city: z.string().min(2, 'Preencha a cidade'),
  state: z.string().min(2, 'Preencha seu estado'),
})

type Props = {
  setStep: Dispatch<SetStateAction<CheckoutSteps>>
}
export const StepAddress = ({ setStep }: Props) => {
  const { address, setAddress } = useCheckoutStore((state) => state)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { ...address },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setAddress(values)
    setStep('finish')
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className='grid grid-cols-4 gap-4'>
          <FormField
            control={form.control}
            name='street'
            render={({ field }) => (
              <FormItem className='col-span-3'>
                <FormLabel>Endereço</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='number'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Número</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='complement'
            render={({ field }) => (
              <FormItem className='col-span-4'>
                <FormLabel>Complemento</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='district'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bairro</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='city'
            render={({ field }) => (
              <FormItem className='col-span-2'>
                <FormLabel>Cidade</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='state'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estado</FormLabel>
                <FormControl>
                  <Select
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder='Estado' />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value='SP'>São Paulo</SelectItem>
                      <SelectItem value='RJ'>Rio de Janeiro</SelectItem>
                      <SelectItem value='DF'>Distrito Federal</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Separator className='mt-8 mb-5' />
        <div className='flex justify-between mt-4'>
          <Button
            variant='link'
            onClick={() => {
              setStep('user')
            }}
          >
            Voltar
          </Button>
          <Button type='submit' variant='outline'>
            Concluir
          </Button>
        </div>
      </form>
    </Form>
  )
}
