import React from "react";

function FeatureInfoItem({ data }) {
  return (
    <div
      id="featuredItem"
      className="basis-1/3 mx-5 p-[30px] rounded-xl cursor-pointer bg-white shadow-lg shadow-indigo-500/50"
    >
      <span id="featuredTitle" className="text-xl">
        {data.title}
      </span>
      <div id="featuredMoneyContainer" className="my-2.5 flex items-center">
        <span id="featuredMoney" className="text-3xl font-semibold">
          $ {data.money}
        </span>
        <span id="featuredMoneyRate" className="flex item-center ml-5">
          {data.moneyRate} {data.icon}
        </span>
      </div>
      <span id="featureSub" className="text-md text-gray-500">
        Compared to last month
      </span>
    </div>
  );
}

export default FeatureInfoItem;
