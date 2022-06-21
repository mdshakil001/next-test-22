import React, { useEffect, useState } from "react";
import Link from "next/link";
import { PACKAGES, SERVICES, BENEFITS } from "../../../lib/data";
import { TiTick } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import { MdOutlineMedicalServices, MdMedicalServices } from "react-icons/md";
import { currencyFormatter } from "lib/helper/Currency";

const getDiscount = (final, original) => {
  return Math.round(((original - final) / original) * 100);
};

const ComparisonList = ({ compareIds }) => {
  const [comparePackageList, setComparePackageList] = useState([]);
  const [serviceList, setServiceList] = useState(SERVICES);
  const [benefitList, setBenefitList] = useState(BENEFITS);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  });

  useEffect(() => {
    if (compareIds != []) {
      const compList = compareIds.map((compId) => {
        const matchedPack = PACKAGES.filter((pack) => {
          return pack.id == compId;
        });
        if (matchedPack[0]) return matchedPack[0];
      });
      setComparePackageList(compList);
    }
  }, [compareIds]);

  return compareIds && compareIds.length > 1 ? (
    <div className="mb-20 mt-0 flex flex-row">
      <div className="flex flex-col w-full">
        <div
          className={`sticky top-20 bg-white z-30 pl-[25%] hidden xl:flex flex-row 
          w-full transition-all duration-500 ${show && "top-0"}`}
        >
          {comparePackageList.map((pack, ind, comparePackageList) => {
            if (pack != undefined)
              return (
                <div
                  className={`relative min-w-36 bg-secondary-10 rounded-t-2xl font-title text-md pt-6 pb-4 px-3 
                  min-h-28 w-1/2 flex flex-col items-center justify-between text-center 
                  ${ind == comparePackageList.length - 1 ? "mr-0" : "mr-2"}`}
                  key={pack.id}
                >
                  {pack.discountedPrice != "" && (
                    <div className="font-title absolute text-xs h-5 w-full bg-primary-100 text-white top-0 right-0 flex items-center justify-center rounded-t-xl">
                      {getDiscount(pack.discountedPrice.amount, pack.price.amount)}% OFF
                    </div>
                  )}
                  {pack.name}
                  {pack.discountedPrice != "" ? (
                    <div className="flex text-lg">
                      <s className="font-title mr-4">{pack.price.ccyCode + currencyFormatter(pack.price.amount)}</s>
                      <span className="font-title text-primary-100">
                        {pack.discountedPrice.ccyCode + currencyFormatter(pack.discountedPrice.amount)}
                      </span>
                    </div>
                  ) : (
                    <div className="flex text-lg w-full text-center">
                      <div className="font-title w-full text-center text-primary-100">
                        {pack.price.ccyCode + (pack.price.amount && currencyFormatter(pack.price.amount))}
                      </div>
                    </div>
                  )}
                  <Link
                    href={{
                      pathname: "[packageId]",
                      query: { packageId: pack.routeName },
                    }}
                    passHref
                  >
                    <button className="py-2 px-6 rounded-lg bg-primary-100 text-white border-0 mt-2">BUY</button>
                  </Link>
                </div>
              );
            else return <div></div>;
          })}
        </div>
        {/* lg desktop */}
        <div
          className={`sticky top-20 bg-white z-30 pl-[25%] hidden lg:flex xl:hidden 
          flex-row w-full transition-all duration-500 ${show && "top-0"}`}
        >
          {comparePackageList.map((pack, ind) => {
            if (pack != undefined && ind < 3)
              return (
                <div
                  className={`relative min-w-36 bg-secondary-10 rounded-t-2xl font-title text-md 
                  pt-6 pb-4 px-4 min-h-28 w-1/2 flex flex-col items-center justify-between text-center 
                  ${ind == comparePackageList.length - 1 || ind == 2 ? "mr-0" : "mr-2"}`}
                  key={pack.id}
                >
                  {pack.discountedPrice != "" && (
                    <div className="font-title absolute text-xs h-5 w-full bg-primary-100 text-white top-0 right-0 flex items-center justify-center rounded-t-xl">
                      {getDiscount(pack.discountedPrice.amount, pack.price.amount)}% OFF
                    </div>
                  )}
                  {pack.name}
                  {pack.discountedPrice != "" ? (
                    <div className="flex text-lg">
                      <s className="font-title mr-4">{pack.price.ccyCode + currencyFormatter(pack.price.amount)}</s>
                      <span className="font-title text-primary-100">
                        {pack.discountedPrice.ccyCode + currencyFormatter(pack.discountedPrice.amount)}
                      </span>
                    </div>
                  ) : (
                    <div className="flex text-lg w-full text-center">
                      <div className="font-title w-full text-center text-primary-100">
                        {pack.price.ccyCode + (pack.price.amount && currencyFormatter(pack.price.amount))}
                      </div>
                    </div>
                  )}
                  <Link
                    href={{
                      pathname: "[packageId]",
                      query: { packageId: pack.routeName },
                    }}
                    passHref
                  >
                    <button className="py-2 px-6 rounded-lg bg-primary-100 text-white border-0 mt-2">BUY</button>
                  </Link>
                </div>
              );
            else return <div></div>;
          })}
        </div>
        {/* mobile & tablet */}
        <div
          className={`sticky top-20 z-30 bg-white pl-[25%] hidden md:flex lg:hidden flex-row w-full transition-all duration-500 ${
            show && "top-0"
          }`}
        >
          {comparePackageList.map((pack, ind) => {
            if (pack != undefined && ind < 2)
              return (
                <div
                  className={`relative min-w-36 bg-secondary-10 rounded-t-2xl font-title text-md pt-6 pb-4 px-4 
                  min-h-28 w-1/2 flex flex-col items-center justify-between text-center 
                  ${ind == comparePackageList.length - 1 || ind == 1 ? "mr-0" : "mr-2"}`}
                  key={pack.id}
                >
                  {pack.discountedPrice != "" && (
                    <div className="font-title absolute text-xs h-5 w-full bg-primary-100 text-white top-0 right-0 flex items-center justify-center rounded-t-xl">
                      {getDiscount(pack.discountedPrice.amount, pack.price.amount)}% OFF
                    </div>
                  )}
                  {pack.name}
                  {pack.discountedPrice != "" ? (
                    <div className="flex text-lg">
                      <s className="font-title mr-4">{pack.price.ccyCode + currencyFormatter(pack.price.amount)}</s>
                      <span className="font-title text-primary-100">
                        {pack.discountedPrice.ccyCode + currencyFormatter(pack.discountedPrice.amount)}
                      </span>
                    </div>
                  ) : (
                    <div className="flex text-lg w-full text-center">
                      <div className="font-title w-full text-center text-primary-100">
                        {pack.price.ccyCode + (pack.price.amount && currencyFormatter(pack.price.amount))}
                      </div>
                    </div>
                  )}
                  <Link
                    href={{
                      pathname: "[packageId]",
                      query: { packageId: pack.routeName },
                    }}
                    passHref
                  >
                    <button className="py-2 px-6 rounded-lg bg-primary-100 text-white border-0 mt-2">BUY</button>
                  </Link>
                </div>
              );
            else return <div></div>;
          })}
        </div>
        {/* mobile */}
        <div
          className={`sticky top-20 bg-white z-30 flex md:hidden flex-row w-full transition-all duration-500 ${
            show && "top-0"
          }`}
        >
          {comparePackageList.map((pack, ind) => {
            if (pack != undefined && ind < 2)
              return (
                <div
                  className={`relative min-w-36 bg-secondary-10 rounded-t-2xl font-title text-sm pt-6 pb-4 
                  px-2 min-h-28 w-1/2 flex flex-col items-center justify-between text-center 
                  ${ind == comparePackageList.length - 1 || ind == 1 ? "mr-0" : "mr-2"}`}
                  key={pack.id}
                >
                  {pack.discountedPrice != "" && (
                    <div className="font-title absolute text-xs h-5 w-full bg-primary-100 text-white top-0 right-0 flex items-center justify-center rounded-t-xl">
                      {getDiscount(pack.discountedPrice.amount, pack.price.amount)}% OFF
                    </div>
                  )}
                  {pack.name}
                  {pack.discountedPrice != "" ? (
                    <div className="flex text-md mt-2">
                      <s className="font-title mr-4">{pack.price.ccyCode + currencyFormatter(pack.price.amount)}</s>
                      <span className="font-title text-primary-100">
                        {pack.discountedPrice.ccyCode + currencyFormatter(pack.discountedPrice.amount)}
                      </span>
                    </div>
                  ) : (
                    <div className="flex text-md mt-2 w-full text-center">
                      <div className="font-title w-full text-center text-primary-100">
                        {pack.price.ccyCode + (pack.price.amount && currencyFormatter(pack.price.amount))}
                      </div>
                    </div>
                  )}
                  <Link
                    href={{
                      pathname: "[packageId]",
                      query: { packageId: pack.routeName },
                    }}
                    passHref
                  >
                    <button className="py-2 px-6 rounded-lg bg-primary-100 text-white border-0 mt-2">BUY</button>
                  </Link>
                </div>
              );
            else return <div></div>;
          })}
        </div>
        <div className="flex flex-col">
          {serviceList.map((service) => {
            return (
              <div key={service.id} tabIndex={service.id - 1} className="collapse collapse-arrow w-full text-center">
                <input type="checkbox" defaultChecked />
                <div className="border-2 collapse-title font-medium flex items-center justify-center text-sm md:text-md 2xl:text-lg">
                  <MdOutlineMedicalServices size={20} className="mr-2" />
                  {service.name}
                  {service.profile ? " (Blood Investigation)" : ""}
                </div>
                <div className="collapse-content" style={{ paddingBottom: 0, paddingLeft: 0, paddingRight: 0 }}>
                  {benefitList.map((benefit) => {
                    if (benefit.serviceId == service.id) {
                      return (
                        <div className="flex items-center justify-center bg-secondary-5" key={benefit.id}>
                          {/* hide benefits in mobile view */}
                          <em className="hidden md:flex w-1/4 h-full py-2 xl:py-4 px-6 items-center justify-center">
                            {benefit.name}
                          </em>
                          {/* xl desktop */}
                          <div className="w-3/4 hidden h-full xl:flex items-center justify-start">
                            {comparePackageList.map((pack, ind, comparePackageList) => {
                              if (pack != undefined)
                                return (
                                  <div
                                    className={`min-w-36 bg-secondary-5 text-info px-4 py-4 h-full w-1/2 flex 
                                    items-center justify-center ${
                                      ind == comparePackageList.length - 1 ? "mr-0" : "mr-2"
                                    }`}
                                    key={pack.id}
                                  >
                                    {pack.benefitIds.includes(benefit.id) ? (
                                      benefit.description ? (
                                        <div className="w-full text-center">{benefit.description}</div>
                                      ) : (
                                        <TiTick size={30} className="" color="#36D399" />
                                      )
                                    ) : pack.optionalBenefitIds.includes(benefit.id) ? (
                                      "Optional"
                                    ) : (
                                      <ImCross size={16} className="" color="#F87272" />
                                    )}
                                  </div>
                                );
                              else return <div></div>;
                            })}
                          </div>
                          {/* lg desktop */}
                          <div className="w-3/4 hidden h-full lg:flex xl:hidden items-center justify-start">
                            {comparePackageList.map((pack, ind) => {
                              if (pack != undefined && ind < 3)
                                return (
                                  <div
                                    className={`min-w-36 bg-secondary-5 text-info px-4 py-3 h-full w-1/2 flex items-center justify-center ${
                                      ind == comparePackageList.length - 1 || ind == 2 ? "mr-0" : "mr-2"
                                    }`}
                                    key={pack.id}
                                  >
                                    {pack.benefitIds.includes(benefit.id) ? (
                                      benefit.description ? (
                                        <div className="w-full text-center">{benefit.description}</div>
                                      ) : (
                                        <TiTick size={30} className="" color="#36D399" />
                                      )
                                    ) : pack.optionalBenefitIds.includes(benefit.id) ? (
                                      "Optional"
                                    ) : (
                                      <ImCross size={16} className="" color="#F87272" />
                                    )}
                                  </div>
                                );
                              else return <div></div>;
                            })}
                          </div>
                          {/* mobile & tablet */}
                          <div className="grow md:w-3/4 flex h-full flex-col lg:hidden items-center justify-start">
                            <em className="flex md:hidden w-full p-2 bg-white border text-xs items-center justify-center">
                              {benefit.name}
                            </em>
                            <div className="w-full flex items-center justify-start">
                              {comparePackageList.map((pack, ind) => {
                                if (pack != undefined && ind < 2)
                                  return (
                                    <div
                                      className={`min-w-36 bg-secondary-5 text-info text-sm px-4 py-4 h-full w-1/2 flex items-center justify-center ${
                                        ind == comparePackageList.length - 1 || ind == 1 ? "mr-0" : "mr-2"
                                      }`}
                                      key={pack.id}
                                    >
                                      {pack.benefitIds.includes(benefit.id) ? (
                                        benefit.description ? (
                                          <div className="w-full text-center">{benefit.description}</div>
                                        ) : (
                                          <TiTick size={30} className="" color="#36D399" />
                                        )
                                      ) : pack.optionalBenefitIds.includes(benefit.id) ? (
                                        "Optional"
                                      ) : (
                                        <ImCross size={16} className="" color="#F87272" />
                                      )}
                                    </div>
                                  );
                                else return <div></div>;
                              })}
                            </div>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div>
      <div className="font-title text-xl md:text-2xl 3xl:text-4xl text-typo mt-8 text-center">
        Not enough packages selected to compare. View packages here to compare.
      </div>
      <div className="flex items-center justify-center w-full mt-8 font-general flex-wrap gap-x-8 gap-y-3">
        <Link href="/health-screening" passHref>
          <button className="btn btn-info bg-primary-100 border-none hover:bg-primary-100 hover:scale-105 text-white font-normal rounded-lg w-full sm:w-56 max-w-btn shadow-lg flex items-center justify-center">
            <MdMedicalServices color="#fff" size={20} className="mr-2" />
            <span className="mt-0.5">View Packages</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ComparisonList;
