const logIn = document.querySelector('#login');
const inputs = document.querySelectorAll('input');
const card = document.querySelector('.login-card');
const loader = document.querySelector('.loader');


class validate {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}

class UI {
    static clearInputs(input) {
        Object.entries(inputs).map((inputs) => {
            inputs[1].value = '';
        })
    }

    static showError(error, message) {
        const errorMessage = document.createElement('div');
        const container = document.querySelector('.container');
        errorMessage.appendChild(document.createTextNode(message));
        errorMessage.className = 'alert alert-danger col-12 col-md-4 mx-auto text-center text-light font-weight-bold mt-3';
        container.insertBefore(errorMessage, loader);
        error.style.border = '1px dashed red';
        setTimeout(removeError, 3000);

        function removeError() {
            error.style.border = '';
            errorMessage.remove();
        }
    }
}

class store {
    static addToLs(users) {
        let LIST = store.getList();
        LIST.push(users);
        localStorage.setItem('list', JSON.stringify(LIST));

    }

    static getList() {
        let LIST;
        if (localStorage.getItem('list') === null) {
            LIST = [];
        } else {
            LIST = JSON.parse(localStorage.getItem('list'));
        }
        return LIST;
    }


}

class checkLs {
    static compare(login_data) {
        let LIST = store.getList();
        let index = LIST.findIndex(user => {
            if (user.userEmail === login_data.email && user.userPassword === login_data.password) {
                alert('User Found');
                if (true) {
                    window.open('profile.html');
                }

            } else {
                return false;

            }
        })
        //    return index > -1 ? LIST[index] : null;
    }


}


logIn.addEventListener('click', (e) => {
    loader.style.display = 'block';
    setTimeout(validation, 3000);
    e.preventDefault();


    function validation() {
        const email = document.getElementById('email').value.toLowerCase();
        const password = document.getElementById('password').value.toLowerCase();

        loader.style.display = 'none';
        let validData = new validate(email, password);
        if (email && password) {
            checkLs.compare(validData);
            UI.clearInputs(inputs);
        }
        else {
            UI.showError(card, 'check input fields');
        }

    }
})
