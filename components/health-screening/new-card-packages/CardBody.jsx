import { useState } from "react";

import { FaDotCircle } from "react-icons/fa";
import { MdArrowRight, MdArrowDropDown } from "react-icons/md";

const CardBody = ({ healthPackage }) => {
  const [toggleOpenId, setToggleOpenId] = useState([]);
  // console.log(healthPackage);
  return (
    <div className="mx-6 my-4">
      {healthPackage?.services.map((s, idx) => (
        <div
          key={s.id}
          className="collapse -mt-3"
          onClick={() =>
            setToggleOpenId((prev) => {
              if (prev.includes(`detail${idx}${healthPackage.id}`))
                return prev.filter((value) => value != `detail${idx}${healthPackage.id}`);
              else return [...prev, `detail${idx}${healthPackage.id}`];
            })
          }
        >
          <input type="checkbox" />
          <div className="collapse-title flex items-center px-0">
            {toggleOpenId.includes(`detail${idx}${healthPackage.id}`) ? (
              <MdArrowDropDown size="28px" color="#F58232" />
            ) : (
              <MdArrowRight size="28px" color="#F58232" />
            )}
            <p>{s.name}</p>
          </div>
          <div className="collapse-content -mt-4 ml-3">
            {s.benefits.map((b) => (
              <div className="flex" key={b.id}>
                <FaDotCircle size={8} className="mt-2 mr-2 flex-none" color="#91C9E3" />
                <p className="text-gray-400">
                  {b.name}
                  {b.description && <span>: {b.description}</span>}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
      {/* {p?.services.map((s, idx) => (
                  <details key={s.id} className="my-2">
                    {s.description != "" ? (
                      <summary
                        className="flex list-none tooltip font-title select-none cursor-pointer text-slate-900 text-left"
                        data-tip={s.description}
                        onClick={() =>
                          setToggleOpenId((prev) => {
                            if (prev.includes(`detail${idx}${p.id}`))
                              return prev.filter((value) => value != `detail${idx}${p.id}`);
                            else return [...prev, `detail${idx}${p.id}`];
                          })
                        }
                      >
                        {toggleOpenId.includes(`detail${idx}${p.id}`) ? (
                          <MdArrowDropDown size="28px" color="#F58232" />
                        ) : (
                          <MdArrowRight size="28px" color="#F58232" />
                        )}
                        {s.name}
                      </summary>
                    ) : (
                      <summary
                        className="flex list-none font-title select-none cursor-pointer text-slate-900"
                        onClick={() =>
                          setToggleOpenId((prev) => {
                            if (prev.includes(`detail${idx}${p.id}`))
                              return prev.filter((value) => value != `detail${idx}${p.id}`);
                            else return [...prev, `detail${idx}${p.id}`];
                          })
                        }
                      >
                        {toggleOpenId.includes(`detail${idx}${p.id}`) ? (
                          <MdArrowDropDown size="28px" color="#F58232" />
                        ) : (
                          <MdArrowRight size="28px" color="#F58232" />
                        )}
                        {s.name}
                      </summary>
                    )}
                    {s.benefits.map((b) => (
                      <div key={b.id}>
                        {b.description !== "" ? (
                          <div
                            className="flex justify-between items-center tooltip tooltip-neutral cursor-help 
                            ml-4 text-left text-slate-500 my-1 select-none"
                            data-tip={b.description}
                          >
                            <div className="flex">
                              <FaDotCircle size={8} className="mt-2 mr-2" color="#91C9E3" />
                              <p>{b.name}</p>
                            </div>
                            <div className="lg:hidden">
                              <VscInfo size={18} />
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-start ml-4 text-left text-slate-500 my-1">
                            <FaDotCircle size={8} className="mt-2 mr-2" color="#91C9E3" />
                            {b.name}
                          </div>
                        )}
                      </div>
                    ))}
                  </details>
                ))} */}
      {healthPackage.optionalServices.length > 0 && (
        <p className="mt-4 text-sm text-typo after:content-['*'] after:ml-0.5 after:text-red-500">
          Optional services availbale
        </p>
      )}
    </div>
  );
};

export default CardBody;
