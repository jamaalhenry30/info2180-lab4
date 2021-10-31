window.onload=function(){

    let getBtn = document.getElementById('btn');

    const getData = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost/info2180-lab4/superheroes.php');

        //xhr.responseType = 'json';

        xhr.onload = () =>{
            const data  = xhr.response;
            //console.log(data);
            alert(data);
        };

        xhr.send();
        }; 

    getBtn.addEventListener('click', getData);

}