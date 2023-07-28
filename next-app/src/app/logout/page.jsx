"use client"
import { useCookies } from 'react-cookie';
import { redirect } from 'next/navigation'
import { useEffect } from 'react';
export default function Logout() {
    const [cookies, removeToken] = useCookies(['token']);

    useEffect(() => {

    }, [removeToken])

    // document.cookies('token')
    console.log(cookies)
    return (<>
        {
            cookies[0]?.token ? redirect('/') : null
        }
    </>)
}