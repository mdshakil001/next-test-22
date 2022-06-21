const Heading1 = (props) => {
  return (
    <h2
      {...props}
      className="font-title text-typo text-2xl font-semibold mt-6 mb-4"
    />
  );
};

const Heading2 = (props) => {
  return (
    <h3
      {...props}
      className="font-title text-typo text-xl font-semibold mt-6 mb-4"
    />
  );
};

const Heading3 = (props) => {
  return (
    <h4
      {...props}
      className="font-title text-typo text-lg font-semibold mt-6 mb-4"
    />
  );
};

const Heading4 = (props) => {
  return (
    <h5
      {...props}
      className="font-title text-typo text-md font-semibold mt-6 mb-4"
    />
  );
};

const Table = (props) => {
  return (
    <div className="article-table">
      <table {...props} />
    </div>
  );
};

const ComparisonTable = (props) => {
  return <div {...props} className="comparison-table" />;
};

const components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  table: Table,
  ComparisonTable,
};

export default components;
