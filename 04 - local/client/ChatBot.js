/************   Iconos e imágenes   **********/

const chatIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="30" height="30" fill="#ffffff" class="bi bi-chat-right-dots-fill" viewBox="0 0 16 16">
  <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9.586a1 1 0 0 1 .707.293l2.853 2.853a.5.5 0 0 0 .854-.353zM5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>
`
const closeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="30" height="30" fill="white" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
`


const sendIcon=`<svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="20" height="20" fill="#ffffff" viewBox="0 0 16 16">
  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
</svg>`


const eraserIcon= `
<svg xmlns="http://www.w3.org/2000/svg" class="m-auto" width="16" height="16" fill="#ffffff" viewBox="0 0 16 16">
  <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828zm.66 11.34L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293z"/>
</svg>
`

const logo= `
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="84.25px" height="25px" viewBox="0 0 337.000000 100"
 preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,186.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M1989 1773 c-8 -9 -14 -39 -14 -69 0 -72 18 -89 91 -89 47 0 59 4 75
24 23 29 25 98 3 129 -13 19 -24 22 -78 22 -47 0 -67 -4 -77 -17z"/>
<path d="M1515 1505 c-22 -9 -44 -20 -49 -25 -5 -5 -19 -2 -34 10 -20 16 -40
20 -102 20 -43 0 -92 -3 -109 -6 -30 -6 -31 -8 -31 -60 l0 -54 45 0 45 0 0
-240 0 -240 85 0 85 0 0 224 0 224 31 6 c55 11 124 7 146 -9 21 -14 22 -24 25
-211 3 -192 3 -196 27 -215 24 -20 105 -26 184 -13 l37 7 0 58 0 59 -35 0 -35
0 0 173 c0 159 -2 176 -22 217 -36 70 -65 85 -166 87 -58 2 -100 -2 -127 -12z"/>
<path d="M488 1503 c-14 -4 -18 -15 -18 -59 l0 -54 39 0 40 0 3 -194 c3 -222
7 -231 89 -274 58 -31 171 -28 238 5 44 22 44 22 69 3 26 -21 95 -26 186 -14
l46 7 0 58 0 59 -40 0 -40 0 0 215 c0 263 4 255 -122 255 -125 0 -128 -2 -128
-66 l0 -54 35 0 35 0 0 -164 0 -165 -54 -6 c-63 -8 -109 0 -128 22 -9 12 -14
68 -16 210 -5 232 1 224 -132 222 -47 -1 -93 -3 -102 -6z"/>
<path d="M1953 1503 c-21 -4 -23 -10 -23 -59 l0 -54 40 0 40 0 0 -240 0 -240
91 0 91 0 -4 281 -3 281 -24 19 c-19 16 -38 19 -105 18 -44 -1 -91 -4 -103 -6z"/>
<path d="M2270 1445 l0 -65 40 0 40 0 0 -235 0 -235 85 0 85 0 0 85 0 85 40 0
39 0 83 -147 c107 -192 118 -203 200 -203 35 0 80 3 101 6 l37 7 0 58 0 58
-47 3 -47 3 -72 119 -71 119 40 22 c119 62 117 264 -3 337 -64 39 -127 48
-351 48 l-199 0 0 -65z m392 -65 c68 -19 90 -93 44 -147 -22 -25 -31 -28 -105
-31 l-81 -4 0 96 0 96 53 0 c28 0 69 -5 89 -10z"/>
</g>
</svg>
`


/********* Variables ************/

const TOKEN_LIMIT = 1000 // Limite de tokens de respuesta
const SPECIAL_TOKEN_BUFFER = 10 // Buffer de tokens
const TEMARIO = "Tecnologías Emergentes"



/******** Clases CSS ***********/

