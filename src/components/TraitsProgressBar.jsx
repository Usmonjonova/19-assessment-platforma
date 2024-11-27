import React from "react";

const TraitsProgressBar = ({ data }) => {
    return (
        <div className="space-y-4 w-full">
            <div className="grid grid-cols-2 gap-6">
                {data.percents.map((item, index) => (
                    <div key={index}>
                        <div className="flex justify-between items-center mb-2">
                            <span>{item.label}</span>
                            <span>{item.percentage}%</span>
                        </div>
                        <div className="w-full h-2 bg-[#DEE2E6] rounded">
                            <div
                                className="h-2 bg-[#0956AF] rounded"
                                style={{ width: `${item.percentage}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TraitsProgressBar;
