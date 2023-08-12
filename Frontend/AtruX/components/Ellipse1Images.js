import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Circle cx={156.5} cy={99.5} r={156.5} fill="#E9EBEE" />
  </Svg>
)
export default SvgComponent