import Head from "next/head"
import Hero from "../components/hero"
import Navbar from "../components/navbar"
import SectionTitle from "../components/sectionTitle"

import { benefitOne, benefitTwo } from "../components/data"
import Video from "../components/video"
import Benefits from "../components/benefits"
import Footer from "../components/footer"
import Testimonials from "../components/testimonials"
import Cta from "../components/cta"
import Faq from "../components/faq"
import PopupWidget from "../components/popupWidget"
import Stats from "../components/stats"


export default function Home() {
  return (
    <>
      <Head>
        <title>VP Consult Gh</title>
        <meta
          name="description"
          content="VP Consult Gh"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Stats />

      <SectionTitle title=" Why you should work with us">
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
        Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch how we offer our consulting services"
        title="Join us on the VP Consult Journey "
      >
        As always, the customer comes first.
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
