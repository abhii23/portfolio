/*========MixItUp filters======*/
let mixerProjects = mixitup('.projects__container', {
    selectors: {
        target: '.project__item'
    },
    animation: {
        duration: 300
    }
});
/* Active Work*/
const linkWork= document.querySelectorAll('.category__btn');

function activeWork(){
    linkWork.forEach((a)=>a.classList.remove('active-work'));
    this.classList.add('active-work');
}

linkWork.forEach((a)=>a.addEventListener('click',activeWork));

/*========Testimonials Swiper======*/
var testiswiper = new Swiper('.testimonial__container', {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });

  /*========email======*/
  const contactForm=document.getElementById('contact-form'),
  contactName=document.getElementById('contact-name'),
  contactEmail=document.getElementById('contact-email'),
  Message= document.getElementById('message'),
  contactMessage= document.getElementById('contact-message');

  const sendEmail=(e)=>{
    e.preventDefault();

    if(contactName.value ===''|| contactEmail.value ===''|| Message.value ===''){
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        contactMessage.textContent='write all the input fields';
    } else{
        emailjs.sendForm('service_xh0u2tq','template_ioil6l3',
        '#contact-form','0tBxZnWi1BI7B9rRR')
        .then(()=>{
            contactMessage.classList.add('color-light');
            contactMessage.textContent='Message sent ✔️';

            setTimeout(()=>{
                contactMessage.textContent=' ';
            },5000);
        });
    }  
  };
  contactForm.addEventListener('submit', sendEmail);