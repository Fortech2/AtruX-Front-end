import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={28}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M31.59 2.172a1 1 0 0 0-.89-.19l-9.61 3-9.63-4.89a1 1 0 0 0-.84 0l-10 4.09a1 1 0 0 0-.62.93v20.48a1 1 0 0 0 1.38.92l9.62-3.95 9.59 4.92a1 1 0 0 0 .46.11c.1.016.2.016.3 0l10-3.12a1 1 0 0 0 .7-1V2.983a1 1 0 0 0-.46-.81ZM30 22.732l-8.32 2.6v-2.29h-1.6v2l-8.4-4.31v-1.69h-1.6v1.72L2 24.093V5.773l8.08-3.33v2.35h1.6v-2.34l8.4 4.3v2.1h1.6v-1.87L30 4.342v18.39Z"
    />
    <Path
      fill="#fff"
      d="M20.08 11.043h1.6v3.81h-1.6v-3.81ZM20.08 17.043h1.6v3.81h-1.6v-3.81ZM10.08 7.042h1.6v3.81h-1.6v-3.81ZM10.08 13.113h1.6v3.75h-1.6v-3.75Z"
    />
  </Svg>
)
export default SvgComponent
