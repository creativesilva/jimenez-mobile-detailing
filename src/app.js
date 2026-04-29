const EMAILJS_SERVICE_ID = 'service_uf0e37g'
const EMAILJS_TEMPLATE_ID = 'template_m7zwpf9'
const EMAILJS_PUBLIC_KEY = 'z2UjAu1N-IFmF2pbc'

const modal = document.getElementById('booking-modal')
const form = document.getElementById('inquiry-form')
const message = document.getElementById('form-message')
const siteMenu = document.getElementById('site-menu')
const menuToggle = document.querySelector('.menu-toggle')
const defaultPackage = 'Complete Detail'

if (window.emailjs) {
  window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
}

document.querySelectorAll('.open-booking, .package-select').forEach((button) => {
  button.addEventListener('click', () => {
    const packageName = button.dataset.package

    if (packageName) {
      setCustomSelectValue('selected_package', packageName)
    }

    closeSiteMenu()
    openBookingModal()
  })
})

document.querySelectorAll('[data-package-detail]').forEach((tile) => {
  tile.addEventListener('click', () => {
    showPackageDetails(tile.dataset.packageDetail)
  })
})

document.querySelectorAll('[data-package-collapse]').forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation()
    closePackageDetails(button.dataset.packageCollapse)
  })
})

document.querySelectorAll('[data-close-modal]').forEach((button) => {
  button.addEventListener('click', closeBookingModal)
})

menuToggle?.addEventListener('click', openSiteMenu)

document.querySelectorAll('[data-close-menu]').forEach((button) => {
  button.addEventListener('click', closeSiteMenu)
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    closeBookingModal()
    closeAllCustomSelects()
    closeSiteMenu()
  }
})

if (window.location.hash === '#book') {
  window.setTimeout(openBookingModal, 250)
}

setupDatePicker()

document.querySelectorAll('.custom-select').forEach((select) => {
  const trigger = select.querySelector('.custom-select-button')
  const label = trigger?.querySelector('span')
  const options = select.querySelectorAll('[role="option"]')
  const fieldName = select.dataset.name
  const input = fieldName ? document.querySelector(`input[name="${fieldName}"]`) : null

  trigger?.addEventListener('click', () => {
    const isOpen = select.classList.contains('open')
    closeAllCustomSelects()
    select.classList.toggle('open', !isOpen)
    trigger.setAttribute('aria-expanded', String(!isOpen))
  })

  options.forEach((option) => {
    option.addEventListener('click', () => {
      const value = option.dataset.value || option.textContent.trim()

      if (input) {
        input.value = value
      }

      if (label) {
        label.textContent = value
      }

      options.forEach((item) => item.removeAttribute('aria-selected'))
      option.setAttribute('aria-selected', 'true')
      closeAllCustomSelects()
    })
  })
})

document.addEventListener('click', (event) => {
  if (!event.target.closest('.custom-select')) {
    closeAllCustomSelects()
  }
})

if (form && message) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    if (!window.emailjs) {
      showMessage('Something went wrong. Please text 805-591-4562 directly or try again.', 'error')
      return
    }

    const submitButton = form.querySelector('button[type="submit"]')
    const formData = new FormData(form)
    const addons = 'Discuss during booking'
    const preferredTime = String(formData.get('preferred_time') || '')

    if (!preferredTime) {
      showMessage('Please choose a preferred time window before sending your request.', 'error')
      document.querySelector('.custom-select[data-name="preferred_time"] .custom-select-button')?.focus()
      return
    }

    const templateParams = {
      from_name: String(formData.get('from_name') || ''),
      phone: String(formData.get('phone') || ''),
      vehicle_info: String(formData.get('vehicle_info') || 'Not provided'),
      service_location: String(formData.get('service_location') || ''),
      selected_package: String(formData.get('selected_package') || ''),
      preferred_date: String(formData.get('preferred_date') || ''),
      preferred_time: preferredTime,
      addons,
      notes: String(formData.get('notes') || 'None provided'),
      reply_to: 'creativesilva1@gmail.com',
    }

    submitButton.disabled = true
    submitButton.textContent = 'Sending request...'
    showMessage('', '')

    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
      form.reset()
      setCustomSelectValue('selected_package', defaultPackage)
      setCustomSelectValue('preferred_time', '')
      showMessage(
        'Thanks - your request was sent. Jimenez Mobile Detailing will text you back to confirm availability.',
        'success',
      )
    } catch (error) {
      showMessage('Something went wrong. Please text 805-591-4562 directly or try again.', 'error')
    } finally {
      submitButton.disabled = false
      submitButton.textContent = 'Request My Detail'
    }
  })
}

