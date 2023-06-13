import { useContext } from "react"
import { EmailContext } from "../../context/emailContext"
import Favorites from "../favorites/favorites"
import Login from "../login/login"


export default function Private(){
    var {emailValue}=useContext(EmailContext)
    

    return ((emailValue!=="")?<Favorites/>:<Login/>)
}