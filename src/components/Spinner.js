import React, { Component } from 'react'
import loadingSpinner from './Images/loadingSpinner.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-3">
                <img src={loadingSpinner} alt="loading"/>
            </div>
        )
    } 
}

export default Spinner
