import ArticlesSection from "components/article/ArticlesSection";
import Layout from "components/layout/Layout";
import { categoryNames } from "lib/constants/categoryNames";
import { ARTICLES } from "lib/data";
import formatTitle from "lib/formatTitle";
import { NextSeo } from "next-seo";
import Container from "../../components/layout/container/Container";
import React from "react";
import CategoriesButtons from "components/CategoriesButtons";

export default function CategoryName({ articles, title }) {
  return (
    <Layout>
      <NextSeo title={title} />

      <Container>
        <br />
      <CategoriesButtons />
        <ArticlesSection articles={articles} title={formatTitle(title)} />
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  if (!params.categoryName) return { notFound: true };

  let articles = [];
  if (params.categoryName.toLowerCase() === "latest") {
    articles = ARTICLES.filter((a) => a.published)
    .sort((a, b) => {
      if (!a.datePublished || !b.datePublished) return 0;
      return (
        new Date(b.datePublished).getTime() -
        new Date(a.datePublished).getTime()
      );
    })
    .slice(0, 5);
  } else {
    articles = ARTICLES.filter(
      (article) => article.categories.indexOf(params.categoryName) > -1
    );
  }
  return {
    props: { articles, title: params.categoryName },
  };
}

export async function getStaticPaths() {
  return {
    paths: categoryNames.map((categoryName) => {
      return {
        params: {
          categoryName,
        },
      };
    }),
    fallback: false,
  };
}
