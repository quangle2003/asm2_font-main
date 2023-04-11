import { json } from "react-router-dom";
import Iproduct from "../interface/product";
import instance from "./instance";
const {accessToken}=JSON.parse(localStorage.getItem("user")!)
export const getAll=()=>{
    return instance.get("/products")
}
export const getOne=(id:string)=>{
    return instance.get("/products/"+id)
}
export const addproduct=(data:Iproduct)=>{
    return instance.post("/products",data)
}
export const deleteproduct=(id:string)=>{
    return instance.delete("/products/"+id,{
        headers:{
            Authorization:`Bearer ${accessToken}`
        }
    })
}
export const updateproduct=(data:Iproduct)=>{
    return instance.put("/products/"+data._id,data)
}