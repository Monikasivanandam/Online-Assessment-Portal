import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import API from "./api";
import "../../styles/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));

      if (!user) {
        alert("Please Login");

        return;
      }

      const res = await API.get(`/student/profile/${user.id}`);

      setProfile(res.data);
    } catch (err) {
      console.log(err);

      alert("Failed To Load Profile");
    }
  };

  if (!profile) {
    return (
      <div className="page-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="page-container">
      <div className="profile-card">
        <div className="profile-header">
          <h1>Name:{profile.name}</h1>

          <h3>Mail:{profile.email}</h3>

          <h2>
            Role:
            {profile.role}
          </h2>

          <h2>
            Total Tests:
            {profile.totalTests}
          </h2>
        </div>

        <h2>Exam Results</h2>

        {!profile.results || profile.results.length === 0 ? (
          <h3>No Tests Attempted</h3>
        ) : (
          profile.results.map((r) => (
            <div className="result-item" key={r.id}>
              <h3>
                Exam Name:
                {r.examTitle}
              </h3>

              <h3>
                Score:
                {r.score}
              </h3>
            </div>
          ))
        )}
        <button
          className="btn"
          onClick={() => {
            localStorage.removeItem("user");

            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
