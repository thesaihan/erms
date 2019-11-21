import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./StudentList.css";
import { apiProps } from "./../utils/Constants";
import Axios from "axios";

import FaButton from "../components/FaButton";

const StudentList = () => {
  const [stdList, setStdList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getStdList();
  }, []);

  const getStdList = async () => {
    setIsLoading(true);
    const result = await Axios.get(apiProps.host + "student/all");
    setTimeout(()=>{
      setStdList(result.data);
      setIsLoading(false);
    },1000);
  };

  return (
    <div className="StudentList erms-card">
      <div className="row justify-content-between">
        <div className="col">
          <h4 className="erms-text">List of Students</h4>
        </div>
        <div className="col">
          <Link to="/student/id/new">
            <FaButton faName="plus" floatDir="right" />
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <table
            className={`table ${isLoading ? "" : "table-hover"} mt-3 erms-text`}
          >
            <thead>
              <tr>
                <th />
                <th>ID</th>
                <th>Name</th>
                <th>Name (MM)</th>
                <th>Gender</th>
                <th>Major</th>
                <th>DoB</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan={7}>
                    <div className="spinner-container">
                      <div className="spinner spinner-2 mx-auto" />
                    </div>
                  </td>
                </tr>
              ) : (
                stdList.map(std => (
                  <tr key={std.std_id}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>
                      <Link
                        className="erms-hover erms-link"
                        to={`/student/id/${encodeURIComponent(std.std_id)}`}
                      >
                        {std.std_id}
                      </Link>
                    </td>
                    <td>{std.std_name}</td>
                    <td>{std.std_name_mm}</td>
                    <td>{std.std_gender}</td>
                    <td>{std.major_code}</td>
                    <td>{std.std_dob}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
