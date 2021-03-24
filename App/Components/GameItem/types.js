import PropTypes from "prop-types";

export const PickerTypes = {
  game: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  betType: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};
