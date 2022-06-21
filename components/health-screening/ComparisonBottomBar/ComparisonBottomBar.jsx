import Container from "components/layout/container/Container";
import useWindowDimensions from "lib/hooks/getWindowSize";
import { MdAddCircleOutline, MdCompareArrows } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { currencyFormatter } from "lib/helper/Currency";

function ComparisonBottomBar({ packagesToCompare, handleCompareClick, handleCompareAll, handleClearAllComparison }) {
  const { width } = useWindowDimensions();

  return (
    <>
      {packagesToCompare.length > 0 ? (
        <div className="fixed bottom-0 w-full bg-secondary-100 text-white py-4 z-30 drop-shadow-lg">
          <Container>
            <div className="lg:flex justify-between">
              <div className="flex">
                {packagesToCompare.map((healthPackage, idx) => (
                  <div
                    className={`relative bg-white text-black w-1/2 lg:w-64 rounded-md p-2 pr-5 flex flex-col justify-between drop-shadow min-h-20
                    ${idx === packagesToCompare.length - 1 ? "" : "mr-2"} ${idx > 1 && width < 1024 ? "hidden" : ""}`}
                    key={healthPackage.id}
                  >
                    <div className="opacity-60 mb-0.5">{healthPackage.name}</div>
                    <div className="font-semibold">
                      {healthPackage.price.ccyCode}
                      {healthPackage.discountedPrice
                        ? currencyFormatter(healthPackage.discountedPrice.amount)
                        : healthPackage.price.amount && currencyFormatter(healthPackage.price.amount)}
                    </div>
                    <div
                      className="absolute text-secondary-100 right-2 top-2 cursor-pointer"
                      onClick={() => handleCompareClick(healthPackage)}
                    >
                      <ImCross size={"10px"} color="#58595B" />
                    </div>
                  </div>
                ))}
                <div
                  className={`relative bg-black/[.2] border-2 border-black/[0.25] drop-shadow text-black w-1/2 lg:w-64 rounded-md p-2 pr-4 flex items-center justify-center ml-2 ${
                    packagesToCompare.length >= 2 && "hidden"
                  }`}
                >
                  <MdAddCircleOutline size={"30px"} color="rgb(0 0 0 /0.55)" />
                </div>
                <div
                  className={`relative bg-black/[.2] border-2 border-black/[0.25] drop-shadow text-black w-1/2 lg:w-64 rounded-md p-2 pr-4 flex items-center justify-center ml-2 ${
                    (packagesToCompare.length >= 3 || width < 1024) && "hidden"
                  }`}
                >
                  <MdAddCircleOutline size={"30px"} color="rgb(0 0 0 /0.55)" />
                </div>
                <div
                  className={`relative bg-black/[.2] border-2 border-black/[0.25] drop-shadow text-black w-1/2 lg:w-64 rounded-md p-2 pr-4 flex items-center justify-center ml-2 ${
                    (packagesToCompare.length >= 4 || width < 1280) && "hidden"
                  }`}
                >
                  <MdAddCircleOutline size={"30px"} color="rgb(0 0 0 /0.55)" />
                </div>
              </div>
              <div className="lg:ml-2 flex flex-col items-center justify-evenly">
                <button
                  className="flex flex-row items-center justify-center w-full mt-2 rounded-md bg-primary-100 text-white border-0 focus:outline-none py-2 px-4 drop-shadow"
                  onClick={handleCompareAll}
                >
                  <MdCompareArrows size={"20px"} color="#fff" className="mr-1" />
                  Compare
                </button>
                <div onClick={handleClearAllComparison} className="underline cursor-pointer hidden lg:block">
                  Clear All
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ComparisonBottomBar;
