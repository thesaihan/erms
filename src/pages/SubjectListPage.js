import React from "react";
import "./SubjectListPage.css";

import Title from "../components/Title";
import SubjectList from '../logicalComponents/SubjectList';

const SubjectListPage = () => {
  return (
    <div className="SubjectListPage">
      <Title>Subject</Title>
      <div className="row">
        <div className="col">
          <SubjectList/>
        </div>
      </div>
    </div>
  );
};

export default SubjectListPage;
