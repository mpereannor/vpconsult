import Image from "next/image"
import React from "react"
import Container from "./container"

export default function Manifesto(props) {
  const { manifestoData } = props

  return (
    <>
      <Container className="flex flex-wrap  lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex flex-wrap  w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="w-full mt-5">
              <Benefit title="Our Mission">
                <p>{manifestoData[0]}</p>
              </Benefit>
            </div>
          </div>
        </div>

        <div
          className={`flex flex-wrap w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="w-full mt-5">
              <Benefit title="Our Vision">
                <p>{manifestoData[1]}</p>
              </Benefit>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

function Benefit(props) {
  return (
    <>
      <div className="flex items-start mt-8 space-x-3">
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
    </>
  )
}
