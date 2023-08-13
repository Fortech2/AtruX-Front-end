import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#101F41"
      fillRule="evenodd"
      d="M10.625 24.438a1.062 1.062 0 0 1 1.063-1.063h19.124a1.062 1.062 0 1 1 0 2.125H11.688a1.062 1.062 0 0 1-1.062-1.063Zm0-8.5a1.062 1.062 0 0 1 1.063-1.063h19.124a1.062 1.062 0 1 1 0 2.125H11.688a1.062 1.062 0 0 1-1.062-1.063Zm0-8.5a1.062 1.062 0 0 1 1.063-1.063h19.124a1.063 1.063 0 0 1 0 2.125H11.688a1.063 1.063 0 0 1-1.062-1.063ZM4.25 9.563a2.125 2.125 0 1 0 0-4.25 2.125 2.125 0 0 0 0 4.25Zm0 8.5a2.125 2.125 0 1 0 0-4.25 2.125 2.125 0 0 0 0 4.25Zm0 8.5a2.125 2.125 0 1 0 0-4.25 2.125 2.125 0 0 0 0 4.25Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
