import Link from "next/link";
import { MdCompareArrows, MdOutlineMedicalServices } from "react-icons/md";
import { currencyFormatter } from "lib/helper/Currency";

const CardFooter = ({ healthPackage, filteredPackages, handleCompareClick, packagesToCompare }) => {
  return (
    <div className="px-6 w-full self-end">
      <div className="flex justify-between items-center">
        {healthPackage.discountedPrice ? (
          <div className="flex items-center">
            <s className="font-title mr-4">{`${healthPackage.price?.ccyCode}${currencyFormatter(
              healthPackage.price?.amount
            )}`}</s>
            <span className="font-title text-primary-100 text-2xl">
              {`${healthPackage.discountedPrice.ccyCode}${currencyFormatter(healthPackage.discountedPrice.amount)}`}
            </span>
          </div>
        ) : (
          <span className="font-title text-2xl text-primary-100">
            {`${healthPackage.price?.ccyCode}${
              healthPackage.price.amount && currencyFormatter(healthPackage.price?.amount)
            }`}
          </span>
        )}
        {packagesToCompare.includes(healthPackage)
          ? filteredPackages.length > 1 && (
              <div
                className="flex flex-row items-center justify-center px-2 py-1 rounded text-white cursor-pointer 
                      text-right border border-secondary-100 bg-secondary-100 select-none shadow"
                onClick={() => handleCompareClick(healthPackage)}
              >
                <MdCompareArrows size="18px" color="#fff" className="mr-1" />
                Compare
              </div>
            )
          : filteredPackages.length > 1 && (
              <div
                className="flex flex-row items-center justify-center px-2 py-1 rounded text-typo 
                      cursor-pointer text-right border border-typo select-none shadow"
                onClick={() => handleCompareClick(healthPackage)}
              >
                <MdCompareArrows size="18px" color="#58595B" className="mr-1" />
                Compare
              </div>
            )}
      </div>
      <div>
        <Link
          href={{
            pathname: "package/[packageId]",
            query: { packageId: healthPackage.routeName },
          }}
          passHref
        >
          <button className="flex flex-row items-center justify-center btn-pri rounded my-5 shadow">
            <MdOutlineMedicalServices size="20px" color="#FFF" className="mr-1" />
            View Package
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardFooter;
