import React from "react";
import { TiTick } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";

const PackageTable = ({ perks, packages, onClick }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col border py-2 px-4 w-96 mt-32">
        {perks.map((perk, idx) => {
          return (
            <div key={idx} className="flex flex-col py-1">
              <div className="font-title text-xl text-black max-h-16 min-h-6">
                {perk.name}
              </div>
              {/* <div className="italic py-1 max-h-16 min-h-6">
                {perk.description}
              </div> */}
              <section className="py-1">
                {perk.services.map((service, idx) => {
                  return (
                    <div className="py-0.5" key={idx}>
                      <div className="font-semibold max-h-16 flex items-center">
                        {" "}
                        - {service.name}
                      </div>
                      {/* <div className="ml-3 italic max-h-16 min-h-6 flex items-center">
                        {service.description}
                      </div> */}
                    </div>
                  );
                })}
              </section>
              <section className="py-1">
                {perk.subcategories.map((subcategory, idx) => {
                  return (
                    <div className="py-0.5" key={idx}>
                      {/* <div className="italic max-h-16 min-h-6">
                        {subcategory.description}
                      </div> */}
                      {subcategory.services.map((service, idx) => {
                        return (
                          <div className="py-0.5" key={idx}>
                            <div className="font-semibold max-h-16 min-h-6 flex items-center">
                              {" "}
                              - {service.name}
                            </div>
                            {/* <div className="ml-3 italic max-h-16 min-h-6 flex items-center">
                              {service.description}
                            </div> */}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </section>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row">
        {packages.map((pack, idx) => {
          return (
            <div className="border py-2 px-4 w-96 mt-20" key={idx}>
              <div className="font-bold text-2xl h-20">{pack.title}</div>
              {pack.categories.map((category, idx) => {
                return (
                  <div key={idx} className="flex flex-col py-2">
                    <section className="py-1">
                      {category.services.map((service, idx) => {
                        return (
                          <div
                            className={`py-0.5 max-h-16 ${"min-h-" + service.length * 6
                              }}`}
                            key={idx}>
                            {service.isIncluded ? (
                              <div className="">
                                <TiTick size="28px" color="green" />
                              </div>
                            ) : (
                              <div className="">
                                <MdOutlineCancel size="28px" color="red" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </section>
                    <section className="py-1">
                      {category.subcategories.map((subcategory, idx) => {
                        return (
                          <div className="py-0.5" key={idx}>
                            {subcategory.services.map((service, idx) => {
                              return (
                                <div
                                  className={`py-0.5 max-h-16 ${"min-h-['" + service.length * 1.5 + "rem']"
                                    }}`}
                                  key={idx}>
                                  {service.isIncluded ? (
                                    <div className="">
                                      <TiTick size="28px" color="green" />
                                    </div>
                                  ) : (
                                    <div className="">
                                      <MdOutlineCancel size="28px" color="red" />
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        );
                      })}
                    </section>
                    <hr />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackageTable;
