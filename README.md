## Flex styles

> 通用样式

### Usage

![](https://img.shields.io/npm/v/@jimengio/flex-styles.svg?style=flat-square)

```bash
yarn add @jimengio/flex-styles
```

Layout styles:

```js
// layout styles

center;
column;
columnParted;
expand;
flex; // alias for expand, same
fullscreen;
noShrink;
row;
rowCenter;
rowMiddle;
rowParted;

// preset styles

absCenter;
absLeftCenter;
absRightCenter;
absRightTop;
alignItemBottom;
alignItemCenter;
displayFlex;
flexWrap;
fullHeight;
inlineBlock;
inlineRow;
inlineRowMiddle;
maxHeight80vh;
middleSection;
minHeight;
relative;
verticalAlignBottom;
xHiddenYAuto;
```

Also a `Space` component for fixing layout:

```tsx
import { Space } from "@jimengio/flex-styles"

<Space width={8} />

// or
<Space height={8} />
```

### License

MIT
