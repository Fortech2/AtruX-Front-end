import * as React from "react"
import Svg, { Mask, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Mask id="a" fill="#fff">
      <Path d="M18.897 4.374c0-2.158-1.47-4.334-4.754-4.334-2.891 0-4.835 1.741-4.835 4.334 0 1.513.52 2.203.864 2.66.182.241.256.35.256.459 0 .18 0 .288-.526.313h-5.75c-2.21 0-4.151 2.073-4.151 4.437v4.14c.036 1.048.538 1.7 1.312 1.7.44 0 .767-.297 1.084-.584.424-.383.904-.818 1.847-.818 1.599 0 3.3 1.555 3.3 4.438 0 2.916-1.724 4.95-3.271 4.95-.933 0-1.422-.476-1.854-.895-.323-.316-.657-.642-1.107-.642-.773 0-1.276.652-1.312 1.721v4.551c0 2.48 1.98 4.737 4.152 4.737h5.779c.875-.042 1.44-.649 1.44-1.549 0-.54-.262-.887-.493-1.193-.309-.41-.627-.832-.627-1.924 0-1.96 1.512-3.225 3.85-3.225 2.341 0 3.853 1.266 3.853 3.225 0 1.092-.32 1.514-.628 1.924-.23.306-.493.653-.493 1.193 0 .912.552 1.505 1.46 1.548l3.716.001c2.029 0 3.447-1.86 3.447-4.524v-5.159c.024-.135.314-.652.758-.652.09 0 .181.087.385.3.387.408.972 1.023 2.256 1.023 2.06 0 4.145-1.858 4.145-5.41 0-3.832-1.894-5.547-3.771-5.547-1.267 0-2 .68-2.484 1.131-.215.2-.417.388-.532.388-.444 0-.734-.519-.756-.633l-.002-.027v-3.975c0-2.695-1.45-4.65-3.446-4.65h-3.697l-.038-.004c-.498-.022-.498-.13-.498-.31 0-.108.074-.216.256-.458.344-.455.865-1.147.865-2.66ZM17.327 6.3c-.232.306-.494.654-.494 1.195 0 .61.237 1.344 1.387 1.417a.43.43 0 0 0 .066.004h3.723c1.644 0 2.506 1.782 2.506 3.541v4.03c0 .04-.007.08 0 .117.086.678.793 1.597 1.698 1.597.444 0 .77-.304 1.118-.627.448-.418.959-.892 1.898-.892 1.718 0 2.828 1.742 2.828 4.438 0 2.955-1.66 4.3-3.202 4.3-.923 0-1.281-.376-1.628-.74-.26-.273-.555-.583-1.014-.583-.905 0-1.613.92-1.698 1.598-.007.038 0 .076 0 .116v5.208c0 1.699-.776 3.414-2.506 3.414h-3.697c-.536-.026-.536-.316-.536-.44 0-.107.074-.216.256-.458.344-.457.865-1.147.865-2.66 0-2.158-1.482-4.335-4.795-4.335-2.867 0-4.794 1.742-4.794 4.335 0 1.513.52 2.203.865 2.66.181.241.256.35.256.458 0 .125 0 .415-.517.44h-5.76c-1.619 0-3.208-1.797-3.208-3.628v-4.529c.02-.633.265-.633.37-.633.109 0 .301.187.506.386.47.458 1.181 1.15 2.454 1.15 2.034 0 4.212-2.435 4.212-6.06 0-3.603-2.185-5.546-4.242-5.546-1.264 0-1.96.63-2.422 1.048-.209.19-.39.353-.509.353-.103 0-.348 0-.37-.612v-4.118c0-1.961 1.692-3.328 3.21-3.328h5.765l.044-.002c1.164-.051 1.409-.801 1.409-1.42 0-.54-.262-.888-.493-1.194-.309-.41-.627-.832-.627-1.925 0-1.93 1.564-3.225 3.892-3.225 2.315 0 3.811 1.266 3.811 3.225 0 1.092-.32 1.516-.628 1.925Z" />
    </Mask>
    <Path
      fill="#fff"
      d="M18.897 4.374c0-2.158-1.47-4.334-4.754-4.334-2.891 0-4.835 1.741-4.835 4.334 0 1.513.52 2.203.864 2.66.182.241.256.35.256.459 0 .18 0 .288-.526.313h-5.75c-2.21 0-4.151 2.073-4.151 4.437v4.14c.036 1.048.538 1.7 1.312 1.7.44 0 .767-.297 1.084-.584.424-.383.904-.818 1.847-.818 1.599 0 3.3 1.555 3.3 4.438 0 2.916-1.724 4.95-3.271 4.95-.933 0-1.422-.476-1.854-.895-.323-.316-.657-.642-1.107-.642-.773 0-1.276.652-1.312 1.721v4.551c0 2.48 1.98 4.737 4.152 4.737h5.779c.875-.042 1.44-.649 1.44-1.549 0-.54-.262-.887-.493-1.193-.309-.41-.627-.832-.627-1.924 0-1.96 1.512-3.225 3.85-3.225 2.341 0 3.853 1.266 3.853 3.225 0 1.092-.32 1.514-.628 1.924-.23.306-.493.653-.493 1.193 0 .912.552 1.505 1.46 1.548l3.716.001c2.029 0 3.447-1.86 3.447-4.524v-5.159c.024-.135.314-.652.758-.652.09 0 .181.087.385.3.387.408.972 1.023 2.256 1.023 2.06 0 4.145-1.858 4.145-5.41 0-3.832-1.894-5.547-3.771-5.547-1.267 0-2 .68-2.484 1.131-.215.2-.417.388-.532.388-.444 0-.734-.519-.756-.633l-.002-.027v-3.975c0-2.695-1.45-4.65-3.446-4.65h-3.697l-.038-.004c-.498-.022-.498-.13-.498-.31 0-.108.074-.216.256-.458.344-.455.865-1.147.865-2.66ZM17.327 6.3c-.232.306-.494.654-.494 1.195 0 .61.237 1.344 1.387 1.417a.43.43 0 0 0 .066.004h3.723c1.644 0 2.506 1.782 2.506 3.541v4.03c0 .04-.007.08 0 .117.086.678.793 1.597 1.698 1.597.444 0 .77-.304 1.118-.627.448-.418.959-.892 1.898-.892 1.718 0 2.828 1.742 2.828 4.438 0 2.955-1.66 4.3-3.202 4.3-.923 0-1.281-.376-1.628-.74-.26-.273-.555-.583-1.014-.583-.905 0-1.613.92-1.698 1.598-.007.038 0 .076 0 .116v5.208c0 1.699-.776 3.414-2.506 3.414h-3.697c-.536-.026-.536-.316-.536-.44 0-.107.074-.216.256-.458.344-.457.865-1.147.865-2.66 0-2.158-1.482-4.335-4.795-4.335-2.867 0-4.794 1.742-4.794 4.335 0 1.513.52 2.203.865 2.66.181.241.256.35.256.458 0 .125 0 .415-.517.44h-5.76c-1.619 0-3.208-1.797-3.208-3.628v-4.529c.02-.633.265-.633.37-.633.109 0 .301.187.506.386.47.458 1.181 1.15 2.454 1.15 2.034 0 4.212-2.435 4.212-6.06 0-3.603-2.185-5.546-4.242-5.546-1.264 0-1.96.63-2.422 1.048-.209.19-.39.353-.509.353-.103 0-.348 0-.37-.612v-4.118c0-1.961 1.692-3.328 3.21-3.328h5.765l.044-.002c1.164-.051 1.409-.801 1.409-1.42 0-.54-.262-.888-.493-1.194-.309-.41-.627-.832-.627-1.925 0-1.93 1.564-3.225 3.892-3.225 2.315 0 3.811 1.266 3.811 3.225 0 1.092-.32 1.516-.628 1.925Z"
    />
    <Path
      fill="#fff"
      d="M10.172 7.034 7.776 8.84l.003.004 2.393-1.809Zm-.27.772v3h.07l.069-.004-.14-2.996ZM0 16.384h-3v.05l.002.052L0 16.384Zm2.396 1.115L.387 15.27l-.006.005L2.397 17.5Zm.022 7.675L.326 27.322l.003.004 2.09-2.152ZM0 26.254l-2.998-.101-.002.05v.05h3Zm0 4.55h-3v.001l3-.001Zm9.93 4.737v3h.073l.072-.003-.144-2.997Zm.948-2.742 2.395-1.807v-.002L10.877 32.8Zm6.448 0 2.395 1.806.002-.002-2.397-1.804Zm.967 2.741-.143 2.997.07.003h.072v-3Zm3.716.001-.001 3v-3Zm3.447-9.683-2.953-.535-.047.266v.27h3Zm1.143-.352 2.176-2.065-.008-.008-2.168 2.073Zm2.256 1.023v3h.002l-.002-3Zm-2.11-9.826 2.042 2.198-2.042-2.198Zm-1.288-.245-2.992.212.012.175.033.172 2.947-.559Zm-.002-.027h-3v.107l.008.105 2.992-.212Zm-7.143-8.625-.264 2.988.132.011h.132v-3Zm-.038-.004.264-2.988-.065-.006-.066-.003-.133 2.997Zm-.242-.768-2.395-1.807-.003.004 2.398 1.803Zm-.706-.735 2.395 1.807.002-.002-2.397-1.805Zm.894 2.612.43-2.97-.12-.017-.122-.008-.188 2.995Zm.066.004v-3H18.257l.03 3Zm6.229 7.688 2.975-.38-.008-.069-.012-.068-2.955.517Zm2.816.97 2.04 2.199.005-.004-2.045-2.195Zm-.104 7.106-2.171 2.07 2.171-2.07Zm-2.712 1.015 2.955.517.012-.07.009-.07-2.976-.377Zm-6.203 8.738-.143 2.996.071.004h.072v-3Zm-.28-.898-2.397-1.804 2.397 1.804Zm-7.859 0 2.398-1.803-.004-.004-2.394 1.807Zm-.261.898v3h.07l.072-.004-.142-2.996ZM.944 26.275l-2.999-.098-.001.05v.048h3Zm.876-.247 2.095-2.147-.006-.006-2.09 2.153Zm2.454 1.15v-3 3ZM1.822 16.62l2.015 2.223.001-.001-2.016-2.222Zm-.878-.259h-3v.054l.002.053 2.998-.107Zm8.974-7.446v3h.075l.075-.004-.15-2.996Zm.044-.002L9.83 5.916h-.02l.15 2.997Zm.916-2.614 2.395-1.807v-.001l-2.395 1.808Zm11.02-1.925c0-1.741-.595-3.602-1.978-5.05-1.42-1.486-3.434-2.284-5.777-2.284v6c.942 0 1.305.29 1.44.43.173.182.314.488.314.904h6ZM14.142-2.96c-2.04 0-4.008.62-5.504 1.96C7.114.367 6.308 2.284 6.308 4.374h6c0-.502.165-.753.335-.905.2-.179.65-.43 1.5-.43v-6ZM6.308 4.374c0 1.117.195 2.06.53 2.872.33.8.752 1.347.938 1.593l4.793-3.609c-.16-.211-.17-.237-.186-.276-.01-.026-.075-.184-.075-.58h-6Zm1.47 4.47.065.085c.007.01-.025-.034-.07-.11a2.662 2.662 0 0 1-.345-1.326h6c0-.8-.293-1.39-.465-1.686-.149-.256-.327-.488-.397-.581L7.779 8.843Zm-.35-1.351c0 .136-.015-.19.067-.55a2.841 2.841 0 0 1 .991-1.577 2.641 2.641 0 0 1 1.07-.523c.164-.037.258-.037.207-.034l.278 5.993c.211-.01.502-.032.815-.102.292-.065.844-.22 1.382-.652a3.158 3.158 0 0 0 1.106-1.764 3.33 3.33 0 0 0 .079-.575c.005-.11.005-.21.005-.216h-6Zm2.474-2.687h-5.75v6h5.75v-6Zm-5.75 0c-4.053 0-7.151 3.608-7.151 7.437h6c0-.363.155-.754.437-1.056.285-.304.563-.381.714-.381v-6Zm-7.151 7.437v4.14h6v-4.14h-6Zm.002 4.243c.032.941.28 2.038 1.003 2.973a4.138 4.138 0 0 0 3.307 1.623v-6c.237 0 .52.052.804.193.283.14.494.331.638.517.268.348.248.595.244.49l-5.996.204Zm4.31 4.596c1.795 0 2.977-1.25 3.1-1.361L.38 15.277a5.23 5.23 0 0 1-.143.127c-.02.016.01-.01.075-.05a1.919 1.919 0 0 1 1-.272v6Zm3.093-1.356a11.193 11.193 0 0 1 .189-.165c.021-.017.002 0-.047.027a.861.861 0 0 1-.193.075c-.07.018-.113.018-.111.018v-6c-2.138 0-3.35 1.133-3.857 1.59l4.02 4.455Zm-.162-.045c-.19 0-.177-.087-.054.06.11.132.354.53.354 1.378h6c0-4.008-2.559-7.438-6.3-7.438v6Zm.3 1.438c0 .877-.26 1.495-.496 1.823-.118.165-.2.22-.198.217.002 0 .147-.09.423-.09v6c2.081 0 3.7-1.3 4.656-2.636 1.013-1.418 1.615-3.275 1.615-5.314h-6Zm-.271 1.95c.027 0 .092.004.182.029s.165.06.219.092c.049.028.064.045.036.02a12.874 12.874 0 0 1-.2-.19L.33 27.328c.466.453 1.719 1.743 3.943 1.743v-6Zm.24-.044c-.094-.092-1.312-1.493-3.2-1.493v6c-.552 0-.933-.213-1.072-.307-.064-.042-.09-.068-.067-.048l.152.145 4.187-4.297Zm-3.2-1.493a4.132 4.132 0 0 0-3.315 1.636c-.72.941-.965 2.043-.996 2.985l5.996.2c.005-.127.03.114-.236.462-.143.187-.355.38-.64.522a1.832 1.832 0 0 1-.81.195v-6ZM-3 26.253v4.551h6v-4.55h-6Zm0 4.552c0 2.024.799 3.898 2.006 5.275C.202 37.444 2.01 38.54 4.152 38.54v-6c-.03 0-.297-.032-.634-.416A2.075 2.075 0 0 1 3 30.803l-6 .002Zm7.152 7.736h5.779v-6H4.152v6Zm5.923-.003c1.118-.054 2.25-.493 3.1-1.407.845-.907 1.195-2.052 1.195-3.139h-6c0-.186.07-.578.412-.947.349-.375.762-.489 1.004-.5l.29 5.993Zm4.296-4.546c0-1.636-.873-2.702-1.098-3l-4.79 3.613c.064.085.079.105.086.117.003.004-.021-.032-.053-.097a1.466 1.466 0 0 1-.145-.633h6Zm-1.099-3.002a6.99 6.99 0 0 1-.08-.107l-.018-.025a.577.577 0 0 1 .057.112c.01.027.018.05.023.07l.007.024c-.001-.005-.01-.061-.01-.189h-6c0 .847.125 1.62.415 2.34.284.702.668 1.193.819 1.392l4.787-3.617Zm-.021-.115c0-.1.017-.12.006-.094a.178.178 0 0 1-.02.034l-.012.013c.003-.003.225-.178.877-.178v-6c-1.688 0-3.391.457-4.729 1.578-1.391 1.164-2.123 2.833-2.123 4.647h6Zm.85-.225c.653 0 .876.175.879.178l-.011-.013a.174.174 0 0 1-.02-.034c-.012-.026.005-.005.005.094h6c0-1.814-.73-3.483-2.123-4.648-1.338-1.12-3.041-1.577-4.73-1.577v6Zm.853.225c0 .127-.01.184-.01.188l.006-.025a.694.694 0 0 1 .08-.18l-.019.027-.081.109 4.793 3.61c.147-.196.532-.687.815-1.388.29-.72.416-1.493.416-2.341h-6Zm-.023.117c-.221.293-1.098 1.361-1.098 3h6a1.476 1.476 0 0 1-.146.636c-.032.065-.056.1-.053.095l.087-.118-4.79-3.613Zm-1.098 3c0 1.067.333 2.228 1.203 3.154.875.932 2.025 1.339 3.114 1.39l.286-5.992c.18.008.6.098.973.494.367.39.424.8.424.954h-6Zm4.459 4.548 3.716.001.001-6h-3.715l-.002 6Zm3.716.001c2.026 0 3.742-.963 4.871-2.445 1.09-1.43 1.576-3.242 1.576-5.079h-6c0 .827-.221 1.276-.348 1.443-.059.076-.091.089-.08.083.014-.007.019-.002-.018-.002v6Zm6.448-7.524v-5.159h-6v5.159h6Zm-.049-4.624c-.05.276-.128.472-.156.54a1.776 1.776 0 0 1-.34.55c-.14.157-.704.723-1.698.723v-6c-1.436 0-2.367.824-2.77 1.273-.229.255-.407.519-.542.76a3.554 3.554 0 0 0-.398 1.084l5.904 1.07Zm-2.194 1.813c-1.005 0-1.638-.518-1.743-.603-.114-.093-.174-.165-.04-.023l4.337-4.147c-.068-.071-.276-.294-.51-.483a3.23 3.23 0 0 0-2.044-.744v6Zm-1.79-.634c.193.203.698.753 1.469 1.197.819.473 1.804.76 2.963.76v-6c-.078 0-.096-.009-.07-.002a.482.482 0 0 1 .104.045c.036.02.051.035.039.024a6.559 6.559 0 0 1-.153-.155l-4.351 4.131Zm4.434 1.957c4.13-.002 7.143-3.65 7.143-8.41h-6c0 1.186-.341 1.808-.578 2.084-.241.282-.462.326-.568.326l.003 6ZM36 21.12c0-2.388-.59-4.485-1.816-6.056-1.251-1.604-3.051-2.492-4.955-2.492v6c.007 0 .018.001.04.012.02.01.09.05.184.17.19.244.547.922.547 2.366h6Zm-6.771-8.547c-2.515 0-4 1.445-4.526 1.934l4.085 4.395c.253-.236.323-.288.379-.32l.013-.006c-.007.002.006-.003.049-.003v-6Zm-4.526 1.933c-.14.13-.142.13-.116.11.017-.014.126-.1.3-.195a2.848 2.848 0 0 1 1.326-.329v6c.772 0 1.334-.288 1.53-.394.251-.136.445-.281.554-.367.21-.165.415-.36.49-.429l-4.084-4.396Zm1.51-.414a2.27 2.27 0 0 1 1.685.71c.096.105.168.209.225.31.03.05.068.122.108.215.023.054.116.268.174.573l-5.895 1.118c.102.539.334.948.411 1.083.132.23.308.485.535.734.393.434 1.322 1.257 2.758 1.257v-6Zm2.237 2.155-.002-.027-5.985.424.002.027 5.985-.424Zm.006.185v-3.975h-6v3.975h6Zm0-3.975c0-3.458-2.024-7.65-6.447-7.65v6l-.02-.004a.134.134 0 0 1-.027-.01c-.01-.005.035.015.109.115.157.212.384.713.384 1.55h6Zm-6.447-7.65h-3.697v6h3.697v-6Zm-3.434.011-.037-.003-.528 5.977.038.003.527-5.977Zm-.168-.012c-.04-.002.068 0 .248.04.163.038.632.161 1.11.562.57.477.844 1.08.95 1.568.075.343.061.65.061.518h-6a3.344 3.344 0 0 0 .077.76 3.16 3.16 0 0 0 1.059 1.753c.54.453 1.102.619 1.405.688.32.073.615.096.823.105l.267-5.994Zm2.37 2.688c0 .693-.259 1.175-.348 1.329-.044.075-.075.118-.067.106a5.06 5.06 0 0 1 .067-.09l-4.795-3.607c-.067.09-.245.322-.392.574a3.34 3.34 0 0 0-.466 1.688h6Zm-.35 1.349c.186-.247.608-.794.939-1.594.335-.812.531-1.756.531-2.874h-6c0 .396-.065.554-.076.58-.015.038-.026.064-.184.273l4.79 3.615Zm-5.496-4.35c-.223.296-1.098 1.364-1.098 3.002h6a1.47 1.47 0 0 1-.145.633c-.032.065-.056.1-.053.095l.086-.116-4.79-3.614Zm-1.098 3.002c0 .626.11 1.714.868 2.717.843 1.118 2.09 1.616 3.331 1.694l.376-5.989c.02.002.182.015.411.125.244.118.482.306.671.556.351.465.343.88.343.897h-6Zm3.957 4.386c.174.025.35.036.525.035l-.058-6a2.57 2.57 0 0 1 .393.026l-.86 5.939Zm.496.035h3.723v-6h-3.723v6Zm3.723 0a.985.985 0 0 1-.502-.148c-.139-.087-.18-.163-.164-.137.017.026.064.115.105.277.041.159.067.349.067.55h6c0-1.314-.313-2.788-1.102-4.035-.832-1.316-2.319-2.507-4.404-2.507v6Zm-.494.541v4.03h6v-4.03h-6Zm0 4.03c0-.068.002-.119.003-.126v.005l-.003.054c-.004.081-.015.359.044.701l5.91-1.034a2.81 2.81 0 0 1 .04.587v.024-.024c.002-.027.006-.098.006-.186h-6Zm.024.498c.138 1.082.687 2.052 1.35 2.746.685.715 1.823 1.47 3.325 1.47v-6c.596 0 .928.295 1.01.382a.791.791 0 0 1 .137.193c.034.065.1.212.13.447l-5.952.762Zm4.674 4.216c1.833 0 3.035-1.314 3.158-1.428l-4.08-4.398c-.098.09-.137.126-.169.153-.027.023-.002 0 .06-.04a1.939 1.939 0 0 1 1.032-.287v6Zm3.163-1.432a12.02 12.02 0 0 1 .213-.193c.034-.028.026-.018-.013.005a.831.831 0 0 1-.347.101v-6c-2.194 0-3.46 1.247-3.944 1.697l4.091 4.39Zm-.147-.087a.755.755 0 0 1-.366-.107c-.117-.07-.14-.125-.106-.073.09.14.3.63.3 1.618h6c0-1.709-.344-3.437-1.24-4.843-.956-1.5-2.552-2.595-4.588-2.595v6Zm-.172 1.438c0 .916-.25 1.247-.296 1.3-.047.055-.023 0 .094 0v6c1.659 0 3.284-.728 4.452-2.084 1.17-1.358 1.75-3.177 1.75-5.216h-6Zm-.202 1.3c-.026 0 .019-.003.112.02a1.309 1.309 0 0 1 .53.271c.007.007 0 .003-.099-.101l-4.342 4.14c.145.152.606.662 1.3 1.052.76.427 1.6.618 2.5.618v-6Zm.543.19c-.117-.124-1.258-1.513-3.184-1.513v6c-.509 0-.899-.189-1.11-.332a1.19 1.19 0 0 1-.14-.11l.02.02.072.075 4.342-4.14Zm-3.184-1.513c-1.503 0-2.641.756-3.325 1.472-.663.693-1.213 1.664-1.35 2.75l5.952.753a1.36 1.36 0 0 1-.13.45.793.793 0 0 1-.136.193c-.083.087-.414.382-1.012.382v-6Zm-4.655 4.08a3.257 3.257 0 0 0-.042.756v.006c0-.008-.002-.06-.002-.128h6c0-.088-.004-.159-.006-.186V25.6v.024a2.64 2.64 0 0 1-.04.587l-5.91-1.034Zm-.044.634v5.208h6V25.81h-6Zm0 5.208c0 .202-.024.382-.06.523-.035.145-.073.205-.072.204a.674.674 0 0 1 .217-.188.852.852 0 0 1 .409-.125v6c2.04 0 3.553-1.086 4.428-2.453.803-1.255 1.078-2.716 1.078-3.96h-6Zm.494.414h-3.697v6h3.697v-6Zm-3.555.003c.241.012 1.142.132 1.808 1.04.573.78.514 1.61.514 1.517h-6c0 .032-.059 1.068.648 2.031.8 1.09 1.969 1.368 2.745 1.405l.285-5.993Zm2.322 2.557c0 .696-.26 1.18-.346 1.328-.043.075-.074.117-.067.106l.066-.088-4.795-3.607c-.07.093-.246.324-.393.577-.168.29-.465.881-.465 1.684h6Zm-.348 1.347c.184-.245.607-.792.937-1.591.336-.812.532-1.757.532-2.874h-6c0 .396-.065.553-.075.579-.016.038-.027.064-.187.277l4.793 3.609Zm1.47-4.465c0-1.749-.603-3.613-1.996-5.059-1.43-1.483-3.451-2.276-5.8-2.276v6c.964 0 1.34.296 1.48.44.176.183.315.486.315.895h6Zm-7.796-7.335c-2.036 0-3.996.624-5.484 1.97-1.515 1.37-2.31 3.284-2.31 5.365h6c0-.512.168-.765.333-.914.193-.174.63-.42 1.46-.42v-6Zm-7.794 7.335c0 1.117.195 2.06.53 2.873.332.8.754 1.347.94 1.595l4.79-3.615c-.159-.21-.17-.236-.185-.274-.01-.025-.075-.183-.075-.58h-6Zm1.467 4.463.067.09c.008.012-.023-.03-.066-.105a2.662 2.662 0 0 1-.347-1.33h6c0-.805-.299-1.398-.468-1.688-.146-.252-.323-.483-.39-.573l-4.796 3.606Zm-.346-1.345c0 .102-.059-.705.486-1.476.656-.926 1.57-1.067 1.855-1.08l.284 5.992c.801-.037 1.974-.337 2.759-1.445.674-.953.616-1.968.616-1.99h-6Zm2.483-2.56h-5.76v6h5.76v-6Zm-5.76 0c.154 0 .225.042.207.032a.682.682 0 0 1-.17-.147 1.12 1.12 0 0 1-.195-.31.575.575 0 0 1-.05-.203h-6c0 1.756.742 3.349 1.75 4.488.987 1.116 2.548 2.14 4.458 2.14v-6Zm-.208-.628v-4.529h-6v4.529h6Zm-.002-4.43c0 .018-.006.18-.08.418a2.553 2.553 0 0 1-.61 1.016c-.388.4-.85.634-1.28.747-.375.097-.692.087-.659.087v-6c-.127 0-1.366-.045-2.37.991-.86.888-.98 1.978-.998 2.544l5.997.196Zm-2.629 2.268c-.404 0-.725-.085-.926-.153-.204-.07-.359-.15-.453-.203-.178-.1-.289-.192-.307-.207-.03-.025-.03-.028.103.102l4.18-4.306c-.072-.069-.27-.265-.476-.433a3.857 3.857 0 0 0-.549-.38c-.19-.107-.77-.42-1.572-.42v6Zm-1.589-.467c.523.51 1.994 2.003 4.55 2.003v-6c-.041 0-.048-.005-.033 0 .014.004.02.008.014.004a.702.702 0 0 1-.093-.07 4.853 4.853 0 0 1-.247-.231l-4.19 4.294Zm4.55 2.003c2.225 0 4.082-1.293 5.266-2.867 1.222-1.624 1.946-3.785 1.946-6.192h-6c0 1.217-.365 2.086-.74 2.585-.414.55-.664.474-.472.474v6Zm7.212-9.06c0-4.813-3.114-8.546-7.242-8.546v6c.072 0 .327.039.616.376.274.32.626.983.626 2.17h6Zm-7.242-8.546c-2.458 0-3.886 1.326-4.437 1.826l4.031 4.444c.235-.213.284-.244.316-.262l.005-.002c-.001 0-.002 0 0 0a.519.519 0 0 1 .085-.007v-6Zm-4.436 1.825c-.136.123-.12.105-.07.068.031-.024.155-.116.347-.21a2.776 2.776 0 0 1 1.228-.282v6c.68 0 1.19-.221 1.43-.34.265-.13.47-.275.587-.363.223-.166.434-.36.507-.427l-4.03-4.446Zm1.505-.424c-.032 0 .273-.01.637.082a2.75 2.75 0 0 1 1.265.716c.374.372.554.766.638 1.028.08.25.088.425.089.456l-5.996.213c.02.576.15 1.673 1.035 2.554 1.003.999 2.218.95 2.332.95v-6Zm2.63 2.388v-4.118h-6v4.118h6Zm0-4.118a.26.26 0 0 1 .023-.113.47.47 0 0 1 .223-.211c.039-.017.03-.004-.037-.004v-6c-3.052 0-6.208 2.59-6.208 6.328h6Zm.21-.328h5.765v-6H4.152v6Zm5.915-.004.044-.002-.3-5.993-.044.003.3 5.992Zm.025-.001c1.264-.056 2.536-.547 3.396-1.677.768-1.007.881-2.107.881-2.74h-6c0-.015-.008-.43.346-.895.192-.252.436-.442.688-.56.237-.11.404-.121.427-.122l.262 5.994Zm4.277-4.417c0-1.637-.872-2.703-1.097-3l-4.79 3.613c.064.084.079.104.086.116.003.004-.021-.031-.053-.096a1.467 1.467 0 0 1-.145-.633h6ZM13.272 4.49a7.146 7.146 0 0 1-.08-.108l-.018-.025a.568.568 0 0 1 .057.113l.024.069.006.025c-.001-.006-.01-.063-.01-.19h-6c0 .846.125 1.62.415 2.34.283.702.668 1.193.819 1.392l4.787-3.616Zm-.021-.117c0-.07.012-.078 0-.05-.013.026-.026.035-.013.024.03-.025.277-.199.905-.199v-6c-1.7 0-3.4.474-4.733 1.579C8.028.873 7.25 2.53 7.25 4.374h6Zm.892-.225c.308 0 .523.042.657.085.131.042.178.082.179.083 0 0-.005-.004-.013-.016a.178.178 0 0 1-.02-.032c-.01-.023.008.002.008.105h6c0-1.802-.718-3.468-2.1-4.637-1.33-1.126-3.028-1.588-4.71-1.588v6Zm.811.225c0 .127-.01.184-.01.189l.006-.025a.66.66 0 0 1 .08-.178c0-.003-.003.004-.02.026l-.08.108 4.793 3.61c.148-.197.532-.688.815-1.39.29-.719.416-1.492.416-2.34h-6Z"
      mask="url(#a)"
    />
  </Svg>
)
export default SvgComponent