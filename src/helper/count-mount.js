function countMounth(start_date, end_date) {
  let start = new Date(start_date);
  let end = new Date(end_date);
  let dif = end - start;
  let day = dif / (1000 * 60 * 60 * 24);
  let month = day / 29;
  let eMonth = Math.floor(month);
  let eDay = day % 29;
  return `${eDay} Day, ${eMonth} Month`;
}

module.exports = { countMounth };
