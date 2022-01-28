import React from "react";
import { featureInfoData } from "../../data";
import FeatureInfoItem from "./FeatureInfoItem";
function FeaturedInfo() {
  return (
    <div id="featured" className="w-full flex justify-between">
      {featureInfoData.map((data) => (
        <FeatureInfoItem data={data} key={data.id} />
      ))}
    </div>
  );
}

export default FeaturedInfo;