const styles= `
:host {
      display: block;
      position: fixed; /* Change to fixed position */
      bottom: 25px; /* Adjust the distance from the bottom */
      right: 25px; /* Adjust the distance from the right */
      z-index: 9999; /* Ensure the chat bot appears above other content */
    }

@layer theme, base, components, utilities;

@layer theme {
  :root, :host {
    --tw-rotate-x: rotateX(0);
      --tw-rotate-y: rotateY(0);
      --tw-rotate-z: rotateZ(0);
      --tw-skew-x: skewX(0);
      --tw-skew-y: skewY(0);
      --tw-space-y-reverse: 0;
      --tw-space-x-reverse: 0;
      --tw-border-style: solid;
      --tw-font-weight: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;

    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
      "Courier New", monospace;
    --color-green-200: oklch(92.5% 0.084 155.995);
    --color-blue-100: oklch(93.2% 0.032 255.585);
    --color-blue-200: oklch(88.2% 0.059 254.128);
    --color-blue-300: oklch(80.9% 0.105 251.813);
    --color-blue-400: oklch(70.7% 0.165 254.624);
    --color-blue-500: oklch(62.3% 0.214 259.815);
    --color-blue-700: oklch(48.8% 0.243 264.376);
    --color-gray-50: oklch(98.5% 0.002 247.839);
    --color-gray-100: oklch(96.7% 0.003 264.542);
    --color-gray-200: oklch(92.8% 0.006 264.531);
    --color-gray-300: oklch(87.2% 0.01 258.338);
    --color-gray-600: oklch(44.6% 0.03 256.802);
    --color-gray-800: oklch(27.8% 0.033 256.848);
    --color-white: #fff;
    --spacing: 0.25rem;
    --breakpoint-lg: 64rem;
    --container-md: 28rem;
    --text-sm: 0.875rem;
    --text-sm--line-height: calc(1.25 / 0.875);
    --font-weight-bold: 700;
    --radius-md: 0.375rem;
    --radius-lg: 0.5rem;
    --radius-xl: 0.75rem;
    --default-transition-duration: 150ms;
    --default-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
  }
}
@layer base {
  *, ::after, ::before, ::backdrop, ::file-selector-button {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0 solid;
  }
  html, :host {
    line-height: 1.5;
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }
  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }
  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }
  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }
  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }
  b, strong {
    font-weight: bolder;
  }
  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }
  small {
    font-size: 80%;
  }
  sub, sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }
  :-moz-focusring {
    outline: auto;
  }
  progress {
    vertical-align: baseline;
  }
  summary {
    display: list-item;
  }
  ol, ul, menu {
    list-style: none;
  }
  img, svg, video, canvas, audio, iframe, embed, object {
    display: block;
    vertical-align: middle;
  }
  img, video {
    max-width: 100%;
    height: auto;
  }
  button, input, select, optgroup, textarea, ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    border-radius: 0;
    background-color: transparent;
    opacity: 1;
  }
  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }
  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }
  ::file-selector-button {
    margin-inline-end: 4px;
  }
  ::placeholder {
    opacity: 1;
  }
  @supports (not (-webkit-appearance: -apple-pay-button))  or (contain-intrinsic-size: 1px) {
    ::placeholder {
      color: color-mix(in oklab, currentColor 50%, transparent);
    }
  }
  textarea {
    resize: vertical;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }
  ::-webkit-datetime-edit {
    display: inline-flex;
  }
  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }
  ::-webkit-datetime-edit, ::-webkit-datetime-edit-year-field, ::-webkit-datetime-edit-month-field, ::-webkit-datetime-edit-day-field, ::-webkit-datetime-edit-hour-field, ::-webkit-datetime-edit-minute-field, ::-webkit-datetime-edit-second-field, ::-webkit-datetime-edit-millisecond-field, ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  button, input:where([type="button"], [type="reset"], [type="submit"]), ::file-selector-button {
    appearance: button;
  }
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    height: auto;
  }
  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }
}
@layer utilities {
  .pointer-events-none {
    pointer-events: none;
  }
  .fixed {
    position: fixed;
  }
  .inset-x-0 {
    inset-inline: calc(var(--spacing) * 0);
  }
  .bottom-0 {
    bottom: calc(var(--spacing) * 0);
  }
  .float-right {
    float: right;
  }
  .m-auto {
    margin: auto;
  }
  .my-4 {
    margin-block: calc(var(--spacing) * 4);
  }
  .mt-4 {
    margin-top: calc(var(--spacing) * 4);
  }
  .-mb-0 {
    margin-bottom: calc(var(--spacing) * -0);
  }
  .-mb-0\.5 {
    margin-bottom: calc(var(--spacing) * -0.5);
  }
  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }
  .block {
    display: block;
  }
  .contents {
    display: contents;
  }
  .flex {
    display: flex;
  }
  .hidden {
    display: none;
  }
  .inline-block {
    display: inline-block;
  }
  .table {
    display: table;
  }
  .h-4 {
    height: calc(var(--spacing) * 4);
  }
  .h-screen {
    height: 100vh;
  }
  .w-1 {
    width: calc(var(--spacing) * 1);
  }
  .w-1\/2 {
    width: calc(1/2 * 100%);
  }
  .w-2 {
    width: calc(var(--spacing) * 2);
  }
  .w-2\.5 {
    width: calc(var(--spacing) * 2.5);
  }
  .w-full {
    width: 100%;
  }
  .w-screen {
    width: 100vw;
  }
  .max-w-md {
    max-width: var(--container-md);
  }
  .max-w-screen-lg {
    max-width: var(--breakpoint-lg);
  }
  .flex-1 {
    flex: 1;
  }
  .flex-grow {
    flex-grow: 1;
  }
  .border-collapse {
    border-collapse: collapse;
  }
  .transform {
    transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
  }
  .cursor-pointer {
    cursor: pointer;
  }
  .resize {
    resize: both;
  }
  .resize-none {
    resize: none;
  }
  .flex-col {
    flex-direction: column;
  }
  .flex-row {
    flex-direction: row;
  }
  .content-center {
    align-content: center;
  }
  .items-center {
    align-items: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }
  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }
  .space-y-4 {
    :where(& > :not(:last-child)) {
      --tw-space-y-reverse: 0;
      margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
      margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));
    }
  }
  .space-x-4 {
    :where(& > :not(:last-child)) {
      --tw-space-x-reverse: 0;
      margin-inline-start: calc(calc(var(--spacing) * 4) * var(--tw-space-x-reverse));
      margin-inline-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-x-reverse)));
    }
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .overflow-y-auto {
    overflow-y: auto;
  }
  .rounded-full {
    border-radius: calc(infinity * 1px);
  }
  .rounded-lg {
    border-radius: var(--radius-lg);
  }
  .rounded-md {
    border-radius: var(--radius-md);
  }
  .rounded-xl {
    border-radius: var(--radius-xl);
  }
  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }
  .border-blue-100 {
    border-color: var(--color-blue-100);
  }
  .border-gray-200 {
    border-color: var(--color-gray-200);
  }
  .border-gray-300 {
    border-color: var(--color-gray-300);
  }
  .border-green-200 {
    border-color: var(--color-green-200);
  }
  .bg-blue-100 {
    background-color: var(--color-blue-100);
  }
  .bg-blue-400 {
    background-color: var(--color-blue-400);
  }
  .bg-gray-50 {
    background-color: var(--color-gray-50);
  }
  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }
  .bg-gray-200 {
    background-color: var(--color-gray-200);
  }
  .bg-gray-600 {
    background-color: var(--color-gray-600);
  }
  .bg-gray-800 {
    background-color: var(--color-gray-800);
  }
  .bg-green-200 {
    background-color: var(--color-green-200);
  }
  .bg-white {
    background-color: var(--color-white);
  }
  .p-2 {
    padding: calc(var(--spacing) * 2);
  }
  .p-4 {
    padding: calc(var(--spacing) * 4);
  }
  .p-5 {
    padding: calc(var(--spacing) * 5);
  }
  .p-8 {
    padding: calc(var(--spacing) * 8);
  }
  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }
  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }
  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }
  .py-2\.5 {
    padding-block: calc(var(--spacing) * 2.5);
  }
  .pr-2 {
    padding-right: calc(var(--spacing) * 2);
  }
  .pb-20 {
    padding-bottom: calc(var(--spacing) * 20);
  }
  .align-baseline {
    vertical-align: baseline;
  }
  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }
  .font-bold {
    --tw-font-weight: var(--font-weight-bold);
    font-weight: var(--font-weight-bold);
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .text-white {
    color: var(--color-white);
  }
  .underline {
    text-decoration-line: underline;
  }
  .opacity-50 {
    opacity: 50%;
  }
  .shadow {
    --tw-shadow: 0 1px 3px 0 var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .shadow-md {
    --tw-shadow: 0 4px 6px -1px var(--tw-shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--tw-shadow-color, rgb(0 0 0 / 0.1));
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }
  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }
  .transition {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to, opacity, box-shadow, transform, translate, scale, rotate, filter, -webkit-backdrop-filter, backdrop-filter;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }
  .hover\:bg-blue-200 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-200);
      }
    }
  }
  .hover\:bg-blue-300 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-blue-300);
      }
    }
  }
  .hover\:bg-gray-100 {
    &:hover {
      @media (hover: hover) {
        background-color: var(--color-gray-100);
      }
    }
  }
  .active\:bg-blue-500 {
    &:active {
      background-color: var(--color-blue-500);
    }
  }

  button.bg-blue-400:hover{
    background-color: var(--color-blue-200);
  }

  button.bg-blue-400:active{
    background-color: var(--color-blue-500);
  }
  button.bg-gray-50:hover{
    background-color: var(--color-gray-200);
  }

  button.bg-gray-50:active{
    background-color: var(--color-gray-100);
  }

 



  .active\:bg-gray-200 {
    &:active {
      background-color: var(--color-gray-200);
    }
  }
  .disabled\:opacity-50 {
    &:disabled {
      opacity: 50%;
    }
  }
}
@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
  initial-value: rotateX(0);
}
@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
  initial-value: rotateY(0);
}
@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
  initial-value: rotateZ(0);
}
@property --tw-skew-x {
  syntax: "*";
  inherits: false;
  initial-value: skewX(0);
}
@property --tw-skew-y {
  syntax: "*";
  inherits: false;
  initial-value: skewY(0);
}
@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-space-x-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}
@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}
@property --tw-font-weight {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}
@property --tw-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false;
}
@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-ring-inset {
  syntax: "*";
  inherits: false;
}
@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0px;
}
@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}
@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}
@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}


`


