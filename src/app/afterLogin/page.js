"use client"
import React from "react"
import { Menu } from "antd"
import { Routes, Route, useNavigate } from "react-router"

const page = () => {
  return (
    <div className="bg-white p-20">
      {/* Good Morning */}
      <div className="mt-20 mb-12 ">
        <h1 className="text-4xl font-bold">
          Good Morning, <spna className="text-blue-500">Jesper</spna>
        </h1>
        <p className="mt-3 text-lg">
          You’re doing great, continue your learning now
        </p>
      </div>

      {/* card */}
      <div className="flex flex-wrap mb-20">
        <div class="max-w-sm p-6  bg-blue-300 hover:bg-blue-400 mr-10 border-gray-200 rounded-xl shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div>
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </div>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
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

        <div
          href="#"
          class="lg:w-[60%]  max-sm:mt-3 block shadow-md p-5 rounded-xl  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <p class="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>

      {/* My Course */}
      {/* <div className="grid lg:grid-cols-3 max-sm:grid-cols-1 md:grid-cols-1">
        <div className="font-bold text-2xl max-sm:my-5">My Course</div>
        <div className=" grid md:grid-cols-2 gap-1">
        <div class="max-w-sm bg-white  border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  HTML
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Start at the beginning by learning HTML basics — an important
                foundation for building and...
              </p>
              <p className="text-right">10 hours</p>
              <div className="flex justify-between">
                <p>Basic</p>
                <p>12 lessons</p>
              </div>
            </div>
          </div>
          <div class="max-w-sm bg-white  border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  HTML
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Start at the beginning by learning HTML basics — an important
                foundation for building and...
              </p>
              <p className="text-right">10 hours</p>
              <div className="flex justify-between">
                <p>Basic</p>
                <p>12 lessons</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" ">
          <a
            href="#"
            class="inline-flex rounded-full items-center lg:mt-60 lg:ms-44 px-6 py-2 text-sm font-medium text-center text-white bg-blue-700 mt-6 mb-8 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            All
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
      </div> */}
      <div className="pt-10 pb-10 max-sm:pt-40 bg-white">
        <h1 className="text-4xl font-bold mb-3">My Course</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <SideMenu />
          <Content />
        </div>
      </div>

      {/* More Courses */}
      <div>
        <div className="bg-white flex justify-between">
          <h1 className="text-4xl font-bold max-sm:text-lg">More Courses</h1>
          <a
            href="#"
            class="inline-flex  items-center px-3 py-2 text-sm font-medium text-center text-blue-500"
          >
            All Courses
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

        <div className="grid gap-5 mt-10 md:grid-cols-3 max-sm:grid-cols-1">
          <div class="max-w-sm bg-white  border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  HTML
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Start at the beginning by learning HTML basics — an important
                foundation for building and...
              </p>
              <p className="text-right">10 hours</p>
              <div className="flex justify-between">
                <p>Basic</p>
                <p>12 lessons</p>
              </div>
            </div>
          </div>
          <div class="max-w-sm bg-white  border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  HTML
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Start at the beginning by learning HTML basics — an important
                foundation for building and...
              </p>
              <p className="text-right">10 hours</p>
              <div className="flex justify-between">
                <p>Basic</p>
                <p>12 lessons</p>
              </div>
            </div>
          </div>
          <div class="max-w-sm bg-white  border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div class="p-6">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  HTML
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Start at the beginning by learning HTML basics — an important
                foundation for building and...
              </p>
              <p className="text-right">10 hours</p>
              <div className="flex justify-between">
                <p>Basic</p>
                <p>12 lessons</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page

function SideMenu() {
  const navigate = useNavigate()

  return (
    <div className="w-[20%] text-center max-sm:inline font-bold">
      <Menu
        onClick={({ key }) => {
          if (key === "") {
          } else {
            navigate(key)
          }
        }}
        items={[
          { label: "In Progress", key: "/progress" },
          { label: "Completed", key: "/completed" },
        ]}
      ></Menu>
    </div>
  )
}
function Content() {
  return (
    <div className="pe-10 ps-10">
      <Routes>
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
        <Route
          path="/completed"
          element={
            <div>
              <div className="flex justify-center items-center">
                <img
                  src="/images/congratulation.avif"
                  className="w-[50%] h-[50%] rounded-full"
                />
              </div>
            </div>
          }
        >
          {" "}
        </Route>
      </Routes>
    </div>
  )
}
