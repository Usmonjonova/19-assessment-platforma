import React from "react";
import "./Diagnostics.css";

const Diagnostics = ({ description }) => (
    <section className="diagnostics">
        <h2>Psixologik Diagnostika</h2>
        <p>{description}</p>
    </section>
);

export default Diagnostics;
