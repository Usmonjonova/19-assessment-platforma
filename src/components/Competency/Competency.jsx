import React from "react";
import "./Competency.css";

const Competency = ({ competencies }) => (
    <section className="competency">
        <h2>Kompetensiyalar</h2>
        <div className="competency-list">
            {competencies.map((comp, index) => (
                <div key={index} className="competency-item">
                    <p>{comp.name}</p>
                    <p>{comp.value}%</p>
                </div>
            ))}
        </div>
    </section>
);

export default Competency;
