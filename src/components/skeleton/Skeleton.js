//library
import React from "react";

//styles
import "./skeletonStyles.scss";

const Skeleton = ({ shape }) => {
	return <div className={"skeleton " + shape}></div>;
};

export default Skeleton;
