const form = document.getElementById('form');

const success=(holder)=>{
    holder.classList.remove('error')
    holder.classList.add('success')
    holder.children[2].innerHTML = ''
}
const error =(holder,msg) => {
    holder.classList.remove('success')
        holder.classList.add('error')
        holder.children[2].innerHTML = msg
}

const isEmpty = (holder) => {
    const result = holder.children[0].value === '' ? true : false
    result ? error(holder,'*please fill out this field') : success(holder)
    return result
}
const lengthchecker = (holder, len) => {
    const result = holder.children[0].value.length >= len;
    !result ? error(holder,'*password should be atleast 8 characters') : success(holder)
    return result 
}
const passwordvalidation = (keyholder, confirmholder) => {
    const result=keyholder.children[0].value===confirmholder.children[0].value ? true : false
   !result ? error(confirmholder,'*password and confirm password should be same') : success(confirmholder)
   return result
}

const isEmailvalid = (holder) => {
    const value=holder.children[0].value;
    const regex= /^[a-zA-Z0-9]{3,}@[a-zA-Z]{3,}.[a-zA-Z]{2,}$/
    const result=regex.test(value)
    result ? success(holder) : error(holder,'*invalid email')
    return result
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    const cpassword = document.querySelector('#cpassword');
    const firstname=document.querySelector('#firstname');
    const lastname=document.querySelector('#lastname');
    const createEmail=document.querySelector('#createEmail');
    const createpassword=document.querySelector('#createpassword');
    let isValid = false;
    if (!isEmpty(username) && isEmailvalid(username) && !isEmpty(password) && lengthchecker(password, 8) && !isEmpty(cpassword) && lengthchecker(cpassword, 8) && passwordvalidation(password, cpassword)) {
        isValid = true;
    }
    
    else if(!isEmpty(firstname) && !isEmpty(lastname) && !isEmpty(createEmail) && isEmailvalid(createEmail) && !isEmpty(createpassword) && lengthchecker(createpassword,8)){
        isValid = true;
    }
    if (isValid) {
        console.log("Form is valid and will be submitted.");
        form.submit(); // Submit the form after validation passes
    } else {
        console.log("Form validation failed.");
    }


})