/********** Clase del Componente **********/

class ChatBot extends HTMLElement {
  constructor() {
    super()

    // Se añade un shadow root al elemento
    this.attachShadow({ mode: "open" })
    this.isOpen = true // Estado de la ventana de chat
    this.messages = [] // Array con los mensajes
    this.thinkingTimeout = null // Tiempo mínimo para mostrar el mensaje "Pensando..."
    this.apiPending = false // Estado de la llamada API
    this.totalTokens = 0 // Tokens totales 
    this.entorno = "DEV" // Entorno de desarrollo
  }


  /** Clases CSS inyectadas */
  get styles() {
    return styles
  }

  estimateTokens(message) {
    // Cuenta las palabras y añade un buffer para los tokens especiales
    return message.split(/\s+/).length + SPECIAL_TOKEN_BUFFER
  }

  /**
   * Callback de conexión
   */
  connectedCallback() {
    this.render()
    this.addEventListeners()
  }

  /**
   * Callback de desconexión
   */
  disconnectedCallback() {
    if (this.thinkingTimeout) {
      clearTimeout(this.thinkingTimeout)
    }
  }
  
  /**
   * Cambia el estado del chat de abierto a cerrado y viceversa
   */
  toggleChat() {
    this.isOpen = !this.isOpen
    this.render() // Renderiza el componente
    this.addEventListeners() // Vuelve a atar los eventos después del renceraizado
  }


