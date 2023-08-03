import { useState } from "react";

const Question = ({info, title }) => {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <article className="question">
            <header>
                <h5>{title}</h5>
                <button className="question-btn" onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'hide' : 'show'}</button>
            </header>
                {showInfo && <p>{info}</p>}
        </article>
    );
}

export default Question;