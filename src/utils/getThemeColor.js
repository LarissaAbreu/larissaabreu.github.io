const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme;

  if(theme === 'light') return '#d8eee1';
  if(theme === 'dark') return '#1C1C1C';
};

export default getThemeColor;
