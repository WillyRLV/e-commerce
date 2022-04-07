//* importaciones
import { Container, Grid, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { getMovies } from "../../services/edit";
import "./index.css";
import Edit from "../../components/Edit"



//padre 👇
const Profile = () => {
  const [movies,storeMovies] = useState([])
  
  return (
    <Container>
      <Grid container spacing={2} mt={5}>
        <Grid>
        </Grid>
        <Grid item md={4}>
          <img
            className="imagen"
            src="https://i.pinimg.com/736x/ea/aa/42/eaaa42a2f47ca4abbb93987d54264768.jpg"
            alt=""
          />
        </Grid>
        <Grid item md={4} container spacing={3}>
              
          <Grid item md={4} >
            <h4>Nombre</h4>
          </Grid>
          <Grid item md={4} >
            <h4>Apellido</h4>
          </Grid>
          <Grid  item md={12}>
            <h4>email.com</h4>
          </Grid>
          <Grid item md={12}>
            <h4>numero</h4>
          </Grid>
          <Grid item xs={4}>
            {/**boton de editar */}
          <Edit/>
          </Grid>
          <Grid item xs={4}>
            <Button variant="contained" color="secondary">
              Confirmar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Profile;
