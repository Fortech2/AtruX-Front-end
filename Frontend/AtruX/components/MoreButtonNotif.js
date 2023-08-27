import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#101F41"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m1 11 5-5-5-5"
    />
  </Svg>
)
export default SvgComponent
