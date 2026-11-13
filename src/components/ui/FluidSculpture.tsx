/**
 * Ilustración vectorial ORIGINAL para Elyon Devs.
 * Se anima mediante CSS, sin imágenes, videos ni scripts de Frezzar.
 */
export function FluidSculpture() {
  return (
    <svg className="fluid-art" viewBox="0 0 430 340" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="elyon-metal" cx="27%" cy="18%" r="93%">
          <stop offset="0%" stopColor="#e9fff0" />
          <stop offset="10%" stopColor="#71ffd0" />
          <stop offset="27%" stopColor="#1baa6f" />
          <stop offset="43%" stopColor="#02170f" />
          <stop offset="58%" stopColor="#68ffd7" />
          <stop offset="72%" stopColor="#08794a" />
          <stop offset="89%" stopColor="#020e0a" />
          <stop offset="100%" stopColor="#c7ffb3" />
        </radialGradient>
        <linearGradient id="elyon-ribbon" x1="5%" y1="10%" x2="95%" y2="95%">
          <stop offset="0%" stopColor="#ecffee" />
          <stop offset="16%" stopColor="#7cffa6" />
          <stop offset="33%" stopColor="#007b5a" />
          <stop offset="50%" stopColor="#001f1a" />
          <stop offset="67%" stopColor="#6dffbf" />
          <stop offset="82%" stopColor="#0b402b" />
          <stop offset="100%" stopColor="#d9ffde" />
        </linearGradient>
        <linearGradient id="elyon-gleam" x1="0%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity=".94" />
          <stop offset="30%" stopColor="#bfffe4" stopOpacity=".28" />
          <stop offset="65%" stopColor="#0ef1a0" stopOpacity=".06" />
          <stop offset="100%" stopColor="#f2ffee" stopOpacity=".74" />
        </linearGradient>
        <radialGradient id="elyon-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#87ffae" stopOpacity=".55" />
          <stop offset="100%" stopColor="#0e2215" stopOpacity="0" />
        </radialGradient>
        <filter id="elyon-art-shadow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="13" />
        </filter>
        <clipPath id="elyon-shape-clip">
          <path d="M139 37 C199 6 292 16 327 83 C365 155 335 203 313 252 C287 307 206 326 145 296 C66 258 55 178 80 123 C95 88 103 55 139 37 Z" />
        </clipPath>
      </defs>
      <ellipse cx="223" cy="278" rx="138" ry="31" fill="#35ff98" opacity=".22" filter="url(#elyon-art-shadow)" />
      <ellipse cx="220" cy="178" rx="155" ry="156" fill="url(#elyon-halo)" opacity=".36" />
      <g className="fluid-art__body">
        <path d="M139 37 C199 6 292 16 327 83 C365 155 335 203 313 252 C287 307 206 326 145 296 C66 258 55 178 80 123 C95 88 103 55 139 37 Z" fill="url(#elyon-metal)" stroke="#87ffe0" strokeOpacity=".4" strokeWidth="1.5" />
        <g clipPath="url(#elyon-shape-clip)">
          <path d="M100 65 C136 40 159 48 179 100 C201 151 217 171 264 186 C305 198 327 217 327 254 C270 323 168 325 102 261 C59 221 55 119 100 65 Z" fill="url(#elyon-ribbon)" opacity=".87" />
          <path d="M120 49 C119 112 164 170 210 185 C268 204 299 182 318 139 C321 208 290 254 223 246 C156 236 85 163 91 106 Z" fill="#01120d" opacity=".65" />
          <path d="M141 42 C137 84 164 129 193 149 C217 167 250 174 271 164" fill="none" stroke="#d5fff2" strokeWidth="12" strokeLinecap="round" opacity=".77" />
          <path d="M115 107 C120 178 176 242 243 258 C285 267 318 251 330 228" fill="none" stroke="#3affbb" strokeWidth="6" strokeLinecap="round" opacity=".58" />
          <path d="M95 204 C138 280 239 309 310 255" fill="none" stroke="#f4fff5" strokeWidth="5" strokeLinecap="round" opacity=".78" />
          <path d="M306 56 C337 103 340 157 314 202" fill="none" stroke="url(#elyon-gleam)" strokeWidth="14" strokeLinecap="round" opacity=".67" />
          <ellipse cx="138" cy="89" rx="29" ry="63" fill="#b5ffb2" opacity=".22" filter="url(#elyon-art-shadow)" />
        </g>
        <path d="M166 108 C183 87 226 73 260 96 C286 115 297 151 284 179 C272 208 241 223 213 213 C184 203 155 173 155 146 C155 132 158 119 166 108 Z" fill="#050b09" stroke="#9effd5" strokeOpacity=".46" strokeWidth="2.5" />
        <path d="M174 113 C197 92 238 87 263 112" fill="none" stroke="#d5ffea" strokeOpacity=".53" strokeWidth="5" strokeLinecap="round" />
        <path d="M213 212 C251 222 282 198 286 172" fill="none" stroke="#25ff9a" strokeOpacity=".4" strokeWidth="7" strokeLinecap="round" />
      </g>
      <circle className="fluid-art__glint" cx="116" cy="77" r="4" fill="#e7fff0" />
      <circle className="fluid-art__glint fluid-art__glint--second" cx="318" cy="248" r="3" fill="#ceffdc" />
    </svg>
  );
}
