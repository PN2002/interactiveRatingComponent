var ratings = document.querySelectorAll('.circle');
var button = document.getElementById('button');
var giveaNote = document.getElementById('giveanote');
var thankyou = document.getElementById('thankyou');
var span = document.getElementById('myrating');

for(let i = 0; i < ratings.length; i++){
    ratings[i].addEventListener('click', () =>{
        let myrating = ratings[i].innerHTML;

        for(let i = 0; i < ratings.length; i++){
            ratings[i].classList.contains('selected');
            ratings[i].classList.remove('selected');
        }

        ratings[i].classList.add('selected');

        button.addEventListener('click', () =>{
            giveaNote.style.display = 'none';
            thankyou.style.display = 'block';
            span.innerHTML = myrating;
        })
    })
}