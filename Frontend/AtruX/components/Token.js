import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#A3A3A3"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.508 16.653a3.915 3.915 0 1 0-.525-1.957H3.623c-.8 0-1.436.441-1.436 1.06v3.463m4.056-4.523v4.492"
    />
  </Svg>
)
export default SvgComponent