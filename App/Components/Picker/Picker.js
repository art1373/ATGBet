import React from "react";
import Icon from "react-native-vector-icons/Entypo";
import { Picker } from "native-base";
import { Colors } from "App/Theme";

const PickerCustom = ({ selected, onValueChange, options }) => {
  return (
    <Picker
      mode="dropdown"
      iosIcon={<Icon name="chevron-down" size={25} />}
      placeholder="Select your Game"
      placeholderStyle={{ color: "red" }}
      placeholderIconColor={Colors.primary}
      style={{ width: undefined }}
      selectedValue={selected}
      onValueChange={onValueChange}
    >
      {options.map((o) => (
        <Picker.Item label={o.label} value={o.value} />
      ))}
    </Picker>
  );
};

export default PickerCustom;
