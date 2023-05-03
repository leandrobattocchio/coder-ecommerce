import React from 'react'
import './form.css'

const Form = ({ inputs, handleSubmit, toggle, buttonText }) => {

    return (
        <div>
            <form onSubmit={handleSubmit} className='formulario'>
                {inputs.map((inputData, index) => {
                    return (
                        <div className="form-group" key={index} >
                            <label htmlFor={index}>{inputData.label}</label>
                            <input {...inputData} className="form-control" id={index} aria-describedby="emailHelp" style={{ display: 'block', margin: '0 auto' }}  required/>
                        </div>
                    )
                })}
                {
                    <div className="form-group">
                        <button type="submit" className="btn btn-secondary" style={{ marginTop: '5px' }} disabled={!toggle}>{buttonText}</button>
                    </div>
                }
            </form>
        </div>
    )
}

export default Form