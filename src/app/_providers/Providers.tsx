'use client';

import { ThemeProvider } from 'next-themes';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
export default Providers;
