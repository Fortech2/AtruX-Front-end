import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#101F41"
      d="M34.767 129.546C33.498 120.59 53.776 9.596 152 0c-1.056 174.327-3.168 524.901-3.168 532.578 0 7.676-38.022 12.794-57.033 14.394 1.584 0-50.696 1.599-76.043-19.192-22.43-18.399-16.899-38.384-7.921-52.778l45.942-71.97c10.14-10.236 9.506-57.576 7.922-79.967 0-9.596-25.348-73.569-25.348-76.768 0-3.199-7.921-79.966-1.584-116.751Z"
    />
  </Svg>
)
export default SvgComponent