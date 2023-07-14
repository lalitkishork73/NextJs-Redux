import AsyncStorage from '@react-native-async-storage/async-storage';
 

const token = AsyncStorage.getItem('token')

export const Post = async (api, body) => {
    const res = await fetch(`http://localhost:3001/${api}`,
        {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(body)
        })

    return await res.json();
}


export const getTodo = async (api) => {
    const res = await fetch(`http://localhost:3001/${api}`, {
        method: 'GET',
        headers: {
            'Authorization': token
        }
    })
    return await res.json();
}
export const removeTodo = async (api) => {
    const res = await fetch(`http://localhost:3001/${api}`, {
        method: 'DELETE',
        headers: {
            'Authorization': token
        }
    })
    return await res.json();
}