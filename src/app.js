const EMAILJS_SERVICE_ID = 'service_uf0e37g'
const EMAILJS_TEMPLATE_ID = 'template_m7zwpf9'
const EMAILJS_PUBLIC_KEY = 'z2UjAu1N-IFmF2pbc'

const packageSelect = document.getElementById('selected_package')

document.querySelectorAll('.package-select').forEach((button) => {
  button.addEventListener('click', () => {
    if (packageSelect) {
      packageSelect.value = button.dataset.package || 'Signature Detail'
    }
  })
})

const form = document.getElementById('inquiry-form')
const message = document.getElementById('form-message')

if (window.emailjs) {
  window.emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
}

if (form && message) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault()

    if (!window.emailjs) {
      showMessage('Something went wrong. Please text 805-591-4562 directly or try again.', 'error')
      return
    }

    const submitButton = form.querySelector('button[type="submit"]')
    const formData = new FormData(form)
    const addons = formData.getAll('addons').join(', ') || 'None selected'
    const phone = String(formData.get('phone') || '')

    const templateParams = {
      from_name: String(formData.get('from_name') || ''),
      phone,
      vehicle_info: String(formData.get('vehicle_info') || 'Not provided'),
      service_location: String(formData.get('service_location') || ''),
      selected_package: String(formData.get('selected_package') || ''),
      preferred_date: String(formData.get('preferred_date') || ''),
      preferred_time: String(formData.get('preferred_time') || ''),
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
      if (packageSelect) {
        packageSelect.value = 'Signature Detail'
      }
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

function showMessage(text, type) {
  if (!message) {
    return
  }

  message.hidden = !text
  message.textContent = text
  message.className = type ? `form-message ${type}` : 'form-message'
}
