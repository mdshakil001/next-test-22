import { useState } from "react";
import Container from "components/layout/container/Container";
import Layout from "components/layout/Layout";
import PackageDetails from "components/health-screening/package-details/PackageDetails";
import { PACKAGES } from "lib/data";
import PackageBookingModal from "components/modal/PackageBookingModal";
import PackageContactUsModal from "components/modal/PackageContactUsModal";

export const getStaticPaths = async () => {
  return {
    paths: PACKAGES.map((p) => ({
      params: { packageId: p.routeName },
    })),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  if (!params.packageId) return { notFound: true };
  const healthPackage = PACKAGES.find((p) => p.routeName === params.packageId);
  return {
    props: {
      healthPackage,
    },
  };
};

const Details = ({ healthPackage }) => {
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
            healthPackage?.discountedPrice
              ? healthPackage?.discountedPrice.amount + optional.price.amount
              : healthPackage?.price.amount + optional.price.amount
          )
        : setTotalPrice((prev) => prev + optional.price.amount);
    }
  };

  return (
    <div>
      <Layout>
        <Container>
          <div className="my-12">
            <PackageDetails
              healthPackage={healthPackage}
              totalPrice={totalPrice}
              handleOptional={handleOptional}
              optionals={optionals}
            />
            <PackageBookingModal
              packageName={healthPackage?.name}
              price={
                totalPrice === null
                  ? healthPackage.discountedPrice
                    ? healthPackage.discountedPrice.amount
                    : healthPackage.price.amount
                  : totalPrice
              }
              optionals={optionals}
            />
            <PackageContactUsModal packageName={healthPackage.name} />
          </div>
        </Container>
      </Layout>
    </div>
  );
};

export default Details;
