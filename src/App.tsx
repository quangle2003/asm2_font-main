import { Routes,Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ListProduct from "./pages/admin/ListProduct"
import { useEffect, useState } from "react"
import { deleteproduct, getAll } from "./api/product"
import Iproduct from "./interface/product"
import Singin from "./pages/login/singin"


function App() {
  const [products,setProducts]=useState<Iproduct[]>([])
  useEffect(()=>{
 getAll().then(({data})=>setProducts(data))
  },[])


  const handeldelete=(id:string)=>{
    deleteproduct(id).then(()=>setProducts(products.filter((item)=>item._id!==id)))
  }

  return (
   <Routes>
    <Route path="/">
     <Route index element={<HomePage/>}/>
     <Route path="singin" element={<Singin/>}/> 
     <Route path="admin/product">
     <Route index element={<ListProduct product={products} onRemove={handeldelete}/>}/>
     </Route>
    </Route>
   </Routes>
  )
}

export default App
