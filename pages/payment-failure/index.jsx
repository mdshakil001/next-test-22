import Container from "components/layout/container/Container";
import Layout from "components/layout/Layout";
import Head from "next/head";
import Image from "next/image";

const PaymentFailure = () => {
  return (
    <Layout>
      <Head>
        <title>Healthcare Collective | Payment Failure</title>
        <meta name="description" content="Healthcare Collective is a platform for healthcare providers to connect with patients and get the best care possible." />
      </Head>
      <Container>
        <div className="flex items-center flex-col py-32">
          <Image src='/assets/failure.png' alt='success' width={100} height={100} />
          <div className="text-3xl font-semibold text-center mt-4">
            Payment failed!
          </div>
          <div className="py-6 text-lg">
            Something went wrong. Please try again.
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default PaymentFailure;