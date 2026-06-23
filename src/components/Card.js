import React from 'react';

const Card = ({ data }) => {
    const safeData = Array.isArray(data) ? data : [];

    return (
        <div className='row g-4'>
            {safeData.map((curItem, index) => {

                const imageSrc =
                    curItem?.image ||
                    'https://via.placeholder.com/640x360?text=News+Image';

                return (
                    <div className='col-md-6 col-lg-4' key={curItem?.url || index}>
                        <div className='card newsCard h-100'>

                            <img
                                className='card-img-top'
                                src={imageSrc}
                                alt={curItem?.title || 'News article'}
                                onError={(e) => {
                                    e.target.src =
                                        'https://via.placeholder.com/640x360?text=No+Image';
                                }}
                            />

                            <div className='card-body d-flex flex-column top'>
                                <h5 className='newsCardTittle card-title'>
                                    {curItem?.title || 'No Title'}
                                </h5>

                                <p className='newsCardText card-text flex-grow-1'>
                                    {curItem?.description || 'No description available'}
                                </p>

                                <a
                                    href={curItem?.url}
                                    target='_blank'
                                    rel='noreferrer'
                                    className='btn mt-auto readMoreBtn'
                                >
                                    Read More
                                </a>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Card;