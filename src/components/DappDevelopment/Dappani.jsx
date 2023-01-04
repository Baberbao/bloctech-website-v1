import { useMediaQuery } from "@mui/material";

import gsap, { Linear } from "gsap";
import React, { useEffect } from "react";
import dot from "./assests/dot.png";

const Dappani = () => {
  const matches = useMediaQuery("(max-width:700px)");

  useEffect(() => {
    gsap.to(".dot1", {
      // yoyo: true,
      repeat: -1,
      duration: 8,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath1",
        align: ".dotpath1",
        alignOrigin: [0.5, 0.5],
        autoRotate: 70,
      },
    });
    gsap.to(".dot4", {
      // yoyo: true,
      repeat: -1,
      duration: 12,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath4",
        align: ".dotpath4",
        alignOrigin: [0.5, 0.5],
        autoRotate: 70,
      },
    });
  });

  useEffect(() => {
    gsap.to(".dot2", {
      // yoyo: true,
      repeat: -1,
      duration: 25,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath2",
        align: ".dotpath2",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot3", {
      // yoyo: true,
      repeat: -1,
      duration: 15,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath3",
        align: ".dotpath3",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot1", {
      // yoyo: true,
      repeat: -1,
      duration: 20,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath1",
        align: ".dotpath1",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot5", {
      // yoyo: true,
      repeat: -1,
      duration: 7,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath5",
        align: ".dotpath5",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot6", {
      // yoyo: true,
      repeat: -1,
      duration: 15,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath6",
        align: ".dotpath6",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot7", {
      // yoyo: true,
      repeat: -1,
      duration: 12,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath7",
        align: ".dotpath7",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot8", {
      // yoyo: true,
      repeat: -1,
      duration: 8,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath8",
        align: ".dotpath8",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot9", {
      // yoyo: true,
      repeat: -1,
      duration: 13,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath9",
        align: ".dotpath9",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot10", {
      // yoyo: true,
      repeat: -1,
      duration: 9,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath10",
        align: ".dotpath10",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot11", {
      // yoyo: true,
      repeat: -1,
      duration: 11,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath11",
        align: ".dotpath11",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot12", {
      // yoyo: true,
      repeat: -1,
      duration: 20,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath12",
        align: ".dotpath12",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot13", {
      // yoyo: true,
      repeat: -1,
      duration: 7,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath13",
        align: ".dotpath13",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot14", {
      // yoyo: true,
      repeat: -1,
      duration: 10,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath14",
        align: ".dotpath14",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot15", {
      // yoyo: true,
      repeat: -1,
      duration: 8,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath15",
        align: ".dotpath15",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot16", {
      // yoyo: true,
      repeat: -1,
      duration: 9,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath16",
        align: ".dotpath16",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot17", {
      // yoyo: true,
      repeat: -1,
      duration: 10,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath17",
        align: ".dotpath17",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot18", {
      // yoyo: true,
      repeat: -1,
      duration: 14,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath18",
        align: ".dotpath18",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot19", {
      // yoyo: true,
      repeat: -1,
      duration: 19,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath19",
        align: ".dotpath19",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot20", {
      // yoyo: true,
      repeat: -1,
      duration: 11,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath20",
        align: ".dotpath20",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot21", {
      // yoyo: true,
      repeat: -1,
      duration: 8,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath21",
        align: ".dotpath21",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
    gsap.to(".dot22", {
      // yoyo: true,
      repeat: -1,
      duration: 18,
      ease: Linear.easeIn,
      motionPath: {
        path: ".dotpath22",
        align: ".dotpath22",
        alignOrigin: [0.5, 0.5],
        autoRotate: true,
      },
    });
  }, [matches]);
  return (
    <div>
      <img
        className="dot1"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot4"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot2"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot3"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot5"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot6"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot7"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot8"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot9"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot10"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot11"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot12"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot13"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot14"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot15"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot16"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot17"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot18"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot19"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot20"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot21"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <img
        className="dot22"
        style={{
          position: "absolute",
        }}
        src={dot}
        alt=""
      />
      <svg
        width={matches ? "100%" : "80%"}
        height="auto"
        viewBox="0 0 738 634"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="dotpath13"
          opacity="0.5"
          d="M520.929 274.261C756.634 353.291 359.555 633.209 334.362 444.463C321.742 349.954 186.243 462.462 164.863 334.952C149.747 244.914 254.129 257.828 330.367 200.565C456.765 105.624 453.542 251.677 520.929 274.261Z"
          fill="url(#paint0_radial_1402_9)"
          stroke="#2AF6FF"
          stroke-width="1.69476"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.29 3.4 0.3 3.4 0.2 3.4"
        />
        <path
          className="dotpath14"
          opacity="0.5429"
          d="M525.286 263.707C730.397 352.973 391.013 622.814 338.175 454.359C312.21 371.607 174.94 434.817 170.923 318.86C168.017 235.2 266.181 234.292 338.561 193.415C457.332 126.346 463.188 236.675 525.286 263.707Z"
          fill="url(#paint1_radial_1402_9)"
          stroke="#2AF6FF"
          stroke-width="1.57356"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.29 3.4 0.3 3.4 0.2 3.4"
        />
        <path
          className="dotpath15"
          opacity="0.5857"
          d="M529.645 253.13C703.933 350.522 423.606 613.327 341.966 464.232C303.29 393.6 164.159 406.515 176.96 302.723C186.561 224.918 277.166 211.028 346.755 186.243C456.448 147.137 472.562 221.264 529.645 253.13Z"
          fill="url(#paint2_radial_1402_9)"
          stroke="#2AF6FF"
          stroke-width="1.45259"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.29 3.4 0.3 3.4 0.2 3.4"
        />
        <path
          className="dotpath16"
          opacity="0.6286"
          d="M533.98 242.576C677.809 345.596 457.9 603.953 345.756 474.128C295.233 415.616 154.377 377.78 183.02 286.63C205.762 214.251 286.722 187.559 354.948 179.093C453.474 166.86 481.845 205.217 533.98 242.576Z"
          fill="url(#paint3_radial_1402_9)"
          stroke="#2AF6FF"
          stroke-width="1.33162"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.29 3.4 0.3 3.4 0.2 3.4"
        />
        <path
          className="dotpath17"
          opacity="0.6714"
          d="M538.337 232C652.752 338.062 493.716 593.536 349.569 484.001C287.902 437.133 145.889 349.07 189.08 270.493C225.872 203.561 295.074 162.502 363.142 171.899C448.844 183.769 491.333 188.422 538.337 232Z"
          fill="url(#paint4_radial_1402_9)"
          stroke="#2AF6FF"
          stroke-width="1.21042"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.29 3.4 0.3 3.4 0.2 3.4"
        />
        <path
          className="dotpath18"
          opacity="0.7143"
          d="M542.695 221.446C629.555 328.393 530.212 581.438 353.359 493.897C280.798 457.968 138.399 321.084 195.118 254.401C246.889 193.552 303.903 134.835 371.312 164.772C444.781 197.365 501.569 170.764 542.695 221.446Z"
          fill="url(#paint5_radial_1402_9)"
          stroke="#2AF6FF"
          stroke-width="1.08944"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.29 3.4 0.3 3.4 0.2 3.4"
        />
        <path
          className="dotpath19"
          opacity="0.7571"
          d="M547.053 210.869C608.856 317.702 566.504 567.775 357.172 503.77C273.558 478.213 131.272 294.166 201.178 238.286C268.36 184.563 315.206 105.193 379.529 157.6C443.284 209.552 513.235 152.402 547.053 210.869Z"
          fill="url(#paint6_radial_1402_9)"
          stroke="#2AF6FF"
          stroke-width="0.968469"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.29 3.4 0.3 3.4 0.2 3.4"
        />
        <path
          className="dotpath20"
          opacity="0.8"
          d="M551.41 200.315C590.903 307.67 602.115 553.158 360.962 513.666C265.999 498.119 123.827 268.246 207.238 222.172C289.763 176.574 328.96 75.5965 387.722 150.428C444.35 222.58 526.943 133.814 551.41 200.315Z"
          stroke="#2AF6FF"
          stroke-width="0.847268"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.29 0.29"
        />
        <path
          className="dotpath21"
          opacity="0.6857"
          d="M538.519 212.39C574.629 310.53 584.866 534.933 364.435 498.845C277.62 484.637 147.659 274.488 223.897 232.386C299.341 190.714 335.406 98.2254 388.879 166.815C441.082 233.838 516.163 151.585 538.519 212.39Z"
          stroke="#2AF6FF"
          stroke-width="0.762609"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.27 0.27"
        />
        <path
          className="dotpath22"
          opacity="0.5714"
          d="M525.65 224.464C558.356 313.39 567.639 516.73 367.908 484.024C289.241 471.155 171.491 280.752 240.579 242.576C308.919 204.809 341.852 120.831 390.083 183.156C437.837 245.073 505.382 169.379 525.65 224.464Z"
          stroke="#2AF6FF"
          stroke-width="0.677724"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.24 0.24"
        />
        <path
          opacity="0.4571"
          d="M512.758 236.539C542.082 316.25 550.412 498.504 371.358 469.203C300.839 457.65 195.299 286.994 257.216 252.79C318.474 218.949 348.275 143.46 391.217 199.521C434.591 256.33 494.578 187.151 512.758 236.539Z"
          stroke="#2AF6FF"
          stroke-width="0.592838"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.22 0.22"
        />
        <path
          opacity="0.3429"
          d="M499.866 248.613C525.808 319.109 533.162 480.301 374.83 454.359C312.459 444.145 219.13 293.212 273.875 262.958C328.052 233.021 354.698 166.043 392.374 215.862C431.322 267.588 483.797 204.945 499.866 248.613Z"
          stroke="#2AF6FF"
          stroke-width="0.508179"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.19 0.19"
        />
        <path
          opacity="0.2286"
          d="M486.975 260.688C509.512 321.969 515.913 462.076 378.28 439.538C324.08 430.664 242.939 299.454 290.534 273.171C337.63 247.161 361.121 188.672 393.555 232.227C428.077 278.846 473.016 222.739 486.975 260.688Z"
          stroke="#2AF6FF"
          stroke-width="0.423294"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.17 0.17"
        />
        <path
          opacity="0.1143"
          d="M474.083 272.763C493.239 324.807 498.664 443.851 381.73 424.718C335.678 417.182 266.749 305.719 307.171 283.362C347.186 261.256 367.545 211.278 394.69 248.568C424.808 290.103 462.213 240.511 474.083 272.763Z"
          stroke="#2AF6FF"
          stroke-width="0.338408"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.14 0.14"
        />
        <path
          opacity="0.5"
          d="M422.425 522.654C246.321 880.717 25.1646 241.441 258.169 248.818C374.853 252.517 335.111 -19.7525 449.253 2.37679C563.394 24.5061 522.381 137.354 564.121 264.047C616.255 422.266 467.932 430.119 422.425 522.654Z"
          stroke="white"
          stroke-width="2.01252"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.39 0.39"
        />

        {/*  line one */}
        <path
          className="dotpath1"
          opacity="0.5"
          d="M432.775 528.237C255.286 834.779 34.0842 281.614 249.658 247.706C355.288 231.092 363.028 -20.1384 465.027 16.1083C567.003 52.1734 546.145 160.369 568.115 276.939C595.487 422.152 480.96 445.008 432.775 528.237Z"
          fill="url(#paint7_radial_1402_9)"
          stroke="white"
          stroke-width="1.80053"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.39 4.5 0.4 4.5 0.27 4.5"
        />
        <path
          opacity="0.5"
          d="M443.124 533.843C266.635 788.954 41.4832 323.331 241.169 246.616C335.133 210.528 390.945 -20.5015 480.823 29.8852C570.612 79.8861 569.999 183.27 572.132 289.876C574.788 421.835 494.464 459.625 443.124 533.843Z"
          fill="url(#paint8_radial_1402_9)"
          stroke="white"
          stroke-width="1.58877"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.38 4.45 0.39 4.45 0.27 4.45"
        />
        <path
          opacity="0.5"
          d="M453.474 539.449C281.025 743.742 48.5875 367.34 232.658 245.527C314.865 191.145 418.839 -20.8646 496.575 43.6395C574.198 107.576 593.944 205.989 576.127 302.791C554.293 421.336 508.604 474.128 453.474 539.449Z"
          fill="url(#paint9_radial_1402_9)"
          stroke="white"
          stroke-width="1.37701"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.38 4.4 0.39 4.4 0.26 4.4"
        />
        <path
          className="dotpath5"
          opacity="0.5"
          d="M463.824 545.056C298.978 700.12 56.8946 413.437 224.169 244.438C295.165 172.693 446.756 -21.2275 512.372 57.3939C577.83 135.266 618.23 228.686 580.145 315.705C534.161 420.768 523.63 488.79 463.824 545.056Z"
          fill="url(#paint10_radial_1402_9)"
          stroke="white"
          stroke-width="1.16502"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.37 4.35 0.38 4.35 0.26 4.35"
        />
        <path
          className="dotpath6"
          opacity="0.5"
          d="M474.173 550.639C320.426 659.311 67.2668 460.533 215.658 243.303C276.258 154.581 474.65 -21.6362 528.146 71.1026C581.415 162.911 642.765 251.473 584.139 328.574C514.369 420.405 539.767 504.292 474.173 550.639Z"
          fill="url(#paint11_radial_1402_9)"
          stroke="white"
          stroke-width="0.953262"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.37 4.29 0.38 4.29 0.26 4.29"
        />
        <path
          className="dotpath7"
          opacity="0.5"
          d="M484.546 556.245C344.008 622.814 79.4776 507.56 207.192 242.213C258.101 136.424 502.567 -21.9768 543.943 84.8566C585.047 190.601 667.436 274.601 588.156 341.488C494.691 420.382 556.994 521.927 484.546 556.245Z"
          fill="url(#paint12_radial_1402_9)"
          stroke="white"
          stroke-width="0.741502"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.36 4.24 0.37 4.24 0.25 4.24"
        />
        <path
          className="dotpath8"
          opacity="0.5"
          d="M494.896 561.851C366.364 591.516 92.8463 553.975 198.681 241.124C240.352 117.903 530.484 -22.3396 559.718 98.6112C588.656 218.291 692.04 297.979 592.151 354.403C474.923 420.655 574.516 543.467 494.896 561.851Z"
          fill="url(#paint13_radial_1402_9)"
          stroke="white"
          stroke-width="0.529514"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.36 4.19 0.37 4.19 0.25 4.19"
        />
        <path
          className="dotpath4"
          opacity="0.3"
          d="M226.553 428.439C-215.33 374.421 281.524 -104.366 408.943 134.653C472.472 253.833 691.2 101.425 720.252 233.157C749.303 364.888 626.945 369.564 527.67 468.817C403.723 592.763 331.638 441.285 226.553 428.439Z"
          stroke="white"
          stroke-width="1.27102"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.42 0.42"
        />
        {/* line 2 */}

        <path
          className="dotpath2"
          opacity="0.37"
          d="M223.398 444.441C-172.796 362.074 254.787 -79.6493 405.879 122.011C481.028 222.308 706.792 131.317 716.143 255.763C725.04 380.527 619.546 408.693 517.865 481.368C392.102 571.27 322.287 465.004 223.398 444.441Z"
          fill="url(#paint14_radial_1402_9)"
          stroke="white"
          stroke-width="1.31641"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.42 4.94 0.43 4.94 0.3 4.94"
        />
        <path
          opacity="0.44"
          d="M220.243 460.442C-129.468 352.451 227.847 -54.978 402.816 109.369C489.472 190.759 722.817 161.254 712.036 278.369C701.187 396.21 613.01 447.641 508.06 493.919C381.526 549.685 313.3 489.176 220.243 460.442Z"
          fill="url(#paint15_radial_1402_9)"
          stroke="white"
          stroke-width="1.3618"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.42 4.94 0.43 4.94 0.3 4.94"
        />
        <path
          className="dotpath9"
          opacity="0.51"
          d="M217.088 476.443C-85.8905 346.186 200.678 -30.2387 399.751 96.704C497.801 159.233 738.477 191.236 707.927 300.952C677.014 411.939 607.517 487.042 498.255 506.425C372.197 528.804 304.516 514.028 217.088 476.443Z"
          fill="url(#paint16_radial_1402_9)"
          stroke="white"
          stroke-width="1.4072"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.42 4.94 0.43 4.94 0.3 4.94"
        />
        <path
          className="dotpath10"
          opacity="0.58"
          d="M213.933 492.444C-43.0161 343.599 173.374 -5.29487 396.71 84.0621C506.085 127.821 754.07 221.218 703.842 323.558C652.752 427.668 602.547 527.715 488.473 518.977C363.482 509.399 295.619 539.767 213.933 492.444Z"
          fill="url(#paint17_radial_1402_9)"
          stroke="white"
          stroke-width="1.45259"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.42 4.94 0.43 4.94 0.3 4.94"
        />
        <path
          className="dotpath12"
          opacity="0.65"
          d="M210.801 508.445C-2.00347 344.325 146.025 19.876 393.646 71.4202C514.324 96.5455 769.526 251.133 699.734 346.141C628.352 443.283 597.122 569.681 478.668 531.505C354.267 491.4 286.131 566.549 210.801 508.445Z"
          fill="url(#paint18_radial_1402_9)"
          stroke="white"
          stroke-width="1.49798"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.42 4.94 0.43 4.94 0.3 4.94"
        />
        <path
          className="dotpath11"
          opacity="0.72"
          d="M207.646 524.446C35.9456 347.321 118.698 45.7273 390.582 58.7553C522.586 65.5416 784.801 280.775 695.626 368.724C603.772 458.671 590.699 612.351 468.863 544.034C343.985 474.014 275.396 594.375 207.646 524.446Z"
          fill="url(#paint19_radial_1402_9)"
          stroke="white"
          stroke-width="1.54338"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.42 4.94 0.43 4.94 0.3 4.94"
        />

        {/* line 3 */}

        <path
          className="dotpath3"
          opacity="0.79"
          d="M204.491 540.448C70.0587 350.612 91.5752 70.7165 387.54 46.1133C530.961 34.1748 800.416 310.666 691.517 391.33C579.509 474.309 583.39 655.066 459.058 556.562C332.773 456.515 262.845 622.859 204.491 540.448Z"
          fill="url(#paint20_radial_1402_9)"
          stroke="white"
          stroke-width="1.58877"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0.42 4.94 0.43 4.94 0.3 4.94"
        />
        <g opacity="0.8">
          <g opacity="0.9801">
            <path
              d="M176.598 283.612C176.598 287.379 173.533 290.443 169.766 290.443C165.998 290.443 162.934 287.379 162.934 283.612C162.934 279.844 165.998 276.78 169.766 276.78C173.533 276.78 176.598 279.844 176.598 283.612Z"
              fill="url(#paint21_radial_1402_9)"
            />
          </g>
          <g opacity="0.9557">
            <path
              d="M197.955 260.075C197.955 263.843 194.891 266.907 191.123 266.907C187.356 266.907 184.292 263.843 184.292 260.075C184.292 256.308 187.356 253.244 191.123 253.244C194.891 253.244 197.955 256.308 197.955 260.075Z"
              fill="url(#paint22_radial_1402_9)"
            />
          </g>
          <g opacity="0.6469">
            <path
              d="M226.939 251.065C226.939 254.833 223.875 257.897 220.107 257.897C216.339 257.897 213.275 254.833 213.275 251.065C213.275 247.297 216.339 244.233 220.107 244.233C223.875 244.256 226.939 247.297 226.939 251.065Z"
              fill="url(#paint23_radial_1402_9)"
            />
          </g>
          <g opacity="0.1925">
            <path
              d="M263.162 249.68C263.162 253.448 260.098 256.512 256.331 256.512C252.563 256.512 249.499 253.448 249.499 249.68C249.499 245.912 252.563 242.848 256.331 242.848C260.098 242.848 263.162 245.912 263.162 249.68Z"
              fill="url(#paint24_radial_1402_9)"
            />
          </g>
          <g opacity="0.0885">
            <path
              d="M296.096 233.134C296.096 236.902 293.031 239.966 289.264 239.966C285.496 239.966 282.432 236.902 282.432 233.134C282.432 229.367 285.496 226.302 289.264 226.302C293.031 226.325 296.096 229.367 296.096 233.134Z"
              fill="url(#paint25_radial_1402_9)"
            />
          </g>
          <g opacity="0.2839">
            <path
              d="M331.48 191.281C331.48 195.049 328.416 198.113 324.648 198.113C320.88 198.113 317.816 195.049 317.816 191.281C317.816 187.514 320.88 184.45 324.648 184.45C328.416 184.45 331.48 187.514 331.48 191.281Z"
              fill="url(#paint26_radial_1402_9)"
            />
          </g>
          <g opacity="0.9316">
            <path
              d="M361.144 165.112C361.144 168.88 358.08 171.944 354.312 171.944C350.545 171.944 347.481 168.88 347.481 165.112C347.481 161.344 350.545 158.28 354.312 158.28C358.103 158.28 361.144 161.344 361.144 165.112Z"
              fill="url(#paint27_radial_1402_9)"
            />
          </g>
          <path
            d="M394.282 167.427C394.282 171.195 391.218 174.259 387.45 174.259C383.682 174.259 380.618 171.195 380.618 167.427C380.618 163.66 383.682 160.595 387.45 160.595C391.24 160.618 394.282 163.66 394.282 167.427Z"
            fill="url(#paint28_radial_1402_9)"
          />
          <g opacity="0.5372">
            <path
              d="M428.917 186.969C428.917 190.737 425.853 193.801 422.085 193.801C418.317 193.801 415.253 190.737 415.253 186.969C415.253 183.202 418.317 180.138 422.085 180.138C425.876 180.138 428.917 183.202 428.917 186.969Z"
              fill="url(#paint29_radial_1402_9)"
            />
          </g>
          <path
            d="M453.883 219.789C453.883 223.556 450.819 226.62 447.051 226.62C443.284 226.62 440.22 223.556 440.22 219.789C440.22 216.021 443.284 212.957 447.051 212.957C450.819 212.957 453.883 216.021 453.883 219.789Z"
            fill="url(#paint30_radial_1402_9)"
          />
          <path
            d="M472.835 250.543C472.835 254.311 469.771 257.375 466.003 257.375C462.236 257.375 459.172 254.311 459.172 250.543C459.172 246.775 462.236 243.711 466.003 243.711C469.794 243.734 472.835 246.775 472.835 250.543Z"
            fill="url(#paint31_radial_1402_9)"
          />
          <g opacity="0.7153">
            <path
              d="M506.744 262.345C506.744 266.113 503.68 269.177 499.912 269.177C496.144 269.177 493.08 266.113 493.08 262.345C493.08 258.577 496.144 255.513 499.912 255.513C503.702 255.536 506.744 258.577 506.744 262.345Z"
              fill="url(#paint32_radial_1402_9)"
            />
          </g>
          <g opacity="0.0674">
            <path
              d="M551.297 267.089C551.297 270.856 548.233 273.921 544.465 273.921C540.698 273.921 537.634 270.856 537.634 267.089C537.634 263.321 540.698 260.257 544.465 260.257C548.233 260.257 551.297 263.321 551.297 267.089Z"
              fill="url(#paint33_radial_1402_9)"
            />
          </g>
          <g opacity="0.3447">
            <path
              d="M582.482 282.386C582.482 286.154 579.418 289.218 575.651 289.218C571.883 289.218 568.819 286.154 568.819 282.386C568.819 278.619 571.883 275.555 575.651 275.555C579.418 275.555 582.482 278.619 582.482 282.386Z"
              fill="url(#paint34_radial_1402_9)"
            />
          </g>
          <g opacity="0.2123">
            <path
              d="M604.43 307.353C604.43 311.121 601.366 314.185 597.599 314.185C593.831 314.185 590.767 311.121 590.767 307.353C590.767 303.585 593.831 300.521 597.599 300.521C601.389 300.544 604.43 303.585 604.43 307.353Z"
              fill="url(#paint35_radial_1402_9)"
            />
          </g>
          <g opacity="0.2586">
            <path
              d="M615.779 333.454C615.779 337.222 612.715 340.286 608.947 340.286C605.179 340.286 602.115 337.222 602.115 333.454C602.115 329.686 605.179 326.622 608.947 326.622C612.715 326.622 615.779 329.686 615.779 333.454Z"
              fill="url(#paint36_radial_1402_9)"
            />
          </g>
          <g opacity="0.3886">
            <path
              d="M605.588 363.504C605.588 367.272 602.524 370.336 598.757 370.336C594.989 370.336 591.925 367.272 591.925 363.504C591.925 359.737 594.989 356.673 598.757 356.673C602.524 356.673 605.588 359.737 605.588 363.504Z"
              fill="url(#paint37_radial_1402_9)"
            />
          </g>
          <path
            d="M604.044 396.119C604.044 399.887 600.98 402.951 597.213 402.951C593.445 402.951 590.381 399.887 590.381 396.119C590.381 392.352 593.445 389.288 597.213 389.288C601.003 389.288 604.044 392.352 604.044 396.119Z"
            fill="url(#paint38_radial_1402_9)"
          />
          <path
            d="M247.003 614.484C247.003 618.252 243.939 621.316 240.171 621.316C236.403 621.316 233.339 618.252 233.339 614.484C233.339 610.716 236.403 607.652 240.171 607.652C243.939 607.652 247.003 610.716 247.003 614.484Z"
            fill="url(#paint39_radial_1402_9)"
          />
          <path
            d="M264.275 627.013C264.275 630.78 261.211 633.845 257.443 633.845C253.675 633.845 250.611 630.78 250.611 627.013C250.611 623.245 253.675 620.181 257.443 620.181C261.233 620.181 264.275 623.245 264.275 627.013Z"
            fill="url(#paint40_radial_1402_9)"
          />
          <g opacity="0.146">
            <path
              d="M307.308 625.583C307.308 629.351 304.244 632.415 300.476 632.415C296.708 632.415 293.644 629.351 293.644 625.583C293.644 621.815 296.708 618.751 300.476 618.751C304.266 618.774 307.308 621.815 307.308 625.583Z"
              fill="url(#paint41_radial_1402_9)"
            />
          </g>
          <g opacity="0.0176">
            <path
              d="M355.016 616.164C355.016 619.931 351.952 622.995 348.184 622.995C344.417 622.995 341.353 619.931 341.353 616.164C341.353 612.396 344.417 609.332 348.184 609.332C351.952 609.332 355.016 612.396 355.016 616.164Z"
              fill="url(#paint42_radial_1402_9)"
            />
          </g>
          <g opacity="0.2054">
            <path
              d="M385.18 586.545C385.18 590.313 382.116 593.377 378.348 593.377C374.581 593.377 371.517 590.313 371.517 586.545C371.517 582.777 374.581 579.713 378.348 579.713C382.116 579.736 385.18 582.777 385.18 586.545Z"
              fill="url(#paint43_radial_1402_9)"
            />
          </g>
          <g opacity="0.0703">
            <path
              d="M408.649 553.362C408.649 557.13 405.584 560.194 401.817 560.194C398.049 560.194 394.985 557.13 394.985 553.362C394.985 549.595 398.049 546.531 401.817 546.531C405.584 546.553 408.649 549.595 408.649 553.362Z"
              fill="url(#paint44_radial_1402_9)"
            />
          </g>
          <g opacity="0.4009">
            <path
              d="M430.256 527.987C430.256 531.755 427.192 534.819 423.424 534.819C419.657 534.819 416.593 531.755 416.593 527.987C416.593 524.22 419.657 521.156 423.424 521.156C427.215 521.156 430.256 524.22 430.256 527.987Z"
              fill="url(#paint45_radial_1402_9)"
            />
          </g>
          <g opacity="0.1172">
            <path
              d="M453.838 506.425C453.838 510.193 450.774 513.257 447.006 513.257C443.238 513.257 440.174 510.193 440.174 506.425C440.174 502.658 443.238 499.594 447.006 499.594C450.796 499.616 453.838 502.658 453.838 506.425Z"
              fill="url(#paint46_radial_1402_9)"
            />
          </g>
          <g opacity="0.1131">
            <path
              d="M482.163 489.335C482.209 493.102 479.19 496.189 475.422 496.257C471.655 496.302 468.568 493.284 468.5 489.516C468.454 485.748 471.473 482.662 475.241 482.594C479.031 482.571 482.118 485.567 482.163 489.335Z"
              fill="url(#paint47_radial_1402_9)"
            />
          </g>
          <g opacity="0.8995">
            <path
              d="M516.072 476.965C516.277 480.733 513.394 483.933 509.626 484.138C505.859 484.342 502.659 481.459 502.454 477.692C502.25 473.924 505.133 470.724 508.9 470.519C512.645 470.315 515.868 473.198 516.072 476.965Z"
              fill="url(#paint48_radial_1402_9)"
            />
          </g>
          <g opacity="0.909">
            <path
              d="M541.039 470.905C541.334 474.673 538.519 477.941 534.752 478.236C530.984 478.531 527.716 475.717 527.421 471.949C527.126 468.181 529.94 464.913 533.708 464.618C537.453 464.323 540.744 467.137 541.039 470.905Z"
              fill="url(#paint49_radial_1402_9)"
            />
          </g>
          <g opacity="0.8515">
            <path
              d="M569.16 461.985C569.432 465.753 566.595 468.999 562.827 469.271C559.059 469.543 555.814 466.706 555.542 462.939C555.269 459.171 558.106 455.925 561.874 455.653C565.642 455.403 568.887 458.24 569.16 461.985Z"
              fill="url(#paint50_radial_1402_9)"
            />
          </g>
          <g opacity="0.355">
            <path
              d="M589.564 453.95C589.746 457.718 586.84 460.918 583.073 461.1C579.305 461.281 576.105 458.376 575.923 454.608C575.742 450.841 578.647 447.64 582.415 447.459C586.182 447.3 589.383 450.205 589.564 453.95Z"
              fill="url(#paint51_radial_1402_9)"
            />
          </g>
          <g opacity="0.3606">
            <path
              d="M617.004 434.635C617.027 438.403 613.963 441.467 610.195 441.49C606.428 441.513 603.364 438.448 603.341 434.681C603.318 430.913 606.382 427.849 610.15 427.826C613.94 427.826 617.004 430.868 617.004 434.635Z"
              fill="url(#paint52_radial_1402_9)"
            />
          </g>
          <g opacity="0.9403">
            <path
              d="M639.928 414.231C639.928 417.999 636.864 421.063 633.096 421.063C629.329 421.063 626.265 417.999 626.265 414.231C626.265 410.464 629.329 407.4 633.096 407.4C636.864 407.4 639.928 410.464 639.928 414.231Z"
              fill="url(#paint53_radial_1402_9)"
            />
          </g>
          <path
            d="M670.659 380.232C670.659 383.999 667.595 387.063 663.828 387.063C660.06 387.063 656.996 383.999 656.996 380.232C656.996 376.464 660.06 373.4 663.828 373.4C667.595 373.4 670.659 376.464 670.659 380.232Z"
            fill="url(#paint54_radial_1402_9)"
          />
          <g opacity="0.6876">
            <path
              d="M695.944 337.698C695.944 341.466 692.88 344.53 689.112 344.53C685.345 344.53 682.281 341.466 682.281 337.698C682.281 333.93 685.345 330.866 689.112 330.866C692.903 330.866 695.944 333.93 695.944 337.698Z"
              fill="url(#paint55_radial_1402_9)"
            />
          </g>
          <g opacity="0.8062">
            <path
              d="M716.189 289.717C716.189 293.485 713.125 296.549 709.357 296.549C705.59 296.549 702.526 293.485 702.526 289.717C702.526 285.95 705.59 282.886 709.357 282.886C713.125 282.908 716.189 285.95 716.189 289.717Z"
              fill="url(#paint56_radial_1402_9)"
            />
          </g>
          <g opacity="0.9421">
            <path
              d="M701.731 243.325C701.731 247.093 698.667 250.157 694.899 250.157C691.132 250.157 688.068 247.093 688.068 243.325C688.068 239.557 691.132 236.493 694.899 236.493C698.69 236.493 701.731 239.557 701.731 243.325Z"
              fill="url(#paint57_radial_1402_9)"
            />
          </g>
          <path
            d="M146.252 446.075C146.252 449.843 143.188 452.907 139.42 452.907C135.652 452.907 132.588 449.843 132.588 446.075C132.588 442.307 135.652 439.243 139.42 439.243C143.188 439.243 146.252 442.307 146.252 446.075Z"
            fill="url(#paint58_radial_1402_9)"
          />
          <path
            d="M125.234 416.728C125.234 420.496 122.17 423.56 118.403 423.56C114.635 423.56 111.571 420.496 111.571 416.728C111.571 412.961 114.635 409.896 118.403 409.896C122.193 409.919 125.234 412.961 125.234 416.728Z"
            fill="url(#paint59_radial_1402_9)"
          />
          <path
            d="M101.766 351.089C101.766 354.857 98.7024 357.921 94.9347 357.921C91.1671 357.921 88.103 354.857 88.103 351.089C88.103 347.322 91.1671 344.258 94.9347 344.258C98.7024 344.28 101.766 347.322 101.766 351.089Z"
            fill="url(#paint60_radial_1402_9)"
          />
          <g opacity="0.8962">
            <path
              d="M95.9334 283.453C95.9334 287.22 92.8694 290.284 89.1017 290.284C85.3341 290.284 82.27 287.22 82.27 283.453C82.27 279.685 85.3341 276.621 89.1017 276.621C92.8921 276.644 95.9334 279.685 95.9334 283.453Z"
              fill="url(#paint61_radial_1402_9)"
            />
          </g>
          <g opacity="0.5695">
            <path
              d="M135.085 236.289C135.085 240.057 132.021 243.121 128.253 243.121C124.486 243.121 121.422 240.057 121.422 236.289C121.422 232.522 124.486 229.458 128.253 229.458C132.021 229.458 135.085 232.522 135.085 236.289Z"
              fill="url(#paint62_radial_1402_9)"
            />
          </g>
          <g opacity="0.2675">
            <path
              d="M165.771 214.75C165.771 218.518 162.707 221.582 158.94 221.582C155.172 221.582 152.108 218.518 152.108 214.75C152.108 210.982 155.172 207.918 158.94 207.918C162.707 207.918 165.771 210.982 165.771 214.75Z"
              fill="url(#paint63_radial_1402_9)"
            />
          </g>
          <g opacity="0.0854">
            <path
              d="M187.265 178.094C187.265 181.862 184.201 184.926 180.433 184.926C176.665 184.926 173.601 181.862 173.601 178.094C173.601 174.327 176.665 171.263 180.433 171.263C184.223 171.285 187.265 174.327 187.265 178.094Z"
              fill="url(#paint64_radial_1402_9)"
            />
          </g>
          <g opacity="0.0599">
            <path
              d="M210.779 143.369C210.779 147.137 207.715 150.201 203.947 150.201C200.18 150.201 197.115 147.137 197.115 143.369C197.115 139.601 200.18 136.537 203.947 136.537C207.715 136.537 210.779 139.601 210.779 143.369Z"
              fill="url(#paint65_radial_1402_9)"
            />
          </g>
          <g opacity="0.01">
            <path
              d="M236.948 111.366C236.948 115.134 233.884 118.198 230.116 118.198C226.348 118.198 223.284 115.134 223.284 111.366C223.284 107.599 226.348 104.535 230.116 104.535C233.884 104.557 236.948 107.599 236.948 111.366Z"
              fill="url(#paint66_radial_1402_9)"
            />
          </g>
          <g opacity="0.0314">
            <path
              d="M264.094 86.037C264.094 89.8047 261.03 92.8687 257.262 92.8687C253.494 92.8687 250.43 89.8047 250.43 86.037C250.43 82.2694 253.494 79.2053 257.262 79.2053C261.03 79.228 264.094 82.2694 264.094 86.037Z"
              fill="url(#paint67_radial_1402_9)"
            />
          </g>
          <g opacity="0.3943">
            <path
              d="M290.717 76.7765C290.717 80.5442 287.653 83.6082 283.885 83.6082C280.117 83.6082 277.053 80.5442 277.053 76.7765C277.053 73.0089 280.117 69.9448 283.885 69.9448C287.653 69.9448 290.717 73.0089 290.717 76.7765Z"
              fill="url(#paint68_radial_1402_9)"
            />
          </g>
          <g opacity="0.9663">
            <path
              d="M338.13 89.0326C338.13 92.8003 335.066 95.8644 331.298 95.8644C327.531 95.8644 324.467 92.8003 324.467 89.0326C324.467 85.265 327.531 82.2009 331.298 82.2009C335.066 82.2009 338.13 85.265 338.13 89.0326Z"
              fill="url(#paint69_radial_1402_9)"
            />
          </g>
          <path
            d="M373.333 93.0956C373.333 96.8633 370.269 99.9273 366.501 99.9273C362.733 99.9273 359.669 96.8633 359.669 93.0956C359.669 89.328 362.733 86.2639 366.501 86.2639C370.269 86.2866 373.333 89.328 373.333 93.0956Z"
            fill="url(#paint70_radial_1402_9)"
          />
          <g opacity="0.5786">
            <path
              d="M349.932 62.9089C349.932 66.6765 346.868 69.7406 343.1 69.7406C339.333 69.7406 336.269 66.6765 336.269 62.9089C336.269 59.1412 339.333 56.0771 343.1 56.0771C346.868 56.0771 349.932 59.1412 349.932 62.9089Z"
              fill="url(#paint71_radial_1402_9)"
            />
          </g>
          <g opacity="0.9558">
            <path
              d="M384.295 60.7753C384.295 64.543 381.231 67.607 377.464 67.607C373.696 67.607 370.632 64.543 370.632 60.7753C370.632 57.0077 373.696 53.9436 377.464 53.9436C381.254 53.9436 384.295 57.0077 384.295 60.7753Z"
              fill="url(#paint72_radial_1402_9)"
            />
          </g>
          <g opacity="0.3057">
            <path
              d="M426.92 36.0817C426.92 39.8494 423.856 42.9134 420.088 42.9134C416.32 42.9134 413.256 39.8494 413.256 36.0817C413.256 32.3141 416.32 29.25 420.088 29.25C423.856 29.25 426.92 32.3141 426.92 36.0817Z"
              fill="url(#paint73_radial_1402_9)"
            />
          </g>
          <g opacity="0.5717">
            <path
              d="M467.206 30.8385C467.206 34.6062 464.142 37.6703 460.375 37.6703C456.607 37.6703 453.543 34.6062 453.543 30.8385C453.543 27.0709 456.607 24.0068 460.375 24.0068C464.165 24.0295 467.206 27.0709 467.206 30.8385Z"
              fill="url(#paint74_radial_1402_9)"
            />
          </g>
          <path
            d="M507.674 27.5475C507.674 31.3152 504.61 34.3792 500.842 34.3792C497.075 34.3792 494.011 31.3152 494.011 27.5475C494.011 23.7799 497.075 20.7158 500.842 20.7158C504.61 20.7385 507.674 23.7799 507.674 27.5475Z"
            fill="url(#paint75_radial_1402_9)"
          />
          <g opacity="0.4808">
            <path
              d="M541.969 62.2055C541.969 65.9731 538.905 69.0372 535.137 69.0372C531.37 69.0372 528.306 65.9731 528.306 62.2055C528.306 58.4378 531.37 55.3738 535.137 55.3738C538.905 55.3738 541.969 58.4378 541.969 62.2055Z"
              fill="url(#paint76_radial_1402_9)"
            />
          </g>
          <path
            d="M666.211 143.777C666.211 147.545 663.147 150.609 659.379 150.609C655.612 150.609 652.548 147.545 652.548 143.777C652.548 140.01 655.612 136.946 659.379 136.946C663.147 136.946 666.211 140.01 666.211 143.777Z"
            fill="url(#paint77_radial_1402_9)"
          />
          <g opacity="0.0127">
            <path
              d="M444.963 578.374C444.963 582.142 441.899 585.206 438.132 585.206C434.364 585.206 431.3 582.142 431.3 578.374C431.3 574.607 434.364 571.542 438.132 571.542C441.922 571.542 444.963 574.607 444.963 578.374Z"
              fill="url(#paint78_radial_1402_9)"
            />
          </g>
          <g opacity="0.317">
            <path
              d="M455.154 536.771C455.154 540.538 452.09 543.602 448.322 543.602C444.555 543.602 441.491 540.538 441.491 536.771C441.491 533.003 444.555 529.939 448.322 529.939C452.09 529.962 455.154 533.003 455.154 536.771Z"
              fill="url(#paint79_radial_1402_9)"
            />
          </g>
          <g opacity="0.9187">
            <path
              d="M527.579 493.17C527.875 496.915 525.06 500.206 521.315 500.501C517.57 500.796 514.279 497.982 513.984 494.237C513.689 490.492 516.503 487.201 520.248 486.906C523.993 486.611 527.284 489.403 527.579 493.17Z"
              fill="url(#paint80_radial_1402_9)"
            />
          </g>
          <g opacity="0.0658">
            <path
              d="M551.615 518.818C555.388 518.818 558.447 515.759 558.447 511.986C558.447 508.213 555.388 505.154 551.615 505.154C547.842 505.154 544.784 508.213 544.784 511.986C544.784 515.759 547.842 518.818 551.615 518.818Z"
              fill="url(#paint81_radial_1402_9)"
            />
          </g>
          <g opacity="0.01">
            <path
              d="M525.832 544.919C525.991 548.687 523.085 551.864 519.318 552.023C515.55 552.182 512.373 549.277 512.214 545.509C512.055 541.742 514.96 538.564 518.728 538.405C522.495 538.246 525.673 541.174 525.832 544.919Z"
              fill="url(#paint82_radial_1402_9)"
            />
          </g>
          <g opacity="0.0226">
            <path
              d="M535.773 528.646C536.045 532.413 533.208 535.659 529.441 535.931C525.673 536.204 522.427 533.367 522.155 529.599C521.883 525.831 524.72 522.586 528.487 522.313C532.232 522.064 535.501 524.878 535.773 528.646Z"
              fill="url(#paint83_radial_1402_9)"
            />
          </g>
          <g opacity="0.3221">
            <path
              d="M538.429 508.99C538.769 512.735 536 516.072 532.255 516.412C528.51 516.753 525.174 513.984 524.833 510.239C524.493 506.494 527.262 503.157 531.007 502.817C534.774 502.476 538.088 505.223 538.429 508.99Z"
              fill="url(#paint84_radial_1402_9)"
            />
          </g>
          <g opacity="0.0736">
            <path
              d="M466.662 553.135C466.662 556.903 463.598 559.967 459.83 559.967C456.062 559.967 452.998 556.903 452.998 553.135C452.998 549.367 456.062 546.303 459.83 546.303C463.598 546.326 466.662 549.367 466.662 553.135Z"
              fill="url(#paint85_radial_1402_9)"
            />
          </g>
          <g opacity="0.1165">
            <path
              d="M464.233 518.364C464.233 522.132 461.169 525.196 457.401 525.196C453.634 525.196 450.57 522.132 450.57 518.364C450.57 514.596 453.634 511.532 457.401 511.532C461.169 511.555 464.233 514.596 464.233 518.364Z"
              fill="url(#paint86_radial_1402_9)"
            />
          </g>
          <g opacity="0.1528">
            <path
              d="M520.112 525.536C520.317 529.304 517.457 532.527 513.689 532.731C509.922 532.935 506.699 530.075 506.494 526.308C506.29 522.54 509.15 519.317 512.918 519.113C516.685 518.908 519.908 521.791 520.112 525.536Z"
              fill="url(#paint87_radial_1402_9)"
            />
          </g>
          <g opacity="0.5162">
            <path
              d="M507.357 507.174C507.538 510.942 504.633 514.142 500.865 514.324C497.098 514.505 493.897 511.6 493.716 507.832C493.534 504.065 496.439 500.864 500.207 500.683C503.975 500.501 507.175 503.406 507.357 507.174Z"
              fill="url(#paint88_radial_1402_9)"
            />
          </g>
          <g opacity="0.9251">
            <path
              d="M542.764 485.59C543.127 489.335 540.358 492.671 536.613 493.034C532.868 493.397 529.532 490.628 529.168 486.883C528.805 483.139 531.574 479.802 535.319 479.439C539.087 479.076 542.423 481.822 542.764 485.59Z"
              fill="url(#paint89_radial_1402_9)"
            />
          </g>
          <g opacity="0.2684">
            <path
              d="M489.699 536.067C493.472 536.067 496.53 533.009 496.53 529.236C496.53 525.463 493.472 522.404 489.699 522.404C485.926 522.404 482.867 525.463 482.867 529.236C482.867 533.009 485.926 536.067 489.699 536.067Z"
              fill="url(#paint90_radial_1402_9)"
            />
          </g>
          <g opacity="0.22">
            <path
              d="M494.964 506.902C495.078 510.67 492.127 513.825 488.359 513.938C484.592 514.052 481.437 511.101 481.323 507.333C481.21 503.566 484.161 500.411 487.928 500.297C491.719 500.184 494.851 503.134 494.964 506.902Z"
              fill="url(#paint91_radial_1402_9)"
            />
          </g>
          <g opacity="0.2516">
            <path
              d="M582.732 481.89C583.05 485.635 580.281 488.949 576.513 489.266C572.768 489.584 569.455 486.815 569.137 483.048C568.819 479.303 571.588 475.989 575.356 475.671C579.123 475.353 582.414 478.145 582.732 481.89Z"
              fill="url(#paint92_radial_1402_9)"
            />
          </g>
          <g opacity="0.0651">
            <path
              d="M625.97 462.439C626.038 466.207 623.042 469.316 619.274 469.384C615.507 469.452 612.397 466.456 612.329 462.689C612.261 458.921 615.257 455.812 619.025 455.744C622.792 455.675 625.902 458.671 625.97 462.439Z"
              fill="url(#paint93_radial_1402_9)"
            />
          </g>
          <g opacity="0.4564">
            <path
              d="M645.466 442.875C645.466 446.642 642.402 449.706 638.634 449.706C634.867 449.706 631.802 446.642 631.802 442.875C631.802 439.107 634.867 436.043 638.634 436.043C642.402 436.066 645.466 439.107 645.466 442.875Z"
              fill="url(#paint94_radial_1402_9)"
            />
          </g>
          <g opacity="0.6883">
            <path
              d="M666.574 434.908C666.574 438.676 663.51 441.74 659.742 441.74C655.974 441.74 652.91 438.676 652.91 434.908C652.91 431.14 655.974 428.076 659.742 428.076C663.51 428.076 666.574 431.14 666.574 434.908Z"
              fill="url(#paint95_radial_1402_9)"
            />
          </g>
          <g opacity="0.4987">
            <path
              d="M737.706 317.089C737.706 320.857 734.642 323.921 730.874 323.921C727.106 323.921 724.042 320.857 724.042 317.089C724.042 313.321 727.106 310.257 730.874 310.257C734.664 310.257 737.706 313.321 737.706 317.089Z"
              fill="url(#paint96_radial_1402_9)"
            />
          </g>
          <g opacity="0.4765">
            <path
              d="M703.615 355.379C703.615 359.146 700.551 362.21 696.783 362.21C693.016 362.21 689.952 359.146 689.952 355.379C689.952 351.611 693.016 348.547 696.783 348.547C700.551 348.57 703.615 351.611 703.615 355.379Z"
              fill="url(#paint97_radial_1402_9)"
            />
          </g>
          <g opacity="0.8371">
            <path
              d="M685.798 382.456C685.798 386.223 682.734 389.287 678.966 389.287C675.199 389.287 672.135 386.223 672.135 382.456C672.135 378.688 675.199 375.624 678.966 375.624C682.757 375.624 685.798 378.688 685.798 382.456Z"
              fill="url(#paint98_radial_1402_9)"
            />
          </g>
          <g opacity="0.9571">
            <path
              d="M651.413 414.027C651.413 417.795 648.349 420.859 644.581 420.859C640.813 420.859 637.749 417.795 637.749 414.027C637.749 410.26 640.813 407.196 644.581 407.196C648.349 407.196 651.413 410.26 651.413 414.027Z"
              fill="url(#paint99_radial_1402_9)"
            />
          </g>
          <g opacity="0.3518">
            <path
              d="M596.532 445.145C596.646 448.912 593.695 452.067 589.927 452.181C586.16 452.294 583.005 449.343 582.891 445.576C582.778 441.808 585.728 438.653 589.496 438.54C593.264 438.426 596.419 441.377 596.532 445.145Z"
              fill="url(#paint100_radial_1402_9)"
            />
          </g>
          <g opacity="0.5625">
            <path
              d="M541.969 461.304C542.219 465.072 539.359 468.318 535.614 468.545C531.846 468.794 528.601 465.935 528.374 462.19C528.124 458.422 530.984 455.176 534.729 454.949C538.474 454.677 541.719 457.537 541.969 461.304Z"
              fill="url(#paint101_radial_1402_9)"
            />
          </g>
          <g opacity="0.5042">
            <path
              d="M496.871 477.691C496.984 481.459 494.011 484.591 490.244 484.704C486.476 484.818 483.344 481.845 483.23 478.077C483.117 474.309 486.09 471.177 489.858 471.064C493.603 470.95 496.757 473.923 496.871 477.691Z"
              fill="url(#paint102_radial_1402_9)"
            />
          </g>
          <g opacity="0.8998">
            <path
              d="M180.615 262.413C180.615 266.181 177.551 269.245 173.783 269.245C170.015 269.245 166.951 266.181 166.951 262.413C166.951 258.645 170.015 255.581 173.783 255.581C177.573 255.604 180.615 258.645 180.615 262.413Z"
              fill="url(#paint103_radial_1402_9)"
            />
          </g>
          <g opacity="0.7479">
            <path
              d="M221.605 248.319C221.605 252.086 218.541 255.15 214.773 255.15C211.005 255.15 207.941 252.086 207.941 248.319C207.941 244.551 211.005 241.487 214.773 241.487C218.563 241.487 221.605 244.551 221.605 248.319Z"
              fill="url(#paint104_radial_1402_9)"
            />
          </g>
          <g opacity="0.1048">
            <path
              d="M282.682 223.42C282.682 227.188 279.618 230.252 275.85 230.252C272.083 230.252 269.019 227.188 269.019 223.42C269.019 219.653 272.083 216.589 275.85 216.589C279.641 216.589 282.682 219.653 282.682 223.42Z"
              fill="url(#paint105_radial_1402_9)"
            />
          </g>
          <g opacity="0.1909">
            <path
              d="M329.21 201.971C329.21 205.739 326.146 208.803 322.379 208.803C318.611 208.803 315.547 205.739 315.547 201.971C315.547 198.204 318.611 195.14 322.379 195.14C326.169 195.14 329.21 198.204 329.21 201.971Z"
              fill="url(#paint106_radial_1402_9)"
            />
          </g>
          <g opacity="0.8016">
            <path
              d="M360.259 182.362C360.259 186.129 357.195 189.193 353.427 189.193C349.66 189.193 346.596 186.129 346.596 182.362C346.596 178.594 349.66 175.53 353.427 175.53C357.218 175.53 360.259 178.594 360.259 182.362Z"
              fill="url(#paint107_radial_1402_9)"
            />
          </g>
          <path
            d="M392.33 184.291C392.33 188.058 389.266 191.122 385.498 191.122C381.731 191.122 378.667 188.058 378.667 184.291C378.667 180.523 381.731 177.459 385.498 177.459C389.266 177.482 392.33 180.523 392.33 184.291Z"
            fill="url(#paint108_radial_1402_9)"
          />
          <g opacity="0.0252">
            <path
              d="M436.316 208.077C436.316 211.845 433.252 214.909 429.484 214.909C425.716 214.909 422.652 211.845 422.652 208.077C422.652 204.31 425.716 201.246 429.484 201.246C433.274 201.246 436.316 204.31 436.316 208.077Z"
              fill="url(#paint109_radial_1402_9)"
            />
          </g>
          <g opacity="0.3418">
            <path
              d="M469.771 235.971C469.771 239.739 466.707 242.803 462.939 242.803C459.172 242.803 456.107 239.739 456.107 235.971C456.107 232.203 459.172 229.139 462.939 229.139C466.707 229.162 469.771 232.203 469.771 235.971Z"
              fill="url(#paint110_radial_1402_9)"
            />
          </g>
          <g opacity="0.0584">
            <path
              d="M500.003 244.347C500.003 248.114 496.939 251.178 493.171 251.178C489.404 251.178 486.34 248.114 486.34 244.347C486.34 240.579 489.404 237.515 493.171 237.515C496.939 237.538 500.003 240.579 500.003 244.347Z"
              fill="url(#paint111_radial_1402_9)"
            />
          </g>
          <g opacity="0.1146">
            <path
              d="M527.965 254.651C527.965 258.418 524.901 261.482 521.133 261.482C517.366 261.482 514.302 258.418 514.302 254.651C514.302 250.883 517.366 247.819 521.133 247.819C524.901 247.819 527.965 250.883 527.965 254.651Z"
              fill="url(#paint112_radial_1402_9)"
            />
          </g>
          <g opacity="0.8738">
            <path
              d="M559.264 296.776C559.264 300.543 556.2 303.608 552.432 303.608C548.664 303.608 545.6 300.543 545.6 296.776C545.6 293.008 548.664 289.944 552.432 289.944C556.222 289.944 559.264 293.008 559.264 296.776Z"
              fill="url(#paint113_radial_1402_9)"
            />
          </g>
          <path
            d="M97.2044 375.352C97.2044 379.12 94.1404 382.184 90.3727 382.184C86.6051 382.184 83.541 379.12 83.541 375.352C83.541 371.584 86.6051 368.52 90.3727 368.52C94.1631 368.52 97.2044 371.584 97.2044 375.352Z"
            fill="url(#paint114_radial_1402_9)"
          />
          <path
            d="M76.4366 327.212C76.4366 330.98 73.3726 334.044 69.6049 334.044C65.8372 334.044 62.7732 330.98 62.7732 327.212C62.7732 323.445 65.8372 320.381 69.6049 320.381C73.3953 320.381 76.4366 323.445 76.4366 327.212Z"
            fill="url(#paint115_radial_1402_9)"
          />
          <g opacity="0.334">
            <path
              d="M68.6519 257.374C68.6519 261.142 65.5879 264.206 61.8202 264.206C58.0526 264.206 54.9885 261.142 54.9885 257.374C54.9885 253.607 58.0526 250.543 61.8202 250.543C65.5879 250.565 68.6519 253.607 68.6519 257.374Z"
              fill="url(#paint116_radial_1402_9)"
            />
          </g>
          <g opacity="0.2527">
            <path
              d="M103.492 200.406C103.492 204.173 100.427 207.237 96.6598 207.237C92.8922 207.237 89.8281 204.173 89.8281 200.406C89.8281 196.638 92.8922 193.574 96.6598 193.574C100.427 193.574 103.492 196.638 103.492 200.406Z"
              fill="url(#paint117_radial_1402_9)"
            />
          </g>
          <g opacity="0.303">
            <path
              d="M144.255 172.194C144.255 175.961 141.191 179.025 137.423 179.025C133.656 179.025 130.592 175.961 130.592 172.194C130.592 168.426 133.656 165.362 137.423 165.362C141.214 165.362 144.255 168.426 144.255 172.194Z"
              fill="url(#paint118_radial_1402_9)"
            />
          </g>
          <g opacity="0.1927">
            <path
              d="M167.088 157.304C167.088 161.072 164.024 164.136 160.256 164.136C156.488 164.136 153.424 161.072 153.424 157.304C153.424 153.537 156.488 150.473 160.256 150.473C164.046 150.473 167.088 153.537 167.088 157.304Z"
              fill="url(#paint119_radial_1402_9)"
            />
          </g>
          <g opacity="0.3085">
            <path
              d="M193.257 124.349C193.257 128.116 190.193 131.181 186.425 131.181C182.657 131.181 179.593 128.116 179.593 124.349C179.593 120.581 182.657 117.517 186.425 117.517C190.193 117.517 193.257 120.581 193.257 124.349Z"
              fill="url(#paint120_radial_1402_9)"
            />
          </g>
          <g opacity="0.039">
            <path
              d="M348.275 47.7702C348.275 51.5378 345.211 54.6019 341.444 54.6019C337.676 54.6019 334.612 51.5378 334.612 47.7702C334.612 44.0025 337.676 40.9385 341.444 40.9385C345.211 40.9385 348.275 44.0025 348.275 47.7702Z"
              fill="url(#paint121_radial_1402_9)"
            />
          </g>
          <g opacity="0.4801">
            <path
              d="M382.797 37.5568C382.797 41.3245 379.733 44.3885 375.965 44.3885C372.198 44.3885 369.134 41.3245 369.134 37.5568C369.134 33.7892 372.198 30.7251 375.965 30.7251C379.733 30.7251 382.797 33.7892 382.797 37.5568Z"
              fill="url(#paint122_radial_1402_9)"
            />
          </g>
          <g opacity="0.3807">
            <path
              d="M406.833 23.6894C406.833 27.457 403.769 30.5211 400.001 30.5211C396.233 30.5211 393.169 27.457 393.169 23.6894C393.169 19.9217 396.233 16.8577 400.001 16.8577C403.769 16.8577 406.833 19.9217 406.833 23.6894Z"
              fill="url(#paint123_radial_1402_9)"
            />
          </g>
          <g opacity="0.3243">
            <path
              d="M426.715 13.7704C426.715 17.5381 423.651 20.6021 419.883 20.6021C416.116 20.6021 413.052 17.5381 413.052 13.7704C413.052 10.0028 416.116 6.93872 419.883 6.93872C423.674 6.96142 426.715 10.0028 426.715 13.7704Z"
              fill="url(#paint124_radial_1402_9)"
            />
          </g>
          <g opacity="0.5464">
            <path
              d="M447.801 15.1552C447.801 18.9229 444.737 21.9869 440.969 21.9869C437.201 21.9869 434.137 18.9229 434.137 15.1552C434.137 11.3875 437.201 8.32349 440.969 8.32349C444.737 8.32349 447.801 11.3875 447.801 15.1552Z"
              fill="url(#paint125_radial_1402_9)"
            />
          </g>
          <g opacity="0.841">
            <path
              d="M466.366 17.6061C466.366 21.3738 463.302 24.4378 459.535 24.4378C455.767 24.4378 452.703 21.3738 452.703 17.6061C452.703 13.8385 455.767 10.7744 459.535 10.7744C463.302 10.7744 466.366 13.8385 466.366 17.6061Z"
              fill="url(#paint126_radial_1402_9)"
            />
          </g>
          <g opacity="0.9822">
            <path
              d="M503.748 28.3642C503.748 32.1318 500.684 35.1959 496.916 35.1959C493.149 35.1959 490.084 32.1318 490.084 28.3642C490.084 24.5965 493.149 21.5325 496.916 21.5325C500.684 21.5552 503.748 24.5965 503.748 28.3642Z"
              fill="url(#paint127_radial_1402_9)"
            />
          </g>
          <g opacity="0.01">
            <path
              d="M348.139 605.428C348.139 609.196 345.075 612.26 341.307 612.26C337.54 612.26 334.476 609.196 334.476 605.428C334.476 601.661 337.54 598.597 341.307 598.597C345.075 598.597 348.139 601.661 348.139 605.428Z"
              fill="url(#paint128_radial_1402_9)"
            />
          </g>
          <g opacity="0.0652">
            <path
              d="M363.005 585.478C363.005 589.245 359.941 592.309 356.174 592.309C352.406 592.309 349.342 589.245 349.342 585.478C349.342 581.71 352.406 578.646 356.174 578.646C359.964 578.646 363.005 581.71 363.005 585.478Z"
              fill="url(#paint129_radial_1402_9)"
            />
          </g>
          <g opacity="0.01">
            <path
              d="M377.804 555.654C377.804 559.422 374.739 562.486 370.972 562.486C367.204 562.486 364.14 559.422 364.14 555.654C364.14 551.887 367.204 548.823 370.972 548.823C374.762 548.823 377.804 551.887 377.804 555.654Z"
              fill="url(#paint130_radial_1402_9)"
            />
          </g>
          <g opacity="0.806">
            <path
              d="M538.95 465.798C541.57 465.798 543.694 463.674 543.694 461.054C543.694 458.435 541.57 456.311 538.95 456.311C536.33 456.311 534.207 458.435 534.207 461.054C534.207 463.674 536.33 465.798 538.95 465.798Z"
              fill="url(#paint131_radial_1402_9)"
            />
          </g>
          <g opacity="0.4459">
            <path
              d="M555.087 449.638C557.707 449.638 559.831 447.514 559.831 444.894C559.831 442.274 557.707 440.151 555.087 440.151C552.468 440.151 550.344 442.274 550.344 444.894C550.344 447.514 552.468 449.638 555.087 449.638Z"
              fill="url(#paint132_radial_1402_9)"
            />
          </g>
          <g opacity="0.2046">
            <path
              d="M583.981 420.723C583.981 423.333 581.87 425.466 579.237 425.466C576.627 425.466 574.493 423.355 574.493 420.723C574.493 418.112 576.604 415.979 579.237 415.979C581.87 415.979 583.981 418.112 583.981 420.723Z"
              fill="url(#paint133_radial_1402_9)"
            />
          </g>
          <g opacity="0.617">
            <path
              d="M384.885 47.9289C384.885 50.539 382.774 52.6725 380.141 52.6725C377.531 52.6725 375.398 50.5617 375.398 47.9289C375.398 45.3188 377.508 43.1853 380.141 43.1853C382.751 43.208 384.885 45.3188 384.885 47.9289Z"
              fill="url(#paint134_radial_1402_9)"
            />
          </g>
          <g opacity="0.9113">
            <path
              d="M693.924 248.318C696.543 248.318 698.667 246.194 698.667 243.575C698.667 240.955 696.543 238.831 693.924 238.831C691.304 238.831 689.18 240.955 689.18 243.575C689.18 246.194 691.304 248.318 693.924 248.318Z"
              fill="url(#paint135_radial_1402_9)"
            />
          </g>
          <g opacity="0.4537">
            <path
              d="M710.219 275.691C712.839 275.691 714.963 273.567 714.963 270.947C714.963 268.327 712.839 266.203 710.219 266.203C707.6 266.203 705.476 268.327 705.476 270.947C705.476 273.567 707.6 275.691 710.219 275.691Z"
              fill="url(#paint136_radial_1402_9)"
            />
          </g>
          <g opacity="0.4216">
            <path
              d="M235.654 618.978C235.654 621.589 233.543 623.722 230.911 623.722C228.3 623.722 226.167 621.611 226.167 618.978C226.167 616.368 228.278 614.235 230.911 614.235C233.521 614.235 235.654 616.346 235.654 618.978Z"
              fill="url(#paint137_radial_1402_9)"
            />
          </g>
          <g opacity="0.243">
            <path
              d="M243.303 612.76C243.303 615.37 241.192 617.503 238.559 617.503C235.949 617.503 233.815 615.393 233.815 612.76C233.815 610.127 235.926 608.016 238.559 608.016C241.169 608.016 243.303 610.127 243.303 612.76Z"
              fill="url(#paint138_radial_1402_9)"
            />
          </g>
          <g opacity="0.893">
            <path
              d="M223.307 606.291C225.927 606.291 228.05 604.167 228.05 601.547C228.05 598.927 225.927 596.803 223.307 596.803C220.687 596.803 218.563 598.927 218.563 601.547C218.563 604.167 220.687 606.291 223.307 606.291Z"
              fill="url(#paint139_radial_1402_9)"
            />
          </g>
          <g opacity="0.3274">
            <path
              d="M80.6125 360.69C83.2323 360.69 85.3561 358.566 85.3561 355.946C85.3561 353.326 83.2323 351.202 80.6125 351.202C77.9927 351.202 75.8689 353.326 75.8689 355.946C75.8689 358.566 77.9927 360.69 80.6125 360.69Z"
              fill="url(#paint140_radial_1402_9)"
            />
          </g>
          <g opacity="0.691">
            <path
              d="M65.5647 330.685C68.1845 330.685 70.3083 328.561 70.3083 325.941C70.3083 323.321 68.1845 321.198 65.5647 321.198C62.9448 321.198 60.821 323.321 60.821 325.941C60.821 328.561 62.9448 330.685 65.5647 330.685Z"
              fill="url(#paint141_radial_1402_9)"
            />
          </g>
          <path
            d="M83.3134 530.438C83.3134 533.049 81.2026 535.182 78.5698 535.182C75.9597 535.182 73.8262 533.071 73.8262 530.438C73.8262 527.828 75.937 525.695 78.5698 525.695C81.2026 525.695 83.3134 527.828 83.3134 530.438Z"
            fill="url(#paint142_radial_1402_9)"
          />
          <g opacity="0.4785">
            <path
              d="M115.815 467.046C115.815 469.656 113.705 471.79 111.072 471.79C108.462 471.79 106.328 469.679 106.328 467.046C106.328 464.436 108.439 462.303 111.072 462.303C113.705 462.303 115.815 464.436 115.815 467.046Z"
              fill="url(#paint143_radial_1402_9)"
            />
          </g>
          <g opacity="0.5332">
            <path
              d="M639.27 86.0138C641.89 86.0138 644.013 83.89 644.013 81.2702C644.013 78.6504 641.89 76.5266 639.27 76.5266C636.65 76.5266 634.526 78.6504 634.526 81.2702C634.526 83.89 636.65 86.0138 639.27 86.0138Z"
              fill="url(#paint144_radial_1402_9)"
            />
          </g>
          <path
            d="M315.297 199.316C317.917 199.316 320.04 197.193 320.04 194.573C320.04 191.953 317.917 189.829 315.297 189.829C312.677 189.829 310.553 191.953 310.553 194.573C310.553 197.193 312.677 199.316 315.297 199.316Z"
            fill="url(#paint145_radial_1402_9)"
          />
          <path
            d="M335.633 190.873C335.633 193.483 333.522 195.616 330.89 195.616C328.257 195.616 326.146 193.506 326.146 190.873C326.146 188.263 328.257 186.129 330.89 186.129C333.522 186.129 335.633 188.263 335.633 190.873Z"
            fill="url(#paint146_radial_1402_9)"
          />
          <path
            d="M367.999 179.411C367.999 182.021 365.888 184.154 363.255 184.154C360.645 184.154 358.511 182.044 358.511 179.411C358.511 176.801 360.622 174.667 363.255 174.667C365.865 174.667 367.999 176.801 367.999 179.411Z"
            fill="url(#paint147_radial_1402_9)"
          />
          <path
            d="M387.359 177.55C387.359 180.16 385.248 182.294 382.615 182.294C380.005 182.294 377.872 180.183 377.872 177.55C377.872 174.94 379.983 172.807 382.615 172.807C385.226 172.829 387.359 174.94 387.359 177.55Z"
            fill="url(#paint148_radial_1402_9)"
          />
          <g opacity="0.6845">
            <path
              d="M561.511 47.9973C561.511 50.6074 559.4 52.7409 556.767 52.7409C554.157 52.7409 552.024 50.6301 552.024 47.9973C552.024 45.3872 554.134 43.2537 556.767 43.2537C559.377 43.2764 561.511 45.3872 561.511 47.9973Z"
              fill="url(#paint149_radial_1402_9)"
            />
          </g>
          <path
            d="M620.136 102.674C622.756 102.674 624.88 100.55 624.88 97.9301C624.88 95.3103 622.756 93.1865 620.136 93.1865C617.517 93.1865 615.393 95.3103 615.393 97.9301C615.393 100.55 617.517 102.674 620.136 102.674Z"
            fill="url(#paint150_radial_1402_9)"
          />
          <path
            d="M577.943 118.652C580.563 118.652 582.687 116.528 582.687 113.908C582.687 111.289 580.563 109.165 577.943 109.165C575.323 109.165 573.199 111.289 573.199 113.908C573.199 116.528 575.323 118.652 577.943 118.652Z"
            fill="url(#paint151_radial_1402_9)"
          />
          <g opacity="0.3863">
            <path
              d="M647.441 207.623C650.061 207.623 652.184 205.499 652.184 202.88C652.184 200.26 650.061 198.136 647.441 198.136C644.821 198.136 642.697 200.26 642.697 202.88C642.697 205.499 644.821 207.623 647.441 207.623Z"
              fill="url(#paint152_radial_1402_9)"
            />
          </g>
          <g opacity="0.7557">
            <path
              d="M659.129 215.249C659.129 217.859 657.019 219.993 654.386 219.993C651.776 219.993 649.642 217.882 649.642 215.249C649.642 212.639 651.753 210.506 654.386 210.506C657.019 210.528 659.129 212.639 659.129 215.249Z"
              fill="url(#paint153_radial_1402_9)"
            />
          </g>
          <g opacity="0.9975">
            <path
              d="M664.032 230.138C666.652 230.138 668.776 228.014 668.776 225.394C668.776 222.775 666.652 220.651 664.032 220.651C661.412 220.651 659.289 222.775 659.289 225.394C659.289 228.014 661.412 230.138 664.032 230.138Z"
              fill="url(#paint154_radial_1402_9)"
            />
          </g>
          <g opacity="0.9914">
            <path
              d="M696.375 245.096C696.375 247.706 694.264 249.839 691.631 249.839C689.021 249.839 686.887 247.728 686.887 245.096C686.887 242.486 688.998 240.352 691.631 240.352C694.264 240.352 696.375 242.486 696.375 245.096Z"
              fill="url(#paint155_radial_1402_9)"
            />
          </g>
          <g opacity="0.5737">
            <path
              d="M724.496 272.173C724.496 274.783 722.385 276.916 719.753 276.916C717.143 276.916 715.009 274.805 715.009 272.173C715.009 269.562 717.12 267.429 719.753 267.429C722.363 267.429 724.496 269.562 724.496 272.173Z"
              fill="url(#paint156_radial_1402_9)"
            />
          </g>
          <g opacity="0.9339">
            <path
              d="M718.753 289.876C721.373 289.876 723.497 287.752 723.497 285.133C723.497 282.513 721.373 280.389 718.753 280.389C716.134 280.389 714.01 282.513 714.01 285.133C714.01 287.752 716.134 289.876 718.753 289.876Z"
              fill="url(#paint157_radial_1402_9)"
            />
          </g>
          <g opacity="0.2374">
            <path
              d="M369.882 524.81C369.882 527.42 367.771 529.553 365.139 529.553C362.506 529.553 360.395 527.443 360.395 524.81C360.395 522.2 362.506 520.066 365.139 520.066C367.771 520.066 369.882 522.177 369.882 524.81Z"
              fill="url(#paint158_radial_1402_9)"
            />
          </g>
          <g opacity="0.3759">
            <path
              d="M357.944 521.882C360.564 521.882 362.688 519.758 362.688 517.138C362.688 514.518 360.564 512.395 357.944 512.395C355.324 512.395 353.2 514.518 353.2 517.138C353.2 519.758 355.324 521.882 357.944 521.882Z"
              fill="url(#paint159_radial_1402_9)"
            />
          </g>
          <g opacity="0.7152">
            <path
              d="M350.523 526.376C350.523 528.986 348.412 531.12 345.779 531.12C343.169 531.12 341.035 529.009 341.035 526.376C341.035 523.766 343.146 521.632 345.779 521.632C348.412 521.632 350.523 523.766 350.523 526.376Z"
              fill="url(#paint160_radial_1402_9)"
            />
          </g>
          <g opacity="0.9939">
            <path
              d="M330.458 531.936C330.458 534.546 328.347 536.68 325.715 536.68C323.082 536.68 320.971 534.569 320.971 531.936C320.971 529.326 323.082 527.193 325.715 527.193C328.347 527.193 330.458 529.326 330.458 531.936Z"
              fill="url(#paint161_radial_1402_9)"
            />
          </g>
          <path
            d="M255.491 531.778C258.111 531.778 260.235 529.654 260.235 527.034C260.235 524.414 258.111 522.291 255.491 522.291C252.871 522.291 250.748 524.414 250.748 527.034C250.748 529.654 252.871 531.778 255.491 531.778Z"
            fill="url(#paint162_radial_1402_9)"
          />
          <path
            d="M166.906 440.741C166.906 443.351 164.795 445.485 162.162 445.485C159.552 445.485 157.418 443.374 157.418 440.741C157.418 438.131 159.529 435.998 162.162 435.998C164.772 435.998 166.906 438.108 166.906 440.741Z"
            fill="url(#paint163_radial_1402_9)"
          />
          <g opacity="0.5701">
            <path
              d="M155.512 425.307C158.132 425.307 160.256 423.183 160.256 420.563C160.256 417.944 158.132 415.82 155.512 415.82C152.892 415.82 150.768 417.944 150.768 420.563C150.768 423.183 152.892 425.307 155.512 425.307Z"
              fill="url(#paint164_radial_1402_9)"
            />
          </g>
          <g opacity="0.4836">
            <path
              d="M155.535 353.54C155.535 356.151 153.424 358.284 150.791 358.284C148.181 358.284 146.047 356.173 146.047 353.54C146.047 350.93 148.158 348.797 150.791 348.797C153.424 348.82 155.535 350.93 155.535 353.54Z"
              fill="url(#paint165_radial_1402_9)"
            />
          </g>
          <path
            d="M156.057 322.265C156.057 324.875 153.946 327.008 151.313 327.008C148.703 327.008 146.569 324.897 146.569 322.265C146.569 319.655 148.68 317.521 151.313 317.521C153.946 317.521 156.057 319.655 156.057 322.265Z"
            fill="url(#paint166_radial_1402_9)"
          />
          <g opacity="0.6202">
            <path
              d="M167.723 292.622C170.342 292.622 172.466 290.498 172.466 287.878C172.466 285.259 170.342 283.135 167.723 283.135C165.103 283.135 162.979 285.259 162.979 287.878C162.979 290.498 165.103 292.622 167.723 292.622Z"
              fill="url(#paint167_radial_1402_9)"
            />
          </g>
          <g opacity="0.5342">
            <path
              d="M178.436 268.405C178.436 271.015 176.325 273.149 173.692 273.149C171.082 273.149 168.949 271.038 168.949 268.405C168.949 265.795 171.06 263.661 173.692 263.661C176.325 263.661 178.436 265.795 178.436 268.405Z"
              fill="url(#paint168_radial_1402_9)"
            />
          </g>
          <g opacity="0.3455">
            <path
              d="M184.791 277.347C187.411 277.347 189.534 275.224 189.534 272.604C189.534 269.984 187.411 267.86 184.791 267.86C182.171 267.86 180.047 269.984 180.047 272.604C180.047 275.224 182.171 277.347 184.791 277.347Z"
              fill="url(#paint169_radial_1402_9)"
            />
          </g>
          <g opacity="0.4551">
            <path
              d="M186.947 264.615C189.567 264.615 191.69 262.491 191.69 259.871C191.69 257.251 189.567 255.127 186.947 255.127C184.327 255.127 182.203 257.251 182.203 259.871C182.203 262.491 184.327 264.615 186.947 264.615Z"
              fill="url(#paint170_radial_1402_9)"
            />
          </g>
          <g opacity="0.4063">
            <path
              d="M204.877 259.304C204.877 261.914 202.766 264.048 200.133 264.048C197.523 264.048 195.39 261.937 195.39 259.304C195.39 256.694 197.501 254.56 200.133 254.56C202.766 254.56 204.877 256.694 204.877 259.304Z"
              fill="url(#paint171_radial_1402_9)"
            />
          </g>
          <path
            d="M10.3664 432.321C10.3664 434.931 8.25558 437.064 5.62276 437.064C3.01264 437.064 0.87915 434.954 0.87915 432.321C0.87915 429.711 2.98994 427.577 5.62276 427.577C8.25558 427.6 10.3664 429.711 10.3664 432.321Z"
            fill="url(#paint172_radial_1402_9)"
          />
          <path
            d="M102.152 526.353C104.772 526.353 106.896 524.229 106.896 521.609C106.896 518.99 104.772 516.866 102.152 516.866C99.5322 516.866 97.4084 518.99 97.4084 521.609C97.4084 524.229 99.5322 526.353 102.152 526.353Z"
            fill="url(#paint173_radial_1402_9)"
          />
          <path
            d="M228.732 621.203C231.351 621.203 233.475 619.079 233.475 616.459C233.475 613.839 231.351 611.715 228.732 611.715C226.112 611.715 223.988 613.839 223.988 616.459C223.988 619.079 226.112 621.203 228.732 621.203Z"
            fill="url(#paint174_radial_1402_9)"
          />
          <g opacity="0.9911">
            <path
              d="M248.137 620.885C248.137 623.495 246.027 625.628 243.394 625.628C240.784 625.628 238.65 623.518 238.65 620.885C238.65 618.275 240.761 616.141 243.394 616.141C246.027 616.164 248.137 618.275 248.137 620.885Z"
              fill="url(#paint175_radial_1402_9)"
            />
          </g>
          <g opacity="0.676">
            <path
              d="M99.0654 388.04C99.0654 390.65 96.9546 392.783 94.3217 392.783C91.6889 392.783 89.5781 390.672 89.5781 388.04C89.5781 385.429 91.6889 383.296 94.3217 383.296C96.9546 383.296 99.0654 385.429 99.0654 388.04Z"
              fill="url(#paint176_radial_1402_9)"
            />
          </g>
          <g opacity="0.7834">
            <path
              d="M91.2126 381.593C91.2126 384.203 89.1018 386.337 86.469 386.337C83.8588 386.337 81.7253 384.226 81.7253 381.593C81.7253 378.983 83.8361 376.85 86.469 376.85C89.1018 376.85 91.2126 378.983 91.2126 381.593Z"
              fill="url(#paint177_radial_1402_9)"
            />
          </g>
          <path
            d="M184.564 113.545C184.564 116.155 182.453 118.288 179.82 118.288C177.21 118.288 175.076 116.178 175.076 113.545C175.076 110.935 177.187 108.801 179.82 108.801C182.453 108.824 184.564 110.935 184.564 113.545Z"
            fill="url(#paint178_radial_1402_9)"
          />
          <g opacity="0.8508">
            <path
              d="M192.507 101.357C192.507 103.967 190.397 106.101 187.764 106.101C185.154 106.101 183.02 103.99 183.02 101.357C183.02 98.747 185.131 96.6135 187.764 96.6135C190.374 96.6135 192.507 98.747 192.507 101.357Z"
              fill="url(#paint179_radial_1402_9)"
            />
          </g>
          <g opacity="0.756">
            <path
              d="M540.062 569.408C542.682 569.408 544.806 567.285 544.806 564.665C544.806 562.045 542.682 559.921 540.062 559.921C537.443 559.921 535.319 562.045 535.319 564.665C535.319 567.285 537.443 569.408 540.062 569.408Z"
              fill="url(#paint180_radial_1402_9)"
            />
          </g>
          <path
            d="M578.942 563.757C578.942 566.367 576.831 568.501 574.198 568.501C571.588 568.501 569.455 566.39 569.455 563.757C569.455 561.147 571.565 559.014 574.198 559.014C576.808 559.014 578.942 561.147 578.942 563.757Z"
            fill="url(#paint181_radial_1402_9)"
          />
          <g opacity="0.5314">
            <path
              d="M593.127 495.963C593.127 498.573 591.017 500.706 588.384 500.706C585.751 500.706 583.64 498.595 583.64 495.963C583.64 493.352 585.751 491.219 588.384 491.219C591.017 491.219 593.127 493.352 593.127 495.963Z"
              fill="url(#paint182_radial_1402_9)"
            />
          </g>
        </g>
        <path
          d="M225.349 389H198.471L198.644 371.801H225.349C233.127 371.801 239.638 370.102 244.881 366.702C250.182 363.303 254.158 358.434 256.808 352.096C259.516 345.758 260.87 338.21 260.87 329.453V322.625C260.87 315.826 260.092 309.805 258.537 304.562C257.039 299.319 254.792 294.911 251.795 291.339C248.857 287.767 245.227 285.059 240.906 283.215C236.642 281.371 231.716 280.449 226.127 280.449H197.952V263.164H226.127C234.481 263.164 242.116 264.576 249.03 267.399C255.944 270.165 261.907 274.169 266.92 279.412C271.99 284.655 275.879 290.936 278.587 298.253C281.295 305.57 282.649 313.752 282.649 322.798V329.453C282.649 338.499 281.295 346.68 278.587 353.998C275.879 361.315 271.99 367.595 266.92 372.838C261.85 378.024 255.8 382.028 248.771 384.852C241.799 387.617 233.992 389 225.349 389ZM210.484 263.164V389H188.791V263.164H210.484ZM351.531 279.931L313.936 389H291.206L338.567 263.164H353.086L351.531 279.931ZM382.99 389L345.308 279.931L343.666 263.164H358.272L405.806 389H382.99ZM381.175 342.33V359.529H312.726V342.33H381.175ZM437.179 313.464V424.953H416.35V295.487H435.537L437.179 313.464ZM498.109 341.379V343.194C498.109 349.993 497.302 356.302 495.689 362.122C494.133 367.883 491.8 372.925 488.688 377.246C485.635 381.51 481.861 384.823 477.367 387.185C472.873 389.547 467.687 390.729 461.81 390.729C455.991 390.729 450.892 389.663 446.513 387.531C442.191 385.341 438.533 382.259 435.537 378.283C432.541 374.308 430.121 369.641 428.277 364.282C426.491 358.866 425.223 352.932 424.474 346.479V339.478C425.223 332.622 426.491 326.399 428.277 320.81C430.121 315.221 432.541 310.41 435.537 306.377C438.533 302.344 442.191 299.232 446.513 297.043C450.834 294.854 455.875 293.759 461.637 293.759C467.514 293.759 472.729 294.911 477.28 297.216C481.832 299.463 485.664 302.689 488.775 306.896C491.886 311.044 494.22 316.057 495.775 321.934C497.331 327.753 498.109 334.235 498.109 341.379ZM477.28 343.194V341.379C477.28 337.058 476.877 333.054 476.07 329.366C475.264 325.621 473.996 322.337 472.268 319.514C470.539 316.69 468.321 314.501 465.613 312.945C462.962 311.332 459.765 310.525 456.02 310.525C452.332 310.525 449.163 311.159 446.513 312.427C443.862 313.637 441.644 315.336 439.858 317.526C438.072 319.715 436.689 322.279 435.709 325.218C434.73 328.099 434.039 331.239 433.635 334.638V351.405C434.327 355.553 435.508 359.356 437.179 362.813C438.85 366.27 441.212 369.036 444.266 371.11C447.377 373.126 451.353 374.135 456.192 374.135C459.938 374.135 463.135 373.328 465.786 371.715C468.436 370.102 470.597 367.883 472.268 365.06C473.996 362.179 475.264 358.866 476.07 355.121C476.877 351.376 477.28 347.4 477.28 343.194ZM536.741 313.464V424.953H515.913V295.487H535.099L536.741 313.464ZM597.671 341.379V343.194C597.671 349.993 596.865 356.302 595.251 362.122C593.696 367.883 591.362 372.925 588.251 377.246C585.197 381.51 581.423 384.823 576.929 387.185C572.435 389.547 567.25 390.729 561.373 390.729C555.553 390.729 550.454 389.663 546.075 387.531C541.754 385.341 538.095 382.259 535.099 378.283C532.103 374.308 529.683 369.641 527.839 364.282C526.053 358.866 524.786 352.932 524.037 346.479V339.478C524.786 332.622 526.053 326.399 527.839 320.81C529.683 315.221 532.103 310.41 535.099 306.377C538.095 302.344 541.754 299.232 546.075 297.043C550.396 294.854 555.438 293.759 561.2 293.759C567.077 293.759 572.291 294.911 576.843 297.216C581.395 299.463 585.226 302.689 588.337 306.896C591.449 311.044 593.782 316.057 595.338 321.934C596.894 327.753 597.671 334.235 597.671 341.379ZM576.843 343.194V341.379C576.843 337.058 576.439 333.054 575.633 329.366C574.826 325.621 573.559 322.337 571.83 319.514C570.102 316.69 567.883 314.501 565.175 312.945C562.525 311.332 559.327 310.525 555.582 310.525C551.895 310.525 548.726 311.159 546.075 312.427C543.425 313.637 541.207 315.336 539.42 317.526C537.634 319.715 536.251 322.279 535.272 325.218C534.292 328.099 533.601 331.239 533.198 334.638V351.405C533.889 355.553 535.07 359.356 536.741 362.813C538.412 366.27 540.774 369.036 543.828 371.11C546.939 373.126 550.915 374.135 555.755 374.135C559.5 374.135 562.698 373.328 565.348 371.715C567.999 370.102 570.159 367.883 571.83 365.06C573.559 362.179 574.826 358.866 575.633 355.121C576.439 351.376 576.843 347.4 576.843 343.194Z"
          fill="url(#paint183_linear_1402_9)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(379.375 338.73) scale(194.326 194.326)"
          >
            <stop offset="0.2939" stopColor="#005B97" stop-opacity="0" />
            <stop offset="0.4173" stopColor="#00609C" stop-opacity="0.01" />
            <stop offset="0.563" stopColor="#006DAA" stop-opacity="0.0114" />
            <stop offset="0.7201" stopColor="#0083C2" stop-opacity="0.0181" />
            <stop offset="0.8841" stopColor="#00A2E3" stop-opacity="0.0251" />
            <stop offset="1" stopColor="#00BCFF" stop-opacity="0.03" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(380.674 340.332) scale(190.168 190.168)"
          >
            <stop offset="0.2939" stopColor="#005B97" stop-opacity="0" />
            <stop offset="0.4173" stopColor="#00609C" stop-opacity="0.01" />
            <stop offset="0.563" stopColor="#006DAA" stop-opacity="0.0114" />
            <stop offset="0.7201" stopColor="#0083C2" stop-opacity="0.0181" />
            <stop offset="0.8841" stopColor="#00A2E3" stop-opacity="0.0251" />
            <stop offset="1" stopColor="#00BCFF" stop-opacity="0.03" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(380.917 342.075) scale(186.826 186.826)"
          >
            <stop offset="0.2939" stopColor="#005B97" stop-opacity="0" />
            <stop offset="0.4173" stopColor="#00609C" stop-opacity="0.01" />
            <stop offset="0.563" stopColor="#006DAA" stop-opacity="0.0114" />
            <stop offset="0.7201" stopColor="#0083C2" stop-opacity="0.0181" />
            <stop offset="0.8841" stopColor="#00A2E3" stop-opacity="0.0251" />
            <stop offset="1" stopColor="#00BCFF" stop-opacity="0.03" />
          </radialGradient>
          <radialGradient
            id="paint3_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(380.232 343.298) scale(184.579 184.579)"
          >
            <stop offset="0.2939" stopColor="#005B97" stop-opacity="0" />
            <stop offset="0.4173" stopColor="#00609C" stop-opacity="0.01" />
            <stop offset="0.563" stopColor="#006DAA" stop-opacity="0.0114" />
            <stop offset="0.7201" stopColor="#0083C2" stop-opacity="0.0181" />
            <stop offset="0.8841" stopColor="#00A2E3" stop-opacity="0.0251" />
            <stop offset="1" stopColor="#00BCFF" stop-opacity="0.03" />
          </radialGradient>
          <radialGradient
            id="paint4_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(379.247 340.673) scale(184.684 184.684)"
          >
            <stop offset="0.2939" stopColor="#005B97" stop-opacity="0" />
            <stop offset="0.4173" stopColor="#00609C" stop-opacity="0.01" />
            <stop offset="0.563" stopColor="#006DAA" stop-opacity="0.0114" />
            <stop offset="0.7201" stopColor="#0083C2" stop-opacity="0.0181" />
            <stop offset="0.8841" stopColor="#00A2E3" stop-opacity="0.0251" />
            <stop offset="1" stopColor="#00BCFF" stop-opacity="0.03" />
          </radialGradient>
          <radialGradient
            id="paint5_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(378.363 334.346) scale(187.186 187.186)"
          >
            <stop offset="0.2939" stopColor="#005B97" stop-opacity="0" />
            <stop offset="0.4173" stopColor="#00609C" stop-opacity="0.01" />
            <stop offset="0.563" stopColor="#006DAA" stop-opacity="0.0114" />
            <stop offset="0.7201" stopColor="#0083C2" stop-opacity="0.0181" />
            <stop offset="0.8841" stopColor="#00A2E3" stop-opacity="0.0251" />
            <stop offset="1" stopColor="#00BCFF" stop-opacity="0.03" />
          </radialGradient>
          <radialGradient
            id="paint6_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(377.783 327.275) scale(191.129 191.129)"
          >
            <stop offset="0.2939" stopColor="#005B97" stop-opacity="0" />
            <stop offset="0.4173" stopColor="#00609C" stop-opacity="0.01" />
            <stop offset="0.563" stopColor="#006DAA" stop-opacity="0.0114" />
            <stop offset="0.7201" stopColor="#0083C2" stop-opacity="0.0181" />
            <stop offset="0.8841" stopColor="#00A2E3" stop-opacity="0.0251" />
            <stop offset="1" stopColor="#00BCFF" stop-opacity="0.03" />
          </radialGradient>
          <radialGradient
            id="paint7_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(366.427 316.505) scale(259.58 259.58)"
          >
            <stop offset="0.7084" stopColor="#93D8BB" stop-opacity="0" />
            <stop offset="0.9031" stopColor="#93DABA" stop-opacity="0.0334" />
            <stop offset="0.9731" stopColor="#92E1B5" stop-opacity="0.0454" />
            <stop offset="1" stopColor="#91E6B1" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint8_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(367.573 316.107) scale(252.924 252.924)"
          >
            <stop offset="0.7084" stopColor="#93D8BB" stop-opacity="0" />
            <stop offset="0.9031" stopColor="#93DABA" stop-opacity="0.0334" />
            <stop offset="0.9731" stopColor="#92E1B5" stop-opacity="0.0454" />
            <stop offset="1" stopColor="#91E6B1" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint9_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(373.702 315.307) scale(249.006 249.006)"
          >
            <stop offset="0.7084" stopColor="#93D8BB" stop-opacity="0" />
            <stop offset="0.9031" stopColor="#93DABA" stop-opacity="0.0334" />
            <stop offset="0.9731" stopColor="#92E1B5" stop-opacity="0.0454" />
            <stop offset="1" stopColor="#91E6B1" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint10_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(381.31 314.249) scale(246.377 246.377)"
          >
            <stop offset="0.7084" stopColor="#93D8BB" stop-opacity="0" />
            <stop offset="0.9031" stopColor="#93DABA" stop-opacity="0.0334" />
            <stop offset="0.9731" stopColor="#92E1B5" stop-opacity="0.0454" />
            <stop offset="1" stopColor="#91E6B1" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint11_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(389.332 313.097) scale(244.691 244.691)"
          >
            <stop offset="0.7084" stopColor="#93D8BB" stop-opacity="0" />
            <stop offset="0.9031" stopColor="#93DABA" stop-opacity="0.0334" />
            <stop offset="0.9731" stopColor="#92E1B5" stop-opacity="0.0454" />
            <stop offset="1" stopColor="#91E6B1" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint12_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(397.322 312.041) scale(244.117 244.117)"
          >
            <stop offset="0.7084" stopColor="#93D8BB" stop-opacity="0" />
            <stop offset="0.9031" stopColor="#93DABA" stop-opacity="0.0334" />
            <stop offset="0.9731" stopColor="#92E1B5" stop-opacity="0.0454" />
            <stop offset="1" stopColor="#91E6B1" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint13_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(404.791 311.21) scale(244.859 244.859)"
          >
            <stop offset="0.7084" stopColor="#93D8BB" stop-opacity="0" />
            <stop offset="0.9031" stopColor="#93DABA" stop-opacity="0.0334" />
            <stop offset="0.9731" stopColor="#92E1B5" stop-opacity="0.0454" />
            <stop offset="1" stopColor="#91E6B1" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint14_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(388.106 293.378) scale(281.024 281.024)"
          >
            <stop offset="0.8534" stopColor="#2AF1FF" stop-opacity="0" />
            <stop offset="0.8862" stopColor="#2DE8FF" stop-opacity="0.0112" />
            <stop offset="0.9406" stopColor="#34CEFF" stop-opacity="0.0297" />
            <stop offset="1" stopColor="#3FABFF" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint15_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(392.375 293.752) scale(275.798 275.798)"
          >
            <stop offset="0.8534" stopColor="#2AF1FF" stop-opacity="0" />
            <stop offset="0.8862" stopColor="#2DE8FF" stop-opacity="0.0112" />
            <stop offset="0.9406" stopColor="#34CEFF" stop-opacity="0.0297" />
            <stop offset="1" stopColor="#3FABFF" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint16_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(397.855 293.949) scale(271.612 271.612)"
          >
            <stop offset="0.8534" stopColor="#2AF1FF" stop-opacity="0" />
            <stop offset="0.8862" stopColor="#2DE8FF" stop-opacity="0.0112" />
            <stop offset="0.9406" stopColor="#34CEFF" stop-opacity="0.0297" />
            <stop offset="1" stopColor="#3FABFF" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint17_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(403.926 294.763) scale(268.936 268.936)"
          >
            <stop offset="0.8534" stopColor="#2AF1FF" stop-opacity="0" />
            <stop offset="0.8862" stopColor="#2DE8FF" stop-opacity="0.0112" />
            <stop offset="0.9406" stopColor="#34CEFF" stop-opacity="0.0297" />
            <stop offset="1" stopColor="#3FABFF" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint18_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(410.102 302.202) scale(270.868 270.868)"
          >
            <stop offset="0.8534" stopColor="#2AF1FF" stop-opacity="0" />
            <stop offset="0.8862" stopColor="#2DE8FF" stop-opacity="0.0112" />
            <stop offset="0.9406" stopColor="#34CEFF" stop-opacity="0.0297" />
            <stop offset="1" stopColor="#3FABFF" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint19_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(415.9 309.694) scale(275.573 275.573)"
          >
            <stop offset="0.8534" stopColor="#2AF1FF" stop-opacity="0" />
            <stop offset="0.8862" stopColor="#2DE8FF" stop-opacity="0.0112" />
            <stop offset="0.9406" stopColor="#34CEFF" stop-opacity="0.0297" />
            <stop offset="1" stopColor="#3FABFF" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint20_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(421.036 315.455) scale(283.038 283.038)"
          >
            <stop offset="0.8534" stopColor="#2AF1FF" stop-opacity="0" />
            <stop offset="0.8862" stopColor="#2DE8FF" stop-opacity="0.0112" />
            <stop offset="0.9406" stopColor="#34CEFF" stop-opacity="0.0297" />
            <stop offset="1" stopColor="#3FABFF" stop-opacity="0.05" />
          </radialGradient>
          <radialGradient
            id="paint21_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(169.777 283.601) scale(5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint22_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(191.127 260.069) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint23_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(220.114 251.073) scale(5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint24_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(256.34 249.677) scale(5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint25_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(289.272 233.139) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint26_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(324.656 191.279) scale(5.9135 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint27_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(354.333 165.109) scale(5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint28_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(387.469 167.436) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint29_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(422.102 186.96) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint30_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(447.062 219.787) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint31_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(466.019 250.551) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint32_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(499.927 262.349) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint33_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(544.474 267.089) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint34_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(575.651 282.381) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint35_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(597.618 307.361) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint36_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(608.954 333.455) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint37_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(598.765 363.499) scale(5.91353 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint38_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(597.224 396.11) scale(5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint39_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(240.182 614.48) scale(5.91351 5.91353)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint40_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(257.464 627.005) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint41_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(300.495 625.586) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint42_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(348.187 616.16) scale(5.91351 5.91353)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint43_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(378.356 586.55) scale(5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint44_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(401.824 553.368) scale(5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint45_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(423.445 527.988) scale(5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint46_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(447.02 506.432) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint47_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(475.347 489.433) rotate(-0.761277) scale(5.91361 5.9136)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint48_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(509.264 477.339) rotate(-3.10764) scale(5.91354)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint49_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(534.229 471.417) rotate(-4.38739) scale(5.91364 5.91362)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint50_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(562.36 462.479) rotate(-4.055) scale(5.91353)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint51_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(582.747 454.29) rotate(-2.76369) scale(5.91353)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint52_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(610.187 434.661) rotate(-0.196427) scale(5.91356 5.91355)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint53_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(633.096 414.22) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint54_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(663.835 380.229) scale(5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint55_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(689.132 337.689) scale(5.91353 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint56_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(709.364 289.72) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint57_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(694.916 243.317) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint58_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(139.434 446.075) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint59_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(118.421 416.731) scale(5.9135 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint60_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(94.9359 351.096) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint61_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(89.1184 283.456) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint62_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(128.257 236.287) scale(5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint63_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(158.94 214.739) scale(5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint64_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(180.446 178.101) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint65_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(203.948 143.377) scale(5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint66_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(230.122 111.376) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint67_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(257.266 86.0481) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint68_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(283.889 76.7762) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint69_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(331.297 89.0302) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint70_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(366.51 93.1001) scale(5.9135 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint71_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(343.103 62.8995) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint72_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(377.483 60.7641) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint73_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(420.091 36.0817) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint74_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(460.388 30.847) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint75_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(500.842 27.5525) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint76_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(535.149 62.2151) scale(5.91353 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint77_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(659.382 143.784) scale(5.9135 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint78_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(438.149 578.37) scale(5.9135 5.91353)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint79_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(448.328 536.776) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint80_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(520.768 493.693) rotate(-4.46085) scale(5.91358)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint81_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(551.613 511.991) rotate(-6.23715) scale(5.91355)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint82_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(519.024 545.224) rotate(-2.48102) scale(5.91356)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint83_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(528.957 529.122) rotate(-4.0305) scale(5.91356 5.91355)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint84_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(531.639 509.605) rotate(-5.23779) scale(5.91359 5.9136)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint85_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(459.831 553.141) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint86_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(457.406 518.37) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint87_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(513.307 525.928) rotate(-3.23091) scale(5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint88_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(500.547 507.507) rotate(-2.77595) scale(5.91347)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint89_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(535.979 486.222) rotate(-5.41007) scale(5.91355)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint90_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(489.707 529.225) rotate(-1.42442) scale(5.91353)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint91_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(488.155 507.116) rotate(-1.79297) scale(5.91356 5.91355)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint92_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(575.94 482.478) rotate(-4.90435) scale(5.9135 5.91352)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint93_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(619.143 462.559) rotate(-1.04364) scale(5.91352 5.91353)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint94_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(638.634 442.877) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint95_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(659.743 434.903) scale(5.91353 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint96_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(730.894 317.084) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint97_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(696.794 355.389) scale(5.91353 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint98_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(678.979 382.453) scale(5.91353 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint99_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(644.599 414.033) scale(5.91353 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint100_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(589.719 445.363) rotate(-1.85434) scale(5.91352 5.91354)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint101_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(535.159 461.738) rotate(-3.7226) scale(5.91354 5.91353)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint102_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(490.043 477.884) rotate(-1.68215) scale(5.91353 5.91352)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint103_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(173.801 262.422) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint104_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(214.789 248.315) scale(5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint105_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(275.866 223.416) scale(5.9135 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint106_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(322.399 201.967) scale(5.9135 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint107_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(353.447 182.356) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint108_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(385.497 184.295) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint109_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(429.501 208.069) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint110_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(462.941 235.981) scale(5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint111_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(493.178 244.348) scale(5.9135 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint112_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(521.139 254.645) scale(5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint113_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(552.445 296.776) scale(5.91353 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint114_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(90.3905 375.344) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint115_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(69.6241 327.211) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint116_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(61.8283 257.385) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint117_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(96.6708 200.4) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint118_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(137.444 172.193) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint119_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(160.269 157.301) scale(5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint120_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(186.429 124.338) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint121_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(341.447 47.7667) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint122_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(375.967 37.5575) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint123_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(400.009 23.6821) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint124_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(419.897 13.7718) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint125_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(440.977 15.1539) scale(5.9135 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint126_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(459.537 17.5985) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint127_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(496.922 28.3711) scale(5.91351 5.91351)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint128_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(341.316 605.428) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint129_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(356.19 585.478) scale(5.91351 5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint130_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(370.988 555.646) scale(5.9135)"
          >
            <stop offset="0.00055804" stopColor="#009DFF" />
            <stop offset="0.9958" stopColor="#009DFF" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint131_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(538.943 461.065) scale(4.73762)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint132_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(555.098 444.886) scale(4.73765 4.73762)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint133_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(579.245 420.725) scale(4.73751 4.73753)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint134_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(380.137 47.9394) scale(4.73753 4.73752)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint135_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(693.93 243.565) scale(4.73762 4.73763)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint136_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(710.219 270.941) scale(4.73765 4.73764)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint137_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(230.906 618.968) scale(4.73752 4.73755)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint138_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(238.563 612.755) scale(4.73752 4.73751)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint139_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(223.302 601.541) scale(4.73763 4.73762)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint140_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(80.6069 355.943) scale(4.73763 4.73762)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint141_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(65.5598 325.935) scale(4.73763 4.73762)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint142_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(78.5825 530.434) scale(4.73752 4.73753)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint143_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(111.077 467.05) scale(4.73752 4.73751)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint144_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(639.26 81.2805) scale(4.73762 4.73763)"
          >
            <stop offset="0.00055804" stopColor="#FF00DD" />
            <stop offset="0.9958" stopColor="#FF00DD" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint145_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(315.303 194.565) scale(4.73762 4.73763)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint146_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(330.901 190.882) scale(4.73751 4.73752)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint147_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(363.251 179.41) scale(4.73753 4.73752)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint148_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(382.619 177.562) scale(4.73753 4.73752)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint149_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(556.766 48.0053) scale(4.73751 4.73752)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint150_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(620.127 97.9386) scale(4.73765 4.73762)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint151_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(577.936 113.919) scale(4.73762 4.73763)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint152_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(647.435 202.878) scale(4.73765 4.73763)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint153_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(654.399 215.258) scale(4.73755 4.73752)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint154_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(664.024 225.385) scale(4.73765 4.73763)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint155_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(691.64 245.099) scale(4.73755 4.73752)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint156_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(719.754 272.174) scale(4.73751)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint157_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(718.753 285.139) scale(4.73762 4.73764)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint158_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(365.136 524.801) scale(4.73753)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint159_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(357.936 517.138) scale(4.73762 4.73764)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint160_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(345.792 526.378) scale(4.73753 4.73751)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint161_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(325.722 531.94) scale(4.73751 4.73753)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint162_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(255.498 527.029) scale(4.73762 4.73764)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint163_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(162.164 440.732) scale(4.73752 4.73751)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint164_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(155.509 420.562) scale(4.73763 4.73762)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint165_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(150.8 353.547) scale(4.73752 4.73751)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint166_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(151.327 322.265) scale(4.73752 4.73753)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint167_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(167.732 287.868) scale(4.73763 4.73764)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint168_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(173.706 268.404) scale(4.73752 4.73753)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint169_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(184.791 272.596) scale(4.73763 4.73762)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint170_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(186.938 259.862) scale(4.73762)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint171_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(200.142 259.308) scale(4.73752 4.73751)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint172_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(5.63347 432.329) scale(4.73752 4.73753)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint173_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(102.152 521.616) scale(4.73763 4.73764)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint174_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(228.728 616.462) scale(4.73763 4.73762)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint175_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(243.405 620.895) scale(4.73753 4.73755)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint176_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(94.323 388.035) scale(4.73752 4.73751)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint177_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(86.4755 381.595) scale(4.73752 4.73753)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint178_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(179.831 113.552) scale(4.73752)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint179_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(187.765 101.359) scale(4.73752)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint180_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(540.059 564.673) scale(4.73765 4.73762)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint181_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(574.197 563.757) scale(4.73751)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <radialGradient
            id="paint182_radial_1402_9"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(588.395 495.973) scale(4.73751)"
          >
            <stop stopColor="white" />
            <stop offset="0.9975" stopColor="white" stop-opacity="0" />
          </radialGradient>
          <linearGradient
            id="paint183_linear_1402_9"
            x1="390.5"
            y1="225"
            x2="390.5"
            y2="432"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FE9500" />
            <stop offset="1" stopColor="#F2D400" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Dappani;
