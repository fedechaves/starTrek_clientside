document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const aliensName = document.querySelector('input').value
    try {
        const response = await fetch(`https://fedestartrek.herokuapp.com/api/${aliensName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('alienName').innerText = data[0].speciesName
        document.getElementById('alienWorld').innerText = data[0].homeworld
        document.getElementById('alienFeatures').innerText = data[0].features
        document.getElementById('alienFacts').innerText = data[0].facts
        document.getElementById('alienExamples').innerText = data[0].examples

        document.getElementById('alienImage').src = data[0].image
        document.getElementById('alienCaption').innerText = data[0].speciesName
    } catch {
        console.log(error)
    }
}