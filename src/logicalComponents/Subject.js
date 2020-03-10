import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Subject.css";

import { apiProps, defaultSubjectObj } from "../utils/Constants";

const Subject = props => {
  const [subject, setSubject] = useState(defaultSubjectObj());
  let isNew = !props.code || props.code === "new";

  const getSubject = async () => {
    if (props.code && props.code !== "new") {
      const res = await Axios.get(apiProps.host + `subject/code/${props.code}`);
      setSubject(res.data);
      isNew = false;
    }
  };

  useEffect(() => {
    getSubject();
  }, []);

  const onChangeSetState = (key, value) => {
    const newSub = Object.assign({}, subject);
    newSub[key] = value;
    setSubject(newSub);
  };
  const saveSubject = () => {};

  return (
    <div className="Subject erms-card">
      <div className="row">
        <div className="col">
          <form onSubmit={saveSubject}>
            <div className="row pb-3">
              <div className="col-5 col-sm-4 col-md-3 col-lg-2">
                <input
                  type="text"
                  id="id-label"
                  className="form-control-plaintext"
                  value="Subject Code - "
                  readOnly
                />
              </div>

              <div className="col-7 col-sm-4 col-md-3 col-lg-2">
                {isNew ? (
                  <input
                    type="text"
                    className="form-control fg-deeppink"
                    id="sub_code"
                    placeholder="A-11011"
                    value={subject.sub_code}
                    onChange={e => onChangeSetState("sub_code", e.target.value)}
                    required
                  />
                ) : (
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext fg-deeppink"
                    id="sub_code"
                    value={props.code}
                  />
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="sub_name">Subject Name :</label>
                <input
                  type="text"
                  className="form-control"
                  id="sub_name"
                  placeholder="Mathematics"
                  value={subject.sub_name}
                  onChange={e => onChangeSetState("sub_name", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-row">
            <div className="form-group col-md-3">
                <label htmlFor="sub_name">Pass :</label>
                <input
                  type="number"
                  className="form-control"
                  id="sub_pass"
                  value={subject.sub_pass}
                  onChange={e => onChangeSetState("sub_pass", e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="sub_distinction">Distinction :</label>
                <input
                  type="number"
                  className="form-control"
                  id="sub_distinction"
                  value={subject.sub_distinction}
                  onChange={e => onChangeSetState("sub_distinction", e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="sub_name">Excellent :</label>
                <input
                  type="number"
                  className="form-control"
                  id="sub_excellent"
                  value={subject.sub_excellent}
                  onChange={e => onChangeSetState("sub_excellent", e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="sub_name">Maximum :</label>
                <input
                  type="number"
                  className="form-control"
                  id="sub_max"
                  value={subject.sub_max}
                  onChange={e => onChangeSetState("sub_max", e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <input
                  type="submit"
                  className="btn btn-info"
                  placeholder="Mathematics"
                  value="Save"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subject;
