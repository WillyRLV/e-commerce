import { useState } from "react";
import { Container, Grid, Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import { storeUser } from "../../services/firestore";
const SignUp = () => {
  const [validateInputsEmpty, setValidateInputsEmpty] = useState({
    name: false,
    last_name: false,
    email: false,
    phone_number: false,
    password: false,
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  //validacion👇
  const validate = (values) => {
    const errors = {};

    Object.keys(values)
      .filter(
        (value) =>
          value !== "marital_status" ||
          value !== "date_born" ||
          values === "gender"
      )
      .forEach((value) => {
        errors[value] = values[value] === "" ? true : false;
      });

    setButtonDisabled(Object.values(errors).includes(true));
    setValidateInputsEmpty(errors);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      last_name: "",
      email: "",
      phone_number: "",
      password: "",
    },
    validate,

    onSubmit: async (values) => {
      // Si values.languages
      storeUser(values.email, values.password);
      console.log(values);
    },
  });

  return (
    <Container maxWidth="lg">
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <h2>Crear cuenta</h2>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Nombre"
              name="name"
              error={validateInputsEmpty.name}
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Apellido"
              name="last_name"
              error={validateInputsEmpty.last_name}
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Correo"
              name="email"
              error={validateInputsEmpty.email}
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Telefono"
              name="phone_number"
              error={validateInputsEmpty.phone_number}
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              label="Password"
              name="password"
              error={validateInputsEmpty.password}
              type="password"
              fullWidth
              onChange={formik.handleChange}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <Button
              type="submit"
              disabled={buttonDisabled}
              variant="contained"
              fullWidth
              size="large"
            >
              Crear cuenta
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
export default SignUp;
