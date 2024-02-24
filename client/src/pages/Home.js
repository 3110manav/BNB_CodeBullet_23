import React from 'react';
import bgImg from '../assets/images/cover-bg.jpg';
import EndImg from '../assets/images/endangered.jpeg';
import ComImg from '../assets/images/Community.jpg'
import HabImg from '../assets/images/Animal.jpg';
import WildImg from '../assets/images/wildlife.jpeg';

const Home = () => {
  return (
    <>
      {/* <!-- start hero --> */}
      <div className="bg-gray-100">
        <section className="cover bg-blue-teal-gradient relative bg-blue-600 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 overflow-hidden py-48 flex
      items-center min-h-screen ">
          <div className="h-full absolute top-0 right-0 left-0 z-0 opacity-20"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>
          
            
          </div>

          <div className="lg:w-3/4 xl:w-2/4 relative z-10 h-100 lg:mt-16">
            <div>
              <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">Protect Wildlife, Preserve Nature.</h1>
              <p className="text-blue-100 text-xl md:text-2xl leading-snug mt-4">Welcome to our platform dedicated to animal awareness and conservation.</p>
              <a href="#" className="px-8 py-4 bg-teal-500 text-white rounded inline-block mt-8 font-semibold">EXPLORE</a>
            </div>
          </div>
        </section>
      </div>
      {/* <!-- end hero --> */}

      {/* <!-- start about --> */}
      <section className="relative px-4 py-10 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:-mx-8">
          <div className="w-full lg:w-1/2 lg:px-8">
            <h2 className="text-3xl leading-tight font-bold mt-4">Our Mission</h2>
            <p className="text-lg mt-4 font-semibold">Protecting Wildlife, Preserving Habitats.</p>
            <p className="mt-2 leading-relaxed">We strive to raise awareness about endangered species, advocate for their protection, and conserve natural habitats to ensure a sustainable future for all life forms on our planet.</p>
          </div>

          <div className="w-full lg:w-1/2 lg:px-8 mt-12 lg:mt-0">
            <div className="md:flex">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
              </div>
              <div className="md:ml-8 mt-4 md:mt-0">
                <h4 className="text-xl font-bold leading-tight">Our Approach</h4>
                <p className="mt-2 leading-relaxed">We work closely with local communities, partner organizations, and government agencies to implement conservation projects, conduct research, and educate the public about the importance of biodiversity and ecosystem preservation.</p>
              </div>
            </div>

            <div className="md:flex mt-8">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-full"></div>
              </div>
              <div className="md:ml-8 mt-4 md:mt-0">
                <h4 className="text-xl font-bold leading-tight">Join Us</h4>
                <p className="mt-2 leading-relaxed">Together, we can make a difference. Join our community, volunteer for conservation efforts, or donate to support our cause. Every action counts in the fight to protect and preserve our planet's biodiversity.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex md:flex-wrap mt-24 text-center md:-mx-4">
    <div className="md:w-2/3 md:px-4 lg:w-1/3">
        <div className="bg-white rounded-lg border border-gray-300 pt-8 pr-6 pl-6 pb-12"> 
        {/* <!-- Increased padding for height --> */}
            <img src={HabImg} alt="bg" className="h-full mx-auto w-full rounded-lg" />
            <h4 className="text-xl font-bold mt-4">Wildlife protection</h4>
            <p className="mt-1">We educate people on how to we protect and restore natural habitats.</p>
            <a href="#" className="block mt-4">Read More</a>
        </div>
    </div>

    <div className="md:w-2/3 md:px-4 lg:w-1/3">
        <div className="bg-white rounded-lg border border-gray-300 pt-8 pr-6 pl-6 pb-12"> 
        {/* <!-- Increased padding for height --> */}
            <img src={EndImg} alt="bg" className="h-full mx-auto w-full rounded-lg" />
            <h4 className="text-xl font-bold mt-4">Endangered Species</h4>
            <p className="mt-1">Education on how we can care for injured animals and orphaned animals.</p>
            <a href="#" className="block mt-4">Read More</a>
        </div>
    </div>

    <div className="md:w-2/3 md:px-4 lg:w-1/3">
        <div className="bg-white rounded-lg border border-gray-300 pt-8 pr-6 pl-6 pb-12"> 
        {/* <!-- Increased padding for height --> */}
            <img src={ComImg} alt="bg" className="h-full mx-auto w-full rounded-lg" />
            <h4 className="text-xl font-bold mt-4">Habitat Conservation</h4>
            <p className="mt-1">We educate people on how to take are and  protect, restore natural wildlife .</p>
            <a href="#" className="block mt-4">Read More</a>
        </div>
    </div>


          {/* <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 p-8">
            <img src={WildImg} alt="bg" className="h-20 mx-auto" />

              <h4 className="text-xl font-bold mt-4">Endangered Species</h4>
              <p className="mt-1">Discover the species which are rare and we're working to protect.</p>
              <a href="#" className="block mt-4">Read More</a>
            </div>
          </div>

          <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 p-8">
            <img src={EndImg} alt="bg" className="h-20 mx-auto" />


              <h4 className="text-xl font-bold mt-4">Wildlife protection</h4>
              <p className="mt-1">Education on how we can care for injured animals and orphaned animals.</p>
              <a href="#" className="block mt-4">Read More</a>
            </div>
          </div>

          <div className="md:w-1/2 md:px-4 mt-4 md:mt-0 lg:w-1/4">
            <div className="bg-white rounded-lg border border-gray-300 p-8">
            <img src={HabImg} alt="bg" className="h-20 mx-auto" />


              <h4 className="text-xl font-bold mt-4">Community Engagement</h4>
              <p className="mt-1">Discover different activities carried out on various events how you can get involved.</p>
              <a href="#" className="block mt-4">Read More</a>
            </div>
          </div> */}

        </div>
      </section>
      {/* <!-- end about --> */}

      {/* <!-- start testimonials --> */}
      <section className="relative bg-gray-100 px-2 sm:px-6 lg:px-14 xl:px-38 2xl:px-64 py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:-mx-8">
          <div className="w-full lg:w-1/2 lg:px-8">
            <h2 className="text-3xl leading-tight font-bold mt-4">Why Support Wildlife Conservation?</h2>
            <p className="mt-2 leading-relaxed">Wildlife conservation is crucial for maintaining ecological balance, preserving biodiversity, and ensuring the survival of future generations. By supporting conservation efforts, you contribute to the protection of endangered species and the conservation of their habitats.</p>
          </div>

          <div className="w-full md:mx-auto lg:w-1/2 lg:px-8 mt:md-0">
            <div className="bg-gray-400 w-full h-82 rounded-lg">
              <img className='w-full h-full rounded-md' src='https://images.unsplash.com/photo-1589656966895-2f33e7653819?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
            </div>

            <p className="italic text-sm mt-2 text-center">"The wildlife and its habitat cannot speak, so we must and we will." - Theodore Roosevelt</p>
          </div>
        </div>
      </section>
      {/* <!-- end testimonials --> */}

      {/* <!-- start cta --> */}
      
      {/* <section className="relative bg-blue-teal-gradient px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-12 text-center md:text-left">
        <div className="md:flex md:items-center md:justify-center">
          <h2 className="text-xl font-bold text-white">Join Us in Protecting Wildlife Today!</h2>
          <a href="#" className="px-8 py-4 bg-white text-blue-600 rounded inline-block font-semibold md:ml-8 mt-4 md:mt-0">Get Involved</a>
        </div>
      </section> */}

      {/* <!-- end cta --> */}
    </>
  );
};

export default Home;
