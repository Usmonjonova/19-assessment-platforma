import React from 'react';
import ReactApexChart from 'react-apexcharts';
import useFetch from '../hooks/useFetch';

const ApexChart = () => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const { data, loading, error } = useFetch(`${apiUrl}/knowlodge`);

    const chartData = React.useMemo(() => {
        if (loading || error || !data?.lineChart) {
            return {
                series: [
                    {
                        name: 'Desktops',
                        data: [],
                    },
                ],
                options: {
                    chart: {
                        height: 350,
                        type: 'line',
                        zoom: {
                            enabled: false,
                        },
                    },
                    dataLabels: {
                        enabled: false,
                    },
                    stroke: {
                        curve: 'straight',
                    },
                    grid: {
                        row: {
                            colors: ['#f3f3f3', 'transparent'],
                            opacity: 0.5,
                        },
                    },
                    xaxis: {
                        categories: [],
                    },
                },
            };
        }

        return {
            series: [
                {
                    name: 'API Data',
                    data: data.lineChart.data,
                },
            ],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                    zoom: {
                        enabled: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'straight',
                },
                grid: {
                    row: {
                        colors: ['#f3f3f3', 'transparent'],
                        opacity: 0.5,
                    },
                },
                xaxis: {
                    categories: data.lineChart.labels,
                },
            },
        };
    }, [data, loading, error]);

    return (
        <div>
            <div id="chart">
                <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={200} />
            </div>
        </div>
    );
};

export default ApexChart;
