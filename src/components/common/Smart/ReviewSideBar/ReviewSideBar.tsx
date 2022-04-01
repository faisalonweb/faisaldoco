import React from 'react';
import ListIcon from '@mui/icons-material/List';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useAppSelector } from "src/store/hooks";


const ReviewSideBar = () => {
    const { docs, projects } = useAppSelector(
        (state) => state.appData
      );
    return (
        <div className="review-sidebar">
            <div className='contentdoc'>
                <div className="heading-section">
                  <div className="title">
                      <h3>Docs to review</h3>
                  </div>
                  <div className="list-icon">
                      <ListIcon />
                  </div>
                </div>
                <div className="document-content">
                {docs?.length &&
                  docs?.map((item) => (
                    <div className="doc-item" key={item.doc_name}>
                        <div className="doc-item-icon">
                        <LabelImportantIcon />
                        </div>
                        <p>{item.doc_name}</p>
                    </div>
                  ))}
                </div>
            </div>
            <div className='contentproject'>
            <div className="heading-section">
                  <div className="title">
                      <h3>List of projects</h3>
                  </div>
                  <div className="list-icon">
                      <ListIcon />
                  </div>
            </div>
            <div className="project-content">
            {projects?.length &&
                  projects?.map((item) => (
                    <div className="project-item" key={item.project_name}>
                        <div className="project-item-icon">
                        <LabelImportantIcon />
                        </div>
                        <p>{item.project_name}</p>
                    </div>
                  ))
            }
            </div>
            </div>
          
        </div>
    );
};

export default ReviewSideBar;