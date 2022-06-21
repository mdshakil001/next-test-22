import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";

const NewCardPackages = ({ filteredPackages, handleCompareClick, packagesToCompare }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-10">
      {/* CARDS CONTAINER */}
      {filteredPackages?.map((p) => (
        <div key={p.id} className="flex flex-col justify-between min-h-96 h-max rounded-xl shadow-xl">
          <CardHeader healthPackage={p} />
          <CardBody healthPackage={p} />
          <CardFooter
            healthPackage={p}
            handleCompareClick={handleCompareClick}
            packagesToCompare={packagesToCompare}
            filteredPackages={filteredPackages}
          />
        </div>
      ))}
    </div>
  );
};

export default NewCardPackages;
