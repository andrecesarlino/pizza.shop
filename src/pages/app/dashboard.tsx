import { Helmet } from 'react-helmet-async'

import { Header } from '@/components/header'

export function Dashboard() {
  return (
    <>
      <Header />
      <Helmet title="Dashboard" />
      <h1>teste</h1>
    </>
  )
}
