import React from 'react'
import useUserDetail from '../../hooks/useUserDetail'
import zelda from '../../images/zelda.webp'
import './user-info-detail.css'

const UserInfoDetail = ({ user }) => {

    const { name, lastName, phone, handleSave, handleEdit, handlePassword, toggle } = useUserDetail({ user })
    const INPUTS = [name, lastName, phone]

    return (
        <>
            <h4 className='user-info-title'>Editar perfil</h4>
            <img src={zelda} alt='zelda' className='user-info-img img-fluid' />
            <form onSubmit={handleSave} style={{ gridColumn: '2' }}>
                {INPUTS.map((input, index) => {
                    return (
                        <div className='form-group' key={index}>
                            <label htmlFor='name'>{input.label}</label>
                            <input className="form-control"  {...input} disabled={toggle} required />
                        </div>
                    )
                })}
                <div className='user-info-detail-buttons'>
                    <button className="btn btn-secondary" type='button' onClick={handleEdit}>Editar</button>
                    <button className="btn btn-secondary" type='submit' disabled={toggle}>Guardar</button>
                    <button className="btn btn-secondary text-right" type='button' onClick={handlePassword} id='reset-password'>Reset pass</button>
                </div>
            </form>
        </>
    )
}

export default UserInfoDetail