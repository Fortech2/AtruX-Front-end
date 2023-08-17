import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={31}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m25.453 21.403-.33-.41c-1.489-1.841-2.39-2.953-2.39-8.165 0-2.699-.63-4.913-1.875-6.574-.917-1.227-2.157-2.158-3.791-2.845a.205.205 0 0 1-.056-.047C16.423 1.35 14.815 0 13.001 0 11.185 0 9.577 1.349 8.99 3.36a.213.213 0 0 1-.055.045c-3.814 1.606-5.668 4.688-5.668 9.42 0 5.215-.899 6.326-2.389 8.166-.108.133-.218.269-.33.41a2.482 2.482 0 0 0-.315 2.603c.417.9 1.307 1.458 2.322 1.458h20.897c1.011 0 1.894-.558 2.313-1.453a2.484 2.484 0 0 0-.312-2.606ZM13 31c.978 0 1.937-.272 2.776-.785a5.488 5.488 0 0 0 1.99-2.13.282.282 0 0 0-.107-.37.265.265 0 0 0-.133-.036h-9.05a.266.266 0 0 0-.233.133.281.281 0 0 0-.008.273 5.488 5.488 0 0 0 1.99 2.13A5.325 5.325 0 0 0 13 31Z"
    />
  </Svg>
)
export default SvgComponent
