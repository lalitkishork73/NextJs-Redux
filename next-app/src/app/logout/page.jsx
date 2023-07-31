import React from 'react';
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
 

export default function Logout() {

    const deleteCookie = () => {
        // Set the cookie expiration date in the past
        console.log(document.cookie)
    };
    deleteCookie();


    return (<>

    </>)
}