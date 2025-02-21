export function Logo({ fill = "white" }) {
  const color = fill === "black" ? "black" : "white";
  const oppositeColor = fill === "black" ? "#f8f3ef" : "black";

  return (
    <div className={fill !== "white" ? "bg-gradient-to-br from-[#fff]/30 to-[#fff]/50" : "bg-white"}>
      <svg
        width="230"
        height="139"
        viewBox="0 0 230 139"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
            <linearGradient id="background-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#111111">
              <animate attributeName="stop-color" values="#111111;#333333;#111111" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#333333">
              <animate attributeName="stop-color" values="#333333;#111111;#333333" dur="3s" repeatCount="indefinite" />
            </stop>
            </linearGradient>
          <mask id="cutout-mask">
            <rect width="100%" height="100%" fill={oppositeColor} />
            <g transform="translate(15, 15)">
              <path fill={color} fillOpacity="1" d="M36.4767 47.1513H27.7014V24.558H8.77537V47.1513H0V0.523904H8.77537V15.979H27.7014V0.523904H36.4767V47.1513ZM76.7518 47.1513H46.6274V0.523904H77.3412V9.03733H55.4027V15.9136H74.5252V24.6234H55.4027V38.5069H76.7518V47.1513ZM124.623 47.1513H115.193L110.413 34.5776H94.9574L90.1113 47.1513H80.7466L98.6902 0.523904H106.614L124.623 47.1513ZM98.3628 25.9332H107.007L102.685 14.6038L98.3628 25.9332ZM139.555 47.1513H130.845V0.523904H147.544C150.753 0.523904 153.766 1.76817 156.058 4.06025C158.284 6.35232 159.594 9.29928 159.594 12.5082C159.594 19.1225 154.158 24.427 147.544 24.427H139.555V47.1513ZM139.555 15.8481H147.544C149.378 15.8481 150.819 14.3418 150.819 12.5082C150.819 10.6745 149.312 9.10282 147.544 9.10282H139.555V15.8481ZM183.497 47.5442C181.991 47.5442 180.419 47.3477 178.782 47.0203C173.936 46.038 169.221 43.6804 165.095 40.0786L163.851 38.9653L169.614 32.4165L170.858 33.5298C173.87 36.1493 177.21 37.9175 180.485 38.5724H180.55C181.532 38.7688 182.515 38.8998 183.497 38.8998C185.134 38.8998 186.64 38.5724 187.885 37.983C189.456 37.3281 191.29 35.8874 191.29 33.2024C191.29 31.7616 190.57 30.6483 189.064 29.7315C187.23 28.6182 184.741 28.0288 182.973 27.7014C182.187 27.5704 175.508 26.1952 172.43 24.4925C170.399 23.2482 168.828 21.6765 167.714 19.8428C166.601 17.9437 166.077 15.8481 166.077 13.556C166.077 11.0675 166.863 8.57891 168.369 6.28684C169.81 4.38769 171.775 2.81598 174.132 1.70268C176.49 0.589391 179.109 0 181.925 0C183.039 0 184.217 0.130976 185.396 0.261951C189.718 1.04781 193.975 3.01244 197.708 6.15586L198.952 7.20367L193.386 13.9489L192.141 12.9011C187.885 9.43025 184.217 8.6444 181.86 8.6444C180.354 8.6444 178.978 8.97184 177.8 9.49574C175.966 10.3471 174.787 11.9188 174.787 13.4905C174.787 14.9312 175.311 15.8481 176.555 16.6994C177.8 17.5508 179.699 18.2056 182.711 18.8605C183.104 18.926 183.628 19.057 184.152 19.1879C186.902 19.7119 190.57 20.4977 193.124 22.0039C195.35 23.1827 197.053 24.8199 198.232 26.7191C199.411 28.6182 200 30.8448 200 33.2024C200 36.1493 199.214 38.7688 197.642 40.9954C196.267 42.8946 194.237 44.5318 191.552 45.8415C189.26 47.0203 186.706 47.5442 183.497 47.5442Z" />
              <path fill={color} fillOpacity="1" d="M18.5644 99.5924C17.1411 99.5924 15.6559 99.4068 14.1089 99.0974C9.5297 98.1691 5.07426 95.9414 1.17574 92.538L0 91.486L5.44555 85.2979L6.62129 86.3498C9.46782 88.8251 12.6238 90.4959 15.7178 91.1147H15.7797C16.7079 91.3003 17.6361 91.4241 18.5644 91.4241C20.1114 91.4241 21.5347 91.1147 22.7104 90.5578C24.1955 89.939 25.9282 88.5776 25.9282 86.0404C25.9282 84.679 25.2475 83.6271 23.8243 82.7607C22.0916 81.7088 19.7401 81.1518 18.0693 80.8424C17.3267 80.7187 11.0149 79.4191 8.10644 77.8102C6.18812 76.6345 4.70297 75.1493 3.65099 73.4167C2.59901 71.6221 2.10396 69.6419 2.10396 67.4761C2.10396 65.1246 2.84653 62.7731 4.2698 60.6073C5.63119 58.8127 7.48762 57.3276 9.71535 56.2756C11.9431 55.2236 14.4183 54.6667 17.0792 54.6667C18.1312 54.6667 19.2451 54.7904 20.3589 54.9142C24.4431 55.6568 28.4653 57.5132 31.9926 60.4835L33.1683 61.4736L27.9084 67.8474L26.7327 66.8573C22.7104 63.5776 19.2451 62.835 17.0173 62.835C15.5941 62.835 14.2946 63.1444 13.1807 63.6394C11.448 64.4439 10.3342 65.929 10.3342 67.4142C10.3342 68.7756 10.8292 69.6419 12.005 70.4464C13.1807 71.2508 14.9752 71.8696 17.8218 72.4885C18.1931 72.5503 18.6881 72.6741 19.1832 72.7979C21.7822 73.2929 25.2475 74.0355 27.6609 75.4588C29.7649 76.5726 31.3738 78.1196 32.4876 79.9142C33.6015 81.7088 34.1584 83.8127 34.1584 86.0404C34.1584 88.8251 33.4158 91.3003 31.9307 93.4043C30.6312 95.1989 28.7129 96.7459 26.1757 97.9835C24.0099 99.0974 21.5965 99.5924 18.5644 99.5924ZM81.1262 99.2211H72.896V69.7657L61.3861 85.4835L49.9381 69.7657V99.2211H41.7079V55.1617H49.4431L61.3861 71.5602L73.3292 55.1617H81.1262V99.2211ZM129.394 99.2211H120.483L115.965 87.3399H101.361L96.7822 99.2211H87.9332L104.889 55.1617H112.376L129.394 99.2211ZM104.579 79.1716H112.748L108.663 68.4662L104.579 79.1716ZM171.658 99.2211H161.881L146.225 77.6865H142.698V99.2211H134.653V55.1617H150.433C153.403 55.1617 156.188 56.3375 158.354 58.5033C160.52 60.6691 161.696 63.4538 161.696 66.4241C161.696 70.8177 159.097 74.7781 155.26 76.6345L171.658 99.2211ZM142.698 69.6419H150.433C152.166 69.6419 153.651 68.2186 153.651 66.4241C153.651 64.6295 152.166 63.2063 150.433 63.2063H142.698V69.6419ZM189.171 99.2211H180.879V63.33H170.05V55.1617H200V63.33H189.171V99.2211Z" />
            </g>
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#background-gradient)"
          mask="url(#cutout-mask)"
        />
        <g transform="translate(15, 10)">
          <path fill={oppositeColor} fillOpacity="0.8" d="M24.9588 114.332V115.081H23.0608V120.225H22.2617V115.081H20.3636V114.332H24.9588ZM32.6291 114.332V115.081H29.6239V116.837H32.421V117.587H29.6239V119.476H32.7789V120.225H28.8247V114.332H32.6291ZM39.6334 114.182C40.0496 114.182 40.4395 114.26 40.803 114.415C41.1665 114.57 41.4648 114.798 41.6979 115.098L41.0319 115.605C40.6712 115.156 40.1967 114.931 39.6084 114.931C38.9702 114.931 38.4444 115.159 38.0309 115.614C37.6174 116.069 37.4107 116.64 37.4107 117.329C37.4107 117.994 37.6147 118.544 38.0226 118.977C38.4305 119.41 38.9591 119.626 39.6084 119.626C40.2577 119.626 40.7711 119.362 41.1484 118.835L41.8227 119.343C41.5896 119.654 41.2789 119.904 40.8904 120.092C40.5019 120.281 40.069 120.375 39.5918 120.375C39.0257 120.375 38.5123 120.238 38.0517 119.963C37.5911 119.689 37.2276 119.311 36.9612 118.831C36.6948 118.351 36.5616 117.847 36.5616 117.32C36.5616 116.41 36.8474 115.659 37.419 115.068C37.9907 114.477 38.7287 114.182 39.6334 114.182ZM46.6044 114.332V116.779H49.6595V114.332H50.4587V120.225H49.6595V117.528H46.6044V120.225H45.8052V114.332H46.6044ZM56.0394 114.332L59.286 119.177H59.3027V114.332H60.1018V120.225H59.0862L55.8064 115.381H55.7897V120.225H54.9906V114.332H56.0394ZM67.3392 114.182C68.2161 114.182 68.9473 114.473 69.5328 115.056C70.1182 115.639 70.411 116.38 70.411 117.279C70.411 117.85 70.2806 118.373 70.0197 118.848C69.7589 119.322 69.3912 119.695 68.9167 119.967C68.4422 120.239 67.9164 120.375 67.3392 120.375C66.7676 120.375 66.246 120.241 65.7742 119.972C65.3025 119.702 64.9334 119.331 64.667 118.856C64.4007 118.382 64.2675 117.856 64.2675 117.279C64.2675 116.402 64.5547 115.666 65.129 115.073C65.7034 114.479 66.4402 114.182 67.3392 114.182ZM65.1166 117.279C65.1166 117.945 65.3247 118.502 65.7409 118.952C66.1571 119.401 66.6899 119.626 67.3392 119.626C67.9774 119.626 68.5074 119.404 68.9292 118.96C69.351 118.516 69.5619 117.956 69.5619 117.279C69.5619 116.607 69.3538 116.048 68.9375 115.601C68.5213 115.154 67.9858 114.931 67.3309 114.931C66.6982 114.931 66.171 115.153 65.7492 115.597C65.3274 116.041 65.1166 116.602 65.1166 117.279ZM75.3758 114.332V119.476H78.0813V120.225H74.5766V114.332H75.3758ZM84.6194 114.182C85.4962 114.182 86.2274 114.473 86.8129 115.056C87.3984 115.639 87.6911 116.38 87.6911 117.279C87.6911 117.85 87.5607 118.373 87.2999 118.848C87.0391 119.322 86.6714 119.695 86.1969 119.967C85.7224 120.239 85.1965 120.375 84.6194 120.375C84.0478 120.375 83.5261 120.241 83.0544 119.972C82.5826 119.702 82.2136 119.331 81.9472 118.856C81.6808 118.382 81.5476 117.856 81.5476 117.279C81.5476 116.402 81.8348 115.666 82.4092 115.073C82.9836 114.479 83.7203 114.182 84.6194 114.182ZM82.3967 117.279C82.3967 117.945 82.6048 118.502 83.0211 118.952C83.4373 119.401 83.9701 119.626 84.6194 119.626C85.2576 119.626 85.7876 119.404 86.2094 118.96C86.6312 118.516 86.842 117.956 86.842 117.279C86.842 116.607 86.6339 116.048 86.2177 115.601C85.8015 115.154 85.266 114.931 84.6111 114.931C83.9784 114.931 83.4512 115.153 83.0294 115.597C82.6076 116.041 82.3967 116.602 82.3967 117.279ZM94.5706 114.182C95.5529 114.182 96.2827 114.437 96.7599 114.948L96.1939 115.555C95.7555 115.139 95.2116 114.931 94.5622 114.931C93.9129 114.931 93.3802 115.154 92.9639 115.601C92.5477 116.048 92.3396 116.607 92.3396 117.279C92.3396 117.956 92.5602 118.516 93.0014 118.96C93.4426 119.404 93.9851 119.626 94.6288 119.626C95.2393 119.626 95.7221 119.523 96.0773 119.318V117.678H94.7704V116.929H96.8765V119.834C96.5879 120.006 96.2397 120.139 95.8317 120.234C95.4238 120.328 95.0284 120.375 94.6455 120.375C93.7187 120.375 92.9612 120.087 92.3729 119.51C91.7846 118.932 91.4905 118.189 91.4905 117.279C91.4905 116.402 91.7805 115.666 92.3604 115.073C92.9404 114.479 93.6771 114.182 94.5706 114.182ZM101.533 114.332L103.14 116.921L104.796 114.332H105.77L103.539 117.711V120.225H102.74V117.711L100.509 114.332H101.533ZM118.497 114.332V115.081H115.592V116.929H118.297V117.678H115.592V120.225H114.793V114.332H118.497ZM125.293 114.182C126.17 114.182 126.901 114.473 127.487 115.056C128.072 115.639 128.365 116.38 128.365 117.279C128.365 117.85 128.235 118.373 127.974 118.848C127.713 119.322 127.345 119.695 126.871 119.967C126.396 120.239 125.87 120.375 125.293 120.375C124.722 120.375 124.2 120.241 123.728 119.972C123.256 119.702 122.887 119.331 122.621 118.856C122.355 118.382 122.221 117.856 122.221 117.279C122.221 116.402 122.509 115.666 123.083 115.073C123.657 114.479 124.394 114.182 125.293 114.182ZM123.071 117.279C123.071 117.945 123.279 118.502 123.695 118.952C124.111 119.401 124.644 119.626 125.293 119.626C125.931 119.626 126.461 119.404 126.883 118.96C127.305 118.516 127.516 117.956 127.516 117.279C127.516 116.607 127.308 116.048 126.892 115.601C126.475 115.154 125.94 114.931 125.285 114.931C124.652 114.931 124.125 115.153 123.703 115.597C123.281 116.041 123.071 116.602 123.071 117.279ZM134.645 114.332C135.222 114.332 135.675 114.476 136.002 114.765C136.329 115.053 136.493 115.458 136.493 115.98C136.493 116.374 136.359 116.718 136.089 117.012C135.82 117.306 135.475 117.481 135.053 117.537H135.045L136.718 120.225H135.719L134.221 117.628H133.33V120.225H132.531V114.332H134.645ZM134.412 116.929C134.828 116.929 135.138 116.853 135.34 116.7C135.543 116.547 135.644 116.307 135.644 115.98C135.644 115.347 135.233 115.031 134.412 115.031H133.33V116.929L134.412 116.929ZM148.679 114.182C149.661 114.182 150.391 114.437 150.868 114.948L150.302 115.555C149.864 115.139 149.32 114.931 148.67 114.931C148.021 114.931 147.488 115.154 147.072 115.601C146.656 116.048 146.448 116.607 146.448 117.279C146.448 117.956 146.668 118.516 147.109 118.96C147.551 119.404 148.093 119.626 148.737 119.626C149.347 119.626 149.83 119.523 150.185 119.318V117.678H148.878V116.929H150.985V119.834C150.696 120.006 150.348 120.139 149.94 120.234C149.532 120.328 149.137 120.375 148.754 120.375C147.827 120.375 147.069 120.087 146.481 119.51C145.893 118.932 145.599 118.189 145.599 117.279C145.599 116.402 145.889 115.666 146.468 115.073C147.048 114.479 147.785 114.182 148.679 114.182ZM158.164 114.182C159.04 114.182 159.772 114.473 160.357 115.056C160.943 115.639 161.235 116.38 161.235 117.279C161.235 117.85 161.105 118.373 160.844 118.848C160.583 119.322 160.216 119.695 159.741 119.967C159.267 120.239 158.741 120.375 158.164 120.375C157.592 120.375 157.07 120.241 156.599 119.972C156.127 119.702 155.758 119.331 155.491 118.856C155.225 118.382 155.092 117.856 155.092 117.279C155.092 116.402 155.379 115.666 155.953 115.073C156.528 114.479 157.265 114.182 158.164 114.182ZM155.941 117.279C155.941 117.945 156.149 118.502 156.565 118.952C156.982 119.401 157.514 119.626 158.164 119.626C158.802 119.626 159.332 119.404 159.754 118.96C160.175 118.516 160.386 117.956 160.386 117.279C160.386 116.607 160.178 116.048 159.762 115.601C159.346 115.154 158.81 114.931 158.155 114.931C157.523 114.931 156.995 115.153 156.574 115.597C156.152 116.041 155.941 116.602 155.941 117.279ZM168.107 114.182C168.983 114.182 169.715 114.473 170.3 115.056C170.886 115.639 171.178 116.38 171.178 117.279C171.178 117.85 171.048 118.373 170.787 118.848C170.526 119.322 170.159 119.695 169.684 119.967C169.21 120.239 168.684 120.375 168.107 120.375C167.535 120.375 167.013 120.241 166.542 119.972C166.07 119.702 165.701 119.331 165.434 118.856C165.168 118.382 165.035 117.856 165.035 117.279C165.035 116.402 165.322 115.666 165.896 115.073C166.471 114.479 167.207 114.182 168.107 114.182ZM165.884 117.279C165.884 117.945 166.092 118.502 166.508 118.952C166.924 119.401 167.457 119.626 168.107 119.626C168.745 119.626 169.275 119.404 169.697 118.96C170.118 118.516 170.329 117.956 170.329 117.279C170.329 116.607 170.121 116.048 169.705 115.601C169.289 115.154 168.753 114.931 168.098 114.931C167.466 114.931 166.938 115.153 166.517 115.597C166.095 116.041 165.884 116.602 165.884 117.279ZM177.309 114.332C177.936 114.332 178.48 114.461 178.94 114.719C179.401 114.977 179.753 115.331 179.997 115.78C180.242 116.23 180.364 116.729 180.364 117.279C180.364 117.828 180.228 118.329 179.956 118.781C179.684 119.233 179.304 119.587 178.815 119.843C178.327 120.098 177.783 120.225 177.184 120.225H175.211V114.332H177.309ZM177.059 119.476C177.508 119.476 177.92 119.389 178.295 119.214C178.67 119.039 178.966 118.788 179.186 118.461C179.405 118.133 179.515 117.739 179.515 117.279C179.515 116.613 179.308 116.08 178.894 115.68C178.481 115.281 177.933 115.081 177.25 115.081H176.01V119.476L177.059 119.476Z" />
        </g>
      </svg>
    </div>
  );
}
