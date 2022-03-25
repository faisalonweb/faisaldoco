import React from 'react';
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
  component: React.ElementType;
};
const LoggedRestrictedRouter: React.FunctionComponent<PrivateRouteProps> = ({component:Component , ...restofProps}) => {
  let result = JSON.parse(localStorage.getItem('test') || '{}')
    return (
      result.myBool ? <Component/> : <Navigate to="/login" />
    )
}

export default LoggedRestrictedRouter;