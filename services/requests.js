export const login = (user, password)=> {
    fetch('https://53.37.88.112/api/jsonrpc',{
        method: 'POST',
        headers: {
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body: JSON.stringify([{
            "jsonrpc":"2.0",
            "method":"Api.Login",
            "params":{
                "user":user,
                "password":password
            },
            "id":999
        }])
    }).then((res) => res.json())
        .then((data)=> console.log(data[0].result))
        .catch((err)=>{
            console.log(err);
        })
}