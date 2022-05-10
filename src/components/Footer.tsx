import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="main-footer border-top">
      <section
        aria-labelledby="s-copyright"
        className="main-footer__item copyright"
      >
        <h2 id="s-copyright" className="copyright__title">
          Copyright
        </h2>
        <p className="copyright__subtitle">&copy; 2022 Fernando Balderas</p>
      </section>
      <section aria-labelledby="s-social" className="main-footer__item social">
        <h2 id="s-social" className="social__title">
          Social media
        </h2>
        <nav className="social__nav social-nav" aria-label="Social links">
          <ul className="social-nav__list">
            <li className="social-nav__item">
              <a
                href="https://www.linkedin.com/in/fernando-balderas-guzman"
                aria-label="LinkedIn"
                className="social-nav__link"
              >
                <FaLinkedin />
              </a>
            </li>
            <li className="social-nav__item">
              <a
                href="https://github.com/Fernando-Balderas"
                aria-label="GitHub"
                className="social-nav__link"
              >
                <FaGithub />
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  )
}

export default Footer
