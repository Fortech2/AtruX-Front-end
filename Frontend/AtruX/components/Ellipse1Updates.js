import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="#101F41"
        d="M41.572 41.882C109.468 28.375 98.96 112.053 81.52 151.14c-17.44 39.088-64.696 55.999-105.549 37.771-40.853-18.228-59.833-64.691-42.393-103.78 17.44-39.087 40.099-29.742 107.994-43.249Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
