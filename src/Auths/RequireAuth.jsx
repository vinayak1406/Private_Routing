import React from 'react'
import { useAuth } from './auth'
import { Navigate,useLocation} from 'react-router'

const RequireAuth = ({children}) => {
    const location = useLocation()
    const auth = useAuth()
    if(!auth.user){
        return <Navigate to='/signin' state={{path:location.pathname}}/>
    }
  return children
}

export default RequireAuth