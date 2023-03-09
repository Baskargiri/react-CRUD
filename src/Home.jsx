import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCallback, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [data, setData] = useState([]);
  const getdata = () => {
    fetch("https://6409b5886ecd4f9e18b8ba34.mockapi.io/crudop")
      .then((e) => e.json())
      .then((use) => setData(use));
  };
  useEffect(() => getdata(), []);

  const deletebn = (id) => {
    console.log(id);
    fetch(`https://6409b5886ecd4f9e18b8ba34.mockapi.io/crudop/${id}`, {
      method: "DELETE",
    }).then(() => getdata());
  };
  const navigate = useNavigate();
  return (
    <div className="table">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">email</TableCell>
              <TableCell align="right">age</TableCell>
              <TableCell align="right">phone_no</TableCell>
              <TableCell align="right">delete</TableCell>
              <TableCell align="right">edit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.phone_no}</TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => deletebn(row.id)}
                    aria-label="delete"
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton
                    onClick={() => navigate(`/edit/${row.id}`)}
                    aria-label="delete"
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
