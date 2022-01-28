import { Publish } from "@mui/icons-material";
import React from "react";

function NewProduct() {
  return (
    <div className="newProduct basis-5/6 m-5 p-5">
      <h1 className="">New Product</h1>
      <form className="mt-2.5">
        <div className="">
          <label htmlFor="file">Product Image: </label>
          <label
            for="file"
            className="ml-5 w-[180px] inline-block mb-5 rounded p-1  bg-indigo-200 shadow-lg shadow-indigo-500/50 border-none cursor-pointer"
          >
            <label
              for="file"
              className="flex items-center justify-between cursor-pointer"
            >
              Upload Image
              <Publish />
            </label>
          </label>
          <input
            type="file"
            name="file"
            id="file"
            className="hidden outline-none border-0  border-b-2 border-indigo-500/100 h-7 mb-2.5"
          />
        </div>
        <div className="">
          <label>Product Name: </label>
          <input
            type="text"
            className="ml-5 outline-none border-0  border-b-2 border-indigo-500/100 h-7 mb-2.5"
          />
        </div>
        <div className="">
          <label>Stock: </label>
          <input
            type="number"
            className="ml-[78px] outline-none border-0  border-b-2 border-indigo-500/100 h-7 mb-2.5"
          />
        </div>
        <div className="">
          <label className="">Active: </label>
          <select
            name="active"
            id="active"
            className=" outline-none border-0  border-b-2 border-indigo-500/100 h-7 mb-2.5"
          >
            <option value="Yes" id="yes" selected>
              Yes
            </option>
            <option value="No" id="no">
              No
            </option>
          </select>
        </div>
        <button className="w-[80px] mt-5 rounded p-1  bg-indigo-200 shadow-lg shadow-indigo-500/50 border-none cursor-pointer">
          Add
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
