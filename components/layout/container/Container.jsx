import styles from "./container.module.css";

const Container = ({ children, className }) => {
  return (
    <div className={`${styles["container-main"]} px-6 md:px-20 2xl:px-0 h-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
