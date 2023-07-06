"use client"
import {store} from './store';
import { Provider } from 'react-redux';

export default function ReduxStoreProvider({children}:any){
    return (
        <Provider store={store}>
        {children}
        </Provider >
    )
}