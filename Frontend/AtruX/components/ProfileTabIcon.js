import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#101F41"
      strokeLinejoin="round"
      strokeWidth={2.4}
      d="M2 31.167a8.333 8.333 0 0 1 8.333-8.334H27a8.333 8.333 0 0 1 8.333 8.334 4.167 4.167 0 0 1-4.166 4.166h-25A4.167 4.167 0 0 1 2 31.167Z"
    />
    <Path
      stroke="#101F41"
      strokeWidth={2.4}
      d="M18.667 14.5a6.25 6.25 0 1 0 0-12.5 6.25 6.25 0 0 0 0 12.5Z"
    />
  </Svg>
)
export default SvgComponent