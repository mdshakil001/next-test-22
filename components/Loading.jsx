import React from "react";
import ClipLoader from "react-spinners/ClipLoader";
const loaderSize = {
  xs: 15,
  sm: 25,
  md: 35,
  lg: 45,
  xl: 60
};

// 1. add page as a prop to display loading indicator in center for whole page like this : eg : <Loading page />
// 2. you can add primary or secondary as prop for respective color on loader or you can declare custom color by specifying like this <Loading color={"#hexcode"} /> 
// 3. For loader size refer to above object . here is and eg : <Loading size={"md"} /> default size is 35 if no size is passed 

const Loading = (props) => {
  return (
    <div
      className={`${
        props.page && "w-full mt-48 flex items-center justify-center"
      }`}>
      {props.primary ? (
        <ClipLoader
          {...props}
          color={props.color ? props.color : "#F58232"}
          size={props.size ? loaderSize[props.size] : 35}
        />
      ) : props.secondary ? (
        <ClipLoader
          {...props}
          color={props.color ? props.color : "#91C9E3"}
          size={props.size ? loaderSize[props.size] : 35}
        />
      ) : (
        <ClipLoader
          {...props}
          color={props.color ? props.color : "#000000"}
          size={props.size ? loaderSize[props.size] : 35}
        />
      )}
    </div>
  );
};

export default Loading;
