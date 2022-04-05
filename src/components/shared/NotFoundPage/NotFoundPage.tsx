import React from 'react';
import Logo404 from "src/assets/images/Frame404.png";
const NotFoundPage = () => {
    return (
        <div className="not-page-found" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <img src={Logo404} alt="not found page"/>
        </div>
    );
};

export default NotFoundPage;