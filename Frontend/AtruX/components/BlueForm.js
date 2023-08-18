import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="#0F1F41"
        d="M266.936 87.487C186.44 127.521 161.355 131 90.783 131 20.21 131-37 94.511-37 49.5S20.21-32 90.783-32c70.572 0 236.795 89.328 176.153 119.487Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
