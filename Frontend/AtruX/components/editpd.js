import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Ellipse
      cx={127.78}
      cy={124.258}
      fill="#B6B6B6"
      rx={100.472}
      ry={94.3}
      transform="rotate(-21.206 127.78 124.258)"
    />
    <Path
      fill="#B6B6B6"
      d="M39.493 170.963c-.086 2.523 61.499 120.861 170.52 120.577l-44.624-132.077-123.61 10.613-2.286.887Z"
    />
  </Svg>
)
export default SvgComponent