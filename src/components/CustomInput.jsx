import React from 'react'

const Custominput = (props) => {
    const { type, name, placeholder, classname } = props
    return (
        <div>
            <input
                type={type}
                name={name}
                className={`form-control ${classname}`}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Custominput;