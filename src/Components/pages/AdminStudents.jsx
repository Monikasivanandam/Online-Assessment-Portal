import { useEffect, useState } from "react";

import API from "./api";

function AdminStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents = async () => {
    const res = await API.get("/admin/students");

    setStudents(res.data);
  };

  return (
    <div className="table-container">
      <h1>All Students</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>

            <th>Name</th>

            <th>Email</th>

            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>

              <td>{s.name}</td>

              <td>{s.email}</td>

              <td>{s.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminStudents;
