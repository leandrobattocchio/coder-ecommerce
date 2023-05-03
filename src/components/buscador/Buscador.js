import React from 'react'
import { GlobalProvider } from '../../context/GlobalContextProvider'

const Buscador = () => {

    const {search, handleSearch} = GlobalProvider()
    return (
        <div className='form-outline w-75' style={{margin: '0 auto'}}>
            <input className='form-control' placeholder='Search...' value={search} onChange={handleSearch} />
        </div>
    )
}

export default Buscador