import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={117}
    height={278}
    fill="none"
    {...props}
  >
    <Path
      fill="#101F41"
      d="M.481 156.686c.222-39.413 21.696-87.108 39.346-105.822l87.989 223.347-1.1 1.036c-6.94 3.206-52.62 5.828-85.893-29.488C28.75 230.744.264 195.223.48 156.686Z"
    />
    <Path
      fill="#101F41"
      d="M241.168 240.327c-55.254 52.06-142.876 48.806-195.71-7.269-52.833-56.075-50.87-143.735 4.383-195.795 55.254-52.06 142.876-48.806 195.709 7.27 52.834 56.074 50.872 143.734-4.382 195.794Z"
    />
  </Svg>
)
export default SvgComponent