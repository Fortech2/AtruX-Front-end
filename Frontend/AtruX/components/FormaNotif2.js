import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={142}
    height={543}
    fill="none"
    {...props}
  >
    <Path
      fill="#B6B6B6"
      d="M107.462 128.599C108.721 119.708 88.576 9.526-9 0c1.05 173.052 3.148 521.062 3.148 528.683 0 7.621 37.771 12.701 56.657 14.289-1.574 0 50.362 1.587 75.543-19.052 22.283-18.264 16.787-38.103 7.869-52.392l-45.64-71.444c-10.073-10.16-9.444-57.154-7.87-79.381 0-9.526 25.181-73.032 25.181-76.207 0-3.175 7.869-79.382 1.574-115.897Z"
    />
  </Svg>
)
export default SvgComponent
