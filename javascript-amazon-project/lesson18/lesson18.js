/*
async function postName(name) {
  try{ 
    const response = await fetch('https://supersimplebackend.dev/greeting',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name
      })
    })
    if (response.status >= 400) {
      throw response
    }

    if (error.status === 400) {
      await error.json
    }
    const text = await response.text()
    console.log(text)
  } catch (error) {
    if (error.status === 400) {
      const errorMessage = await error.json();
      console.log(errorMessage);
    } else {
      console.log('Network error. Please try again later.');
    }
  }
}
postName()
*/

/*
async function getAmazon() {
  try {
    const response = await fetch('https://amazon.com')
    const text = await response.text()
    console.log(text)
  } catch (error) {
    console.log('CORS error. You request was blocked by the backend.');
  }
}

getAmazon()
*/

/*
async function postName(name) {
  const response = await fetch('https://supersimplebackend.dev/greeting',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name
    })
  })
  const text = await response.text()
  console.log(text)
}
postName('Tachyon')
*/

/*
fetch('https://supersimplebackend.dev/greeting').then((response) => {
  return response.text()
}).then((text) => {
  console.log(text)
})
*/

/*
const xhr = new XMLHttpRequest()

xhr.addEventListener('load', () => {
  console.log(xhr.response)
})
xhr.open('GET', 'https://supersimplebackend.dev/greeting')
xhr.send()
*/