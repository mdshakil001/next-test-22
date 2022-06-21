const getDiscount = (final, original) => {
  return Math.round(((original - final) / original) * 100);
};

const CardHeader = ({ healthPackage }) => {
  return (
    <div className="flex flex-col justify-between">
      <div className="mb-3 relative overflow-hidden bg-secondary-100 rounded-t-xl pb-4 pt-8 px-6 font-title text-white text-lg">
        {healthPackage?.name}
        {healthPackage?.discountedPrice && (
          <div
            className="shadow font-title rotate-45 absolute text-sm h-6 w-36 bg-success 
                  text-white top-5 -right-11 flex items-center justify-center overflow-hidden"
          >
            {getDiscount(healthPackage.discountedPrice.amount, healthPackage.price.amount)}% OFF
          </div>
        )}
      </div>
    </div>
  );
};

export default CardHeader;
