import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#fff"
      d="m15.94.94-1.233 1.232 3.707 3.706 1.232-1.232a1.5 1.5 0 0 0 0-2.12L15.94.938Zm0 0a1.5 1.5 0 0 1 2.12 0l1.586 1.585L15.94.94Zm-8 8 4.646-4.647L16.293 8l-4.647 4.646a1.5 1.5 0 0 1-1.06.44H9a1.5 1.5 0 0 1-1.5-1.5V10c0-.398.158-.78.44-1.06Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 12.586H3a2 2 0 1 0 0 4h14a2 2 0 0 1 0 4h-4"
    />
  </Svg>
)
export default SvgComponent
