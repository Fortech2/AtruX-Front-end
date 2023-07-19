import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#101F41"
      strokeLinecap="square"
      strokeWidth={2}
      d="m3 6.75 6 6 6-6"
      opacity={0.5}
    />
  </Svg>
)
export default SvgComponent
