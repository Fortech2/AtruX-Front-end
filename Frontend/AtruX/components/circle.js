import * as React from "react"
import Svg, { Rect } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Rect width={35} height={35} fill="#101F41" rx={17.5} />
  </Svg>
)
export default SvgComponent
