let url = 'https://api.adviceslip.com/advice';

const getAdvise = ()=>{
    fetch(url)
.then(res => res.json())
.then(data => {
    document.querySelector("#id").innerText ="ADVICE # " + data.slip.id;
    document.querySelector("#text").innerText = data.slip.advice;
 } )
.catch(err => { throw err });
}
document.querySelector(".btn").addEventListener("click", getAdvise);