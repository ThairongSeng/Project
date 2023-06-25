"use client"
import { Menu } from "antd"
import React from "react"
import { Routes, Route, useNavigate } from "react-router"

const personalSetting = () => {
  return (
    <div className="lg:pt-36 pb-36 max-sm:pt-36 md:pt-32 bg-white">
      <div className="lg:flex lg:flex-row ">
        <SideMenu />
        <div className="flex justify-center">
          <Content />
        </div>
      </div>
    </div>
  )
}
export default personalSetting

function SideMenu() {
  const navigate = useNavigate()

  return (
    <div className="lg:w-[20%] max-sm:w-full max-sm:flex max-sm:flex-col text-center font-bold">
      <Menu
        onClick={({ key }) => {
          if (key === "") {
          } else {
            navigate(key)
          }
        }}
        items={[
          { label: "Account", key: "/afterLogin/personalSetting/account" },
          {
            label: "Delete Account",
            key: "/afterLogin/personalSetting/deleteAcc",
          },
        ]}
      ></Menu>
    </div>
  )
}

function Content() {
  return (
    <div className="lg:ps-40 max-sm:ps-0">
      <Routes>
        <Route
          path="/afterLogin/personalSetting/account"
          element={
            <div className="p-10 shadow-sm">
              <form>
                <div class="flex justify-center mb-10">
                  <img
                    class="rounded-full w-20 h-20"
                    src="/images/Logo.png"
                    alt="image description"
                  />
                </div>

                <div class="mb-6">
                  <label
                    for="text"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    class="bg-gray-50 py-3 ps-3 shadow-md  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-25 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div class="mb-6">
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="bg-gray-50 py-3 ps-3 shadow-md  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-25 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@flowbitecom"
                    required
                  />
                </div>

                <div class="mb-6">
                  <label
                    for="text"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    class="bg-gray-50 py-3 ps-3 shadow-md  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-25 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="City, Country"
                    required
                  />
                </div>

                <div class="mb-6">
                  <label
                    for="message"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Bio
                  </label>
                  <textarea
                    id="bio"
                    rows="3"
                    class="block p-25 py-3 ps-3 shadow-md w-full text-sm text-gray-900 bg-gray-50 rounded-lg  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="share your interest and goal"
                  ></textarea>
                </div>

                <div class="mb-6">
                  <label
                    for="website-admin"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Github Username
                  </label>
                  <div class="flex shadow-md">
                    <span class="inline-flex py-3 ps-1 items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                      https://githubcom
                    </span>
                    <input
                      type="text"
                      id="website-admin"
                      class="rounded-none py-3 ps-3 rounded-r-lg bg-gray-50  border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-25  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Github Username"
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    type="submit"
                    class="text-white py-3 max-sm:px-3 max-sm:text-xs shadow-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-25 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    class="text-white py-3 max-sm:px-3 max-sm:text-xs shadow-md bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-25 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          }
        >
          {" "}
        </Route>

        <Route
          path="/afterLogin/personalSetting/deleteAcc"
          element={
            <div className="lg:ps-20 max-sm:p-5">
              <div>
                <h1 class="lg:text-4xl max-sm:text-lg font-bold pb-5">
                  Delete Account
                </h1>
              </div>

              <div>
                <h3 className="lg:text-xl max-sm:text-sm pb-4">
                  Are you sure you want to continue?
                </h3>
              </div>

              <div class="mb-5">
                <h3 className="lg:text-xl max-sm:text-sm ">
                  If you have a problem, our customer support team will be happy
                  to help. Get in touch
                </h3>
                <h2 class="mb-2 lg:text-xl max-sm:text-sm ">
                  If you delete your account :
                </h2>
                <div className="ps-6">
                  <ul class="max-w-md lg:text-base max-sm:text-sm  space-y-1 list-disc list-inside">
                    <li>You will lose all of your course progress</li>
                    <li>You will lose access to all your certificates</li>
                    <li>All the content you have ever x will be deleted</li>
                    <li>Your connected social accounts will be disconnected</li>
                    <li>
                      Account deletion is permanent. This action cannot be
                      undone
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex lg:justify-end max-sm:justify-center lg:me-10">
                <button
                  type="button"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-7 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Delete Account
                </button>
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
