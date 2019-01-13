import React from 'react';
import './episode.scss';

const cleanSummary = summary =>
  summary && summary.replace(/<\/?[^>]+(>|$)/g, ''); // stupid API

export const Episode = props => {
  const { data } = props;
  return (
    <tr className="episode-row d-flex">
      <th scope="row" className="col-1">
        {data.number}
      </th>
      <td className="col-1">
        {data.image && (
          <img
            src={data.image.medium}
            className="episode-img"
            alt={data.name}
          />
        )}
      </td>
      <td className="col-2">
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          title={data.name}
        >
          {data.name}
        </a>
      </td>
      <td className="col-4">
        <small>{data.summary ? cleanSummary(props.data.summary) : 'N/A'}</small>
      </td>
      <td className="col-2">
        {data.airdate} @ {data.airtime}
      </td>
      <td className="col-2">{data.runtime} min</td>
    </tr>
  );
};
