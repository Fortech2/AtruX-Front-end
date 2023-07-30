import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#B6B6B6"
      d="M145.994 145.979c24.496 89.14-87.966 83.162-141.7 63.677-53.734-19.484-80.785-80.807-60.42-136.968C-35.763 16.528 24.306-13.205 78.04 6.28c53.734 19.485 43.457 50.56 67.953 139.699Z"
    />
  </Svg>
)
export default SvgComponent