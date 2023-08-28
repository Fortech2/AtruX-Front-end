import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#B6B6B6"
      d="M377 203.5C377 307.606 292.606 392 188.5 392S0 307.606 0 203.5 144.5 87.5 223.5.5C327.606.5 377 99.394 377 203.5Z"
    />
  </Svg>
)
export default SvgComponent