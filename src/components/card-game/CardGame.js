import React from 'react'
import { Link } from 'react-router-dom'
import { Img } from 'react-image'
import imagePlaceholder from '../../images/placeholder-image.webp'
import { useEffect } from 'react'
import { useState } from 'react'
import Loader from '../loader/Loader'
import './card-game.css'

const CardGame = ({ game }) => {
    const [processingImage, setProcessingImage] = useState(true);

    useEffect(() => {
        let intervalId

        if (processingImage) {
            intervalId = setInterval(() => {
                const img = new Image();
                img.src = imagePlaceholder;
                img.onload = () => {
                    setProcessingImage(false);
                    clearInterval(intervalId);
                };
            }, 500);
        }

        return () => { clearInterval(intervalId) }

    }, [processingImage]);

    return (
        <div key={game.id} className='col'>
            <div className='game-card-list card shadow-sm'>
                <Img
                    className="bd-placeholder-img card-img-top"
                    src={game.img}
                    alt={game.name}
                    loader={
                        <Loader />
                    }
                />
                <div className='card-body'>
                    <b className='card-text'>{game.name}</b>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className='btn-group'>
                            {
                                game.stash === 0
                                    ? <b className='game-stock'>SIN STOCK</b>
                                    : (
                                        <Link to={`/game/${game.id}`}>
                                            <button className='btn btn-sm btn-outline-secondary'>Ver detalles</button>
                                        </Link>
                                    )
                            }
                        </div>
                        <small className='text-muted'>{game.price}$</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(CardGame)