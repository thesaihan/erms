import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./StudentForm.css";

import { apiProps, defaultStudentObj } from "../utils/Constants";

const StudentForm = props => {
  const [student, setStudent] = useState(defaultStudentObj());
  const [majors, setMajors] = useState([]);

  const getMajors = async () => {
    const res = await Axios.get(apiProps.host + "major/all");
    setMajors(res.data);
  };

  const getStudent = async () => {
    if (props.id) {
      const std = await Axios.get(apiProps.host + "student/id/" + props.id);
      console.log("Original Student : ", std.data);
      setStudent(std.data);
    }
  };

  useEffect(() => {
    getMajors();
  }, []);

  useEffect(() => {
    getStudent();
  }, []);

  const onChangeSetState = (key, value) => {
    const oldStd = Object.assign({}, student);
    oldStd[key] = value;
    setStudent(oldStd);
  };

  const deleteStudent = e => {
    e.preventDefault();
    const param = {
      std_id: student.std_id,
      deleteAll: false
    };
    Axios.post(apiProps.host + "student/delete", param).then(res => {
      if (res.data) {
        const newStd = defaultStudentObj();
        setStudent(newStd);
        alert("Deleted!");
      } else alert("Delete Error");
    });
  };

  const saveStudent = e => {
    e.preventDefault();
    const stdToSave = Object.assign({}, student);
    stdToSave.std_dob = new Date(stdToSave.std_dob);
    console.log("To-save Student : ", stdToSave);
    Axios.post(apiProps.host + "student/save", student).then(res => {
      if (res.data) alert("Saved!");
      else alert("Saving Error");
    });
  };

  return (
    <div className="StudentForm erms-card">
      <div className="row">
        <div className="col">
          <form onSubmit={saveStudent}>
            <div className="row">
              <div className="col">
                <h5 className="erms-text mb-3">
                  <i className="fas fa-user-edit" />
                  &nbsp;&nbsp;&nbsp;Personal : {!student.std_id ? <span className="badge badge-pill badge-success">New</span>:null}
                </h5>
              </div>
            </div>
            <div className="row pb-3">
              <div className="col-4 col-sm-3 col-md-2 col-lg-1">
                <input
                  type="text"
                  id="id-label"
                  className="form-control-plaintext"
                  value="ID - "
                  readOnly
                />
              </div>

              <div className="col-8 col-sm-4 col-md-3 col-lg-2">
                {!student.std_id ? (
                  <input
                    type="text"
                    className="form-control fg-deeppink"
                    id="std_id"
                    placeholder="12/12345"
                    value={student.std_id}
                    onChange={e => onChangeSetState("std_id", e.target.value)}
                    required
                  />
                ) : (
                  <input
                    type="text"
                    readOnly
                    className="form-control-plaintext fg-deeppink"
                    id="std_id"
                    value={student.std_id}
                  />
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="std_name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="std_name"
                  placeholder="John Doe"
                  value={student.std_name}
                  onChange={e => onChangeSetState("std_name", e.target.value)}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="std_name_mm">Name (MM)</label>
                <input
                  type="text"
                  className="form-control"
                  id="std_name_mm"
                  placeholder="ေမာင္ေမာင္"
                  value={student.std_name_mm}
                  onChange={e =>
                    onChangeSetState("std_name_mm", e.target.value)
                  }
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label>Gender</label>
                <br />
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="std_gender"
                    id="inlineRadio1"
                    value="M"
                    checked={"M" === student.std_gender}
                    onChange={e => onChangeSetState("std_gender", "M")}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Male
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="std_gender"
                    id="inlineRadio2"
                    value="F"
                    checked={"F" === student.std_gender}
                    onChange={e => onChangeSetState("std_gender", "F")}
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Female
                  </label>
                </div>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="major_code">Major</label>
                <select
                  id="major_code"
                  className="form-control form-control-sm"
                  value={student.major_code}
                  onChange={e => onChangeSetState("major_code", e.target.value)}
                >
                  {majors.map(m => (
                    <option key={m.major_code} value={m.major_code}>
                      {m.major_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="std_name_mm">Date of Birth</label>
                <input
                  type="date"
                  className="form-control form-control-sm"
                  id="std_dob"
                  value={student.std_dob}
                  onChange={e => onChangeSetState("std_dob", e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="std_religion">NRC.</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="std_nrc"
                  value={student.std_nrc}
                  onChange={e => onChangeSetState("std_nrc", e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="std_name_mm">Ethnic Group</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="std_ethnic"
                  value={student.std_ethnic}
                  onChange={e => onChangeSetState("std_ethnic", e.target.value)}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="std_religion">Religion</label>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="std_religion"
                  value={student.std_religion}
                  onChange={e =>
                    onChangeSetState("std_religion", e.target.value)
                  }
                />
              </div>
            </div>
            <hr />
            <div className="form-row">
              <div className="col">
                <h5 className="mt-4">
                  <i className="fas fa-award" />
                  &nbsp;&nbsp;&nbsp;Matriculation :{" "}
                </h5>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-3">
                <div className="form-group">
                  <label htmlFor="std_mat_id">Seat No.</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="std_mat_id"
                    value={student.std_mat_id}
                    onChange={e =>
                      onChangeSetState("std_mat_id", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-2">
                <div className="form-group">
                  <label htmlFor="std_mat_year">Year</label>
                  <input
                    type="number"
                    min="1"
                    className="form-control form-control-sm"
                    id="std_mat_year"
                    value={student.std_mat_year}
                    onChange={e =>
                      onChangeSetState("std_mat_year", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-7">
                <div className="form-group">
                  <label htmlFor="std_mat_dept">Department</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="std_mat_dept"
                    value={student.std_mat_dept}
                    onChange={e =>
                      onChangeSetState("std_mat_dept", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <hr />
            <div className="form-row">
              <div className="col">
                <h5 className="mt-4">
                  <i className="fas fa-address-book" />
                  &nbsp;&nbsp;&nbsp;Contact :{" "}
                </h5>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="std_phone">Phone</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="std_phone"
                    value={student.std_phone}
                    onChange={e =>
                      onChangeSetState("std_phone", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="std_email">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-sm"
                    id="std_email"
                    value={student.std_email}
                    onChange={e =>
                      onChangeSetState("std_email", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="form-row">
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="std_addr_curr">Current Address</label>
                  <textarea
                    className="form-control form-control-sm"
                    id="std_addr_curr"
                    value={student.std_addr_curr}
                    onChange={e =>
                      onChangeSetState("std_addr_curr", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="std_addr_perm">Permanent Address</label>
                  <textarea
                    className="form-control form-control-sm"
                    id="std_addr_perm"
                    value={student.std_addr_perm}
                    onChange={e =>
                      onChangeSetState("std_addr_perm", e.target.value)
                    }
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group">
                  <label htmlFor="std_birth_place">Birth Place</label>
                  <textarea
                    className="form-control form-control-sm"
                    id="std_birth_place"
                    value={student.std_birth_place}
                    onChange={e =>
                      onChangeSetState("std_birth_place", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>

            <hr />
            <div className="form-row">
              <div className="col-md-6">
                <h5 className="mt-4">
                  <i className="fas fa-male" />
                  &nbsp;&nbsp;&nbsp;Father :{" "}
                </h5>
                <div className="form-group">
                  <label htmlFor="father_name">Name</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="father_name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="father_nrc">NRC.</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="father_nrc"
                    value={student.father_nrc}
                    onChange={e =>
                      onChangeSetState("father_nrc", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="col-md-6">
                <h5 className="mt-4">
                  <i className="fas fa-female" />
                  &nbsp;&nbsp;&nbsp;Mother :{" "}
                </h5>
                <div className="form-group">
                  <label htmlFor="mother_name">Name</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="mother_name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mother_nrc">NRC.</label>
                  <input
                    type="text"
                    className="form-control form-control-sm"
                    id="mother_nrc"
                    value={student.mother_nrc}
                    onChange={e =>
                      onChangeSetState("mother_nrc", e.target.value)
                    }
                  />
                </div>
              </div>
            </div>
            <div className="form-group" id="footer-btn">
              <button
                onClick={deleteStudent}
                type="reset"
                className="btn btn-outline-danger"
              >
                <i className="fas fa-trash" />&nbsp;&nbsp;&nbsp;Delete
              </button>
              <button className="btn btn-info" type="submit">
                <i className="fas fa-save" />&nbsp;&nbsp;&nbsp;Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