  /**
   * Logica de envío de mensaje a la API
   * @param {String} message 
   */
  async sendMessage(message) {
    this.totalTokens += this.estimateTokens(message)
    this.messages.push({ role: "user", content: message.trim() })
    this.render()
    this.addEventListeners()

    // Añade el mensaje de pensando...
    const thinkingMessage = {
      role: "assistant-thinking",
      content: "Pensando...",
    }

    this.apiPending = true // API call starts
    this.messages.push(thinkingMessage)
    this.render()
    this.addEventListeners()

    
    //this.updateSendButtonState()

    // Scroll al nuevo mensaje
    const chatLog = this.shadowRoot.querySelector(".js-chat-log")
    if (chatLog) {
      chatLog.scrollTop = chatLog.scrollHeight
    }

    // Setear un mínimo tiempo para el texto "Pensando..."
    this.thinkingTimeout = setTimeout(async () => {

      // Borrar el mensaje de "Pensando..."
      this.messages = this.messages.filter((msg) => msg !== thinkingMessage)

      //let prompt = "Dime el titulo del tema dos"; // message;
      let prompt = message;
      const payload = {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      };
      
      try {
        console.log("Start request...");
        
        let url = "http://localhost:8000/api/chat";
        
        if(this.entorno !== "PROD"){
          url = "http://localhost:8000/api/chat"
        } else{
          url = "https://tfg-chatbot.netlify.app/api/chat"
        }

        
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      
        console.log("finish request")

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`${response.status} - ${response.statusText} ${errorData.error}`);
        }
      
        const data = await response.json();
        console.log("API response:", data);
      
        // Asegurar de que `this.messages` existe antes de usarlo
        if (Array.isArray(this.messages)) {
          this.messages.push({
            role: "assistant",
            content: data.content || "Perdone, no le he entendido.",
          });
        } else {
          console.error("this.messages no está definido correctamente");
        }
      
      } catch (error) {
        console.error("Fetch error:", error);
      
        // Si hay un error en la llamada, se muestra un mensaje por parte del asistente
        if (Array.isArray(this.messages)) {
          this.messages.push({
            role: "assistant",
            content: "Perdone, parece que hubo un error procesando su mensaje.",
          });
        }
      }

      this.apiPending = false
      this.render()
      this.addEventListeners()

      // Return focus to the input field
      const inputField = this.shadowRoot.querySelector(".js-chat-input")
      if (inputField) {
        inputField.focus()
      }
      // Scroll to the newest message
      const chatLog = this.shadowRoot.querySelector(".js-chat-log")
      if (chatLog) {
        chatLog.scrollTop = chatLog.scrollHeight
      }
    }, 1000) // Se muestra el mensaje de "Pensando..." al menos un segundo.
  }

  // Renderizado del componente
  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.styles}</style>
      
      
      <div class="js-chat-window bg-white border-gray-200 rounded-xl border p-4 flex-col gap-4 shadow-md text-sm" style="height: 500px; width:400px; display: ${this.isOpen ? "flex" : "none"};">
        <div class="flex justify-between">
          <div>
            ${logo}
          </div>
          <div class="content-center font-bold">
            ${TEMARIO}
          </div>
          <div class="flex gap-2 justify-end">
              <button class="js-erase-btn rounded-full  bg-blue-400 hover:bg-blue-300 active:bg-blue-500 cursor-pointer" style="height: 30px; width: 30px;">
                ${eraserIcon}
              </button>
              <button class="js-close-btn rounded-full bg-gray-50 hover:bg-gray-100 active:bg-gray-200 cursor-pointer" style="height: 30px; width: 30px;">
                x
              </button>
          </div>
        </div>
        <div class="js-chat-log flex flex-col flex-grow gap-4 overflow-y-auto pr-2">
          ${this.messages
            .map(
              (msg) => `<div class="js-message rounded-lg p-2 whitespace-pre-line ${msg.role === 'user'? 'bg-green-200 self-end' : 'bg-blue-100 self-start'}">${msg.content}</div>` 
            )
            .join("")}
        </div>

        <div class="flex flex-row gap-2">
          <textarea type="text" class="js-chat-input bg-gray-100 rounded-lg border border-gray-200 w-full p-2 resize-none" rows="3"  placeholder="Pregunta lo que quieras..."></textarea>
          <button class="js-send-btn bg-blue-400 hover:bg-blue-300 active:bg-blue-500 rounded-lg cursor-pointer" style="width: 60px; ${this.apiPending ? 'opacity:0.5; pointer-events:none' : ''}"
           >
              ${sendIcon}
          </button>
        </div>
      </div>

      <button class="js-toggle-chat-btn rounded-full bg-blue-400 hover:bg-blue-300 active:bg-blue-500 shadow-md color-white cursor-pointer mt-4 float-right" style="width:60px; height:60px;">
          ${ this.isOpen ? closeIcon : chatIcon}
      </button>
    `
  }

  /** Bloque de eventos del componente */

  // Clicar en la burbuja de abrir chat
  handleToggleChatClick(event) {
    event.stopPropagation()
    this.toggleChat()
  }

  // Clicar en el botón de cerrar chat
  handleCloseButtonClick(event) {
    event.stopPropagation()
    this.toggleChat()
  }

  // Clicar en el botón de limpiar chat
  handleEraseButtonClick(event) {
    event.stopPropagation()
    this.messages = [];
    this.render()
    this.addEventListeners()
  }

  // Clicar botón enviar mensaje
  handleSendButtonClick() {
    const inputField = this.shadowRoot.querySelector(".js-chat-input")
    if (inputField.value.trim()) {
      this.sendMessage(inputField.value.trim())
      this.clearAndFocusInput(inputField)
    }
  }

  // Pulsar botón enter para enviar mensaje
  handleInputKeydown(e) {
    const inputField = e.target
    if (e.key === "Enter" && inputField.value.trim()) {
      this.sendMessage(inputField.value.trim())
      this.clearAndFocusInput(inputField)
    }
  }

  // Limpiar datos de la caja de texto
  clearAndFocusInput(inputField) {
    inputField.value = ""
    inputField.focus()
  }

  // Atar los eventos al componente
  addEventListeners() {
    this.shadowRoot
      .querySelector(".js-toggle-chat-btn")
      .addEventListener("click", this.handleToggleChatClick.bind(this))
    this.shadowRoot
      .querySelector(".js-close-btn")
      .addEventListener("click", this.handleCloseButtonClick.bind(this))
    this.shadowRoot
      .querySelector(".js-erase-btn")
      .addEventListener("click", this.handleEraseButtonClick.bind(this))
    this.shadowRoot
      .querySelector(".js-send-btn")
      .addEventListener("click", this.handleSendButtonClick.bind(this))
    this.shadowRoot
      .querySelector(".js-chat-input")
      .addEventListener("keydown", this.handleInputKeydown.bind(this))
  }
}

/*********  Definimos el componente *******/ 

if (!customElements.get("chat-bot")) {
  customElements.define("chat-bot", ChatBot)
}
