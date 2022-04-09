import "./index.css";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../../styles";
import { User,loginUser, logOutUser } from "../../services/firestore";
import { rulesEmail,rulesContraseña } from "../../services/rulesInputs";


const photoURL =
  "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";

const Login = () => {
  const [validate,setValidate]=useState("")

  const {
    control,
    handleSubmit,
  } = useForm({});
  
const login=async (data)=>{
  const validacion = loginUser(data)
  const errorMessage=validate?"":"Error en el Login";
  
setValidate(errorMessage)
}
console.log(validate)

  const onsubmit = (data) => {
    console.log(data);
    login(data);
   
  };

 
  return (
    <div className="Container-login">
      {!User && (
        <form onSubmit={handleSubmit(onsubmit)}>
          <div className="div-cabecera">
            <h1>Login </h1>
            <p>Please login using account detail bellow.</p>
            <br />
            <br />
          </div>

          <div className="div-input">
            <Controller
              name={"email"}
              control={control}
              rules={rulesEmail}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  error={error ? true : false}
                  onChange={onChange}
                  value={value}
                  label={"Ingresar email"}
                  helperText={error ? error.message : null}
                  type="email"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="div-input">
            <Controller
              name={"password"}
              control={control}
              rules={rulesContraseña}
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  error={error ? true : false}
                  onChange={onChange}
                  value={value}
                  label={"Ingresar password"}
                  helperText={
                    error
                      ? error.message
                      : "Utiliza 8 carácteres que cuenten con letras y números"
                  }
                  type="password"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="div-cabecera">
            <ThemeProvider theme={Theme}>
              <Button
                onClick={handleSubmit(onsubmit)}
                variant={"contained"}
                size="large"
                fullWidth
                color="analogous"
                sx={{ height: 47 }}
              >
                INGRESAR
              </Button>
            </ThemeProvider>
            <span>{validate}</span>
          </div>
          <br/>
          
          <div className="div-input">
            <span>¿No tienes cuenta?</span>
            <a href="/signUp">Registrate</a>
          </div>
        </form>
      )}
      {User && (
        <div >
          <h2>Cerrar Sesion </h2>
          <br />
          <div className="div-input">
          <img width="70"  src={photoURL} />
          <span>Usuario :{User.displayName}</span>
          </div>
          <br />
          <ThemeProvider theme={Theme}>
          <Button
           onClick={logOutUser} 
           variant={"contained"} 
           size="medium"
           fullWidth
           >
            Cerrar Sesion
          </Button>
         
          </ThemeProvider>
          
        </div>
      )}
    </div>
  );
};

export default Login;
