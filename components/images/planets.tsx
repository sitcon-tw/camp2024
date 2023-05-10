import {
  motion,
  useTime,
  useTransform,
  useSpring,
  useScroll,
  easeInOut
} from "framer-motion";
export default function Planets({ style, className }: {
  style?: object
  className?: string
}) {
  const time = useTime()
  const warpTime = useTransform(time, t => t % 8000);
  const star1Opacity = useTransform(warpTime, [0, 4000, 8000], [0.5, 1, 0.5], { ease: easeInOut })
  const star1Rotate = useTransform(warpTime, [0, 4000, 8000], [0, 10, 0], { ease: easeInOut })
  const star2Opacity = useTransform(warpTime, [0, 4000, 8000], [1, 0.5, 1], { ease: easeInOut })
  const star2Rotate = useTransform(warpTime, [0, 4000, 8000], [0, -10, 0], { ease: easeInOut })
  const star2Scale = useTransform(warpTime, [0, 4000, 8000], [1, 1.2, 1], { ease: easeInOut })
  return (<motion.svg className={className} style={style} width="587" height="490" viewBox="0 0 587 490" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_222_2" maskUnits="userSpaceOnUse" x="95" y="177" width="383" height="313">
      <path d="M477.355 177.029H95.1289V489.588H477.355V177.029Z" fill="white" />
    </mask>
    <g mask="url(#mask0_222_2)">
      <path d="M285.463 481.994C386.28 481.994 468.009 400.266 468.009 299.449C468.009 198.632 386.28 116.903 285.463 116.903C184.646 116.903 102.918 198.632 102.918 299.449C102.918 400.266 184.646 481.994 285.463 481.994Z" fill="#B5B5B6" stroke="white" stroke-width="5.42129" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </g>
    <path d="M252.755 383.65C274.854 383.65 292.769 365.735 292.769 343.636C292.769 321.537 274.854 303.622 252.755 303.622C230.656 303.622 212.741 321.537 212.741 343.636C212.741 365.735 230.656 383.65 252.755 383.65Z" fill="#42B1AF" stroke="white" stroke-width="4.33631" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M193.173 282.985C194.839 282.985 196.191 281.677 196.191 280.064C196.191 278.451 194.839 277.143 193.173 277.143C191.506 277.143 190.155 278.451 190.155 280.064C190.155 281.677 191.506 282.985 193.173 282.985Z" fill="white" />
    <path d="M199.209 406.237C200.875 406.237 202.227 404.929 202.227 403.316C202.227 401.703 200.875 400.395 199.209 400.395C197.542 400.395 196.19 401.703 196.19 403.316C196.19 404.929 197.542 406.237 199.209 406.237Z" fill="white" />
    <path d="M309.612 412.079C311.279 412.079 312.63 410.771 312.63 409.158C312.63 407.545 311.279 406.237 309.612 406.237C307.945 406.237 306.594 407.545 306.594 409.158C306.594 410.771 307.945 412.079 309.612 412.079Z" fill="white" />
    <path d="M319.348 287.266C321.015 287.266 322.366 285.958 322.366 284.345C322.366 282.732 321.015 281.424 319.348 281.424C317.681 281.424 316.33 282.732 316.33 284.345C316.33 285.958 317.681 287.266 319.348 287.266Z" fill="white" />
    <path d="M329.28 308.526C416.822 300.624 467.507 278.596 461.159 252.705" stroke="white" stroke-width="4.33631" stroke-miterlimit="1.5" stroke-linecap="square" stroke-linejoin="round" />
    <path d="M328.765 274.984C330.209 330.84 326.644 376.102 318.351 416.62" stroke="white" stroke-width="5.42088" stroke-miterlimit="1.5" stroke-linecap="square" stroke-linejoin="round" />
    <path d="M103.08 290.026C103.202 308.984 140.272 323.063 181.823 328.103" stroke="white" stroke-width="5.42088" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M120.142 376.967C131.136 408.953 230.803 423.285 318.006 418.958" stroke="white" stroke-width="5.3098" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M200.238 215.682C178.033 259.44 176.018 325.256 190.738 409.353" stroke="white" stroke-width="5.42088" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M289.402 4.54096C291.375 0.0138248 293.649 -0.138053 296.12 2.59381L297.094 18.9499L315.007 4.93039C319.159 2.86835 320.927 3.78936 320.654 7.26698L297.483 29.854L298.457 63.9292L327.08 52.5383L332.337 18.9499C334.13 11.5449 336.3 9.34459 338.957 13.8873L337.594 47.281L353.951 40.9528C361.324 38.1839 362.763 40.4913 361.35 45.2365L329.405 60.9267L352.297 74.8605C352.173 77.8416 350.115 78.7275 344.682 75.9587L321.511 64.8054L299.041 75.8068L302.351 127.991L279.826 126.207L284.048 79.117L255.23 52.5383L235.369 67.4341C231.64 67.0407 230.637 65.2455 233.616 61.3979L249.388 47.281L233.616 31.6064C231.969 26.8281 233.324 24.696 238.095 25.5702L285.605 62.3715L286.774 42.3158L251.53 21.0918C249.988 17.8984 250.89 16.0701 254.646 15.8345L263.018 19.3393L265.355 8.04584C266.823 3.52065 268.702 3.23831 270.807 5.31982L268.47 21.0918L288.526 30.8276L289.402 4.54096Z" fill="white" />
    <path d="M285.468 223.01C363.185 223.01 426.187 206.958 426.187 187.157C426.187 167.356 363.185 151.304 285.468 151.304C207.751 151.304 144.749 167.356 144.749 187.157C144.749 206.958 207.751 223.01 285.468 223.01Z" fill="#7B7B7B" stroke="white" stroke-width="4.9458" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M393.164 298.919C392.269 413.54 370.947 466.933 353.01 468.787" stroke="white" stroke-width="4.33631" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M183.6 267.712C227.296 275.413 275.669 277.677 328.301 274.99" stroke="white" stroke-width="5.42088" stroke-miterlimit="1.5" stroke-linejoin="round" />
    <path fill-rule="evenodd" clip-rule="evenodd" d="M200.24 181.328C200.24 149.712 238.746 124.085 286.244 124.085C333.743 124.085 372.251 149.712 372.251 181.328C372.251 182.067 372.251 182.816 372.251 183.575C372.251 195.522 333.712 205.22 286.244 205.22C238.777 205.22 200.24 195.522 200.24 183.575C200.24 182.816 200.232 182.214 200.24 181.328Z" fill="#77B45A" stroke="white" stroke-width="5.42088" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M103.182 332.312C21.4622 380.169 -4.18567 410.807 5.98237 430.458C30.6373 478.107 205.373 433.47 324.525 390.316C455.935 337.666 582.757 266.932 563.525 222.529C552.921 205.188 510.401 200.384 445.506 210.414" stroke="white" stroke-width="7.58806" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <motion.path
      drag
      whileDrag={{ scale: 1.2, rotate: 45 }}
      whileTap={{ scale: 1.2, rotate: 45 }}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      dragElastic={0.05}
      style={{ opacity: star2Opacity, rotate: star2Rotate, scale: star2Scale }}
      className="cursor-grab active:cursor-grabbing"
      d="M66.8654 316.889L68.0081 322.516L73.2921 324.765L68.2932 327.591L67.7877 333.311L63.5548 329.43L57.9588 330.716L60.3418 325.492L57.3887 320.568L63.0943 321.219L66.8654 316.889Z" fill="white" />
    <motion.path
      drag
      whileDrag={{ scale: 1.2, rotate: 45 }}
      whileTap={{ scale: 1.2, rotate: 45 }}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      dragElastic={0.05}
      style={{ opacity: star1Opacity, rotate: star1Rotate }}
      className="cursor-grab active:cursor-grabbing"
      d="M519.555 376.318L533.14 380.351L544.165 371.445L544.528 385.612L556.405 393.344L543.043 398.068L539.36 411.752L530.738 400.504L516.586 401.231L524.618 389.554L519.555 376.318Z" fill="white" />
    <path d="M560.013 275.568C572.972 275.568 583.476 265.063 583.476 252.105C583.476 239.146 572.972 228.642 560.013 228.642C547.055 228.642 536.55 239.146 536.55 252.105C536.55 265.063 547.055 275.568 560.013 275.568Z" fill="#77B45A" stroke="white" stroke-width="5.42102" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M29.5017 396.1C36.7606 396.1 42.645 390.215 42.645 382.956C42.645 375.697 36.7606 369.813 29.5017 369.813C22.2429 369.813 16.3584 375.697 16.3584 382.956C16.3584 390.215 22.2429 396.1 29.5017 396.1Z" fill="#E7A35B" stroke="white" stroke-width="5.42018" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M569.329 242.882L569.73 244.174" stroke="white" stroke-width="3.25174" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M554.926 250.372L555.422 252.483" stroke="white" stroke-width="3.25174" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M569.331 251.429C570.659 254.086 569.168 256.871 566.706 257.619C564.45 258.302 562.037 256.902 561.482 255.095" stroke="white" stroke-width="3.25175" stroke-miterlimit="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <motion.path
      style={{ opacity: star1Opacity }} d="M231.87 64.3853C235.634 64.3853 238.685 61.3343 238.685 57.5707C238.685 53.8071 235.634 50.7562 231.87 50.7562C228.107 50.7562 225.056 53.8071 225.056 57.5707C225.056 61.3343 228.107 64.3853 231.87 64.3853Z" fill="#FFF090" />
    <motion.path
      style={{ opacity: star2Opacity }} d="M255.431 42.1895C259.195 42.1895 262.246 39.1385 262.246 35.3749C262.246 31.6113 259.195 28.5604 255.431 28.5604C251.668 28.5604 248.617 31.6113 248.617 35.3749C248.617 39.1385 251.668 42.1895 255.431 42.1895Z" fill="#FFF090" />
    <motion.path
      style={{ opacity: star1Opacity }} d="M329.819 24.8134C332.619 24.8134 334.89 22.5574 334.89 19.7745C334.89 16.9916 332.619 14.7357 329.819 14.7357C327.019 14.7357 324.749 16.9916 324.749 19.7745C324.749 22.5574 327.019 24.8134 329.819 24.8134Z" fill="#FFF090" />
    <motion.path
      style={{ opacity: star2Opacity }} d="M357.524 34.024C361.688 34.024 365.064 30.6693 365.064 26.531C365.064 22.3928 361.688 19.038 357.524 19.038C353.36 19.038 349.984 22.3928 349.984 26.531C349.984 30.6693 353.36 34.024 357.524 34.024Z" fill="#A5C8A2" />
    <motion.path
      style={{ opacity: star1Opacity }} d="M359.678 61.0767C360.868 61.0767 361.833 60.1178 361.833 58.935C361.833 57.7522 360.868 56.7934 359.678 56.7934C358.488 56.7934 357.523 57.7522 357.523 58.935C357.523 60.1178 358.488 61.0767 359.678 61.0767Z" fill="#FFF090" />
    <motion.path
      style={{ opacity: star2Opacity }} d="M286.991 18.2301C288.934 18.2301 290.509 16.6649 290.509 14.734C290.509 12.8032 288.934 11.2379 286.991 11.2379C285.048 11.2379 283.473 12.8032 283.473 14.734C283.473 16.6649 285.048 18.2301 286.991 18.2301Z" fill="#A5C8A2" />
    <motion.path
      style={{ opacity: star1Opacity }}
      d="M255.429 68.6711C257.795 68.6711 259.712 66.7534 259.712 64.3878C259.712 62.0222 257.795 60.1046 255.429 60.1046C253.064 60.1046 251.146 62.0222 251.146 64.3878C251.146 66.7534 253.064 68.6711 255.429 68.6711Z" fill="#A5C8A2" />
  </motion.svg>
  )
}