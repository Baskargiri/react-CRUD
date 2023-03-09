import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Form } from "./Form";

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Baskar",
      email: "baskargiri@gmail.com",
      age: 24,
      phone_no: 8072734638,
    },
    {
      id: 2,
      name: "Ashwath",
      email: "ashwath01@gmail.com",
      age: 23,
      phone_no: 8879334638,
    },
  ]);
  const navigate = useNavigate();
  return (
    <div className="nav">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              CRUD TASK
            </Typography>
            <Button onClick={() => navigate("/form")} color="inherit">
              ADD LIST
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={<Home data={data} setData={setData} />} />

        <Route path="/form" element={<Form data={data} setData={setData} />} />
      </Routes>
    </div>
  );
}
export default App;
