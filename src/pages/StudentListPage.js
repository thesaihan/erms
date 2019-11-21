import React from "react";
import "./StudentListPage.css";

import Title from '../components/Title';
import StudentList from './../logicalComponents/StudentList';

const StudentListPage = () => {
  return (
    <div className="StudentListPage">
      <Title>Student Information</Title>
      <div className="row">
        <div className="col">
          <StudentList/>
        </div>
      </div>
    </div>
  );
};

export default StudentListPage;
