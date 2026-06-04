const r=`---
title: My First Article
abstract: This is my very first article on the portfolio!
date: '2026-06-04'
banner: /assets/profile-large.jpg
featured: true
---

# Hello World!

Welcome to my new article page. This is a demonstration that the MDX routing and article parsing is working perfectly.

## Why this is cool
I fixed the Vite 5 string export issue for MDX files, allowing the server to correctly parse the reading time and metadata. Now you can easily create Markdown/MDX articles and they will automatically show up on the Articles index page!

\`\`\`js
console.log("It works!");
\`\`\`
`,d=Object.freeze(Object.defineProperty({__proto__:null,default:r},Symbol.toStringTag,{value:"Module"})),l=`---
title: 'Hello world: how I built this site'
abstract: I originally built this portfolio site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process.
date: '2022-04-21'
banner: /static/hello-world-banner.jpg
---

## How it all started

Back in 2018 I needed to update my portfolio site (as designers are wont to do). I thought I'd steer away from current trends and build a site that tapped into the 80s and 90s Cyberpunk aesthetic. The genre contains some of my favorite movies like Ghost in the Shell (1995), The Matrix (1999), and Akira (1988). That's where I borrowed few visual motifs like the bold typography on the homepage and the text decoding effect as a homage to the Matrix's "Digital rain" effect, which was itself inspired by Ghost in the Shell's opening credits. There's even a nod to Ghost in the Shell on my [404 page](/404).

![A scene from Ghost in the Shell (1995) with the Major cloaking with thermoptic camouflage; the poster for Akira; The Matrix's digital rain effect](/static/inspiration.png)

## The first iteration

I was learning React when I first built this website, and while overkill for a personal portfolio site, it was a great opportunity to learn and experiment with learning it. I've found the best way to learn is by actually making something that you intend to use and ship.

The no-brainer choice at the time was Create React App. It served me well in getting things up and running without having to fuss about with config. On top of that, I was using Styled Components, Tween.js, and React Transition Group. I was also playing with some early Three.js effects like the displacement sphere that still resides on the homepage.

Since then I've used this website as a playground for experimenting with new tech and techniques, so over time I've overhauled pretty much everything. A big change along the way was replacing images of my work in static mockups with real-time rendered interactive 3D devices using models I created for the [Clay Mockups 3D Figma plugin](https://www.figma.com/community/plugin/819335598581469537/Clay-Mockups-3D).

![Thumbnail for my Clay Mockups 3D plugin](/static/clay-mockups.png)

## Migrating to Next.js

With Create React App I was using a somewhat janky and unmaintained package to prerender the site as static HTML in Puppeteer. This worked okay for the most part, but I wanted a more robust solution for posting articles (like this one you're reading) using MDX. I had a half baked version of this lying dormant in the repo, but it never felt good enough to publish. I looked at a few options like Gatsby, Vite, and Parcel, and Remix, but Next.js stood out as the most suited to my needs.

- The site is now based on Next.js. Is a much better fit than Create React App. For now I'm just using it to create a static export, but maybe I'll add some server rendered stuff in the future.
- Styling is now vanilla CSS with postcss to add support for the future native CSS nesting and custom media queries features. I'm using CSS modules instead of BEM syntax to avoid style conflicts.
- For generating pages from \`.mdx\` files, I'm using Kent C Dodds' [mdx-bundler](https://github.com/kentcdodds/mdx-bundler). In combination with Next.js it makes generating pages from \`.mdx\` files really quick and simple.
- For animation I've moved from Tween.js and React Transition Group to just Framer Motion.
- 3D effects are still all using Three.js, but I've added \`three-stdlib\` as a better maintained replacement for modules from Three's examples.

## Not all smooth sailing

For the most part, the migration was pretty straight-forward. The way I has structured the site with React Router lent itself well to conforming with Next.js's file-based routing, and I was already using postcss for styling. I did, however, encounter a couple of problems:

### 1. Route transitions

There was a bit of a conflict when it came to animated route transitions. Next.js will immediately yank out all of the styles for the previous page when navigating to a new one. This works great when you're not animating between pages because it cleans up any unused styles form hanging around. When you are animating the page transition though, all of a sudden the previous page becomes jarringly completely unstyled as it transitions out. This problem one of [the most commented and reacted to issues](https://github.com/vercel/next.js/issues/17464) on the Next.js repo, so hopefully there's a fix soon, but for now I've dropped in a [hack to fix things](https://github.com/vercel/next.js/issues/17464#issuecomment-796430107) from the issue's comments.

### 2. Scroll restoration

Somewhat related to the route transitions, I had to opt out of both Next.js's and the native browser's scroll restoration in order to prevent the browser immediately scrolling to the top when the page started transitioning out. Next.js also doesn't appear to handle shifting focus when linking to the id of an element within the page, so I added that in for accessibility.

## Looking back, and forward

It's been pretty neat to see how popular the site's been on Github, with 500 stars (as of writing this post). It's also neat seeing how people adapt it to their own style and modify it, which is part of the reason I made it open source. I want others to be able to take it apart and see how it's made, learn from and improve upon it. That's what inspect element used to be like on the web, but with modern sites compiling and minifying and injecting garbled strings into css classes that's not as simple these days. The next best thing I could do was to open source it.

I look forward to continuing to use this site as a playground, and it'll be interesting to compare the next iteration to where it is today.

## Update: Feb 2024

I recently migrated the site to Remix now that they've got good support for CSS modules meaning I didn't need to convert all of my styling. It was mostly a process of deleting all of the hacks mentioned above in this post, and things just work and feel more "web standard". I'm now using the [CSS view transitions API](https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API) to handle smoothly crossfading on route transitions, which is a feature baked into React Router (and as a result Remix). I don't need to do weird javascript hacks to try and set the correct theme (which still inevitably led to a flash of unthemed content) - I'm now storing the preferred theme in a session cookie which Remix makes really easy to do.

Overall I'm really happy with Remix, would totally recommend it. I would like to eventually replace a lot of animations triggered by Javascript with the upcoming scroll driven animations CSS API, but browser support isn't there yet, so maybe some time later this year.
`,c=Object.freeze(Object.defineProperty({__proto__:null,default:l},Symbol.toStringTag,{value:"Module"})),h=`---
title: You (probably) don't need CSS-in-JS
abstract: Vanilla CSS is good now actually. Here's a couple nifty techniques for dynamically styling React components with CSS custom properties.
date: '2022-05-01'
banner: /static/modern-styling-in-react-banner.jpg
featured: true
---

When I first tried CSS-in-JS libraries like [Styled Components](https://styled-components.com/) and [Emotion](https://emotion.sh), the thing that felt right about it was passing values or state directly into the styles for a component. It really closed the loop with the concept of React where the UI is a function of state. While this was a definite advancement over the traditional way of styling React with classes and pre-processed CSS, it still had its problems.

To highlight some examples, I'll break down some typical examples using two main types of dynamic styles you'll run into with React components:

1. **Values:** like a color, delay, or position. Anything that represents a single value for a CSS property.
1. **States:** like a primary button variant, or a loading state each having their own set of associated styles.

## Where we are today

Before we get started, for comparison I'll be using SCSS (with [BEM syntax](https://css-tricks.com/bem-101/)) and Styled Components in my examples for how styling is typically approached in React. I won't cover CSS-in-JS libraries that deal with writing CSS as JavaScript objects. I think there are already good solutions out there (I'd recommend [Vanilla Extract](https://vanilla-extract.style/)) if you prefer having type checking and living more fully on the JavaScript side of things. My solution is more for those of us that like writing CSS as CSS, but want to respond to the reactivity and state of components in a better way.

If you're already familiar with the problem, [skip to the solution](#theres-a-better-way-vanilla-css).

### Values

Using vanilla CSS, or pre-processed CSS by means of LESS or SCSS, the traditional way of passing a _value_ to your styles on was to just use inline styles. So if we have a button component that allows a color, it would look something like this:

\`\`\`jsx
function Button({ color, children }) {
  return (
    <button className="button" style={{ backgroundColor: color }}>
      {children}
    </button>
  );
}
\`\`\`

The problem with this approach is that it brings with it all the problems of inline styles. It now has higher specificity making it harder to override, and the styles aren't co-located with the rest of our button styles.

CSS-in-JS (in the case of Styled Components or Emotion) solved this problem by allowing dynamic values like this to be directly as props

\`\`\`jsx
// We can pass the \`color\` value into the styled component as a prop
function Button({ color, children }) {
  return <StyledButton color={color}>{children}</StyledButton>;
}

// The syntax is a little funky, but now in the styled component's styles
// we can use its props as a function
const StyledButton = styled.button\`
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  color: dimgrey;
  background-color: \${props => props.color};
\`;
\`\`\`

### States

Traditionally, we'd use css classes and concatenate strings. This always felt messy and clunky, but it works nicely on the css side, particularly if you're using a naming convention like BEM along with a pre-processors. Say we have small, medium, and large button sizes, and a primary variant, it might look something like this:

\`\`\`jsx
function Button({ color, size, primary, children }) {
  return (
    <button
      className={['button', \`button--\${size}\`, primary ? 'button--primary' : null]
        .filter(Boolean)
        .join(' ')}
      style={{ backgroundColor: color }}
    >
      {children}
    </button>
  );
}
\`\`\`

\`\`\`scss
.button {
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  color: dimgrey;
  background-color: whitesmoke;

  &--primary {
    background-color: $primary-color;
  }

  &--small {
    height: 30px;
  }

  &--medium {
    height: 40px;
  }

  &--large {
    height: 60px;
  }
}
\`\`\`

The SCSS is looking nice and clean. I've always liked the pattern of using nesting to concatenate elements and modifiers in SCSS using the BEM syntax.

Our JSX, however, isn't faring so well. That string concatenation on the \`className\` in the is a mess. The size property isn't too bad, because we're appending the value directly onto the class. The primary variant though... yuck. Not to mention the wacky \`filter(Boolean)\` in there to prevent a double space in the class list for non-primary buttons. There are better ways of handling this, for example the \`classnames\` package on NPM. But they only make the problem marginally more bearable.

Unlike dynamic values, Styled Components is still a bit cumbersome in dealing with states

\`\`\`jsx
function Button({ color, size, primary, children }) {
  return (
    <StyledButton color={color}>{children}</StyledButton>
  }
);

const StyledButton = styled.button\`
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  color: dimgrey;
  background-color: whitesmoke;

  \${props => props.primary && css\`
    background-color: $primary-color;
  \`}

  \${props => props.size === 'small' && css\`
    height: 30px;
  \`}

  \${props => props.size === 'medium' && css\`
    height: 40px;
  \`}

  \${props => props.size === 'large' && css\`
    height: 60px;
  \`}
\`;
\`\`\`

It's not _terrible_, but the repeated functions to grab props gets repetitive and makes reading styles quite noisy. It can also get way worse depending on the type of state. If you have separate but mutually exclusive states sometimes it calls for a ternary expression that can end up looking even more convoluted and difficult to parse.

\`\`\`jsx
const StyledButton = styled.button\`
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  color: dimgrey;

  \${props =>
    props.primary
      ? css\`
          height: 60px;
          background-color: darkslateblue;
        \`
      : css\`
          height: 40px;
          background-color: whitesmoke;
        \`}
\`;
\`\`\`

If you're using Prettier for code formatting like I do, you'll end up with a monstrosity like you see above. Monstrosity is a strong way of putting it, but I find the indentation and formatting really difficult to read.

---

## There's a better way: vanilla CSS

The solution was with us all along: CSS custom properties (AKA CSS variables). Well, not really. When the methods I've covered above were established, CSS custom properties weren't that well supported by browsers. Support these days is pretty much green across the board (unless you still need to support ie11).

After making the journey through using SCSS to Styled Components, I've come full circle back to vanilla CSS. I feel like there's an emerging trend of sticking more to platform standards with frameworks like Remix and Deno adhering closer to web standards instead of doing their own thing. I think this will happen with CSS as well, we won't need to reach for pre-processors and CSS-in-JS libraries as much because the native features are becoming _better_ than what they have to offer.

That being said, here's how I've approached styling React components with vanilla CSS. Well, mostly vanilla CSS. I'm using postcss to get support some up and coming features like native nesting and custom media queries. The beauty of postcss is that as browsers support new features, the tooling slowly melts away.

### Values

A really neat trick I've found for passing values into css is using custom properties. It's pretty simple, we can just drop variables into the style property and it works.

\`\`\`jsx
function Button({ color, children }) {
  return (
    <button className="button" style={{ '--color': color }}>
      {children}
    </button>
  );
}
\`\`\`

\`\`\`css
.button {
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  color: dimgrey;
  background-color: var(--color);
}
\`\`\`

Now you might be thinking "isn't this just inline styles with extra steps?", and while we are using inline styles to apply the variable, it doesn't come with the same downsides. For one, there's no specificity issue because we're declaring the property under the \`.button\` selector in the css file. Secondly, all our styles are co-located, it's just the value of the custom property that's being passed down.

This also makes it really convenient when working with properties like transforms or clip-paths where you only need to dynamically control one piece of the value

\`\`\`jsx
// All we need to pass is the value needed by the transform, rather than
// polluting our jsx with the full transform in the inline style
function Button({ offset, children }) {
  return (
    <button className="button" style={{ '--offset': \`\${offset}px\` }}>
      {children}
    </button>
  );
}
\`\`\`

\`\`\`css
.button {
  border: 0;
  padding: 8px 12px;
  font-size: 14px;
  color: dimgrey;
  background-color: whitesmoke;
  transform: translate3d(0, var(--offset), 0);
}
\`\`\`

There's way more you can do with CSS custom properties, like setting defaults and allowing overrides from the cascade for any components that compose one another to hook into, like a "CSS API". [This article from Lea Verou](https://lea.verou.me/2021/10/custom-properties-with-defaults/) does a great job at explaining this technique.

### States

The best way I've found to deal with component states and variants with vanilla CSS is using data attributes. What I like about this is that it pairs nicely with the upcoming native CSS nesting syntax. The old technique of targeting BEM modifiers with \`&--modifier\` doesn't work like it does in pre-processors. But with data attributes, we get similar ergonomics

\`\`\`jsx
function Button({ color, size, primary, children }) {
  return (
    <button className="button" data-size={size} data-primary={primary}>
      {children}
    </button>
  );
}
\`\`\`

\`\`\`css
.button {
  border: 0;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 14px;
  color: dimgrey;
  background-color: whitesmoke;

  &[data-primary='true'] {
    background-color: var(--colorPrimary);
  }

  &[data-size='small'] {
    height: 30px;
  }

  &[data-size='medium'] {
    height: 40px;
  }

  &[data-size='large'] {
    height: 60px;
  }
}
\`\`\`

Have a play with the example button component here:

<Embed src="https://stackblitz.com/edit/vitejs-vite-mjs1oh?embed=1&file=src/Button/Button.jsx" />

This looks similar to how modifiers are written using BEM syntax. It's also much more straightforward and easy to read than the Styled Components function syntax. The one downside is that we do gain a level of specificity that we don't with BEM modifiers using the \`&--modifier\` pattern, but I think that's an acceptable tradeoff.

It may seem kinda _weird_ at first to use data attributes for styling, but it gets around the problem of messy string concatenation using classes. It also mirrors how we can target accessibility attributes for interaction-based styling, for example:

\`\`\`css
.button {
  &[aria-pressed='true'] {
    background-color: gainsboro;
  }

  &[disabled] {
    opacity: 0.4;
  }
}
\`\`\`

I like this approach because it helps structure styling, we can see that any class is styling the base element, andy any attribute is styling a state. As for avoiding style clashes, there are better options now that automate the process like [CSS Modules](https://github.com/css-modules/css-modules) which is included out of the box in most React frameworks like Next.js and Create React App.

Of course, these techniques don't require you to _only_ use vanilla CSS, you can just as easily combine them with CSS-in-JS or a pre-processor. However with new features like [nesting](https://www.w3.org/TR/css-nesting-1/) and [relative colors](https://www.w3.org/TR/css-color-5/#relative-colors) I think it's becoming less necessary to reach for these tools.

The entirety of this website is styled using these techniques, so if you want to see an example of how this applies to some real components, take a gander at the [source code](https://github.com/HamishMW/portfolio).
`,u=Object.freeze(Object.defineProperty({__proto__:null,default:h},Symbol.toStringTag,{value:"Module"}));function p(e){const t=e/1e3/60/60,n=Math.floor(t),o=Math.floor((t-n)*60),i=Math.floor(((t-n)*60-o)*60),a=Math.floor((((t-n)*60-o)*60-i)*1e3/10);return`${s(n)}:${s(o)}:${s(i)}:${s(a)}`}function s(e){return e<10?`0${e}`:`${e}`}function m(e){return e.trim().split(/\s+/).length/225*1e3*60}function g(e){return new Date(e).toLocaleDateString("default",{year:"numeric",month:"long",day:"2-digit"})}export{d as _,c as a,u as b,g as c,p as f,m as r};
