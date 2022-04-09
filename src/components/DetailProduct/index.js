import { useEffect, useState } from "react";
import { Grid, TextField, Button, Container } from "@mui/material";
import { doc, getDoc, updateDoc } from "firebase/firestore/lite";
import { getProductShopId, getProductShop, updateProductShop,db, deleteProductShop } from "../../services";
import { useParams } from "react-router-dom";
import swal from "sweetalert";

const DetailProduct = () => {

    const { id } = useParams();

    const [open, setOpen] = useState(false);
    //Valores de inputs
    const [values, setValues] = useState({
        name: "",
        descripcion: "",
        dimension: "",
        funcion: "",
        url: "",
        rango: "",
        precio: "",
        material: "",
    });
    const ChangeInput = (e) => {
        const { value, name } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };
    const getProductShopId = async (id) => {
        const p = await getDoc(doc(db, "toys", id)); 
        if (p.exists()) {            
            setValues({...values,
                name: p.data().name,
                descripcion: p.data().descripcion,
                dimension: p.data().dimension,
                funcion: p.data().funcion,
                url: p.data().url,
                rango:  p.data().rango,
                precio:  p.data().precio,
                material:  p.data().material,
            });
        } else {
            console.log("No existe")
        }
    }

    const UpdateProducto = async()=>{
        await updateProductShop(id,values);
        window.location.href="/admin/";
    }

    const DeleteProducto = async()=>{
        const response = await swal({
            title: "Estas seguro eliminar?",
            text: "Recuerda que una vez eliminado no hay vuelta atras",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });
        if (response) {
            await deleteProductShop(id);
            await getProductShopId();
        }
    }

    useEffect(() => {
        getProductShopId(id);
    }, []);

    return (
        <Container>
            <Grid container >
                <Grid item md={12} mt={5} >
                    <TextField label="Nombre del Producto" value={values.name} name="name" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={12} mt={2}>
                    <TextField label="Dimensiones del producto" value={values.dimension} name="dimension" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={12} mt={2}>
                    <TextField label="Url de Foto" value={values.url} name="url" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={6} mt={2}>
                    <TextField label="Ingrese Rango de Edad" value={values.rango} name="rango" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={6} mt={2}>
                    <TextField label="Precio" value={values.precio} name="precio" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={12} mt={2}>
                    <TextField label="Material del Producto" value={values.material} name="material" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={12} mt={2}>
                    <TextField label="Funcion del Producto" value={values.funcion} name="funcion" fullWidth onChange={ChangeInput} />
                </Grid>
                <Grid item md={12} mt={2}>
                    <TextField label="Descripcion del Producto" value={values.descripcion} name="descripcion" fullWidth onChange={ChangeInput} />
                </Grid>

                <Grid item md={6} mt={3}>
                    <Button variant="contained" name="btn" color="success" onClick={UpdateProducto} fullWidth>Actualizar</Button>
                </Grid>
                <Grid item md={6} mt={3}>
                    <Button variant="contained" name="btn" color="error" onClick={DeleteProducto} fullWidth>Eliminar</Button>
                </Grid>
            </Grid>
        </Container>
    )
}
export default DetailProduct;