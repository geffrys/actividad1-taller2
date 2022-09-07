const getName = () => {
    console.log(localStorage.getItem("name"));
    let name = localStorage.getItem("name")
    let user_text_id = document.querySelector('#userName')
    user_text_id.innerHTML = `<h3>Bienvenido ${name}</h3>`
}
getName()




const imagesRoute = 'assets/images/userAvatars/'

$(document).ready(function () {

    $("#botonSubmit").on("click", function (e) {
        e.preventDefault()
        let imagen = $('#options').find(":selected").val();
        imagen = imagen == 1 ?  imagesRoute+'perfil1.png' : imagen == 2 ? imagesRoute+'perfil2.png' : imagesRoute+'perfil3.png'
        let name = $("#name").val();
        let date = $("#date").val();
        let cumpleanos = new Date(date)
        let hoy = new Date()
        let edad = hoy.getFullYear() - cumpleanos.getFullYear()
        if (/^[a-zA-Z\s]*$/.test(name) && name!=null && name!="") {
            if (date!=null && date!="") {
                $('.small-warning-date').text('');
                $('.small-warning-name').text('');
                Agregar(imagen,name, edad)
            }else{
                $('.small-warning-date').text('Ingresa una fecha valida');
            }
        }else{
            if (date==""||date==null) {
                $('.small-warning-date').text('Ingresa una fecha valida');
            }
            $('.small-warning-name').text('Ingresa un nombre valido');

        }
    });

    const Agregar = (imagen, nombre, edad) => {
        ($("#cuerpoTabla")
            .append($('<tr>')
                .append($('<td>')
                    .append($(`<img src="${imagen}" class="imagen-tabla" alt="imagen de usuario">`))
                ).append($('</td>'))
                .append($('<td>')
                    .append(nombre)
                ).append($('</td>'))
                .append($('<td>')
                    .append(edad)
                ).append($('</td>'))
            ).append('</tr>')
        )
    }
})
