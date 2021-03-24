import moment from "moment";

export const dateToMonthAndYear = (date: Date) => {
  return moment(date).format("LLLL");
};
