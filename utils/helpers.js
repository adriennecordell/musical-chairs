module.exports = {
  format_date: (date) => {
    const d = new Date(date);
    return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`;
  },
};
