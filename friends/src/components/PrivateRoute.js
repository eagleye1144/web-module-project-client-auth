import React from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRoute({component: Component, ...rest}) {

    return (
        <Route {...rest} render ={() =>{

            if (window.localStorage.getItem('token')) {
                    console.log('Im here')
                return <Component />
            } else {
                return <Redirect to="/login"/>
            }
        }}/>

    )
}
export default PrivateRoute