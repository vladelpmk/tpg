import React from 'react';

import { Episode } from './Episode';

export const Season = props => {
  const { data } = props;
  return (
    <div className="mt-5">
      <h4>Season: {data.first().season}</h4>
      <table className="table table-striped max-width">
        <thead className="thead-dark">
          <tr className="d-flex">
            <th scope="col" className="col-1">
              #
            </th>
            <th scope="col" className="col-1">
              Image
            </th>
            <th scope="col" className="col-2">
              Name
            </th>
            <th scope="col" className="col-4">
              Summary
            </th>
            <th scope="col" className="col-2">
              Premiere
            </th>
            <th scope="col" className="col-2">
              Runtime
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map(episode => (
            <Episode data={episode} key={episode.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
