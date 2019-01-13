import React from 'react';
import { Link } from 'react-router-dom';
import './show.scss';

export const Show = props => {
  const { data } = props;
  return (
    <tr className="show-row d-flex">
      <td className="col-2">
        {data.image && (
          <img src={data.image.medium} className="show-img" alt={data.name} />
        )}
      </td>
      <td className="col-10">
        <Link
          className="navbar-brand"
          title={data.name}
          to={`details/${data.id}`}
        >
          {data.name}
        </Link>
      </td>
    </tr>
  );
};
