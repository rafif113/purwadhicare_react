import Axios from "axios"
import {  useDispatch } from "react-redux";



export const getCartData = (iduser) => {
   
    return (dispatch) => {
        Axios.get(`http://localhost:2200/cart/get?iduser=${iduser}`)
        .then((result)=>{
            console.log(result)
            // dispatch ke cart reducer dengan payload = result.data
            // agar payload bisa masuk ke dalam cartList
            dispatch({
                type : "FILL_CART",
                payload : result.data
            })
        })
        .catch((err)=>{
            alert("Terjadi kesalahan server")
            console.log(err)
        })
    }
}