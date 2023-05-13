const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i=0; i<sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
        });
    }
    //Sections Active class
    allSections.addEventListener('click', (e)=>{
        let id = e.target.dataset.id;
        
        if(id){
            sections.forEach((ele)=>{
                ele.classList.remove('active');
            });

            let getSection = document.getElementById(id);
            getSection.classList.add('active');
        }
        
    });
    //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode');
    });

}

PageTransitions();