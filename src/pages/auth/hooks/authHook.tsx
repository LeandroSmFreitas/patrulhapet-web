import { useEffect } from "react"
import AuthUtils from "../../../utils/auth-utils"
import { useNavigate } from "react-router-dom"


export const UseAuth = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if(AuthUtils.isAuthenticated()){
            navigate("/dashboard")
        }
    },[])

    return {
        
    }
}