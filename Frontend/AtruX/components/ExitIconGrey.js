import * as React from "react"
import Svg, { Path, G, Rect, Ellipse, Defs, ClipPath } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    
    <G filter="url(#a)">
      <G clipPath="url(#b)">
        
        
        <Path
          fill="#D9D9D9"
          d="M.535.583a1.832 1.832 0 0 1 2.586 0l7.855 7.838L18.83.583a1.828 1.828 0 1 1 2.586 2.58L13.561 11l7.855 7.838a1.823 1.823 0 0 1-.795 3.104 1.83 1.83 0 0 1-1.79-.523l-7.855-7.839L3.12 21.42a1.834 1.834 0 0 1-2.542-.044 1.826 1.826 0 0 1-.044-2.537l7.855-7.838L.535 3.163a1.824 1.824 0 0 1 0-2.58Z"
        />
      </G>
    </G>
    <Defs>
     
    </Defs>
  </Svg>
)
export default SvgComponent