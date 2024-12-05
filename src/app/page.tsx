import { Navbar } from '@/components/organisms/Navbar'
import { Main } from '@/components/organisms/Main'
import { Footer } from '@/components/organisms/Footer'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

        <Main />

      <Footer />
    </div>
  )
}
