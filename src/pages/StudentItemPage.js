import React from 'react';
import './StudentListPage.css';

import Title from '../components/Title';
import StudentFrom from '../logicalComponents/StudentForm';

const StudentItemPage = ({match}) => {

    const id = decodeURIComponent(match.params.id);
    
    return (
        <div className="StudentItemPage">
            <Title>{'Student Information'}</Title>
            <StudentFrom id={id}/>
        </div>
    );

};

export default StudentItemPage;