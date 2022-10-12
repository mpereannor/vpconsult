import Head from "next/head"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"
import client from "../lib/sanity"

import { benefitOne, benefitTwo } from "../components/data"
import Video from "../components/video"
import Benefits from "../components/benefits"
import Footer from "../components/footer"
import Testimonials from "../components/testimonials"
import Cta from "../components/cta"
import Faq from "../components/faq"
import PopupWidget from "../components/popupWidget"
import Stats from "../components/stats"

//create a query called homePageQuery
const homePageQuery = `*\[_type == "homepage"\][0] {
  title,
  subtitle,
  "ctaUrl": cta {
    current
        },
  image {
    ...asset->
  }
}`

const servicesPageQuery = `*[_type == "services"]{ 
  servicesTitle,
 listOfServices[]
}`

export async function getStaticProps() {
  const homePageData = await client.fetch(homePageQuery)
  const servicesPageData = await client.fetch(servicesPageQuery)
  const data = {
    homePageData,
  }
  const servicesData = {
    servicesPageData,
  }
  return {
    props: {
      data,
      servicesData,
    },
    revalidate: 1,
  }
}

export default function Home({ data, servicesData }) {
  const { homePageData } = data
  const { servicesPageData } = servicesData
  console.log("agape", { homePageData })
  console.log("kiko", { servicesPageData })
  return (
    <>
      <Head>
        <title>VP Consult Gh</title>
        <meta name="description" content="VP Consult Gh" />
        <link rel="icon" href="/public/vpconsultgh.svg" />
      </Head>

      <Navbar />
      <Hero />
      <Stats />

      <SectionTitle title=" Why you should work with us">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </SectionTitle>
      <Benefits data={benefitOne} servicesData={ servicesPageData} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch how we offer our consulting services"
        title="Join us on the VP Consult Journey "
      >
        {homePageData.subtitle}
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said"
      >
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  )
}
