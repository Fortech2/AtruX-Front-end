import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#6D6D6D"
      d="M.99 6.602C1.674 3.327 4.525 1 7.73 1c3.207 0 6.057 2.327 6.74 5.602a.5.5 0 0 0 .98-.204C14.675 2.673 11.425 0 7.73 0 4.039 0 .789 2.673.01 6.398a.5.5 0 1 0 .98.204ZM7.73 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-2.5 3.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z"
      opacity={0.5}
    />
  </Svg>
)
export default SvgComponent
