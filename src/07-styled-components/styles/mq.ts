enum ScreenSize {
  XS = 320,
  SM = 834,
  MD = 1024,
  LG = 1600,
}

const mediaQueries = {
  xs: `@media (max-width: ${ScreenSize.XS / 16}em)`, // iPhone 5
  sm: `@media (max-width: ${ScreenSize.SM / 16}em)`, // iPad portrait, mobile, iPhone landscape
  md: `@media (max-width: ${ScreenSize.MD / 16}em)`, // iPad landscape
  lg: `@media (max-width: ${ScreenSize.LG / 16}em)`, // desktop
}

export default mediaQueries
