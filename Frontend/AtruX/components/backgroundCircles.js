import * as React from "react"
import Svg, { G, Circle, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Circle cx={121} cy={164} r={177} fill="#0F1F41" />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
