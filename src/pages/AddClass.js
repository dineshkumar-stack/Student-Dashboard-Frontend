import React from "react";

function AdditionalClass() {
    const tasks = [
        {
            id: 1,
            title: "GifHub",
            Date: "13/08/2023 - Sunday - 8:00 AM : 10:30 AM",
            link: "https://example.com/assignment1",
        },
        {
            id: 2,
            title: "AWS Day 1",
            Date: "13/08/2023 - Sunday - 8:00 AM : 10:30 AM",
            link: "https://example.com/assignment1",
        },
        {
            id: 3,
            title: "AWS Day 1",
            Date: "13/08/2023 - Sunday - 8:00 AM : 10:30 AM",
            link: "https://example.com/assignment1",
        },
        {
            id: 4,
            title: "AWS Day 1",
            Date: "13/08/2023 - Sunday - 8:00 AM : 10:30 AM",
            link: "https://example.com/assignment1",
        },
        {
            id: 5,
            title: "AWS Day 1",
            Date: "13/08/2023 - Sunday - 8:00 AM : 10:30 AM",
            link: "https://example.com/assignment1",
        },
        {
            id: 6,
            title: "AWS Day 1",
            Date: "13/08/2023 - Sunday - 8:00 AM : 10:30 AM",
            link: "https://example.com/assignment1",
        },

    ];

    return (
        <div className="task-page">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th colSpan="2">Additional Class</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, index) => (
                        <tr key={task.id}>
                            <td>{task.title}</td>
                            <td className="AddClassDate">{task.Date}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdditionalClass;
