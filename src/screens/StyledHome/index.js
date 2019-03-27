import React, { Component } from "react";
import {
  Image,
  Text,
  View,
  ActionSheetIOS,
  Picker,
  Platform,
  TouchableOpacity,
  Button
} from "react-native";
import styled from "styled-components/native";
import { connect } from "react-redux";
import { increment } from "../../actions";

const StyledView = styled.View`
  background-color: papayawhip;
  height: 150px;
  padding: 50px;
  background: orange;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;

class StyledHome extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  render() {
    const navigation = this.props.navigation;
    const increment = this.props.increment;
    const i = this.props.i;

    return (
      <StyledView>
        <Button
          onPress={() => {
            increment();
            navigation.navigate("Home");
          }}
          title="You are at Styled Home"
        />
        <StyledText>{i}</StyledText>
      </StyledView>
    );
  }
}

const mapStateToProps = state => {
  return {
    i: state.blank.i
  };
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StyledHome);
