import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#101F41"
      strokeWidth={2.083}
      d="M48.958 11.375v10.417M21.875 20.75v1.352c0 3.826 1.404 7.52 3.946 10.38l.22.247v.521H0m42.708-12.5v-5.625a15.624 15.624 0 0 1 5.067-11.52l1.183-1.084V2H10.417a9.375 9.375 0 1 0 0 18.75h32.291Z"
    />
  </Svg>
)
export default SvgComponent