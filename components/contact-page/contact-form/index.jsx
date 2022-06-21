import { useState } from "react";
import { send } from "emailjs-com";

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

const ContactForm = () => {
  const [toSend, setToSend] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    isSubmitted: false,
  });

  const [name, setName] = useState({
    firstName: "",
    isSubmitted: false,
  });
  const [validateError, setValidateError] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (validateForm(toSend)) {
      send(
        "service_mmdutcs",
        "myhc-landing-contact_us",
        toSend,
        "user_bbZeudqF6d1pcyacAYiHO"
      )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          //reset form
          setToSend({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            message: "",
            isSubmitted: true,
          });
          setName({
            firstName: name.firstName === "" ? "First Name" : name.firstName,
            isSubmitted: true,
          });
          setSubmitError(false);
          setValidateError(false);
          setSubmitDisabled(true);
        })
        .catch((error) => {
          setSubmitError(true);
          setValidateError(false);
          setSubmitDisabled(false);
          console.log("FAILED...", error);
        });
    } else setValidateError(true);
  };

  const handleChange = (e) => {
    if (e.target.name != "message") {
      setToSend({
        ...toSend,
        [e.target.name]: e.target.value.split(" ").join(""),
      });
      setName({
        ...name,
        [e.target.name]: e.target.value.split(" ").join(""),
      });
    } else {
      setToSend({
        ...toSend,
        [e.target.name]: e.target.value,
      });
      setName({
        ...name,
        [e.target.name]: e.target.value.split(" ").join(""),
      });
    }
  };

  return (
    <div className="flex flex-col my-3 md:my-12 lg:my-18 p-6 max-w-screen-sm mx-auto">
      <form onSubmit={onSubmit}>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-general">
              First Name
              <span className="text-red-600">*</span>
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full mb-2"
            name="firstName"
            value={toSend.firstName}
            onChange={handleChange}
          />
          {validateError && toSend.firstName == "" && (
            <div className="text-error text-sm">Enter first name</div>
          )}
          <label className="label">
            <span className="label-text font-general">
              Last Name
              <span className="text-red-600">*</span>
            </span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full mb-2"
            name="lastName"
            value={toSend.lastName}
            onChange={handleChange}
          />
          {validateError && toSend.lastName == "" && (
            <div className="text-error text-sm">Enter last name</div>
          )}
          <label className="label">
            <span className="label-text font-general">Phone Number</span>
          </label>
          <input
            type="number"
            placeholder="Enter your phone number"
            className="input input-bordered w-full mb-2"
            name="phone"
            value={toSend.phone}
            onChange={handleChange}
          />
          {validateError &&
            toSend.phone != "" &&
            parseInt(toSend.phone) <= 0 && (
              <div className="text-error text-sm">Enter valid phone no.</div>
            )}
          <label className="label">
            <span className="label-text font-general">
              Email
              <span className="text-red-600">*</span>
            </span>
          </label>
          <input
            type="text"
            placeholder="e.g. example@myhc.com"
            className="input input-bordered w-full mb-2"
            name="email"
            value={toSend.email}
            onChange={handleChange}
          />
          {validateError &&
            (toSend.email == "" ||
              !toSend.email.includes("@") ||
              toSend.email.endsWith("@")) && (
              <div className="text-error text-sm">Enter valid email</div>
            )}

          <label className="label">
            <span className="label-text font-general">Note</span>
            <span className="label-text-alt">Optional</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full mb-2"
            name="message"
            value={toSend.message}
            placeholder="Please enter your message here."
            onChange={handleChange}
          />
        </div>
        <div className="form-control flex flex-row gap-16 p-6 mt-4 place-content-center">
          <button
            className="w-full px-20 h-12 rounded-lg shadow-md bg-blue-400 hover:bg-blue-500 text-white font-title font-bold text-lg hover:scale-105 transition-all duration-300"
            type="submit"
            disabled={submitDisabled}>
            Submit
          </button>
        </div>
      </form>

      {toSend.isSubmitted && (
        <div className="flex flex-col border border-secondary-50 rounded-lg p-4 justify-start text-typo text-justify shadow-md">
          <p className="text-md mb-2 italic">Dear {name.firstName},</p>
          <p className="text-sm font-general mb-2 italic">
            Thank you for contacting us. We have received your enquiry and will
            get back to you within 2 business days.
          </p>
          <p className="text-sm font-general mb-2 italic">
            Thank you for your patience!
          </p>
          <p className="text-sm font-general mb-2 italic">Regards,</p>
          <p className="text-sm font-general italic">Your Team @ MyHC</p>
        </div>
      )}
      {submitError && (
        <div className="flex flex-col border border-error bg-red-100 rounded-lg p-4 justify-start text-typo text-justify shadow-md">
          <p className="text-center text-sm font-general mb-2">
            Something went wrong. Please try again.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
