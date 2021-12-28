import React, { useEffect, useState } from "react"
import { useThemeDetector } from "../utils"
import * as styles from "./themeToggle.module.scss"

export default function ThemeToggle() {
  const [checked, setChecked] = useState(isSelectedDarkTheme)
  const isDarkTheme = useThemeDetector()

  useEffect(() => {
    setChecked(isSelectedDarkTheme)
  }, [isDarkTheme])

  // Return value based on selected theme
  function isSelectedDarkTheme(): boolean {
    const isBrowser = typeof window !== "undefined"
    if (!isBrowser) return false
    let theme = "light"

    if (localStorage.getItem("theme")) {
      localStorage.getItem("theme") == "dark"
        ? (theme = "dark")
        : (theme = "light")
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme = "dark"
    }
    if (theme === "dark") {
      return true
    }
    return false
  }

  function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const isBrowser = typeof window !== "undefined"
    const isChecked = e.target.checked
    if (!isBrowser || !localStorage) return
    if (isChecked) {
      localStorage.setItem("theme", "dark")
      document.documentElement.setAttribute("data-theme", "dark")
      setChecked(true)
    } else {
      console.log("Checked to light")
      localStorage.setItem("theme", "light")
      document.documentElement.setAttribute("data-theme", "light")
      setChecked(false)
    }
  }

  return (
    <div className={styles.container}>
      <input
        aria-label="dark mode on"
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="-4 -4 39 39"
        aria-hidden="true"
        focusable="false"
      >
        <rect
          className={styles.checkboxBg}
          width="35"
          height="35"
          x="-2"
          y="-2"
          stroke="none"
          fill="none"
          rx="100"
          ry="100"
        ></rect>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.sun}
          x="5.5"
          y="5.5"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          ></path>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className={styles.moon}
          x="5.5"
          y="5.5"
          width="20"
          height="20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
      </svg>
    </div>
  )
}
