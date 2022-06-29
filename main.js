document.querySelector('#getButton').addEventListener('click', apiRequest)

async function apiRequest(){
    const aliensName = document.querySelector('input').value
    try {
        const response = await fetch(`https://fedestartrek.herokuapp.com/api/${aliensName}`)
        const data = await response.json()
        console.log(data)

        document.getElementById('alienName').innerText = data.speciesName
        document.getElementById('alienWorld').innerText = data.homeworld
        document.getElementById('alienFeatures').innerText = data.features
        document.getElementById('alienFacts').innerText = data.facts
        document.getElementById('alienExamples').innerText = data.examples

        document.getElementById('alienImage').src = data.image
        document.getElementById('alienCaption').innerText = data.speciesName
    } catch {
        console.log(error)
    }
}