document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.carousel-track')
  const slides = Array.from(carousel.querySelectorAll('.carousel-slide'))
  const previous = carousel.querySelector('.previous')
  const next = carousel.querySelector('.next')
  const dots = carousel.querySelector('.carousel-dots')
  let index = 1
  let startX = 0
  let timer

  if (!track || slides.length === 0) {
    return
  }

  const firstClone = slides[0].cloneNode(true)
  const lastClone = slides[slides.length - 1].cloneNode(true)

  firstClone.classList.add('carousel-clone')
  firstClone.setAttribute('aria-hidden', 'true')
  lastClone.classList.add('carousel-clone')
  lastClone.setAttribute('aria-hidden', 'true')
  track.insertBefore(lastClone, slides[0])
  track.appendChild(firstClone)

  slides.forEach((_, slideIndex) => {
    const dot = document.createElement('button')
    dot.type = 'button'
    dot.setAttribute('aria-label', `Show image ${slideIndex + 1}`)
    dot.addEventListener('click', () => {
      goToSlide(slideIndex)
      restartTimer()
    })
    dots?.appendChild(dot)
  })

  const dotButtons = Array.from(dots?.querySelectorAll('button') || [])

  function setTrackPosition(animate = true) {
    track.style.transition = animate ? '' : 'none'
    track.style.transform = `translateX(-${index * 100}%)`

    if (!animate) {
      track.offsetHeight
      track.style.transition = ''
    }
  }

  function activeDotIndex() {
    return (index - 1 + slides.length) % slides.length
  }

  function updateDots() {
    const current = activeDotIndex()
    dotButtons.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === current))
  }

  function goToSlide(nextIndex) {
    index = nextIndex + 1
    setTrackPosition()
    updateDots()
  }

  function moveSlides(direction) {
    index += direction
    setTrackPosition()
    updateDots()
  }

  function restartTimer() {
    window.clearInterval(timer)
    timer = window.setInterval(() => moveSlides(1), 3000)
  }

  previous?.addEventListener('click', () => {
    moveSlides(-1)
    restartTimer()
  })

  next?.addEventListener('click', () => {
    moveSlides(1)
    restartTimer()
  })

  track.addEventListener('transitionend', () => {
    if (index === 0) {
      index = slides.length
      setTrackPosition(false)
    }

    if (index === slides.length + 1) {
      index = 1
      setTrackPosition(false)
    }

    updateDots()
  })

  carousel.addEventListener('touchstart', (event) => {
    startX = event.touches[0].clientX
  })

  carousel.addEventListener('touchend', (event) => {
    const endX = event.changedTouches[0].clientX
    const delta = endX - startX

    if (Math.abs(delta) > 45) {
      moveSlides(delta > 0 ? -1 : 1)
      restartTimer()
    }
  })

  setTrackPosition(false)
  updateDots()
  restartTimer()
})

function openBookingModal() {
  if (!modal) {
    return
  }

  modal.classList.add('open')
  modal.setAttribute('aria-hidden', 'false')
  document.body.classList.add('modal-open')
  window.setTimeout(() => form?.querySelector('input')?.focus(), 120)
}

function closeBookingModal() {
  if (!modal) {
    return
  }

  modal.classList.remove('open')
  modal.setAttribute('aria-hidden', 'true')
  document.body.classList.remove('modal-open')
}

function openSiteMenu() {
  if (!siteMenu) {
    return
  }

  siteMenu.classList.add('open')
  siteMenu.setAttribute('aria-hidden', 'false')
  menuToggle?.setAttribute('aria-expanded', 'true')
  document.body.classList.add('menu-open')
}

function closeSiteMenu() {
  if (!siteMenu) {
    return
  }

  siteMenu.classList.remove('open')
  siteMenu.setAttribute('aria-hidden', 'true')
  menuToggle?.setAttribute('aria-expanded', 'false')
  document.body.classList.remove('menu-open')
}

function closeAllCustomSelects() {
  document.querySelectorAll('.custom-select').forEach((select) => {
    select.classList.remove('open')
    select.querySelector('.custom-select-button')?.setAttribute('aria-expanded', 'false')
  })
}

function setCustomSelectValue(name, value) {
  const input = document.querySelector(`input[name="${name}"]`)
  const select = document.querySelector(`.custom-select[data-name="${name}"]`)
  const label = select?.querySelector('.custom-select-button span')
  const options = select?.querySelectorAll('[role="option"]') || []

  if (input) {
    input.value = value
  }

  if (label) {
    label.textContent = value || 'Choose a window'
  }

  options.forEach((option) => {
    option.toggleAttribute('aria-selected', option.dataset.value === value)
  })
}

function setupDatePicker() {
  const dateInput = document.querySelector('input[name="preferred_date"]')

  if (!dateInput) {
    return
  }

  const today = new Date()
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset())
  dateInput.min = today.toISOString().slice(0, 10)

  dateInput.addEventListener('click', openNativeDatePicker)
  dateInput.addEventListener('focus', openNativeDatePicker)
}

function openNativeDatePicker(event) {
  const input = event.currentTarget

  if (typeof input.showPicker !== 'function') {
    return
  }

  try {
    input.showPicker()
  } catch (error) {
    // Some browsers only allow showPicker from a direct tap/click.
  }
}

function showPackageDetails(packageName) {
  if (!packageName) {
    return
  }

  setCustomSelectValue('selected_package', packageName)

  document.querySelectorAll('[data-package-detail]').forEach((tile) => {
    tile.setAttribute('aria-expanded', String(tile.dataset.packageDetail === packageName))
  })

  document.querySelectorAll('[data-package-card]').forEach((card) => {
    const isActive = card.dataset.packageCard === packageName
    card.classList.toggle('open', isActive)

    const details = card.querySelector('.package-card-details')

    if (details) {
      details.hidden = !isActive
    }
  })
}

function closePackageDetails(packageName) {
  document.querySelectorAll('[data-package-detail]').forEach((tile) => {
    if (!packageName || tile.dataset.packageDetail === packageName) {
      tile.setAttribute('aria-expanded', 'false')
    }
  })

  document.querySelectorAll('[data-package-card]').forEach((card) => {
    if (packageName && card.dataset.packageCard !== packageName) {
      return
    }

    card.classList.remove('open')

    const details = card.querySelector('.package-card-details')

    if (details) {
      details.hidden = true
    }
  })
}

function showMessage(text, type) {
  if (!message) {
    return
  }

  message.hidden = !text
  message.textContent = text
  message.className = type ? `form-message ${type}` : 'form-message'
}
