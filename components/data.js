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
      title: "Advisory Business Serivce",
      desc: "Lorem  Ipsum lorem ipsum  Ipsum lorem ipsum  Ipsum lorem ipsum  Ipsum lorem ipsum ",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Project Finance",
      desc: " Ipsum lorem ipsum  Ipsum lorem ipsum  Ipsum lorem ipsum ",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "MT103 Wire Transfer",
      desc: "T Ipsum lorem ipsum  Ipsum lorem ipsum  Ipsum lorem ipsum ",
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
