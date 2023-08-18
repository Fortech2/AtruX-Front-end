import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#fff"
      d="M35.665.333a1.146 1.146 0 0 1 .252 1.238L22.58 34.92a1.72 1.72 0 0 1-3.047.284l-7.284-11.451-11.45-7.286a1.718 1.718 0 0 1 .284-3.049L34.428.083a1.146 1.146 0 0 1 1.238.252V.333Zm-21.13 22.75 6.33 9.945L31.712 5.904l-17.178 17.18Zm15.558-18.8L2.97 15.133l9.946 6.327L30.093 4.283Z"
    />
  </Svg>
)
export default SvgComponent