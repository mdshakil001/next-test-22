import Image from "next/image";

const ContactUsSuccess = () => {
  return (
    <div className="card bg-base-100 border border-secondary-100 my-10">
      <div className="card-body">
        <div className="flex justify-center">
          <Image
            src={"/assets/check-circle.gif"}
            alt={"success"}
            height={200}
            width={200}
          />
        </div>
        <div className="text-lg">
          Your information was submitted successfully. Somone from our team will
          reach out to you shortly to help you book your package.
        </div>
        <div className="modal-action">
          <label htmlFor="contact-us" className="btn text-white">
            Close
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSuccess;
