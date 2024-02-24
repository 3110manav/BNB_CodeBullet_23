import React from 'react'
import bgImg from '../assets/images/cover-bg.jpg'

const Home = () => {
  return (
    <>
     {/* <!-- start hero --> */}
    <div className="bg-gray-100">
      <section className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
      items-center min-h-screen">
        <div className="h-full absolute top-0 left-0 z-0">
          <img src={bgImg} alt="bg" className="w-full h-full object-cover opacity-20" />
        </div>

        <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
          <div>
            <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">A better life starts with a
              beautiful
              smile.</h1>
            <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">Welcome to the Dentist Office of Dr. Thomas
              Dooley,
              where
              trust
              and comfort are priorities.</p>
            <a href="#" className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold">Book
              Appointment</a>
          </div>
        </div>
      </section>
    </div>
    {/* <!-- end hero --> */}

    {/* <!-- start about --> */}
    <section className="relative px-4 py-16 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32">
      <div className="flex flex-col lg:flex-row lg:-mx-8">
        <div className="w-full lg:w-1/2 lg:px-8">
          <h2 className="text-3xl leading-tight font-bold mt-4">Welcome to the Dentist Office of Dr. Thomas Dooley</h2>
          <p className="text-lg mt-4 font-semibold">Excellence in Dentistry in the Heart of NY</p>
          <p className="mt-2 leading-relaxed">Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non
            tincidunt ac, imperdiet in enim.
            Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus mi.</p>
        </div>

        <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
          <div className="md:flex">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
            </div>
            <div className="md:ml-8 mt-4 md:mt-0">
              <h4 className="text-xl font-bold leading-tight">Everything You Need Under One Roof</h4>
              <p className="mt-2 leading-relaxed">Our comprehensive services allow you to receive all needed dental care
                right here in our state-of-art
                office – from dental cleanings and fillings to dental implants and extractions.</p>
            </div>
          </div>

          <div className="md:flex mt-8">
            <div>
              <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
            </div>
            <div className="md:ml-8 mt-4 md:mt-0">
              <h4 className="text-xl font-bold leading-tight">Our Patient-Focused Approach</h4>
              <p className="mt-2 leading-relaxed">Your treatment plan will perfectly match your needs, lifestyle, and goals.
                Even if it’s been years
                since you last visited the dentist, we can help. Our comfortable office, compassionate team, and
                minimally-invasive treatments will help you feel completely at ease.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
        <div className="md:w-1/2 md:px-4 lg:w-1/4">
          <div className="bg-white rounded-lg border border-gray-300 p-8">
            <img src="images/teeth-whitening.svg" alt="" className="h-20 mx-auto" />

            <h4 className="text-xl font-bold mt-4">Teeth Whitening</h4>
            <p className="mt-1">Let us show you how our experience.</p>
            <a href="#" className="block mt-4">Read More</a>
          </div>
        </div>

        <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
          <div className="bg-white rounded-lg border border-gray-300 p-8">
            <img src="images/oral-surgery.svg" alt="" className="h-20 mx-auto" />

            <h4 className="text-xl font-bold mt-4">Oral Surgery</h4>
            <p className="mt-1">Let us show you how our experience.</p>
            <a href="#" className="block mt-4">Read More</a>
          </div>
        </div>

        <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
          <div className="bg-white rounded-lg border border-gray-300 p-8">
            <img src="images/painless-dentistry.svg" alt="" className="h-20 mx-auto" />

            <h4 className="text-xl font-bold mt-4">Painless Dentistry</h4>
            <p className="mt-1">Let us show you how our experience.</p>
            <a href="#" className="block mt-4">Read More</a>
          </div>
        </div>

        <div className="md:w-1/2 md:px-4 mt-4 md:mt-8 lg:mt-0 lg:w-1/4">
          <div className="bg-white rounded-lg border border-gray-300 p-8">
            <img src="images/periodontics.svg" alt="" className="h-20 mx-auto" />

            <h4 className="text-xl font-bold mt-4">Periodontics</h4>
            <p className="mt-1">Let us show you how our experience.</p>
            <a href="#" className="block mt-4">Read More</a>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- end about --> */}

    {/* <!-- start testimonials --> */}
    <section className="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32">
      <div className="flex flex-col lg:flex-row lg:-mx-8">
        <div className="w-full lg:w-1/2 lg:px-8">
          <h2 className="text-3xl leading-tight font-bold mt-4">Why choose the Mesothelioma Center?</h2>
          <p className="mt-2 leading-relaxed">Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt lacus tellus,
            sed aliquam est vehicula a. Pellentesque consectetur condimentum nulla, eleifend condimentum purus vehicula
            in. Donec convallis sollicitudin facilisis. Integer nisl ligula, accumsan non tincidunt ac, imperdiet in
            enim. Donec efficitur ullamcorper metus, eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus
            mi.</p>
        </div>

        <div className="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
          <div className="bg-gray-400 w-full h-72 rounded-lg"></div>

          <p className="italic text-sm mt-2 text-center">Aenean ante nisi, gravida non mattis semper.</p>
        </div>
      </div>
    </section>
    {/* <!-- end testimonials --> */}

    {/* <!-- start blog --> */}
    <section className="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-32">
      <div className="">
        <h2 className="text-3xl leading-tight font-bold">Health Blog</h2>
        <p className="text-gray-600 mt-2 md:max-w-lg">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.</p>

        <a href="#" title="" className="inline-block text-teal-500 font-semibold mt-6 mt:md-0">View All Posts</a>
      </div>

      <div className="md:flex mt-12 md:-mx-4">
        <div className="md:px-4 md:w-1/2 xl:w-1/4">
          <div className="bg-white rounded border border-gray-300">
            <div className="w-full h-48 overflow-hidden bg-gray-300"></div>
            <div className="p-4">
              <div className="flex items-center text-sm">
                <span className="text-teal-500 font-semibold">Business</span>
                <span className="ml-4 text-gray-600">29 Nov, 2019</span>
              </div>
              <p className="text-lg font-semibold leading-tight mt-4">Card Title</p>
              <p className="text-gray-600 mt-1">This card has supporting text below as a natural lead-in to additional content.
              </p>
              <div className="flex items-center mt-4">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                <div className="ml-4">
                  <p className="text-gray-600">By <span className="text-gray-900 font-semibold">Abby Sims</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:px-4 md:w-1/2 xl:w-1/4 mt-4 md:mt-0">
          <div className="bg-white rounded border border-gray-300 ">
            <div className="w-full h-48 overflow-hidden bg-gray-300"></div>
            <div className="p-4">
              <div className="flex items-center text-sm">
                <span className="text-teal-500 font-semibold">Business</span>
                <span className="ml-4 text-gray-600">29 Nov, 2019</span>
              </div>
              <p className="text-lg font-semibold leading-tight mt-4">Card Title</p>
              <p className="text-gray-600 mt-1">This card has supporting text below as a natural lead-in to additional
                content.
              </p>
              <div className="flex items-center mt-4">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300"></div>
                <div className="ml-4">
                  <p className="text-gray-600">By <span className="text-gray-900 font-semibold">Abby Sims</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- end blog --> */}

    {/* <!-- start cta --> */}
    <section
      className="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left">
      <div className="md:flex md:items-center md:justify-center">
        <h2 className="text-xl font-bold text-white">Get in touch with us today! Call us on: +1
          562-789-1935</h2>
        {/* <a href="#"
          className="px-8 py-4 bg-white text-blue-600 rounded inline-block font-semibold md:ml-8 mt-4 md:mt-0">Book
          Appointment</a> */}
      </div>
    </section>
    {/* <!-- end cta --> */}
    </>
  )
}

export default Home