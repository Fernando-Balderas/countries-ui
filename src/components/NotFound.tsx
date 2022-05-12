import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

function NotFound() {
  const location = useLocation()
  const history = useHistory()
  const handleClick = () => history.push('/')
  return (
    <main className="not-found">
      <section className="not-found__content">
        <FaExclamationTriangle className="not-found__icon" />
        <h1 className="not-found__title">
          404 <code>{location.pathname}</code> not found
        </h1>
        <button className="not-found__go-back" onClick={handleClick}>
          Take me home!
        </button>
      </section>
    </main>
  )
}

export default NotFound
