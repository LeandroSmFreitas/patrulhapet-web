import { useLocation, useNavigate } from "react-router-dom"
import AuthUtils from "../../../utils/auth-utils"


export const useSideBar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const selectedPage = (page: string) => {
        return location.pathname === page
    }

    const handleChangePage = (page: string) => {
        navigate(page)
    }

    const handleLoggout = () => {
        AuthUtils.removeToken()
        navigate("/")
    }

    return {
        selectedPage,
        handleChangePage,
        handleLoggout
    }
}