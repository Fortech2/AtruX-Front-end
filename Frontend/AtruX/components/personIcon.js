import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#6D6D6D"
      strokeLinejoin="round"
      d="M1 18.5a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5 2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 1 18.5Z"
    />
    <Path
      stroke="#6D6D6D"
      d="M11 8.5A3.75 3.75 0 1 0 11 1a3.75 3.75 0 0 0 0 7.5Z"
    />
  </Svg>
)
export default SvgComponent