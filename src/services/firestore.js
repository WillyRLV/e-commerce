import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid";
const firebaseConfig = {
  apiKey: "AIzaSyAcvTpBwDUUMlfPsCGxfLIH4dWcbOiE8OU",
  authDomain: "data-base-7b254.firebaseapp.com",
  projectId: "data-base-7b254",
  storageBucket: "data-base-7b254.appspot.com",
  messagingSenderId: "444628107049",
  appId: "1:444628107049:web:3c89668f241cede3228138",
  measurementId: "G-5XQFVHXXB4"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getProductClothes = async () => {
  const collectionClothes = collection(db, "product_clothes");
  const documentClothes = await getDocs(collectionClothes);
  const clothes = documentClothes.docs.map((doc) => doc.data());
  return clothes;
};

export const storeProductClothe = async (product) => {
  const id = uuidv4().replaceAll("-", "");
  product.id = id;
  await setDoc(doc(db, "product_clothes", id), product);
};

export const updateProductClothe = async (id, product) => {
  const productRef = doc(db, "product_clothes", id);

  await updateDoc(productRef, product);
};

export const deleteProductClothe = async (id) => {
  await deleteDoc(doc(db, "product_clothes", id));
};

export const auth = getAuth();

export const updateUserProfile = async (profile) => {
  try {
    await updateProfile(auth.currentUser, profile);
    return {
      ok: true,
      data: "success",
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};

export const storeUser = async (email,password)=> {
  try {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    console.log(error.message);
    return {
      ok: false,
      data: error.message,
    };
  }
};

export const loginUser = async (email, password) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password);

    return {
      ok: true,
      data: user,
    };
  } catch (error) {
    return {
      ok: false,
      data: error.message,
    };
  }
};