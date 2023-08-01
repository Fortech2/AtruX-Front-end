import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Circle cx={65} cy={65} r={65} fill="#D9D9D9" />
  </Svg>
)
export default SvgComponent