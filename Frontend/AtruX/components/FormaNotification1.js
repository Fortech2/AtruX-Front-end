import * as React from "react"
import Svg, { Ellipse, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={133}
    height={274}
    fill="none"
    {...props}
  >
    <Ellipse cx={115.421} cy={91.946} fill="#E9EBEE" rx={114.579} ry={91.946} />
    <Path
      fill="#E9EBEE"
      d="M2.29 103.262c-1.132 2.263 15.528 131.553 131.552 169.746l7.042-135.797L5.087 103.262H2.289Z"
    />
  </Svg>
)
export default SvgComponent
