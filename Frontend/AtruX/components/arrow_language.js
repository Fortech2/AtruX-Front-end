import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G filter="url(#a)">
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m7 10 5 5 5-5"
      />
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent