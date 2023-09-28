import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#F5F5F5"
      d="M0 1.3h11M0 1.6h11M0 1h11M0 3.7h11M0 4h11M0 4.3h11M0 6.4h11M0 6.7h11M0 7h11"
    />
  </Svg>
)
export default SvgComponent
