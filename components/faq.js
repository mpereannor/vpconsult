import React from "react"
import Container from "./container"
import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/solid"

export default function Faq({ faq }) {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        <div className="mb-5">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-blue-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                  <span>How can I directly reach out</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "transform rotate-180" : ""
                    } w-5 h-5 text-blue-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                  {faq[0]}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </Container>
  )
}

const faqdata = [
  {
    question: "Where can I reach out to directly  ",
    answer: "Yes, you can react out at this number .",
  },
  {
    question: "Where can I reach out to directly.",
    answer: "Yes, you can react out at this number .",
  },
  {
    question: "Where can I reach out to directly  ",
    answer: "Yes, you can react out at this number .",
  },
  {
    question: "Where can I reach out to directly  ",
    answer: "Yes, you can react out at this number .",
  },
  {
    question: "Where can I reach out to directly  ",
    answer: "Yes, you can react out at this number .",
  },
]
