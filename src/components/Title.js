import React from "react";

const Title = props => (
  <div className="row">
    <div className="col">
      <h3 className="my-3 erms-text text-center">{props.children}</h3>
    </div>
  </div>
);

export default Title;