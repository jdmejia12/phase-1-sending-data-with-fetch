let bodyBox = document.querySelector('body')

function submitData(name, email){
    const user = {name : name, email: email}
    //console.log(JSON.stringify(user))
    return fetch(`http://localhost:3000/users`, {
        
        method:'POST',
        headers: {'Content-Type':'application/json', 
            Accept:'application/json'}, 
        body:JSON.stringify(user)
    })
    .then(re=>{return re.json()})
    .then(posted=>bodyBox.append(posted.id))
    .catch(error => bodyBox.append(error.message))
}
submitData()