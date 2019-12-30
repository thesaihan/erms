export const apiProps = {
  host: process.env.REACT_APP_HOST
};

export const defaultStudentObj = {
  std_id: "",
  std_name: "",
  std_name_mm: "",
  std_gender: "",
  std_ethnic: "",
  std_religion: "",
  std_nrc: "",
  std_dob: "",
  std_mat_id: "",
  std_mat_year: "",
  std_mat_dept: "",
  major_code: "",
  father_nrc: "",
  mother_nrc: "",
  std_birth_place: "",
  std_addr_perm: "",
  std_addr_curr: "",
  std_phone: "",
  std_email: "",
  date_created: new Date().getTime(),
  last_updated: new Date().getTime(),
  last_accessed: new Date().getTime()
};

export const defaultSubjectObj = {
  sub_code: "",
  sub_name: "",
  dept_id: "",
  sub_pass: 50,
  sub_distinction: 70,
  sub_excellent: 85,
  sub_max: 100,
  date_created: new Date().getTime(),
  last_updated: new Date().getTime(),
  last_accessed: new Date().getTime()
};
