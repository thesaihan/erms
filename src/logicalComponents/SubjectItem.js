import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';

import './SubjectItem.css';

const SubjectItem = (props) => {

    const sub = props.sub;
    
    return (
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
      );
}

export default SubjectItem;