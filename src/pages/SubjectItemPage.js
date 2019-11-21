import React from "react";

import Title from "../components/Title";

const SubjectItemPage = ({match}) => {
  return (
    <div>
      <Title>Subject Item Page</Title>
      <div className="row">
        <div className="col">
            <h4 className="text-center">{match.params.id}</h4>
        </div>
      </div>
    </div>
  );
};

export default SubjectItemPage;
