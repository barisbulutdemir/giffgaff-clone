import Sitemap from './components/footer/Sitemap'
import Socials from './components/footer/Socials'
import HeroBase from './components/hero/HeroBase'
import NavbarBase from './components/navbar/NavbarBase'
import ProductBase from './components/products/ProductBase'
import AppSection from './components/testimonials/appsection'
import Links from './components/testimonials/links'
import Whysection from './components/testimonials/whysection'

export default function Home() {
  return (
    <>
      <NavbarBase />
      <HeroBase />
      <ProductBase />
      <Whysection />
      <AppSection />
      <Links />
      <Socials />
      <Sitemap />
    </>
  )
}
