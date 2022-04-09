import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Grid, Chip, Button } from "@mui/material";
import {getProductToys} from "../../services/firestore";
import "./detail.css";
import AppContext from '../../context/AppContext'


const Detail = () => {
  const { id } = useParams ();
  const history = useNavigate ();

  const [product, setProduct] = useState({});
  const findToy = async () => {
    const data =await getProductToys ();
    console.log(data);
    const filterToy = data.filter(
      (product) => product.id.trim() === id
      
    );
    console.log(filterToy);
    setProduct(filterToy[0]);
      
};
useEffect (() => {
  findToy();
  
}, []);

const { addToCart } = useContext(AppContext);

	const handleClick = item => {

		addToCart({...item,quantity: 1});
	}

return (
  <Container>
      <Button variant="outlined" onClick={() => history(-1)}>
        Back
      </Button>
      {Object.keys(product).length > 0 && (
        <Grid
          container
          alignItems="center"
          sx={{ height: "100vh" }}
        >
          <Grid item md={6}>
            <img src={product?.url} width={400} alt="" />
          </Grid>
          <Grid item md={6} >
            <hr/>
            <h2>{product?.name}</h2>
            <hr/>
            <br/>
            
            <Grid container>
              <Grid >
                <p>
                  <b>Código</b>: {product.id}
                </p>
                <p>
                  <b>Nombre</b>: {product.name}
                </p>
                <p>
                  <b>Descripción</b>: {product.descripcion}
                </p>
                <p>
                  <b>Dimensiones</b>: {product.dimension} cm
                </p>              
              </Grid>
              <Grid item md={12} mt={5}>
                <Button variant="contained" onClick={() => handleClick(product)} >Agregar al carrito</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
)
}
export default Detail;