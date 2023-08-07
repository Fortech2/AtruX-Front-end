import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#B6B6B6"
      d="M141 178.989c0 98.853-68.948 178.989-154 178.989s-154-80.136-154-178.989C-167 80.136-98.052 0-13 0s154 80.136 154 178.989Z"
    />
    <Path
      fill="#B6B6B6"
      d="M103.287 381.529c5.559 18.047 18.333 49.719 28.286 62.803 5.027 7.536 5.236 14.654 4.712 17.271-57.619.523-172.543.942-171.286-1.57 1.258-2.512-7.856-77.457-12.57-114.616l159.876-64.373c-6.276 24.468-15.17 80.514-9.018 100.485Z"
    />
  </Svg>
)
export default SvgComponent

