import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { ComplicationContext } from '../context/ComplicationContext';

function PieChart() {
    const { complications } = useContext(ComplicationContext);



    // Complication data for the pie chart
    const complicationData = {
        labels: Object.keys(complications),
        datasets: [
            {
                data: Object.values(complications),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4CAF50',
                    '#E91E63',
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div>
            <div className="chart-container">
                <div className="chart">
                    <h5>Complication Distribution</h5>
                    <Pie data={complicationData} />
                </div>
            </div>
        </div>

    );
}

export default PieChart;
