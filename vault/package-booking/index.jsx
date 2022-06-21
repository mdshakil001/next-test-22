import { useState } from "react";
import { useRouter } from "next/router";
import { send } from "emailjs-com";
import Layout from "../../components/layout/Layout";
import Container from "../../components/layout/container/Container";
import BookingForm from "../../components/package-booking/booking-form";
import Head from "next/head";

const validateForm = (values) => {
  let isValid = true;
  if (
    values.firstName != "" &&
    values.lastName != "" &&
    values.email != "" &&
    values.email.includes("@") &&
    !values.email.endsWith("@")
  ) {
    if (values.phone != "") {
      if (parseInt(values.phone) <= 0) isValid = false;
      else isValid = true;
    } else isValid = true;
  } else isValid = false;
  return isValid;
};

const PackageBooking = () => {
  const router = useRouter();

  const getInitialDate = () => {
    const today = new Date(2022, 4, 9);
    // today.setDate(today.getDate() + 12);
    return today;
    // if (moment(today).isoWeekday === 6 && today.getHours() > 10) {
    //   today.setDate(today.getDate() + 1);
    //   console.log(today);
    //   return today;
    // }
    // if (moment(today).isoWeekday !== 6 && today.getHours() > 8) {
    //   today.setDate(today.getDate() + 1);
    //   console.log(today);
    //   return today;
    // } else {
    //   return today;
    // }
  };

  const getFinalDate = () => {
    const finalDate = getInitialDate();
    finalDate.setFullYear(finalDate.getFullYear() + 1);
    return finalDate;
  };

  const [toSend, setToSend] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: getInitialDate(),
    time: "",
    packageName: router.query.packageName,
  });
  const [validateError, setValidateError] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    if (
      e.target.name == "date" ||
      e.target.name == "time" ||
      e.target.name == "packageName"
    ){
      console.log("Space");
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    }
    else
      setToSend({
        ...toSend,
        [e.target.name]: e.target.value.split(" ").join(""),
      });
  };

  const handleDateChange = (dateToSet) => {
    setToSend({ ...toSend, date: dateToSet });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validateForm(toSend)) {
      send(
        "service_mmdutcs",
        "myhc-landing-package_ord",
        toSend,
        "user_bbZeudqF6d1pcyacAYiHO"
      )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setToSend({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            packageName: "",
          });
          router.push(
            `${
              router.query.packageName === "basic_screening_under_40"
                ? "https://buy.stripe.com/eVag0k8Tr0pSfeg4gg"
                : "https://buy.stripe.com/dR6bK47PndcEeacbIJ"
            }`
          );
          setSubmitError(false);
          setValidateError(false);
        })
        .catch((err) => {
          setSubmitError(true);
          setValidateError(false);
          console.log("FAILED...", err);
        });
    } else setValidateError(true);
  };

  return (
    <Layout>
      <Head>
        <title>Book Package</title>
      </Head>
      <Container className="flex justify-center items-center">
        <BookingForm
          handleChange={handleChange}
          handleDateChange={handleDateChange}
          onSubmit={onSubmit}
          toSend={toSend}
          date={toSend.date}
          initialDate={getInitialDate()}
          finalDate={getFinalDate()}
          validateError={validateError}
          submitError={submitError}
        />
      </Container>
    </Layout>
  );
};

export default PackageBooking;
