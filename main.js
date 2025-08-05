let btnchange = document.querySelector('.change-btn')
btnchange.addEventListener('click', () => {
    let getuser = async function () {
        let users = await fetch('https://randomuser.me/api/')
        let pequ = await users.json()
        let arr = pequ.results
        let results = arr.map((e) => {
            let names = document.querySelector('.names')
            names.innerHTML = `${e.name.title}  ${e.name.first}  ${e.name.last}`
            let usersImg = document.querySelector('.profile-img')
            let bgImg = document.querySelector('.background-img')
            let email = document.querySelector('.email')
            let phone = document.querySelector('.phone')
            let manzil = document.querySelector('.manzil')
            let yosh = document.querySelector('.yosh')
            email.innerHTML = `<a href="mailto:${e.email}"> <strong>Email: </strong>${e.email}</a>`
            phone.innerHTML = `<strong>Phone: </strong>${e.phone}`
            manzil.innerHTML = `<strong>Manzil: </strong> ${e.location.city}`
            yosh.innerHTML = `<strong>Yosh: </strong>${e.dob.age}`
            bgImg.src = `${e.picture.large}`
            usersImg.src = ` ${e.picture.medium} `

        })


        console.log(pequ);


    }
    getuser()

})



