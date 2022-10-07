import React from 'react';
import { ThemeProvider } from 'styled-components';
import { JobCardList } from './components/JobCardList/JobCardList';
import { darkTheme, lightTheme } from './themes/themes';
import useTheme from './themes/UseTheme';

export const App = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <JobCardList />
    </ThemeProvider>
  );
};
