const primaryHeader = document.querySelector('.primary-header')
const primaryNav = document.querySelector('.primary-navigation')
const navToggle = document.querySelector('.mobile-nav-toggle')

function handleClick() {
  primaryNav.hasAttribute('data-visible')
    ? navToggle.setAttribute('aria-expanded', false)
    : navToggle.setAttribute('aria-expanded', true)
  primaryNav.toggleAttribute('data-visible')
  primaryHeader.toggleAttribute('data-overlay')
}

navToggle.addEventListener('click', handleClick)
