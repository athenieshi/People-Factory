const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
    console.log(ev)
    ev.preventDefault()
    const f = ev.target
    const heading = document.querySelector('h1')
    heading.textContent = f.personName.value + " goes to " + f.personSchool.value
    console.log(f.personName.value + f.personSchool.value)
}

personForm.addEventListener('submit', handleSubmit)

