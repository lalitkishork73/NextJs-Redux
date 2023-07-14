import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { TodoAdd, TodoGet, TodoRemove } from '../reducer/todoReducer'
import { logout } from '../reducer/authReducer'
export default function Todo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    // const set = useSelector(state => state?.todo?.data)

    // useEffect(() => {
    //     dispatch(TodoGet())
    //     console.log("a")
    // }, [])
    const addTodo = () => {
        dispatch(TodoAdd({ todo: input }))
    }

    const removeTodo = (id) => {
        // dispatch(TodoRemove(id))
    }

    const logOut = () => {
        dispatch(logout())
    }



    const ItemList = () => {
        return (<>
            <View style={style.list}>
                <Text style={{ fontSize: 20 }}>Item1</Text>
                <Feather name='delete' size={30} color="#f2d511" />
            </View>
        </>)
    }

    return (
        <View style={style.cont}>
            <Text style={style.text}>Todo</Text>
            <Button
                title='logout'
                color='#f2d511'
                onPress={() => {
                    logOut()
                }} />

            <TextInput
                style={style.textinput}
                placeholder='Write Todo'
                value={input}
                onChange={(e) => {
                    setInput(e)
                }} />
            <Button
                title='Add Todo'
                color='#f2d511'
                onPress={() => {
                    addTodo()
                }} />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
            <ItemList />
        </View>
    )
}

const style = StyleSheet.create({
    cont: { height: "100%", justifyContent: "space-around", marginHorizontal: 20 },
    text: { fontSize: 24, textAlign: "center" },
    textinput: { height: 50, borderColor: '#f2d511', borderWidth: 2, marginVertical: 10 },
    list: {
        padding: 15,
        borderBottomColor: "grey",
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})