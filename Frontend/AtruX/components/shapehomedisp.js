import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#101F41"
      d="M106.835 129.546C108.044 120.59 88.699 9.596-5 0c1.008 174.327 3.023 524.901 3.023 532.578 0 7.676 36.27 12.794 54.406 14.394-1.512 0 48.36 1.599 72.541-19.192 21.397-18.399 16.12-38.384 7.556-52.778l-43.827-71.97c-9.672-10.236-9.067-57.576-7.556-79.967 0-9.596 24.18-73.569 24.18-76.768 0-3.199 7.557-79.966 1.512-116.751Z"
    />
  </Svg>
)
export default SvgComponent