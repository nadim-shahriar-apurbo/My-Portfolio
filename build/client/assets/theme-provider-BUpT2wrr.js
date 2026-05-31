import{r as l,j as f}from"./jsx-runtime-DexIYAB0.js";import{c as w,m,t as i,e as r}from"./heading-dwA2ttB9.js";const g="/assets/gotham-bold-italic-C_msAlmW.woff2",p="/assets/gotham-bold-D1kvQ7KV.woff2",k="/assets/gotham-book-italic-Bm2IEtSK.woff2",$="/assets/gotham-book-Bnaws0Ef.woff2",b="/assets/gotham-medium-italic-Dok430ou.woff2",G="/assets/gotham-medium-0VT3RO8I.woff2",c=l.createContext({}),S=({theme:t="dark",children:e,className:h,as:u="div",toggleTheme:d,...y})=>{const s=T(),n=!s.theme;return f.jsxs(c.Provider,{value:{theme:t,toggleTheme:d||s.toggleTheme},children:[n&&e,!n&&f.jsx(u,{className:w(h),"data-theme":t,...y,children:e})]})};function T(){return l.useContext(c)}function o(t){return t.replace(/\s\s+/g," ")}function a(t){return o(Object.keys(t).map(e=>`--${e}: ${t[e]};`).join(`

`))}function x(){return o(Object.keys(m).map(t=>`
        @media (max-width: ${m[t]}px) {
          :root {
            ${a(i[t])}
          }
        }
      `).join(`
`))}const j=o(`
  @layer theme, base, components, layout;
`),v=o(`
  :root {
    ${a(i.base)}
  }

  ${x()}

  [data-theme='dark'] {
    ${a(r.dark)}
  }

  [data-theme='light'] {
    ${a(r.light)}
  }
`),B=o(`
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

`),C=o(`
  ${j}

  @layer theme {
    ${v}
    ${B}
  }
`);export{G,S as T,$ as a,C as t,T as u};
