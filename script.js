
function validateEmail(email) 
{
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.querySelector('.button_real').addEventListener('click', event => {
    if (validateEmail(document.querySelector('#input-email').value)){
        document.querySelector('.confirmation').classList = 'confirmation visible valid';
        document.querySelector('.confirmation').textContent = 'Email sent';

    }
    else{
        document.querySelector('.confirmation').classList = 'confirmation visible invalid';
        document.querySelector('.confirmation').textContent = 'Oops! Please check your email';
    }

})
document.querySelector('#input-email').addEventListener('change', function(){
    if (validateEmail(document.querySelector('#input-email').value)){
        document.querySelector('.confirmation').classList = 'confirmation visible valid';
        document.querySelector('.confirmation').textContent = 'Email sent';

    }
    else{
        document.querySelector('.confirmation').classList = 'confirmation visible invalid';
        document.querySelector('.confirmation').textContent = 'Oops! Please check your email';
    }
})


