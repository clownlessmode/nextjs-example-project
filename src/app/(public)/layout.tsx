import type { PropsWithChildren } from 'react';

import AppHeader from '@/src/shared/ui/app-header/AppHeader';

const Layout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};

export default Layout;
