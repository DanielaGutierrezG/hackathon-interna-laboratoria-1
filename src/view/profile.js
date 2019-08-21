export default () => {
    const createChildNode = document.createElement('div')
    createChildNode.setAttribute('id', 'containerProfile' )
    const content = `
    <div class="stepper-img">
      <img class="stepper1-img" src="./assets/stepper3.jpeg"/>
    </div>
    <div class="welcome-container">
      <div class="col s12 m7">
        <h2 class="header" id="welcome-text"></h2>
        <p id="sub-welcome-text" class="sub-welcome-text"></p>
        <div class="card horizontal bg-card">
          <div class="card-image">
            <canvas id="canvasProfile" class="canvas-profile"></canvas>
          </div>
          <div class="card-stacked">
            <div class="card-content info-content">
              <p id="info" class="user-info"></p>
              <p id="company-info" class="company-info"></p>
              <p id="host-info" class="host-info"></p>
            </div>
          </div>
        </div>
      </div>
      </br>
      </br>
      </br>
      <div class="row">
      <div class="col s12">
        <div class="card-panel rules-card bg-card">
          <div class="card-content center-content">
            <span class="card-title cardtitle">Recordemos nuestras reglas:</span>
            <p class="number-rules">1. Mantener los ambientes limpios</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nulla id nam! Molestiae 
            iusto quisquam repellat, quae impedit explicabo officiis animi, aliquam sit eos veniam nulla 
            aperiam illo similique asperiores!</p>

            <p class="number-rules">2. Respetar a todas las personas</p>
          </div>
          <div class="card-action center-content">
          <button id='register' class="waves-effect waves-light btn profile-btn">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
    createChildNode.innerHTML=content;
    
    const objInf= JSON.parse(sessionStorage.getItem('objInf'));
    console.log(objInf.Nombre)

    const nombre = createChildNode.querySelector('#info')
    nombre.innerHTML =
    `${objInf.Nombre}`;

     const companyInfo = createChildNode.querySelector('#company-info');
     companyInfo.innerHTML = `${objInf.Company}`;

     const hostInfo = createChildNode.querySelector('#host-info');
     hostInfo.innerHTML = `${objInf.Host}`;

     const welcomeText = createChildNode.querySelector('#welcome-text');
     welcomeText.innerHTML = `¡Bienvenidx, ${objInf.Nombre}!`;

     const subWelcomeText = createChildNode.querySelector('#sub-welcome-text');
     subWelcomeText.innerHTML = `Le indicaremos a ${objInf.Host} que estás aquí.`
 

    return createChildNode;
}
