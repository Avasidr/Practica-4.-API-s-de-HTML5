
// Obtener los elementos del DOM
window.addEventListener('DOMContentLoaded', () => {
    const inputFile = document.getElementById('input-file');
    const videoPlayer = document.getElementById('video-player');
    const videoContainer = document.getElementById('video-container');
    const btnPlay = document.getElementById('btn-play');
    const btnPause = document.getElementById('btn-pause');
    const sldVolume = document.getElementById('sld-volume');


    // Asignar eventos a los elementos
    inputFile.addEventListener('change', handleFileSelect);
    btnPlay.addEventListener('click', playVideo);
    btnPause.addEventListener('click', pauseVideo);
    sldVolume.addEventListener('input', setVolume);


    // Función para manejar la selección de archivos
    function handleFileSelect(event) {

        const file = event.target.files[0];

        if(file && file.type.startsWith('video/')) {

            const fileURL = URL.createObjectURL(file);

            // Configuración del reproductor de video
            videoPlayer.src = fileURL;
            videoPlayer.load();
            videoPlayer.style.display = 'block';

            // Deshabilitar los botones mientras se carga el video
            btnPlay.disabled = true;
            btnPause.disabled = true;
            sldVolume.disabled = true;

            // Lanza alerta de carga y evento "canplay" cuando el video está listo para reproducir
            videoPlayer.addEventListener('canplay', () => {
               alert('Cargando video... ');
                videoContainer.style.display = 'block';
                btnPlay.disabled = false;
                btnPause.disabled = false;
                sldVolume.disabled = false;
            })

        } else {            // En caso de error de carga
            alert('Por favor, ingresa un archivo válido');
        }
    }

    // Funciones para los botones de play, pausa y ajuste de volumen
    function playVideo() {
        videoPlayer.play();
    }
    function pauseVideo() {
        videoPlayer.pause();
    }
    function setVolume() {
        videoPlayer.volume = sldVolume.value;
    }


})