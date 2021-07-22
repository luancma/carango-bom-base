import React from 'react';
import { Route } from "react-router-dom";

export function RouteComponent({ routes }) {

  return (
    <>
      {
        routes.map(
          (route, index) => {
            return (<Route
              key={`${index}`}
              path={route.path}
              render={route.component}
            />)
          })
      }
    </>
  )
}