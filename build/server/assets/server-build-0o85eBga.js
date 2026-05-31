import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { RemixServer, Link as Link$1, useLocation, useNavigate, useNavigation, useLoaderData, useFetcher, Meta, Links, Outlet, ScrollRestoration, Scripts, useRouteError, useActionData, Form } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";
import { createContext, useContext, forwardRef, useRef, useEffect, useState, memo, Fragment, useCallback, useId, useSyncExternalStore, lazy, Suspense, Children } from "react";
import { useReducedMotion, AnimatePresence, usePresence, useSpring, useInView, motion } from "framer-motion";
import { useMDXComponents, MDXProvider } from "@mdx-js/react";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      signal: request.signal,
      onError(error2) {
        console.error(error2);
        responseStatusCode = 500;
      }
    }
  );
  if (isBotRequest(request.headers.get("user-agent"))) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const GothamBoldItalic = "/assets/gotham-bold-italic-C_msAlmW.woff2";
const GothamBold = "/assets/gotham-bold-D1kvQ7KV.woff2";
const GothamBookItalic = "/assets/gotham-book-italic-Bm2IEtSK.woff2";
const GothamBook = "/assets/gotham-book-Bnaws0Ef.woff2";
const GothamMediumItalic = "/assets/gotham-medium-italic-Dok430ou.woff2";
const GothamMedium = "/assets/gotham-medium-0VT3RO8I.woff2";
const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};
const numToPx = (num) => `${num}px`;
const pxToRem = (px) => `${px / 16}rem`;
const msToNum = (msString) => Number(msString.replace("ms", ""));
const numToMs = (num) => `${num}ms`;
function cssProps(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value2 = props[key];
    if (typeof value2 === "number" && key === "delay") {
      value2 = numToMs(value2);
    }
    if (typeof value2 === "number" && key !== "opacity") {
      value2 = numToPx(value2);
    }
    if (typeof value2 === "number" && key === "opacity") {
      value2 = `${value2 * 100}%`;
    }
    result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
const baseTokens = {
  black: "oklch(0% 0 0)",
  white: "oklch(100% 0 0)",
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  durationXL: "800ms",
  systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
  fontStack: `Gotham, var(--systemFontStack)`,
  monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: "1.1",
  lineHeightBody: "1.6",
  maxWidthS: "540px",
  maxWidthM: "720px",
  maxWidthL: "1096px",
  maxWidthXL: "1680px",
  spaceOuter: "64px",
  spaceXS: "4px",
  spaceS: "8px",
  spaceM: "16px",
  spaceL: "24px",
  spaceXL: "32px",
  space2XL: "48px",
  space3XL: "64px",
  space4XL: "96px",
  space5XL: "128px",
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64
};
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80)
};
const tokensLaptop = {
  maxWidthS: "480px",
  maxWidthM: "640px",
  maxWidthL: "1000px",
  maxWidthXL: "1100px",
  spaceOuter: "48px",
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22)
};
const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20)
};
const tokensMobile = {
  spaceOuter: "24px",
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14)
};
const tokensMobileSmall = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20)
};
const dark = {
  background: "oklch(17.76% 0 0)",
  backgroundLight: "oklch(21.78% 0 0)",
  primary: "oklch(84.42% 0.19 202.24)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(65.91% 0.249 13.76)",
  text: "var(--white)",
  textTitle: "var(--text)",
  textBody: "color-mix(in lab, var(--text) 80%, transparent)",
  textLight: "color-mix(in lab, var(--text) 60%, transparent)"
};
const light = {
  background: "oklch(96.12% 0 0)",
  backgroundLight: "var(--white)",
  primary: "var(--black)",
  accent: "oklch(84.42% 0.19 202.24)",
  error: "oklch(63.17% 0.259 25.41)",
  text: "var(--black)",
  textTitle: "color-mix(in lab, var(--text) 90%, transparent)",
  textBody: "color-mix(in lab, var(--text) 75%, transparent)",
  textLight: "color-mix(in lab, var(--text) 55%, transparent)"
};
const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall
};
const themes = { dark, light };
const ThemeContext = createContext({});
const ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ jsxs(
    ThemeContext.Provider,
    {
      value: {
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme
      },
      children: [
        isRootProvider && children,
        !isRootProvider && /* @__PURE__ */ jsx(Component, { className: classes(className), "data-theme": theme, ...rest, children })
      ]
    }
  );
};
function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
function squish(styles2) {
  return styles2.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n")
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    }).join("\n")
  );
}
const layerStyles = squish(`
  @layer theme, base, components, layout;
`);
const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);
const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

`);
const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
const skullImage = "/assets/skull-CtPa4SfV.png";
const icon$2 = "_icon_1tdl1_2";
const styles$N = {
  icon: icon$2
};
const sprites = "/assets/icons-BJN5pDMV.svg";
const Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": true,
      ref,
      className: classes(styles$N.icon, className),
      width: size || 24,
      height: size || 24,
      ...rest,
      children: /* @__PURE__ */ jsx("use", { href: `${sprites}#${icon2}` })
    }
  );
});
const text$5 = "_text_13dm1_2";
const styles$M = {
  text: text$5
};
const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$M.text, className),
      "data-align": align,
      "data-size": size,
      "data-weight": weight,
      "data-secondary": secondary,
      ...rest,
      children
    }
  );
};
const loader$6 = "_loader_1o1zt_2";
const text$4 = "_text_1o1zt_17";
const span = "_span_1o1zt_43";
const loaderSpan = "_loaderSpan_1o1zt_1";
const styles$L = {
  loader: loader$6,
  text: text$4,
  span,
  loaderSpan
};
const Loader = forwardRef(
  ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
      return /* @__PURE__ */ jsx(Text, { className: classes(styles$L.text, className), weight: "medium", ...rest, children: text2 });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes(styles$L.loader, className),
        "data-center": center,
        style: cssProps({ width, height }, style),
        ...rest,
        children: /* @__PURE__ */ jsx("div", { className: styles$L.span })
      }
    );
  }
);
const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();
  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx(
    TransitionContent,
    {
      enterTimeout,
      exitTimeout,
      in: show,
      initial,
      ...props,
      children
    }
  ) });
};
const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show
}) => {
  const [status, setStatus] = useState(initial ? "exited" : "entered");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === "object";
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;
  useEffect(() => {
    var _a;
    if (hasEntered || !show)
      return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus("entering");
    onEnter == null ? void 0 : onEnter();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    enterTimeout.current = setTimeout(() => {
      setStatus("entered");
      onEntered == null ? void 0 : onEntered();
    }, actualTimeout);
  }, [onEnter, onEntered, timeout, status, show]);
  useEffect(() => {
    var _a;
    if (isPresent && show)
      return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus("exiting");
    onExit == null ? void 0 : onExit();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    exitTimeout.current = setTimeout(() => {
      setStatus("exited");
      safeToRemove == null ? void 0 : safeToRemove();
      onExited == null ? void 0 : onExited();
    }, actualTimeout);
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children({ visible, status, nodeRef });
};
const button$7 = "_button_1l2e3_2";
const text$3 = "_text_1l2e3_132";
const loader$5 = "_loader_1l2e3_145";
const icon$1 = "_icon_1l2e3_158";
const styles$K = {
  button: button$7,
  text: text$3,
  loader: loader$5,
  icon: icon$1
};
function isExternalLink(href) {
  return href == null ? void 0 : href.includes("://");
}
const Button = forwardRef(({ href, ...rest }, ref) => {
  if (isExternalLink(href) || !href) {
    return /* @__PURE__ */ jsx(ButtonContent, { href, ref, ...rest });
  }
  return /* @__PURE__ */ jsx(
    ButtonContent,
    {
      unstable_viewTransition: true,
      as: Link$1,
      prefetch: "intent",
      to: href,
      ref,
      ...rest
    }
  );
});
const ButtonContent = forwardRef(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon: icon2,
    iconEnd,
    iconHoverShift,
    iconOnly,
    children,
    rel,
    target,
    href,
    disabled,
    ...rest
  }, ref) => {
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /* @__PURE__ */ jsxs(
      Component,
      {
        className: classes(styles$K.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon2,
        href,
        rel: rel || isExternal ? "noopener noreferrer" : void 0,
        target: target || isExternal ? "_blank" : void 0,
        disabled,
        ref,
        ...rest,
        children: [
          !!icon2 && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$K.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon: icon2
            }
          ),
          !!children && /* @__PURE__ */ jsx("span", { className: styles$K.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$K.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(
            Loader,
            {
              ref: nodeRef,
              className: styles$K.loader,
              size: 32,
              text: loadingText,
              "data-visible": visible
            }
          ) })
        ]
      }
    );
  }
);
const hidden = "_hidden_1mhmf_2";
const styles$J = {
  hidden
};
const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: classes(styles$J.hidden, className),
        "data-hidden": !visible && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref,
        ...rest,
        children
      }
    );
  }
);
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text$2 = "_text_br4aq_2";
const glyph = "_glyph_br4aq_9";
const value = "_value_br4aq_16";
const styles$I = {
  text: text$2,
  glyph,
  value
};
const glyphs = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  "\\",
  ":",
  ";",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/"
];
const CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content2, output, position) {
  return content2.map((value2, index2) => {
    if (value2 === " ") {
      return { type: CharType.Value, value: " " };
    }
    if (index2 < position) {
      return { type: CharType.Value, value: value2 };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    const prevChar = output[index2];
    return { type: CharType.Glyph, value: prevChar ? prevChar.value : value2 };
  });
}
const DecoderText = memo(
  ({ text: text2, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: "" }]);
    const container2 = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    useEffect(() => {
      const containerInstance = container2.current;
      const content2 = text2.split("");
      let animation;
      const renderOutput = () => {
        const characterMap = output.current.map((item2) => {
          return `<span class="${styles$I[item2.type]}">${item2.value}</span>`;
        });
        containerInstance.innerHTML = characterMap.join("");
      };
      const unsubscribeSpring = decoderSpring.on("change", (value2) => {
        output.current = shuffle(content2, output.current, value2);
        renderOutput();
      });
      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content2.length);
      };
      if (start && !animation && !reduceMotion) {
        startSpring();
      }
      if (reduceMotion) {
        output.current = content2.map((value2, index2) => ({
          type: CharType.Value,
          value: content2[index2]
        }));
        renderOutput();
      }
      return () => {
        unsubscribeSpring == null ? void 0 : unsubscribeSpring();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text2]);
    return /* @__PURE__ */ jsxs("span", { className: classes(styles$I.text, className), ...rest, children: [
      /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$I.label, children: text2 }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: styles$I.content, ref: container2 })
    ] });
  }
);
const heading$4 = "_heading_e2qtd_2";
const styles$H = {
  heading: heading$4
};
const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$H.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};
const page = "_page_memxv_2";
const videoContainer = "_videoContainer_memxv_22";
const video = "_video_memxv_22";
const credit = "_credit_memxv_78";
const details$5 = "_details_memxv_102";
const text$1 = "_text_memxv_115";
const title$h = "_title_memxv_122";
const titleFlatline = "_titleFlatline_memxv_123";
const subheading = "_subheading_memxv_155";
const description$g = "_description_memxv_185";
const button$6 = "_button_memxv_204";
const styles$G = {
  page,
  videoContainer,
  video,
  credit,
  details: details$5,
  text: text$1,
  title: title$h,
  titleFlatline,
  subheading,
  description: description$g,
  button: button$6
};
function useFormInput(initialValue = "") {
  const [value2, setValue] = useState(initialValue);
  const [error2, setError] = useState();
  const [isDirty, setIsDirty] = useState(false);
  const handleChange = (event) => {
    setValue(event.target.value);
    setIsDirty(true);
    if (error2 && event.target.checkValidity()) {
      setError(null);
    }
  };
  const handleInvalid = (event) => {
    event.preventDefault();
    setError(event.target.validationMessage);
  };
  const handleBlur = (event) => {
    if (isDirty) {
      event.target.checkValidity();
    }
  };
  return {
    value: value2,
    error: error2,
    onChange: handleChange,
    onBlur: handleBlur,
    onInvalid: handleInvalid
  };
}
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function useInterval(callback, delay2, reset) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay2 !== null) {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
function useInViewport(elementRef, unobserveOnIntersect, options = {}, shouldObserve = true) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  useEffect(() => {
    if (!(elementRef == null ? void 0 : elementRef.current))
      return;
    const observer = new IntersectionObserver(([entry2]) => {
      const { isIntersecting, target } = entry2;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]);
  return intersect;
}
function useParallax(multiplier, onChange) {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    let ticking = false;
    let animationFrame = null;
    const animate = () => {
      const { innerHeight } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };
    if (!reduceMotion) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
function usePrevious(value2) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value2;
  }, [value2]);
  return ref.current;
}
function useScrollToHash() {
  const scrollTimeout = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);
          if (window.location.pathname === location.pathname) {
            onDone == null ? void 0 : onDone();
            navigate(`${location.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
  return scrollToHash;
}
function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));
  const createRuler = useCallback(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = useCallback(() => {
    const isIOS = navigator == null ? void 0 : navigator.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = useState(dimensions.current);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }
      let tempImage = new Image();
      if (src) {
        tempImage.src = src;
      }
      if (srcSet) {
        tempImage.srcset = srcSet;
      }
      if (sizes) {
        tempImage.sizes = sizes;
      }
      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error2) {
      reject(`Error loading ${srcSet}: ${error2}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    canvas.toBlob(async (blob) => {
      if (!blob)
        throw new Error("Video thumbnail failed to load");
      const image2 = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image2);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width.replace("w", ""));
      const image2 = await generateImage(size);
      return { src, image: image2, width };
    })
  );
  const fakeSrcSet = sources.map(({ image: image2, width }) => `${image2} ${width}`).join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  const output = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
