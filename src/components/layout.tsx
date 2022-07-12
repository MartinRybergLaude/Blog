import * as React from "react"
import Header from "./header"
import Footer from "./footer"
import * as styles from "./layout.module.scss"
import { useThemeDetector } from "../utils"
import { useEffect } from "react"

interface Props {
  title: string
  tag: string
  children?: React.ReactNode
}
function Layout(props: Props) {
  const isDarkTheme = useThemeDetector()

  useEffect(() => {
    const isBrowser = typeof window !== "undefined"
    if (isBrowser) {
      applyCorrectTheme()
    }
  }, [isDarkTheme])

  function applyCorrectTheme() {
    let theme = "light"

    if (localStorage.getItem("theme")) {
      localStorage.getItem("theme") == "dark"
        ? (theme = "dark")
        : (theme = "light")
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark"
    }
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark")
    } else {
      document.documentElement.setAttribute("data-theme", "light")
    }
  }
  return (
    <div className="page">
      <div className="masterContainer">
        <Header activeTag={props.tag} />
        <h1 className={styles.title}>{props.title}</h1>
        <main className="wrapper">{props.children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
