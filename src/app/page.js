import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main class="bg-white">
      {/* learn to code */}
      <div class="lg:mt-24 md:mt-24 md:pt-5  mt-20 mx-auto xl:px-0 flex flex-wrap pb-20">
        <div class="flex items-center w-full md:justify-center lg:w-1/2 lg:p-10 ">
          <div class="max-w-2xl mt-10 lg:ms-10">
            <h1 class="text-center sm:text-center md:text-center lg:text-start font-bold leading-snug tracking-tight text-gray-800 text-4xl pe-3 ps-3  sm:text-4xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
            Learn to Code For Free With <span class="text-pink-500">ISTADemy</span>
            </h1>
            <p class="text-center lg:text-start py-5 mb-3 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
            Unlock your coding potential at ISTADemy. Learn, practice, and connect with a vibrant community of coding enthusiasts.
            </p>
            <div class="flex justify-center lg:justify-start">
              <Link href="#">
                <button
                  type="button"
                  class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-6 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Started Learning
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div class="mb-5 mt-10 flex items-center justify-center w-full lg:w-1/2">
          <img
            alt="Hero Illustration"
            loading="eager"
            width="400"
            height="400"
            decoding="async"
            data-nimg="1"
            class="object-cover"
            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75"
          />
        </div>
        
      </div>

      {/* Why Istademy */}
      <div class=" mx-auto md:px-6 bg-purple-100">
        <section class="mb-32 text-center lg:ps-36 lg:pe-36 lg:pt-16 lg:pb-16 p-14">
          <h1 class="mb-10 lg:mb-14  text-center text-4xl font-bold">Why ISTADemy</h1>

          <div class="grid lg:grid-cols-3 xl:gap-x-12 gap-6 justify-center">
            <div class=" w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="flex flex-col items-center mt-8  pb-5">
                <img
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/images/Logo.png"
                  alt="Bonnie image"
                />
                <h5 class="mb-4 text-xl font-bold">
                  Interactive Exercises and Quizzes
                </h5>
                <p class="m-2">
                  Dynamic interactive exercises, reinforcing core concepts.
                </p>
              </div>
            </div>

            <div class=" w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="flex flex-col items-center mt-8  pb-5">
                <img
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/images/Logo.png"
                  alt="Bonnie image"
                />
                <h5 class="mb-4 text-xl font-bold">Earn Certificate</h5>
                <p class="m-2">
                  Obtain official course certificate by completing the course
                </p>
              </div>
            </div>

            <div class=" w-full max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
              <div class="flex flex-col items-center mt-8 pb-5">
                <img
                  class="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src="/images/Logo.png"
                  alt="Bonnie image"
                />
                <h5 class="mb-4 text-xl font-bold">Learn at your own pace</h5>
                <p class="m-2">
                  Learn at your own pace without time constraints or
                  limitations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Code Playground */}
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
            srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75 2x"
            src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero.4e76c802.png&amp;w=1920&amp;q=75"
          />
        </div>
        <div class="flex items-center md:justify-center md:mt-4 w-full lg:w-1/2">
          <div class="max-w-2xl">
            <h1 class="lg:text-start font-bold leading-snug tracking-tight text-gray-800 text-4xl text-center sm:text-4xl lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight dark:text-white">
              Code Playground
            </h1>
            <p class="lg:text-start text-center py-5 mb-3 text-lg leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
              With our <span class="text-blue-500">online code editor,</span>{" "}
              you can practice code and view the result in your browser
            </p>
            <div class="flex justify-center lg:justify-start">
              <Link href="#">
                <button
                  type="button"
                  class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-6 py-3 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Explore Playground
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      
    </main>
  )
}