const image$5 = "_image_4szht_2";
const container$5 = "_container_4szht_42";
const elementWrapper = "_elementWrapper_4szht_49";
const placeholder = "_placeholder_4szht_71";
const element = "_element_4szht_49";
const button$5 = "_button_4szht_104";
const styles$F = {
  image: image$5,
  container: container$5,
  elementWrapper,
  placeholder,
  element,
  button: button$5
};
const Image$1 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder: placeholder2,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet.split(" ")[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes(styles$F.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder: placeholder2,
          ...rest
        }
      )
    }
  );
};
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder: placeholder2,
  delay: delay2,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  useEffect(() => {
    if (!videoRef.current || !videoSrc)
      return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted)
      return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$F.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              muted: true,
              loop: true,
              playsInline: true,
              className: styles$F.element,
              "data-loaded": loaded,
              "data-cover": cover,
              autoPlay: !reduceMotion,
              onLoadStart: onLoad,
              src: videoSrc,
              "aria-label": alt,
              ref: videoRef,
              ...rest
            }
          ),
          !noPauseButton && /* @__PURE__ */ jsxs(Button, { className: styles$F.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx(
          "img",
          {
            className: styles$F.element,
            "data-loaded": loaded,
            "data-cover": cover,
            onLoad,
            decoding: "async",
            src: showFullRes ? src : void 0,
            srcSet: showFullRes ? srcSet : void 0,
            width,
            height,
            alt,
            sizes,
            ...rest
          }
        ),
        showPlaceholder && /* @__PURE__ */ jsx(
          "img",
          {
            "aria-hidden": true,
            className: styles$F.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder2,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(false),
            decoding: "async",
            loading: "lazy",
            alt: "",
            role: "presentation"
          }
        )
      ]
    }
  );
};
function getIsVideo(src) {
  return typeof src === "string" && src.includes(".mp4");
}
const flatlineSkull = "/assets/error-flatline-eK98OAAk.svg";
function Error$1({ error: error2 }) {
  const flatlined = !error2.status;
  const getMessage = () => {
    switch (error2.status) {
      case 404:
        return {
          summary: "Error: redacted",
          message: "This page could not be found. It either doesn’t exist or was deleted. Or perhaps you don’t exist and this webpage couldn’t find you."
        };
      case 405:
        return {
          summary: "Error: method denied",
          message: error2.data
        };
      default:
        return {
          summary: "Error: anomaly",
          message: error2.statusText || error2.data || error2.toString()
        };
    }
  };
  const { summary: summary2, message } = getMessage();
  return /* @__PURE__ */ jsxs("section", { className: styles$G.page, children: [
    flatlined && /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: oklch(69.27% 0.242 25.41);
              --accent: oklch(69.27% 0.242 25.41);
            }
            [data-theme='light'] {
              --primary: oklch(56.29% 0.182 26.5);
              --accent: oklch(56.29% 0.182 26.5);
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsx(Transition, { in: true, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("div", { className: styles$G.details, children: /* @__PURE__ */ jsxs("div", { className: styles$G.text, children: [
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$G.title,
            "data-visible": visible,
            level: 0,
            weight: "bold",
            children: error2.status
          }
        ),
        flatlined && /* @__PURE__ */ jsxs(
          Heading,
          {
            className: styles$G.titleFlatline,
            "data-visible": visible,
            level: 2,
            as: "h1",
            children: [
              /* @__PURE__ */ jsx("svg", { width: "60", height: "80", viewBox: "0 0 60 80", children: /* @__PURE__ */ jsx("use", { href: `${flatlineSkull}#skull` }) }),
              /* @__PURE__ */ jsx(DecoderText, { text: "Flatlined", start: visible, delay: 300 })
            ]
          }
        ),
        !flatlined && /* @__PURE__ */ jsx(
          Heading,
          {
            "aria-hidden": true,
            className: styles$G.subheading,
            "data-visible": visible,
            as: "h2",
            level: 4,
            children: /* @__PURE__ */ jsx(DecoderText, { text: summary2, start: visible, delay: 300 })
          }
        ),
        /* @__PURE__ */ jsx(Text, { className: styles$G.description, "data-visible": visible, as: "p", children: message }),
        flatlined ? /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$G.button,
            "data-visible": visible,
            href: "https://www.youtube.com/watch?v=EuQzHGcsjlA",
            icon: "chevron-right",
            children: "Emotional support"
          }
        ) : /* @__PURE__ */ jsx(
          Button,
          {
            secondary: true,
            iconHoverShift: true,
            className: styles$G.button,
            "data-visible": visible,
            href: "/",
            icon: "chevron-right",
            children: "Back to homepage"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: styles$G.videoContainer, "data-visible": visible, children: /* @__PURE__ */ jsx(
        Image$1,
        {
          reveal: true,
          cover: true,
          noPauseButton: true,
          delay: 600,
          className: styles$G.video,
          src: skullImage,
          placeholder: skullImage
        }
      ) })
    ] }) })
  ] });
}
const monogram = "_monogram_lq2gh_2";
const housePart = "_housePart_lq2gh_7";
const door = "_door_lq2gh_7";
const homeHover = "_homeHover_lq2gh_1";
const styles$E = {
  monogram,
  housePart,
  door,
  homeHover
};
const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": true,
      className: classes(styles$E.monogram, className),
      width: "48",
      height: "48",
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$E.housePart,
            d: "M3 10.5L12 3L21 10.5",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$E.housePart,
            d: "M5 9.5V20H19V9.5",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$E.door,
            d: "M10 20V14H14V20",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      ]
    }
  );
});
const toggle$1 = "_toggle_1lvbt_2";
const inner = "_inner_1lvbt_17";
const icon = "_icon_1lvbt_25";
const styles$D = {
  toggle: toggle$1,
  inner,
  icon
};
const NavToggle = ({ menuOpen, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$D.toggle,
      "aria-label": "Menu",
      "aria-expanded": menuOpen,
      ...rest,
      children: /* @__PURE__ */ jsxs("div", { className: styles$D.inner, children: [
        /* @__PURE__ */ jsx(Icon, { className: styles$D.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }),
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: styles$D.icon,
            "data-close": true,
            "data-open": menuOpen,
            icon: "close"
          }
        )
      ] })
    }
  );
};
const toggle = "_toggle_1phd7_2";
const circle = "_circle_1phd7_29";
const mask = "_mask_1phd7_54";
const path = "_path_1phd7_72";
const styles$C = {
  toggle,
  circle,
  mask,
  path
};
const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$C.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": true, className: styles$C.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx("circle", { className: styles$C.circle, "data-mask": true, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx("circle", { className: styles$C.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$C.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: styles$C.circle,
            mask: `url(#${maskId})`,
            cx: "19",
            cy: "19",
            r: "12"
          }
        )
      ] })
    }
  );
};
const name$2 = "Nadim Shahriar";
const role = "Programming";
const disciplines = [
  "Web Development",
  "Robotics",
  "Programming",
  "UAV Technology"
];
const url$1 = "https://hamishw.com";
const profile$1 = "https://profile.arionys.com/nadimshahriar";
const linkedin = "https://www.linkedin.com/in/nadim-shahriar-apurbo-9508692a9/";
const github = "nadim-shahriar-apurbo";
const repo = "https://github.com/nadim-shahriar-apurbo/portfolio";
const ascii = "\\ \\      \\ \\\n\\ \\ \\    \\ \\\n\\ \\  \\   \\ \\\n\\ \\   \\  \\ \\\n\\ \\    \\ \\ \\\n";
const config = {
  name: name$2,
  role,
  disciplines,
  url: url$1,
  profile: profile$1,
  linkedin,
  github,
  repo,
  ascii
};
const navLinks = [
  {
    label: "About",
    pathname: "/#details"
  },
  {
    label: "Skills",
    pathname: "/#skills"
  },
  {
    label: "Projects",
    pathname: "/#project-1"
  },
  {
    label: "Achievements",
    pathname: "/#achievements"
  },
  {
    label: "Articles",
    pathname: "/articles"
  },
  {
    label: "Contact",
    pathname: "/contact"
  }
];
const socialLinks = [
  {
    label: "Profile",
    url: config.profile,
    icon: "user"
  },
  {
    label: "LinkedIn",
    url: config.linkedin,
    icon: "linkedin"
  },
  {
    label: "Github",
    url: `https://github.com/${config.github}`,
    icon: "github"
  }
];
const navbar = "_navbar_jy424_2";
const logo = "_logo_jy424_29";
const nav = "_nav_jy424_2";
const navList = "_navList_jy424_53";
const navLink = "_navLink_jy424_61";
const navIcons = "_navIcons_jy424_104";
const navIconLink = "_navIconLink_jy424_128";
const navIcon = "_navIcon_jy424_104";
const mobileNav = "_mobileNav_jy424_149";
const mobileNavLink = "_mobileNavLink_jy424_179";
const styles$B = {
  navbar,
  logo,
  nav,
  navList,
  navLink,
  navIcons,
  navIconLink,
  navIcon,
  mobileNav,
  mobileNavLink
};
const Navbar = () => {
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const { theme } = useTheme();
  const location = useLocation();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();
  useEffect(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);
  useEffect(() => {
    if (location.pathname !== "/")
      return;
    const sections = document.querySelectorAll(
      navLinks.map((link2) => link2.pathname.split("#")[1]).filter(Boolean).map((id) => `#${id}`).join(", ")
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            setCurrent(`/#${entry2.target.id}`);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );
    sections.forEach((section2) => observer.observe(section2));
    return () => observer.disconnect();
  }, [location.pathname]);
  useEffect(() => {
    if (!target || location.pathname !== "/")
      return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);
  useEffect(() => {
    const navItems = document.querySelectorAll("[data-navbar-item]");
    const inverseTheme = theme === "dark" ? "light" : "dark";
    const { innerHeight } = window;
    let inverseMeasurements = [];
    let navItemMeasurements = [];
    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };
    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = "";
      }
    };
    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );
      if (!invertedElements)
        return;
      inverseMeasurements = Array.from(invertedElements).map((item2) => ({
        element: item2,
        top: item2.offsetTop,
        bottom: item2.offsetTop + item2.offsetHeight
      }));
      const { scrollY } = window;
      resetNavTheme();
      for (const inverseMeasurement of inverseMeasurements) {
        if (inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0) {
          continue;
        }
        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = "";
          }
        }
      }
    };
    if (theme === "light") {
      navItemMeasurements = Array.from(navItems).map((item2) => {
        const rect = item2.getBoundingClientRect();
        return {
          element: item2,
          top: rect.top,
          bottom: rect.bottom
        };
      });
      document.addEventListener("scroll", handleInversion);
      handleInversion();
    }
    return () => {
      document.removeEventListener("scroll", handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location.key]);
  const getCurrent = (url2 = "") => {
    const nonTrailing = (current == null ? void 0 : current.endsWith("/")) ? current == null ? void 0 : current.slice(0, -1) : current;
    if (url2 === nonTrailing) {
      return "page";
    }
    return "";
  };
  const handleNavItemClick = (event) => {
    const hash = event.currentTarget.href.split("#")[1];
    setTarget(null);
    if (hash && location.pathname === "/") {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };
  const handleMobileNavClick = (event) => {
    handleNavItemClick(event);
    if (menuOpen)
      setMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: styles$B.navbar, ref: headerRef, children: [
    /* @__PURE__ */ jsx(
      Link$1,
      {
        unstable_viewTransition: true,
        prefetch: "intent",
        to: location.pathname === "/" ? "/#intro" : "/",
        "data-navbar-item": true,
        className: styles$B.logo,
        "aria-label": `${config.name}, ${config.role}`,
        onClick: handleMobileNavClick,
        children: /* @__PURE__ */ jsx(Monogram, { highlight: true })
      }
    ),
    /* @__PURE__ */ jsx(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs("nav", { className: styles$B.nav, children: [
      /* @__PURE__ */ jsx("div", { className: styles$B.navList, children: navLinks.map(({ label: label2, pathname }) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          "data-navbar-item": true,
          className: styles$B.navLink,
          "aria-current": getCurrent(pathname),
          onClick: handleNavItemClick,
          children: label2
        },
        label2
      )) }),
      /* @__PURE__ */ jsx(NavbarIcons, { desktop: true })
    ] }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("nav", { className: styles$B.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(({ label: label2, pathname }, index2) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          className: styles$B.mobileNavLink,
          "data-visible": visible,
          "aria-current": getCurrent(pathname),
          onClick: handleMobileNavClick,
          style: cssProps({
            transitionDelay: numToMs(
              Number(msToNum(tokens.base.durationS)) + index2 * 50
            )
          }),
          children: label2
        },
        label2
      )),
      /* @__PURE__ */ jsx(NavbarIcons, {}),
      /* @__PURE__ */ jsx(ThemeToggle, { isMobile: true })
    ] }) }),
    !isMobile && /* @__PURE__ */ jsx(ThemeToggle, { "data-navbar-item": true })
  ] });
};
const NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx("div", { className: styles$B.navIcons, children: socialLinks.map(({ label: label2, url: url2, icon: icon2 }) => /* @__PURE__ */ jsx(
  "a",
  {
    "data-navbar-item": desktop || void 0,
    className: styles$B.navIconLink,
    "aria-label": label2,
    href: url2,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /* @__PURE__ */ jsx(Icon, { className: styles$B.navIcon, icon: icon2 })
  },
  label2
)) });
const progress = "_progress_3typo_2";
const styles$A = {
  progress
};
function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);
  useEffect(() => {
    clearTimeout(timeout.current);
    if (state !== "idle") {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);
  useEffect(() => {
    if (!progressRef.current)
      return;
    const controller = new AbortController();
    if (state !== "idle") {
      return setAnimationComplete(false);
    }
    Promise.all(
      progressRef.current.getAnimations({ subtree: true }).map((animation) => animation.finished)
    ).then(() => {
      if (controller.signal.aborted)
        return;
      setAnimationComplete(true);
    });
    return () => {
      controller.abort();
    };
  }, [state]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles$A.progress,
      "data-status": state,
      "data-visible": visible,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}
const container$4 = "_container_j3vhn_2";
const skip = "_skip_j3vhn_12";
const styles$z = {
  container: container$4,
  skip
};
const reset_module = {};
const global_module = {};
const links$1 = () => [
  {
    rel: "preload",
    href: GothamMedium,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: GothamBook,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "shortcut_icon", href: "/shortcut.png", type: "image/png", sizes: "64x64" },
  { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" },
  { rel: "author", href: "/humans.txt", type: "text/plain" }
];
const loader$4 = async ({ request, context }) => {
  const { url: url2 } = request;
  const { pathname } = new URL(url2);
  const pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2;
  const canonicalUrl = `${config.url}${pathnameSliced}`;
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  const theme = session.get("theme") || "dark";
  return json(
    { canonicalUrl, theme },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
};
function App() {
  var _a;
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();
  if ((_a = fetcher.formData) == null ? void 0 : _a.has("theme")) {
    theme = fetcher.formData.get("theme");
  }
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === "dark" ? "light" : "dark" },
      { action: "/api/set-theme", method: "post" }
    );
  }
  useEffect(() => {
    console.info(
      `${config.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config.repo}

`
    );
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx(Progress, {}),
        /* @__PURE__ */ jsx(VisuallyHidden, { showOnFocus: true, as: "a", className: styles$z.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx(
          "main",
          {
            id: "main-content",
            className: styles$z.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary$1() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ jsx(Error$1, { error: error2 }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: App,
  links: links$1,
  loader: loader$4
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = {
  "title": "You (probably) don't need CSS-in-JS",
  "abstract": "Vanilla CSS is good now actually. Here's a couple nifty techniques for dynamically styling React components with CSS custom properties.",
  "date": "2022-05-01",
  "banner": "/static/modern-styling-in-react-banner.jpg",
  "featured": true
};
function _createMdxContent$1(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  }, { Embed: Embed2 } = _components;
  if (!Embed2)
    _missingMdxReference("Embed", true);
  return jsxs(Fragment$1, {
    children: [jsxs(_components.p, {
      children: ["When I first tried CSS-in-JS libraries like ", jsx(_components.a, {
        href: "https://styled-components.com/",
        children: "Styled Components"
      }), " and ", jsx(_components.a, {
        href: "https://emotion.sh",
        children: "Emotion"
      }), ", the thing that felt right about it was passing values or state directly into the styles for a component. It really closed the loop with the concept of React where the UI is a function of state. While this was a definite advancement over the traditional way of styling React with classes and pre-processed CSS, it still had its problems."]
    }), "\n", jsx(_components.p, {
      children: "To highlight some examples, I'll break down some typical examples using two main types of dynamic styles you'll run into with React components:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Values:"
        }), " like a color, delay, or position. Anything that represents a single value for a CSS property."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "States:"
        }), " like a primary button variant, or a loading state each having their own set of associated styles."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "where-we-are-today",
      children: "Where we are today"
    }), "\n", jsxs(_components.p, {
      children: ["Before we get started, for comparison I'll be using SCSS (with ", jsx(_components.a, {
        href: "https://css-tricks.com/bem-101/",
        children: "BEM syntax"
      }), ") and Styled Components in my examples for how styling is typically approached in React. I won't cover CSS-in-JS libraries that deal with writing CSS as JavaScript objects. I think there are already good solutions out there (I'd recommend ", jsx(_components.a, {
        href: "https://vanilla-extract.style/",
        children: "Vanilla Extract"
      }), ") if you prefer having type checking and living more fully on the JavaScript side of things. My solution is more for those of us that like writing CSS as CSS, but want to respond to the reactivity and state of components in a better way."]
    }), "\n", jsxs(_components.p, {
      children: ["If you're already familiar with the problem, ", jsx(_components.a, {
        href: "#theres-a-better-way-vanilla-css",
        children: "skip to the solution"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "values",
      children: "Values"
    }), "\n", jsxs(_components.p, {
      children: ["Using vanilla CSS, or pre-processed CSS by means of LESS or SCSS, the traditional way of passing a ", jsx(_components.em, {
        children: "value"
      }), " to your styles on was to just use inline styles. So if we have a button component that allows a color, it would look something like this:"]
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token literal-property property",
              children: "backgroundColor"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "The problem with this approach is that it brings with it all the problems of inline styles. It now has higher specificity making it harder to override, and the styles aren't co-located with the rest of our button styles."
    }), "\n", jsx(_components.p, {
      children: "CSS-in-JS (in the case of Styled Components or Emotion) solved this problem by allowing dynamic values like this to be directly as props"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token comment",
          children: "// We can pass the `color` value into the styled component as a prop"
        }), "\n", jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "color"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "color", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n", jsx(_components.span, {
          className: "token comment",
          children: "// The syntax is a little funky, but now in the styled component's styles"
        }), "\n", jsx(_components.span, {
          className: "token comment",
          children: "// we can use its props as a function"
        }), "\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs(_components.span, {
            className: "token css language-css",
            children: ["\n  ", jsx(_components.span, {
              className: "token property",
              children: "border"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "0"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "4"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "8"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "12"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "14"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "background-color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "color"
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n"]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.h3, {
      id: "states",
      children: "States"
    }), "\n", jsx(_components.p, {
      children: "Traditionally, we'd use css classes and concatenate strings. This always felt messy and clunky, but it works nicely on the css side, particularly if you're using a naming convention like BEM along with a pre-processors. Say we have small, medium, and large button sizes, and a primary variant, it might look something like this:"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), "\n      ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token string",
              children: "'button'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ","
            }), " ", jsxs(_components.span, {
              className: "token template-string",
              children: [jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              }), jsx(_components.span, {
                className: "token string",
                children: "button--"
              }), jsxs(_components.span, {
                className: "token interpolation",
                children: [jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "${"
                }), "size", jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "}"
                })]
              }), jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              })]
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ","
            }), " primary ", jsx(_components.span, {
              className: "token operator",
              children: "?"
            }), " ", jsx(_components.span, {
              className: "token string",
              children: "'button--primary'"
            }), " ", jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token keyword null nil",
              children: "null"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            }), "\n        ", jsx(_components.span, {
              className: "token punctuation",
              children: "."
            }), jsx(_components.span, {
              className: "token method function property-access",
              children: "filter"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "("
            }), jsx(_components.span, {
              className: "token known-class-name class-name",
              children: "Boolean"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ")"
            }), "\n        ", jsx(_components.span, {
              className: "token punctuation",
              children: "."
            }), jsx(_components.span, {
              className: "token method function property-access",
              children: "join"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "("
            }), jsx(_components.span, {
              className: "token string",
              children: "' '"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ")"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), "\n      ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token literal-property property",
              children: "backgroundColor"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), "\n    ", jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-scss",
      children: jsxs(_components.code, {
        className: "language-scss",
        children: [jsx(_components.span, {
          className: "token selector",
          children: ".button "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "4"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--primary "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token variable",
          children: "$primary-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--small "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "30"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--medium "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "40"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--large "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "60"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "The SCSS is looking nice and clean. I've always liked the pattern of using nesting to concatenate elements and modifiers in SCSS using the BEM syntax."
    }), "\n", jsxs(_components.p, {
      children: ["Our JSX, however, isn't faring so well. That string concatenation on the ", jsx(_components.code, {
        children: "className"
      }), " in the is a mess. The size property isn't too bad, because we're appending the value directly onto the class. The primary variant though... yuck. Not to mention the wacky ", jsx(_components.code, {
        children: "filter(Boolean)"
      }), " in there to prevent a double space in the class list for non-primary buttons. There are better ways of handling this, for example the ", jsx(_components.code, {
        children: "classnames"
      }), " package on NPM. But they only make the problem marginally more bearable."]
    }), "\n", jsx(_components.p, {
      children: "Unlike dynamic values, Styled Components is still a bit cumbersome in dealing with states"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "color"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "color", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs(_components.span, {
            className: "token css language-css",
            children: ["\n  ", jsx(_components.span, {
              className: "token property",
              children: "border"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "0"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "4"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "8"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "12"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "14"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "background-color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "whitesmoke"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "primary"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " $primary-color", jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\n\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx(_components.span, {
                className: "token string",
                children: "'small'"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "30"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\n\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx(_components.span, {
                className: "token string",
                children: "'medium'"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "40"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\n\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx(_components.span, {
                className: "token string",
                children: "'large'"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "60"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\n"]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["It's not ", jsx(_components.em, {
        children: "terrible"
      }), ", but the repeated functions to grab props gets repetitive and makes reading styles quite noisy. It can also get way worse depending on the type of state. If you have separate but mutually exclusive states sometimes it calls for a ternary expression that can end up looking even more convoluted and difficult to parse."]
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs(_components.span, {
            className: "token css language-css",
            children: ["\n  ", jsx(_components.span, {
              className: "token property",
              children: "border"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "0"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "4"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "8"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "12"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "14"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n  ", jsx(_components.span, {
              className: "token property",
              children: "color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\n\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), "\n    props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "primary"
              }), "\n      ", jsx(_components.span, {
                className: "token operator",
                children: "?"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "60"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token color",
                    children: "darkslateblue"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n        "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), "\n      ", jsx(_components.span, {
                className: "token operator",
                children: ":"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "40"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token color",
                    children: "whitesmoke"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\n        "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\n"]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "If you're using Prettier for code formatting like I do, you'll end up with a monstrosity like you see above. Monstrosity is a strong way of putting it, but I find the indentation and formatting really difficult to read."
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.h2, {
      id: "theres-a-better-way-vanilla-css",
      children: "There's a better way: vanilla CSS"
    }), "\n", jsx(_components.p, {
      children: "The solution was with us all along: CSS custom properties (AKA CSS variables). Well, not really. When the methods I've covered above were established, CSS custom properties weren't that well supported by browsers. Support these days is pretty much green across the board (unless you still need to support ie11)."
    }), "\n", jsxs(_components.p, {
      children: ["After making the journey through using SCSS to Styled Components, I've come full circle back to vanilla CSS. I feel like there's an emerging trend of sticking more to platform standards with frameworks like Remix and Deno adhering closer to web standards instead of doing their own thing. I think this will happen with CSS as well, we won't need to reach for pre-processors and CSS-in-JS libraries as much because the native features are becoming ", jsx(_components.em, {
        children: "better"
      }), " than what they have to offer."]
    }), "\n", jsx(_components.p, {
      children: "That being said, here's how I've approached styling React components with vanilla CSS. Well, mostly vanilla CSS. I'm using postcss to get support some up and coming features like native nesting and custom media queries. The beauty of postcss is that as browsers support new features, the tooling slowly melts away."
    }), "\n", jsx(_components.h3, {
      id: "values-1",
      children: "Values"
    }), "\n", jsx(_components.p, {
      children: "A really neat trick I've found for passing values into css is using custom properties. It's pretty simple, we can just drop variables into the style property and it works."
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token string-property property",
              children: "'--color'"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "4"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "var"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token variable",
          children: "--color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: [`Now you might be thinking "isn't this just inline styles with extra steps?", and while we are using inline styles to apply the variable, it doesn't come with the same downsides. For one, there's no specificity issue because we're declaring the property under the `, jsx(_components.code, {
        children: ".button"
      }), " selector in the css file. Secondly, all our styles are co-located, it's just the value of the custom property that's being passed down."]
    }), "\n", jsx(_components.p, {
      children: "This also makes it really convenient when working with properties like transforms or clip-paths where you only need to dynamically control one piece of the value"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token comment",
          children: "// All we need to pass is the value needed by the transform, rather than"
        }), "\n", jsx(_components.span, {
          className: "token comment",
          children: "// polluting our jsx with the full transform in the inline style"
        }), "\n", jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " offset", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token string-property property",
              children: "'--offset'"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " ", jsxs(_components.span, {
              className: "token template-string",
              children: [jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              }), jsxs(_components.span, {
                className: "token interpolation",
                children: [jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "${"
                }), "offset", jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "}"
                })]
              }), jsx(_components.span, {
                className: "token string",
                children: "px"
              }), jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              })]
            }), " ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "transform"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "translate3d"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "var"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token variable",
          children: "--offset"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: [`There's way more you can do with CSS custom properties, like setting defaults and allowing overrides from the cascade for any components that compose one another to hook into, like a "CSS API". `, jsx(_components.a, {
        href: "https://lea.verou.me/2021/10/custom-properties-with-defaults/",
        children: "This article from Lea Verou"
      }), " does a great job at explaining this technique."]
    }), "\n", jsx(_components.h3, {
      id: "states-1",
      children: "States"
    }), "\n", jsxs(_components.p, {
      children: ["The best way I've found to deal with component states and variants with vanilla CSS is using data attributes. What I like about this is that it pairs nicely with the upcoming native CSS nesting syntax. The old technique of targeting BEM modifiers with ", jsx(_components.code, {
        children: "&--modifier"
      }), " doesn't work like it does in pre-processors. But with data attributes, we get similar ergonomics"]
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "data-size"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "size", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "data-primary"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "primary", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "4"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-primary"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'true'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "var"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token variable",
          children: "--colorPrimary"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'small'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "30"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'medium'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "40"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'large'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "60"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "Have a play with the example button component here:"
    }), "\n", jsx(Embed2, {
      src: "https://stackblitz.com/edit/vitejs-vite-mjs1oh?embed=1&file=src/Button/Button.jsx"
    }), "\n", jsxs(_components.p, {
      children: ["This looks similar to how modifiers are written using BEM syntax. It's also much more straightforward and easy to read than the Styled Components function syntax. The one downside is that we do gain a level of specificity that we don't with BEM modifiers using the ", jsx(_components.code, {
        children: "&--modifier"
      }), " pattern, but I think that's an acceptable tradeoff."]
    }), "\n", jsxs(_components.p, {
      children: ["It may seem kinda ", jsx(_components.em, {
        children: "weird"
      }), " at first to use data attributes for styling, but it gets around the problem of messy string concatenation using classes. It also mirrors how we can target accessibility attributes for interaction-based styling, for example:"]
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "aria-pressed"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'true'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "gainsboro"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "disabled"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\n    ", jsx(_components.span, {
          className: "token property",
          children: "opacity"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0.4"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["I like this approach because it helps structure styling, we can see that any class is styling the base element, andy any attribute is styling a state. As for avoiding style clashes, there are better options now that automate the process like ", jsx(_components.a, {
        href: "https://github.com/css-modules/css-modules",
        children: "CSS Modules"
      }), " which is included out of the box in most React frameworks like Next.js and Create React App."]
    }), "\n", jsxs(_components.p, {
      children: ["Of course, these techniques don't require you to ", jsx(_components.em, {
        children: "only"
      }), " use vanilla CSS, you can just as easily combine them with CSS-in-JS or a pre-processor. However with new features like ", jsx(_components.a, {
        href: "https://www.w3.org/TR/css-nesting-1/",
        children: "nesting"
      }), " and ", jsx(_components.a, {
        href: "https://www.w3.org/TR/css-color-5/#relative-colors",
        children: "relative colors"
      }), " I think it's becoming less necessary to reach for these tools."]
    }), "\n", jsxs(_components.p, {
      children: ["The entirety of this website is styled using these techniques, so if you want to see an example of how this applies to some real components, take a gander at the ", jsx(_components.a, {
        href: "https://github.com/HamishMW/portfolio",
        children: "source code"
      }), "."]
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1
}, Symbol.toStringTag, { value: "Module" }));
const achievementBg$3 = "/assets/biolimbbg-Bsn88f-D.jpg";
const biolimbTexture = "/assets/biolimb-kao-gwiK.png";
const biolimbSecond = "/assets/biolombsecond-3fxIM7-y.jpg";
const link$1 = "_link_1h1qj_2";
const styles$y = {
  link: link$1
};
const VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href == null ? void 0 : href.split(".").pop());
  return (href == null ? void 0 : href.includes("://")) || (href == null ? void 0 : href[0]) === "#" || isValidExtension;
}
const Link = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href == null ? void 0 : href.includes("://");
    const relValue = rel || (isExternal ? "noreferrer noopener" : void 0);
    const targetValue = target || (isExternal ? "_blank" : void 0);
    const linkProps = {
      className: classes(styles$y.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    if (isAnchor(href)) {
      return /* @__PURE__ */ jsx("a", { ...linkProps, href, children });
    }
    return /* @__PURE__ */ jsx(Link$1, { unstable_viewTransition: true, prefetch: "intent", ...linkProps, to: href, children });
  }
);
const footer$1 = "_footer_gmxrz_2";
const link = "_link_gmxrz_16";
const date$1 = "_date_gmxrz_20";
const styles$x = {
  footer: footer$1,
  link,
  date: date$1
};
const Footer = ({ className }) => /* @__PURE__ */ jsx("footer", { className: classes(styles$x.footer, className), children: /* @__PURE__ */ jsx(Text, { size: "s", align: "center", children: /* @__PURE__ */ jsx("span", { className: styles$x.date, children: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.name}.` }) }) });
const section$1 = "_section_cvvm4_2";
const styles$w = {
  section: section$1
};
const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx(Component, { className: classes(styles$w.section, className), ref, ...rest, children })
);
const project = "_project_7xwsz_20";
const section = "_section_7xwsz_29";
const sectionInner = "_sectionInner_7xwsz_44";
const sectionBackground = "_sectionBackground_7xwsz_89";
const backgroundImage = "_backgroundImage_7xwsz_138";
const backgroundImageElement = "_backgroundImageElement_7xwsz_157";
const backgroundScrim = "_backgroundScrim_7xwsz_176";
const header$7 = "_header_7xwsz_192";
const headerContent = "_headerContent_7xwsz_212";
const details$4 = "_details_7xwsz_250";
const title$g = "_title_7xwsz_262";
const projectFadeSlide = "_projectFadeSlide_7xwsz_1";
const description$f = "_description_7xwsz_272";
const linkButton = "_linkButton_7xwsz_282";
const meta$c = "_meta_7xwsz_292";
const metaItem = "_metaItem_7xwsz_307";
const image$4 = "_image_7xwsz_327";
const sectionContent = "_sectionContent_7xwsz_335";
const sectionHeading = "_sectionHeading_7xwsz_358";
const sectionText = "_sectionText_7xwsz_362";
const textRow = "_textRow_7xwsz_369";
const sectionColumns = "_sectionColumns_7xwsz_425";
const styles$v = {
  project,
  section,
  sectionInner,
  sectionBackground,
  backgroundImage,
  backgroundImageElement,
  backgroundScrim,
  header: header$7,
  headerContent,
  details: details$4,
  title: title$g,
  projectFadeSlide,
  description: description$f,
  linkButton,
  meta: meta$c,
  metaItem,
  image: image$4,
  sectionContent,
  sectionHeading,
  sectionText,
  textRow,
  sectionColumns
};
const initDelay = 300;
function ProjectHeader({
  title: title2,
  description: description2,
  linkLabel = "Visit website",
  url: url2,
  roles: roles2,
  className
}) {
  return /* @__PURE__ */ jsx(Section, { className: classes(styles$v.header, className), as: "section", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$v.headerContent,
      style: cssProps({ initDelay: numToMs(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$v.details, children: [
          /* @__PURE__ */ jsx(Heading, { className: styles$v.title, level: 2, as: "h1", children: title2 }),
          /* @__PURE__ */ jsx(Text, { className: styles$v.description, size: "xl", as: "p", children: description2 }),
          !!url2 && /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              iconHoverShift: true,
              className: styles$v.linkButton,
              icon: "chevron-right",
              href: url2,
              children: linkLabel
            }
          )
        ] }),
        !!(roles2 == null ? void 0 : roles2.length) && /* @__PURE__ */ jsx("ul", { className: styles$v.meta, children: roles2 == null ? void 0 : roles2.map((role2, index2) => /* @__PURE__ */ jsx(
          "li",
          {
            className: styles$v.metaItem,
            style: cssProps({ delay: numToMs(initDelay + 300 + index2 * 140) }),
            children: /* @__PURE__ */ jsx(Text, { secondary: true, children: role2 })
          },
          role2
        )) })
      ]
    }
  ) });
}
const ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx("article", { className: classes(styles$v.project, className), ...rest });
const ProjectSection = forwardRef(
  ({
    className,
    light: light2,
    padding = "both",
    fullHeight,
    backgroundOverlayOpacity = 0.9,
    backgroundElement,
    children,
    ...rest
  }, ref) => /* @__PURE__ */ jsxs(
    "section",
    {
      className: classes(styles$v.section, className),
      "data-light": light2,
      "data-full-height": fullHeight,
      ref,
      ...rest,
      children: [
        !!backgroundElement && /* @__PURE__ */ jsx(
          "div",
          {
            className: styles$v.sectionBackground,
            style: cssProps({ opacity: backgroundOverlayOpacity }),
            children: backgroundElement
          }
        ),
        /* @__PURE__ */ jsx(Section, { className: styles$v.sectionInner, "data-padding": padding, children })
      ]
    }
  )
);
const ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();
  useParallax(0.6, (value2) => {
    if (!imageRef.current)
      return;
    imageRef.current.style.setProperty("--offset", `${value2}px`);
  });
  return /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$v.backgroundImage, className),
      "data-visible": visible,
      ref: nodeRef,
      children: [
        /* @__PURE__ */ jsx("div", { className: styles$v.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx(Image$1, { cover: true, alt: "", role: "presentation", ...rest }) }),
        /* @__PURE__ */ jsx("div", { className: styles$v.backgroundScrim, style: cssProps({ opacity }) })
      ]
    }
  ) });
};
const ProjectImage = ({ className, alt, ...rest }) => /* @__PURE__ */ jsx("div", { className: classes(styles$v.image, className), children: /* @__PURE__ */ jsx(Image$1, { reveal: true, alt, delay: 300, ...rest }) });
const ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$v.sectionContent, className),
    "data-width": width,
    ...rest
  }
);
const ProjectSectionHeading = ({ children, className, level = 3, as = "h2", ...rest }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  return /* @__PURE__ */ jsx(
    Heading,
    {
      className: classes(styles$v.sectionHeading, className),
      as,
      level,
      align: "auto",
      ...rest,
      children: /* @__PURE__ */ jsx("span", { ref, children: typeof children === "string" ? /* @__PURE__ */ jsx(DecoderText, { text: children, start: isInView, delay: 100 }) : children })
    }
  );
};
const ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx(Text, { className: classes(styles$v.sectionText, className), size: "l", as: "p", ...rest });
const ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$v.textRow, className),
    "data-center": center,
    "data-stretch": stretch,
    "data-center-mobile": centerMobile,
    "data-no-margin": noMargin,
    "data-width": width,
    "data-justify": justify,
    ...rest
  }
);
const ProjectSectionColumns = ({ className, centered, ...rest }) => /* @__PURE__ */ jsx(
  ProjectSectionContent,
  {
    className: classes(styles$v.sectionColumns, className),
    "data-centered": centered,
    ...rest
  }
);
const { name: name$1, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name$1,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name$1 },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name$1 },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description2 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description2 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}
const framedContainer$a = "_framedContainer_tdb7t_1";
const framedImage$a = "_framedImage_tdb7t_18";
const salivaRobot = "_salivaRobot_tdb7t_25";
const textBlock$2 = "_textBlock_tdb7t_30";
const analyticsContainer$2 = "_analyticsContainer_tdb7t_41";
const analyticsImage$2 = "_analyticsImage_tdb7t_57";
const featuresGrid$2 = "_featuresGrid_tdb7t_65";
const featureCardWrap$2 = "_featureCardWrap_tdb7t_87";
const featureFadeIn$2 = "_featureFadeIn_tdb7t_1";
const featureCard$2 = "_featureCard_tdb7t_87";
const featureIcon$2 = "_featureIcon_tdb7t_160";
const featureTitle$2 = "_featureTitle_tdb7t_166";
const featureText$2 = "_featureText_tdb7t_174";
const techStack$1 = "_techStack_tdb7t_182";
const techGroup$1 = "_techGroup_tdb7t_194";
const techGroupTitle$1 = "_techGroupTitle_tdb7t_201";
const techList$1 = "_techList_tdb7t_210";
const styles$u = {
  framedContainer: framedContainer$a,
  framedImage: framedImage$a,
  salivaRobot,
  textBlock: textBlock$2,
  analyticsContainer: analyticsContainer$2,
  analyticsImage: analyticsImage$2,
  featuresGrid: featuresGrid$2,
  featureCardWrap: featureCardWrap$2,
  featureFadeIn: featureFadeIn$2,
  featureCard: featureCard$2,
  featureIcon: featureIcon$2,
  featureTitle: featureTitle$2,
  featureText: featureText$2,
  techStack: techStack$1,
  techGroup: techGroup$1,
  techGroupTitle: techGroupTitle$1,
  techList: techList$1
};
const title$f = "Saliva Bio Medical Robot — Autonomous Saliva Collection System";
const description$e = "An autonomous healthcare device designed to safely collect saliva samples for infectious disease testing while minimizing human contact and reducing the risk of disease transmission.";
const roles$2 = [
  "Artificial Intelligence (AI)",
  "Robotics Engineering",
  "Biomedical Device Design",
  "Computer Vision"
];
const meta$b = () => {
  return baseMeta({ title: title$f, description: description$e, prefix: "Projects" });
};
const SalivaRobot = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$u.salivaRobot, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: achievementBg$3,
          srcSet: `${achievementBg$3} 1280w`,
          width: 1280,
          height: 800,
          placeholder: achievementBg$3,
          opacity: 0.75
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$f,
          description: description$e,
          roles: roles$2
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx("div", { className: styles$u.framedContainer, children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          srcSet: `${biolimbTexture} 800w`,
          width: 800,
          height: 500,
          placeholder: biolimbTexture,
          alt: "The Saliva Bio Medical Robot system.",
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`,
          className: styles$u.framedImage
        }
      ) }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Problem Statement" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Saliva-based testing plays an important role in diagnosing infectious diseases. However, traditional sample collection methods present several challenges: risk of infection for healthcare workers, direct human-to-human contact, inconsistent collection techniques, and patient discomfort." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Furthermore, mass screening programs are limited by operational costs, scalability, and difficulties in remote or unattended testing environments. These limitations became particularly evident during global pandemics." })
        ] }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Solution" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The Saliva Bio Medical Robot introduces a fully autonomous workflow that reduces physical interaction between healthcare professionals and patients. Using AI-powered human detection, facial recognition, biometric verification, robotic sample collection, and automated sterilization, the system ensures a safe, standardized, and contact-minimized testing experience." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The device enables rapid, reliable, and hygienic saliva collection while improving testing accessibility across hospitals, diagnostic centers, research facilities, and remote environments." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: true, children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { centered: true, className: styles$u.columns, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$u.textBlock, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Technical Architecture" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The hardware ecosystem consists of an AI processing unit, computer vision camera, robotic collection arm, pulse/oximeter sensors, LCD display interface, and an automated pump/sanitization sprayer system." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The software layer manages machine learning models, face detection algorithms, health monitoring logic, robotic motion control, and the sample collection management system to provide a seamless workflow." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles$u.analyticsContainer, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            className: styles$u.analyticsImage,
            srcSet: `${biolimbSecond} 800w`,
            width: 800,
            height: 600,
            placeholder: biolimbSecond,
            alt: "Second view of the Saliva Bio Medical Robot.",
            sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 55vw`
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Key Features" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A comprehensive approach to autonomous medical sample collection." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$u.featuresGrid, children: [
          /* @__PURE__ */ jsx("div", { className: styles$u.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$u.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$u.featureTitle, children: "AI-Powered Detection" }),
            /* @__PURE__ */ jsx("p", { className: styles$u.featureText, children: "Automatically detects patient presence and initiates the collection workflow without manual intervention, significantly enhancing usability and automation." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: styles$u.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$u.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$u.featureTitle, children: "Face & Mask Recognition" }),
            /* @__PURE__ */ jsx("p", { className: styles$u.featureText, children: "Computer vision system verifies user positioning, detects facial alignment and mask status, and ensures collection readiness before sample acquisition." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: styles$u.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$u.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$u.featureTitle, children: "Biometric Health Screening" }),
            /* @__PURE__ */ jsx("p", { className: styles$u.featureText, children: "Monitors pulse rate and oxygen saturation to perform a basic patient health assessment before sample collection begins." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: styles$u.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$u.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$u.featureTitle, children: "Robotic Saliva Collection" }),
            /* @__PURE__ */ jsx("p", { className: styles$u.featureText, children: "An automated robotic arm guides the mouth-opening process, safely collects the sample using sterile cotton swabs, and securely transfers it for laboratory analysis." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: styles$u.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$u.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$u.featureTitle, children: "Self-Sanitization System" }),
            /* @__PURE__ */ jsx("p", { className: styles$u.featureText, children: "Automatic sterilization occurs after every use to reduce contamination risks and strictly maintain patient safety and hygiene standards." })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Innovation & Impact" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "The uniqueness of this project lies in the integration of autonomous robotic sample collection, AI-driven patient interaction, and contact-minimized healthcare delivery. Unlike conventional methods, the system enables safer, faster, and more standardized sample acquisition while reducing workload on healthcare professionals." }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "By automating one of the most critical stages of disease detection, the project demonstrates how robotics and artificial intelligence can transform healthcare diagnostics, contributing to stronger public health infrastructure and better preparedness for future challenges." })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SalivaRobot,
  meta: meta$b
}, Symbol.toStringTag, { value: "Module" }));
const divider$b = "_divider_ucnqf_2";
const line$1 = "_line_ucnqf_8";
const notch = "_notch_ucnqf_30";
const styles$t = {
  divider: divider$b,
  line: line$1,
  notch
};
const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: classes(styles$t.divider, className),
    style: cssProps(
      {
        lineWidth,
        lineHeight,
        notchWidth,
        notchHeight,
        collapseDelay: numToMs(collapseDelay)
      },
      style
    ),
    ...rest,
    children: [
      /* @__PURE__ */ jsx("div", { className: styles$t.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$t.notch,
          "data-collapsed": collapsed,
          style: cssProps({ collapseDelay: numToMs(collapseDelay + 160) })
        }
      )
    ]
  }
);
Divider.defaultProps = {
  lineWidth: "100%",
  lineHeight: "2px",
  notchWidth: "90px",
  notchHeight: "10px",
  collapsed: false,
  collapseDelay: 0
};
const achievement$9 = "_achievement_1ga7w_3";
const content$g = "_content_1ga7w_19";
const details$3 = "_details_1ga7w_50";
const index$2 = "_index_1ga7w_64";
const indexNumber$2 = "_indexNumber_1ga7w_73";
const meta$a = "_meta_1ga7w_97";
const year$9 = "_year_1ga7w_119";
const metaDivider = "_metaDivider_1ga7w_125";
const category$9 = "_category_1ga7w_133";
const title$e = "_title_1ga7w_143";
const accentRule = "_accentRule_1ga7w_165";
const description$d = "_description_1ga7w_188";
const button$4 = "_button_1ga7w_212";
const preview$2 = "_preview_1ga7w_232";
const imageGlow = "_imageGlow_1ga7w_246";
const imageWrap = "_imageWrap_1ga7w_265";
const image$3 = "_image_1ga7w_246";
const innerImage = "_innerImage_1ga7w_297";
const styles$s = {
  achievement: achievement$9,
  content: content$g,
  details: details$3,
  index: index$2,
  indexNumber: indexNumber$2,
  meta: meta$a,
  year: year$9,
  metaDivider,
  category: category$9,
  title: title$e,
  accentRule,
  description: description$d,
  button: button$4,
  preview: preview$2,
  imageGlow,
  imageWrap,
  image: image$3,
  innerImage
};
function AchievementSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index: index2,
  title: title2,
  description: description2,
  year: year2,
  category: category2,
  image: image2,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const titleId = `${id}-title`;
  const indexText = index2 < 10 ? `0${index2}` : index2;
  const visible = sectionVisible || focused || hovered;
  function renderDetails(visible2) {
    return /* @__PURE__ */ jsxs("div", { className: styles$s.details, children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$s.index, children: [
        /* @__PURE__ */ jsx(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible2,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx("span", { className: styles$s.indexNumber, "data-visible": visible2, children: indexText })
      ] }),
      /* @__PURE__ */ jsx("div", { className: styles$s.year, "data-visible": visible2, children: year2 }),
      /* @__PURE__ */ jsx("div", { className: styles$s.category, "data-visible": visible2, children: category2 }),
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h2",
          className: styles$s.title,
          "data-visible": visible2,
          id: titleId,
          children: title2
        }
      ),
      /* @__PURE__ */ jsx(Text, { className: styles$s.description, "data-visible": visible2, as: "p", children: description2 }),
      /* @__PURE__ */ jsx("div", { className: styles$s.button, "data-visible": visible2, children: /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: buttonLink, iconEnd: "arrow-right", children: buttonText }) })
    ] });
  }
  function renderPreview(visible2) {
    return /* @__PURE__ */ jsx("div", { className: styles$s.preview, children: /* @__PURE__ */ jsx("div", { className: styles$s.imageWrap, children: /* @__PURE__ */ jsx("div", { className: styles$s.image, children: /* @__PURE__ */ jsx(
      Image$1,
      {
        className: styles$s.innerImage,
        reveal: true,
        delay: 100,
        placeholder: image2.placeholder,
        srcSet: image2.srcSet,
        width: 800,
        height: 600,
        sizes: `(max-width: ${media.tablet}px) 100vw, 50vw`,
        alt: image2.alt
      }
    ) }) }) });
  }
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$s.achievement,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx("div", { className: styles$s.content, children: /* @__PURE__ */ jsx(Transition, { in: visible, children: ({ visible: transitionVisible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        !alternate && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderDetails(transitionVisible),
          renderPreview()
        ] }),
        alternate && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderPreview(),
          renderDetails(transitionVisible)
        ] })
      ] }) }) })
    }
  );
}
const achievementPlaceholder$5 = "/assets/conrad-BMDbr9TM.jpg";
const achievementPlaceholder$4 = "/assets/robotech-CjV6O2WD.png";
const achievementPlaceholder$3 = "/assets/aiubcsfest-pDWj0k7B.png";
const achievementPlaceholder$2 = "/assets/isif-Cuk94OMe.JPG";
const achievementPlaceholder$1 = "/assets/robotronics-C-JOiXbQ.JPG";
const achievementPlaceholder = "/assets/khude biggani-Cg8N5_hc.png";
const achievementsData = [
  {
    year: "2024",
    title: "Team EXO MAX | Global 2nd Place, Nasa Conrad Challenge",
    description: "Represented Bangladesh as a member of Team EXO MAX, earning Global Runner-Up at the Conrad Challenge 2024.",
    category: "Competition",
    image: {
      srcSet: `${achievementPlaceholder$5} 800w, ${achievementPlaceholder$5} 1920w`,
      placeholder: achievementPlaceholder$5
    },
    alt: "Conrad Challenge 2024 Global Runner-Up",
    buttonText: "View details",
    buttonLink: "/achievements/conrad-challenge",
    highlighted: true
  },
  {
    year: "2024",
    title: "Team Robo Superior | Winner, RoboTech Olympiad 2024",
    description: "Developed Road Link, an innovative project focused on improving road safety and transportation efficiency, winning 1st Place at RoboTech Olympiad 2024.",
    category: "Competition",
    image: {
      srcSet: `${achievementPlaceholder$4} 800w, ${achievementPlaceholder$4} 1920w`,
      placeholder: achievementPlaceholder$4
    },
    alt: "RoboTech Olympiad 2024 1st Place Winner",
    buttonText: "View details",
    buttonLink: "/achievements/robotech-olympiad",
    highlighted: true
  },
  {
    year: "2024",
    title: "Team Robo Superior | AIUB CS Fest Project Showcase - Senior",
    description: "Presented Road Link at the AIUB CS Fest Project Showcase, winning Senior Champion (1st Place).",
    category: "Competition",
    image: {
      srcSet: `${achievementPlaceholder$3} 800w, ${achievementPlaceholder$3} 1920w`,
      placeholder: achievementPlaceholder$3
    },
    alt: "AIUB CS Fest Project Showcase Senior Champion trophy",
    buttonText: "View details",
    buttonLink: "/achievements/aiub-cs-fest",
    highlighted: false
  },
  {
    year: "2024",
    title: "Team Noob-01 | AIUB CS Fest Project Showcase - Junior",
    description: "Presented BioLimb at the AIUB CS Fest Project Showcase, winning Junior Runner-Up (2nd Place).",
    category: "Competition",
    image: {
      srcSet: `${achievementPlaceholder$3} 800w, ${achievementPlaceholder$3} 1920w`,
      placeholder: achievementPlaceholder$3
    },
    alt: "BioLimb Project Showcase Junior Runner-Up award",
    buttonText: "View details",
    buttonLink: "/achievements/aiub-cs-fest-junior",
    highlighted: false
  },
  {
    year: "2024",
    title: "Team Robo Superior | AIUB CS Fest Robo Soccer",
    description: "Participated in competitive Robo Soccer at the AIUB CS Fest, designing and programming an autonomous/remote-controlled robot, earning 2nd Runner-Up.",
    category: "Competition",
    image: {
      srcSet: `${achievementPlaceholder$3} 800w, ${achievementPlaceholder$3} 1920w`,
      placeholder: achievementPlaceholder$3
    },
    alt: "AIUB CS Fest Robo Soccer 2nd Runner-Up award",
    buttonText: "View details",
    buttonLink: "/achievements/robo-soccer",
    highlighted: false
  },
  {
    year: "2024",
    title: "Team Robo Superior | Runner-Up, International Skill Innovation Fest (ISIF) 2024",
    description: "Presented BioLimb at the International Skill Innovation Fest (ISIF) 2024, winning Runner-Up.",
    category: "Competition",
    image: {
      srcSet: `${achievementPlaceholder$2} 800w, ${achievementPlaceholder$2} 1920w`,
      placeholder: achievementPlaceholder$2
    },
    alt: "Team Robo Superior | ISIF 2024 Runner-Up award",
    buttonText: "View details",
    buttonLink: "/achievements/isif-2024",
    highlighted: false
  },
  {
    year: "2025",
    title: "Team Robo Superior | Winner, Robotronics Fest 2025 – University of Dhaka",
    description: "Presented Road Link at the Robotronics Fest 2025 organized by the University of Dhaka, winning 1st Place (Winner).",
    category: "Competition",
    image: {
      srcSet: `${achievementPlaceholder$1} 800w, ${achievementPlaceholder$1} 1920w`,
      placeholder: achievementPlaceholder$1
    },
    alt: "Road Link Robotronics Fest 2025 Winner trophy",
    buttonText: "View details",
    buttonLink: "/achievements/robotronics-fest-2025",
    highlighted: true
  },
  {
    year: "2022",
    title: "Khude Biggyani Award 2022",
    description: "Recognized as a participant and award recipient in the SMC MoniMix Plus Khude Biggyani Award 2022 organized by Deepto TV.",
    category: "Competition",
    image: {
      srcSet: `${achievementPlaceholder} 800w, ${achievementPlaceholder} 1920w`,
      placeholder: achievementPlaceholder
    },
    alt: "Khude Biggyani Award 2022 trophy",
    buttonText: "View details",
    buttonLink: "/achievements/khude-biggyani-2022",
    highlighted: false
  }
];
const achievements$2 = "_achievements_1q84n_3";
const content$f = "_content_1q84n_15";
const header$6 = "_header_1q84n_20";
const heading$3 = "_heading_1q84n_33";
const list$c = "_list_1q84n_38";
const styles$r = {
  achievements: achievements$2,
  content: content$f,
  header: header$6,
  heading: heading$3,
  list: list$c
};
function AchievementsRoute() {
  const [visibleSections, setVisibleSections] = useState([]);
  const achievementRefs = useRef([]);
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2))
              return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    achievementRefs.current.forEach((section2) => {
      if (section2) {
        sectionObserver.observe(section2);
      }
    });
    return () => {
      sectionObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("article", { className: styles$r.achievements, children: [
    /* @__PURE__ */ jsxs(Section, { className: styles$r.content, children: [
      /* @__PURE__ */ jsx("header", { className: styles$r.header, children: /* @__PURE__ */ jsx(Heading, { className: styles$r.heading, level: 5, as: "h1", children: /* @__PURE__ */ jsx(DecoderText, { text: "All Achievements" }) }) }),
      /* @__PURE__ */ jsx("div", { className: styles$r.list, children: achievementsData.map((achievement2, index2) => /* @__PURE__ */ jsx(
        AchievementSummary,
        {
          id: `achievement-${index2 + 1}`,
          sectionRef: (el) => {
            if (el)
              achievementRefs.current[index2] = el;
          },
          visible: visibleSections.includes(achievementRefs.current[index2]),
          index: index2 + 1,
          title: achievement2.title,
          description: achievement2.description,
          year: achievement2.year,
          category: achievement2.category,
          image: achievement2.image,
          buttonText: achievement2.buttonText,
          buttonLink: achievement2.buttonLink,
          alternate: index2 % 2 === 1
        },
        `${achievement2.title}-${index2}`
      )) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function meta$9() {
  return baseMeta({
    title: "Achievements",
    description: "Milestones and recognition throughout my career journey."
  });
}
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AchievementsRoute,
  meta: meta$9
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "title": "Hello world: how I built this site",
  "abstract": "I originally built this portfolio site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process.",
  "date": "2022-04-21",
  "banner": "/static/hello-world-banner.jpg"
};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment$1, {
    children: [jsx(_components.h2, {
      id: "how-it-all-started",
      children: "How it all started"
    }), "\n", jsxs(_components.p, {
      children: [`Back in 2018 I needed to update my portfolio site (as designers are wont to do). I thought I'd steer away from current trends and build a site that tapped into the 80s and 90s Cyberpunk aesthetic. The genre contains some of my favorite movies like Ghost in the Shell (1995), The Matrix (1999), and Akira (1988). That's where I borrowed few visual motifs like the bold typography on the homepage and the text decoding effect as a homage to the Matrix's "Digital rain" effect, which was itself inspired by Ghost in the Shell's opening credits. There's even a nod to Ghost in the Shell on my `, jsx(_components.a, {
        href: "/404",
        children: "404 page"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "/static/inspiration.png",
        alt: "A scene from Ghost in the Shell (1995) with the Major cloaking with thermoptic camouflage; the poster for Akira; The Matrix's digital rain effect",
        width: "1495",
        height: "1418"
      })
    }), "\n", jsx(_components.h2, {
      id: "the-first-iteration",
      children: "The first iteration"
    }), "\n", jsx(_components.p, {
      children: "I was learning React when I first built this website, and while overkill for a personal portfolio site, it was a great opportunity to learn and experiment with learning it. I've found the best way to learn is by actually making something that you intend to use and ship."
    }), "\n", jsx(_components.p, {
      children: "The no-brainer choice at the time was Create React App. It served me well in getting things up and running without having to fuss about with config. On top of that, I was using Styled Components, Tween.js, and React Transition Group. I was also playing with some early Three.js effects like the displacement sphere that still resides on the homepage."
    }), "\n", jsxs(_components.p, {
      children: ["Since then I've used this website as a playground for experimenting with new tech and techniques, so over time I've overhauled pretty much everything. A big change along the way was replacing images of my work in static mockups with real-time rendered interactive 3D devices using models I created for the ", jsx(_components.a, {
        href: "https://www.figma.com/community/plugin/819335598581469537/Clay-Mockups-3D",
        children: "Clay Mockups 3D Figma plugin"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "/static/clay-mockups.png",
        alt: "Thumbnail for my Clay Mockups 3D plugin",
        width: "1920",
        height: "960"
      })
    }), "\n", jsx(_components.h2, {
      id: "migrating-to-nextjs",
      children: "Migrating to Next.js"
    }), "\n", jsx(_components.p, {
      children: "With Create React App I was using a somewhat janky and unmaintained package to prerender the site as static HTML in Puppeteer. This worked okay for the most part, but I wanted a more robust solution for posting articles (like this one you're reading) using MDX. I had a half baked version of this lying dormant in the repo, but it never felt good enough to publish. I looked at a few options like Gatsby, Vite, and Parcel, and Remix, but Next.js stood out as the most suited to my needs."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "The site is now based on Next.js. Is a much better fit than Create React App. For now I'm just using it to create a static export, but maybe I'll add some server rendered stuff in the future."
      }), "\n", jsx(_components.li, {
        children: "Styling is now vanilla CSS with postcss to add support for the future native CSS nesting and custom media queries features. I'm using CSS modules instead of BEM syntax to avoid style conflicts."
      }), "\n", jsxs(_components.li, {
        children: ["For generating pages from ", jsx(_components.code, {
          children: ".mdx"
        }), " files, I'm using Kent C Dodds' ", jsx(_components.a, {
          href: "https://github.com/kentcdodds/mdx-bundler",
          children: "mdx-bundler"
        }), ". In combination with Next.js it makes generating pages from ", jsx(_components.code, {
          children: ".mdx"
        }), " files really quick and simple."]
      }), "\n", jsx(_components.li, {
        children: "For animation I've moved from Tween.js and React Transition Group to just Framer Motion."
      }), "\n", jsxs(_components.li, {
        children: ["3D effects are still all using Three.js, but I've added ", jsx(_components.code, {
          children: "three-stdlib"
        }), " as a better maintained replacement for modules from Three's examples."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "not-all-smooth-sailing",
      children: "Not all smooth sailing"
    }), "\n", jsx(_components.p, {
      children: "For the most part, the migration was pretty straight-forward. The way I has structured the site with React Router lent itself well to conforming with Next.js's file-based routing, and I was already using postcss for styling. I did, however, encounter a couple of problems:"
    }), "\n", jsx(_components.h3, {
      id: "1-route-transitions",
      children: "1. Route transitions"
    }), "\n", jsxs(_components.p, {
      children: ["There was a bit of a conflict when it came to animated route transitions. Next.js will immediately yank out all of the styles for the previous page when navigating to a new one. This works great when you're not animating between pages because it cleans up any unused styles form hanging around. When you are animating the page transition though, all of a sudden the previous page becomes jarringly completely unstyled as it transitions out. This problem one of ", jsx(_components.a, {
        href: "https://github.com/vercel/next.js/issues/17464",
        children: "the most commented and reacted to issues"
      }), " on the Next.js repo, so hopefully there's a fix soon, but for now I've dropped in a ", jsx(_components.a, {
        href: "https://github.com/vercel/next.js/issues/17464#issuecomment-796430107",
        children: "hack to fix things"
      }), " from the issue's comments."]
    }), "\n", jsx(_components.h3, {
      id: "2-scroll-restoration",
      children: "2. Scroll restoration"
    }), "\n", jsx(_components.p, {
      children: "Somewhat related to the route transitions, I had to opt out of both Next.js's and the native browser's scroll restoration in order to prevent the browser immediately scrolling to the top when the page started transitioning out. Next.js also doesn't appear to handle shifting focus when linking to the id of an element within the page, so I added that in for accessibility."
    }), "\n", jsx(_components.h2, {
      id: "looking-back-and-forward",
      children: "Looking back, and forward"
    }), "\n", jsx(_components.p, {
      children: "It's been pretty neat to see how popular the site's been on Github, with 500 stars (as of writing this post). It's also neat seeing how people adapt it to their own style and modify it, which is part of the reason I made it open source. I want others to be able to take it apart and see how it's made, learn from and improve upon it. That's what inspect element used to be like on the web, but with modern sites compiling and minifying and injecting garbled strings into css classes that's not as simple these days. The next best thing I could do was to open source it."
    }), "\n", jsx(_components.p, {
      children: "I look forward to continuing to use this site as a playground, and it'll be interesting to compare the next iteration to where it is today."
    }), "\n", jsx(_components.h2, {
      id: "update-feb-2024",
      children: "Update: Feb 2024"
    }), "\n", jsxs(_components.p, {
      children: [`I recently migrated the site to Remix now that they've got good support for CSS modules meaning I didn't need to convert all of my styling. It was mostly a process of deleting all of the hacks mentioned above in this post, and things just work and feel more "web standard". I'm now using the `, jsx(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",
        children: "CSS view transitions API"
      }), " to handle smoothly crossfading on route transitions, which is a feature baked into React Router (and as a result Remix). I don't need to do weird javascript hacks to try and set the correct theme (which still inevitably led to a flash of unthemed content) - I'm now storing the preferred theme in a session cookie which Remix makes really easy to do."]
    }), "\n", jsx(_components.p, {
      children: "Overall I'm really happy with Remix, would totally recommend it. I would like to eventually replace a lot of animations triggered by Javascript with the upcoming scroll driven animations CSS API, but browser support isn't there yet, so maybe some time later this year."
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter
}, Symbol.toStringTag, { value: "Module" }));
const wheelchairBackground = "/assets/wheelchairbg-BrFL827C.avif";
const wheelchairTexture = "/assets/wheelchairmain-C-wHokBl.png";
const wheelchairSecond = "/assets/diagram-image-672x422-CLI-npKD.png";
const framedContainer$9 = "_framedContainer_1fuj5_1";
const framedImage$9 = "_framedImage_1fuj5_18";
const wheelchair = "_wheelchair_1fuj5_25";
const textBlock$1 = "_textBlock_1fuj5_30";
const analyticsContainer$1 = "_analyticsContainer_1fuj5_41";
const analyticsImage$1 = "_analyticsImage_1fuj5_57";
const featuresGrid$1 = "_featuresGrid_1fuj5_65";
const featureCardWrap$1 = "_featureCardWrap_1fuj5_87";
const featureFadeIn$1 = "_featureFadeIn_1fuj5_1";
const featureCard$1 = "_featureCard_1fuj5_87";
const featureIcon$1 = "_featureIcon_1fuj5_160";
const featureTitle$1 = "_featureTitle_1fuj5_166";
const featureText$1 = "_featureText_1fuj5_174";
const styles$q = {
  framedContainer: framedContainer$9,
  framedImage: framedImage$9,
  wheelchair,
  textBlock: textBlock$1,
  analyticsContainer: analyticsContainer$1,
  analyticsImage: analyticsImage$1,
  featuresGrid: featuresGrid$1,
  featureCardWrap: featureCardWrap$1,
  featureFadeIn: featureFadeIn$1,
  featureCard: featureCard$1,
  featureIcon: featureIcon$1,
  featureTitle: featureTitle$1,
  featureText: featureText$1
};
const title$d = "Smart ML-Powered Wheelchair — Multi-Modal Assistive Mobility System";
const description$c = "An intelligent assistive mobility solution designed to empower individuals with physical disabilities by integrating machine learning-based gesture recognition, gyroscope-based motion control, and remote-control operation.";
const roles$1 = [
  "Artificial Intelligence (AI)",
  "Embedded Systems",
  "Robotics & Automation",
  "Human-Computer Interaction"
];
const meta$8 = () => {
  return baseMeta({ title: title$d, description: description$c, prefix: "Projects" });
};
const Wheelchair = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$q.wheelchair, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: wheelchairBackground,
          srcSet: `${wheelchairBackground} 1280w`,
          width: 1280,
          height: 800,
          placeholder: wheelchairBackground,
          opacity: 0.75
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$d,
          description: description$c,
          roles: roles$1
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx("div", { className: styles$q.framedContainer, children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          srcSet: `${wheelchairTexture} 800w`,
          width: 800,
          height: 500,
          placeholder: wheelchairTexture,
          alt: "The Smart ML-Powered Wheelchair system.",
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`,
          className: styles$q.framedImage
        }
      ) }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Problem Statement" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Millions of individuals worldwide rely on wheelchairs for daily mobility. However, conventional wheelchairs present challenges for users who have limited hand/arm movement, experience paralysis, or require navigation assistance." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "These limitations can reduce independence, restrict social participation, and negatively impact quality of life. Existing solutions are often expensive, difficult to customize, or designed for only a specific category of users." })
        ] }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Solution" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The Smart AI-Powered Wheelchair introduces a multi-modal control system that allows users to choose the most comfortable and accessible control method based on their abilities." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Through machine learning-powered gesture recognition, gyroscope-based tilt navigation, and wireless remote control functionality, users can safely and independently navigate their surroundings with built-in obstacle detection." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: true, children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { centered: true, className: styles$q.columns, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$q.textBlock, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Technical Architecture" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The wheelchair integrates computer vision for hand tracking, embedded control systems (Arduino / UNIHIKER Pi), gyroscope sensors for tilt detection, and ultrasonic sensors for obstacle avoidance." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Machine learning algorithms interpret these diverse sensor inputs, converting them into precise motor control commands while ensuring user safety through intelligent movement optimization and emergency stop mechanisms." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles$q.analyticsContainer, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            className: styles$q.analyticsImage,
            srcSet: `${wheelchairSecond} 800w`,
            width: 800,
            height: 600,
            placeholder: wheelchairSecond,
            alt: "System diagram and components.",
            sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 55vw`
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Key Features" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A flexible and safe assistive mobility platform." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$q.featuresGrid, children: [
          /* @__PURE__ */ jsx("div", { className: styles$q.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$q.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$q.featureTitle, children: "AI-Based Gesture Recognition" }),
            /* @__PURE__ */ jsx("p", { className: styles$q.featureText, children: "Real-time touchless wheelchair control using machine learning to detect and adapt to different users' hand gestures." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: styles$q.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$q.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$q.featureTitle, children: "Gyroscope-Controlled Navigation" }),
            /* @__PURE__ */ jsx("p", { className: styles$q.featureText, children: "Intuitive directional control requiring minimal physical effort, perfect for users with limited finger mobility using wrist or hand tilts." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: styles$q.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$q.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$q.featureTitle, children: "Wireless Remote Control" }),
            /* @__PURE__ */ jsx("p", { className: styles$q.featureText, children: "A simple and accessible interface featuring large tactile buttons for forward, backward, left, right, and stop functions." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: styles$q.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$q.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$q.featureTitle, children: "Smart Obstacle Detection" }),
            /* @__PURE__ */ jsx("p", { className: styles$q.featureText, children: "Real-time obstacle monitoring using ultrasonic sensors to preemptively prevent collisions and enhance user safety." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: styles$q.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$q.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$q.featureTitle, children: "Emergency Safety System" }),
            /* @__PURE__ */ jsx("p", { className: styles$q.featureText, children: "A dedicated emergency stop button capable of immediately halting motion, accessible from both the wheelchair and the remote control." })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Innovation & Impact" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "The uniqueness of this project lies in its multi-modal accessibility. Unlike traditional smart wheelchairs that rely on a single control mechanism, this solution allows users with varying levels of mobility to choose the method that best matches their physical capabilities." }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "By enhancing independence and removing physical barriers, this project demonstrates how artificial intelligence and human-centered design can fundamentally transform mobility assistance and elevate the quality of life for people with disabilities." })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Wheelchair,
  meta: meta$8
}, Symbol.toStringTag, { value: "Module" }));
const achievementBg$2 = "/assets/roadlinkbg-DKnWpQ8G.webp";
const roadlinkTexture = "/assets/roadlinkmain-CMEExqRT.jpg";
const roadlinkSecond = "/assets/roadlinksecond-DsCs4Mh-.jpg";
const framedContainer$8 = "_framedContainer_12r9n_1";
const framedImage$8 = "_framedImage_12r9n_18";
const roadlink = "_roadlink_12r9n_25";
const textBlock = "_textBlock_12r9n_30";
const analyticsContainer = "_analyticsContainer_12r9n_41";
const analyticsImage = "_analyticsImage_12r9n_57";
const featuresGrid = "_featuresGrid_12r9n_65";
const featureCardWrap = "_featureCardWrap_12r9n_87";
const featureFadeIn = "_featureFadeIn_12r9n_1";
const featureCard = "_featureCard_12r9n_87";
const featureIcon = "_featureIcon_12r9n_159";
const featureTitle = "_featureTitle_12r9n_165";
const featureText = "_featureText_12r9n_173";
const techStack = "_techStack_12r9n_181";
const techGroup = "_techGroup_12r9n_193";
const techGroupTitle = "_techGroupTitle_12r9n_200";
const techList = "_techList_12r9n_209";
const styles$p = {
  framedContainer: framedContainer$8,
  framedImage: framedImage$8,
  roadlink,
  textBlock,
  analyticsContainer,
  analyticsImage,
  featuresGrid,
  featureCardWrap,
  featureFadeIn,
  featureCard,
  featureIcon,
  featureTitle,
  featureText,
  techStack,
  techGroup,
  techGroupTitle,
  techList
};
const title$c = "Road Link — Road Safety & Driver Assistance System";
const description$b = "Road Link is an intelligent road safety ecosystem designed to reduce traffic accidents and improve driver awareness through real-time monitoring, predictive alerts, and advanced driver assistance technologies.";
const roles = [
  "Artificial Intelligence (AI)",
  "Computer Vision",
  "IoT & Embedded Systems",
  "Mobile Application Development"
];
const meta$7 = () => {
  return baseMeta({ title: title$c, description: description$b, prefix: "Projects" });
};
const RoadLink = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$p.roadlink, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: achievementBg$2,
          srcSet: `${achievementBg$2} 1280w`,
          width: 1280,
          height: 800,
          placeholder: achievementBg$2,
          opacity: 0.75
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$c,
          description: description$b,
          roles
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx("div", { className: styles$p.framedContainer, children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          srcSet: `${roadlinkTexture} 800w`,
          width: 800,
          height: 500,
          placeholder: roadlinkTexture,
          alt: "The Road Link system displaying driver assistance and real-time monitoring.",
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`,
          className: styles$p.framedImage
        }
      ) }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The Problem" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Road accidents remain one of the world's leading causes of death and economic loss. Key contributing factors include driver drowsiness and fatigue, distracted driving and phone usage, over-speeding, intoxicated driving, poor visibility conditions, lack of awareness of nearby obstacles, and delayed emergency response after accidents." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "These issues result in loss of life, economic damage, environmental impact, and significant energy waste." })
        ] }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Solution" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Road Link combines AI-powered monitoring, smart sensors, computer vision, and mobile connectivity to create a proactive vehicle safety system. Instead of reacting after an accident occurs, the platform continuously analyzes driver behavior and surrounding road conditions to identify risks and prevent incidents before they happen." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The system can be installed in virtually any vehicle, making advanced safety technology accessible to millions of drivers who do not have access to expensive ADAS-equipped vehicles." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: true, children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { centered: true, className: styles$p.columns, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$p.textBlock, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Technical Architecture" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The hardware ecosystem integrates a camera-based monitoring system, radar sensors for obstacle detection, tachometer integration, accident detection modules, a central processing unit, driver alert vibration systems, and a vehicle display interface." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The software layer processes sensor data in real time, generates intelligent alerts, records behavioral analytics, and synchronizes information with the Road Link mobile application." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles$p.analyticsContainer, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            className: styles$p.analyticsImage,
            srcSet: `${roadlinkSecond} 800w`,
            width: 800,
            height: 600,
            placeholder: roadlinkSecond,
            alt: "Road Link's mobile application ecosystem and tracking interface.",
            sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 55vw`
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Key Features" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A comprehensive approach to driver and vehicle safety." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$p.featuresGrid, children: [
          /* @__PURE__ */ jsx("div", { className: styles$p.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$p.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$p.featureTitle, children: "Driver Safety & Monitoring" }),
            /* @__PURE__ */ jsx("p", { className: styles$p.featureText, children: "Continuous monitoring of driver state through advanced drowsiness and fatigue detection algorithms. The system evaluates driver fitness, detects potential intoxication, prevents device distraction, and delivers critical voice-assisted notifications." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: styles$p.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$p.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$p.featureTitle, children: "Environmental & Vehicle Awareness" }),
            /* @__PURE__ */ jsx("p", { className: styles$p.featureText, children: "Proactive assistance in challenging conditions, featuring real-time overspeed monitoring, low-visibility enhancement, adaptive beam light control, and robust obstacle detection to preemptively identify collision risks." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: styles$p.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$p.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$p.featureTitle, children: "Access Control & Security" }),
            /* @__PURE__ */ jsx("p", { className: styles$p.featureText, children: "Comprehensive vehicle protection utilizing Unique Driver Identification (UID) protocols, integrated mobile application control, and precise real-time telematics for continuous location tracking and monitoring." })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: styles$p.featureCardWrap, children: /* @__PURE__ */ jsxs("div", { className: styles$p.featureCard, children: [
            /* @__PURE__ */ jsx("h3", { className: styles$p.featureTitle, children: "Analytics & Mobile Ecosystem" }),
            /* @__PURE__ */ jsx("p", { className: styles$p.featureText, children: "A comprehensive digital ecosystem providing detailed driver behavior analytics, historical performance tracking, and actionable safety recommendations to foster continuous improvement and safer driving habits." })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Innovation & Business Impact" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "Road Link stands out because it delivers advanced driver assistance functionality at a significantly lower cost compared to traditional ADAS systems. Key differentiators include universal compatibility, plug-and-play installation, and real-time data-driven driver insights without requiring vehicle redesign." }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "Targeting developing countries, fleet operators, and insurance companies, the project demonstrates how intelligent transportation technology can save lives, reduce accident-related costs, and accelerate the adoption of smart mobility solutions globally." })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RoadLink,
  meta: meta$7
}, Symbol.toStringTag, { value: "Module" }));
const __variableDynamicImportRuntimeHelper = (glob, path2) => {
  const v = glob[path2];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path2)));
  });
};
function formatTimecode(time) {
  const hours = time / 1e3 / 60 / 60;
  const h = Math.floor(hours);
  const m = Math.floor((hours - h) * 60);
  const s = Math.floor(((hours - h) * 60 - m) * 60);
  const c = Math.floor((((hours - h) * 60 - m) * 60 - s) * 1e3 / 10);
  return `${zeroPrefix(h)}:${zeroPrefix(m)}:${zeroPrefix(s)}:${zeroPrefix(c)}`;
}
function zeroPrefix(value2) {
  return value2 < 10 ? `0${value2}` : `${value2}`;
}
function readingTime(text2) {
  const wpm = 225;
  const words = text2.trim().split(/\s+/).length;
  const time = words / wpm;
  return time * 1e3 * 60;
}
async function getPosts() {
  const modules = /* @__PURE__ */ Object.assign({ "../articles.hello-world.mdx": route4, "../articles.modern-styling-in-react.mdx": route1 });
  const build = await Promise.resolve().then(() => serverBuild);
  const posts = await Promise.all(
    Object.entries(modules).map(async ([file, post2]) => {
      let id = file.replace("../", "routes/").replace(/\.mdx$/, "");
      let slug = build.routes[id].path;
      if (slug === void 0)
        throw new Error(`No route for ${id}`);
      const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.hello-world.mdx": () => import("./articles.hello-world-BpI5gnGz.js"), "../articles.modern-styling-in-react.mdx": () => import("./articles.modern-styling-in-react-D1jt5bSr.js") }), `../articles.${slug}.mdx`);
      const readTime = readingTime(text2.default);
      const timecode2 = formatTimecode(readTime);
      return {
        slug,
        timecode: timecode2,
        frontmatter: post2.frontmatter
      };
    })
  );
  return sortBy(posts, (post2) => post2.frontmatter.date, "desc");
}
function sortBy(arr, key, dir = "asc") {
  return arr.sort((a, b) => {
    const res = compare(key(a), key(b));
    return dir === "asc" ? res : -res;
  });
}
function compare(a, b) {
  if (a < b)
    return -1;
  if (a > b)
    return 1;
  return 0;
}
function formatDate(date2) {
  return new Date(date2).toLocaleDateString("default", {
    year: "numeric",
    month: "long",
    day: "2-digit"
  });
}
const articles = "_articles_nr520_3";
const grid$1 = "_grid_nr520_15";
const header$5 = "_header_nr520_53";
const heading$2 = "_heading_nr520_71";
const list$b = "_list_nr520_76";
const divider$a = "_divider_nr520_80";
const skeleton = "_skeleton_nr520_85";
const skeletonBone = "_skeletonBone_nr520_94";
const post$1 = "_post_nr520_98";
const postLabel = "_postLabel_nr520_148";
const postTag = "_postTag_nr520_149";
const labelIn = "_labelIn_nr520_1";
const tagIn = "_tagIn_nr520_1";
const postLink = "_postLink_nr520_223";
const postDate = "_postDate_nr520_280";
const postImage = "_postImage_nr520_290";
const postDetails = "_postDetails_nr520_340";
const postFooter = "_postFooter_nr520_356";
const timecode$1 = "_timecode_nr520_370";
const barcode = "_barcode_nr520_383";
const styles$o = {
  articles,
  grid: grid$1,
  header: header$5,
  heading: heading$2,
  list: list$b,
  divider: divider$a,
  skeleton,
  skeletonBone,
  post: post$1,
  postLabel,
  postTag,
  labelIn,
  tagIn,
  postLink,
  postDate,
  postImage,
  postDetails,
  postFooter,
  timecode: timecode$1,
  barcode
};
function ArticlesPost({ slug, frontmatter: frontmatter2, timecode: timecode2, index: index2 }) {
  const [hovered, setHovered] = useState(false);
  const [dateTime, setDateTime] = useState(null);
  const reduceMotion = useReducedMotion();
  const { title: title2, abstract, date: date2, featured, banner: banner2 } = frontmatter2;
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: styles$o.post,
      "data-featured": !!featured,
      style: index2 !== void 0 ? cssProps({ delay: index2 * 100 + 200 }) : void 0,
      children: [
        featured && /* @__PURE__ */ jsx(Text, { className: styles$o.postLabel, size: "s", children: "Featured" }),
        featured && !!banner2 && /* @__PURE__ */ jsx("div", { className: styles$o.postImage, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            noPauseButton: true,
            play: !reduceMotion ? hovered : void 0,
            src: banner2,
            placeholder: `${banner2.split(".")[0]}-placeholder.jpg`,
            alt: "",
            role: "presentation"
          }
        ) }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            unstable_viewTransition: true,
            prefetch: "intent",
            to: `/articles/${slug}`,
            className: styles$o.postLink,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
            children: /* @__PURE__ */ jsxs("div", { className: styles$o.postDetails, children: [
              /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$o.postDate, children: [
                /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
                dateTime
              ] }),
              /* @__PURE__ */ jsx(Heading, { as: "h2", level: featured ? 2 : 4, children: title2 }),
              /* @__PURE__ */ jsx(Text, { size: featured ? "l" : "s", as: "p", children: abstract }),
              /* @__PURE__ */ jsxs("div", { className: styles$o.postFooter, children: [
                /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "Read article" }),
                /* @__PURE__ */ jsx(Text, { className: styles$o.timecode, size: "s", children: timecode2 })
              ] })
            ] })
          }
        ),
        featured && /* @__PURE__ */ jsx(Text, { "aria-hidden": true, className: styles$o.postTag, size: "s", children: "477" })
      ]
    }
  );
}
function SkeletonPost({ index: index2 }) {
  return /* @__PURE__ */ jsx(
    "article",
    {
      "aria-hidden": "true",
      className: classes(styles$o.post, styles$o.skeleton),
      "data-featured": "false",
      style: index2 !== void 0 ? cssProps({ delay: index2 * 100 + 200 }) : void 0,
      children: /* @__PURE__ */ jsx("div", { className: styles$o.postLink, children: /* @__PURE__ */ jsxs("div", { className: styles$o.postDetails, children: [
        /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$o.postDate, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px" }),
          "Coming soon..."
        ] }),
        /* @__PURE__ */ jsx(
          Heading,
          {
            className: styles$o.skeletonBone,
            as: "h2",
            level: 4,
            style: { height: 24, width: "70%" }
          }
        ),
        /* @__PURE__ */ jsx(
          Text,
          {
            className: styles$o.skeletonBone,
            size: "s",
            as: "p",
            style: { height: 90, width: "100%" }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: styles$o.postFooter, children: [
          /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, icon: "chevron-right", as: "div", children: "Read more" }),
          /* @__PURE__ */ jsx(Text, { className: styles$o.timecode, size: "s", children: "00:00:00:00" })
        ] })
      ] }) })
    }
  );
}
function Articles$1() {
  const { posts, featured } = useLoaderData();
  const { width } = useWindowSize();
  const singleColumnWidth = 1190;
  const isSingleColumn = width <= singleColumnWidth;
  const postsHeader = /* @__PURE__ */ jsxs("header", { className: styles$o.header, children: [
    /* @__PURE__ */ jsx(Heading, { className: styles$o.heading, level: 5, as: "h1", children: /* @__PURE__ */ jsx(DecoderText, { text: "Latest articles" }) }),
    /* @__PURE__ */ jsx(Barcode, { className: styles$o.barcode })
  ] });
  const postList = /* @__PURE__ */ jsxs("div", { className: styles$o.list, children: [
    !isSingleColumn && postsHeader,
    posts.map(({ slug, ...post2 }, index2) => /* @__PURE__ */ jsx(ArticlesPost, { slug, index: index2, ...post2 }, slug)),
    Array(2).fill().map((skeleton2, index2) => /* @__PURE__ */ jsx(SkeletonPost, { index: index2 }, index2))
  ] });
  const featuredPost = /* @__PURE__ */ jsx(ArticlesPost, { ...featured });
  return /* @__PURE__ */ jsxs("article", { className: styles$o.articles, children: [
    /* @__PURE__ */ jsxs(Section, { className: styles$o.content, children: [
      !isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$o.grid, children: [
        postList,
        featuredPost
      ] }),
      isSingleColumn && /* @__PURE__ */ jsxs("div", { className: styles$o.grid, children: [
        postsHeader,
        featuredPost,
        postList
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Barcode({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      className,
      width: "153",
      height: "20",
      fill: "currentColor",
      viewBox: "0 0 153 20",
      children: /* @__PURE__ */ jsx(
        "path",
        {
          fillOpacity: ".6",
          d: "M153 0v20h-2V0h2Zm-4 0v20h-4V0h4Zm-6 0v20h-2V0h2Zm-4 4v3h-2V4h2Zm-5 0V0h3v4h-3Zm-2 0h2v6h-2V4Zm0 0h-2V0h2v4Zm-4-4v4h-4v5h-2v4h-5V9h3V6h-5V0h13Zm-11 13v3h-2v-3h2Zm-4-13v6h-2v4h2v4h-2v2h2v4h-4V0h4Zm-6 4V0h-2v4h2Zm-1 6V7h-4V4h-2V0h-2v4h-2V0H86v4h-2v3h-2v2h-2v4h6v3h-2v4h6v-4h-2v-3h-2V9h-2V7h4V4h3v9h2v7h7v-4h-5v-3h-2V9h2V7h3v3h2v4h6v-4ZM74 7v3h-2v2h2v8h-4V0h8v5h-3V4h-3v3h2Zm28 13h4v-4h-4v4Zm28-6v-4h-2v6h2v4h2v-6h-2Zm9 2v-6h-2v6h-2v4h4v-4Zm-12 4v-4h-4v4h4ZM0 20h2V0H0v20Zm4 0h4V0H4v20Zm6 0h2V0h-2v20Zm5 0h7V0h-7v20Zm12 0h-3V0h3v20Zm5 0h3v-4h5v-6h-5V6h7V3h3V0h-7v3h-3V0h-3v20ZM52 3v3h-3v3h-4V6h1V3h6Zm23 13h6v4h-6v-4Zm-29-6v3h3v-3h3v3h-2v6h-3v-3h-2v-3h-2v-3h3Zm8 6v3h-2v-3h2Zm3 0v3h2v-3h2v-3h-2v3h-2Zm0 0v-6h-3v6h3Zm4-7V6h2V0h-2v6h-2v3h2Zm5-3v3h-2V6h2Zm2 0h-2V3h2v3Zm-9-3V0h-2v3h2Z"
        }
      )
    }
  );
}
async function loader$3() {
  const allPosts = await getPosts();
  const featured = allPosts.filter((post2) => post2.frontmatter.featured)[0];
  const posts = allPosts.filter((post2) => (featured == null ? void 0 : featured.slug) !== post2.slug);
  return json({ posts, featured });
}
function meta$6() {
  return baseMeta({
    title: "Articles",
    description: "A collection of technical design and development articles. May contain incoherent ramblings."
  });
}
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles$1,
  loader: loader$3,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const iphone11 = "/assets/iphone-11-DGIHa_Ph.glb";
const macbookPro = "/assets/macbook-pro-DZn-FKKF.glb";
const ModelAnimationType = {
  SpringUp: "spring-up",
  LaptopOpen: "laptop-open"
};
const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen
  }
};
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
const summary = "_summary_4kp9j_1";
const content$e = "_content_4kp9j_35";
const details$2 = "_details_4kp9j_65";
const preview$1 = "_preview_4kp9j_78";
const model = "_model_4kp9j_88";
const loader$2 = "_loader_4kp9j_158";
const index$1 = "_index_4kp9j_168";
const indexNumber$1 = "_indexNumber_4kp9j_177";
const title$b = "_title_4kp9j_198";
const description$a = "_description_4kp9j_217";
const button$3 = "_button_4kp9j_236";
const styles$n = {
  summary,
  content: content$e,
  details: details$2,
  preview: preview$1,
  model,
  loader: loader$2,
  index: index$1,
  indexNumber: indexNumber$1,
  title: title$b,
  description: description$a,
  button: button$3
};
const Model = lazy(
  () => import("./index-DCyZnVqe.js").then((module) => ({ default: module.Model }))
);
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index: index2,
  title: title2,
  description: description2,
  model: model2,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const indexText = index2 < 10 ? `0${index2}` : index2;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(true);
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$n.details, children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$n.index, children: [
        /* @__PURE__ */ jsx(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx("span", { className: styles$n.indexNumber, "data-visible": visible, children: indexText })
      ] }),
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h2",
          className: styles$n.title,
          "data-visible": visible,
          id: titleId,
          children: title2
        }
      ),
      /* @__PURE__ */ jsx(Text, { className: styles$n.description, "data-visible": visible, as: "p", children: description2 }),
      /* @__PURE__ */ jsx("div", { className: styles$n.button, "data-visible": visible, children: /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: buttonLink, iconEnd: "arrow-right", children: buttonText }) })
    ] });
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$n.preview, children: [
      model2.type === "laptop" && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", { className: styles$n.model, "data-device": "laptop", children: [
        !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$n.loader, "data-visible": visible }),
        isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
          Model,
          {
            alt: model2.alt,
            cameraPosition: { x: 0, y: 0, z: 8 },
            showDelay: 700,
            onLoad: handleModelLoad,
            show: visible,
            models: [
              {
                ...deviceModels.laptop,
                texture: {
                  ...model2.textures[0],
                  sizes: laptopSizes
                }
              }
            ]
          }
        ) })
      ] }) }),
      model2.type === "phone" && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", { className: styles$n.model, "data-device": "phone", children: [
        !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$n.loader, "data-visible": visible }),
        isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
          Model,
          {
            alt: model2.alt,
            cameraPosition: { x: 0, y: 0, z: 11.5 },
            showDelay: 300,
            onLoad: handleModelLoad,
            show: visible,
            models: [
              {
                ...deviceModels.phone,
                position: { x: -0.6, y: 1.1, z: 0 },
                texture: {
                  ...model2.textures[0],
                  sizes: phoneSizes
                }
              },
              {
                ...deviceModels.phone,
                position: { x: 0.6, y: -0.5, z: 0.3 },
                texture: {
                  ...model2.textures[1],
                  sizes: phoneSizes
                }
              }
            ]
          }
        ) })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$n.summary,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx("div", { className: styles$n.content, children: /* @__PURE__ */ jsx(Transition, { in: sectionVisible || focused, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderDetails(visible),
          renderPreview(visible)
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderPreview(visible),
          renderDetails(visible)
        ] })
      ] }) }) })
    }
  );
}
const arionysMain = "/assets/arionysaimain-BPXIq8OP.jpg";
const arionysSecond = "/assets/arionysaisecond-eCttr3r_.jpg";
const projectsData = [
  {
    id: "project-1",
    title: "Road Link — Road Safety & Driver Assistance System",
    description: "An intelligent road safety ecosystem designed to reduce traffic accidents and improve driver awareness through real-time monitoring and predictive alerts.",
    buttonText: "View project",
    buttonLink: "/projects/roadlink",
    model: {
      type: "laptop",
      alt: "Road Link real-time accident prevention dashboard",
      textures: [
        {
          srcSet: `${roadlinkTexture} 1280w`,
          placeholder: roadlinkTexture
        }
      ]
    },
    highlighted: true
  },
  {
    id: "project-2",
    title: "Saliva Bio Medical Robot",
    description: "Autonomous Saliva Collection System using AI and Robotics to minimize infection risks.",
    buttonText: "View project",
    buttonLink: "/projects/saliva-robot",
    model: {
      type: "laptop",
      alt: "Saliva Bio Medical Robot system interface",
      textures: [
        {
          srcSet: `${biolimbTexture} 800w`,
          placeholder: biolimbTexture
        }
      ]
    },
    highlighted: true
  },
  {
    id: "project-3",
    title: "Arionys AI",
    description: "A platform that offers intelligent assistants for coding, content creation, and productivity tasks using advanced language models.",
    buttonText: "View website",
    buttonLink: "https://ai.arionys.software/",
    model: {
      type: "phone",
      alt: "Arionys AI mobile interface",
      textures: [
        {
          srcSet: `${arionysMain} 800w`,
          placeholder: arionysMain
        },
        {
          srcSet: `${arionysSecond} 800w`,
          placeholder: arionysSecond
        }
      ]
    },
    highlighted: true
  },
  {
    id: "project-4",
    title: "Smart ML-Powered Wheelchair",
    description: "Multi-Modal Assistive Mobility System controlled via hand gestures and wireless remote.",
    buttonText: "View project",
    buttonLink: "/projects/wheelchair",
    model: {
      type: "laptop",
      alt: "Smart ML-Powered Wheelchair",
      textures: [
        {
          srcSet: `${wheelchairTexture} 800w`,
          placeholder: wheelchairTexture
        }
      ]
    },
    highlighted: false
  }
];
const projects = "_projects_1abtk_3";
const content$d = "_content_1abtk_15";
const header$4 = "_header_1abtk_20";
const heading$1 = "_heading_1abtk_33";
const list$a = "_list_1abtk_38";
const styles$m = {
  projects,
  content: content$d,
  header: header$4,
  heading: heading$1,
  list: list$a
};
function Projects() {
  const [visibleSections, setVisibleSections] = useState([]);
  const projectRefs = useRef([]);
  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2))
              return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    projectRefs.current.forEach((section2) => {
      if (section2) {
        sectionObserver.observe(section2);
      }
    });
    return () => {
      sectionObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("article", { className: styles$m.projects, children: [
    /* @__PURE__ */ jsxs(Section, { className: styles$m.content, children: [
      /* @__PURE__ */ jsx("header", { className: styles$m.header, children: /* @__PURE__ */ jsx(Heading, { className: styles$m.heading, level: 5, as: "h1", children: /* @__PURE__ */ jsx(DecoderText, { text: "All Projects" }) }) }),
      /* @__PURE__ */ jsx("div", { className: styles$m.list, children: projectsData.map((project2, index2) => /* @__PURE__ */ jsx(
        ProjectSummary,
        {
          id: project2.id,
          sectionRef: (el) => {
            if (el)
              projectRefs.current[index2] = el;
          },
          visible: visibleSections.includes(projectRefs.current[index2]),
          index: index2 + 1,
          title: project2.title,
          description: project2.description,
          buttonText: project2.buttonText,
          buttonLink: project2.buttonLink,
          model: project2.model,
          alternate: index2 % 2 === 1
        },
        project2.id
      )) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function meta$5() {
  return baseMeta({
    title: "Projects",
    description: "A collection of featured design and development projects."
  });
}
const route8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Projects,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
async function action$1({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get("theme");
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  session.set("theme", theme);
  return json(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action: action$1
}, Symbol.toStringTag, { value: "Module" }));
const achievements$1 = "_achievements_ob0ma_1";
const styles$l = {
  achievements: achievements$1
};
function Achievements$1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: styles$l.achievements, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Achievements$1
}, Symbol.toStringTag, { value: "Module" }));
const clamp = (number, boundOne, boundTwo) => {
  if (!boundTwo) {
    return Math.max(number, boundOne) === boundOne ? number : boundOne;
  } else if (Math.min(number, boundOne) === number) {
    return boundOne;
  } else if (Math.max(number, boundTwo) === number) {
    return boundTwo;
  }
  return number;
};
const post = "_post_kr7uo_20";
const header$3 = "_header_kr7uo_44";
const headerText = "_headerText_kr7uo_55";
const date = "_date_kr7uo_79";
const dateText = "_dateText_kr7uo_91";
const titleWordWrapper = "_titleWordWrapper_kr7uo_118";
const titleWord = "_titleWord_kr7uo_118";
const postTitleWord = "_postTitleWord_kr7uo_1";
const banner = "_banner_kr7uo_138";
const bannerImage = "_bannerImage_kr7uo_190";
const bannerImageBlur = "_bannerImageBlur_kr7uo_191";
const details$1 = "_details_kr7uo_202";
const arrow = "_arrow_kr7uo_209";
const timecode = "_timecode_kr7uo_233";
const wrapper = "_wrapper_kr7uo_254";
const content$c = "_content_kr7uo_266";
const styles$k = {
  post,
  header: header$3,
  headerText,
  date,
  dateText,
  titleWordWrapper,
  titleWord,
  postTitleWord,
  banner,
  bannerImage,
  bannerImageBlur,
  details: details$1,
  arrow,
  timecode,
  wrapper,
  content: content$c
};
const Post = ({ children, title: title2, date: date2, banner: banner2, timecode: timecode2 }) => {
  const scrollToHash = useScrollToHash();
  const imageRef = useRef();
  const [dateTime, setDateTime] = useState(null);
  useEffect(() => {
    setDateTime(formatDate(date2));
  }, [date2, dateTime]);
  useParallax(4e-3, (value2) => {
    if (!imageRef.current)
      return;
    imageRef.current.style.setProperty("--blurOpacity", clamp(value2, 0, 1));
  });
  const handleScrollIndicatorClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  const placeholder2 = `${banner2 == null ? void 0 : banner2.split(".")[0]}-placeholder.jpg`;
  return /* @__PURE__ */ jsxs("article", { className: styles$k.post, children: [
    /* @__PURE__ */ jsxs(Section, { children: [
      banner2 && /* @__PURE__ */ jsxs("div", { className: styles$k.banner, ref: imageRef, children: [
        /* @__PURE__ */ jsx("div", { className: styles$k.bannerImage, children: /* @__PURE__ */ jsx(Image$1, { role: "presentation", src: banner2, placeholder: placeholder2, alt: "" }) }),
        /* @__PURE__ */ jsx("div", { className: styles$k.bannerImageBlur, children: /* @__PURE__ */ jsx(
          Image$1,
          {
            role: "presentation",
            src: placeholder2,
            placeholder: placeholder2,
            alt: ""
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx("header", { className: styles$k.header, children: /* @__PURE__ */ jsxs("div", { className: styles$k.headerText, children: [
        /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$k.date, ref: nodeRef, children: [
          /* @__PURE__ */ jsx(Divider, { notchWidth: "64px", notchHeight: "8px", collapsed: !visible }),
          /* @__PURE__ */ jsx(Text, { className: styles$k.dateText, "data-visible": visible, children: dateTime })
        ] }) }),
        /* @__PURE__ */ jsx(Heading, { level: 2, as: "h1", className: styles$k.title, "aria-label": title2, children: title2.split(" ").map((word2, index2) => /* @__PURE__ */ jsx("span", { className: styles$k.titleWordWrapper, children: /* @__PURE__ */ jsxs(
          "span",
          {
            className: styles$k.titleWord,
            style: cssProps({ delay: numToMs(index2 * 100 + 100) }),
            children: [
              word2,
              index2 !== title2.split(" ").length - 1 ? " " : ""
            ]
          }
        ) }, `${word2}-${index2}`)) }),
        /* @__PURE__ */ jsxs("div", { className: styles$k.details, children: [
          /* @__PURE__ */ jsx(
            Link$1,
            {
              to: "#postContent",
              className: styles$k.arrow,
              "aria-label": "Scroll to post content",
              onClick: handleScrollIndicatorClick,
              children: /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$k.timecode, children: timecode2 })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: styles$k.wrapper, id: "postContent", tabIndex: -1, children: /* @__PURE__ */ jsx(Text, { as: "div", size: "l", className: styles$k.content, children }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const code$1 = "_code_113ft_2";
const actions = "_actions_113ft_159";
const copyIcon = "_copyIcon_113ft_176";
const lang = "_lang_113ft_198";
const styles$j = {
  code: code$1,
  actions,
  copyIcon,
  lang
};
const Code = (props) => {
  var _a;
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();
  const elementRef = useRef();
  const copyTimeout = useRef();
  const lang2 = (_a = props.className) == null ? void 0 : _a.split("-")[1];
  const handleCopy = () => {
    clearTimeout(copyTimeout);
    navigator.clipboard.writeText(elementRef.current.textContent);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2e3);
  };
  return /* @__PURE__ */ jsxs("div", { className: styles$j.code, "data-theme": theme, children: [
    !!lang2 && /* @__PURE__ */ jsx(Text, { secondary: true, size: "s", className: styles$j.lang, children: lang2 }),
    /* @__PURE__ */ jsx("pre", { ref: elementRef, ...props }),
    /* @__PURE__ */ jsx("div", { className: styles$j.actions, children: /* @__PURE__ */ jsx(Button, { iconOnly: true, onClick: handleCopy, "aria-label": "Copy", children: /* @__PURE__ */ jsxs("span", { className: styles$j.copyIcon, children: [
      /* @__PURE__ */ jsx(Transition, { in: !copied, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "copy", "data-visible": visible }) }),
      /* @__PURE__ */ jsx(Transition, { in: copied, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(Icon, { ref: nodeRef, icon: "check", "data-visible": visible }) })
    ] }) }) })
  ] });
};
const list$9 = "_list_1ecfb_2";
const item = "_item_1ecfb_15";
const styles$i = {
  list: list$9,
  item
};
const List = ({ ordered, children, className, ...rest }) => {
  const Element = ordered ? "ol" : "ul";
  return /* @__PURE__ */ jsx(Element, { className: classes(styles$i.list, className), ...rest, children });
};
const ListItem = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsx("li", { className: styles$i.item, ...rest, children });
};
const heading = "_heading_69uyj_2";
const paragraph$8 = "_paragraph_69uyj_14";
const list$8 = "_list_69uyj_14";
const image$2 = "_image_69uyj_14";
const headingLink = "_headingLink_69uyj_19";
const code = "_code_69uyj_72";
const pre = "_pre_69uyj_90";
const hr = "_hr_69uyj_106";
const blockquote = "_blockquote_69uyj_120";
const strong = "_strong_69uyj_139";
const embed = "_embed_69uyj_143";
const styles$h = {
  heading,
  paragraph: paragraph$8,
  list: list$8,
  image: image$2,
  headingLink,
  code,
  pre,
  hr,
  blockquote,
  strong,
  embed
};
const PostHeadingLink = ({ id }) => {
  return /* @__PURE__ */ jsx(Link$1, { className: styles$h.headingLink, to: `#${id}`, "aria-label": "Link to heading", children: /* @__PURE__ */ jsx(Icon, { icon: "link" }) });
};
const PostH1 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$h.heading, id, level: 2, as: "h1", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH2 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$h.heading, id, level: 3, as: "h2", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH3 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$h.heading, id, level: 4, as: "h3", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostH4 = ({ children, id, ...rest }) => /* @__PURE__ */ jsxs(Heading, { className: styles$h.heading, id, level: 5, as: "h4", ...rest, children: [
  /* @__PURE__ */ jsx(PostHeadingLink, { id }),
  children
] });
const PostParagraph = ({ children, ...rest }) => {
  const hasSingleChild = Children.count(children) === 1;
  const firstChild = Children.toArray(children)[0];
  if (hasSingleChild && firstChild.type === PostImage) {
    return children;
  }
  return /* @__PURE__ */ jsx(Text, { className: styles$h.paragraph, size: "l", as: "p", ...rest, children });
};
const PostLink = ({ ...props }) => /* @__PURE__ */ jsx(Link, { ...props });
const PostUl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$h.list, ...props });
};
const PostOl = (props) => {
  return /* @__PURE__ */ jsx(List, { className: styles$h.list, ordered: true, ...props });
};
const PostLi = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(ListItem, { ...props, children });
};
const PostCode = ({ children, ...rest }) => /* @__PURE__ */ jsx("code", { className: styles$h.code, ...rest, children });
const PostPre = (props) => {
  return /* @__PURE__ */ jsx("div", { className: styles$h.pre, children: /* @__PURE__ */ jsx(Code, { ...props }) });
};
const PostBlockquote = (props) => {
  return /* @__PURE__ */ jsx("blockquote", { className: styles$h.blockquote, ...props });
};
const PostHr = (props) => {
  return /* @__PURE__ */ jsx("hr", { className: styles$h.hr, ...props });
};
const PostStrong = (props) => {
  return /* @__PURE__ */ jsx("strong", { className: styles$h.strong, ...props });
};
const PostImage = ({ src, alt, width, height, ...rest }) => {
  return /* @__PURE__ */ jsx(
    "img",
    {
      className: styles$h.image,
      src,
      loading: "lazy",
      alt,
      width,
      height,
      ...rest
    }
  );
};
const Embed = ({ src }) => {
  return /* @__PURE__ */ jsx("div", { className: styles$h.embed, children: /* @__PURE__ */ jsx("iframe", { src, loading: "lazy", title: "Embed" }) });
};
const postMarkdown = {
  h1: PostH1,
  h2: PostH2,
  h3: PostH3,
  h4: PostH4,
  p: PostParagraph,
  a: PostLink,
  ul: PostUl,
  ol: PostOl,
  li: PostLi,
  pre: PostPre,
  code: PostCode,
  blockquote: PostBlockquote,
  hr: PostHr,
  img: PostImage,
  strong: PostStrong,
  Embed
};
async function loader$1({ request }) {
  const slug = request.url.split("/").at(-1);
  const module = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.hello-world.mdx": () => Promise.resolve().then(() => route4), "../articles.modern-styling-in-react.mdx": () => Promise.resolve().then(() => route1) }), `../articles.${slug}.mdx`);
  const text2 = await __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "../articles.hello-world.mdx": () => import("./articles.hello-world-BpI5gnGz.js"), "../articles.modern-styling-in-react.mdx": () => import("./articles.modern-styling-in-react-D1jt5bSr.js") }), `../articles.${slug}.mdx`);
  const readTime = readingTime(text2.default);
  const ogImage = `${config.url}/static/${slug}-og.jpg`;
  return json({
    ogImage,
    frontmatter: module.frontmatter,
    timecode: formatTimecode(readTime)
  });
}
function meta$4({ data }) {
  const { title: title2, abstract } = data.frontmatter;
  return baseMeta({ title: title2, description: abstract, prefix: "", ogImage: data.ogImage });
}
function Articles() {
  const { frontmatter: frontmatter2, timecode: timecode2 } = useLoaderData();
  return /* @__PURE__ */ jsx(MDXProvider, { components: postMarkdown, children: /* @__PURE__ */ jsx(Post, { ...frontmatter2, timecode: timecode2, children: /* @__PURE__ */ jsx(Outlet, {}) }) });
}
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Articles,
  loader: loader$1,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
const textarea = "_textarea_1ly3z_2";
const styles$g = {
  textarea
};
const TextArea = ({
  className,
  resize = "none",
  value: value2,
  onChange,
  minRows = 1,
  maxRows,
  ...rest
}) => {
  const [rows, setRows] = useState(minRows);
  const [textareaDimensions, setTextareaDimensions] = useState();
  const textareaRef = useRef();
  useEffect(() => {
    const style = getComputedStyle(textareaRef.current);
    const lineHeight = parseInt(style.lineHeight, 10);
    const paddingHeight = parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10);
    setTextareaDimensions({ lineHeight, paddingHeight });
  }, []);
  const handleChange = (event) => {
    onChange(event);
    const { lineHeight, paddingHeight } = textareaDimensions;
    const previousRows = event.target.rows;
    event.target.rows = minRows;
    const currentRows = ~~((event.target.scrollHeight - paddingHeight) / lineHeight);
    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }
    if (maxRows && currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }
    setRows(maxRows && currentRows > maxRows ? maxRows : currentRows);
  };
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      className: classes(styles$g.textarea, className),
      ref: textareaRef,
      onChange: handleChange,
      style: cssProps({ resize }),
      rows,
      value: value2,
      ...rest
    }
  );
};
const container$3 = "_container_1ukhq_2";
const content$b = "_content_1ukhq_16";
const input$1 = "_input_1ukhq_21";
const root = "_root_1ukhq_1";
const underline = "_underline_1ukhq_55";
const label = "_label_1ukhq_73";
const error = "_error_1ukhq_95";
const errorMessage = "_errorMessage_1ukhq_111";
const styles$f = {
  container: container$3,
  content: content$b,
  input: input$1,
  root,
  underline,
  label,
  error,
  errorMessage
};
const Input = ({
  id,
  label: label2,
  value: value2,
  multiline,
  className,
  style,
  error: error2,
  onBlur,
  autoComplete,
  required,
  maxLength,
  type,
  onChange,
  name: name2,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const generatedId = useId();
  const errorRef = useRef();
  const inputId = id || `${generatedId}input`;
  const labelId = `${inputId}-label`;
  const errorId = `${inputId}-error`;
  const InputElement = multiline ? TextArea : "input";
  const handleBlur = (event) => {
    setFocused(false);
    if (onBlur) {
      onBlur(event);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$f.container, className),
      "data-error": !!error2,
      style,
      ...rest,
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$f.content, children: [
          /* @__PURE__ */ jsx(
            "label",
            {
              className: styles$f.label,
              "data-focused": focused,
              "data-filled": !!value2,
              id: labelId,
              htmlFor: inputId,
              children: label2
            }
          ),
          /* @__PURE__ */ jsx(
            InputElement,
            {
              className: styles$f.input,
              id: inputId,
              "aria-labelledby": labelId,
              "aria-describedby": error2 ? errorId : void 0,
              onFocus: () => setFocused(true),
              onBlur: handleBlur,
              value: value2,
              onChange,
              autoComplete,
              required,
              maxLength,
              type,
              name: name2
            }
          ),
          /* @__PURE__ */ jsx("div", { className: styles$f.underline, "data-focused": focused })
        ] }),
        /* @__PURE__ */ jsx(Transition, { unmount: true, in: error2, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => {
          var _a;
          return /* @__PURE__ */ jsx(
            "div",
            {
              ref: nodeRef,
              className: styles$f.error,
              "data-visible": visible,
              id: errorId,
              role: "alert",
              style: cssProps({
                height: visible ? (_a = errorRef.current) == null ? void 0 : _a.getBoundingClientRect().height : 0
              }),
              children: /* @__PURE__ */ jsxs("div", { className: styles$f.errorMessage, ref: errorRef, children: [
                /* @__PURE__ */ jsx(Icon, { icon: "error" }),
                error2
              ] })
            }
          );
        } })
      ]
    }
  );
};
const contact = "_contact_xvg9q_1";
const form = "_form_xvg9q_18";
const title$a = "_title_xvg9q_30";
const divider$9 = "_divider_xvg9q_60";
const input = "_input_xvg9q_98";
const botkiller = "_botkiller_xvg9q_140";
const button$2 = "_button_xvg9q_144";
const complete = "_complete_xvg9q_204";
const completeTitle = "_completeTitle_xvg9q_215";
const completeText = "_completeText_xvg9q_234";
const completeButton = "_completeButton_xvg9q_253";
const formError = "_formError_xvg9q_279";
const formErrorContent = "_formErrorContent_xvg9q_291";
const formErrorMessage = "_formErrorMessage_xvg9q_295";
const formErrorIcon = "_formErrorIcon_xvg9q_303";
const footer = "_footer_xvg9q_308";
const styles$e = {
  contact,
  form,
  title: title$a,
  divider: divider$9,
  input,
  botkiller,
  button: button$2,
  complete,
  completeTitle,
  completeText,
  completeButton,
  formError,
  formErrorContent,
  formErrorMessage,
  formErrorIcon,
  footer
};
const meta$3 = () => {
  return baseMeta({
    title: "Contact",
    description: "Send me a message if you’re interested in discussing a project or if you just want to say hi"
  });
};
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;
async function action({ context, request }) {
  const ses = new SESClient({
    region: "us-east-1",
    credentials: {
      accessKeyId: context.cloudflare.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: context.cloudflare.env.AWS_SECRET_ACCESS_KEY
    }
  });
  const formData = await request.formData();
  const isBot = String(formData.get("bot_name"));
  const name2 = String(formData.get("name"));
  const phone = String(formData.get("phone"));
  const email = String(formData.get("email"));
  const message = String(formData.get("message"));
  const errors = {};
  if (isBot)
    return json({ success: true });
  if (!email || !EMAIL_PATTERN.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message) {
    errors.message = "Please enter a message.";
  }
  if (!name2) {
    errors.name = "Please enter your name.";
  }
  if (email.length > MAX_EMAIL_LENGTH) {
    errors.email = `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.`;
  }
  if (message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.`;
  }
  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }
  await ses.send(
    new SendEmailCommand({
      Destination: {
        ToAddresses: [context.cloudflare.env.EMAIL]
      },
      Message: {
        Body: {
          Text: {
            Data: `From: ${name2} <${email}>
Phone: ${phone}

${message}`
          }
        },
        Subject: {
          Data: `Portfolio message from ${name2} (${email})`
        }
      },
      Source: `Portfolio <${context.cloudflare.env.FROM_EMAIL}>`,
      ReplyToAddresses: [email]
    })
  );
  return json({ success: true });
}
const Contact = () => {
  const errorRef = useRef();
  const name2 = useFormInput("");
  const phone = useFormInput("");
  const email = useFormInput("");
  const message = useFormInput("");
  const initDelay2 = tokens.base.durationS;
  const actionData = useActionData();
  const { state } = useNavigation();
  const sending = state === "submitting";
  return /* @__PURE__ */ jsxs(Section, { className: styles$e.contact, children: [
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: !(actionData == null ? void 0 : actionData.success), timeout: 1600, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs(
      Form,
      {
        unstable_viewTransition: true,
        className: styles$e.form,
        method: "post",
        ref: nodeRef,
        children: [
          /* @__PURE__ */ jsx(
            Heading,
            {
              className: styles$e.title,
              "data-status": status,
              level: 3,
              as: "h1",
              style: getDelay(tokens.base.durationXS, initDelay2, 0.3),
              children: /* @__PURE__ */ jsx(DecoderText, { text: "Say hello", start: status !== "exited", delay: 300 })
            }
          ),
          /* @__PURE__ */ jsx(
            Divider,
            {
              className: styles$e.divider,
              "data-status": status,
              style: getDelay(tokens.base.durationXS, initDelay2, 0.4)
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              className: styles$e.botkiller,
              label: "Name",
              name: "bot_name",
              maxLength: MAX_EMAIL_LENGTH
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              className: styles$e.input,
              "data-status": status,
              style: getDelay(tokens.base.durationXS, initDelay2),
              autoComplete: "name",
              label: "Your name",
              type: "text",
              name: "name",
              maxLength: MAX_EMAIL_LENGTH,
              ...name2
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              className: styles$e.input,
              "data-status": status,
              style: getDelay(tokens.base.durationXS, initDelay2),
              autoComplete: "tel",
              label: "Your phone number",
              type: "tel",
              name: "phone",
              maxLength: MAX_EMAIL_LENGTH,
              ...phone
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              className: styles$e.input,
              "data-status": status,
              style: getDelay(tokens.base.durationXS, initDelay2),
              autoComplete: "email",
              label: "Your email",
              type: "email",
              name: "email",
              maxLength: MAX_EMAIL_LENGTH,
              ...email
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              required: true,
              multiline: true,
              className: styles$e.input,
              "data-status": status,
              style: getDelay(tokens.base.durationS, initDelay2),
              autoComplete: "off",
              label: "Message",
              name: "message",
              maxLength: MAX_MESSAGE_LENGTH,
              ...message
            }
          ),
          /* @__PURE__ */ jsx(
            Transition,
            {
              unmount: true,
              in: !sending && (actionData == null ? void 0 : actionData.errors),
              timeout: msToNum(tokens.base.durationM),
              children: ({ status: errorStatus, nodeRef: nodeRef2 }) => {
                var _a, _b, _c, _d;
                return /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: styles$e.formError,
                    ref: nodeRef2,
                    "data-status": errorStatus,
                    style: cssProps({
                      height: errorStatus ? (_a = errorRef.current) == null ? void 0 : _a.offsetHeight : 0
                    }),
                    children: /* @__PURE__ */ jsx("div", { className: styles$e.formErrorContent, ref: errorRef, children: /* @__PURE__ */ jsxs("div", { className: styles$e.formErrorMessage, children: [
                      /* @__PURE__ */ jsx(Icon, { className: styles$e.formErrorIcon, icon: "error" }),
                      (_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.name,
                      (_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.email,
                      (_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.message
                    ] }) })
                  }
                );
              }
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              className: styles$e.button,
              "data-status": status,
              "data-sending": sending,
              style: getDelay(tokens.base.durationM, initDelay2),
              disabled: sending,
              loading: sending,
              loadingText: "Sending...",
              icon: "send",
              type: "submit",
              children: "Send message"
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: actionData == null ? void 0 : actionData.success, children: ({ status, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$e.complete, "aria-live": "polite", ref: nodeRef, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h3",
          className: styles$e.completeTitle,
          "data-status": status,
          children: "Message Sent"
        }
      ),
      /* @__PURE__ */ jsx(
        Text,
        {
          size: "l",
          as: "p",
          className: styles$e.completeText,
          "data-status": status,
          style: getDelay(tokens.base.durationXS),
          children: "I’ll get back to you within a couple days, sit tight"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          secondary: true,
          iconHoverShift: true,
          className: styles$e.completeButton,
          "data-status": status,
          style: getDelay(tokens.base.durationM),
          href: "/",
          icon: "chevron-right",
          children: "Back to homepage"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, { className: styles$e.footer })
  ] });
};
function getDelay(delayMs, offset = numToMs(0), multiplier = 1) {
  const numDelay = msToNum(delayMs) * multiplier;
  return cssProps({ delay: numToMs((msToNum(offset) + numDelay).toFixed(0)) });
}
const route12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action,
  default: Contact,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const intro = "_intro_8cace_1";
const text = "_text_8cace_9";
const name = "_name_8cace_36";
const greeting = "_greeting_8cace_75";
const specializeLabel = "_specializeLabel_8cace_100";
const introTextReveal = "_introTextReveal_8cace_1";
const row = "_row_8cace_130";
const word = "_word_8cace_159";
const line = "_line_8cace_235";
const introLine = "_introLine_8cace_1";
const scrollIndicator = "_scrollIndicator_8cace_284";
const introScrollIndicator = "_introScrollIndicator_8cace_1";
const mobileScrollIndicator = "_mobileScrollIndicator_8cace_351";
const introMobileScrollIndicator = "_introMobileScrollIndicator_8cace_1";
const styles$d = {
  intro,
  text,
  name,
  greeting,
  specializeLabel,
  introTextReveal,
  row,
  word,
  line,
  introLine,
  scrollIndicator,
  introScrollIndicator,
  mobileScrollIndicator,
  introMobileScrollIndicator
};
const DisplacementSphere = lazy(
  () => import("./displacement-sphere-BPS6CPII.js").then((module) => ({ default: module.DisplacementSphere }))
);
function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines: disciplines2 } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines2.slice(0, -1).join(", "), disciplines2.slice(-1)[0]].join(
    ", and "
  );
  const currentDiscipline = disciplines2.find((item2, index2) => index2 === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  useInterval(
    () => {
      const index2 = (disciplineIndex + 1) % disciplines2.length;
      setDisciplineIndex(index2);
    },
    5e3,
    theme
  );
  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);
  const handleScrollClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$d.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx(Transition, { in: true, timeout: 3e3, children: ({ visible, status }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        isHydrated && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(DisplacementSphere, {}) }),
        /* @__PURE__ */ jsxs("header", { className: styles$d.text, children: [
          /* @__PURE__ */ jsx("p", { className: styles$d.greeting, "data-visible": visible, "aria-hidden": true, children: "HEY! MY NAME IS" }),
          /* @__PURE__ */ jsx("h1", { className: styles$d.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "NADIM SHAHRIAR", delay: 300 }) }),
          /* @__PURE__ */ jsx(VisuallyHidden, { children: "NADIM SHAHRIAR" }),
          /* @__PURE__ */ jsxs(Heading, { level: 1, as: "h2", className: styles$d.title, children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$d.label, children: `I specialize in ${introLabel}` }),
            /* @__PURE__ */ jsxs("span", { "aria-hidden": true, className: styles$d.row, children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: styles$d.specializeLabel,
                  "data-status": status,
                  style: cssProps({ delay: tokens.base.durationXS }),
                  children: "I SPECIALIZE IN"
                }
              ),
              /* @__PURE__ */ jsx("span", { className: styles$d.line, "data-status": status })
            ] }),
            /* @__PURE__ */ jsx("div", { className: styles$d.row, children: disciplines2.map((item2) => /* @__PURE__ */ jsx(
              Transition,
              {
                unmount: true,
                in: item2 === currentDiscipline,
                timeout: { enter: 3e3, exit: 2e3 },
                children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    ref: nodeRef,
                    className: styles$d.word,
                    "data-status": status2,
                    style: cssProps({ delay: tokens.base.durationL }),
                    children: item2
                  }
                )
              },
              item2
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            to: "/#project-1",
            className: styles$d.scrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" })
          }
        ),
        /* @__PURE__ */ jsxs(
          Link$1,
          {
            to: "/#project-1",
            className: styles$d.mobileScrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: [
              /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            ]
          }
        )
      ] }) }, theme)
    }
  );
}
const profileImgLarge = "/assets/profile-large-C0lyeue6.jpg";
const profileImgPlaceholder = "/assets/profile-placeholder-DOgU6wR2.jpg";
const profileImg = "/assets/profile-BUxMBtWv.jpg";
const profile = "_profile_1hwms_1";
const content$a = "_content_1hwms_37";
const column$1 = "_column_1hwms_50";
const title$9 = "_title_1hwms_59";
const description$9 = "_description_1hwms_70";
const expandable = "_expandable_1hwms_82";
const descriptionExpanded = "_descriptionExpanded_1hwms_97";
const showMoreBtn = "_showMoreBtn_1hwms_104";
const tag$4 = "_tag_1hwms_135";
const tagText$4 = "_tagText_1hwms_148";
const image$1 = "_image_1hwms_169";
const button$1 = "_button_1hwms_175";
const stats = "_stats_1hwms_187";
const statCard = "_statCard_1hwms_210";
const statContent = "_statContent_1hwms_228";
const statIcon = "_statIcon_1hwms_234";
const statNumber = "_statNumber_1hwms_246";
const statLabel = "_statLabel_1hwms_253";
const styles$c = {
  profile,
  content: content$a,
  column: column$1,
  title: title$9,
  description: description$9,
  expandable,
  descriptionExpanded,
  showMoreBtn,
  tag: tag$4,
  tagText: tagText$4,
  image: image$1,
  button: button$1,
  stats,
  statCard,
  statContent,
  statIcon,
  statNumber,
  statLabel
};
const ProfileText = ({ visible, titleId, expanded, onToggle }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Heading, { className: styles$c.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "About Me", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsx(Text, { className: styles$c.description, "data-visible": visible, size: "l", as: "p", children: "I am Md. Nadim Shahriar Apurbo, a passionate tech enthusiast driven by innovation, creativity, and problem-solving. I enjoy exploring modern technologies and turning ideas into practical solutions that create real-world impact. With a strong curiosity for learning, I continuously strive to improve my skills and stay updated with the latest advancements in the tech industry." }),
  /* @__PURE__ */ jsxs(Text, { className: styles$c.description, "data-visible": visible, size: "l", as: "p", children: [
    /* @__PURE__ */ jsx("strong", { children: "Passion for Web Development" }),
    /* @__PURE__ */ jsx("br", {}),
    "Web development is one of my greatest interests, as it allows me to combine creativity with technology to build meaningful digital experiences. I enjoy designing and developing responsive, user-friendly, and efficient web applications that solve problems and enhance user interaction. From front-end design to back-end functionality, I am passionate about creating modern web solutions that are both functional and visually engaging."
  ] }),
  /* @__PURE__ */ jsxs(Text, { className: styles$c.description, "data-visible": visible, size: "l", as: "p", children: [
    /* @__PURE__ */ jsx("strong", { children: "Vision & Goals" }),
    /* @__PURE__ */ jsx("br", {}),
    "I strongly believe that technology has the power to shape a smarter and better future.",
    " ",
    !expanded && /* @__PURE__ */ jsx(
      "button",
      {
        className: styles$c.showMoreBtn,
        "data-visible": visible,
        onClick: onToggle,
        "aria-expanded": expanded,
        children: "Show more"
      }
    )
  ] }),
  /* @__PURE__ */ jsx("div", { className: styles$c.expandable, "data-expanded": expanded, children: /* @__PURE__ */ jsxs(Text, { className: styles$c.descriptionExpanded, "data-visible": visible, size: "l", as: "p", children: [
    "My goal is to continue learning, innovating, and contributing to impactful projects that make a difference. I am always eager to take on new challenges, collaborate with like-minded individuals, and grow both personally and professionally in the ever-evolving world of technology.",
    " ",
    expanded && /* @__PURE__ */ jsx(
      "button",
      {
        className: styles$c.showMoreBtn,
        "data-visible": visible,
        onClick: onToggle,
        "aria-expanded": expanded,
        children: "Show less"
      }
    )
  ] }) })
] });
const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const titleId = `${id}-title`;
  const handleToggle = useCallback(() => setExpanded((prev) => !prev), []);
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$c.profile,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx(Transition, { in: visible || focused, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$c.content, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$c.column, children: [
          /* @__PURE__ */ jsx(ProfileText, { visible: visible2, titleId, expanded, onToggle: handleToggle }),
          /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              className: styles$c.button,
              "data-visible": visible2,
              href: "/contact",
              icon: "send",
              children: "Send me a message"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$c.column, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$c.tag, "aria-hidden": true, children: [
            /* @__PURE__ */ jsx(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible2,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx("div", { className: styles$c.tagText, "data-visible": visible2, children: "About me" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: styles$c.image, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              reveal: true,
              delay: 100,
              placeholder: profileImgPlaceholder,
              srcSet: `${profileImg} 480w, ${profileImgLarge} 960w`,
              width: 960,
              height: 1280,
              sizes: `(max-width: ${media.mobile}px) 100vw, 480px`,
              alt: "Portrait of Md. Nadim Shahriar Apurbo"
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$c.stats, "data-visible": visible2, children: [
          /* @__PURE__ */ jsxs(Link$1, { to: "/projects", className: styles$c.statCard, children: [
            /* @__PURE__ */ jsxs("div", { className: styles$c.statContent, children: [
              /* @__PURE__ */ jsx("span", { className: styles$c.statNumber, children: "10+" }),
              /* @__PURE__ */ jsx("span", { className: styles$c.statLabel, children: "Total Projects" })
            ] }),
            /* @__PURE__ */ jsx(Icon, { icon: "chevron-right", className: styles$c.statIcon })
          ] }),
          /* @__PURE__ */ jsxs(Link$1, { to: "/achievements", className: styles$c.statCard, children: [
            /* @__PURE__ */ jsxs("div", { className: styles$c.statContent, children: [
              /* @__PURE__ */ jsx("span", { className: styles$c.statNumber, children: "5" }),
              /* @__PURE__ */ jsx("span", { className: styles$c.statLabel, children: "National Awards" })
            ] }),
            /* @__PURE__ */ jsx(Icon, { icon: "chevron-right", className: styles$c.statIcon })
          ] }),
          /* @__PURE__ */ jsxs(Link$1, { to: "/achievements", className: styles$c.statCard, children: [
            /* @__PURE__ */ jsxs("div", { className: styles$c.statContent, children: [
              /* @__PURE__ */ jsx("span", { className: styles$c.statNumber, children: "2" }),
              /* @__PURE__ */ jsx("span", { className: styles$c.statLabel, children: "International Awards" })
            ] }),
            /* @__PURE__ */ jsx(Icon, { icon: "chevron-right", className: styles$c.statIcon })
          ] }),
          /* @__PURE__ */ jsxs(Link$1, { to: "/articles", className: styles$c.statCard, children: [
            /* @__PURE__ */ jsxs("div", { className: styles$c.statContent, children: [
              /* @__PURE__ */ jsx("span", { className: styles$c.statNumber, children: "15+" }),
              /* @__PURE__ */ jsx("span", { className: styles$c.statLabel, children: "Total Articles" })
            ] }),
            /* @__PURE__ */ jsx(Icon, { icon: "chevron-right", className: styles$c.statIcon })
          ] })
        ] })
      ] }) })
    }
  );
};
const resume = "_resume_1ehbu_1";
const container$2 = "_container_1ehbu_17";
const header$2 = "_header_1ehbu_22";
const tag$3 = "_tag_1ehbu_27";
const tagText$3 = "_tagText_1ehbu_36";
const sectionTitle$3 = "_sectionTitle_1ehbu_57";
const content$9 = "_content_1ehbu_67";
const column = "_column_1ehbu_79";
const columnTitle$1 = "_columnTitle_1ehbu_85";
const timeline = "_timeline_1ehbu_97";
const timelineItem = "_timelineItem_1ehbu_103";
const card = "_card_1ehbu_154";
const cardHeader = "_cardHeader_1ehbu_170";
const cardTitle = "_cardTitle_1ehbu_177";
const cardSubtitle = "_cardSubtitle_1ehbu_182";
const cardIcon = "_cardIcon_1ehbu_187";
const divider$8 = "_divider_1ehbu_206";
const cardDescription = "_cardDescription_1ehbu_213";
const styles$b = {
  resume,
  container: container$2,
  header: header$2,
  tag: tag$3,
  tagText: tagText$3,
  sectionTitle: sectionTitle$3,
  content: content$9,
  column,
  columnTitle: columnTitle$1,
  timeline,
  timelineItem,
  card,
  cardHeader,
  cardTitle,
  cardSubtitle,
  cardIcon,
  divider: divider$8,
  cardDescription
};
const TimelineItem = ({ title: title2, subtitle, description: description2, visible, index: index2 }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles$b.timelineItem,
      "data-visible": visible,
      style: cssProps({ delay: `${index2 * 150}ms` }),
      children: /* @__PURE__ */ jsxs("div", { className: styles$b.card, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$b.cardHeader, children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx(Heading, { level: 4, as: "h4", className: styles$b.cardTitle, children: title2 }),
            /* @__PURE__ */ jsx(Text, { size: "s", className: styles$b.cardSubtitle, children: subtitle })
          ] }),
          /* @__PURE__ */ jsx("div", { className: styles$b.cardIcon, children: /* @__PURE__ */ jsx(Icon, { icon: "link" }) })
        ] }),
        description2 && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: styles$b.divider }),
          /* @__PURE__ */ jsx(Text, { size: "s", className: styles$b.cardDescription, as: "p", children: description2 })
        ] })
      ] })
    }
  );
};
const Resume = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$b.resume,
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx(Transition, { in: visible, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$b.container, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$b.header, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$b.tag, "aria-hidden": true, children: [
            /* @__PURE__ */ jsx(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible2,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx("div", { className: styles$b.tagText, "data-visible": visible2, children: "Resume" })
          ] }),
          /* @__PURE__ */ jsx(
            Heading,
            {
              className: styles$b.sectionTitle,
              "data-visible": visible2,
              level: 2,
              id: titleId,
              children: /* @__PURE__ */ jsx(DecoderText, { text: "Experience & Education", start: visible2, delay: 300 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$b.content, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$b.column, children: [
            /* @__PURE__ */ jsx(Heading, { className: styles$b.columnTitle, "data-visible": visible2, level: 3, children: "Education Qualification" }),
            /* @__PURE__ */ jsxs("div", { className: styles$b.timeline, children: [
              /* @__PURE__ */ jsx(
                TimelineItem,
                {
                  title: "Bachelor",
                  subtitle: "Upcoming...",
                  visible: visible2,
                  index: 0
                }
              ),
              /* @__PURE__ */ jsx(
                TimelineItem,
                {
                  title: "Higher Secondary Certificate (HSC - 2026)",
                  subtitle: "Rajshahi Cantonment Public School & College (2024 - Present)",
                  visible: visible2,
                  index: 1
                }
              ),
              /* @__PURE__ */ jsx(
                TimelineItem,
                {
                  title: "Secondary School Certificate (SSC - 2024)",
                  subtitle: "Nazipur Govt. Model High School (2019 - 2024)",
                  visible: visible2,
                  index: 2
                }
              ),
              /* @__PURE__ */ jsx(
                TimelineItem,
                {
                  title: "Primary Education Certificate (PEC - 2018)",
                  subtitle: "Al Hera Islami Academy (2014 - 2018)",
                  visible: visible2,
                  index: 3
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$b.column, children: [
            /* @__PURE__ */ jsx(Heading, { className: styles$b.columnTitle, "data-visible": visible2, level: 3, children: "Experience" }),
            /* @__PURE__ */ jsxs("div", { className: styles$b.timeline, children: [
              /* @__PURE__ */ jsx(
                TimelineItem,
                {
                  title: "Arionys Ltd.",
                  subtitle: "Co-Founder & CEO (Nov 2025 - Present)",
                  description: "Arionys Ltd. is a Bangladesh-based tech company offering software, AI, and digital solutions for businesses.",
                  visible: visible2,
                  index: 4
                }
              ),
              /* @__PURE__ */ jsx(
                TimelineItem,
                {
                  title: "RoboSuperior",
                  subtitle: "Founder (Jan 2023 - Present)",
                  description: "Team RoboSuperior is a robotics team that is dedicated to creating socially intelligent machines that enrich the quality of our lives and educationally enriching the students.",
                  visible: visible2,
                  index: 4
                }
              ),
              /* @__PURE__ */ jsx(
                TimelineItem,
                {
                  title: "Team EXO MAX | NASA Conrad Challenge",
                  subtitle: "Founder (June 2023 - June 2024)",
                  description: "Team Exo Max competed in the NASA Conrad Challenge, creating accident prevention technology to improve safety and sustainability. Their innovation inspired future explorers.",
                  visible: visible2,
                  index: 6
                }
              )
            ] })
          ] })
        ] })
      ] }) })
    }
  );
};
const skills$8 = "_skills_1fgi4_1";
const container$1 = "_container_1fgi4_7";
const header$1 = "_header_1fgi4_19";
const tag$2 = "_tag_1fgi4_26";
const tagText$2 = "_tagText_1fgi4_35";
const sectionTitle$2 = "_sectionTitle_1fgi4_47";
const grid = "_grid_1fgi4_56";
const techColumn = "_techColumn_1fgi4_68";
const profColumn = "_profColumn_1fgi4_73";
const columnTitle = "_columnTitle_1fgi4_79";
const techSkillsList = "_techSkillsList_1fgi4_91";
const techItem = "_techItem_1fgi4_98";
const techTitleGroup = "_techTitleGroup_1fgi4_111";
const techIcon = "_techIcon_1fgi4_117";
const barHeader = "_barHeader_1fgi4_133";
const percentBadge = "_percentBadge_1fgi4_140";
const techName = "_techName_1fgi4_153";
const techPercent = "_techPercent_1fgi4_158";
const progressBar = "_progressBar_1fgi4_162";
const progressFill = "_progressFill_1fgi4_171";
const circularGrid = "_circularGrid_1fgi4_189";
const profItem = "_profItem_1fgi4_195";
const circleContainer = "_circleContainer_1fgi4_209";
const circleTrack = "_circleTrack_1fgi4_216";
const circleProgress = "_circleProgress_1fgi4_220";
const circleText = "_circleText_1fgi4_231";
const profName = "_profName_1fgi4_244";
const styles$a = {
  skills: skills$8,
  container: container$1,
  header: header$1,
  tag: tag$2,
  tagText: tagText$2,
  sectionTitle: sectionTitle$2,
  grid,
  techColumn,
  profColumn,
  columnTitle,
  techSkillsList,
  techItem,
  techTitleGroup,
  techIcon,
  barHeader,
  percentBadge,
  techName,
  techPercent,
  progressBar,
  progressFill,
  circularGrid,
  profItem,
  circleContainer,
  circleTrack,
  circleProgress,
  circleText,
  profName
};
const techSkills = [
  {
    name: "Web Development",
    percentage: 90,
    icon: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", fill: "none", children: [
      /* @__PURE__ */ jsx("circle", { cx: "230", cy: "230", r: "150", stroke: "currentColor", strokeWidth: "18" }),
      /* @__PURE__ */ jsx("path", { d: "M230 80 C170 120 170 340 230 380", stroke: "currentColor", strokeWidth: "18", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M230 80 C290 120 290 340 230 380", stroke: "currentColor", strokeWidth: "18", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("line", { x1: "80", y1: "230", x2: "380", y2: "230", stroke: "currentColor", strokeWidth: "18", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M120 150 C180 190 280 190 340 150", stroke: "currentColor", strokeWidth: "18", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M120 310 C180 270 280 270 340 310", stroke: "currentColor", strokeWidth: "18", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("line", { x1: "230", y1: "80", x2: "230", y2: "380", stroke: "currentColor", strokeWidth: "18", strokeLinecap: "round" }),
      /* @__PURE__ */ jsx("path", { d: "M320 270 L420 305 L385 330 L425 380 L395 405 L355 355 L330 390 Z", fill: "var(--background)", stroke: "currentColor", strokeWidth: "18", strokeLinejoin: "round" })
    ] })
  },
  {
    name: "Arduino",
    percentage: 85,
    icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "24", height: "24", viewBox: "0 0 48 48", children: [
      /* @__PURE__ */ jsxs("linearGradient", { id: "arduino-grad", x1: "21.175", x2: "25.872", y1: "10.027", y2: "33.258", gradientUnits: "userSpaceOnUse", children: [
        /* @__PURE__ */ jsx("stop", { offset: "0", stopColor: "#00b3ba" }),
        /* @__PURE__ */ jsx("stop", { offset: ".998", stopColor: "#00979c" })
      ] }),
      /* @__PURE__ */ jsx("path", { fill: "url(#arduino-grad)", d: "M36,36c-5.018,0-9.425-3.859-12-7.714C21.425,32.141,17.018,36,12,36C5.383,36,0,30.617,0,24 s5.383-12,12-12c5.935,0,9.884,4.448,12,7.755C26.116,16.448,30.065,12,36,12c6.617,0,12,5.383,12,12S42.617,36,36,36z M26.181,24.037C27.828,27.614,32,32,36,32c4.411,0,8-3.589,8-8s-3.589-8-8-8C30.584,16,27.199,21.954,26.181,24.037z M12,16 c-4.411,0-8,3.589-8,8s3.589,8,8,8c4.017,0,8.206-4.422,9.823-7.963C20.837,22.018,17.445,16,12,16z M16,24.5v-1 c0-0.276-0.224-0.5-0.5-0.5h-7C8.224,23,8,23.224,8,23.5v1C8,24.776,8.224,25,8.5,25h7C15.776,25,16,24.776,16,24.5z M39.5,23H37 v-2.5c0-0.276-0.224-0.5-0.5-0.5h-1c-0.276,0-0.5,0.224-0.5,0.5V23h-2.5c-0.276,0-0.5,0.224-0.5,0.5v1c0,0.276,0.224,0.5,0.5,0.5H35 v2.5c0,0.276,0.224,0.5,0.5,0.5h1c0.276,0,0.5-0.224,0.5-0.5V25h2.5c0.276,0,0.5-0.224,0.5-0.5v-1C40,23.224,39.776,23,39.5,23z" })
    ] })
  },
  {
    name: "C",
    percentage: 80,
    icon: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", children: [
      /* @__PURE__ */ jsxs("defs", { children: [
        /* @__PURE__ */ jsxs("linearGradient", { id: "gradTop", x1: "0", y1: "0", x2: "1", y2: "1", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#C084FC" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#7C3AED" })
        ] }),
        /* @__PURE__ */ jsxs("linearGradient", { id: "gradBottom", x1: "0", y1: "0", x2: "1", y2: "1", children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "#4C1D95" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "#2E026D" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("polygon", { points: "256,40 430,140 430,372 256,472 82,372 82,140", fill: "url(#gradTop)" }),
      /* @__PURE__ */ jsx("polygon", { points: "82,372 256,472 430,372 256,256", fill: "url(#gradBottom)" }),
      /* @__PURE__ */ jsx("path", { d: "M256 110 A146 146 0 1 0 256 402 L256 330 A74 74 0 1 1 256 182 Z", fill: "white" }),
      /* @__PURE__ */ jsx("path", { d: "M256 182 A74 74 0 0 0 256 330 L360 256 Z", fill: "#7C3AED", opacity: "0.7" }),
      /* @__PURE__ */ jsxs("g", { fill: "white", children: [
        /* @__PURE__ */ jsx("rect", { x: "330", y: "200", width: "12", height: "90", rx: "3" }),
        /* @__PURE__ */ jsx("rect", { x: "365", y: "200", width: "12", height: "90", rx: "3" }),
        /* @__PURE__ */ jsx("rect", { x: "310", y: "220", width: "90", height: "12", rx: "3" }),
        /* @__PURE__ */ jsx("rect", { x: "300", y: "255", width: "90", height: "12", rx: "3" })
      ] })
    ] })
  },
  {
    name: "Python",
    percentage: 75,
    icon: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "24", height: "24", viewBox: "0 0 48 48", children: [
      /* @__PURE__ */ jsx("path", { fill: "#0277BD", d: "M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z" }),
      /* @__PURE__ */ jsx("path", { fill: "#FFC107", d: "M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z" })
    ] })
  },
  {
    name: "AI and ML",
    percentage: 80,
    icon: /* @__PURE__ */ jsxs("svg", { width: "24", height: "24", viewBox: "0 0 512 512", xmlns: "http://www.w3.org/2000/svg", fill: "none", children: [
      /* @__PURE__ */ jsx("path", { d: "M256 90 C270 130 286 146 326 160 C286 174 270 190 256 230 C242 190 226 174 186 160 C226 146 242 130 256 90Z", fill: "currentColor" }),
      /* @__PURE__ */ jsx("path", { d: "M370 120 C378 142 388 152 410 160 C388 168 378 178 370 200 C362 178 352 168 330 160 C352 152 362 142 370 120Z", fill: "currentColor" }),
      /* @__PURE__ */ jsx("path", { d: "M405 205 C417 235 430 248 460 260 C430 272 417 285 405 315 C393 285 380 272 350 260 C380 248 393 235 405 205Z", fill: "currentColor" }),
      /* @__PURE__ */ jsx("path", { d: "M140 420 L210 250 H270 L340 420 H285 L268 375 H210 L193 420 Z M225 330 H253 L239 292 Z", fill: "currentColor" }),
      /* @__PURE__ */ jsx("rect", { x: "360", y: "250", width: "40", height: "170", rx: "6", fill: "currentColor" })
    ] })
  }
];
const profSkills = [
  { name: "Creativity", percentage: 80 },
  { name: "Communication", percentage: 90 },
  { name: "Problem Solving", percentage: 95 },
  { name: "Team Work", percentage: 85 }
];
const Skills = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$a.skills,
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      children: /* @__PURE__ */ jsx(Transition, { in: visible, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$a.container, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$a.header, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$a.tag, "aria-hidden": true, children: [
            /* @__PURE__ */ jsx(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible2,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx("div", { className: styles$a.tagText, "data-visible": visible2, children: "Skills" })
          ] }),
          /* @__PURE__ */ jsx(
            Heading,
            {
              className: styles$a.sectionTitle,
              "data-visible": visible2,
              level: 2,
              id: titleId,
              children: /* @__PURE__ */ jsx(DecoderText, { text: "My Expertise", start: visible2, delay: 300 })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$a.grid, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$a.techColumn, children: [
            /* @__PURE__ */ jsx(Heading, { level: 4, className: styles$a.columnTitle, "data-visible": visible2, children: /* @__PURE__ */ jsx(DecoderText, { text: "Technical Skills", start: visible2, delay: 500 }) }),
            /* @__PURE__ */ jsx("div", { className: styles$a.techSkillsList, children: techSkills.map((skill, index2) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: styles$a.techItem,
                "data-visible": visible2,
                style: cssProps({ delay: `${index2 * 150}ms` }),
                children: [
                  /* @__PURE__ */ jsxs("div", { className: styles$a.barHeader, children: [
                    /* @__PURE__ */ jsxs("div", { className: styles$a.techTitleGroup, children: [
                      /* @__PURE__ */ jsx("div", { className: styles$a.techIcon, children: skill.icon }),
                      /* @__PURE__ */ jsx(Text, { size: "m", className: styles$a.techName, as: "span", children: skill.name })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: styles$a.percentBadge, children: /* @__PURE__ */ jsxs(Text, { size: "s", as: "span", children: [
                      skill.percentage,
                      "%"
                    ] }) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: styles$a.progressBar, children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: styles$a.progressFill,
                      style: { width: visible2 ? `${skill.percentage}%` : "0%" }
                    }
                  ) })
                ]
              },
              skill.name
            )) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$a.profColumn, children: [
            /* @__PURE__ */ jsx(Heading, { level: 4, className: styles$a.columnTitle, "data-visible": visible2, children: /* @__PURE__ */ jsx(DecoderText, { text: "Professional Skills", start: visible2, delay: 500 }) }),
            /* @__PURE__ */ jsx("div", { className: styles$a.circularGrid, children: profSkills.map((skill, index2) => {
              const radius = 55;
              const circumference = 2 * Math.PI * radius;
              const strokeDashoffset = visible2 ? circumference - skill.percentage / 100 * circumference : circumference;
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: styles$a.profItem,
                  "data-visible": visible2,
                  style: cssProps({ delay: `${(index2 + 4) * 150}ms` }),
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: styles$a.circleContainer, children: [
                      /* @__PURE__ */ jsxs("svg", { width: "140", height: "140", viewBox: "0 0 140 140", children: [
                        /* @__PURE__ */ jsx(
                          "circle",
                          {
                            cx: "70",
                            cy: "70",
                            r: radius,
                            fill: "none",
                            stroke: "var(--backgroundLight)",
                            strokeWidth: "8",
                            className: styles$a.circleTrack
                          }
                        ),
                        /* @__PURE__ */ jsx(
                          "circle",
                          {
                            cx: "70",
                            cy: "70",
                            r: radius,
                            fill: "none",
                            strokeWidth: "8",
                            strokeDasharray: circumference,
                            strokeDashoffset,
                            strokeLinecap: "round",
                            className: styles$a.circleProgress
                          }
                        )
                      ] }),
                      /* @__PURE__ */ jsxs(Text, { size: "s", className: styles$a.circleText, children: [
                        skill.percentage,
                        "%"
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx(Text, { size: "m", className: styles$a.profName, children: skill.name })
                  ]
                },
                skill.name
              );
            }) })
          ] })
        ] })
      ] }) })
    }
  );
};
const achievements = "_achievements_16dt9_2";
const container = "_container_16dt9_16";
const header = "_header_16dt9_21";
const tag$1 = "_tag_16dt9_26";
const tagText$1 = "_tagText_16dt9_35";
const sectionTitle$1 = "_sectionTitle_16dt9_56";
const sectionDescription = "_sectionDescription_16dt9_66";
const achievementsList = "_achievementsList_16dt9_77";
const achievement$8 = "_achievement_16dt9_2";
const content$8 = "_content_16dt9_116";
const details = "_details_16dt9_143";
const index = "_index_16dt9_149";
const indexNumber = "_indexNumber_16dt9_158";
const year$8 = "_year_16dt9_171";
const category$8 = "_category_16dt9_184";
const title$8 = "_title_16dt9_199";
const description$8 = "_description_16dt9_217";
const button = "_button_16dt9_234";
const preview = "_preview_16dt9_253";
const image = "_image_16dt9_268";
const styles$9 = {
  achievements,
  container,
  header,
  tag: tag$1,
  tagText: tagText$1,
  sectionTitle: sectionTitle$1,
  sectionDescription,
  achievementsList,
  achievement: achievement$8,
  content: content$8,
  details,
  index,
  indexNumber,
  year: year$8,
  category: category$8,
  title: title$8,
  description: description$8,
  button,
  preview,
  image
};
const home = "_home_1wpqd_1";
const projectsHeader = "_projectsHeader_1wpqd_12";
const tag = "_tag_1wpqd_20";
const tagText = "_tagText_1wpqd_29";
const sectionTitle = "_sectionTitle_1wpqd_50";
const seeMoreContainer = "_seeMoreContainer_1wpqd_60";
const styles$8 = {
  home,
  projectsHeader,
  tag,
  tagText,
  sectionTitle,
  seeMoreContainer
};
const Achievements = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$9.achievements,
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      children: /* @__PURE__ */ jsx(Transition, { in: visible, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$9.container, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$9.header, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$9.tag, "aria-hidden": true, children: [
            /* @__PURE__ */ jsx(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible2,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx("div", { className: styles$9.tagText, "data-visible": visible2, children: "Achievements" })
          ] }),
          /* @__PURE__ */ jsx(
            Heading,
            {
              className: styles$9.sectionTitle,
              "data-visible": visible2,
              level: 2,
              id: titleId,
              children: /* @__PURE__ */ jsx(DecoderText, { text: "Milestones & Recognition", start: visible2, delay: 300 })
            }
          ),
          /* @__PURE__ */ jsx(Text, { className: styles$9.sectionDescription, "data-visible": visible2, size: "l", as: "p", children: "Key accomplishments and milestones throughout my career journey" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: styles$9.achievementsList, children: achievementsData.filter((a) => a.highlighted).map((achievement2, index2) => /* @__PURE__ */ jsx(
          AchievementSummary,
          {
            id: `${id}-${index2 + 1}`,
            sectionRef: null,
            visible: visible2,
            index: index2 + 1,
            title: achievement2.title,
            description: achievement2.description,
            year: achievement2.year,
            category: achievement2.category,
            image: achievement2.image,
            buttonText: achievement2.buttonText,
            buttonLink: achievement2.buttonLink,
            alternate: index2 % 2 === 1
          },
          `${achievement2.title}-${index2}`
        )) }),
        /* @__PURE__ */ jsx("div", { className: styles$8.seeMoreContainer, "data-visible": visible2, children: /* @__PURE__ */ jsx(Button, { href: "/achievements", iconHoverShift: true, iconEnd: "arrow-right", children: "See More Achievements" }) })
      ] }) })
    }
  );
};
const links = () => {
  return [
    {
      rel: "prefetch",
      href: "/draco/draco_wasm_wrapper.js",
      as: "script",
      type: "text/javascript",
      importance: "low"
    },
    {
      rel: "prefetch",
      href: "/draco/draco_decoder.wasm",
      as: "fetch",
      type: "application/wasm",
      importance: "low"
    }
  ];
};
const meta$2 = () => {
  return baseMeta({
    title: "Designer + Developer",
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`
  });
};
const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro2 = useRef();
  const details2 = useRef();
  const achievements2 = useRef();
  const resume2 = useRef();
  const skills2 = useRef();
  const projectsHeader2 = useRef();
  const projectRefs = useRef([]);
  useEffect(() => {
    const sections = [
      intro2,
      details2,
      projectsHeader2,
      ...projectRefs.current.map((ref) => ({ current: ref })),
      achievements2,
      resume2,
      skills2
    ];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2))
              return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    const indicatorObserver = new IntersectionObserver(
      ([entry2]) => {
        setScrollIndicatorHidden(!entry2.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );
    sections.forEach((section2) => {
      if (section2.current) {
        sectionObserver.observe(section2.current);
      }
    });
    indicatorObserver.observe(intro2.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("div", { className: styles$8.home, children: [
    /* @__PURE__ */ jsx(
      Intro,
      {
        id: "intro",
        sectionRef: intro2,
        scrollIndicatorHidden
      }
    ),
    /* @__PURE__ */ jsx(
      Profile,
      {
        sectionRef: details2,
        visible: visibleSections.includes(details2.current),
        id: "details"
      }
    ),
    /* @__PURE__ */ jsx(
      Resume,
      {
        sectionRef: resume2,
        visible: visibleSections.includes(resume2.current),
        id: "resume"
      }
    ),
    /* @__PURE__ */ jsx(
      Skills,
      {
        sectionRef: skills2,
        visible: visibleSections.includes(skills2.current),
        id: "skills"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: styles$8.projectsHeader, ref: projectsHeader2, children: [
      /* @__PURE__ */ jsxs("div", { className: styles$8.tag, "aria-hidden": true, children: [
        /* @__PURE__ */ jsx(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visibleSections.includes(projectsHeader2.current),
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx("div", { className: styles$8.tagText, "data-visible": visibleSections.includes(projectsHeader2.current), children: "Projects" })
      ] }),
      /* @__PURE__ */ jsx(
        Heading,
        {
          className: styles$8.sectionTitle,
          "data-visible": visibleSections.includes(projectsHeader2.current),
          level: 2,
          children: /* @__PURE__ */ jsx(
            DecoderText,
            {
              text: "Featured Work",
              start: visibleSections.includes(projectsHeader2.current),
              delay: 300
            }
          )
        }
      )
    ] }),
    projectsData.filter((p) => p.highlighted).map((project2, index2) => /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: project2.id,
        sectionRef: (el) => {
          if (el)
            projectRefs.current[index2] = el;
        },
        visible: visibleSections.includes(projectRefs.current[index2]),
        index: index2 + 1,
        title: project2.title,
        description: project2.description,
        buttonText: project2.buttonText,
        buttonLink: project2.buttonLink,
        model: project2.model,
        alternate: index2 % 2 === 1
      },
      project2.id
    )),
    /* @__PURE__ */ jsx("div", { className: styles$8.seeMoreContainer, "data-visible": visibleSections.includes(projectRefs.current[projectRefs.current.length - 1]) || true, children: /* @__PURE__ */ jsx(Button, { href: "/projects", iconHoverShift: true, iconEnd: "arrow-right", children: "See More Projects" }) }),
    /* @__PURE__ */ jsx(
      Achievements,
      {
        sectionRef: achievements2,
        visible: visibleSections.includes(achievements2.current),
        id: "achievements"
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  links,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
const meta$1 = () => {
  return [{ title: "404 | Redacted" }];
};
function ErrorBoundary() {
  const error2 = useRouteError();
  return /* @__PURE__ */ jsx(Error$1, { error: error2 });
}
const route14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  loader,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const achievement$7 = "_achievement_10gs8_1";
const listColumn$7 = "_listColumn_10gs8_9";
const framedContainer$7 = "_framedContainer_10gs8_15";
const framedImage$7 = "_framedImage_10gs8_32";
const listWrapper$7 = "_listWrapper_10gs8_44";
const achievementsColumns$7 = "_achievementsColumns_10gs8_54";
const list$7 = "_list_10gs8_9";
const listItem$7 = "_listItem_10gs8_69";
const content$7 = "_content_10gs8_135";
const contentWrapper$7 = "_contentWrapper_10gs8_139";
const contentHeading$7 = "_contentHeading_10gs8_145";
const paragraph$7 = "_paragraph_10gs8_162";
const divider$7 = "_divider_10gs8_175";
const navigation$7 = "_navigation_10gs8_179";
const skillsContainer$7 = "_skillsContainer_10gs8_184";
const skillTag$7 = "_skillTag_10gs8_191";
const styles$7 = {
  achievement: achievement$7,
  listColumn: listColumn$7,
  framedContainer: framedContainer$7,
  framedImage: framedImage$7,
  listWrapper: listWrapper$7,
  achievementsColumns: achievementsColumns$7,
  list: list$7,
  listItem: listItem$7,
  content: content$7,
  contentWrapper: contentWrapper$7,
  contentHeading: contentHeading$7,
  paragraph: paragraph$7,
  divider: divider$7,
  navigation: navigation$7,
  skillsContainer: skillsContainer$7,
  skillTag: skillTag$7
};
const achievementBg$1 = "/assets/conrad bg-DeFtGVAc.jpg";
const title$7 = "Team EXO MAX | Global 2nd Place, Conrad Challenge 2024";
const description$7 = "Represented Bangladesh and earned the title of Global Runner-Up at the Conrad Challenge 2024.";
const year$7 = "2024";
const category$7 = "Competition";
const skills$7 = [
  "Hardware Integration",
  "Research & Analysis",
  "Software Development",
  "Problem Solving",
  "Innovation",
  "Design Thinking",
  "Team Collaboration",
  "Technical Documentation",
  "Project Development",
  "Public Presentation"
];
const meta = () => {
  return baseMeta({ title: title$7, description: description$7, prefix: "Achievements" });
};
const fadeIn$7 = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
const staggerContainer$7 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};
const scaleIn$7 = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};
function ConradChallenge() {
  return /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$7.achievement, children: [
    /* @__PURE__ */ jsx(
      ProjectBackground,
      {
        src: achievementBg$1,
        srcSet: `${achievementBg$1} 800w, ${achievementBg$1} 1920w`,
        placeholder: achievementBg$1,
        opacity: 0.8
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectHeader,
      {
        title: title$7,
        description: description$7,
        url: "https://www.conradchallenge.org",
        roles: [category$7, year$7]
      }
    ),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: styles$7.framedContainer,
        variants: scaleIn$7,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: /* @__PURE__ */ jsx(
          ProjectImage,
          {
            className: styles$7.framedImage,
            src: achievementPlaceholder$5,
            srcSet: `${achievementPlaceholder$5} 800w, ${achievementPlaceholder$5} 1920w`,
            placeholder: achievementPlaceholder$5,
            width: 800,
            height: 500,
            cover: true,
            sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`,
            alt: "Conrad Challenge 2024 Global Runner-Up"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$7,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project Overview" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Represented Bangladesh as a member of Team EXO MAX in the Conrad Challenge 2024, a globally recognized innovation and entrepreneurship competition. Collaborated with a multidisciplinary team to develop an innovative solution addressing a real-world challenge, competing against teams from across the globe and earning the title of Global Runner-Up (2nd Place Worldwide)." })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$7,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$7, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Key Achievements" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$7.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$7.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$7.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$7.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$7, className: styles$7.listItem, children: "Secured Global 2nd Place (Runner-Up) at the Conrad Challenge 2024." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$7, className: styles$7.listItem, children: "Represented Bangladesh on an international innovation and entrepreneurship platform." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$7, className: styles$7.listItem, children: "Developed a solution with strong real-world impact and implementation potential." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$7.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$7.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$7.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$7, className: styles$7.listItem, children: "Successfully presented the project to international judges, industry experts, and mentors." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$7, className: styles$7.listItem, children: "Demonstrated excellence in innovation, teamwork, and problem-solving throughout the competition." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$7,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$7, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "My Contributions" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$7.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$7.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$7.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$7.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$7, className: styles$7.listItem, children: "Led and supported the hardware setup and system integration required for the project." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$7, className: styles$7.listItem, children: "Conducted extensive research and analysis to validate the problem, explore existing solutions, and improve project feasibility." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$7, className: styles$7.listItem, children: "Assisted in preparing technical documentation and presentation materials for competition evaluations." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$7.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$7.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$7.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$7, className: styles$7.listItem, children: "Contributed to the software development process, assisting with implementation, testing, and optimization of key features." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$7, className: styles$7.listItem, children: "Collaborated with team members to refine technical components and enhance overall project performance." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: staggerContainer$7,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$7, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Skills Demonstrated" }) }),
          /* @__PURE__ */ jsx("div", { className: styles$7.skillsContainer, children: skills$7.map((skill) => /* @__PURE__ */ jsx(motion.div, { variants: scaleIn$7, className: styles$7.skillTag, children: skill }, skill)) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { className: styles$7.contentWrapper, children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$7,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: [
          /* @__PURE__ */ jsx(Divider, { className: styles$7.divider }),
          /* @__PURE__ */ jsx("div", { className: styles$7.navigation, children: /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, href: "/", icon: "arrow-left", children: "Back to Home" }) })
        ]
      }
    ) }) })
  ] });
}
const route16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ConradChallenge,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const achievement$6 = "_achievement_10gs8_1";
const listColumn$6 = "_listColumn_10gs8_9";
const framedContainer$6 = "_framedContainer_10gs8_15";
const framedImage$6 = "_framedImage_10gs8_32";
const listWrapper$6 = "_listWrapper_10gs8_44";
const achievementsColumns$6 = "_achievementsColumns_10gs8_54";
const list$6 = "_list_10gs8_9";
const listItem$6 = "_listItem_10gs8_69";
const content$6 = "_content_10gs8_135";
const contentWrapper$6 = "_contentWrapper_10gs8_139";
const contentHeading$6 = "_contentHeading_10gs8_145";
const paragraph$6 = "_paragraph_10gs8_162";
const divider$6 = "_divider_10gs8_175";
const navigation$6 = "_navigation_10gs8_179";
const skillsContainer$6 = "_skillsContainer_10gs8_184";
const skillTag$6 = "_skillTag_10gs8_191";
const styles$6 = {
  achievement: achievement$6,
  listColumn: listColumn$6,
  framedContainer: framedContainer$6,
  framedImage: framedImage$6,
  listWrapper: listWrapper$6,
  achievementsColumns: achievementsColumns$6,
  list: list$6,
  listItem: listItem$6,
  content: content$6,
  contentWrapper: contentWrapper$6,
  contentHeading: contentHeading$6,
  paragraph: paragraph$6,
  divider: divider$6,
  navigation: navigation$6,
  skillsContainer: skillsContainer$6,
  skillTag: skillTag$6
};
const title$6 = "Road Link | Winner, RoboTech Olympiad 2024";
const description$6 = "Developed Road Link, an innovative project focused on improving road safety and transportation efficiency, winning 1st Place at RoboTech Olympiad 2024.";
const year$6 = "2024";
const category$6 = "Competition";
const skills$6 = [
  "Hardware Integration",
  "Embedded Systems",
  "Research & Analysis",
  "Software Development",
  "Prototyping",
  "System Design",
  "Problem Solving",
  "Technical Presentation",
  "Innovation",
  "Project Development"
];
const fadeIn$6 = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
const staggerContainer$6 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};
const scaleIn$6 = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};
function RoboTechOlympiad() {
  return /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$6.achievement, children: [
    /* @__PURE__ */ jsx(
      ProjectBackground,
      {
        src: achievementBg$2,
        srcSet: `${achievementBg$2} 800w, ${achievementBg$2} 1920w`,
        placeholder: achievementBg$2,
        opacity: 0.8
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectHeader,
      {
        title: title$6,
        description: description$6,
        roles: [category$6, year$6]
      }
    ),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: styles$6.framedContainer,
        variants: scaleIn$6,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: /* @__PURE__ */ jsx(
          ProjectImage,
          {
            className: styles$6.framedImage,
            src: achievementPlaceholder$4,
            srcSet: `${achievementPlaceholder$4} 800w, ${achievementPlaceholder$4} 1920w`,
            placeholder: achievementPlaceholder$4,
            width: 800,
            height: 500,
            cover: true,
            sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`,
            alt: "RoboTech Olympiad 2024 1st Place Winner"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$6,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project Overview" }),
          /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
            "Developed ",
            /* @__PURE__ */ jsx(Link, { href: "/projects/roadlink", children: "Road Link" }),
            ", an innovative project focused on improving road safety and transportation efficiency, for the RoboTech Olympiad 2024 organized by RoboTech Valley. The project combined engineering, problem-solving, and technology to address real-world transportation challenges. Competing against talented participants from various institutions, the project was recognized for its innovation, practicality, and potential impact, earning ",
            /* @__PURE__ */ jsx("strong", { children: "1st Place (Winner)" }),
            "."
          ] })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$6,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$6, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Key Achievements" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$6.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$6.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$6.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$6.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$6, className: styles$6.listItem, children: "Winner of RoboTech Olympiad 2024." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$6, className: styles$6.listItem, children: "Developed an innovative solution addressing transportation and road-related challenges." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$6, className: styles$6.listItem, children: "Successfully demonstrated the project's functionality and real-world applicability." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$6.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$6.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$6.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$6, className: styles$6.listItem, children: "Presented the project to judges, industry professionals, and technology enthusiasts." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$6, className: styles$6.listItem, children: "Received recognition for creativity, technical implementation, and problem-solving approach." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$6,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$6, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "My Contributions" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$6.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$6.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$6.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$6.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$6, className: styles$6.listItem, children: "Conducted research to identify key transportation and road safety challenges." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$6, className: styles$6.listItem, children: "Designed and developed the technical components of the Road Link system." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$6, className: styles$6.listItem, children: "Managed hardware setup, testing, and system integration." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$6.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$6.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$6.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$6, className: styles$6.listItem, children: "Contributed to software implementation and functionality optimization." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$6, className: styles$6.listItem, children: "Prepared project documentation, demonstrations, and competition presentations." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$6, className: styles$6.listItem, children: "Collaborated with mentors and peers to refine the solution and improve overall performance." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: staggerContainer$6,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$6, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Skills Demonstrated" }) }),
          /* @__PURE__ */ jsx("div", { className: styles$6.skillsContainer, children: skills$6.map((skill) => /* @__PURE__ */ jsx(motion.div, { variants: scaleIn$6, className: styles$6.skillTag, children: skill }, skill)) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { className: styles$6.contentWrapper, children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$6,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: [
          /* @__PURE__ */ jsx(Divider, { className: styles$6.divider }),
          /* @__PURE__ */ jsx("div", { className: styles$6.navigation, children: /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, href: "/", icon: "arrow-left", children: "Back to Home" }) })
        ]
      }
    ) }) })
  ] });
}
const route17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RoboTechOlympiad
}, Symbol.toStringTag, { value: "Module" }));
const achievement$5 = "_achievement_10gs8_1";
const listColumn$5 = "_listColumn_10gs8_9";
const framedContainer$5 = "_framedContainer_10gs8_15";
const framedImage$5 = "_framedImage_10gs8_32";
const listWrapper$5 = "_listWrapper_10gs8_44";
const achievementsColumns$5 = "_achievementsColumns_10gs8_54";
const list$5 = "_list_10gs8_9";
const listItem$5 = "_listItem_10gs8_69";
const content$5 = "_content_10gs8_135";
const contentWrapper$5 = "_contentWrapper_10gs8_139";
const contentHeading$5 = "_contentHeading_10gs8_145";
const paragraph$5 = "_paragraph_10gs8_162";
const divider$5 = "_divider_10gs8_175";
const navigation$5 = "_navigation_10gs8_179";
const skillsContainer$5 = "_skillsContainer_10gs8_184";
const skillTag$5 = "_skillTag_10gs8_191";
const styles$5 = {
  achievement: achievement$5,
  listColumn: listColumn$5,
  framedContainer: framedContainer$5,
  framedImage: framedImage$5,
  listWrapper: listWrapper$5,
  achievementsColumns: achievementsColumns$5,
  list: list$5,
  listItem: listItem$5,
  content: content$5,
  contentWrapper: contentWrapper$5,
  contentHeading: contentHeading$5,
  paragraph: paragraph$5,
  divider: divider$5,
  navigation: navigation$5,
  skillsContainer: skillsContainer$5,
  skillTag: skillTag$5
};
const title$5 = "Road Link | AIUB CS Fest Project Showcase - Senior";
const description$5 = "Presented Road Link at the AIUB CS Fest Project Showcase, winning Senior Champion (1st Place).";
const year$5 = "2024";
const category$5 = "Competition";
const skills$5 = [
  "Hardware Development",
  "Embedded Systems",
  "Software Development",
  "Research & Analysis",
  "System Integration",
  "Prototyping",
  "Innovation",
  "Technical Presentation",
  "Problem Solving",
  "Project Management"
];
const fadeIn$5 = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
const staggerContainer$5 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};
const scaleIn$5 = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};
function AiubCsFest() {
  return /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$5.achievement, children: [
    /* @__PURE__ */ jsx(
      ProjectBackground,
      {
        src: achievementBg$2,
        srcSet: `${achievementBg$2} 800w, ${achievementBg$2} 1920w`,
        placeholder: achievementBg$2,
        opacity: 0.8
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectHeader,
      {
        title: title$5,
        description: description$5,
        roles: [category$5, year$5]
      }
    ),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: styles$5.framedContainer,
        variants: scaleIn$5,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: /* @__PURE__ */ jsx(
          ProjectImage,
          {
            className: styles$5.framedImage,
            src: achievementPlaceholder$3,
            srcSet: `${achievementPlaceholder$3} 800w, ${achievementPlaceholder$3} 1920w`,
            placeholder: achievementPlaceholder$3,
            width: 800,
            height: 500,
            cover: true,
            sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`,
            alt: "AIUB CS Fest Project Showcase Senior Champion"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$5,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project Overview" }),
          /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
            "Presented ",
            /* @__PURE__ */ jsx(Link, { href: "/projects/roadlink", children: "Road Link" }),
            " at the AIUB CS Fest Project Showcase, competing in the Senior Category against innovative projects from talented students and teams. The project focused on leveraging technology and engineering to address real-world transportation and road-related challenges. Through its practical implementation, technical excellence, and potential social impact, Road Link was awarded ",
            /* @__PURE__ */ jsx("strong", { children: "Senior Champion" }),
            "."
          ] })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$5,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$5, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Key Achievements" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$5.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$5.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$5.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$5.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$5, className: styles$5.listItem, children: "Senior Champion, AIUB CS Fest Project Showcase." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$5, className: styles$5.listItem, children: "Successfully showcased Road Link to academic professionals, industry representatives, and fellow innovators." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$5, className: styles$5.listItem, children: "Demonstrated a functional and scalable solution addressing transportation-related challenges." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$5.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$5.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$5.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$5, className: styles$5.listItem, children: "Earned recognition for innovation, technical execution, and real-world applicability." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$5, className: styles$5.listItem, children: "Competed against high-quality projects in the senior division and secured the top position." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$5,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$5, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "My Contributions" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$5.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$5.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$5.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$5.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$5, className: styles$5.listItem, children: "Led research and analysis to identify challenges and opportunities within the transportation sector." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$5, className: styles$5.listItem, children: "Developed and integrated hardware components required for the project." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$5, className: styles$5.listItem, children: "Contributed to software development, testing, and system optimization." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$5.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$5.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$5.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$5, className: styles$5.listItem, children: "Participated in project design, implementation, and technical problem-solving." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$5, className: styles$5.listItem, children: "Prepared project demonstrations, documentation, and presentation materials." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$5, className: styles$5.listItem, children: "Presented the project and explained its technical and practical impact to judges and visitors." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: staggerContainer$5,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$5, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Skills Demonstrated" }) }),
          /* @__PURE__ */ jsx("div", { className: styles$5.skillsContainer, children: skills$5.map((skill) => /* @__PURE__ */ jsx(motion.div, { variants: scaleIn$5, className: styles$5.skillTag, children: skill }, skill)) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { className: styles$5.contentWrapper, children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$5,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: [
          /* @__PURE__ */ jsx(Divider, { className: styles$5.divider }),
          /* @__PURE__ */ jsx("div", { className: styles$5.navigation, children: /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, href: "/", icon: "arrow-left", children: "Back to Home" }) })
        ]
      }
    ) }) })
  ] });
}
const route18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AiubCsFest
}, Symbol.toStringTag, { value: "Module" }));
const achievement$4 = "_achievement_10gs8_1";
const listColumn$4 = "_listColumn_10gs8_9";
const framedContainer$4 = "_framedContainer_10gs8_15";
const framedImage$4 = "_framedImage_10gs8_32";
const listWrapper$4 = "_listWrapper_10gs8_44";
const achievementsColumns$4 = "_achievementsColumns_10gs8_54";
const list$4 = "_list_10gs8_9";
const listItem$4 = "_listItem_10gs8_69";
const content$4 = "_content_10gs8_135";
const contentWrapper$4 = "_contentWrapper_10gs8_139";
const contentHeading$4 = "_contentHeading_10gs8_145";
const paragraph$4 = "_paragraph_10gs8_162";
const divider$4 = "_divider_10gs8_175";
const navigation$4 = "_navigation_10gs8_179";
const skillsContainer$4 = "_skillsContainer_10gs8_184";
const skillTag$4 = "_skillTag_10gs8_191";
const styles$4 = {
  achievement: achievement$4,
  listColumn: listColumn$4,
  framedContainer: framedContainer$4,
  framedImage: framedImage$4,
  listWrapper: listWrapper$4,
  achievementsColumns: achievementsColumns$4,
  list: list$4,
  listItem: listItem$4,
  content: content$4,
  contentWrapper: contentWrapper$4,
  contentHeading: contentHeading$4,
  paragraph: paragraph$4,
  divider: divider$4,
  navigation: navigation$4,
  skillsContainer: skillsContainer$4,
  skillTag: skillTag$4
};
const title$4 = "BioLimb | AIUB CS Fest Project Showcase - Junior";
const description$4 = "Presented BioLimb at the AIUB CS Fest Project Showcase, winning Junior Runner-Up (2nd Place).";
const year$4 = "2024";
const category$4 = "Competition";
const skills$4 = [
  "Research & Analysis",
  "Hardware Integration",
  "Embedded Systems",
  "Software Development",
  "Assistive Technology",
  "Prototyping",
  "Innovation",
  "Technical Presentation",
  "Problem Solving",
  "Team Collaboration"
];
const fadeIn$4 = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
const staggerContainer$4 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};
const scaleIn$4 = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};
function AiubCsFestJunior() {
  return /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$4.achievement, children: [
    /* @__PURE__ */ jsx(
      ProjectBackground,
      {
        src: achievementBg$3,
        srcSet: `${achievementBg$3} 800w, ${achievementBg$3} 1920w`,
        placeholder: achievementBg$3,
        opacity: 0.8
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectHeader,
      {
        title: title$4,
        description: description$4,
        roles: [category$4, year$4]
      }
    ),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: styles$4.framedContainer,
        variants: scaleIn$4,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: /* @__PURE__ */ jsx(
          ProjectImage,
          {
            className: styles$4.framedImage,
            src: achievementPlaceholder$3,
            srcSet: `${achievementPlaceholder$3} 800w, ${achievementPlaceholder$3} 1920w`,
            placeholder: achievementPlaceholder$3,
            width: 800,
            height: 500,
            cover: true,
            sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`,
            alt: "BioLimb Project Showcase Junior Runner-Up"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$4,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project Overview" }),
          /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
            "Presented ",
            /* @__PURE__ */ jsx(Link, { href: "/projects/saliva-robot", children: "BioLimb" }),
            " at the AIUB CS Fest Project Showcase, competing in the Junior Category. BioLimb was developed as an innovative assistive technology project aimed at enhancing accessibility and improving quality of life through engineering and technology. The project combined research, hardware development, and software integration to create a practical solution with meaningful real-world impact, earning the title of ",
            /* @__PURE__ */ jsx("strong", { children: "Junior Runner-Up" }),
            "."
          ] })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$4,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$4, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Key Achievements" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$4.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$4.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$4.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$4.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$4, className: styles$4.listItem, children: "Junior Runner-Up, AIUB CS Fest Project Showcase." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$4, className: styles$4.listItem, children: "Successfully demonstrated an innovative assistive technology solution." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$4, className: styles$4.listItem, children: "Showcased the project to university faculty, industry professionals, and technology enthusiasts." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$4.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$4.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$4.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$4, className: styles$4.listItem, children: "Received recognition for technical innovation, creativity, and potential social impact." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$4, className: styles$4.listItem, children: "Competed against numerous projects in the Junior Category and secured a top position." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$4,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$4, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "My Contributions" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$4.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$4.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$4.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$4.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$4, className: styles$4.listItem, children: "Conducted research to understand user needs and existing assistive technology solutions." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$4, className: styles$4.listItem, children: "Contributed to the design and development of the BioLimb system." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$4, className: styles$4.listItem, children: "Assisted with hardware integration, testing, and system optimization." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$4.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$4.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$4.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$4, className: styles$4.listItem, children: "Participated in software implementation and functionality improvements." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$4, className: styles$4.listItem, children: "Prepared technical documentation, demonstrations, and presentation materials." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$4, className: styles$4.listItem, children: "Collaborated with team members to refine the project and enhance its overall effectiveness." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: staggerContainer$4,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$4, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Skills Demonstrated" }) }),
          /* @__PURE__ */ jsx("div", { className: styles$4.skillsContainer, children: skills$4.map((skill) => /* @__PURE__ */ jsx(motion.div, { variants: scaleIn$4, className: styles$4.skillTag, children: skill }, skill)) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { className: styles$4.contentWrapper, children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$4,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: [
          /* @__PURE__ */ jsx(Divider, { className: styles$4.divider }),
          /* @__PURE__ */ jsx("div", { className: styles$4.navigation, children: /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, href: "/", icon: "arrow-left", children: "Back to Home" }) })
        ]
      }
    ) }) })
  ] });
}
const route19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: AiubCsFestJunior
}, Symbol.toStringTag, { value: "Module" }));
const achievement$3 = "_achievement_10gs8_1";
const listColumn$3 = "_listColumn_10gs8_9";
const framedContainer$3 = "_framedContainer_10gs8_15";
const framedImage$3 = "_framedImage_10gs8_32";
const listWrapper$3 = "_listWrapper_10gs8_44";
const achievementsColumns$3 = "_achievementsColumns_10gs8_54";
const list$3 = "_list_10gs8_9";
const listItem$3 = "_listItem_10gs8_69";
const content$3 = "_content_10gs8_135";
const contentWrapper$3 = "_contentWrapper_10gs8_139";
const contentHeading$3 = "_contentHeading_10gs8_145";
const paragraph$3 = "_paragraph_10gs8_162";
const divider$3 = "_divider_10gs8_175";
const navigation$3 = "_navigation_10gs8_179";
const skillsContainer$3 = "_skillsContainer_10gs8_184";
const skillTag$3 = "_skillTag_10gs8_191";
const styles$3 = {
  achievement: achievement$3,
  listColumn: listColumn$3,
  framedContainer: framedContainer$3,
  framedImage: framedImage$3,
  listWrapper: listWrapper$3,
  achievementsColumns: achievementsColumns$3,
  list: list$3,
  listItem: listItem$3,
  content: content$3,
  contentWrapper: contentWrapper$3,
  contentHeading: contentHeading$3,
  paragraph: paragraph$3,
  divider: divider$3,
  navigation: navigation$3,
  skillsContainer: skillsContainer$3,
  skillTag: skillTag$3
};
const title$3 = "Robo Soccer | AIUB CS Fest";
const description$3 = "Participated in competitive Robo Soccer at the AIUB CS Fest, designing and programming an autonomous/remote-controlled robot, earning 2nd Runner-Up.";
const year$3 = "2024";
const category$3 = "Competition";
const skills$3 = [
  "Robotics",
  "Hardware Integration",
  "Embedded Systems",
  "Electronics",
  "Mechanical Design",
  "Problem Solving",
  "Teamwork",
  "Strategy Development",
  "Testing & Optimization",
  "Technical Troubleshooting"
];
const fadeIn$3 = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
const staggerContainer$3 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};
const scaleIn$3 = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};
function RoboSoccer() {
  return /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$3.achievement, children: [
    /* @__PURE__ */ jsx(
      ProjectBackground,
      {
        src: achievementBg$2,
        srcSet: `${achievementBg$2} 800w, ${achievementBg$2} 1920w`,
        placeholder: achievementBg$2,
        opacity: 0.8
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectHeader,
      {
        title: title$3,
        description: description$3,
        roles: [category$3, year$3]
      }
    ),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: styles$3.framedContainer,
        variants: scaleIn$3,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: /* @__PURE__ */ jsx(
          ProjectImage,
          {
            className: styles$3.framedImage,
            src: achievementPlaceholder$3,
            srcSet: `${achievementPlaceholder$3} 800w, ${achievementPlaceholder$3} 1920w`,
            placeholder: achievementPlaceholder$3,
            width: 800,
            height: 500,
            cover: true,
            sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`,
            alt: "AIUB CS Fest Robo Soccer 2nd Runner-Up award"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$3,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project Overview" }),
          /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
            "Participated in a competitive ",
            /* @__PURE__ */ jsx("strong", { children: "Robo Soccer" }),
            " event at the ",
            /* @__PURE__ */ jsx("strong", { children: "AIUB CS Fest" }),
            ", designing, building, and programming an autonomous/remote-controlled robotic system capable of competing in a dynamic soccer-based environment. The competition required a combination of robotics engineering, strategic thinking, hardware integration, and real-time problem-solving. Through effective teamwork and technical execution, the project secured ",
            /* @__PURE__ */ jsx("strong", { children: "2nd Runner-Up" }),
            " position."
          ] })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$3,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$3, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Key Achievements" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$3.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$3.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$3.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$3.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$3, className: styles$3.listItem, children: "2nd Runner-Up, AIUB CS Fest Robo Soccer Competition." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$3, className: styles$3.listItem, children: "Designed and optimized a robotic system for competitive gameplay." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$3, className: styles$3.listItem, children: "Demonstrated strong performance in navigation, control, and match strategy." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$3.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$3.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$3.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$3, className: styles$3.listItem, children: "Successfully competed against multiple teams in a high-pressure robotics environment." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$3, className: styles$3.listItem, children: "Showcased technical proficiency in robotics design and implementation." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$3,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$3, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "My Contributions" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$3.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$3.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$3.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$3.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$3, className: styles$3.listItem, children: "Assisted in robot design, assembly, and hardware integration." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$3, className: styles$3.listItem, children: "Contributed to system testing, calibration, and performance optimization." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$3, className: styles$3.listItem, children: "Participated in strategy development and match preparation." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$3.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$3.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$3.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$3, className: styles$3.listItem, children: "Supported troubleshooting and rapid problem-solving during competition." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$3, className: styles$3.listItem, children: "Collaborated closely with team members to improve robot efficiency and gameplay performance." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: staggerContainer$3,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$3, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Skills Demonstrated" }) }),
          /* @__PURE__ */ jsx("div", { className: styles$3.skillsContainer, children: skills$3.map((skill) => /* @__PURE__ */ jsx(motion.div, { variants: scaleIn$3, className: styles$3.skillTag, children: skill }, skill)) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { className: styles$3.contentWrapper, children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$3,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: [
          /* @__PURE__ */ jsx(Divider, { className: styles$3.divider }),
          /* @__PURE__ */ jsx("div", { className: styles$3.navigation, children: /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, href: "/", icon: "arrow-left", children: "Back to Home" }) })
        ]
      }
    ) }) })
  ] });
}
const route20 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RoboSoccer
}, Symbol.toStringTag, { value: "Module" }));
const achievement$2 = "_achievement_w273m_1";
const listColumn$2 = "_listColumn_w273m_9";
const framedContainer$2 = "_framedContainer_w273m_15";
const framedImage$2 = "_framedImage_w273m_32";
const listWrapper$2 = "_listWrapper_w273m_44";
const achievementsColumns$2 = "_achievementsColumns_w273m_54";
const list$2 = "_list_w273m_9";
const listItem$2 = "_listItem_w273m_69";
const content$2 = "_content_w273m_135";
const contentWrapper$2 = "_contentWrapper_w273m_139";
const contentHeading$2 = "_contentHeading_w273m_145";
const paragraph$2 = "_paragraph_w273m_162";
const divider$2 = "_divider_w273m_173";
const navigation$2 = "_navigation_w273m_177";
const skillsContainer$2 = "_skillsContainer_w273m_182";
const skillTag$2 = "_skillTag_w273m_189";
const styles$2 = {
  achievement: achievement$2,
  listColumn: listColumn$2,
  framedContainer: framedContainer$2,
  framedImage: framedImage$2,
  listWrapper: listWrapper$2,
  achievementsColumns: achievementsColumns$2,
  list: list$2,
  listItem: listItem$2,
  content: content$2,
  contentWrapper: contentWrapper$2,
  contentHeading: contentHeading$2,
  paragraph: paragraph$2,
  divider: divider$2,
  navigation: navigation$2,
  skillsContainer: skillsContainer$2,
  skillTag: skillTag$2
};
const title$2 = "BioLimb | Runner-Up, International Skill Innovation Fest (ISIF) 2024";
const description$2 = "Presented BioLimb at the International Skill Innovation Fest (ISIF) 2024, hosted by IUT, winning Runner-Up.";
const year$2 = "2024";
const category$2 = "Competition";
const skills$2 = [
  "Assistive Technology",
  "Hardware Integration",
  "Embedded Systems",
  "Software Development",
  "Research & Analysis",
  "Prototyping",
  "Innovation",
  "Technical Presentation",
  "Problem Solving",
  "Team Collaboration"
];
const fadeIn$2 = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
const staggerContainer$2 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};
const scaleIn$2 = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};
function Isif2024() {
  return /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$2.achievement, children: [
    /* @__PURE__ */ jsx(
      ProjectBackground,
      {
        src: achievementBg$3,
        srcSet: `${achievementBg$3} 800w, ${achievementBg$3} 1920w`,
        placeholder: achievementBg$3,
        opacity: 0.8
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectHeader,
      {
        title: title$2,
        description: description$2,
        roles: [category$2, year$2]
      }
    ),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: styles$2.framedContainer,
        variants: scaleIn$2,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: /* @__PURE__ */ jsx(
          ProjectImage,
          {
            className: styles$2.framedImage,
            src: achievementPlaceholder$2,
            srcSet: `${achievementPlaceholder$2} 800w, ${achievementPlaceholder$2} 1920w`,
            placeholder: achievementPlaceholder$2,
            width: 800,
            height: 500,
            cover: true,
            sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`,
            alt: "BioLimb Project ISIF 2024 Runner-Up"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$2,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project Overview" }),
          /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
            "Presented ",
            /* @__PURE__ */ jsx(Link, { href: "/projects/saliva-robot", children: "BioLimb" }),
            " at the International Skill Innovation Fest (ISIF) 2024, hosted by the Islamic University of Technology (IUT). BioLimb is an innovative assistive technology project designed to improve accessibility and enhance the quality of life for individuals requiring advanced mobility and support solutions. The project combined research, engineering, hardware integration, and software development to create a practical and impactful solution, earning the ",
            /* @__PURE__ */ jsx("strong", { children: "Runner-Up" }),
            " position."
          ] })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$2,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$2, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Key Achievements" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$2.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$2.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$2.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$2.list, children: [
              /* @__PURE__ */ jsxs(motion.li, { variants: fadeIn$2, className: styles$2.listItem, children: [
                "Secured ",
                /* @__PURE__ */ jsx("strong", { children: "Runner-Up" }),
                " position at ISIF 2024."
              ] }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$2, className: styles$2.listItem, children: "Successfully showcased BioLimb on an international innovation platform." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$2, className: styles$2.listItem, children: "Demonstrated a technology-driven solution with significant social impact potential." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$2.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$2.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$2.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$2, className: styles$2.listItem, children: "Presented the project to judges, academics, industry professionals, and fellow innovators." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$2, className: styles$2.listItem, children: "Earned recognition for innovation, technical implementation, and real-world applicability." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$2,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$2, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "My Contributions" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$2.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$2.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$2.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$2.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$2, className: styles$2.listItem, children: "Conducted extensive research on assistive technologies, user needs, and existing solutions." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$2, className: styles$2.listItem, children: "Contributed to the design and development of the BioLimb system." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$2, className: styles$2.listItem, children: "Assisted with hardware integration, testing, and performance optimization." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$2.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$2.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$2.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$2, className: styles$2.listItem, children: "Participated in software development and system functionality improvements." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$2, className: styles$2.listItem, children: "Prepared technical documentation, demonstrations, and presentation materials." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$2, className: styles$2.listItem, children: "Collaborated with team members to refine the project and improve its effectiveness and usability." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: staggerContainer$2,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$2, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Skills Demonstrated" }) }),
          /* @__PURE__ */ jsx("div", { className: styles$2.skillsContainer, children: skills$2.map((skill) => /* @__PURE__ */ jsx(motion.div, { variants: scaleIn$2, className: styles$2.skillTag, children: skill }, skill)) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { className: styles$2.contentWrapper, children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$2,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: [
          /* @__PURE__ */ jsx(Divider, { className: styles$2.divider }),
          /* @__PURE__ */ jsx("div", { className: styles$2.navigation, children: /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, href: "/", icon: "arrow-left", children: "Back to Home" }) })
        ]
      }
    ) }) })
  ] });
}
const route21 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Isif2024
}, Symbol.toStringTag, { value: "Module" }));
const achievement$1 = "_achievement_w273m_1";
const listColumn$1 = "_listColumn_w273m_9";
const framedContainer$1 = "_framedContainer_w273m_15";
const framedImage$1 = "_framedImage_w273m_32";
const listWrapper$1 = "_listWrapper_w273m_44";
const achievementsColumns$1 = "_achievementsColumns_w273m_54";
const list$1 = "_list_w273m_9";
const listItem$1 = "_listItem_w273m_69";
const content$1 = "_content_w273m_135";
const contentWrapper$1 = "_contentWrapper_w273m_139";
const contentHeading$1 = "_contentHeading_w273m_145";
const paragraph$1 = "_paragraph_w273m_162";
const divider$1 = "_divider_w273m_173";
const navigation$1 = "_navigation_w273m_177";
const skillsContainer$1 = "_skillsContainer_w273m_182";
const skillTag$1 = "_skillTag_w273m_189";
const styles$1 = {
  achievement: achievement$1,
  listColumn: listColumn$1,
  framedContainer: framedContainer$1,
  framedImage: framedImage$1,
  listWrapper: listWrapper$1,
  achievementsColumns: achievementsColumns$1,
  list: list$1,
  listItem: listItem$1,
  content: content$1,
  contentWrapper: contentWrapper$1,
  contentHeading: contentHeading$1,
  paragraph: paragraph$1,
  divider: divider$1,
  navigation: navigation$1,
  skillsContainer: skillsContainer$1,
  skillTag: skillTag$1
};
const title$1 = "Road Link | Winner, Robotronics Fest 2025 – University of Dhaka";
const description$1 = "Presented Road Link at Robotronics Fest 2025, organized by the Department of Robotics and Mechatronics Engineering at the University of Dhaka, winning 1st Place (Winner).";
const year$1 = "2025";
const category$1 = "Competition";
const skills$1 = [
  "Hardware Integration",
  "Embedded Systems",
  "Software Development",
  "Research & Analysis",
  "System Design",
  "Prototyping",
  "Innovation",
  "Technical Presentation",
  "Problem Solving",
  "Project Development",
  "Team Collaboration"
];
const fadeIn$1 = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
const staggerContainer$1 = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};
const scaleIn$1 = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};
function RobotronicsFest2025() {
  return /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$1.achievement, children: [
    /* @__PURE__ */ jsx(
      ProjectBackground,
      {
        src: achievementBg$2,
        srcSet: `${achievementBg$2} 800w, ${achievementBg$2} 1920w`,
        placeholder: achievementBg$2,
        opacity: 0.8
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectHeader,
      {
        title: title$1,
        description: description$1,
        roles: [category$1, year$1]
      }
    ),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: styles$1.framedContainer,
        variants: scaleIn$1,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: /* @__PURE__ */ jsx(
          ProjectImage,
          {
            className: styles$1.framedImage,
            src: achievementPlaceholder$1,
            srcSet: `${achievementPlaceholder$1} 800w, ${achievementPlaceholder$1} 1920w`,
            placeholder: achievementPlaceholder$1,
            width: 800,
            height: 500,
            cover: true,
            sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`,
            alt: "Road Link Robotronics Fest 2025 Winner"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$1,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project Overview" }),
          /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
            "Presented ",
            /* @__PURE__ */ jsx(Link, { href: "/projects/roadlink", children: "Road Link" }),
            " at ",
            /* @__PURE__ */ jsx("strong", { children: "Robotronics Fest 2025" }),
            ", organized by the Department of Robotics and Mechatronics Engineering at the ",
            /* @__PURE__ */ jsx("strong", { children: "University of Dhaka" }),
            ". Road Link is an innovation-driven project focused on addressing transportation and road-related challenges through technology, engineering, and intelligent system design. Competing against talented teams from institutions across the country, the project was recognized for its technical excellence, practical implementation, and real-world impact, earning the title of ",
            /* @__PURE__ */ jsx("strong", { children: "Winner" }),
            "."
          ] })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$1,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$1, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Key Achievements" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$1.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$1.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$1.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$1.list, children: [
              /* @__PURE__ */ jsxs(motion.li, { variants: fadeIn$1, className: styles$1.listItem, children: [
                "Secured ",
                /* @__PURE__ */ jsx("strong", { children: "Winner" }),
                " position at Robotronics Fest 2025."
              ] }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$1, className: styles$1.listItem, children: "Successfully showcased Road Link in the Project Showcase segment." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$1, className: styles$1.listItem, children: "Demonstrated an innovative solution with strong real-world applicability and scalability." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$1.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$1.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$1.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$1, className: styles$1.listItem, children: "Presented the project before judges, academics, industry professionals, and technology enthusiasts." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$1, className: styles$1.listItem, children: "Earned recognition for innovation, engineering design, technical implementation, and problem-solving." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$1, className: styles$1.listItem, children: "Competed among participants from numerous schools, colleges, and universities across Bangladesh." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer$1,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$1, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "My Contributions" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles$1.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles$1.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$1.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$1.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$1, className: styles$1.listItem, children: "Conducted research and analysis to identify transportation challenges and potential technological solutions." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$1, className: styles$1.listItem, children: "Led hardware setup, integration, and system testing for the project." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$1, className: styles$1.listItem, children: "Contributed to software development, functionality enhancement, and system optimization." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles$1.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles$1.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles$1.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$1, className: styles$1.listItem, children: "Assisted in project design, prototyping, and technical problem-solving." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$1, className: styles$1.listItem, children: "Prepared technical documentation, demonstrations, and presentation materials." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn$1, className: styles$1.listItem, children: "Presented the project and communicated its impact, functionality, and future potential to judges and visitors." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: staggerContainer$1,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(motion.div, { variants: fadeIn$1, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Skills Demonstrated" }) }),
          /* @__PURE__ */ jsx("div", { className: styles$1.skillsContainer, children: skills$1.map((skill) => /* @__PURE__ */ jsx(motion.div, { variants: scaleIn$1, className: styles$1.skillTag, children: skill }, skill)) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { className: styles$1.contentWrapper, children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn$1,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: [
          /* @__PURE__ */ jsx(Divider, { className: styles$1.divider }),
          /* @__PURE__ */ jsx("div", { className: styles$1.navigation, children: /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, href: "/", icon: "arrow-left", children: "Back to Home" }) })
        ]
      }
    ) }) })
  ] });
}
const route22 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RobotronicsFest2025
}, Symbol.toStringTag, { value: "Module" }));
const achievement = "_achievement_w273m_1";
const listColumn = "_listColumn_w273m_9";
const framedContainer = "_framedContainer_w273m_15";
const framedImage = "_framedImage_w273m_32";
const listWrapper = "_listWrapper_w273m_44";
const achievementsColumns = "_achievementsColumns_w273m_54";
const list = "_list_w273m_9";
const listItem = "_listItem_w273m_69";
const content = "_content_w273m_135";
const contentWrapper = "_contentWrapper_w273m_139";
const contentHeading = "_contentHeading_w273m_145";
const paragraph = "_paragraph_w273m_162";
const divider = "_divider_w273m_173";
const navigation = "_navigation_w273m_177";
const skillsContainer = "_skillsContainer_w273m_182";
const skillTag = "_skillTag_w273m_189";
const styles = {
  achievement,
  listColumn,
  framedContainer,
  framedImage,
  listWrapper,
  achievementsColumns,
  list,
  listItem,
  content,
  contentWrapper,
  contentHeading,
  paragraph,
  divider,
  navigation,
  skillsContainer,
  skillTag
};
const achievementBg = "/assets/khude biggani bg-DNgvcvEz.webp";
const title = "Khude Biggyani Award 2022";
const description = "Recognized as a participant and award recipient in the SMC MoniMix Plus Khude Biggyani Award 2022, organized by Deepto TV.";
const year = "2022";
const category = "Competition";
const skills = [
  "Scientific Research",
  "Innovation",
  "Engineering Design",
  "Hardware Development",
  "Problem Solving",
  "Critical Thinking",
  "Technical Presentation",
  "Project Development",
  "Creativity",
  "Team Collaboration"
];
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};
function KhudeBiggyani2022() {
  return /* @__PURE__ */ jsxs(ProjectContainer, { className: styles.achievement, children: [
    /* @__PURE__ */ jsx(
      ProjectBackground,
      {
        src: achievementBg,
        srcSet: `${achievementBg} 800w, ${achievementBg} 1920w`,
        placeholder: achievementBg,
        opacity: 0.8
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectHeader,
      {
        title,
        description,
        roles: [category, year]
      }
    ),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        className: styles.framedContainer,
        variants: scaleIn,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: /* @__PURE__ */ jsx(
          ProjectImage,
          {
            className: styles.framedImage,
            src: achievementPlaceholder,
            srcSet: `${achievementPlaceholder} 800w, ${achievementPlaceholder} 1920w`,
            placeholder: achievementPlaceholder,
            width: 800,
            height: 500,
            cover: true,
            sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`,
            alt: "Khude Biggyani Award 2022"
          }
        )
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Achievement Overview" }),
          /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
            "Recognized as a participant and award recipient in the ",
            /* @__PURE__ */ jsx("strong", { children: "SMC MoniMix Plus Khude Biggyani Award 2022" }),
            ", organized by ",
            /* @__PURE__ */ jsx("strong", { children: "Deepto TV" }),
            " in collaboration with SMC. The competition was created to encourage young innovators and science enthusiasts across Bangladesh to develop creative, technology-driven solutions addressing real-world challenges. The event brought together hundreds of student innovators from different regions of the country, providing a national platform to showcase scientific creativity, engineering skills, and innovation."
          ] })
        ]
      }
    ) }) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Key Achievements" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles.list, children: [
              /* @__PURE__ */ jsxs(motion.li, { variants: fadeIn, className: styles.listItem, children: [
                "Recognized at the ",
                /* @__PURE__ */ jsx("strong", { children: "Khude Biggyani Award 2022" }),
                ", a nationwide science and innovation competition."
              ] }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn, className: styles.listItem, children: "Showcased an innovative science and technology project before a distinguished jury panel." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn, className: styles.listItem, children: "Competed among hundreds of young innovators from schools and institutions across Bangladesh." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn, className: styles.listItem, children: "Demonstrated strong problem-solving, research, and engineering capabilities." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn, className: styles.listItem, children: "Received recognition for creativity, innovation, and practical application of technology." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: staggerContainer,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: [
          /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsx(motion.div, { variants: fadeIn, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "My Contributions" }) }) }),
          /* @__PURE__ */ jsxs(ProjectSectionColumns, { className: styles.achievementsColumns, children: [
            /* @__PURE__ */ jsx("div", { className: styles.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn, className: styles.listItem, children: "Conducted research and analysis to identify real-world challenges and develop innovative solutions." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn, className: styles.listItem, children: "Designed and developed technical components of the project." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn, className: styles.listItem, children: "Participated in hardware setup, testing, and project optimization." })
            ] }) }) }),
            /* @__PURE__ */ jsx("div", { className: styles.listColumn, children: /* @__PURE__ */ jsx("div", { className: styles.listWrapper, children: /* @__PURE__ */ jsxs("ul", { className: styles.list, children: [
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn, className: styles.listItem, children: "Assisted in software implementation and functionality improvement." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn, className: styles.listItem, children: "Prepared project documentation, demonstrations, and presentation materials." }),
              /* @__PURE__ */ jsx(motion.li, { variants: fadeIn, className: styles.listItem, children: "Presented the project and communicated its impact and technical approach to judges and audiences." })
            ] }) }) })
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: staggerContainer,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-100px" },
        children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(motion.div, { variants: fadeIn, children: /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Skills Demonstrated" }) }),
          /* @__PURE__ */ jsx("div", { className: styles.skillsContainer, children: skills.map((skill) => /* @__PURE__ */ jsx(motion.div, { variants: scaleIn, className: styles.skillTag, children: skill }, skill)) })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { className: styles.contentWrapper, children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        variants: fadeIn,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, margin: "-50px" },
        children: [
          /* @__PURE__ */ jsx(Divider, { className: styles.divider }),
          /* @__PURE__ */ jsx("div", { className: styles.navigation, children: /* @__PURE__ */ jsx(Button, { secondary: true, iconHoverShift: true, href: "/", icon: "arrow-left", children: "Back to Home" }) })
        ]
      }
    ) }) })
  ] });
}
const route23 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KhudeBiggyani2022
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-C8AtZI7u.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-CI96uNzk.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/error-TZ_lzy4t.js", "/assets/useScrollToHash-KtRTlQYP.js", "/assets/useWindowSize-mzNSXuUf.js", "/assets/config-cP5SULzO.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/image-CQFqa4Pm.css", "/assets/error-CmEnn51Q.css", "/assets/root-zi8QhhOi.css"] }, "routes/articles.modern-styling-in-react": { "id": "routes/articles.modern-styling-in-react", "parentId": "routes/articles", "path": "modern-styling-in-react", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.modern-styling-in-react-DGKst1eD.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-L_4ix5aQ.js"], "css": [] }, "routes/projects.saliva-robot": { "id": "routes/projects.saliva-robot", "parentId": "root", "path": "projects/saliva-robot", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Com1p0ne.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/config-cP5SULzO.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useParallax-7PNI3E2J.js", "/assets/resolve-element-Ae9SQlv6.js", "/assets/biolimbbg-CfJ_UaFy.js", "/assets/biolimb-Ar4ClB4x.js", "/assets/footer-BeFTrJxl.js", "/assets/project-Dwi0bxnd.js", "/assets/meta-CCQHeuS1.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/footer-C_271vgM.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/project-D3JpM_tk.css", "/assets/route-5ZKRyKyf.css"] }, "routes/achievements_._index": { "id": "routes/achievements_._index", "parentId": "root", "path": "achievements", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-1eJC5Agw.js?client-route=1", "imports": ["/assets/config-cP5SULzO.js", "/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/divider-C7EBeqAn.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/conrad-Bbrn2nhw.js", "/assets/robotech-EgmIOCo6.js", "/assets/aiubcsfest-DCxvkJSk.js", "/assets/isif-_SgPDT9o.js", "/assets/robotronics-C7atnC5w.js", "/assets/khude biggani-C3oJlDMb.js", "/assets/meta-CCQHeuS1.js", "/assets/footer-BeFTrJxl.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/achievements-D5KO_BCM.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/footer-C_271vgM.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/divider-CJ0zz9kw.css", "/assets/image-CQFqa4Pm.css", "/assets/achievements-D0jj8hLa.css", "/assets/route-tBum76JY.css"] }, "routes/articles.hello-world": { "id": "routes/articles.hello-world", "parentId": "routes/articles", "path": "hello-world", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.hello-world-BngRLERO.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-L_4ix5aQ.js"], "css": [] }, "routes/projects.wheelchair": { "id": "routes/projects.wheelchair", "parentId": "root", "path": "projects/wheelchair", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Kl4Vz-wc.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/config-cP5SULzO.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useParallax-7PNI3E2J.js", "/assets/resolve-element-Ae9SQlv6.js", "/assets/wheelchairmain-BBO-QXY2.js", "/assets/footer-BeFTrJxl.js", "/assets/project-Dwi0bxnd.js", "/assets/meta-CCQHeuS1.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/footer-C_271vgM.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/project-D3JpM_tk.css", "/assets/route-C0dOnbW3.css"] }, "routes/projects.roadlink": { "id": "routes/projects.roadlink", "parentId": "root", "path": "projects/roadlink", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DrfmyJUs.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/config-cP5SULzO.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useParallax-7PNI3E2J.js", "/assets/resolve-element-Ae9SQlv6.js", "/assets/roadlinkbg-DgKaMFgq.js", "/assets/roadlinkmain-MH_IW6CD.js", "/assets/footer-BeFTrJxl.js", "/assets/project-Dwi0bxnd.js", "/assets/meta-CCQHeuS1.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/footer-C_271vgM.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/project-D3JpM_tk.css", "/assets/route-CHsH4Gdi.css"] }, "routes/articles_._index": { "id": "routes/articles_._index", "parentId": "root", "path": "articles", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-bkZ4mUDz.js?client-route=1", "imports": ["/assets/config-cP5SULzO.js", "/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/meta-CCQHeuS1.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/divider-C7EBeqAn.js", "/assets/footer-BeFTrJxl.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useWindowSize-mzNSXuUf.js", "/assets/date-DvyCAN0s.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/divider-CJ0zz9kw.css", "/assets/footer-C_271vgM.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/route-DtSYASGB.css"] }, "routes/projects_._index": { "id": "routes/projects_._index", "parentId": "root", "path": "projects", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-qAZAEht_.js?client-route=1", "imports": ["/assets/config-cP5SULzO.js", "/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/divider-C7EBeqAn.js", "/assets/section-BwkOdwsM.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/useWindowSize-mzNSXuUf.js", "/assets/biolimb-Ar4ClB4x.js", "/assets/wheelchairmain-BBO-QXY2.js", "/assets/roadlinkmain-MH_IW6CD.js", "/assets/meta-CCQHeuS1.js", "/assets/footer-BeFTrJxl.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/projects-B_6zFwgp.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/footer-C_271vgM.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/divider-CJ0zz9kw.css", "/assets/projects-CrbTtUr9.css", "/assets/route-cGdz1Ied.css"] }, "routes/api.set-theme": { "id": "routes/api.set-theme", "parentId": "root", "path": "api/set-theme", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-theme-l0sNRNKZ.js?client-route=1", "imports": [], "css": [] }, "routes/achievements": { "id": "routes/achievements", "parentId": "root", "path": "achievements", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-4hwPcyBZ.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js"], "css": ["/assets/route-OR7eS490.css"] }, "routes/articles": { "id": "routes/articles", "parentId": "root", "path": "articles", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CMcTr50J.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/config-cP5SULzO.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/divider-C7EBeqAn.js", "/assets/footer-BeFTrJxl.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useParallax-7PNI3E2J.js", "/assets/useScrollToHash-KtRTlQYP.js", "/assets/date-DvyCAN0s.js", "/assets/link-DhgfWIJf.js", "/assets/meta-CCQHeuS1.js", "/assets/index-L_4ix5aQ.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/divider-CJ0zz9kw.css", "/assets/footer-C_271vgM.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/link-D8crMWF7.css", "/assets/route-DMfVr6HJ.css"] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DoVuAb_k.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/config-cP5SULzO.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/divider-C7EBeqAn.js", "/assets/footer-BeFTrJxl.js", "/assets/section-BwkOdwsM.js", "/assets/meta-CCQHeuS1.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/divider-CJ0zz9kw.css", "/assets/footer-C_271vgM.css", "/assets/section-w-yx8eGG.css", "/assets/route-DZ4V55Yk.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DgWZ7GWf.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/config-cP5SULzO.js", "/assets/divider-C7EBeqAn.js", "/assets/section-BwkOdwsM.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/useWindowSize-mzNSXuUf.js", "/assets/biolimb-Ar4ClB4x.js", "/assets/wheelchairmain-BBO-QXY2.js", "/assets/roadlinkmain-MH_IW6CD.js", "/assets/image-EkbXULBh.js", "/assets/image-Cp0fg7HJ.js", "/assets/conrad-Bbrn2nhw.js", "/assets/robotech-EgmIOCo6.js", "/assets/aiubcsfest-DCxvkJSk.js", "/assets/isif-_SgPDT9o.js", "/assets/robotronics-C7atnC5w.js", "/assets/khude biggani-C3oJlDMb.js", "/assets/footer-BeFTrJxl.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/meta-CCQHeuS1.js", "/assets/useScrollToHash-KtRTlQYP.js", "/assets/projects-B_6zFwgp.js", "/assets/achievements-D5KO_BCM.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/footer-C_271vgM.css", "/assets/divider-CJ0zz9kw.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/section-w-yx8eGG.css", "/assets/projects-CrbTtUr9.css", "/assets/image-CQFqa4Pm.css", "/assets/achievements-D0jj8hLa.css", "/assets/route-BLAhQRmH.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_-B39WtNJg.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/error-TZ_lzy4t.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/image-CQFqa4Pm.css", "/assets/error-CmEnn51Q.css"] }, "routes/home/route": { "id": "routes/home/route", "parentId": "root", "path": "/", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DgWZ7GWf.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/config-cP5SULzO.js", "/assets/divider-C7EBeqAn.js", "/assets/section-BwkOdwsM.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/useWindowSize-mzNSXuUf.js", "/assets/biolimb-Ar4ClB4x.js", "/assets/wheelchairmain-BBO-QXY2.js", "/assets/roadlinkmain-MH_IW6CD.js", "/assets/image-EkbXULBh.js", "/assets/image-Cp0fg7HJ.js", "/assets/conrad-Bbrn2nhw.js", "/assets/robotech-EgmIOCo6.js", "/assets/aiubcsfest-DCxvkJSk.js", "/assets/isif-_SgPDT9o.js", "/assets/robotronics-C7atnC5w.js", "/assets/khude biggani-C3oJlDMb.js", "/assets/footer-BeFTrJxl.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/meta-CCQHeuS1.js", "/assets/useScrollToHash-KtRTlQYP.js", "/assets/projects-B_6zFwgp.js", "/assets/achievements-D5KO_BCM.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/footer-C_271vgM.css", "/assets/divider-CJ0zz9kw.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/section-w-yx8eGG.css", "/assets/projects-CrbTtUr9.css", "/assets/image-CQFqa4Pm.css", "/assets/achievements-D0jj8hLa.css", "/assets/route-BLAhQRmH.css"] }, "routes/achievements/conrad-challenge/route": { "id": "routes/achievements/conrad-challenge/route", "parentId": "root", "path": "/achievements/conrad-challenge", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-VN4uq4hN.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/config-cP5SULzO.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useParallax-7PNI3E2J.js", "/assets/resolve-element-Ae9SQlv6.js", "/assets/SVGVisualElement-DeyOIWJ1.js", "/assets/divider-C7EBeqAn.js", "/assets/meta-CCQHeuS1.js", "/assets/project-Dwi0bxnd.js", "/assets/conrad-Bbrn2nhw.js", "/assets/motion-BzyDG7JF.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/divider-CJ0zz9kw.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/project-D3JpM_tk.css", "/assets/route-B4q0pLEJ.css"] }, "routes/achievements/robotech-olympiad/route": { "id": "routes/achievements/robotech-olympiad/route", "parentId": "root", "path": "/achievements/robotech-olympiad", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BNcJ9SF_.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useParallax-7PNI3E2J.js", "/assets/resolve-element-Ae9SQlv6.js", "/assets/SVGVisualElement-DeyOIWJ1.js", "/assets/divider-C7EBeqAn.js", "/assets/link-DhgfWIJf.js", "/assets/project-Dwi0bxnd.js", "/assets/robotech-EgmIOCo6.js", "/assets/roadlinkbg-DgKaMFgq.js", "/assets/motion-BzyDG7JF.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/divider-CJ0zz9kw.css", "/assets/link-D8crMWF7.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/project-D3JpM_tk.css", "/assets/route-B4q0pLEJ.css"] }, "routes/achievements/aiub-cs-fest/route": { "id": "routes/achievements/aiub-cs-fest/route", "parentId": "root", "path": "/achievements/aiub-cs-fest", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BVSHO-oD.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useParallax-7PNI3E2J.js", "/assets/resolve-element-Ae9SQlv6.js", "/assets/SVGVisualElement-DeyOIWJ1.js", "/assets/divider-C7EBeqAn.js", "/assets/link-DhgfWIJf.js", "/assets/project-Dwi0bxnd.js", "/assets/aiubcsfest-DCxvkJSk.js", "/assets/roadlinkbg-DgKaMFgq.js", "/assets/motion-BzyDG7JF.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/divider-CJ0zz9kw.css", "/assets/link-D8crMWF7.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/project-D3JpM_tk.css", "/assets/route-B4q0pLEJ.css"] }, "routes/achievements/aiub-cs-fest-junior/route": { "id": "routes/achievements/aiub-cs-fest-junior/route", "parentId": "root", "path": "/achievements/aiub-cs-fest-junior", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DSc_GRNI.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useParallax-7PNI3E2J.js", "/assets/resolve-element-Ae9SQlv6.js", "/assets/SVGVisualElement-DeyOIWJ1.js", "/assets/divider-C7EBeqAn.js", "/assets/link-DhgfWIJf.js", "/assets/project-Dwi0bxnd.js", "/assets/aiubcsfest-DCxvkJSk.js", "/assets/biolimbbg-CfJ_UaFy.js", "/assets/motion-BzyDG7JF.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/divider-CJ0zz9kw.css", "/assets/link-D8crMWF7.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/project-D3JpM_tk.css", "/assets/route-B4q0pLEJ.css"] }, "routes/achievements/robo-soccer/route": { "id": "routes/achievements/robo-soccer/route", "parentId": "root", "path": "/achievements/robo-soccer", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-Dd-35PDq.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useParallax-7PNI3E2J.js", "/assets/resolve-element-Ae9SQlv6.js", "/assets/SVGVisualElement-DeyOIWJ1.js", "/assets/divider-C7EBeqAn.js", "/assets/project-Dwi0bxnd.js", "/assets/aiubcsfest-DCxvkJSk.js", "/assets/roadlinkbg-DgKaMFgq.js", "/assets/motion-BzyDG7JF.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/divider-CJ0zz9kw.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/project-D3JpM_tk.css", "/assets/route-B4q0pLEJ.css"] }, "routes/achievements/isif-2024/route": { "id": "routes/achievements/isif-2024/route", "parentId": "root", "path": "/achievements/isif-2024", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-dvyMpuoo.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useParallax-7PNI3E2J.js", "/assets/resolve-element-Ae9SQlv6.js", "/assets/SVGVisualElement-DeyOIWJ1.js", "/assets/divider-C7EBeqAn.js", "/assets/link-DhgfWIJf.js", "/assets/project-Dwi0bxnd.js", "/assets/isif-_SgPDT9o.js", "/assets/biolimbbg-CfJ_UaFy.js", "/assets/motion-BzyDG7JF.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/divider-CJ0zz9kw.css", "/assets/link-D8crMWF7.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/project-D3JpM_tk.css", "/assets/route-Ds8JpiOp.css"] }, "routes/achievements/robotronics-fest-2025/route": { "id": "routes/achievements/robotronics-fest-2025/route", "parentId": "root", "path": "/achievements/robotronics-fest-2025", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-CisOe7K9.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useParallax-7PNI3E2J.js", "/assets/resolve-element-Ae9SQlv6.js", "/assets/SVGVisualElement-DeyOIWJ1.js", "/assets/divider-C7EBeqAn.js", "/assets/link-DhgfWIJf.js", "/assets/project-Dwi0bxnd.js", "/assets/robotronics-C7atnC5w.js", "/assets/roadlinkbg-DgKaMFgq.js", "/assets/motion-BzyDG7JF.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/divider-CJ0zz9kw.css", "/assets/link-D8crMWF7.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/project-D3JpM_tk.css", "/assets/route-Ds8JpiOp.css"] }, "routes/achievements/khude-biggyani-2022/route": { "id": "routes/achievements/khude-biggyani-2022/route", "parentId": "root", "path": "/achievements/khude-biggyani-2022", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DMN-YiiO.js?client-route=1", "imports": ["/assets/jsx-runtime-DexIYAB0.js", "/assets/index-D-yVsArm.js", "/assets/components-BBmB_d3F.js", "/assets/heading-dwA2ttB9.js", "/assets/theme-provider-BUpT2wrr.js", "/assets/image-EkbXULBh.js", "/assets/decoder-text-CapWp8Xz.js", "/assets/image-Cp0fg7HJ.js", "/assets/section-BwkOdwsM.js", "/assets/useParallax-7PNI3E2J.js", "/assets/resolve-element-Ae9SQlv6.js", "/assets/SVGVisualElement-DeyOIWJ1.js", "/assets/divider-C7EBeqAn.js", "/assets/project-Dwi0bxnd.js", "/assets/khude biggani-C3oJlDMb.js", "/assets/motion-BzyDG7JF.js"], "css": ["/assets/heading-DxmoR0-i.css", "/assets/divider-CJ0zz9kw.css", "/assets/image-CQFqa4Pm.css", "/assets/section-w-yx8eGG.css", "/assets/decoder-text-CG7YQCDJ.css", "/assets/project-D3JpM_tk.css", "/assets/route-Ds8JpiOp.css"] } }, "url": "/assets/manifest-6add860c.js", "version": "6add860c" };
const mode = "production";
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/articles.modern-styling-in-react": {
    id: "routes/articles.modern-styling-in-react",
    parentId: "routes/articles",
    path: "modern-styling-in-react",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/projects.saliva-robot": {
    id: "routes/projects.saliva-robot",
    parentId: "root",
    path: "projects/saliva-robot",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/achievements_._index": {
    id: "routes/achievements_._index",
    parentId: "root",
    path: "achievements",
    index: true,
    caseSensitive: void 0,
    module: route3
  },
  "routes/articles.hello-world": {
    id: "routes/articles.hello-world",
    parentId: "routes/articles",
    path: "hello-world",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/projects.wheelchair": {
    id: "routes/projects.wheelchair",
    parentId: "root",
    path: "projects/wheelchair",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/projects.roadlink": {
    id: "routes/projects.roadlink",
    parentId: "root",
    path: "projects/roadlink",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/articles_._index": {
    id: "routes/articles_._index",
    parentId: "root",
    path: "articles",
    index: true,
    caseSensitive: void 0,
    module: route7
  },
  "routes/projects_._index": {
    id: "routes/projects_._index",
    parentId: "root",
    path: "projects",
    index: true,
    caseSensitive: void 0,
    module: route8
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/achievements": {
    id: "routes/achievements",
    parentId: "root",
    path: "achievements",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/articles": {
    id: "routes/articles",
    parentId: "root",
    path: "articles",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route12
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route15
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route14
  },
  "routes/home/route": {
    id: "routes/home/route",
    parentId: "root",
    path: "/",
    index: true,
    caseSensitive: void 0,
    module: route15
  },
  "routes/achievements/conrad-challenge/route": {
    id: "routes/achievements/conrad-challenge/route",
    parentId: "root",
    path: "/achievements/conrad-challenge",
    index: void 0,
    caseSensitive: void 0,
    module: route16
  },
  "routes/achievements/robotech-olympiad/route": {
    id: "routes/achievements/robotech-olympiad/route",
    parentId: "root",
    path: "/achievements/robotech-olympiad",
    index: void 0,
    caseSensitive: void 0,
    module: route17
  },
  "routes/achievements/aiub-cs-fest/route": {
    id: "routes/achievements/aiub-cs-fest/route",
    parentId: "root",
    path: "/achievements/aiub-cs-fest",
    index: void 0,
    caseSensitive: void 0,
    module: route18
  },
  "routes/achievements/aiub-cs-fest-junior/route": {
    id: "routes/achievements/aiub-cs-fest-junior/route",
    parentId: "root",
    path: "/achievements/aiub-cs-fest-junior",
    index: void 0,
    caseSensitive: void 0,
    module: route19
  },
  "routes/achievements/robo-soccer/route": {
    id: "routes/achievements/robo-soccer/route",
    parentId: "root",
    path: "/achievements/robo-soccer",
    index: void 0,
    caseSensitive: void 0,
    module: route20
  },
  "routes/achievements/isif-2024/route": {
    id: "routes/achievements/isif-2024/route",
    parentId: "root",
    path: "/achievements/isif-2024",
    index: void 0,
    caseSensitive: void 0,
    module: route21
  },
  "routes/achievements/robotronics-fest-2025/route": {
    id: "routes/achievements/robotronics-fest-2025/route",
    parentId: "root",
    path: "/achievements/robotronics-fest-2025",
    index: void 0,
    caseSensitive: void 0,
    module: route22
  },
  "routes/achievements/khude-biggyani-2022/route": {
    id: "routes/achievements/khude-biggyani-2022/route",
    parentId: "root",
    path: "/achievements/khude-biggyani-2022",
    index: void 0,
    caseSensitive: void 0,
    module: route23
  }
};
const serverBuild = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  assets: serverManifest,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
}, Symbol.toStringTag, { value: "Module" }));
export {
  ModelAnimationType as M,
  Transition as T,
  cssProps as a,
  useTheme as b,
  classes as c,
  useWindowSize as d,
  mode as e,
  assetsBuildDirectory as f,
  basename as g,
  future as h,
  isSpaMode as i,
  entry as j,
  routes as k,
  media as m,
  numToMs as n,
  publicPath as p,
  resolveSrcFromSrcSet as r,
  serverManifest as s,
  useInViewport as u
};
