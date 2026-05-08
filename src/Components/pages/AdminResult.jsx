import { useEffect, useState } from "react";

import API from "./api";

function AdminResults() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    getResults();
  }, []);

  const getResults = async () => {
    const res = await API.get("/admin/results");

    setResults(res.data);
  };

  return (
    <div className="table-container">
      <h1>Exam Results</h1>

      <table>
        <thead>
          <tr>
            <th>User ID</th>

            <th>Exam</th>

            <th>Score</th>
          </tr>
        </thead>

        <tbody>
          {results.map((r) => (
            <tr key={r.id}>
              <td>{r.userId}</td>

              <td>{r.examTitle}</td>

              <td>{r.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminResults;
