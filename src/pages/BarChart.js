import React, { useContext } from 'react';
import { Bar } from 'react-chartjs-2';
import { TaskContext } from '../context/TaskContext';

function BarChart() {
    const { tasks } = useContext(TaskContext);

    // Task data for the bar chart
    const taskData = {
        labels: tasks.map((task) => task.name),
        datasets: [
            {
                label: 'Number of Tasks',
                data: tasks.map((task) => task.completed ? 1 : 0),
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderColor: 'rgba(75,192,192,1)',
                borderWidth: 1,
            },
        ],
    };
    return (
        <div>
            <div className="chart-container">
                <div className="chart">
                    <h3>Task Completion</h3>
                    <Bar data={taskData} />
                </div>
            </div>
        </div>
    );
}
export default BarChart;
