
export default () => {
    const createChildNode = document.createElement('div')
    createChildNode.setAttribute('id', 'containerPhoto' )
    const content = `
    <div class="stepper-img">
      <img class="stepper1-img" src="./assets/stepper2.jpeg"/>
    </div>
    <div class="photo-container">
        <video id="player" controls autoplay class="photo"></video>
        <button id="capture" class="waves-effect waves-light btn capture-btn">Tomar foto</button>
    </div>
    <div class="canvas-container">
        <canvas id="snapshot" class="photo-canvas"></canvas>
    </div>    
    `;
    createChildNode.innerHTML=content;
    return createChildNode;
}