import React,{useEffect,useState} from "react";
import ComparisonList from "../../../components/health-screening/ComparisonList/ComparisonList";
import Container from "../../../components/layout/container/Container";
import Layout from "../../../components/layout/Layout";
import { useRouter } from "next/router";
import Head from "next/head";
const ComparePackages = () => {
  const router = useRouter();
  const [compareIds, setCompareIds] = useState([])
  useEffect(() => {
    const q=router.query
    if(q && q!={}){
      const idArray=Object.entries(q);
      const idsReq=idArray.map((item)=>item[1])
      setCompareIds(idsReq);
    }
  }, [router])
  
  return (
    <Layout>
       <Head>
        <title>Compare Health Packages</title>
      </Head>
      <Container>
        <ComparisonList compareIds={compareIds} />
      </Container>
    </Layout>
  );
};

export default ComparePackages;
