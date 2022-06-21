import { useState } from "react";
import { send } from "emailjs-com";
import BookingForm from "../../components/package-booking/booking-form";
import ContactUsSuccess from "components/package-booking/ContactUsSuccess";

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

const PackageContactUsModal = ({ packageName }) => {
  const [loading, setLoading] = useState(false);
  const [validateError, setValidateError] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [success, setSuccess] = useState(false);

  const [toSend, setToSend] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    packageName: packageName,
  });

  const handleChange = (e) => {
    if (e.target.name == "packageName" || e.target.name == "message") {
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
        "myhc-landing-contact_us",
        toSend,
        "user_bbZeudqF6d1pcyacAYiHO"
      )
        .then(() => {
          setSuccess(true);
        })
        .catch((error) => {
          setSubmitError("Something went wrong. Please try again.");
        });
    } else {
      setLoading(false);
      setValidateError(true);
    }
  };
  return (
    <>
      <input type="checkbox" id="contact-us" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-primary-100">{packageName}</h3>
          {success ? (
            <ContactUsSuccess />
          ) : (
            <BookingForm
              handleChange={handleChange}
              onSubmit={onSubmit}
              toSend={toSend}
              loading={loading}
              validateError={validateError}
              submitError={submitError}
              setLoading={setLoading}
              type={"special"}
              packageName={packageName}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default PackageContactUsModal;
