function ok() {

    let marca  = document.getElementById('marca').value;

    let modelo = document.getElementById('modelo').value;
    const carros = {
        marca: marca, 
        modelo: modelo
    }
    
    localStorage.setItem('carros', JSON.stringify(carros))
    console.log(carros)
    console.log('voce armazenou com sucesso')
    
  }