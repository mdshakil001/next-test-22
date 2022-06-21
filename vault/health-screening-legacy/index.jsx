import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CardPackages from "../../components/health-screening/card-packages";
import Layout from "../../components/layout/Layout";
import Container from "../../components/layout/container/Container";

import { HEALTH_PACKAGES } from "../../lib/data/packages.data";

const HealthScreening = () => {
  const router = useRouter();
  const [filterBy, setFilterBy] = useState("All");

  const filteredPackages = () => {
    if (filterBy === "Age 39 and below") {
      return HEALTH_PACKAGES.filter((p) => p.id === "1");
    } else if (filterBy === "Age 40 and above") {
      return HEALTH_PACKAGES.filter((p) => p.id === "2");
    } else {
      return HEALTH_PACKAGES;
    }
  };

  return (
    <Layout>
      <Head>
        <title>Health Screening</title>
      </Head>
      <Container>
        <div className="my-12">
          <div className="font-medium text-2xl text-primary-100 font-title">
            Health Screening
          </div>
          <div>Enjoy our newly launched promotional prices today!</div>
          <select
            className="select select-bordered w-full max-w-xs mt-6 focus:outline-none"
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option>All</option>
            <option>Age 39 and below</option>
            <option>Age 40 and above</option>
          </select>
          <CardPackages
            packages={filteredPackages()}
            onClick={(param) =>
              router.push(`/package-booking?packageName=${param}`)
            }
          />
          {/* <PackageTable
            perks={PERKS}
            packages={HEALTH_PACKAGES}
            onClick={(param) =>
              router.push(`/package-booking?packageName=${param}`)
            }
          /> */}
        </div>
      </Container>
    </Layout>
  );
};

export default HealthScreening;
