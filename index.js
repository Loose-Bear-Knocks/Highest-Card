// have i been pwned API Key : 806e863c28594ad88e5200fd9cfa4cf7
let emailSubmit = document.getElementById('email-submit')

const pwnRequest = async () => {
    emailSubmit.addEventListener('click', async (e) =>{
        e.preventDefault()
        // let formContent = emailSubmit.innerText
        let req = await fetch(`https://haveibeenpwned.com/api/v3/breachedaccount/${emailSubmit.value} hibp-api-key:56821cb5fcf64f1ba1978a81fb61f0c6`, {
            mode: 'no-cors'
        })
        let res = await req.json()
        console.log(res)
    })
}

pwnRequest()