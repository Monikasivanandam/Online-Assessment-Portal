import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "./api";
import "../../styles/questions.css";

function Questions() {

  const { examId } = useParams();

  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);

  const [answers, setAnswers] = useState([]);

  const [time, setTime] = useState(60);

  useEffect(() => {
    getQuestions();

  }, []);

  useEffect(() => {

    const timer = setInterval(() => {

      setTime((prev) => {

        if (prev === 1) {

          submitExam();

          clearInterval(timer);

          return 0;
        }

        return prev - 1;
      });

    }, 1000);


     return () => clearInterval(timer);

  }, [questions]);

  const getQuestions = async () => {

    const res = await API.get(
      `/exam/${examId}/questions`
    );

    setQuestions(res.data);
  };

  const handleAnswer = (index, value) => {

    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;

    setAnswers(updatedAnswers);
  };

  const submitExam = async () => {

    try {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      const res = await API.post(
         "/exam/submit",
        {
          userId: user.id,
          examId: parseInt(examId),
          answers: answers
        }
      );

      navigate("/result", {
        state: res.data
      });

    } catch (err) {

      alert("Submission Failed");
    }
  };
   return (

    <div className="page-container">

      <div className="question-card">

        <h1>Exam Questions</h1>

        <h2>
          Time Left: {time}s
        </h2>

        {
          questions.map((q, index) => (

            <div key={q.id}>

              <h3>
                {index + 1}. {q.question}
              </h3>

              <div className="option">
                <input
                type="radio"
                  name={index}
                  value={q.option1}
                  onChange={(e) =>
                    handleAnswer(
                      index,
                      e.target.value
                    )
                  }
                />
                {q.option1}
              </div>

              <div className="option">
                <input
                  type="radio"
                  name={index}
                  value={q.option2}
                  onChange={(e) =>
                    handleAnswer(
                      index,
                      e.target.value
                        )
                  }
                />
                {q.option2}
              </div>

              <div className="option">
                <input
                  type="radio"
                  name={index}
                  value={q.option3}
                  onChange={(e) =>
                    handleAnswer(
                      index,
                      e.target.value
                    )
                  }
                />
                {q.option3}
                  </div>

              <div className="option">
                <input
                  type="radio"
                  name={index}
                  value={q.option4}
                  onChange={(e) =>
                    handleAnswer(
                      index,
                      e.target.value
                    )
                  }
                />
                {q.option4}
              </div>

              <hr />
               </div>
          ))
        }

        <button
          className="btn"
          onClick={submitExam}
        >
          Submit Exam
        </button>

      </div>

    </div>
  );
}

export default Questions;