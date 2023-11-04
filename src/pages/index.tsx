import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import {Button} from '@nextui-org/react'
const IndexPage: React.FC<PageProps> = () => {
  return <NextUIProvider>
    <h1 className="text-3xl">Kacper</h1>
    <Button>Click me</Button>
  </NextUIProvider>
}

export default IndexPage

