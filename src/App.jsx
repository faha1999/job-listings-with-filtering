import React from 'react';
import { ThemeProvider } from 'styled-components';
import { DecoImage } from './components/DecoImage/DecoImage';
import { JobCardList } from './components/JobCardList/JobCardList';
import { darkTheme, lightTheme } from './themes/Themes';
import useTheme from './themes/UseTheme';

export const App = () => {
  const [theme, toggleTheme] = useTheme();
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <DecoImage theme={theme} toggleTheme={toggleTheme} />
      <JobCardList />
    </ThemeProvider>
  );
};
