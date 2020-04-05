
const signUp = document.getElementById('signup');
const loader = document.querySelector('.loader');
const card = document.querySelector('.signup-card');
const inputs = document.querySelectorAll('input');
const redirectBtn = document.querySelector('.to-login');




class registeredUsers {
    constructor(userName, userEmail, userPassword) {
        this.userName = userName;
        this.userEmail = userEmail;
        this.userPassword = userPassword;


    }
}

class UI {
    showError(error, message) {
        const errorMessage = document.createElement('div');
        const container = document.querySelector('.container');
        errorMessage.appendChild(document.createTextNode(message));
        errorMessage.className = 'alert alert-danger col-4 mx-auto text-center mt-3';
        container.insertBefore(errorMessage, loader);
        error.style.border = '1px dashed red';
        setTimeout(removeError, 3000);

        function removeError() {
            error.style.border = '';
            errorMessage.remove();
        }
    }

    clearInputs(input) {
        Object.entries(inputs).map((inputs) => {
            inputs[1].value = '';
        })
    }
}


class store{
    static addToLs(users){
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



signUp.addEventListener('click', function (e) {
    loader.style.display = 'block';
    setTimeout(createUser, 2000);

    e.preventDefault();


    function createUser() {
        const userName = document.getElementById('name').value.toLowerCase();
        const userEmail = document.getElementById('email').value.toLowerCase();
        const userPassword = document.getElementById('password').value.toLowerCase();

        loader.style.display = 'none';

        const data = new registeredUsers(userName, userEmail, userPassword);
        console.log(data);
        ui = new UI();

        if (userName && userEmail && userPassword) {
            alert(` SUCCESSFUL`)
            redirectBtn.style.visibility = 'visible';
            ui.clearInputs(inputs);
           
            store.addToLs(data);
            
        } else {
            ui.showError(card, 'check input fields');
        }



    }
})


// =====================LOGIN PAGE===========================================
       
