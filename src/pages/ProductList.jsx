import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import { productListData } from "../data";
import { Delete } from "@mui/icons-material";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState(productListData);
  const deleteClickHandler = (id) => {
    setData(data.filter((product) => product.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="flex items-center w-80">
            <img
              src={params.row.productImg}
              alt=""
              className="rounded-full mr-4 w-8"
            />
            {params.row.productName}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
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
            <Link to={"/product/" + params.row.id}>
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
    <div className="basis-5/6 h-[calc(100vh-50px)]">
      <DataGrid
        disableSelectionOnClick
        rows={data}
        columns={columns}
        // pageSize={10}
        rowsPerPageOptions={[5, 10, 25, 50, 100]}
        checkboxSelection
        deleteFilterItem={() => {}}
      />
    </div>
  );
}

export default ProductList;
