import * as react from 'react'
import { User } from '@root/components/user'

export const Test = ({ test }: { test: string }) => {
  return (
    <div>
      hello world!
      {test}
      <User name="echozh" id="88888" />
      haha
    </div>
  );
};
