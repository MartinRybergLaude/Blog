import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import * as styles from "./header.module.scss"
import ThemeToggle from "./themeToggle"
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  activeTag: string
}
const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}
const ulVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}
const linkVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
}

const transition = {
  type: "spring",
  damping: 60,
  stiffness: 500,
  ease: "easeInOut",
}

export default function Header(props: Props) {
  const [openBurger, setOpenBurger] = useState(false)
  const isBrowser = typeof window !== "undefined"

  // Close burger menu if window is resized
  useEffect(() => {
    if (isBrowser) {
      window.addEventListener("resize", registerResize)
      return () => {
        window.removeEventListener("resize", registerResize)
      }
      function registerResize() {
        setOpenBurger(false)
      }
    }
  }, [])

  useEffect(() => {
    if (isBrowser) {
      if (openBurger) {
        document.body.style.overflow = "hidden"
      } else {
        document.body.style.overflow = "auto"
      }
    }
  }, [openBurger])

  function getActiveString(title: string) {
    return title === props.activeTag ? styles.linkActive : ""
  }

  return (
    <header className={styles.header}>
      <button
        aria-label="burger menu"
        className={styles.burgerMenu}
        onClick={() => setOpenBurger(!openBurger)}
      >
        <AnimatePresence initial={false}>
          {!openBurger ? (
            <motion.svg
              key="close"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={buttonVariants}
              transition={transition}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              className={styles.burgerSvg}
            >
              <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z" />
            </motion.svg>
          ) : (
            <motion.svg
              key="open"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={buttonVariants}
              transition={transition}
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.burgerSvg}
            >
              <path d="M 4.9902344 3.9902344 A 1.0001 1.0001 0 0 0 4.2929688 5.7070312 L 10.585938 12 L 4.2929688 18.292969 A 1.0001 1.0001 0 1 0 5.7070312 19.707031 L 12 13.414062 L 18.292969 19.707031 A 1.0001 1.0001 0 1 0 19.707031 18.292969 L 13.414062 12 L 19.707031 5.7070312 A 1.0001 1.0001 0 0 0 18.980469 3.9902344 A 1.0001 1.0001 0 0 0 18.292969 4.2929688 L 12 10.585938 L 5.7070312 4.2929688 A 1.0001 1.0001 0 0 0 4.9902344 3.9902344 z"></path>
            </motion.svg>
          )}
        </AnimatePresence>
      </button>
      <nav>
        <AnimatePresence initial={false}>
          {openBurger && (
            <motion.ul
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={ulVariants}
              transition={transition}
              className={styles.mobileUl}
            >
              <motion.li variants={linkVariants} transition={transition}>
                <Link
                  className={styles.link + " " + getActiveString("home")}
                  to={"/"}
                  onClick={() => setOpenBurger(false)}
                >
                  Home
                </Link>
              </motion.li>
              <motion.li variants={linkVariants} transition={transition}>
                <Link
                  className={styles.link + " " + getActiveString("blog")}
                  to={"/blog"}
                  onClick={() => setOpenBurger(false)}
                >
                  Blog
                </Link>
              </motion.li>
              <motion.li variants={linkVariants} transition={transition}>
                <Link
                  className={styles.link + " " + getActiveString("work")}
                  to={"/work"}
                  onClick={() => setOpenBurger(false)}
                >
                  Work
                </Link>
              </motion.li>
              <motion.li variants={linkVariants} transition={transition}>
                <Link
                  className={styles.link + " " + getActiveString("about")}
                  to={"/about"}
                  onClick={() => setOpenBurger(false)}
                >
                  About
                </Link>
              </motion.li>
              <motion.li variants={linkVariants} transition={transition}>
                <Link
                  className={styles.link + " " + getActiveString("contact")}
                  to={"/contact"}
                  onClick={() => setOpenBurger(false)}
                >
                  Contact
                </Link>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>
        <ul className={styles.desktopUl}>
          <li>
            <Link
              className={styles.link + " " + getActiveString("home")}
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={styles.link + " " + getActiveString("blog")}
              to={"/blog"}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={styles.link + " " + getActiveString("work")}
              to={"/work"}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className={styles.link + " " + getActiveString("about")}
              to={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={styles.link + " " + getActiveString("contact")}
              to={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <ThemeToggle />
    </header>
  )
}
