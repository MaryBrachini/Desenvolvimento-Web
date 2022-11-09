var vermelho = document.getElementById('red');
    var azul = document.getElementById('blue');
    var verde = document.getElementById('green');
    var anda = 15;
    
    document.querySelector('#red').onclick = () =>{
            vermelho.classList.toggle('selecionado')
            vermelho.style.left = 0
            vermelho.style.top = 0
            andaVermelho()   
            document.querySelector('#blue').classList.toggle('bloqueia')
            document.querySelector('#green').classList.toggle('bloqueia')
    }

    document.querySelector('#blue').onclick = () =>{
            azul.classList.toggle('selecionado')
            azul.style.left = 0
            azul.style.top = 0
            andaAzul()
            document.querySelector('#red').classList.toggle('bloqueia')
            document.querySelector('#green').classList.toggle('bloqueia')
    }
    
    document.querySelector('#green').onclick = () =>{
            verde.classList.toggle('selecionado')
            verde.style.left = 0
            verde.style.top = 0
            andaVerde()
            document.querySelector('#blue').classList.toggle('bloqueia')
            document.querySelector('#red').classList.toggle('bloqueia')
    }

    function andaVermelho(){
        window.addEventListener('keydown', (k) =>{
            switch (k.key){
                case 'ArrowLeft':
                    vermelho.style.left = parseInt(vermelho.style.left) - anda + 'px';
                break;
                case 'ArrowRight':
                    vermelho.style.left = parseInt(vermelho.style.left) + anda + 'px';
                break;
                case 'ArrowUp':
                    vermelho.style.top = parseInt(vermelho.style.top) - anda + 'px';
                break;
                case 'ArrowDown':
                    vermelho.style.top = parseInt(vermelho.style.top) + anda + 'px';
                break;
            }
        })
    }

    function andaAzul(){
        window.addEventListener('keydown', (k) =>{
            switch (k.key){
                case 'ArrowLeft':
                    azul.style.left = parseInt(azul.style.left) - anda + 'px';
                break;
                case 'ArrowRight':
                    azul.style.left = parseInt(azul.style.left) + anda + 'px';
                break;
                case 'ArrowUp':
                    azul.style.top = parseInt(azul.style.top) - anda + 'px';
                break;
                case 'ArrowDown':
                    azul.style.top = parseInt(azul.style.top) + anda + 'px';
                break;
            }
        })
    }

    function andaVerde(){
        window.addEventListener('keydown', (k) =>{
            switch (k.key){
                case 'ArrowLeft':
                    verde.style.left = parseInt(verde.style.left) - anda + 'px';
                break;
                case 'ArrowRight':
                    verde.style.left = parseInt(verde.style.left) + anda + 'px';
                break;
                case 'ArrowUp':
                    verde.style.top = parseInt(verde.style.top) - anda + 'px';
                break;
                case 'ArrowDown':
                    verde.style.top = parseInt(verde.style.top) + anda + 'px';
                break;
            }
        })
    }