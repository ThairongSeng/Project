"use client"
import { Menu } from "antd"
import React from "react"
import { Routes, Route, useNavigate } from "react-router"
// import Bar from "../components/Bar"

export default function Courses() {
  return (
    <div className="pt-36 pb-36 max-sm:pt-40 bg-white">
      <div className="flex lg:flex-row max-sm:flex-col">
        <SideMenu />
        <Content />
      </div>
    </div>
  )
}

function SideMenu() {
  const navigate = useNavigate()

  return (
    <div className="lg:w-[30%] max-sm:w-full text-center max-sm:flex max-sm:flex-col font-bold">
      <Menu
        onClick={({ key }) => {
          if (key === "") {
          } else {
            navigate(key)
          }
        }}
        items={[
          { label: "All", key: "/" },
          { label: "In Progress", key: "/progress" },
          { label: "Completed", key: "/completed" },
        ]}
      ></Menu>
    </div>
  )
}

function Content() {
  return (
    <div className="pe-10 ps-10 max-sm:mt-7">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-5">
                <div class="max-w-sm w-[95%] bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="max-w-sm w-[95%]  bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="max-w-sm w-[95%] bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="max-w-sm w-[95%] bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          {" "}
        </Route>
        <Route
          path="/progress"
          element={
            <div>
              <div className="grid lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-5">
                <div class="max-w-sm w-[95%] bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="max-w-sm w-[95%]  bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="max-w-sm w-[95%] bg-white  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      class="rounded-t-lg"
                      src="https://flowbite.com/docs/images/blog/image-1.jpg"
                      alt=""
                    />
                  </a>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Noteworthy technology acquisitions 2021
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      Here are the biggest enterprise technology acquisitions of
                      2021 so far, in reverse chronological order.
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        aria-hidden="true"
                        class="w-4 h-4 ml-2 -mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          {" "}
        </Route>
        <Route path="/completed" element={<div>
          <div className="flex justify-center items-center">
            <img src="/images/congratulation.avif" className="rounded-full max-sm:w-full lg:w-1/3 lg:h-1/3"/>
          </div>
        </div>}>
          {" "}
        </Route>
      </Routes>
    </div>
  )
}
