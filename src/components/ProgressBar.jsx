import React from "react";

const ProgressBar = ({ progress }) => {
    return (
        <div>
            <h4 className="text-5xl font-medium text-[#0956AF] ml-4"> {progress} %</h4>
            <div className="relative w-[333px] h-[45px] bg-[#DEE2E6] rounded-lg overflow-hidden">
                <div
                    className="h-full bg-[#28A264] flex items-center justify-center"
                    style={{ width: `${progress}%` }}
                >
                    <span className="text-white font-bold text-lg">Умумий натижа</span>
                </div>
                <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#1565c0] font-bold text-lg">
                </span>
            </div>
        </div>
    );
};

export default ProgressBar;
