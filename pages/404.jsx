import Container from "components/layout/container/Container";
import Layout from "components/layout/Layout";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneHome } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";

const Custom404 = () => {
  return (
    <Container>
      <div className="w-full h-full flex flex-col items-center min-h-screen pt-40">
        <Image
          src="/assets/images/logo_primary.svg"
          className=""
          alt="logo-primary"
          width={320}
          height={120}
          quality={100}
        />
        <div className="text-6xl text-typo text-center mt-8">404</div>
        <div className="text-2xl text-typo text-center">
          The page you were looking for does not exist.
        </div>
        <div className="flex items-center justify-center w-full mt-8 font-general flex-wrap gap-x-8 gap-y-3">
          <Link href="/" passHref>
            <button className="btn btn-info bg-primary-100 border-none hover:bg-primary-100 hover:scale-105 text-white font-normal rounded-lg w-full sm:w-40 max-w-btn shadow-lg flex items-center justify-center">
              <AiTwotoneHome color="#fff" size={16} className="mr-2" />
              <span className="mt-0.5">Home</span>
            </button>
          </Link>
          <Link href="/contact-us" passHref>
            <button className="btn btn-info border-none hover:scale-105 font-normal rounded-lg w-full sm:w-40 max-w-btn shadow-lg flex items-center justify-center">
              <BiSupport color="#000" size={16} className="mr-2" />
              <span className="mt-0.5">Contact Us</span>
            </button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Custom404;
