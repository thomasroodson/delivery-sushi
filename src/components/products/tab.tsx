import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const ProductsTab = () => {
  return (
    <Tabs defaultValue='sushi'>
      <TabsList className='flex'>
        <TabsTrigger value='sushi' className='flex-1'>
          Sushi
        </TabsTrigger>
        <TabsTrigger value='temaki' className='flex-1'>
          Temaki
        </TabsTrigger>
        <TabsTrigger value='rolls' className='flex-1'>
          Rolls
        </TabsTrigger>
      </TabsList>
      <TabsContent value='sushi' className='mt-6'>
        Conteúdo Sushi
      </TabsContent>
      <TabsContent value='temaki' className='mt-6'>
        Conteúdo Temaki
      </TabsContent>
      <TabsContent value='rolls' className='mt-6'>
        Conteúdo Rolls
      </TabsContent>
    </Tabs>
  )
}
