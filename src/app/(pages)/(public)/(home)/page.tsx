import { Metadata } from 'next'
import Blog from './Blog'
import Clients from './Clients'
import Footer from './Footer'
import Hero from './Hero'
import Portfolios from './Portfolios'
import Services from './Services'
import Vacancies from './Vacancies'

// data
import { blogPosts, jobDetails, services } from './data'
import { projects } from '@/app/(pages)/(public)/(home)/data'

export const metadata: Metadata = {
  title: 'Odoo ERP y consultoría de negocios',
  description: "Implementamos Odoo ERP, revisamos tus procesos y te ayudamos a digitalizar tu empresa",
}

const Agency = () => {
  return (
    <>
      <Hero />

      <Services services={services} />

      {/* <Portfolios portfolios={projects} />

      <Clients />

      <Blog blogs={blogPosts} />

      <Vacancies jobDetails={jobDetails} /> */}

    </>
  )
}

export default Agency
