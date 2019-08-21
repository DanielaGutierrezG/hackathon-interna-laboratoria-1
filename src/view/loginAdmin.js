import { changeHash } from '../view-controller/route.js'
export default () => {
  const createChildNode = document.createElement('div');
  const content =
    `<div class="container-registerAdmin">
    <img class="logo-registerAdmin" src="./assets/Logo-Comunal.svg"/>
      
    <div class="row register-visitor">
      <form class="centrado col s12 register-visitor">
        <h1>Hola!</h1>
        <div class="input-field col s12">
          <div class="input-field col s8">
            <input id="emailAdmin" type="password" class="validate" autocomplete="off">
            <label for="emailAdmin" id="emailAdmin-label">Correo electrónic</label>
          </div>
        </div>
        <div class="input-field col s12">
          <div class="input-field col s8">
            <input id="password" type="password" class="validate" autocomplete="off">
            <label for="password" id="password-label">Contraseña</label>
          </div>
        </div>
      </form>
      <button id="logIn" class="waves-effect waves-light btn next-home-btn">Empecemos</button>
      <p>¿Olvidaste tu  contraseña?</p>
    </div>
    </div>
    `;
  createChildNode.innerHTML = content;

  const registerbtn = createChildNode.querySelector("#logIn");

  registerbtn.addEventListener('click', () => {
    changeHash('#/admin')
  })
  return createChildNode;
}