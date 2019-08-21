import { changeHash } from './route.js'
export const capturePhoto = () => {
    const containerPhoto = document.getElementById('containerPhoto');

    var player = document.getElementById('player');
    var snapshotCanvas = document.getElementById('snapshot');
    var captureButton = document.getElementById('capture');
    var videoTracks;

    var handleSuccess = function (stream) {
        // Attach the video stream to the video element and autoplay.
        player.srcObject = stream;
        videoTracks = stream.getVideoTracks();
    };

    captureButton.addEventListener('click', function () {

        var context = snapshot.getContext('2d');
        // Draw the video frame to the canvas.
        context.drawImage(player, 0, 0, snapshotCanvas.width,
            snapshotCanvas.height);

        // Stop all video streams.
        videoTracks.forEach(function (track) { track.stop() });
        /*   */
        var url = snapshotCanvas.toDataURL("image/jpeg");
        sessionStorage.setItem('url', url);
        const btn = document.createElement('button')
        btn.setAttribute('id', 'nextbtn')
        btn.setAttribute('class', 'waves-effect waves-light next-btn-photo')
        btn.type = 'button';
        btn.textContent = 'Siguiente'
        containerPhoto.appendChild(btn);
        player.style.display = "none";
        captureButton.style.display = "none";
        document.getElementById('nextbtn').addEventListener('click', () => {
            changeHash("#/profile")
        })
    });

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(handleSuccess);
}

