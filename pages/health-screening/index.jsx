import { useState } from "react";
import Layout from "../../components/layout/Layout";
import Head from "next/head";
import { NextSeo } from "next-seo";
import HealthScreeningFilters from "../../components/health-screening/HealthScreeningFilters/HealthScreeningFilters";
import HealthScreeningHeader from "../../components/health-screening/HealthScreeningHeader/HealthScreeningHeader";
import NewCardPackages from "../../components/health-screening/new-card-packages";
import ComparisonBottomBar from "components/health-screening/ComparisonBottomBar/ComparisonBottomBar";

import { PACKAGES, SERVICES, BENEFITS } from "../../lib/data";
import Container from "../../components/layout/container/Container";
import { useRouter } from "next/router";
import useWindowDimensions from "lib/hooks/getWindowSize";

const Filters = () => {
  const [packages, setPackages] = useState(null);
  const [packagesToCompare, setPackagesToCompare] = useState([]);
  const router = useRouter();
  const { width } = useWindowDimensions();

  const filterPackages = (ageGroup, gender, diseases) => {
    const filteredPackages = PACKAGES.filter(
      (p) =>
        (p.ageGroup === ageGroup &&
          (p.gender === gender || p.gender === "all")) ||
        (p.diseases.length > 0 &&
          p.diseases.every((disease) => diseases.includes(disease)))
    ).map((b) => ({
      ...b,
      services: SERVICES.filter((service) =>
        b.serviceIds.includes(service.id)
      ).map((s) => ({
        ...s,
        benefits: BENEFITS.filter(
          (benefit) =>
            b.benefitIds.includes(benefit.id) && benefit.serviceId === s.id
        ),
      })),
      optionalServices: SERVICES.filter((optS) =>
        b.optionalServiceIds.includes(optS.id)
      ).map((os) => ({
        ...os,
        optionalBenefits: BENEFITS.filter(
          (optB) =>
            b.optionalBenefitIds.includes(optB.id) && optB.serviceId === os.id
        ),
      })),
    }));
    setPackages(filteredPackages);
  };

  const handleCompareClick = (item) => {
    if (width < 1024 && packagesToCompare.length === 2) {
      if (packagesToCompare.includes(item)) {
        setPackagesToCompare(
          packagesToCompare.filter((toCompare) => toCompare.id !== item.id)
        );
        return;
      } else {
        return;
      }
    }
    if (packagesToCompare.length > 3) {
      return;
    }
    if (packagesToCompare.includes(item)) {
      setPackagesToCompare(
        packagesToCompare.filter((toCompare) => toCompare.id !== item.id)
      );
    } else {
      setPackagesToCompare((prev) => [...prev, item]);
    }
  };

  const handleCompareAll = () => {
    if (packagesToCompare.length > 1) {
      const queryString = packagesToCompare.map(
        (healthPackage, idx) => `id${idx + 1}=${healthPackage.id}&`
      );
      router.push(`/package/compare?${queryString}`);
    } else {
    }
  };

  const clearAllComparisonOnClick = () => {
    setPackagesToCompare([]);
  };

  const resetFilterOnClick = () => {
    setPackages(null);
    setPackagesToCompare([]);
  };

  return (
    <Layout>
      <NextSeo
        title="Health Screening"
      />

      {packages === null ? (
        <>
          <HealthScreeningHeader />
          <HealthScreeningFilters handleFilter={filterPackages} />
        </>
      ) : (
        <>
          <Container>
            <div className="text-3xl text-primary-100 my-6">
              Health Screening Packages For You
            </div>
            <div className="flex justify-between items-center">
              <div>Result: {packages.length} package(s)</div>
              <button className="btn-sec-sm" onClick={resetFilterOnClick}>
                Reset Filter
              </button>
            </div>
            <NewCardPackages
              filteredPackages={packages}
              handleCompareClick={handleCompareClick}
              packagesToCompare={packagesToCompare}
              width={width}
            />
          </Container>
        </>
      )}
      <ComparisonBottomBar
        packagesToCompare={packagesToCompare}
        handleCompareClick={handleCompareClick}
        handleCompareAll={handleCompareAll}
        handleClearAllComparison={clearAllComparisonOnClick}
      />
    </Layout>
  );
};

export default Filters;
