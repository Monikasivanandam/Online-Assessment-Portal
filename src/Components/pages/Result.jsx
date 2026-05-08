import { useLocation, useNavigate } from "react-router-dom";
import "../../styles/Result.css";

function Result() {
  const location = useLocation();

  const navigate = useNavigate();

  const result = location.state;

  return (
    <div className="page-container">
      <div className="result-card">
        <h1>Exam Result</h1>

        <div className="score">{result.score}</div>
        <h3>Exam Submitted Successfully</h3>

        <button className="btn" onClick={() => navigate("/profile")}>
          Go To Profile
        </button>
      </div>
    </div>
  );
}

export default Result;
