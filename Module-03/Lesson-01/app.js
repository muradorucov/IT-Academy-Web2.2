
surename = document.querySelector('.surename')
email = document.querySelector('.email')
age = document.querySelector('.age')
country = document.querySelector('.country')
img = document.querySelector('.img')
userName = document.querySelector('.name')

document.querySelector(".btn").addEventListener('click',() => {
    

    fetch('https://randomuser.me/api/')
        .then(response=> response.json())
        .then(data=>{
            console.log(data.results[0].email);
            console.log(data.results[0].name.first);
            console.log(data.results[0].name.last);
            console.log(data.results[0].dob.age);
            console.log(data.results[0].location.country);
            console.log(data.results[0].picture.large);

            console.log(email.textContent);
            email.innerHtml= data.results[0].email
            console.log(email.textContent);
            userName.innerHtml =  data.results[0].name.first
            age.innerHtml = data.results[0].dob.age
            img.src = data.results[0].picture.large

        })
})

console.log("${item}\"ejgef\" ")