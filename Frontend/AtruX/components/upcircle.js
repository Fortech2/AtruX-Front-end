import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#E9EBEE"
      d="M94 41c40 56.5-40.698 81-83.5 81S-67 85.735-67 41s34.698-81 77.5-81S54-15.5 94 41Z"
    />
  </Svg>
)
export default SvgComponent
