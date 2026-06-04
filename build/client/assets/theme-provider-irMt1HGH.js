import{r as l,j as n}from"./jsx-runtime-BfF-YriY.js";import{c as w,m as r,t as i,e as m}from"./heading-pjwX8-Fi.js";const g="/My-Portfolio/assets/gotham-bold-italic-C_msAlmW.woff2",p="/My-Portfolio/assets/gotham-bold-D1kvQ7KV.woff2",k="/My-Portfolio/assets/gotham-book-italic-Bm2IEtSK.woff2",$="/My-Portfolio/assets/gotham-book-Bnaws0Ef.woff2",b="/My-Portfolio/assets/gotham-medium-italic-Dok430ou.woff2",G="/My-Portfolio/assets/gotham-medium-0VT3RO8I.woff2",c=l.createContext({}),I=({theme:t="dark",children:e,className:h,as:y="div",toggleTheme:u,...d})=>{const s=T(),f=!s.theme;return n.jsxs(c.Provider,{value:{theme:t,toggleTheme:u||s.toggleTheme},children:[f&&e,!f&&n.jsx(y,{className:w(h),"data-theme":t,...d,children:e})]})};function T(){return l.useContext(c)}function o(t){return t.replace(/\s\s+/g," ")}function a(t){return o(Object.keys(t).map(e=>`--${e}: ${t[e]};`).join(`

`))}function x(){return o(Object.keys(r).map(t=>`
        @media (max-width: ${r[t]}px) {
          :root {
            ${a(i[t])}
          }
        }
      `).join(`
`))}const P=o(`
  @layer theme, base, components, layout;
`),M=o(`
  :root {
    ${a(i.base)}
  }

  ${x()}

  [data-theme='dark'] {
    ${a(m.dark)}
  }

  [data-theme='light'] {
    ${a(m.light)}
  }
`),j=o(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${$}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${k}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${G}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${b}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${p}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${g}) format('woff2');
    font-display: block;
    font-style: italic;
  }

`),S=o(`
  ${P}

  @layer theme {
    ${M}
    ${j}
  }
`);export{G,I as T,$ as a,S as t,T as u};
