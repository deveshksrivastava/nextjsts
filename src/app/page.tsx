import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1>
      <p>I am using Montserrat font</p>
      <Link href={"contact"}>Go to Nav bar page</Link>
      <section className="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8">
        <div className="bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] absolute inset-0 -z-10 opacity-20"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            className="mx-auto h-12"
            src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
            alt=""
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="mx-auto h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>

                <div className="text-gray-600">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      <button className="flex flex-col border-2 items-center px-8 py-2 rounded-md border-green-600 bg-green-900 bg-opacity-50 hover:bg-opacity-75">
        <span className="text-xl font-bold">Submit</span>
      </button>
      <div className="grid grid-cols-4 gap-4 grid-template-rows: repeat(4, minmax(0, 1fr))">
        <div>01</div>
        <div>01</div> <div>01</div> <div>01</div> <div>01</div> <div>01</div>{" "}
        <div>01</div> <div>01</div>
        <div>09</div>
      </div>
      <img className="rotate-45 ..."></img>
      Currently we add basic utility-friendly form styles for the following form
      element types:
      {/* input[type='text']
      input[type='password']
      input[type='email']
      input[type='number']
      input[type='url']
      input[type='date']
      input[type='datetime-local']
      input[type='month']
      input[type='week']
      input[type='time']
      input[type='search']
      input[type='tel']
      input[type='checkbox']
      input[type='radio']
      select
      select[multiple]
      textarea */}
      {/* <!-- You can actually customize padding on a select element now: --> */}
      <select className="px-4 py-3 rounded-full">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
      </select>
      {/* <!-- Or change a checkbox color using text color utilities: --> */}
      <input type="checkbox" className="rounded text-pink-500" />
      <input
        type="email"
        className="form-input px-4 py-3 rounded-full"
        placeholder="Enter email"
      />
      <select className="form-select px-4 py-3 rounded-full">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        {/* <!-- ... --> */}
      </select>
      <input type="checkbox" className="form-checkbox rounded text-pink-500" />
    </div>
  );
}
