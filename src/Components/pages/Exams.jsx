import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import API from "./api";

import "../../styles/Exam.css";

function Exams() {

    const [exams, setExams] =
        useState([]);

    const navigate = useNavigate();

    useEffect(() => {

        getExams();

    }, []);

    const getExams = async () => {

        const res = await API.get(
            "/exam/all"
        );

        setExams(res.data);
    };

    return (

        <div className="page-container">

            <div className="exam-grid">

                {
                    exams.map((exam) => (

                        <div
                            className="exam-card"
                            key={exam.id}
                        >

                            <h2>
                                {exam.title}
                            </h2>

                            <h3>
                                Duration:
                                {exam.duration}
                                mins
                            </h3>

                            <button
                                className="btn"
                                onClick={() =>
                                    navigate(
                                      `/questions/${exam.id}`
                                    )
                                }
                            >
                                Start Exam
                            </button>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default Exams;