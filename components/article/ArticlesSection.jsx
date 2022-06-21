import React from "react";
import ArticleCard from "./ArticleCard";

export default function ArticlesSection({articles, title}) {
  return (
    <section>
      <div className="container py-5 mx-auto">
        <h1 className="font-title text-typo text-xl font-semibold mb-6">
          {title}
        </h1>
        <div className="article-grid mb-12">
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
      </div>
    </section>
  );
}
