import React from "react";
import Image from "next/image";
import Link from "next/link";
const Banner = () => {
  return (
    <Link href="/health-screening" passHref>
      <div className="w-full xl:w-page h-max block self-center cursor-pointer">
        <div className="md:hidden">
          <Image
            loading="lazy"
            src="/assets/images/banner/myhc_banner_sm.webp"
            width={640}
            height={933}
            quality={100}
            layout="responsive"
            alt="MHC Banner"
          />
        </div>
        <div className="hidden md:block lg:hidden">
          <Image
            loading="lazy"
            src="/assets/images/banner/myhc_banner_md.webp"
            width={751}
            height={596}
            quality={100}
            layout="responsive"
            alt="MHC Banner"
          />
        </div>
        <div className="hidden lg:block xl:hidden">
          <Image
            loading="lazy"
            src="/assets/images/banner/myhc_banner_lg.webp"
            width={1936}
            height={668}
            quality={100}
            layout="responsive"
            alt="MHC Banner"
          />
        </div>
        <div className="hidden xl:block">
          <Image
            src="/assets/images/banner/myhc_banner_xl.webp"
            width={2560}
            height={1305}
            quality={100}
            layout="responsive"
            alt="MHC Banner"
            priority
          />
        </div>
      </div>
    </Link>
  );
};

export default Banner;
