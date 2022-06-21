import OurStoryDesktop from "../../components/our-story-page/our-story-desktop";
import OurStoryMobile from "../../components/our-story-page/our-story-mobile";
import { NextSeo } from "next-seo";

import Layout from "../../components/layout/Layout";

const Values = [
  {
    title: "Integrity",
    description:
      "We believe in the power of integrity. We are committed to providing a safe and healthy environment for everyone.",
  },
  {
    title: "Transparency",
    description:
      "We believe in transparency. We are committed to providing a safe and healthy environment for everyone.",
  },
  {
    title: "Accountability",
    description:
      "We believe in accountability. We are committed to providing a safe and healthy environment for everyone.",
  },
  {
    title: "Respect",
    description:
      "We believe in respect. We are committed to providing a safe and healthy environment for everyone.",
  },
];

const OurStory = () => {
  return (
    <Layout>
      <NextSeo title="Our Story" />
      <div className="hidden lg:block">
        <OurStoryDesktop values={Values} />
      </div>
      <div className="block lg:hidden">
        <OurStoryMobile values={Values} />
      </div>
    </Layout>
  );
};

export default OurStory;
