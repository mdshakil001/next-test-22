import BENEFITS from "../../../lib/data/benefits.data";
import SERVICES from "../../../lib/data/services.data";
import { BsCheckCircleFill, BsCheckCircle } from "react-icons/bs";
import { VscInfo } from "react-icons/vsc";
import { currencyFormatter } from "lib/helper/Currency";

const PackageDetails = ({
  healthPackage,
  totalPrice,
  handleOptional,
  optionals,
}) => {

  const getGender = () => {
    if (healthPackage?.gender === "men") {
      return "men";
    }
    if (healthPackage?.gender === "women") {
      return "women";
    } else {
      return "both men and women";
    }
  };

  const getAgeGroup = () => {
    if (healthPackage?.ageGroup === "under-40") {
      return "under 40";
    }
    if (healthPackage?.ageGroup === "over-40") {
      return "over 40";
    }
  };

  const handleOptionalClick = (benefit) => {
    if (healthPackage?.type === "special") {
    } else {
      handleOptional(benefit);
    }
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between relative">
      <div className="lg:w-3/5">
        <div className="hidden lg:block">
          <div className="text-3xl font-semibold">{healthPackage.name}</div>
          <div className="text-lg">
            Ideal for {getGender()} {getAgeGroup()}
          </div>
        </div>
        <div className="my-12">
          {healthPackage?.optionalServiceIds?.length > 0 ? (
            <div className="text-2xl pb-4 font-medium">Optional Services</div>
          ) : (
            ""
          )}
          {SERVICES.filter((service) =>
            healthPackage?.optionalServiceIds?.includes(service.id)
          ).map((service) => (
            <div key={service.id}>
              <div className="py-2">
                <div className="text-primary-100 font-medium text-xl">
                  {service.name}
                </div>
                <div className="opacity-70">{service.description}</div>
                {BENEFITS.filter(
                  (benefit) =>
                    service.benefitIds.includes(benefit.id) &&
                    healthPackage?.optionalBenefitIds.includes(benefit.id)
                ).map((benefit) => (
                  <div
                    className={`${
                      optionals?.includes(benefit)
                        ? "border border-secondary-100"
                        : "border"
                    } ${
                      healthPackage?.type === "special"
                        ? ""
                        : "hover:border-secondary-100 cursor-pointer"
                    } text-base flex justify-between w-6/10 lg:w-4/5 items-center shadow-md px-4 py-2 my-2 rounded-md mt-3`}
                    key={benefit.id}
                    onClick={() => handleOptionalClick(benefit)}
                  >
                    <div>
                      <p>- {benefit.name}</p>
                      <p className="text-xs ml-3 text-gray-400 pr-2">
                        {benefit.description}
                      </p>
                      {healthPackage?.type === "special" ? (
                        <></>
                      ) : (
                        <div className="font-medium ml-3">
                          {benefit.price.ccyCode}
                          {currencyFormatter(benefit.price.amount)}
                        </div>
                      )}
                    </div>
                    {healthPackage.type === "special" ? (
                      <></>
                    ) : (
                      <div
                        onClick={() => handleOptional(benefit)}
                        className="cursor-pointer"
                      >
                        {optionals?.includes(benefit) ? (
                          <BsCheckCircleFill color="#91C9E3" />
                        ) : (
                          <BsCheckCircle />
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="my-12">
          <div className="text-2xl pb-4 font-medium">Included Services</div>
          <div className="text-primary-100 font-semibold text-xl">
            Blood Investigations
          </div>
          {SERVICES.filter(
            (service) =>
              healthPackage?.serviceIds?.includes(service.id) && service.profile
          ).map((service) => (
            <div key={service.id}>
              <div className="py-2">
                <div className="text-secondary-100 font-semibold text-xl">
                  {service.name}
                </div>
                <div className="opacity-70">{service.description}</div>
                {BENEFITS.filter(
                  (benefit) =>
                    service.benefitIds.includes(benefit.id) &&
                    healthPackage.benefitIds.includes(benefit.id)
                ).map((benefit) => {
                  return benefit.description !== "" ? (
                    <div
                      key={benefit.id}
                      className="flex justify-between items-center"
                    >
                      <div
                        className="grow lg:flex-none tooltip cursor-pointer text-left my-1"
                        data-tip={benefit.description}
                      >
                        {benefit.name}
                      </div>
                      <p className="lg:hidden">
                        <VscInfo size={20} />
                      </p>
                    </div>
                  ) : (
                    <div className="my-1" key={benefit.id}>
                      {benefit.name}
                    </div>
                  );
                })}
              </div>
              <hr className="lg:w-4/5 border border-grey-300" />
            </div>
          ))}
          {SERVICES.filter(
            (service) =>
              healthPackage?.serviceIds?.includes(service.id) &&
              !service.profile
          ).map((service) => (
            <div key={service.id}>
              <div className="py-2">
                <div className="text-primary-100 font-semibold text-xl">
                  {service.name}
                </div>
                <div className="opacity-70">{service.description}</div>
                {BENEFITS.filter(
                  (benefit) =>
                    healthPackage.benefitIds.includes(benefit.id) &&
                    service.benefitIds.includes(benefit.id)
                ).map((benefit) => {
                  return benefit.description !== "" ? (
                    <div
                      key={benefit.id}
                      className="flex justify-between items-center"
                    >
                      <div
                        className="grow lg:flex-none tooltip cursor-pointer text-left my-1"
                        data-tip={benefit.description}
                      >
                        {benefit.name}
                      </div>
                      <p className="lg:hidden">
                        <VscInfo size={20} />
                      </p>
                    </div>
                  ) : (
                    <div className="my-1" key={benefit.id}>
                      {benefit.name}
                    </div>
                  );
                })}
              </div>
              <hr className="lg:w-4/5 border border-grey-300" />
            </div>
          ))}
        </div>
      </div>
      {healthPackage?.type === "special" ? (
        <div className="w-full lg:w-2/5 p-8 card shadow-xl border border-secondary-100 min-h-64 h-max mb-8 lg:sticky lg:top-28">
          <div className="text-2xl font-semibold">Your package</div>
          <div className="text-lg font-medium">{healthPackage?.name}</div>
          <div className="my-4">
            If you are interested in booking this package, please contact us. We
            will get back to you shortly.
          </div>
          <label htmlFor="contact-us" className="btn btn-sec border-0 my-6">
            Contact Us
          </label>
        </div>
      ) : (
        <div className="w-full lg:w-2/5 p-8 card shadow-xl border border-secondary-100 min-h-96 h-max mb-8 lg:sticky lg:top-28">
          <div className="text-2xl font-semibold">Your package</div>
          <div>{healthPackage?.name}</div>
          <div className="flex justify-between pt-4 items-center font-medium">
            <div>Package</div>
            <div>
              {healthPackage?.price?.ccyCode}
              {healthPackage?.discountedPrice
                ? currencyFormatter(healthPackage?.discountedPrice.amount)
                : currencyFormatter(healthPackage?.price?.amount)}
            </div>
          </div>
          <div className="text-xl font-medium py-4">Optionals</div>
          {optionals?.length > 0 ? (
            optionals.map((optional) => (
              <div className="flex justify-between" key={optional.id}>
                <div className="mr-12">{optional.name}</div>
                <div>
                  {healthPackage?.price.ccyCode}
                  {currencyFormatter(optional.price.amount)}
                </div>
              </div>
            ))
          ) : (
            <div>No optionals selected</div>
          )}
          <br />
          <hr className="border border-grey-300" />
          <br />
          <div className="flex justify-between font-medium text-lg">
            <div>Total</div>
            <div>
              {healthPackage?.price?.ccyCode}
              {totalPrice === null
                ? healthPackage?.discountedPrice
                  ? currencyFormatter(healthPackage?.discountedPrice.amount)
                  : currencyFormatter(healthPackage?.price?.amount)
                : currencyFormatter(totalPrice)}
            </div>
          </div>
          <label htmlFor="book-package" className="btn btn-sec border-0 my-6">
            Book Package
          </label>
        </div>
      )}
      <div className="lg:hidden mb-8">
        <div className="text-2xl font-semibold">{healthPackage?.name}</div>
        <div>
          Ideal for {getGender()} {getAgeGroup()}
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
