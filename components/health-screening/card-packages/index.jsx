import { MdArrowRight, MdArrowDropDown } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { BsDash } from "react-icons/bs";
import { useState } from "react";

const getDiscount = (final, original) => {
  return Math.round(((original - final) / original) * 100);
};
const CardPackages = ({ packages, onClick }) => {
  const [toggleOpenId, setToggleOpenId] = useState([]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
      {" "}
      {/* CARDS CONTAINER */}
      {packages.map((p) => (
        <div
          key={p.id}
          className="flex flex-col justify-between min-h-96 h-max overflow-visible rounded-xl shadow-xl border border-secondary-100">
          <div className="flex flex-col justify-between h-full">
            {/* TITLE */}
            <div className="flex flex-col justify-between">
              <div className="relative overflow-hidden bg-secondary-10 rounded-t-xl pb-4 pt-8 px-6 font-title text-heading text-lg">
                {p.title}
                <div className="shadow font-title rotate-45 absolute text-sm h-6 w-36 bg-success text-white top-5 -right-11 flex items-center justify-center overflow-hidden">
                  {getDiscount(
                    p.discountedPrice.substring(1),
                    p.price.substring(1)
                  )}
                  % OFF
                </div>
              </div>
              {/* BODY */}
              <div className="mx-6 my-4">
                {p.categories.map((c, idx) => (
                  <details key={c.id} className="my-2">
                    {c.description != "" ? (
                      <summary
                        className="flex list-none tooltip tooltip-neutral font-title select-none cursor-pointer text-slate-900"
                        data-tip={c.description}
                        onClick={() =>
                          setToggleOpenId((prev) => {
                            if (prev.includes(`detail${idx}${p.id}`))
                              return prev.filter(
                                (value) => value != `detail${idx}${p.id}`
                              );
                            else return [...prev, `detail${idx}${p.id}`];
                          })
                        }>
                        {toggleOpenId.includes(`detail${idx}${p.id}`) ? (
                          <MdArrowDropDown size="28px" color="#F58232" />
                        ) : (
                          <MdArrowRight size="28px" color="#F58232" />
                        )}
                        {c.name}
                      </summary>
                    ) : (
                      <summary
                        className="flex list-none font-title select-none cursor-pointer text-slate-900"
                        onClick={() =>
                          setToggleOpenId((prev) => {
                            if (prev.includes(`detail${idx}${p.id}`))
                              return prev.filter(
                                (value) => value != `detail${idx}${p.id}`
                              );
                            else return [...prev, `detail${idx}${p.id}`];
                          })
                        }>
                        {toggleOpenId.includes(`detail${idx}${p.id}`) ? (
                          <MdArrowDropDown size="28px" color="#F58232" />
                        ) : (
                          <MdArrowRight size="28px" color="#F58232" />
                        )}
                        {c.name}
                      </summary>
                    )}
                    {c.subcategories.length ? (
                      <div>
                        {c.subcategories.map((sub, idx) => (
                          <div key={idx}>
                            <div
                              className="flex items-start ml-4 text-left tooltip tooltip-neutral text-slate-700 cursor-pointer my-1"
                              data-tip={sub.description}>
                              <FaDotCircle
                                size={8}
                                className="mt-2 mr-2"
                                color="#91C9E3"
                              />
                              {sub.name}:
                            </div>
                            <div className="w-full text-sm text-typo flex flex-wrap ml-4">
                              <BsDash
                                size={8}
                                className="mt-2 mr-2"
                                color="#58595B"
                              />
                              {sub.services.map((s, idx) =>
                                s.description != "" ? (
                                  <span
                                    key={idx}
                                    className="tooltip tooltip-neutral cursor-pointer text-slate-500"
                                    data-tip={s.description}>
                                    {s.name}
                                  </span>
                                ) : (
                                  <span
                                    key={idx}
                                    className="cursor-pointer text-slate-500">
                                    {s.name}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>
                        {c.services.map((s, idx) => (
                          <div key={idx} className="text-zinc-400 ml-4">
                            {s.description != "" ? (
                              <span
                                key={idx}
                                className="tooltip tooltip-neutral flex items-start cursor-pointer text-slate-700"
                                data-tip={s.description}>
                                <FaDotCircle
                                  size={8}
                                  className="mt-2 mr-2"
                                  color="#91C9E3"
                                />
                                <div className="w-full">{s.name}</div>
                              </span>
                            ) : (
                              <span
                                key={idx}
                                className="flex items-start cursor-pointer text-slate-700">
                                <FaDotCircle
                                  size={8}
                                  className="mt-2 mr-2"
                                  color="#91C9E3"
                                />
                                <div className="w-full">{s.name}</div>
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </details>
                ))}
              </div>
            </div>
          </div>
          {/* FOOTER */}
          <div className="px-6 pb-12 flex items-center w-full self-end justify-end">
            <div className="flex text-xl">
              <s className="font-title mr-4">{p.price}</s>
              <span className="font-title text-primary-100">
                {p.discountedPrice}
              </span>
            </div>
            <button className="btn-sec-sm" onClick={() => onClick(p.routeName)}>
              Select
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPackages;
