const onSubmit = (e) => {
    let name = document.querySelector('#name').value;
    console.log(name);
    localStorage.setItem("name", ` ${name} `)
    console.log(localStorage.getItem("name"));
    window.location.href='/index.html'
}

