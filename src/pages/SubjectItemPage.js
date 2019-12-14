import React from "react";

import Title from "../components/Title";
import Subject from "../logicalComponents/Subject";

const SubjectItemPage = ({match}) => {
  return (
    <div className="SubjectItemPage">
      <Title>Subject</Title>
      <Subject code={match.params.id}/>
    </div>
  );
};

export default SubjectItemPage;
