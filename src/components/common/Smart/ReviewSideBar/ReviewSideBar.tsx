import React from 'react';
import ListIcon from '@mui/icons-material/List';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import { useAppSelector } from "src/store/hooks";
import { LocalizationInterface } from 'src/utils/interfaces/localizationinterfaces'
import { localizedData } from "src/utils/helpers/language";


const ReviewSideBar = () => {
    const constantData: LocalizationInterface = localizedData();
    const { Docs_To_Review, List_Of_Projects} = constantData.reviewSideBar;
    const { docs, projects } = useAppSelector(
        (state) => state.appData
      );
    return (
        <div className="review-sidebar">
            <div className='contentdoc'>
                <div className="heading-section">
                  <div className="title">
                      <h3>{Docs_To_Review}</h3>
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
                      <h3>{List_Of_Projects}</h3>
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