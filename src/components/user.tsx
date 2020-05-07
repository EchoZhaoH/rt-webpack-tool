import * as react from 'react';

interface Props { id: string; name: string }

export const User: React.SFC<Props> = ({ id, name }) => (
  <div>
    <h2>{name}</h2>
    <p><small>{id}</small></p>
  </div>
);
