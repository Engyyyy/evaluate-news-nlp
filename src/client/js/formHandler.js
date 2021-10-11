function handleSubmit(event) {
    event.preventDefault()
    console.log("::: Form Submitted :::")
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    document.getElementById('name').value = ''

    const result = document.getElementById('results')
    result.innerHTML = ''

    if(Client.validateInput(formText)) {

        fetch('http://localhost:8081/submit', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({url: formText})
        })
        .then(res => res.json())
        .then(({agreement, confidence, subjectivity, irony, score_tag}) => {
            const list = document.createElement('ul')

            let li = document.createElement('li')
            li.textContent = `agreement: ${agreement}`
            list.appendChild(li)

            li = document.createElement('li')
            li.textContent = `confidence: ${confidence}`
            list.appendChild(li)

            li = document.createElement('li')
            li.textContent = `subjectivity: ${subjectivity}`
            list.appendChild(li)

            li = document.createElement('li')
            li.textContent = `irony: ${irony}`
            list.appendChild(li)

            li = document.createElement('li')
            li.textContent = `polarity: ${score_tag}`
            list.appendChild(li)

            result.appendChild(list)
        })
    }
    else {
        const error = document.createElement('p')
        error.textContent = "Please enter a valid URL..."
        result.appendChild(error)
    }
}

export { handleSubmit }
