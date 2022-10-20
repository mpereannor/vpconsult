import React, { useState } from "react"
import Container from "./container"
import { Disclosure, Transition } from "@headlessui/react"
import { useForm, useWatch } from "react-hook-form"

export default function ContactDetails({ infoPageData }) {
  console.log("ama", infoPageData[0])
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  })
  const [isSuccess, setIsSuccess] = useState(false)
  const [Message, setMessage] = useState("")

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" })

  const onSubmit = async (data, e) => {
    console.log(data)
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json()
        if (json.success) {
          setIsSuccess(true)
          setMessage(json.message)
          e.target.reset()
          reset()
        } else {
          setIsSuccess(false)
          setMessage(json.message)
        }
      })
      .catch((error) => {
        setIsSuccess(false)
        setMessage("Client Error. Please check the console.log for more info")
        console.log(error)
      })
  }

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div className={` flex flex-wrap items-center w-full lg:w-1/2 `}>
          <div className=" flex items-start mt-8 space-x-3">
            <div className="w-full mt-5">
              <div className="flex items-start mt-8 space-x-3">
                {" "}
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  {infoPageData[0].addressInfo}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={` flex flex-wrap items-center w-full lg:w-1/2 `}>
          <div className=" flex items-start mt-8 space-x-3">
            <div className="w-full mt-5">
              <div className="flex items-start mt-8 space-x-3">
                {" "}
                <p className="mt-1 text-gray-500 dark:text-gray-400">
                  {infoPageData[0].contactMessage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
