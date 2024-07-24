const scriptURL = 'https://script.google.com/macros/s/AKfycbyPWa9vieNMVoCVTwL-NgpG1abnSivTM45SUQSTXBL4NeClFET5m0oq2Y-QtiAOq1yBcg/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})