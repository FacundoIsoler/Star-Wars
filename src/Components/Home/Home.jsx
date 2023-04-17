import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MovieCard from '../MovieCard/MovieCard.jsx';
import { getMovies } from '../../Actions/index.js';
import Loading from '../Loading/Loading.jsx';
import styles from './Home.module.css';

export default function Home() {
    const dispatch = useDispatch();
    const allMovies = useSelector((state) => state.allMovies);
    const loading = useSelector((state) => state.loading)


    useEffect(() => {
        dispatch(getMovies());
    }, [dispatch]);

    function handleClick(e) {
        e.preventDefault();
        dispatch(getMovies());
    }

    return (
        <div>
            {
                !loading ?

                    <div className={styles.container}>

                        <h1>STAR WARS</h1>
                        <button onClick={handleClick}>Reload all movies</button>
                        {
                            Object.values(allMovies).map((movie) => (
                                <div key={movie.episode_id} className={styles['movie-card']}>
                                    <MovieCard episode_id={movie.episode_id} title={movie.title} director={movie.director} />
                                </div>
                            ))
                        }
                    </div >
                    :
                    <Loading />
            }
        </div>
    );
}



