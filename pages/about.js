import client from "../lib/sanity"
import Head from "next/head"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"
import Manifesto from "../components/manifesto"
import PopupWidget from "../components/popupWidget"

export default function About({ aboutData }) {
  const { aboutPageData } = aboutData
  console.log("about", aboutPageData)
  return (
    <>
      <Head>
        <title>VP Consult Gh</title>
        <meta name="description" content="VP Consult Gh" />
        <link rel="icon" href="/public/vpconsultgh.svg" />
      </Head>
      <Navbar />
      <SectionTitle title="Join us on the VP Consult Journey ">
        {aboutPageData.aboutFull}
      </SectionTitle>
      <PopupWidget />
    </>
  )
}
//create a query called homePageQuery
const aboutQuery = `*\[_type == "homepage"\][0] {
    aboutFull
  }`

export async function getStaticProps() {
  const aboutPageData = await client.fetch(aboutQuery)

  const aboutData = {
    aboutPageData,
  }

  return {
    props: {
      aboutData,
    },
    revalidate: 1,
  }
}
