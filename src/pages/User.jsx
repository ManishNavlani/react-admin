import {
  CalendarToday,
  LocationSearching,
  MailOutlined,
  PermIdentity,
  PhoneAndroid,
  Upload,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import img from "../images/pexels-pixabay-220453.jpg";

function User() {
  return (
    <div className="basis-5/6  p-5">
      <div className="flex items-center justify-between">
        <h1 className="">Edit User</h1>
        <Link to="/new-user">
          <button className="rounded p-1 w-14  bg-indigo-200 shadow-lg shadow-indigo-500/50 border-none cursor-pointer">
            Create
          </button>
        </Link>
      </div>
      <div className="flex mt-5">
        <div className="basis-1/3 p-5 rounded-xl bg-white shadow-lg shadow-indigo-500/50">
          <div className="flex items-center">
            <img src={img} alt="" className="rounded-full" />
            <div className="flex flex-col ml-5">
              <span className="font-semibold">Anna Becker</span>
              <span className="font-normal text-gray-500">Web Developer</span>
            </div>
          </div>
          <div className="mt-5">
            <span className="text-lg font-semibold text-gray-700">
              Account Details
            </span>
            <div className="flex items-center my-5 text-gray-500">
              <PermIdentity className="text-sm" />
              <span className="ml-2.5">manish7</span>
            </div>
            <div className="flex items-center my-5 text-gray-500">
              <CalendarToday className="text-sm" />
              <span className="ml-2.5">10/12/1999</span>
            </div>
            <span className="text-lg font-semibold text-gray-700">
              Contact Details
            </span>
            <div className="flex items-center my-5 text-gray-500">
              <PhoneAndroid className="text-sm" />
              <span className="ml-2.5">+919925299287</span>
            </div>
            <div className="flex items-center my-5 text-gray-500">
              <MailOutlined className="text-sm" />
              <span className="ml-2.5">navlanimanish7@gmail.com</span>
            </div>
            <div className="flex items-center my-5 text-gray-500">
              <LocationSearching className="text-sm" />
              <span className="ml-2.5">India</span>
            </div>
          </div>
        </div>
        <div className="basis-2/3 p-5 rounded-xl ml-5 bg-white shadow-lg shadow-indigo-500/50">
          <span className="text-2xl font-semibold">Edit</span>
          <form className="flex justify-between mt-5">
            <div className="">
              <div className="flex flex-col mt-2.5">
                <label className="mb-1 text-sm">Username</label>
                <input
                  className="outline-none border-0 w-[250px] border-b-2 border-indigo-500/100 h-7"
                  autoComplete="off"
                  type="text"
                  placeholder="manish7"
                />
              </div>
              <div className="flex flex-col mt-2.5">
                <label className="mb-1 text-sm">Full Name</label>
                <input
                  className="outline-none border-0 w-[250px] border-b-2 border-indigo-500/100 h-7"
                  autoComplete="off"
                  type="text"
                  placeholder="Manish Navlani"
                />
              </div>
              <div className="flex flex-col mt-2.5">
                <label className="mb-1 text-sm">Email</label>
                <input
                  className="outline-none border-0 w-[250px] border-b-2 border-indigo-500/100 h-7"
                  autoComplete="off"
                  type="email"
                  placeholder="navlanimanish77@gmail.com"
                />
              </div>
              <div className="flex flex-col mt-2.5">
                <label className="mb-1 text-sm">Phone</label>
                <input
                  className="outline-none border-0 w-[250px] border-b-2 border-indigo-500/100 h-7"
                  autoComplete="off"
                  type="number"
                  placeholder="9925299287"
                />
              </div>
              <div className="flex flex-col mt-2.5">
                <label className="mb-1 text-sm">Country</label>
                <input
                  className="outline-none border-0 w-[250px] border-b-2 border-indigo-500/100 h-7"
                  autoComplete="off"
                  type="text"
                  placeholder="India"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                <img src={img} alt="" className="rounded" />
                <label htmlFor="file">
                  <Upload className="cursor-pointer ml-3" />
                </label>
                <input type="file" name="" id="file" className="hidden" />
              </div>
              <button className="rounded p-1  bg-indigo-200 shadow-lg shadow-indigo-500/50 border-none cursor-pointer">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;
