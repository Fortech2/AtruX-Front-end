import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      stroke="#101F41"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.083}
      d="m18.177 5.357 4.411 4.638M15.235 27H27M3.47 20.816 2 27l5.882-1.546L24.921 7.543c.551-.58.86-1.366.86-2.186 0-.82-.309-1.606-.86-2.186l-.253-.266A2.87 2.87 0 0 0 22.588 2a2.87 2.87 0 0 0-2.08.905L3.472 20.816Z"
    />
  </Svg>
)
export default SvgComponent
