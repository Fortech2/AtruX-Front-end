import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#7B8292"
      strokeLinejoin="round"
      d="M1 18.966c0-1.35.527-2.645 1.464-3.6A4.955 4.955 0 0 1 6 13.875h10c1.326 0 2.598.536 3.535 1.491a5.139 5.139 0 0 1 1.465 3.6 2.57 2.57 0 0 1-.732 1.8 2.478 2.478 0 0 1-1.768.746h-15a2.477 2.477 0 0 1-1.768-.745 2.57 2.57 0 0 1-.732-1.8Z"
    />
    <Path
      stroke="#7B8292"
      d="M11 8.784c2.071 0 3.75-1.71 3.75-3.819S13.071 1.146 11 1.146c-2.071 0-3.75 1.71-3.75 3.819S8.929 8.784 11 8.784Z"
    />
  </Svg>
)
export default SvgComponent
