import ContactBanner from "../../components/contact-page/contact-banner";
import ContactForm from "../../components/contact-page/contact-form";
import ContactLocation from "../../components/contact-page/contact-location";
import Head from "next/head";
import { NextSeo } from "next-seo";

import Layout from "../../components/layout/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* <Head>
        <title>Healthcare Collective | Contact Us</title>
        <meta name="description" content="Healthcare Collective is a platform for healthcare providers to connect with patients and get the best care possible." />
      </Head> */}
      <NextSeo
        title="Contact Us"
      />
      <ContactBanner />
      <ContactForm />
      <ContactLocation />
    </Layout>
  );
};

export default Contact;
