import React from "react";
import "./Traits.css";

const Traits = ({ traits }) => (
    <section className="traits">
        <h2>Shaxsiy va Kasbiy Xususiyatlar</h2>
        {traits.map((trait, index) => (
            <div key={index} className="trait">
                <p>{trait.name}</p>
                <div className="progress-bar" style={{ width: `${trait.value}%` }}>
                    {trait.value}%
                </div>
            </div>
        ))}
    </section>
);

export default Traits;
