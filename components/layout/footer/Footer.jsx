import Link from "next/link";
import Image from "next/image";
import Container from "../container/Container";
// import { BsTwitter, BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="font-general bg-primary-10 flex flex-col items-center">
      <Container>
        <footer className="w-full footer pt-16 pb-10 md:px-0 text-typo">
          <div>
            <span className="footer-title font-title">Care at myHC</span>
            {/* <Link href="/see-a-doctor">
              <a className="link link-hover">See a Doctor</a>
            </Link> */}
            <Link href="/health-screening">
              <a className="link link-hover">Health Screening</a>
            </Link>
            {/* <Link href="/telemedicine">
              <a className="link link-hover">Telemed (Coming Soon)</a>
            </Link> */}
          </div>
          <div>
            <span className="footer-title font-title">About Us</span>
            <Link href="/our-story">
              <a className="link link-hover">Our Story</a>
            </Link>
            {/* <Link href="/the-team">
              <a className="link link-hover">The Team</a>
            </Link> */}
            <Link href="/contact-us">
              <a className="link link-hover">Contact Us</a>
            </Link>
          </div>
          <div>
            <span className="footer-title font-title">Learn More</span>
            <Link href="/articles">
              <a className="link link-hover">Articles</a>
            </Link>
            {/* <Link href="/webinar-series">
              <a className="link link-hover">Webinar Series</a>
            </Link> */}
          </div>
        </footer>
      </Container>
      <footer className="flex flex-col items-center justify-center footer mb-24 md:mb-16 px-10 md:px-0 text-typo border-base-300 max-w-screen-xl">
        <div>
          <Link href="/">
            <a>
              <Image
                loading="lazy"
                src="/assets/images/logo_primary.svg"
                width={220}
                height={80}
                alt="logo"
                quality={100}
              />
            </a>
          </Link>
        </div>
        <div>Copyright 2022. All rights reserved.</div>
        {/* <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <BsTwitter size="24px" />

            <BsYoutube size="24px" />

            <FaFacebookF size="24px" />
          </div>
        </div> */}
      </footer>
    </div>
  );
};

export default Footer;
