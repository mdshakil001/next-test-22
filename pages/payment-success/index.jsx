import Container from "components/layout/container/Container";
import Layout from "components/layout/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const PaymentSuccess = () => {
  return (
    <Layout>
      <Head>
        <title>Healthcare Collective | Payment Success</title>
        <meta name="description" content="Healthcare Collective is a platform for healthcare providers to connect with patients and get the best care possible." />
      </Head>
      <Container>
        <div className="flex items-center flex-col py-32">
          <Image
            src="/assets/check-circle.gif"
            alt="success"
            width={150}
            height={150}
          />
          <div className="text-3xl font-semibold text-center">
            Your payment was successful!
          </div>
          <div className="py-6 text-lg w-3/5 text-center">
            Please complete your booking by choosing the suitable slot. Someone
            from our team will reach out to you soon.
          </div>
          <Link
            href="https://clinic.platomedical.com/book/bXloZWFsdGhjb2xsZWN0aXZl/7ccd4a8e7dbe4d58b3b7a9a2d07304f9/5XABpAV"
            passHref
          >
            <button className="btn bg-secondary-100 border-0 focus:outline-none text-white">
              Complete Booking
            </button>
          </Link>
        </div>
      </Container>
    </Layout>
  );
};

export default PaymentSuccess;
