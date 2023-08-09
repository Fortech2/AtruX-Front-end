import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#fff"
      d="M24.767.231a.796.796 0 0 1 .175.86L15.68 24.25a1.194 1.194 0 0 1-2.116.197l-5.059-7.952-7.95-5.06a1.194 1.194 0 0 1 .197-2.117L23.908.058a.796.796 0 0 1 .86.175V.23Zm-14.673 15.8 4.395 6.905L22.023 4.1 10.094 16.03ZM20.898 2.973 2.063 10.51l6.907 4.394L20.898 2.974Z"
    />
  </Svg>
)
export default SvgComponent