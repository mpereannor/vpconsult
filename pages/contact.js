import client from "../lib/sanity"
import Head from "next/head"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"
import Manifesto from "../components/manifesto"
import PopupWidget from "../components/popupWidget"
import Benefits from "../components/benefits"
import Services from "../components/service"
import ContactDetails from "../components/contactDetails"

export default function Contact({ infoData }) {
  const { infoPageData } = infoData
  console.log("papa", infoPageData)
  return (
    <>
      <Head>
        <title>VP Consult Gh</title>
        <meta name="description" content="VP Consult Gh" />
        <link rel="icon" href="/public/vpconsultgh.svg" />
      </Head>
      <Navbar />
      <ContactDetails infoPageData={infoPageData} />
      <PopupWidget />
    </>
  )
}
const infoPageQuery = `*[_type == "info"] 
{ 
 contactMessage,
 addressInfo
}`

export async function getStaticProps() {
  const infoPageData = await client.fetch(infoPageQuery)

  const infoData = {
    infoPageData,
  }

  return {
    props: {
      infoData,
    },
    revalidate: 1,
  }
}
