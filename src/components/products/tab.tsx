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
      <TabsContent value='sushi'>Conteúdo Sushi</TabsContent>
      <TabsContent value='temaki'>Conteúdo Temaki</TabsContent>
      <TabsContent value='rolls'>Conteúdo Rolls</TabsContent>
    </Tabs>
  )
}
