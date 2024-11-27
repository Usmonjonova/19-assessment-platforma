import React from 'react';
import ApexCharts from 'react-apexcharts';
import useFetch from '../../hooks/useFetch';

const RadialBars = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { data, loading, error } = useFetch(`${apiUrl}/competence`);

    const options = {
        chart: {
            height: 140,
            type: "radialBar"
        },
        stroke: {
            lineCap: "round"
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    margin: 15,
                    size: "70%"
                },
                dataLabels: {
                    name: {
                        offsetY: -10,
                        show: false,
                        color: "#888",
                        fontSize: "20px",
                        fontWeight: "600"
                    },
                    value: {
                        color: "#111",
                        fontSize: "30px",
                        show: true
                    }
                }
            }
        }
        
    };

    return (
        <div className='grid grid-cols-3 gap-6 max-w-[978px]'>
            {data && data.length > 0 ? (
                data.map((item, index) => {
                    const chartOptions = {
                        ...options,
                        colors: item.color ? [item.color] : ["#ccc"], 
                        series: [item.percentage], 
                        labels: [item.label]
                    };

                    return (
                        <div key={index} className='mb-5 w-full flex justify-between items-center'>
                            <div style={{ width: '140px' }}>
                                <ApexCharts
                                    options={chartOptions}
                                    series={chartOptions.series}
                                    type="radialBar"
                                    height={140}
                                />
                            </div>
                            <span className='text-2xl text-[rgb(0, 0, 0)] font-semibold'>{item.label}</span>
                        </div>
                    );
                })
            ) : (
                <p>Loading data...</p>
            )}
        </div>
    );
};

export default RadialBars;
