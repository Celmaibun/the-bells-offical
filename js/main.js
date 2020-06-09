//music on website

const navbar = document.querySelector('.nav')



document.addEventListener('scroll', function(e){
    if(scrollY > 100){
        navbar.classList.add('navbar-active')
    }
    else if(scrollY <= 100){
        navbar.classList.remove('navbar-active')
    }
})




//pop-up window
document.querySelector('#pop-up').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'flex';
})
document.querySelector('.close').addEventListener('click', function(){
    document.querySelector('.bg-modal').style.display = 'none';
})

document.querySelector('.menu-hamburger').addEventListener('click', function(e){
    e.preventDefault()
    document.querySelector('.nav-mobile').classList.toggle('nav-mobile-active')
})

document.querySelectorAll('.menu-mobile__item-link').forEach(item =>{
    item.addEventListener('click', function(){
        document.querySelector('.nav-mobile').classList.add('nav-mobile-active');
    })
})

