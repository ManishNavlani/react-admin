import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import img from "../images/pexels-pixabay-220453.jpg";
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { userListData } from "../data";

////////////////
function UserList() {
  const [users, setUsers] = useState(userListData);

  const deleteClickHandler = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "username",
      headerName: "Username",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center w-80">
            <img src={params.row.avatar} alt="" className="rounded-full mr-4" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "transaction",
      headerName: "Transaction",
      type: "number",
      width: 180,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="border-none rounded bg-green-400 p-1 text-color cursor-pointer mr-4">
                Edit
              </button>
            </Link>
            <Delete
              className="text-red-500 cursor-pointer"
              onClick={() => deleteClickHandler(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="h-[calc(100vh-50px)]">
      <DataGrid
        disableSelectionOnClick
        rows={users}
        columns={columns}
        // pageSize={10}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        checkboxSelection
        deleteFilterItem={() => {}}
      />
    </div>
  );
}

export default UserList;
