import client from "../lib/sanity"
import Head from "next/head"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"
import Manifesto from "../components/manifesto"
import PopupWidget from "../components/popupWidget"
import Benefits from "../components/benefits"
import Services from "../components/service"
import Footer from "../components/footer"

export default function About({ servicesData }) {
  const { servicesPageData } = servicesData
  return (
    <>
      <Head>
        <title>VP Consult Gh</title>
        <meta name="description" content="VP Consult Gh" />
        <link rel="icon" href="/public/vpconsultgh.svg" />
      </Head>
      <Navbar />
      <SectionTitle title=" Our Services"></SectionTitle>
      <Services servicesData={servicesPageData} />
      <Footer />
      <PopupWidget />
    </>
  )
}
//create a query called homePageQuery
const servicesPageQuery = `*[_type == "services"] | order(_createdAt asc)
{ 
  servicesTitle,
 listOfServices[], 
 serviceDetail
}`

export async function getStaticProps() {
  const servicesPageData = await client.fetch(servicesPageQuery)

  const servicesData = {
    servicesPageData,
  }

  return {
    props: {
      servicesData,
    },
    revalidate: 1,
  }
}
