import * as react from 'react';

export const User: react.SFC<{ id: string, name: string }> = ({ id, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p><small>{id}</small></p>
    </div>
  );
}
