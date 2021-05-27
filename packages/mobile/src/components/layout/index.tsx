import React, { FunctionComponent } from "react";
import { View } from "react-native";
import {
  RectButton,
  gestureHandlerRootHOC,
} from "react-native-gesture-handler";
import { Text } from "react-native-elements";
import {
  sf,
  flexDirectionRow,
  alignItemsCenter,
  justifyContentBetween,
  h3,
  fcHigh,
} from "../../styles";

export const HeaderLayout: FunctionComponent<{
  name: string;
  leftIcon?: any;
  leftIconOnPress?: () => void;
  rightIcon?: any;
  rightIconOnPress?: () => void;
}> = ({ name, leftIcon, leftIconOnPress, rightIcon, rightIconOnPress }) => {
  // RectButton in Modal only working in HOC on android
  const LeftIconWithHoc = gestureHandlerRootHOC(() => {
    return (
      <RectButton onPress={leftIconOnPress}>
        <View accessible>{leftIcon}</View>
      </RectButton>
    );
  });

  const RightIconWithHoc = gestureHandlerRootHOC(() => {
    return (
      <RectButton onPress={rightIconOnPress}>
        <View accessible>{rightIcon}</View>
      </RectButton>
    );
  });

  return (
    <React.Fragment>
      {/* top margin for safe area */}
      <View style={{ height: 55 }} />
      <View
        style={sf([flexDirectionRow, alignItemsCenter, justifyContentBetween])}
      >
        <View accessible style={{ height: 35, width: 35 }}>
          <LeftIconWithHoc />
        </View>
        <Text style={sf([h3, fcHigh])}>{name}</Text>
        <View accessible style={{ height: 35, width: 35 }}>
          <RightIconWithHoc />
        </View>
      </View>
    </React.Fragment>
  );
};
