const URL = 'https://script.google.com/macros/s/AKfycbyi5E_PWV9uxANuT5ju502WHqxe78kHlimIp3cP1J__3Jz9M1ej-LTV5BCYvkZEjWaQ/exec'

const HTTP_OPTIONS = {
  method: 'get',
  redirect: 'follow',
  mode: 'cors',
  dataType: 'jsonp',
  referrerPolicy: 'no-referrer',
  headers: { 'Content-Type': 'text/plain; charset=UTF-8' }
}

export async function ping () {
  const response = await action('ping')
  return await response.json()
}

export async function load () {
  const response = await action('load')
  return await response.json()
}

async function action (action, params = {}) {
  const fullUrl = `${URL}?${Object.entries({ ...params, action }).map(([key, value]) => `${key}=${value}`).join('&')}`
  return await fetch(fullUrl, HTTP_OPTIONS)
}
