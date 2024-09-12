import './Card.css'

export function Card({ title, description, assignedTo, startDate, endDate }) {
    return (
        <div className="card">
            <p className="card-title">{title}</p>
            <div className="card-content">
                <p className="desc">{description}</p>
            </div>
            <div className="card-info">
                <div className="assigned-to">
                    <span className="material-symbols-outlined">account_circle</span>
                    <p>{assignedTo}</p>
                </div>
                <p className="date">{startDate} - {endDate}</p>
            </div>
        </div>
    );
}
