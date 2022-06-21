import React, { useState } from 'react';
import ArticlesSection from "components/article/ArticlesSection";
import { NextSeo } from "next-seo";
import Container from "../../components/layout/container/Container";
import Layout from "../../components/layout/Layout";
import { ARTICLES } from "../../lib/data";
import CategoriesButtons from '../../components/CategoriesButtons';

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const ArticlePage = ({ articles }) => {
  const [show, setShow] = useState(false);
  return (
    <Layout>
      <NextSeo title="Our Articles" />
      <Container>
        <div className="md:flex mt-3 justify-between">

          <div className='md:hidden ml-4'>
              <button onClick={() => setShow(!show)} className="flex justify-center justify-items-center items-center border border-gray-600 px-8 ml-2 mt-2 py-2 bg-slate-100">
              Categories
              <div className='px-4'>
              {show ? <BsFillArrowDownCircleFill /> : <BsFillArrowRightCircleFill />}
              </div> 
              </button>

              { show && <div className="pr-60">
                <CategoriesButtons />
              </div>  }
          </div>

            <div className='sm:hidden md:block'>
              <h2 className='mt-12 ml-2'>Categories</h2>
              <div className='pr-36'><CategoriesButtons /></div>
            </div>

            <div>
            <h1 className="font-title text-primary-100 font-bold text-4xl mt-12 ml-4">
              Our Articles
            </h1>
            <ArticlesSection articles={articles} title={'Latest'} />
            </div>

        </div>
      </Container>

    </Layout>
  );
};

export const getStaticProps = async () => {
  const articles = ARTICLES.filter((a) => a.published).sort((a, b) => {
    if (!a.datePublished || !b.datePublished) return 0;
    return (
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime()
    );
  });

  return { props: { articles } };
};
export default ArticlePage;






      {/* <Container>
        <div className="flex mt-3 justify-between items-center pb-2">

            <CategoriesButtons />
          
            <div>
            <h1 className="font-title text-primary-100 font-bold text-4xl mt-12">
              Our Articles
            </h1>
            <ArticlesSection articles={articles} title={'Latest'} />
            </div>

        </div>
      </Container> */}