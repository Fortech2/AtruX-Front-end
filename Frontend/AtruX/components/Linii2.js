import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#9EA2AC"
      d="M0 2h32M0 3h32M0 1h32M0 10h32M0 11h32M0 12h32M0 19h32M0 20h32M0 21h32"
    />
  </Svg>
)
export default SvgComponent
