import { useState } from 'react'
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { signupUser, loginUser } from '../reducer/authReducer'

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [auth, setAuth] = useState('login')
    const dispatch = useDispatch()

    const authenticate = () => {
        if (auth == 'signup') {
            dispatch(signupUser({ email, password }))
            setEmail('');
            setPassword('');
        } else {
            dispatch(loginUser({ email, password }))
            setEmail('');
            setPassword('');
        }
    }
    return (
        <View style={style.cont}>
            <Text style={style.text}>{auth}</Text>
            <TextInput
                style={style.textinput}
                keyboardType='email-address'
                placeholder='Email'
                value={email}
                onChangeText={(e) => {
                    setEmail(e)
                }} />
            <TextInput
                style={style.textinput}
                secureTextEntry
                placeholder='Password'
                value={password}
                onChangeText={(e) => {
                    setPassword(e)
                }} />
            {auth === 'login' ?
                <TouchableOpacity onPress={() => {
                    setAuth('signup')
                }}><Text style={{ textAlign: 'center', fontSize: 18 }}>Don't have an account!</Text></TouchableOpacity> :
                <TouchableOpacity onPress={() => {
                    setAuth('login')
                }}><Text style={{ textAlign: 'center', fontSize: 18 }}>Already have an account?</Text></TouchableOpacity>
            }
            <Button
                title={auth}
                color="#f2d511"
                onPress={() => {
                    authenticate()
                }} />
        </View>
    )
}

const style = StyleSheet.create({
    cont: { height: '50%', justifyContent: "space-around", marginHorizontal: 20 },
    text: { fontSize: 24, textAlign: "center" },
    textinput: { height: 50, borderColor: '#f2d511', borderWidth: 2, }
})