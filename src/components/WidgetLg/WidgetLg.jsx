import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import img from "../../images/pexels-pixabay-220453.jpg";
import moment from "moment";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  row: {
    // backgroundColor: "blue",
    // color: (props) => props.color,
    // backgroundColor: (props) => (props.type === "Approved" ? "green" : "blue"),
  },
});

const now = moment().format("DD MMM YYYY");
console.log(now);
const columns = [
  { id: "customer", label: "Customer", minWidth: 200 },
  {
    id: "date",
    label: "Date",
    minWidth: 120,
    align: "center",
  },
  {
    id: "amount",
    label: "Amount",
    minWidth: 150,
    align: "right",
    format: (value) =>
      value.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      }),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 120,
    align: "center",
    format: (value) => value === "Approved",
  },
];

function createData(customer, date, amount, status) {
  return { customer, date, amount, status };
}

const rows = [
  createData("Manish Navlani", now, 1624, "Pending"),
  createData("Nisha Navlani", now, 13254, "Approved"),
  createData("Devidas Navlani", now, 134524, "Declined"),
  createData("Hema Navlani", now, 15324, "Approved"),
  createData("Suman Navlani", now, 13254, "Approved"),
  createData("Kishor Navlani", now, 145324, "Approved"),
  createData("Riya Navlani", now, 136524, "Declined"),
  createData("Mohit Navlani", now, 451324, "Pending"),
  createData("Heena Navlani", now, 451324, "Approved"),
  createData("Dipak Navlani", now, 4331324, "Declined"),
  createData("Manish Navlani", now, 561324, "Approved"),
];

function WidgetLg() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const classes = useStyles({});
  return (
    <div className="basis-8/12 p-5 rounded-xl bg-white shadow-lg shadow-indigo-500/50">
      <h3 className="font-semibold">Latest Transactions</h3>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.customer}
                      type={row.status}
                      className={classes.row}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default WidgetLg;
