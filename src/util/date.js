export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10); // 2023-06-24 형태로 나타내기
};
