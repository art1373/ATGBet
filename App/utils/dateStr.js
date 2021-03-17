import moment from "moment";

export const dateToMonthAndYear = (date) => {
  return moment(date).format("LLLL");
};
