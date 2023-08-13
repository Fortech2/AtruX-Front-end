import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="#E9EBEE"
        d="M283.608 72.513C176.45 148.404 143.057 155 49.108 155-44.84 155-121 85.828-121 .5S-44.84-154 49.108-154c93.949 0 315.23 169.339 234.5 226.513Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
