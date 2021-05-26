import { useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    fetch('/app/system/listByCurrentTenantUser', { method: 'POST' })
      .then((data) => console.log(data))
      .catch((e) => console.log('Oops, error', e));
  }, []);
  return <></>;
}
