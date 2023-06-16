$(document).ready(() => {
    getCanciones();
})
let musica;
function getCanciones() {
    $.getJSON("play-list.json", (mjson) => {
        const { canciones } = mjson;
        musica = canciones;
        genList(canciones);
    })
}

function genList(canciones) {
    $.each(canciones, (i, { id, titulo }) => {
        $("#playList").append(`<li class="list-group-item" id=${id}>${titulo}</li>`)
    })
    $.each($("#playList li"), (i, li) => {
        li.addEventListener('click', () => {
            playSong(li.getAttribute('id'))
        })
    })
 

}

function playSong(id) {
    $("#img-album").attr('src', musica[id].imagen);
    $("#player").attr("src", musica[id].cancion);
} 


