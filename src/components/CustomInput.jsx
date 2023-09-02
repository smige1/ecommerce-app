import React from 'react'

const Custominput = (props) => {
    const { type, name, placeholder, classname, value, onChange, onBlur } = props
    return (
        <div>
            <input
                type={type}
                name={name}
                className={`form-control ${classname}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    )
}

export default Custominput;