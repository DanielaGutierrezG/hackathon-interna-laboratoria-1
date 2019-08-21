export const readRegister = (query) => {
    const containerRegister = document.querySelector('#containerRegister');
    if (containerRegister) {
        containerRegister.innerHTML = '';
        query.forEach((doc) => {
            containerRegister.innerHTML +=
                `<table class='table tableWidth'>
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Foto</th>
                        <th scope="col">Nombre</th>
                        >
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row"><img ${doc.data().photo}></th>
                        <td id='order-${doc.id}'>${doc.data().Nombre}</td>

                        
                    </tr>
                </tbody>
            </table>`
           
        })
    }
}

