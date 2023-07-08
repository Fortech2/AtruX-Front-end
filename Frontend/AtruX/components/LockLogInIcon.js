import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.987 11a2.117 2.117 0 0 0-1.208.378 1.825 1.825 0 0 0-.71.97 1.68 1.68 0 0 0 .079 1.166c.165.37.459.68.835.883V17h2.032v-2.603c.298-.16.545-.39.718-.665.173-.274.265-.585.267-.902 0-.241-.052-.48-.153-.703a1.83 1.83 0 0 0-.437-.595 2.025 2.025 0 0 0-.654-.396 2.167 2.167 0 0 0-.77-.136Z"
      opacity={0.5}
    />
    <Path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.79 8H3.21C1.99 8 1 8.977 1 10.183v8.634C1 20.023 1.99 21 3.21 21h12.58c1.22 0 2.21-.977 2.21-2.183v-8.634C18 8.977 17.01 8 15.79 8ZM4 8V6.623c0-1.491.58-2.921 1.61-3.976A5.44 5.44 0 0 1 9.5 1a5.44 5.44 0 0 1 3.89 1.647A5.688 5.688 0 0 1 15 6.623V8"
      opacity={0.5}
    />
  </Svg>
)
export default SvgComponent