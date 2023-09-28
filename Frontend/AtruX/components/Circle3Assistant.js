import * as React from "react"
import Svg, { Ellipse } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Ellipse
      cx={16.385}
      cy={15.176}
      fill="#101F41"
      rx={15}
      ry={15.5}
      transform="rotate(-88.883 16.385 15.176)"
    />
  </Svg>
)
export default SvgComponent
