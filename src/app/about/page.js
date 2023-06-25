import React from "react"

export default function About() {
  return (
    <div>
      <div class="bg-white pt-40">
        <div class="mx-auto xl:px-0 flex flex-wrap pb-20 bg-white">
          <div class="mb-5 flex items-center justify-center w-full lg:w-1/2">
            <img
              alt="Hero Illustration"
              loading="eager"
              width="400"
              height="400"
              decoding="async"
              data-nimg="1"
              class="object-cover"
              src="/images/Logo.png"
            />
          </div>
          <div class="flex items-center md:justify-center md:mt-4 w-full lg:w-1/2">
            <div class="max-w-2xl">
              <h1 class="lg:text-start font-bold leading-snug tracking-tight text-gray-800 text-4xl text-center sm:text-4xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
                About ISTADemy
              </h1>
              <p class="lg:text-start text-center py-5 mb-3 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
                The largest web developer site on the internet. 3 billion pages
                displayed each year. 70 million visitors each month.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-auto md:px-6 bg-purple-100">
        <section class="text-center lg:ps-36 lg:pe-36 lg:pt-16 lg:pb-16 p-14">
          <h1 class="mb-10 lg:mb-14  text-center text-4xl font-bold">
            Our History
          </h1>
          <p>
            When we started ISTAD Academy, our goal was to give people the
            ability to learn the skills they’d need to succeed in the 21st
            century. We set out to create a new, interactive way of learning —
            making it engaging, flexible, and accessible for as many people as
            possible. Since then, we have helped millions of people worldwide
            unlock modern technical skills and reach their full potential
            through code.{" "}
          </p>
        </section>
      </div>

      <div class="mx-auto md:px-6 bg-pink-100">
        <section class="text-center lg:ps-36 lg:pe-36 lg:pt-16 lg:pb-16 p-14">
          <h1 class="mb-10 lg:mb-14  text-center text-4xl font-bold">
            Our Mission
          </h1>
          <p>
            We want to create a world where anyone can build something
            meaningful with technology, and everyone has the learning tools,
            resources, and opportunities to do so. Code contains a world of
            possibilities — all that’s required is the curiosity and drive to
            learn. At ISTADemy, we are committed to empowering all people,
            regardless of where they are in their coding journeys, to continue
            to learn, grow, and make an impact on the world around them.
          </p>
        </section>
      </div>

      <div class="md:pt-5  mx-auto xl:px-0 flex flex-wrap pb-20 bg-white">
        <div class="flex items-center w-full md:justify-center lg:w-1/3 lg:p-10 ">
          <div class="max-w-2xl lg:ms-10">
            <h1 class="text-center sm:text-center md:text-center lg:text-start font-bold leading-snug tracking-tight text-gray-800 text-3xl mt-7 pe-3 ps-3  sm:text-2xlxl lg:text-3xl lg:leading-tight  xl:leading-tight dark:text-white">
              ISTADemy Team
            </h1>
            <p class="text-center lg:text-start py-5 mb-3 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
              Our dedicated team of experts is committed to delivering an
              exceptional eLearning experience, ensuring learners' success and
              growth.
            </p>
          </div>
        </div>
        <div class="mb-5 mt-10 flex items-center justify-center w-full lg:w-1/2">
          
        </div>
      </div>
    </div>
  )
}
