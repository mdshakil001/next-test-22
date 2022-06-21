import NewBanner from "components/core/new-banner";
import { ARTICLES } from "lib/data";
import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";
import FeatureArticle from "../components/article/FeatureArticle";
import OurServices from "../components/core/ourServices/OurServices";
import Layout from "../components/layout/Layout";

export default function Home({ articles }) {
  return (
    <Layout>
      <Head>
        <meta
          name="google-site-verification"
          content="1zHPMW_rQwOzL34pjRisHVkbGxm4KTPJvo1AnFy4S5M"
        />
        <meta name="theme-color" content="#F58232" />
      </Head>
      <NextSeo title="Homepage" />
      <div className="flex flex-col text-typo">
        <div className="flex justify-center">
          <NewBanner />
        </div>
        <div>
          <OurServices />
        </div>
        <FeatureArticle articles={articles} />
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const articles = ARTICLES.filter((a) => a.published)
    .sort((a, b) => {
      if (!a.datePublished || !b.datePublished) return 0;
      return (
        new Date(b.datePublished).getTime() -
        new Date(a.datePublished).getTime()
      );
    })
    .slice(0, 4);

  return { props: { articles } };
};
