const personForm = document.querySelector('#personForm')

function handleSubmit(ev){
    console.log(ev)
    ev.preventDefault()
    const f = ev.target
    const details = document.querySelector('#details')
    const name = f.personName.value
    const favoriteColor =f.favoriteColor.value
    const age = f.age.value

    const colorDiv =`
    <div style="background-color: ${favoriteColor}; width: 100px; height:50px;"></div>`

    // const boldedName = document.createElement('strong')
    // boldedName.textContent = name 
    // details.appendChild(boldedName)

    // console.log(f.personName.value + f.personSchool.value)

// details.innerHTML = `
// <ul>
//     <li>Name: ${name}</li>
//     <li>Favorite Color: ${colorDiv}</li>
//     <li>Age: ${age}</li>
// </ul>
// `

const liName = document.createElement('li')
const liFavoriteColor = document.createElement('li')
const liAge = document.createElement('li')
const ulList = document.createElement('ul')

liName.textContent = name
liFavoriteColor.innerHTML = colorDiv
liAge.textContent = age

ulList.appendChild(liName)
ulList.appendChild(liFavoriteColor)
ulList.appendChild(liAge)

details.appendChild(ulList)
        }

personForm.addEventListener('submit', handleSubmit)

