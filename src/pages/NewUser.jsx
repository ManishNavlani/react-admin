import React from "react";

function NewUser() {
  return (
    <div className="basis-1/6 p-5">
      <h1>New User</h1>
      <form action="" className="flex flex-wrap">
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label>Username :</label>
          <input
            placeholder="manish7"
            type="text"
            className="outline-none border-0  border-b-2 border-indigo-500/100 h-7"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label>Full Name :</label>
          <input
            placeholder="Manish Navlani"
            type="text"
            className="outline-none border-0  border-b-2 border-indigo-500/100 h-7"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label>Gender :</label>
          <div className="mt-2">
            <input
              type="radio"
              name="gender"
              value="male"
              id="male"
              className="mx-2"
            />
            <label for="male">Male</label>
            <input
              type="radio"
              name="gender"
              value="female"
              id="female"
              className="mx-2"
            />
            <label for="female">Female</label>
            <input
              type="radio"
              name="gender"
              value="other"
              id="other"
              className="mx-2"
            />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label>Email :</label>
          <input
            placeholder="manishnavlani77@gmail.com"
            type="text"
            className="outline-none border-0  border-b-2 border-indigo-500/100 h-7"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label>Password :</label>
          <input
            placeholder="Min 6 Char"
            type="password"
            className="outline-none border-0  border-b-2 border-indigo-500/100 h-7"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label>Phone :</label>
          <input
            placeholder="Number"
            type="number"
            className="outline-none border-0  border-b-2 border-indigo-500/100 h-7"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label>Country :</label>
          <input
            placeholder="India"
            type="text"
            className="outline-none border-0  border-b-2 border-indigo-500/100 h-7"
          />
        </div>
        <div className="w-[400px] flex flex-col mt-2.5 mr-5">
          <label>Active :</label>
          <select
            name="active"
            id="active"
            className="outline-none border-0  border-b-2 border-indigo-500/100 h-7"
          >
            <option value="yes">Yes</option>
            <option yes="no">No</option>
          </select>
        </div>
        <button className="rounded p-0.5 mt-8 mx-auto lg:mx-1 block w-14 bg-indigo-200 shadow-lg shadow-indigo-500/50 border-none cursor-pointer">
          Create
        </button>
      </form>
    </div>
  );
}

export default NewUser;
