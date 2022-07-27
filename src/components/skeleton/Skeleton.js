//library
import React from "react";

//styles
import skeletonSyles from "./skeletonStyles.module.scss";

const Skeleton = ({ shape }) => {
	return <div className={skeletonSyles[shape]}></div>;
};

export default Skeleton;
