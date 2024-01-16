const init = () => {
  const inputForm = document.querySelector("form")
  inputForm.addEventListener("submit", (happening) => {
    happening.preventDefault()
    const input = document.querySelector('input#searchByID')
    console.log (input.value)

    fetch(`http://localhost:3000/movies/`)
    .then(response => {
        if(response.id === input.value) {
        response.json()} else {
            console.error ("Invalid Id")
        }
  })
    .then(data => {
      console.log(data) 
      const title = document.querySelector('section#movieDetails h4');
      const summary = document.querySelector('section#movieDetails p');
      title.innerText = data.title
      summary.innerText = data.summary
    });
    })

}
document.addEventListener('DOMContentLoaded', init)