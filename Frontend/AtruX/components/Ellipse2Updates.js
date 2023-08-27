import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        fill="#101F41"
        d="M43.173 96.336c-24.701-64.67 59.554-68.343 101.013-57.704 41.458 10.639 66.054 54.39 54.934 97.721-11.119 43.331-53.741 69.834-95.2 59.195-41.46-10.639-36.046-34.543-60.747-99.212Z"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
