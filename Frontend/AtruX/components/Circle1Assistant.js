import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Circle cx={22} cy={22} r={22} fill="#101F41" />
  </Svg>
)
export default SvgComponent
