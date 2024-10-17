import { useLocation, useNavigate } from "react-router-dom"


export const useSideBar = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const selectedPage = (page: string) => {
        return location.pathname === page
    }

    const handleChangePage = (page: string) => {
        navigate(page)
    }

    return {
        selectedPage,
        handleChangePage
    }
}