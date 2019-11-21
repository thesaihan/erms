import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import { apiProps } from "../utils/Constants";

import FaButton from "../components/FaButton";

import "./SubjectList.css";

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);

  const getSubjects = async () => {
    const res = await Axios.get(apiProps.host + "subject/all");
    setSubjects(res.data);
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div className="SubjectList erms-card erms-text">
      <div className="row justify-content-between">
        <div className="col">
          <h4 className="erms-text">List of Subjects</h4>
        </div>
        <div className="col">
          <Link to="/subject/id/new">
            <FaButton faName="plus" floatDir="right" />
          </Link>
        </div>
      </div>
      <div className="row d-none d-md-block erms-header-bar">
        <div className="col">
          <div className="row">
            <div className="col-md-2">Code</div>
            <div className="col-md-6">Name</div>
            <div className="col-md-4">
              <div className="row justify-content-between">
                <div className="col-4">
                  <span className="d-none d-lg-block">Pass</span>
                  <span className="d-none d-md-block d-lg-none">P</span>
                </div>
                <div className="col-4">
                  <span className="d-none d-lg-block">Excellent</span>
                  <span className="d-none d-md-block d-lg-none">E</span>
                </div>
                <div className="col-4">
                  <span className="d-none d-lg-block">Distinction</span>
                  <span className="d-none d-md-block d-lg-none">D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row erms-body-area">
        <div className="col">
          {subjects.map(sub => (
            <Fragment>
              <div className="row">
                <div className="col-md-2">
                  <Link
                    className="erms-hover erms-link"
                    to={`/subject/id/${sub.sub_code}`}
                  >
                    {sub.sub_code}
                  </Link>
                </div>
                <div className="col-md-6">{sub.sub_name}</div>
                <div className="col-md-4 pt-3 pt-md-0">
                  <div className="row justify-content-between">
                    <div className="col-4">
                      <span className="d-none d-md-block">{sub.sub_pass}</span>
                      <span className="d-block d-md-none text-center">
                        Pass
                        <br />
                        {sub.sub_pass}
                      </span>
                    </div>
                    <div className="col-4">
                      <span className="d-none d-md-block">
                        {sub.sub_excellent}
                      </span>
                      <span className="d-block d-md-none text-center">
                        Excellent
                        <br />
                        {sub.sub_excellent}
                      </span>
                    </div>
                    <div className="col-4">
                      <span className="d-none d-md-block">
                        {sub.sub_distinction}
                      </span>
                      <span className="d-block d-md-none text-center">
                        Distinction
                        <br />
                        {sub.sub_distinction}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </Fragment>
          ))}
        </div>
      </div>
      {/*
      <div className="row">
        <div className="col">
          <table className="table table-hover erms-text">
            <tbody>
              {subjects.map(sub => (
                <tr>
                  <td>{sub.sub_code}</td>
                  <td>{sub.sub_name}</td>
                  <td>{sub.sub_pass}</td>
                  <td>{sub.sub_excellent}</td>
                  <td>{sub.sub_distinction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      */}
    </div>
  );
};

export default SubjectList;
