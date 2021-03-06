import "./index.css";
import { useState,useEffect } from "react";
import { Button, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "../../styles";
import { auth,loginUser, logOutUser } from "../../services/firestore";
import { rulesEmail,rulesContraseña } from "../../services/rulesInputs";
import { onAuthStateChanged } from "@firebase/auth";


const photoURL =
  "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png";

const Login = () => {
  const [user,setUser]=useState(null);
  const [isError,setIsError]=useState(false);
  
  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      user?setUser(user):setUser(null); 
    });
  };
  const iniciarSesion=async(data)=>{
    const errores=await loginUser(data);
    setIsError(errores?false:true);
   
  }
const {control,handleSubmit} = useForm({});

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="Container-login">
      {!user&& (
        <form onSubmit={handleSubmit(iniciarSesion)}>
          <div className="div-cabecera">
            <h1 style={{textAlign:"center"}}>Iniciar Sesión </h1>
            <p>Por favor ingrese sus datos</p>
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
                onClick={handleSubmit(iniciarSesion)}
                variant={"contained"}
                size="large"
                fullWidth
                color="analogous"
                sx={{ height: 47, backgroundColor:"#73548B" }}
              >
                INGRESAR
              </Button>
            </ThemeProvider>
            <span>{isError&&"Error al ingresar Correo o Contraseña"}</span>
          </div>
          <br/>
          
          <div className="div-input">
            <span>¿No tienes cuenta?</span>
            <a href="/signUp">Registrate</a>
          </div>
        </form>
      )}
      {user && (
        <div >
          <h2>Cerrar Sesion </h2>
          <br />
          <div className="div-input">
          <img width="70"  src={photoURL} alt="" />
          <span>Usuario :{user?.displayName}</span>
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
