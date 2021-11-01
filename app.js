window.onload=function(){

    let getBtn = document.getElementById("btn");
    let input = document.getElementById("text");
    let write = document.getElementById("name");
    

    /*const getData = () => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost/info2180-lab4/superheroes.php');

        //xhr.responseType = 'json';

        xhr.onload = () =>{
            const data  = xhr.response;
            console.log(data);
            //alert(data);
        };

        xhr.send();
        }; 

    getBtn.addEventListener('click', getData);*/

    getBtn.addEventListener('click', showSuggestion);
    
    function showSuggestion(e){
            e.preventDefault();
            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function(){
                let z = this.status;
                let rs = this.readyState;
                if(z == 200 && rs ==4){
                    write.innerHTML = this.responseText;
                }
            }
            let value = input.value;
            xhr.open("GET","http://localhost/info2180-lab4/superheroes.php?q="+value)
            xhr.send();
        }
    





}