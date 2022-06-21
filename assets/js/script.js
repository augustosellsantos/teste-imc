function escopo () {
    const calculo = document.querySelector('.calculo');
    const pessoaImc = [];

    function eventoImc (event) {
        event.preventDefault();
        const inputPeso = calculo.querySelector('#peso');
        const inputAltura = calculo.querySelector('#altura');
        const peso = Number(inputPeso.value);
        const altura = Number(inputAltura.value);
        
        const imc = funImc(peso, altura);
        const nivelImc = funNivelImc(imc);
        const resposta = `Seu IMC é ${imc} (${nivelImc})`;
        resultado(resposta, true);

        if (!peso) {
            resultado(`Peso inválido`, false);
            return;
        }
        if (!altura) {
            resultado(`Altura inválida`, false);
            return;
        }
    }
    calculo.addEventListener('submit', eventoImc);
    function funNivelImc (imc) {
        const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obsidade grau 1', 'Obsidade grau 2', 'Obsidade grau 3'];
        if (imc < 18.5) {
            return nivel[0];
        }
        if (imc >= 18.5 && imc <= 24.9) {
            return nivel[1];
        }
        if (imc >= 25 && imc <= 29.9) {
            return nivel[2] ;
        }
        if (imc >= 30 && imc <= 34.9) {
            return nivel[3];
        }
        if (imc >= 35 && imc <= 39.9) {
            return nivel[4];
        }
        if (imc >= 40) {
            return nivel[5];
        }
    }
    function funImc (peso, altura) {
        const imc = peso / (altura * altura);
        return imc.toFixed(2);
    }
    function criaP () {
        const p = document.createElement('p');
        return p;
    }
    function resultado (resposta, valido) {
        const resultado = document.querySelector('#resultado');
        resultado.innerHTML = ``;
        const p = criaP();
        if (valido) {
            p.classList.add('paragrafo-resposta');
        } else {
            p.classList.add('invalido');
        }
        p.innerHTML = resposta;
        resultado.appendChild(p);
    }
}
escopo();