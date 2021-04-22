function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturaClique();
        this.capturaEnter();
        this.display.focus();
    }

    this.capturaClique = () => {
        document.addEventListener('click', e => {
            const el = e.target;

            if(el.classList.contains('btn-num')) this.addNum(el);
            if(el.classList.contains('btn-clear')) this.limpaInput();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizaConta();

        });
    }

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if(e.keyCode === 13) this.realizaConta();
        });
    }

    this.addNum = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }

    this.limpaInput = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);

    this.realizaConta = () => {
        try{
            const conta = eval(this.display.value);
            if(!conta) alert('Conta inválida');
            this.display.value = conta;           
        } catch(e) {
            alert('Conta inválida');
        }      
    }
}

const calc = new Calculadora();
calc.inicia();

