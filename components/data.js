import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline"

import benefitOneImg from "../public/img/benefit-one.png"
import benefitTwoImg from "../public/img/benefit-two.png"

const benefitOne = {
  title: "Our Services",
  desc: "",
  image: benefitOneImg,
  bullets: [
    {
      title: "Trade Finance",
      desc: "Bank Guarantees, BG",
      desc: "Letter of Credit, LC",
      desc: "Standby Letter of Credit, SBLC",
      icon: <EmojiHappyIcon />,
    },
    {
      title: " Business Advisory",
      desc: "Management Consulting ",
      desc: "Investment Advisory",
      desc: "Feasabililty Studies",
      desc: "Business Plans",
      desc: "Business Proposals",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Project Finance",
      desc: "International Projects Finance",
      desc: "Equity Finance",
      desc: "Company Buy-In & Buy-Out",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Training and Capacilty Building",
      desc: "Sales Training ",
      desc: "Corporate Training ",
      desc: "Customer Value Creation Training ",
      icon: <CursorClickIcon />,
    },
  ],
}

const benefitTwo = {
  title: "VP Consult Gh Manifesto ",
  desc: "We are a result oriented company, that executes with the customer satisfaction as the ultimate goal.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Our Vision",
      desc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum.",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Our Mission ",
      desc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Our Values",
      desc: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ",
      icon: <SunIcon />,
    },
  ],
}

export { benefitOne, benefitTwo }
