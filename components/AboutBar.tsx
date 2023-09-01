import Link from "next/link";


export default function AboutBar() {
  return (
    <>
      <div className="bg-purple-500 py-6 w-full">
        <ul className="text-white overflow-x-auto whitespace-nowrap flex flex-row justify-between items-center text-sm md:text-xl md:mx-16 lg:text-3xl  ">
          <Link href={'#exp'} className="transition-all delay-0 duration-1000 ease-in-out hover:underline hover:underline-offset-4">
            <li>Our Expertise</li>
          </Link>
          <Link href={'#app'} className="transition-all delay-0 duration-1000 ease-in-out hover:underline hover:underline-offset-4">
            <li>Our Approach</li>
          </Link>
          <Link href={'#vis'} className="transition-all delay-0 duration-1000 ease-in-out hover:underline hover:underline-offset-4">
            <li>Our Vision</li>
          </Link>
          <Link href={'#val'} className="transition-all delay-0 duration-1000 ease-in-out hover:underline hover:underline-offset-4">
            <li>Our Values</li>
          </Link>
          <Link href={'#strn'} className="transition-all delay-0 duration-1000 ease-in-out hover:underline hover:underline-offset-4">
            <li>Our Strengths</li>
          </Link>
        </ul>
      </div>
    </>
  )
}
