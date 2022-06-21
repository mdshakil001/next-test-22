import CategoriesButtons from "components/CategoriesButtons";
import Link from "next/link";
import Container from "../layout/container/Container";
import ArticleCard from "./ArticleCard";

const FeatureArticle = ({ articles }) => {

  return (
    <Container>
      <div className="w-full flex gap-10 my-12 flex-col">
        <div className="w-full font-title text-2xl lg:text-3xl xl:text-4xl text-heading">
          Featured Articles
        </div>

       <CategoriesButtons />

        <div className="article-grid">
          {articles.map((el, index) => (
            <ArticleCard
              key={index}
              title={el.title}
              imageUrl={el.image}
              content={el.summary}
              date={el.datePublished}
              href={`/articles/${el?.articleRoute?.replace(".md", "")}`}
              tags={el.tags}
            />
          ))}
        </div>
        <Link href="/articles">
          <a className="flex items-center justify-center md:justify-start w-full mt-auto mb-3">
            <button className="bg-blue-400 text-white font-bold font-title text-lg px-4 py-2.5 rounded-lg w-full md:w-60 hover:bg-blue-500 hover:scale-105 transition-all duration-300">
              View More Articles
            </button>
          </a>
        </Link>
      </div>
    </Container>
  );
};

export default FeatureArticle;
