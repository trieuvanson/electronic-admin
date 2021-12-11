import {useEffect, useState} from 'react';
import {LOCAL_LINK} from "../utils/hyperlink";
import axios from "axios";

function UserApi(token) {
    const [user, setUser] = useState([]);
    const [users, setUsers] = useState([]);
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get(`${LOCAL_LINK}/api/user/infor`, {
                        headers: {Authorization: `Bearer ${token}`}
                    })
                    await res.data.roles.forEach((role) => {
                        if (role.id === "ADMIN_ROLE") {
                            setIsAdmin(true)
                            setUser(res.data)
                            setIsLogged(true)
                        }
                    })

                } catch (err) {
                    console.log(err)
                    localStorage.clear()
                    window.location.href = "/admin"
                }
            }
            getUser().then();
            getAllUsers().then()
        }
    }, [token])

    const getAllUsers = async () => {
        await axios.get(`${LOCAL_LINK}/api/users`,{
            headers: {Authorization: `Bearer ${token}`}
        })
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const updateUser = async (user) => {
        await axios.put(`${LOCAL_LINK}/api/user/`, user, {
            headers: {Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'}
        })
            .then(res => {
                getAllUsers()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        personal: [user, setUser],
        users: [users, setUsers],
        action: {updateUser}
    }
}

export default UserApi