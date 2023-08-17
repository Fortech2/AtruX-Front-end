import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#B6B6B6"
      d="M.447.262C-.685 2.525 15.976 131.815 132 170.008l7.041-135.797L3.245.262H.447Z"
    />
  </Svg>
)
export default SvgComponent