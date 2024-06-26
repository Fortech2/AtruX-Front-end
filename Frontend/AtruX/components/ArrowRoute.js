import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#000"
      d="M10.94 26.06a1.5 1.5 0 0 0 2.12 0l9.547-9.545a1.5 1.5 0 1 0-2.122-2.122L12 22.88l-8.485-8.486a1.5 1.5 0 1 0-2.122 2.122l9.546 9.546ZM10.5 0v25h3V0h-3Z"
    />
  </Svg>
)
export default SvgComponent
