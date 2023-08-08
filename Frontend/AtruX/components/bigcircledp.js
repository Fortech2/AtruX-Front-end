import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#B6B6B6"
      d="M110.944 85.226c11.122 57.562-30.633 114.036-93.264 126.138-62.63 12.101-122.419-24.752-133.541-82.314S-85.228 15.014-22.598 2.912C40.032-9.19 99.822 27.664 110.944 85.226Z"
    />
    <Path
      fill="#B6B6B6"
      d="M105.962 208.531c6.124 9.719 19.094 26.344 27.895 32.546 4.55 3.673 5.505 7.788 5.413 9.387-42.37 8.503-126.95 25.099-126.308 23.457.643-1.642-14.5-43.986-22.153-64.952l110.487-60.233c-1.868 15.14-2.111 49.041 4.666 59.795Z"
    />
  </Svg>
)
export default SvgComponent
