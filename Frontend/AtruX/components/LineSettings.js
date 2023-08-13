import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path stroke="#101F41" d="M0 .5h285" />
  </Svg>
)
export default SvgComponent
