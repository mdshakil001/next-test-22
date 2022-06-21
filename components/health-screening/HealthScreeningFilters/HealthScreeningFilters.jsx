import { useState } from "react";
import Container from "../../layout/container/Container";
import { MdMedicalServices } from "react-icons/md";
import { FaNotesMedical } from "react-icons/fa";
import { BiMaleSign, BiFemaleSign, BiPulse } from "react-icons/bi";
import { RiHeartAddFill } from "react-icons/ri";
import { GiStomach } from "react-icons/gi";
const HealthScreeningFilters = ({ handleFilter }) => {
  const [ageGroup, setAgegroup] = useState(null);
  const [gender, setGender] = useState(null);
  const [diseases, setDiseases] = useState([]);

  return (
    <Container>
      <div className="my-6 md:my-12 rounded-xl lg:w-1/2 mx-auto shadow-xl flex flex-col items-center justify-between">
        <div className="text-xl md:text-2xl w-full text-center py-4 px-4 bg-secondary-50 rounded-t-xl text-typo">
          We&apos;ll help you select the best health screening package
        </div>
        <div className="pb-10 pt-4 px-4 rounded-b-xl lg:px-6 bg-secondary-5 w-full">
          <div className="pb-4">
            <div className="text-lg md:text-xl">
              What&apos;s your{" "}
              <span className="text-primary-100">age group</span>?
            </div>
            <div className="flex py-4 md:py-6">
              <div
                className={`${
                  ageGroup === "under-40"
                    ? "bg-secondary-10 border-2 border-secondary-50"
                    : "bg-white border-2 border-secondary-50"
                } py-2 px-4 text-xs sm:text-lg cursor-pointer mr-3 lg:mr-6 rounded drop-shadow-sm`}
                onClick={() => setAgegroup("under-40")}>
                Under 40
              </div>
              <div
                className={`${
                  ageGroup === "over-40"
                    ? "bg-secondary-10 border-2 border-secondary-50"
                    : "bg-white border-2 border-secondary-50"
                } py-2 px-4 text-xs sm:text-lg cursor-pointer mr-3 lg:mr-6 rounded drop-shadow-sm`}
                onClick={() => setAgegroup("over-40")}>
                40 and Above
              </div>
            </div>
          </div>
          <div className="pb-4">
            <div className="text-lg md:text-xl">
              What&apos;s your{" "}
              <span className="text-primary-100">gender group</span>?
            </div>
            <div className="flex py-4 md:py-6">
              <div
                className={`${
                  gender === "men"
                    ? "bg-secondary-10 border-2 border-secondary-50"
                    : "bg-white border-2 border-secondary-50"
                } py-2 px-4 text-xs sm:text-lg cursor-pointer mr-3 lg:mr-6 rounded drop-shadow-sm flex flex-row items-center justify-center`}
                onClick={() => setGender("men")}>
                <BiMaleSign color="#58595B" size={19} className="mr-1" />
                Men
              </div>
              <div
                className={`${
                  gender === "women"
                    ? "bg-secondary-10 border-2 border-secondary-50"
                    : "bg-white border-2 border-secondary-50"
                } py-2 px-4 text-xs sm:text-lg cursor-pointer mr-3 lg:mr-6 rounded drop-shadow-sm flex flex-row items-center justify-center`}
                onClick={() => setGender("women")}>
                <BiFemaleSign color="#58595B" size={19} className="mr-1" />
                Women
              </div>
            </div>
          </div>
          <div>
            <div className="text-lg md:text-xl">
              Do you have a{" "}
              <span className="text-primary-100">family history</span> of any of
              the below?
            </div>
            <div className="flex py-4 md:py-6 flex-wrap">
              <div
                className={`${
                  diseases.includes("stroke")
                    ? "bg-secondary-10 border-2 border-secondary-50"
                    : "bg-white border-2 border-secondary-50"
                } py-2 px-4 text-xs sm:text-lg cursor-pointer mr-3 lg:mr-6 mb-4 rounded drop-shadow-sm flex flex-row items-center justify-center`}
                onClick={() =>
                  setDiseases((prev) => [...prev, "stroke", "heart-stroke"])
                }>
                <BiPulse color="#58595B" size={19} className="mr-1" />
                Stroke
              </div>
              <div
                className={`${
                  diseases.includes("heart")
                    ? "bg-secondary-10 border-2 border-secondary-50"
                    : "bg-white border-2 border-secondary-50"
                } py-2 px-4 text-xs sm:text-lg cursor-pointer mr-3 lg:mr-6 mb-4 rounded drop-shadow-sm flex flex-row items-center justify-center`}
                onClick={() =>
                  setDiseases((prev) => [...prev, "heart", "heart-stroke"])
                }>
                <RiHeartAddFill color="#58595B" size={19} className="mr-1" />
                Heart disease
              </div>
              <div
                className={`${
                  diseases.includes("colon-cancer")
                    ? "bg-secondary-10 border-2 border-secondary-50"
                    : "bg-white border-2 border-secondary-50"
                } py-2 px-4 text-xs sm:text-lg cursor-pointer mr-3 lg:mr-6 mb-4 rounded drop-shadow-sm flex flex-row items-center justify-center`}
                onClick={() =>
                  setDiseases((prev) => [...prev, "colon-cancer"])
                }>
                <FaNotesMedical color="#58595B" size={16} className="mr-1" />
                Colon cancer
              </div>
              <div
                className={`${
                  diseases.includes("stomach-cancer")
                    ? "bg-secondary-10 border-2 border-secondary-50"
                    : "bg-white border-2 border-secondary-50"
                } py-2 px-4 text-xs sm:text-lg cursor-pointer mr-3 lg:mr-6 mb-4 rounded drop-shadow-sm flex flex-row items-center justify-center`}
                onClick={() =>
                  setDiseases((prev) => [...prev, "stomach-cancer"])
                }>
                <GiStomach color="#58595B" size={19} className="mr-1" />
                Stomach cancer
              </div>
              <div
                className={`${
                  diseases.length === 0
                    ? "bg-secondary-10 border-2 border-secondary-50"
                    : "bg-white border-2 border-secondary-50"
                } py-2 px-4 text-xs sm:text-lg cursor-pointer mr-3 lg:mr-6 mb-4 rounded drop-shadow-sm flex flex-row items-center justify-center`}
                onClick={() => setDiseases([])}>
                None
              </div>
            </div>
          </div>
          <button
            className="btn-pri text-white focus:outline-none border-0 disabled:bg-gray-300 drop-shadow-md rounded flex flex-row items-center justify-center text-md md:text-xl"
            onClick={() => handleFilter(ageGroup, gender, diseases)}
            disabled={ageGroup === null || gender === null}>
            <MdMedicalServices color="#fff" size={20} className="mr-2" />
            View Packages
          </button>
        </div>
      </div>
    </Container>
  );
};

export default HealthScreeningFilters;
