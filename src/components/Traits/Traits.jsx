import React from "react";
import "./Traits.css";
import useFetch from "../../hooks/useFetch";

const Traits = ({ traits }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { data, loading, error } = useFetch(`${apiUrl}/professional`); 

    if (loading) return <p>Loading traits...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const displayedTraits = traits || data || []; 

    console.log(data);
    

    return (
        <section className="traits">
            <h2>Shaxsiy va Kasbiy Xususiyatlar</h2>
            {displayedTraits.length > 0 ? (
                displayedTraits.map((trait, index) => (
                    <div key={index} className="trait">
                        <p>{trait.name}</p>
                        <div
                            className="progress-bar"
                            style={{ width: `${trait.value}%` }}
                        >
                            {trait.value}%
                        </div>
                    </div>
                ))
            ) : (
                <p>No traits available to display.</p>
            )}
        </section>
    );
};

export default Traits;
