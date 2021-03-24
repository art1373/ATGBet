import PropTypes from "prop-types";

export const PickerTypes = {
  selected: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
