import PackageContactUsModal from "components/modal/PackageContactUsModal";
import { useRouter } from "next/router";
import { useState } from "react";
import PackageDetails from "../../components/health-screening/package-details/PackageDetails";
import Container from "../../components/layout/container/Container";
import Layout from "../../components/layout/Layout";
import PackageBookingModal from "../../components/modal/PackageBookingModal";
import PACKAGES from "../../lib/data/packages.data";

const Package = () => {
  const Router = useRouter();

  const [optionals, setOptionals] = useState([]);
  const [totalPrice, setTotalPrice] = useState(null);

  const handleOptional = (optional) => {
    if (optionals.includes(optional)) {
      setOptionals(optionals.filter((stateOptional) => optional.id !== stateOptional.id));
      setTotalPrice((prev) => prev - optional.price.amount);
    } else {
      setOptionals((prev) => [...prev, optional]);
      totalPrice === null
        ? setTotalPrice(
            findHealthPackage()?.discountedPrice
              ? findHealthPackage()?.discountedPrice.amount + optional.price.amount
              : findHealthPackage()?.price.amount + optional.price.amount
          )
        : setTotalPrice((prev) => prev + optional.price.amount);
    }
  };

  const findHealthPackage = () => {
    const packageId = Router.query.id;
    return PACKAGES.find((p) => p.id === packageId);
  };

  return (
    <Layout>
      <Container>
        <div className="my-12">
          <PackageDetails
            healthPackage={findHealthPackage()}
            totalPrice={totalPrice}
            handleOptional={handleOptional}
            optionals={optionals}
          />
          <PackageBookingModal
            packageName={findHealthPackage()?.name}
            price={
              totalPrice === null
                ? findHealthPackage()?.discountedPrice
                  ? findHealthPackage()?.discountedPrice.amount
                  : findHealthPackage()?.price.amount
                : totalPrice
            }
            optionals={optionals}
          />
          <PackageContactUsModal packageName={findHealthPackage()?.name} />
        </div>
      </Container>
    </Layout>
  );
};

export default Package;
