import * as React from "react"
import Svg, { Circle } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Circle
      cx={109}
      cy={109}
      r={101.5}
      fill="#101F41"
      stroke="#101F41"
      strokeWidth={15}
    />
  </Svg>
)
export default SvgComponent
