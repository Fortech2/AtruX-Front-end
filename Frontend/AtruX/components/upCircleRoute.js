import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#101F41"
      d="M289 47c0 104.106-84.394 188.5-188.5 188.5s-104-74-109-173c0-104.106 13-51 128.5-66.5 104.106 0 169-53.106 169 51Z"
    />
  </Svg>
)
export default SvgComponent