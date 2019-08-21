export default () => {
  const div = document.createElement('div');
  div.setAttribute('class', 'container-table')
  const tmp3 = `
  <div class='container-btn'>
  <button id='dia' class='btnFilterr btn btn-warning' type='button' value='todos'>Visitas<br>por días<br>5</button>
  <button id='mes' class='btnFilterr btn btn-warning' type='button' value='activos'>Visitas<br>por mes<br>5</button>
  <button id='año' class='btnFilterr btn btn-warning' type='button' value='inactivos'>Visitas<br>por año<br>5</button>
  </div>
  <div class='estadoRegistro'>
    <div class="btnsFilter">
      <button id='todos' class='btnfill btnFilter btn btn-warning' type='button' value=''>Todos</button>
      <button id='activos' class='btnfill btnFilter btn btn-warning' type='button' value='on'>Activos</button>
      <button id='inactivos' class='btnfill btnFilter btn btn-warning' type='button' value='of'>Inactivos</button>
    </div>
    <div id='containerRegister'></div>
  </div>
  `
  div.innerHTML = tmp3;
  return div;  
};