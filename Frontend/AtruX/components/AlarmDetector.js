import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#fff"
      d="M13.333 28v-7.778h3.334V28h-3.334Zm13.459-3.928-5.917-5.483 2.375-2.217 5.875 5.522-2.333 2.178Zm-23.584 0L.875 21.894l5.875-5.522 2.375 2.217-5.917 5.483Zm.125-20.96v1.555h23.334V3.11H3.333ZM8.5 7.777 9 9.333h12l.5-1.555h-13Zm-1.917 4.666L5 7.778H0V0h30v7.778h-5l-1.917 4.666h-16.5Z"
    />
  </Svg>
)
export default SvgComponent
