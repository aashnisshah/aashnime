import Typography from "typography"
import Sutro from "typography-theme-sutro"

Sutro.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    a: {
      color: `#1BA098`,
    },
    body: {
      backgroundColor: `#EFEDE7`,
    },
    li: {
      margin: `20px`,
    },
    ol: {
      margin: `20px`,
    },
    ul: {
      margin: `20px`,
    },
  }
}

const typography = new Typography(Sutro)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
