import { Publish } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Chart from "../Chart/Chart";
import { productChartData } from "../data";
import ProductImage from "../images/mwp22hn-a-apple-original-imag3qe9eqkfhmg8.jpeg";

function Product() {
  return (
    <div className="basis-5/6 p-5">
      <div className="flex items-center justify-between">
        <h1 className="">Product</h1>
        <Link to="/new-product">
          <button className="w-[80px] rounded p-1  bg-indigo-200 shadow-lg shadow-indigo-500/50 border-none cursor-pointer">
            Create
          </button>
        </Link>
      </div>
      <div className="productTop flex">
        <div className="productTopLeft basis-1/2">
          <Chart
            title="Product Analytics"
            data={productChartData}
            dataKeys={[
              { title: "sales", stroke: "#5550bd", type: "monotone" },
              { title: "profit", stroke: "#50bd62", type: "monotone" },
              { title: "cost", stroke: "#bd5050", type: "monotone" },
            ]}
            grid
          />
        </div>
        <div className="productTopRight basis-1/2 p-5 m-5 rounded-xl bg-white shadow-lg shadow-indigo-500/50">
          <div className="flex items-center ">
            <img
              src={ProductImage}
              alt=""
              className="w-20 rounded h-11 object-contain"
            />
            <span className="font-semibold ml-3">Apple Airpods</span>
          </div>
          <div className="mt-2.5">
            <div className="flex w-[150px] justify-between">
              <span className="">Id:</span>
              <span className="">12228327jhd292</span>
            </div>
            <div className="flex w-[150px] justify-between">
              <span className="">Sales:</span>
              <span className="">55123</span>
            </div>
            <div className="flex w-[150px] justify-between">
              <span className="">Active:</span>
              <span className="">Yes</span>
            </div>
            <div className="flex w-[150px] justify-between">
              <span className="">In Stock:</span>
              <span className="">Yes</span>
            </div>
          </div>
        </div>
      </div>
      <div className="ProductBottom m-5 p-5 rounded-xl bg-white shadow-lg shadow-indigo-500/50">
        <form className="flex justify-between">
          <div className="productFormLeft flex flex-col">
            <label className="">Product Name</label>
            <input
              type="text"
              placeholder="Apple Airpods"
              className="outline-none border-0  border-b-2 border-indigo-500/100 h-7 mb-2.5"
            />
            <label className="">In Stock</label>
            <select
              name="inStock"
              id="inStock"
              className="outline-none border-0  border-b-2 border-indigo-500/100 h-7 mb-2.5"
            >
              <option value="Yes" id="yes" selected>
                Yes
              </option>
              <option value="No" id="no">
                No
              </option>
            </select>
            <label className="">Active</label>
            <select
              name="active"
              id="active"
              className="outline-none border-0  border-b-2 border-indigo-500/100 h-7 mb-2.5"
            >
              <option value="Yes" id="yes" selected>
                Yes
              </option>
              <option value="No" id="no">
                No
              </option>
            </select>
          </div>
          <div className="productFormRight flex flex-col justify-between">
            <div className="productUpload flex items-center">
              <img
                src={ProductImage}
                alt=""
                className="productUploadImg w-[100px] rounded-lg mr-5"
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" className="hidden" />
            </div>
            <button className="w-[80px] rounded p-1  bg-indigo-200 shadow-lg shadow-indigo-500/50 border-none cursor-pointer">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Product;
