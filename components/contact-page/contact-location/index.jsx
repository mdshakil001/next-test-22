import Image from "next/image";

const ContactLocation = () => {
  return (
    <div className="flex flex-col mt-4 mb-16 max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row w-full 2xl:mx-0">
        <div
          className="block w-full h-64 md:h-96 md:w-1/2"
          style={{
            backgroundImage: `url('/assets/contact/connexion.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
          }}
        ></div>
        <div className="flex flex-col w-full p-6 md:w-1/2 place-content-center">
          <p className="font-title text-xl md:text-2xl lg:text-xl text-secondary-100 mb-6">
            Our Location
          </p>
          <p className="font-title text-primary-100 text-2xl">
            My HealthCare Collective
          </p>
          <p className="font-general text-typo text-md my-2">
            <span className="font-general italic text-secondary-100">
              Address:
            </span>
            <br />
            <span className="font-general text-typo">
              Farrer Park Medical Centre Connexion
            </span>
            <br />
            <span className="font-general text-typo">
              Unit 12-11, 1 Farrer Park Station Road
            </span>
            <br />
            <span className="font-general text-typo">Singapore 217562</span>
          </p>
          <p className="font-general text-typo text-md">
            <span className="font-general italic text-secondary-100">
              Phone:
            </span>
            <br />
            <span className="font-general text-typo">+65 9836 6257</span>
          </p>
          <p className="font-general text-typo text-md">
            <span className="font-general italic text-secondary-100">
              Email:
            </span>
            <br />
            <Image
              loading="lazy"
              width={289}
              height={27}
              quality={100}
              src="/assets/myhc-email.png"
              alt="MyHC email"
              webkittouchcallout="none"
              webkituserselect="none"
              khtmluserselect="none"
              mozuserselect="none"
              msuserselect="none"
              userselect="none"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactLocation;
