import { useFormik } from "formik";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

export function Form(data, setData) {
  const formvalidationSchema = yup.object({
    id: yup.string().required(),
    name: yup.string().required().min(4),
    email: yup.string().required(),
    age: yup.string().required(),
    phone_no: yup.string().required().min(8),
  });

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      id: "",
      name: "",
      email: "",
      age: "",
      phone_no: "",
    },
    validationSchema: formvalidationSchema,
    onSubmit: (values) => {
      console.log(values);
      setData([...data, values]);
      navigate("/");
    },
  });

  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <Box
        // component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          type="text"
          value={formik.values.id}
          onChange={formik.handleChange}
          id="id"
          name="id"
          label="id"
          variant="outlined"
        />
        <TextField
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          id="name"
          name="name"
          label="Name"
          variant="outlined"
        />
        <TextField
          type="text"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          id="email"
          label="email"
          variant="outlined"
        />
        <TextField
          type="text"
          value={formik.values.age}
          onChange={formik.handleChange}
          id="age"
          name="age"
          label="age"
          variant="outlined"
        />
        <TextField
          type="text"
          value={formik.values.phone_no}
          onChange={formik.handleChange}
          id="phoneno"
          name="phone_no"
          label="phone no"
          variant="outlined"
        />
        <Button type="submit" variant="contained">
          update
        </Button>
      </Box>
    </form>
  );
}
