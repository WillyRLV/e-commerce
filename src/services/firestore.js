import { initializeApp } from "firebase/app";
import {
     getFirestore,
     collection, 
     getDocs,
     setDoc,
     doc,
     } from "firebase/firestore/lite";
import { 
    getAuth,

    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
    updateProfile,
 } from "@firebase/auth";
 import Swal from 'sweetalert2';


const firebaseConfig = {
  apiKey: "AIzaSyAcvTpBwDUUMlfPsCGxfLIH4dWcbOiE8OU",
  authDomain: "data-base-7b254.firebaseapp.com",
  projectId: "data-base-7b254",
  storageBucket: "data-base-7b254.appspot.com",
  messagingSenderId: "444628107049",
  appId: "1:444628107049:web:3c89668f241cede3228138",
  measurementId: "G-5XQFVHXXB4",
};
const app = initializeApp(firebaseConfig);
// Iniciar firestore
// database : base de datos
const db = getFirestore(app);



// Hacer la peticion para poder traer los productos

export const auth = getAuth(app);

export const getProductToys = async () => {
  // paso 1: Traer la coleccion de datos
  const collectionToys = collection(db, "toys");
  // paso 2: Traer los documentos
  const documentToys = await getDocs(collectionToys);
  // paso 3: Crear un arreglo que guarde los documentos que estamos obteniendo
  const toys = documentToys.docs.map((doc) => doc.data());
  // const filterToys = async () => {
  //   toys.filter(t=>t.funcion === "sensorial")
  // }

  return toys;
};

export const loginUser= async (data) =>{
  await signInWithEmailAndPassword(
    auth, 
    data.email, 
    data.password
    ).then(()=>{
      window.location.reload();
      return(false)
      
    })
    .catch((error)=>{
      return(true)
    });
    
  };

export const logOutUser = async () => {
  await signOut(auth)

};
export const registerUser =async (data,rol)=>{
    try{
        const infoUser = await createUserWithEmailAndPassword(
          auth, 
          data.email, 
          data.password
          )
          await update(data)
          setData(infoUser,data,rol)
          Swal.fire('CUENTA CREADA!', 'la cuentase se creo satisfactoriamente', 'success').then((result)=>{
              if(result.isConfirmed){
                  window.location.href="/"
              }
          })
        }
        catch(error){
            Swal.fire({
                icon: 'error',
                title: 'Ocurrrio un error, vuelva a intentarlo!!',
                text: error.message,
              });
         
          };
}

    const setData= (infoUser,data,rol)=>{
        const docuRef = doc(db,`usuarios/${infoUser.user.uid}`);
          setDoc(docuRef,{
            correo:data.email,
            rol:rol,
            firstName:data.nombre,
            LastName:data.apellidos,
            photoURL:"https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
          });

    }
  
    const update = async (data) => {
      const profile = {
        displayName: data.nombre+" "+data.apellidos ,
        photoURL: "https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png",
      };
      console.log(profile)
      await updateProfile(auth.currentUser, profile);;
      
    };
  
  
