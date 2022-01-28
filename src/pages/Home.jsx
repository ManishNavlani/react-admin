import React from "react";
import Chart from "../Chart/Chart";
import FeaturedInfo from "../components/FeatureInfo/FeaturedInfo";
import WidgetLg from "../components/WidgetLg/WidgetLg";
import WidgetSm from "../components/WidgetSm/WidgetSm";
import { chartData } from "../data";

function Home() {
  return (
    <div>
      <FeaturedInfo />
      <Chart
        title="Sales Analytics"
        data={chartData}
        dataKeys={[
          { title: "sales", stroke: "#5550bd", type: "monotone" },
          { title: "profit", stroke: "#50bd62", type: "monotone" },
          { title: "cost", stroke: "#bd5050", type: "monotone" },
        ]}
        grid
      />
      <div id="homeWidgets" className="flex m-5">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
