//library
import React from "react";

//styles
import skeletonSyles from "./skeletonStyles.module.scss";

const Skeleton = ({ shape, width, height }) => {
	return (
		<div
			className={skeletonSyles[shape]}
			style={{ width: width, height: height }}
		></div>
	);
};

export default Skeleton;
