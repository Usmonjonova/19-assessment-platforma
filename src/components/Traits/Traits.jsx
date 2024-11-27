import React from "react";
import "./Traits.css";
import useFetch from "../../hooks/useFetch";
import TraitsProgressBar from "../TraitsProgressBar";

const Traits = ({ traits }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { data, loading, error } = useFetch(`${apiUrl}/professional`);

    if (loading) return <p>Loading traits...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const displayedTraits = traits || data || [];

    return (
        <section className="knowledge-test py-6">
            <div className="container px-4 py-8">
                <h2 className="pl-6 mb-8 relative text-4xl font-semibold before:content-[''] before:absolute before:w-[13px] before:h-[43px] before:bg-[#0956AF] before:top-[-4px] before:left-0 after:content-[''] after:absolute after:w-[740px] after:h-[4px] after:bg-[#DEE2E6] after:top-5 after:right-0">
                    Шахсий ва касбий хусусиятлар
                </h2>
                <div className="flex gap-6 justify-between">
                    <TraitsProgressBar data={displayedTraits} />
                </div>
            </div>
        </section>
    );
};

export default Traits;
