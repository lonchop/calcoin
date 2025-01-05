import { Navbar } from '@/components/organisms/OrganismNavbar'
import { Main } from '@/components/organisms/OrganismMain'
import { Footer } from '@/components/organisms/OrganismFooter'

// import { BearCounter, Controls } from '@/components/organisms/OrganismMain'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <Main />

      {/* <BearCounter />
      <Controls /> */}

      <Footer />
    </div>
  )
}
