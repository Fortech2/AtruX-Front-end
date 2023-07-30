import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#9EA2AC"
      d="M20 11.112H3.828l6.582 7.315L9.004 20 0 10.005 9.004 0l1.406 1.574-6.582 7.314H20v2.224Z"
    />
  </Svg>
)
export default SvgComponent