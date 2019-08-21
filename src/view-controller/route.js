import { components } from "../view-controller/index.js";
import { capturePhoto } from "../view-controller/controllerPhoto.js";
import { getsessionStorage, submitFirebase } from "../view-controller/controlerProfile.js"
import { readData } from "../firestore.js"
import { readRegister, filterValueBtn } from "../view-controller/controlerAdmi.js"

export const changeHash = (hash) => {
  window.location.hash = hash;
}

export const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return changeView('#/home');
  } else if (hash === '#/home' || hash === '#/register') {
    return changeView(hash);
  }
  else if (hash === '#/photo') {
    return changeView(hash);
  }
  else if (hash === '#/profile') {
    return changeView(hash);
  }
  else if (hash === '#/loginAdmin') {
    return changeView(hash);
  }
  else if (hash === '#/admin') {
    
    return changeView(hash);
  }
  else {
    return changeView('#/home');
  }
}

export const changeView = (route) => {
  const main = document.getElementById("main");
  main.innerHTML = '';
  switch (route) {
    case '#/home': main.appendChild(components.home())
      break;
    case '#/register': {
      main.appendChild(components.register());
      const autocompleteHost = () => {
        const options = {
          data: {
            'Gonzalo Parra': null,
            'Alejandra Rodriguez': null,
            'Rocio Chamorro': null
          },
          minLength: 4
        }
        const elems = document.querySelectorAll('.autocomplete');
        const instances = M.Autocomplete.init(elems, options);
      };

      // const dataVisitors = {
      //   Nombre : 'Franciree Arellan',
      //   Email : 'arellan@gmail.com',
      //   TipoDocumento: 'ptp',
      //   Documento: '123'
      // }
      // const name = document.getElementById('name')
      // const email = document.getElementById('email')
      // const identification = document.getElementById('identification')
      // const identityNumber = document.getElementById('identity')

      // const changeValueDocument = document.querySelector('#identity');
      // changeValueDocument.addEventListener('change', (event) => {
      //   event.preventDefault()
      //   if(dataVisitors.Documento === changeValueDocument.value) {
      //     name.innerHTML = dataVisitors.Nombre;
      //     email.innerHTML = dataVisitors.Email;
      //     // identification.innerHTML = dataVisitors.TipoDocumento;
      //     identityNumber.innerHTML = dataVisitors.Documento;
      //   }
      //   console.log(changeValueDocument.value)
      //   console.log('database', dataVisitors.Documento)
      // })

      autocompleteHost();
      
      break;
    }
    case '#/photo': {
      main.appendChild(components.photo());
      capturePhoto();

      break;
    }
    case '#/profile': {
      main.appendChild(components.profile());
      getsessionStorage();
      submitFirebase();
      break;
    }
    case '#/loginAdmin': {
      main.appendChild(components.loginAdmin());

      break;
    }
    case '#/admin': {
      main.appendChild(components.admin());
      readData('users', 'CreatedAt', (query) => {
        readRegister(query);
      })
      filterValueBtn()

      break;
    }
    //  case '#/perfil':
    //   const callback = (data) => {
    //     main.innerHTML = '';
    //     main.appendChild(components.header(data))
    //     main.appendChild(components.body(data))
    //   }
    //   getPost(callback)
    //  break;
    default:
      break;
  }
}

export const init = () => {
  window.addEventListener('load', changeTmp(window.location.hash))
  if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
}