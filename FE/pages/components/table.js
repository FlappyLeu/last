import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useSWR from "swr";
import axios from "axios";
import Button from "@mui/material/Button";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TodoList = () => {
  const todoApi = "https://chuka.ilearn.mn/todo";
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(todoApi, fetcher);
  console.log(data);
  console.log(error);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">My To do List</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data &&
            data?.data.map((d) => {
              return (
                <StyledTableRow>
                  <StyledTableCell align="center">
                    {d.book_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button variant="contained">EDIT</Button>
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Button variant="contained" color="error">
                      DELETE
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
        </TableBody>
        <Button variant="contained" color="primary">
                      Add task
                    </Button>
      </Table>
    </TableContainer>
  );
};

export default TodoList;
