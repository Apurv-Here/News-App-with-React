import React from 'react'
import loadingSpinner from './Images/loadingSpinner.gif'
const Spinner = () => {

    return (
        <div className="text-center my-5">
            <img src={loadingSpinner} alt="loading" />
        </div>
    )

}

export default Spinner
