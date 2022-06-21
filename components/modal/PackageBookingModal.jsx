import { useState } from "react";
import { send } from "emailjs-com";
import BookingForm from "../../components/package-booking/booking-form";
import getStripe from "../../lib/payment/get-stripe";
import axios from "axios";

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

const PackageBookingModal = ({ packageName, price, optionals }) => {
  const [loading, setLoading] = useState(false);
  const [validateError, setValidateError] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const [toSend, setToSend] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    packageName: packageName,
  });

  const handleChange = (e) => {
    if (e.target.name == "packageName") {
      setToSend({ ...toSend, [e.target.name]: e.target.value });
    } else
      setToSend({
        ...toSend,
        [e.target.name]: e.target.value.split(" ").join(""),
      });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (validateForm(toSend)) {
      send(
        "service_mmdutcs",
        "myhc-landing-package_ord",
        {
          ...toSend,
          optionals: optionals?.map((option) => option.name).toString(),
        },
        "user_bbZeudqF6d1pcyacAYiHO"
      )
        .then(async (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitError(false);
          setValidateError(false);
          const {
            data: { id },
          } = await axios.post("/api/checkout_sessions", {
            quantity: 1,
            name: packageName,
            amount: price * 100,
            currency: "sgd",
          });

          const stripe = await getStripe();
          setToSend({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            packageName: "",
          });
          return stripe.redirectToCheckout({ sessionId: id });
        })
        .catch((err) => {
          setSubmitError(true);
          setValidateError(false);
          setLoading(false);
          console.log("FAILED...", err);
        });
    } else {
      setLoading(false);
      setValidateError(true);
    }
  };
  return (
    <>
      <input type="checkbox" id="book-package" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-primary-100">{packageName}</h3>
          <BookingForm
            handleChange={handleChange}
            onSubmit={onSubmit}
            toSend={toSend}
            loading={loading}
            validateError={validateError}
            submitError={submitError}
            setLoading={setLoading}
          />
        </div>
      </div>
    </>
  );
};

export default PackageBookingModal;
