const emailList = document.getElementById("email-list");



const emailGeneration = () => {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(response => {
        console.log(response);
        console.log('Response data:', response.data); 
        const email = response.data.response;
        console.log('Email:', email); 
        const listItem = document.createElement('li');
        listItem.innerText = email;
        emailList.appendChild(listItem);
    })
};


for (let i = 0; i < 10; i++) {
    emailGeneration();
};