import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <Path
        fill="#6D6D6D"
        d="M3 6.75L9 12.75L15 6.75"
        opacity={0.5}
      />
    </Svg>
)
export default SvgComponent



