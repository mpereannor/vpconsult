import Image from "next/image"
import React from "react"
import Container from "./container"

import userOneImg from "../public/img/user1.jpg"
import userTwoImg from "../public/img/user2.jpg"
import userThreeImg from "../public/img/user3.jpg"

export default function Testimonials() {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Lorem Ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.
            </p>

            <Avatar
              image={userOneImg}
              name="Sarah Steiner"
              title="Head of Human Resource VP Consult"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Lorem Ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.
            </p>

            <Avatar
              image={userTwoImg}
              name="Dylan Ambrose"
              title="Lead marketer at VP Consult"
            />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Lorem Ipsum, lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum.
            </p>

            <Avatar
              image={userThreeImg}
              name="Eben Wuaku"
              title="Co-founder of VP Consult"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          layout="responsive"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  )
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-blue-800 bg-blue-100 rounded-md ring-blue-100 ring-4 dark:ring-blue-900 dark:bg-blue-900 dark:text-blue-200">
        {props.children}
      </mark>{" "}
    </>
  )
}
