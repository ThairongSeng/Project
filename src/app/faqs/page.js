import React from "react"
import Datas from "./data"

function accordion({q,id,a}) {
  <>
    <h2 id={accordion-flush-heading-{id}}>
      <button
        type="button"
        class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
        data-accordion-target={accordion-flush-heading-{id}}
        aria-expanded="true"
        aria-controls={accordion-flush-heading-{id}}
      >
        <span>{q}</span>
        <svg
          data-accordion-icon
          class="w-6 h-6 rotate-180 shrink-0"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </h2>
    <div
      id={accordion-flush-body-{id}}
      class="hidden"
      aria-labelledby="accordion-flush-heading-1"
    >
      <div class="py-5 border-b border-gray-200 dark:border-gray-700">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          {a}
        </p>
      </div>
    </div>
  </>
}

export default function FAQs() {
  return (
    <div class="pt-28 mx-auto md:px-6 bg-white">
      <section class="text-center lg:ps-36 lg:pe-36 lg:pt-16 lg:pb-16 p-14">
        <h1 class="mb-10 lg:mb-14  text-center text-4xl font-bold">
          Frequently Asked Questions
        </h1>

        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          data-inactive-classes="text-gray-500 dark:text-gray-400"
        >
         
          
        </div>
      </section>
    </div>
  )
}
