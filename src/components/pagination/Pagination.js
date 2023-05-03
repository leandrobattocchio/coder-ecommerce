import React, { useEffect } from 'react'
import usePagination from '../../hooks/usePagination'
import CardGame from '../card-game/CardGame'

const Pagination = ({ games, max: MAX_PER_PAGE }) => {

    const { firstPerPage, pagination, handleNext, handlePrev, page } = usePagination({ games, MAX_PER_PAGE })

    useEffect(() => {
        if (games && games.length > MAX_PER_PAGE) firstPerPage()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [games])

    return (
        <>
            <div className='album py-5'>
                <div className='container'>
                    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3'>
                        {pagination.map((game, index) => (
                            <CardGame game={game} key={index} />
                        ))}
                    </div>
                </div>
            </div>
            <div style={{ textAlign: 'center' }}>
                {(page === 1) &&
                    <>
                        <button className='btn btn-dark' onClick={handlePrev} disabled>Prev</button>
                        <a className='btn btn-dark' href='#top' onClick={handleNext}>Next</a>
                    </>
                }
                {((page * MAX_PER_PAGE < games.length) && (page * MAX_PER_PAGE !== MAX_PER_PAGE)) &&
                    <>
                        <a className='btn btn-dark' onClick={handlePrev} href='#top'>Prev</a>
                        <a className='btn btn-dark' onClick={handleNext} href='#top'>Next</a>
                    </>
                }
                {(page * MAX_PER_PAGE >= games.length) &&
                    <>
                        <a className='btn btn-dark' onClick={handlePrev} href='#top'>Prev</a>
                        <button className='btn btn-dark' onClick={handleNext} disabled>Next</button>
                    </>
                }
            </div>
        </>
    )
}

export default Pagination