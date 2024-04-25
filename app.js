const image = document.querySelector('img');

function toss(clickedBtn) {
    console.log('toss', clickedBtn);
    image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSafJz4RQlwvKh1m0fek6-rMdxTj1mnr0fYU_-6hxuSLA&s'
    
}



const h2 = document.querySelector('h2');

function toss(btn){
    // console.log('toss' , btn);
    const randomNumber = Math.ceil(Math.random()*2);
    // console.log(randomNumber);

    if(btn === 'masjid' && randomNumber === 1 || btn === 'chand' && randomNumber === 2){
        // console.log('toss jeet gaye ho!');
        h2.innerHTML = 'You won the Toss!'
    }else{
        // console.log('toss haar gaye ho!')
        h2.innerHTML = 'You Loss the Toss!'
    }

    if(randomNumber === 1){
        image.src = 'https://en.numista.com/catalogue/photos/pakistan/424-original.jpg'
    }else{
        image.src = 'https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg'
    }
}