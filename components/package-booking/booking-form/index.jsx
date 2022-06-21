import Loading from "components/Loading";

const BookingForm = ({
  handleChange,
  toSend,
  validateError,
  submitError,
  onSubmit,
  loading,
  setLoading,
  type,
  packageName,
}) => {
  return (
    <div className="card bg-base-100 border border-secondary-100 my-10">
      <div className="card-body">
        <h2 className="card-title mb-4">
          {type === "special" ? "Contact Information" : "Booking Information"}
        </h2>
        <form className="max-w-xl mx-auto" onSubmit={onSubmit}>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0 form-control">
              <label
                className="block text-gray-800  text-sm font-medium mb-1"
                htmlFor="firstName"
              >
                First Name <span className="text-red-600">*</span>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="input input-bordered w-full focus:outline-none"
                  placeholder="Enter your first name"
                  value={toSend?.firstName}
                  onChange={handleChange}
                />
              </label>
              {validateError && toSend.firstName == "" && (
                <div className="text-error text-sm">Enter First Name</div>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block text-gray-800 text-sm font-medium"
                htmlFor="lastName"
              >
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="input input-bordered w-full focus:outline-none"
                placeholder="Enter your last name"
                value={toSend?.lastName}
                onChange={handleChange}
              />
              {validateError && toSend.lastName == "" && (
                <div className="text-error text-sm">Enter Last Name</div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full px-3">
              <label
                className="block text-gray-800  text-sm font-medium mb-1"
                htmlFor="email"
              >
                Email <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input input-bordered w-full focus:outline-none"
                placeholder="Enter your email"
                value={toSend?.email}
                onChange={handleChange}
              />
              {validateError &&
                (toSend.email == "" ||
                  !toSend.email.includes("@") ||
                  toSend.email.endsWith("@")) && (
                  <div className="text-error text-sm">Enter Valid Email</div>
                )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-5">
            <div className="w-full px-3">
              <label
                className="block text-gray-800  text-sm font-medium mb-1"
                htmlFor="phone"
              >
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="input input-bordered w-full focus:outline-none"
                placeholder="Enter your phone number"
                value={toSend?.phone}
                onChange={handleChange}
              />
              {validateError &&
                toSend.phone != "" &&
                parseInt(toSend.phone) <= 0 && (
                  <div className="text-error text-sm">
                    Enter Valid Phone No.
                  </div>
                )}
            </div>
          </div>
          {type === "special" ? (
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full px-3">
                <label
                  className="block text-gray-800  text-sm font-medium mb-1"
                  htmlFor="message"
                >
                  Message
                </label>
                <input
                  id="message"
                  name="message"
                  type="text"
                  className="input input-bordered w-full focus:outline-none"
                  placeholder="Enter an optional message"
                  value={toSend?.message}
                  onChange={handleChange}
                />
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="flex flex-wrap -mx-3 mb-5 items-center"></div>
          {type === "special" ? (
            ""
          ) : (
            <p className="text-sm text-primary-100 mt-2">
              *You will need to fast for at least 8 hours before your screening
              session
            </p>
          )}
          <div className="modal-action">
            <label
              htmlFor={type === "special" ? "contact-us" : "book-package"}
              className="btn text-white"
              onClick={() => setLoading(false)}
            >
              Cancel
            </label>
            <button
              htmlFor={type === "special" ? "contact-us" : "book-package"}
              className="btn bg-secondary-100 text-white border-0 hover:bg-secondary-50 w-32"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <Loading primary />
              ) : type === "special" ? (
                "Send"
              ) : (
                "Checkout"
              )}
            </button>
          </div>
          {submitError && (
            <div className="mt-4 flex flex-col border border-error bg-red-100 rounded-lg p-4 justify-start text-typo text-justify shadow-md">
              <p className="text-center text-sm font-general mb-2">
                Something went wrong. Please try again.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
