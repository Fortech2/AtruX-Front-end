import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#B6B6B6"
      d="M129.369 140.899c0 77.816-65.896 140.899-147.184 140.899S-165 218.715-165 140.899-99.103 0-17.815 0s147.184 63.083 147.184 140.899Z"
    />
    <Path
      fill="#B6B6B6"
      d="M14.05 287.858c-17.491 2.394-26.572.854-42.487-3.03L18.602 183.32S109.965 78.5 113 78.5c3.035 0 18.144 43.395 23 64 .825 3.5 2.267 42.932 2.5 60 0 7-3.243 29.58-29.347 56.057-6.816 8.043-36.876 24.355-95.104 29.301Z"
    />
  </Svg>
)
export default SvgComponent
