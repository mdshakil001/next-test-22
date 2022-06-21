import Image from "next/image";
import Link from "next/link";
import Container from "../../layout/container/Container";

const OurServices = () => {
  return (
    <Container>
      <div className="w-full flex gap-10 my-12 flex-col">
        <div className="w-full font-title text-2xl lg:text-3xl xl:text-4xl text-heading">
          Our Services
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-start lg:justify-between items-center">
          <div className="hidden lg:flex mb-8 lg:mb-0 mr-0 md:mr-8 bg-white rounded-xl shadow items-center justify-center h-max">
            <Image
              loading="lazy"
              src="/assets/our_services/packages.webp"
              alt="See a doctor"
              width={360}
              height={360}
              className="rounded-xl"
              quality={100}
            />
          </div>
          <div className="flex lg:hidden mb-8 lg:mb-0 mr-0 md:mr-8 bg-white rounded-xl shadow items-center justify-center h-max">
            <Image
              loading="lazy"
              src="/assets/our_services/packages.webp"
              alt="See a doctor"
              width={310}
              height={310}
              className="rounded-xl"
              quality={100}
            />
          </div>
          <div className="flex flex-col lg:mb-0 md:w-1/2 lg:w-7/12 xl:w-8/12">
            <div className="font-title w-full text-black text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
              Our Health Screening Packages
            </div>
            <div className="w-full">
              Choosing the right health screening package should not be a
              complicated process. Our goal is to keep health screening packages
              simple and straight forward, without all the unnecessary fluff.
              Let us help you with this today!
            </div>
            <div className="flex items-center justify-center md:justify-start w-full mt-8">
              <Link href="/health-screening" passHref= {true}>
                <button className="bg-blue-400 text-white font-bold font-title text-lg px-4 py-2.5 rounded-lg w-full md:w-60 hover:bg-blue-500 hover:scale-105 transition-all duration-300">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row-reverse justify-center md:justify-start lg:justify-between items-center">
          <div className="hidden lg:flex mb-8 bg-white rounded-xl shadow items-center justify-center h-max">
            <Image
              loading="lazy"
              src="/assets/our_services/see_doc.webp"
              alt="See a doctor"
              width={360}
              height={360}
              className="rounded-xl"
              quality={100}
            />
          </div>
          <div className="flex lg:hidden mb-8 bg-white rounded-xl shadow items-center justify-center h-max">
            <Image
              loading="lazy"
              src="/assets/our_services/see_doc.webp"
              alt="See a doctor"
              width={310}
              height={310}
              className="rounded-xl"
              quality={100}
            />
          </div>
          <div className="flex flex-col lg:mb-0 md:w-1/2 lg:w-7/12 xl:w-8/12 mr-0 md:mr-8">
            <div className="font-title w-full text-black  text-xl lg:text-2xl xl:text-3xl font-bold mb-4">
              See a Doctor
            </div>
            <div className="w-full">
            Our panel of doctors have been carefully selected and are known experts in their specialist fields. You can see our doctors in person or via our telemedicine service. 
            </div>
            <div className="flex items-center justify-center md:justify-start w-full mt-8">
              <button className="bg-blue-400 text-white font-bold font-title text-lg px-4 py-2.5 rounded-lg w-full md:w-60 hover:bg-blue-500 hover:scale-105 transition-all duration-300">
                Coming Soon
              </button>
            </div>
          </div>
        </div>
        {/* <div className="w-full flex flex-col sm:flex-row flex-wrap justify-center md:justify-start lg:justify-between items-center">
          <div className="hidden lg:flex mb-8 lg:mb-0 mr-0 md:mr-8 bg-white rounded-xl shadow items-center justify-center h-max">
            <Image
              src="/assets/our_services/webinar.jpg"
              alt="See a doctor"
              width="360"
              height="360"
              className="rounded-xl"
              quality={100}
            />
          </div>
          <div className="flex lg:hidden mb-8 lg:mb-0 mr-0 md:mr-8 bg-white rounded-xl shadow items-center justify-center h-max">
            <Image
              src="/assets/our_services/webinar.jpg"
              alt="See a doctor"
              width="310"
              height="310"
              className="rounded-xl"
              quality={100}
            />
          </div>
          <div className="flex flex-col lg:mb-0 md:w-1/2 lg:w-7/12 xl:w-8/12">
            <div className="font-title w-full text-black text-3xl font-bold mb-4">
              Join our Upcoming Webinar
            </div>
            <div className="w-full">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Officiis, est quidem? Inventore perspiciatis obcaecati libero
              voluptatibus neque exercitationem rerum repellat similique
              accusantium maiores quos adipisci qui aliquid numquam sit officiis
              labore iusto corporis incidunt dicta soluta porro, eum est
              delectus!
            </div>
            <div className="flex items-center justify-center md:justify-start w-full mt-8">
              <button className="btn btn-info w-full md:w-60">
                Learn more
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </Container>
  );
};

export default OurServices;
