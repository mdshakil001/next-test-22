import { getArticleBySlug } from "lib/api";
import { ArticleJsonLd, NextSeo } from "next-seo";
import ReactMarkdown from "react-markdown";
import Container from "../../components/layout/container/Container";
import Layout from "../../components/layout/Layout";
import { ARTICLES } from "../../lib/data";

const ArticlePage = ({ article }) => {
  return (
    <Layout>
      <NextSeo
        title={article?.title}
        description={article?.description}
        url={article?.url}
        openGraph={{
          title: article?.title,
          description: article?.description,
          images: [
            {
              url: `https://www.myhealthcarecollective.com${article?.image}`,
              width: 300,
              height: 224,
              alt: article?.title,
            },
          ],
        }}
      />
      <Container>
        <section className="lg:max-w-3xl mx-auto">
          <div className="container py-12 mx-auto">
            <h1 className="font-title text-3xl text-primary-100 font-semibold mb-6">
              {article?.title}
            </h1>

            <ArticleJsonLd
              url={article?.url}
              title={article?.title}
              images={article?.images}
              datePublished={article?.datePublished}
              authorName={article?.authorName}
              description={article?.description}
              publisherName={article?.publisherName}
              publisherLogo={article?.publisherLogo}
            />

            {article?.tags?.map((tag) => (
              <button
                key={tag}
                className="bg-blue-400 font-title font-bold text-white mb-4 mr-3 cursor-default inline rounded py-1 px-2 text-sm "
              >
                <span className="">{tag}</span>
              </button>
            ))}

            <article className="article-content items-start mb-10">
              <ReactMarkdown>{article?.content}</ReactMarkdown>
            </article>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  if (!params.slug) return { notFound: true };

  const article = ARTICLES.find(
    (article) => article.articleRoute === params.slug
  );
  const content = getArticleBySlug(params.slug, ["content"]);
  return {
    props: { article: { ...article, ...content } },
  };
}

export async function getStaticPaths() {
  return {
    paths: ARTICLES.map((article) => {
      return {
        params: {
          slug: article.articleRoute,
        },
      };
    }),
    fallback: false,
  };
}

export default ArticlePage;
