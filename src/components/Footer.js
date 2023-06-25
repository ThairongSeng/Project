import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"

const Footer = () => {
  const pathname = usePathname()

  if(pathname === "/afterLogin/CoursePath") return null
  return (
    <footer className="bg-blue-500 dark:bg-gray-900f text-white">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 ms-10">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              ISTADemy
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 mt-8 ms-10">
          <div>
            <h2 className="mb-2 font-medium  text-white dark:text-white">
              Courses
            </h2>
            <ul className="text-white font-medium">
              <li>
                <Link href="#" className="hover:underline">
                  HTML
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  CSS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Java
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 font-medium  text-white dark:text-white">
              Toturials
            </h2>
            <ul className="text-white font-medium">
              <li>
                <Link href="#" className="hover:underline">
                  HTML
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  CSS
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  JavaScript
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Java
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 font-medium  text-white dark:text-white">
              Company
            </h2>
            <ul className="text-white font-medium">
              <li>
                <Link href="#" className="hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 font-medium  text-white dark:text-white">
              Join Us
            </h2>
            <div className="flex mt-4 space-x-4  md:mt-0">
              <Link
                href="https://www.facebook.com/"
                target="_blank"
                className=" hover:text-gray-900 dark:hover:text-white"
              >
                <img src="/images/facebook.png"/>
                <span className="sr-only ">Facebook page</span>
              </Link>
              <Link
                href="https://www.instagram.com/"
                target="_blank"
                className=" hover:text-gray-900 dark:hover:text-white"
              >
                <img src="/images/instagram.png" />
                <span className="sr-only">Instagram page</span>
              </Link>
              <Link
                href="#"
                className=" hover:text-gray-900 dark:hover:text-white"
              >
                <img src="/images/telegram.png" />
                <span className="sr-only">Telegram account</span>
              </Link>
              <Link
                href="#"
                className=" hover:text-gray-900 dark:hover:text-white"
              >
                <img src="/images/twitter.png" />
                <span className="sr-only">Twitter page</span>
              </Link>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-350 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-400 ml-10">
            <Link href="#" className="hover:underline">
              ISTADemy
            </Link>
            © 2023. All Rights Reserved.
          </span>
          <div className="ms-10 flex mt-4 space-x-6 sm:justify-center sm:mt-0 mr-10">
            <Link
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white hover:text-gray-900 dark:hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
