import React from 'react';

import { Show } from './Show';

export const Shows = props => {
  const { data, loading } = props;

  if (loading) {
    return <small className="text-success">loading...</small>;
  }

  if (data.size === 0) {
    return <small className="text-gray">no results</small>;
  }

  return (
    <div className="row mt-5">
      <h4>Results: </h4>
      <table className="table table-striped max-width">
        <thead className="thead-dark">
          <tr className="d-flex">
            <th scope="col" className="col-2">
              Image
            </th>
            <th scope="col" className="col-10">
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(result => (
            <Show data={result.show} key={result.show.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

///
