import React, { Fragment } from 'react';
import AppBar from '../appBar';
import './style.css';

function Page(props) {
    const {
        movements,
    } = props;

    const isEmpty = movements.length === 0;

    return (
        <Fragment>
            <AppBar />

            <div className="results-page">
                {isEmpty ?
                    <h3>
                        No hay movimientos.
                    </h3>
                    :
                    movements.map(item =>
                        <div
                            key={item.id}
                            className="card-container"
                        >
                            <div
                                className="card"
                            >
                                        <h5>
                                            {item.title}
                                        </h5>
                                        <p>
                                            {item.content}
                                        </p>
                            </div>
                    </div>)
                }
            </div>
        </Fragment>
    );
}

export default Page;
