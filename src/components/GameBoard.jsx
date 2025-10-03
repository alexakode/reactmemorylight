const boardStyle = {
  display: 'grid',
  gridTemplateColumns: `repeat(${cols}, minmax(10rem, 1fr))`,
  gap: '1rem',
  maxWidth: `${cols * 11}rem`, // 10rem kort + 1rem gap
  margin: '0 auto',
};