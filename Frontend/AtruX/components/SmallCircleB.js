import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="#0F1F41"
        d="M126.66 66.5c0 33.966-27.535 61.5-61.5 61.5-33.966 0-61.5-27.534-61.5-61.5C3.66 32.535 31.194 5 65.16 5c33.965 0 61.5 27.535 61.5 61.5Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent