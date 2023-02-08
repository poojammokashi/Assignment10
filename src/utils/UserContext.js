import {createContext} from 'react'

const UserContext = createContext({
    user:{
    name: "Namaste React",
    email: "namastereact@dev.com"
    }
})

export default UserContext;