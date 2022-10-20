import Head from "next/head"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"
import client from "../lib/sanity"
import { benefitOne, benefitTwo } from "../components/data"
import Video from "../components/video"
import Benefits from "../components/benefits"
import Manifesto from "../components/manifesto"
import Footer from "../components/footer"
import Cta from "../components/cta"
import Faq from "../components/faq"
import PopupWidget from "../components/popupWidget"
import Stats from "../components/stats"

//create a query called homePageQuery
const homePageQuery = `*\[_type == "homepage"\][0] {
  title,
  subtitle,
  about,
  manifesto,
  faq,
  "ctaUrl": cta {
    current
        },
  image {
    ...asset->
  }
}`

const servicesPageQuery = `*[_type == "services"] | order(_createdAt asc)
{ 
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
  return (
    <>
      <Head>
        <title>VP Consult Gh</title>
        <meta name="description" content="VP Consult Gh" />
        <link rel="icon" href="/public/vpconsultgh.svg" />
      </Head>

      <Navbar subMenu={servicesPageData} />
      <Hero subtitle={homePageData.subtitle} />
      <Stats />

      <SectionTitle title=" Our Services"></SectionTitle>
      <Benefits imgPos="left" servicesData={servicesPageData.slice(0, 2)} />
      <Benefits imgPos="right" servicesData={servicesPageData.slice(2, 4)} />
      <Benefits imgPos="left" servicesData={servicesPageData.slice(4, 8)} />
      <SectionTitle title="Join us on the VP Consult Journey ">
        {homePageData.subtitle}
        <Manifesto manifestoData={homePageData.manifesto} />
      </SectionTitle>

      <SectionTitle
        pretitle="FAQ"
        title="Frequently Asked Questions"
      ></SectionTitle>
      <Faq faq={homePageData.faq} />
      <Cta />
      <Footer about={homePageData.about} />
      <PopupWidget />
    </>
  )
}
