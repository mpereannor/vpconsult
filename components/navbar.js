import Link from "next/link"
import ThemeChanger from "./DarkSwitch"
import { Disclosure } from "@headlessui/react"
import { createPopper } from "@popperjs/core"
import { useState, createRef } from "react"

const subNavigation = [
  "Management Consultancy",
  "Business Strategy Consulting",
  "Finance and Project Funding",
  "Sales and Marketing",
  "Operations",
  "Commodity Trade Finance",
  "Trade and Project Funding",
]
export default function Navbar() {
  const navigation = ["TEAM", "BLOG"]

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <a className="flex items-center space-x-2 text-2xl font-medium text-blue-500 dark:text-gray-100">
                    {/* <Image src={}/> */}
                    <span>VP Consult Gh</span>
                  </a>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link key={index} href="/">
                        <a className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                          {item}
                        </a>
                      </Link>
                    ))}
                    <Link href="/about">
                      <a className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 dark:focus:bg-gray-800 focus:outline-none dark:focus:bg-trueGray-700">
                        ABOUT
                      </a>
                    </Link>
                    <Link
                      href="/
                    "
                    >
                      <a className="w-full px-6 py-2 mt-3 text-center text-white bg-blue-600 lg:ml-5">
                        Get Started
                      </a>
                    </Link>
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 nav__item">
              <Link href="/about">
                <a className="inline-block px-4 py-2 text-md font-normal text-gray-800 no-underline  dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800">
                  ABOUT
                </a>
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link href="/services">
                <a className="inline-block px-4 py-2 text-md font-normal text-gray-800 no-underline  dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800">
                  <Dropdown item={"SERVICES"} />
                </a>
              </Link>
            </li>
            <li className="mr-3 nav__item">
              <Link href="/contact">
                <a className="inline-block px-4 py-2 text-md font-normal text-gray-800 no-underline  dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800">
                  CONTACT{" "}
                </a>
              </Link>
            </li>
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/">
                  <a className="inline-block px-4 py-2 text-md font-normal text-gray-800 no-underline  dark:text-gray-200 hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="/">
            <a className="px-6 py-2 text-white bg-blue-600 md:ml-5">
              Get Started
            </a>
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  )
}

const Dropdown = ({ item }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)
  const btnDropdownRef = createRef()
  const popoverDropdownRef = createRef()
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "top",
    })
    setDropdownPopoverShow(true)
  }
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false)
  }
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-6/12 md:w-4/12 px-4">
          <div className="relative inline-flex align-middle w-full">
            <div
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover()
              }}
            >
              {item}
            </div>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                "bg-blue-100 text-base z-50 float-left py-2  mr-3 nav__item list-none text-left  shadow-md mt-1 min-w-48"
              }
            >
              {subNavigation.map((sub, index) => (
                <a
                  key={index}
                  href="#pablo"
                  className="inline-block 
                  px-2 py-2 text-sm font-normal  text-gray-800 dark:text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 focus:text-blue-500 focus:bg-blue-100 focus:outline-none dark:focus:bg-gray-800 ease-linear transition-all duration-150 hover:shadow-md"
                  onClick={(e) => e.preventDefault()}
                >
                  {sub}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
