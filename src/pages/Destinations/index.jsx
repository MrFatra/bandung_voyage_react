import React from 'react';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import useDestinations from '../../services/destination';

const Destinations = () => {
    const { errMessage, isLoading, destinations } = useDestinations(true);

    return (
        <div>
            <Navbar />
            <div className="px-5 pt-5">
                {errMessage && <p>{errMessage}</p>}
                <h1 className="font-bold text-2xl mb-4">Rekomendasi Destinasi Wisata Terbaik dari Kami:</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                    {destinations &&
                        destinations.map((destination) => (
                            <Card
                                key={destination.id}
                                title={destination.name}
                                description={destination.description}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Destinations;
