import React, { FC } from "react";

interface SkeletonProps {

  width: number;

 
  height: number;

  
  color: string;
}

const Skeleton: FC<SkeletonProps> = ({ width, height, color }) => {
  return (
    <div
      style={{
        width,
        height,
        border: "1px solid " + color,
        borderRadius: "5px",
        padding: "10px",
      }}
    ></div>
  );
};

export default Skeleton;