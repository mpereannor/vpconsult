import Image from "next/image"
import React from "react"
import Container from "./container"
import blackLady from "../public/img/black_illus.jpeg"

export default function Benefits(props) {
  const { data, servicesData } = props

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            <Image
              src={blackLady}
              alt="Benefits"
              layout="intrinsic"
              placeholder="blur"
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="w-full mt-5">
              {servicesData?.map((item, index) => (
                <Benefit key={index} title={item.servicesTitle}>
                  {item.listOfServices?.map((listItem, index) => {
                    return <p>{listItem}</p>
                  })}
                </Benefit>
              ))}
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
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-blue-500 rounded-md w-11 h-11 ">
          {/* {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-blue-50",
          })} */}
        </div>
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
