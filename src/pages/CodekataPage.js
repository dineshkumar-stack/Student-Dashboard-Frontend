import { Bar } from 'react-chartjs-2';

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function months(config) {
    var cfg = config || {};
    var count = cfg.count || 12;
    var section = cfg.section;
    var values = [];
    var i, value;

    for (i = 0; i < count; ++i) {
        value = MONTHS[Math.ceil(i) % 12];
        values.push(value.substring(0, section));
    }

    return values;
}
function CodeKataDetails() {



    // Task data for the bar chart
    const CodeKataData = {
        labels: months({ count: 12 }),
        datasets: [
            {
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
        ],
    };
    return (
        <div>
            <div className="chart-container">
                <div className="chart">
                    <h4>CodeKata</h4>
                    <Bar data={CodeKataData} />
                </div>
            </div>
        </div>
    );
}


export default CodeKataDetails;
