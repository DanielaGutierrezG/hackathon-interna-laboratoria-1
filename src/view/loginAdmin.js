import { changeHash } from '../view-controller/route.js'
export default () => {
  const createChildNode = document.createElement('div');
  const content =
    `<div class="container-registerAdmin">
      <img class="logo-registerAdmin" src="./assets/Logo-Comunal.svg"/>
      <div class="container-admin">
        <div class="row register-visitor">
          <form class="centrado col s12 register-visitor admin-form">
            <h1>¡Hola!</h1>
            <div class="input-field col s12">
              <div class="input-field col s12">
                <input id="emailAdmin" type="password" class="validate" autocomplete="off">
                <label for="emailAdmin" id="emailAdmin-label">Correo electrónic</label>
              </div>
            </div>
            <div class="input-field col s12">
              <div class="input-field col s12">
                <input id="password" type="password" class="validate" autocomplete="off">
                <label for="password" id="password-label">Contraseña</label>
              </div>
            </div>
          </form>
          <button id="logIn" class="waves-effect waves-light btn admin-login-btn">Empecemos</button>
          <a class="a-pass">¿Olvidaste tu contraseña?</a>
        </div>
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