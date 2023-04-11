import { Iuser } from "../interface/users";
import instance from "./instance";
export const singin=(user:Iuser)=>{
return instance.post("/signin",user)
}