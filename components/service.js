import Image from "next/image"
import React from "react"
import Container from "./container"

export default function Services(props) {
  const { servicesData } = props

  return (
    <>
      <Container className="flex  flex-col w-4/5  mb-20 lg:gap-10 lg:flex-nowrap">
        <div className={`flex  justify-center items-center w-full  `}>
          <div>
            <div className="w-full ">
              {servicesData?.map((item, index) => (
                <Service
                  key={index}
                  title={item.servicesTitle}
                  detail={item.serviceDetail}
                >
                  {item.listOfServices?.map((listItem, index) => {
                    return (
                      <>
                        <p>{listItem}</p>
                      </>
                    )
                  })}
                </Service>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

function Service(props) {
  return (
    <>
      <div className="flex items-start m-8 space-x-4 w-full  ">
        <div className="w-full ">
          <h4 className=" my-2 text-2xl text-center font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="my-2 font-medium text-blue-400 ">{props.children}</p>
          <p className=" mb-4 text-gray-500 dark:text-gray-400">
            {props.detail}
          </p>
        </div>
      </div>
    </>
  )
}
