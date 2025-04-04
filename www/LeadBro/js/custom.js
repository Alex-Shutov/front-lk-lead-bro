$(document).ready(function($){
    const phoneInput = document.querySelector('#phone-input');
    const periodMobileBtn = document.querySelector('.shop__filter-mobile');
    const periodMobileMenu = document.querySelector('.period-dl');
    const closeMobilePeriodBtn = document.querySelector('.close-period-btn');
    const numberInputs = document.querySelectorAll('.numberInput');
    const checkboxSelects = document.querySelectorAll('.checkbox__select-header');
    const userCircles = document.querySelectorAll('.user-circle');
    const tasksCards = document.querySelectorAll('.tasks__card');
    const taskModal = document.querySelector('.tasks-modal');
    const howtoBtns = document.querySelectorAll('.how-top-positions')
    const howtoModal = document.querySelector('.howto-modal');
    const accTitles = document.querySelectorAll('.acc-title')
    const infoModalBtns = document.querySelectorAll('.info-modal-btn');
    const closeInfoModalIcon = document.querySelectorAll('.closeModalInfoBtn');
    const headerNotif = document.querySelector('.icon-notification');

    if(headerNotif){
        console.log(headerNotif)
        headerNotif.addEventListener('click', e => {
            headerNotif.closest('.header__head').classList.add('_read')
        })
    }

    if(infoModalBtns.length) {
        infoModalBtns.forEach(el => {
            el.addEventListener('click', e => {
                document.body.classList.add('_info-modal-locked');
                el.closest('.info-modal-wrap').querySelector('.info-modal-block').classList.add('_active');
                el.closest('.info-modal-wrap').classList.add('_active');
            })
        })

        if(closeInfoModalIcon) {
            closeInfoModalIcon.forEach(el => {
                el.addEventListener('click', e => {
                    document.body.classList.remove('_info-modal-locked');
                    el.closest('.info-modal-block').classList.remove('_active');
                    el.closest('.info-modal-wrap').classList.remove('_active');
                })
            })
        }

        window.addEventListener('click', e => {
            const target = e.target
            if (!target.closest('.info-modal') && !target.closest('.info-modal-block') && !target.closest('.info-modal-btn')) {
                infoModalBtns.forEach(el => {
                        document.body.classList.remove('_info-modal-locked');
                        el.closest('.info-modal-wrap').querySelector('.info-modal-block').classList.remove('_active');
                        el.closest('.info-modal-wrap').classList.remove('_active');
                })
            }
        })
    }

    if(howtoBtns.length) {
        howtoBtns.forEach(el => {
            el.addEventListener('click', e => {
                howtoModal.classList.add('_active');
                document.body.classList.add('_modal-locked');
            })
        })

        howtoModal.querySelector('.modal-cross').addEventListener('click', e => {
            howtoModal.classList.remove('_active');
            document.body.classList.remove('_modal-locked');
        })

        window.addEventListener('click', e => {
            const target = e.target
            if (!target.closest('.how-top-positions') && !target.closest('.howto-modal__wrapper')) {
                howtoModal.classList.remove('_active');
                document.body.classList.remove('_modal-locked');
            }
        })
    }

    if(accTitles.length) {
        // accTitles.forEach(el => {
        //     el.addEventListener('click', e => {
        //         el.closest('.acc-wrap').classList.toggle("active");
        //         let panel =  el.closest('.acc-wrap').querySelector('.acc-body');
        //         if (panel.style.maxHeight){
        //             panel.style.maxHeight = null;
        //         } else {
        //             panel.style.maxHeight = panel.scrollHeight + "px";
        //         }
        //     })
        // })
    }

    if(tasksCards.length) {
        tasksCards.forEach(el => {
            el.addEventListener('click', e => {
                taskModal.classList.add('_active');
                document.body.classList.add('_modal-locked');
            })
        })

        taskModal.querySelector('.modal-cross').addEventListener('click', e => {
            taskModal.classList.remove('_active');
            document.body.classList.remove('_modal-locked');
        })

        window.addEventListener('click', e => {
            const target = e.target
            if (!target.closest('.tasks__card') && !target.closest('.tasks-modal__wrapper')) {
                taskModal.classList.remove('_active');
                document.body.classList.remove('_modal-locked');
            }
        })
    }

    if(userCircles.length) {
        userCircles.forEach(el => {
            el.style.left = `-${el.dataset.num * 10}px`;
            el.closest('.user-wrap').style.right = `-${el.dataset.num * 10}px`;
        })
    }

    if(checkboxSelects.length) {
        checkboxSelects.forEach(el => {
            el.addEventListener('click', e => {
                el.closest('.checkbox__select').classList.toggle('_active');
            })
        })
    }

    if(phoneInput) {
        phoneInput.addEventListener('keyup', e => {
            let _this = e;
            if(_this.target.value[_this.target.value.length - 1] == '_') _this.target.closest('.signin__content-form').querySelector('button').classList.remove('_active')
        })

        $(phoneInput).mask("+7 999-999-99-99",{
            completed:function(){
                $(this.closest('.signin__content-form')).find('button').addClass('_active');
            }
        });
    }

    if(numberInputs.length) {
        let numbers = /^[0-9]+$/;

        numberInputs.forEach(el => {
            el.addEventListener('input', e => {
                if(e.target.value === "" && el.previousElementSibling){
                    el.previousElementSibling.focus();
                    el.closest('.signin__content-form').querySelector('button').classList.remove('_active');
                }

                if(!e.target.value.match(numbers)) {
                    e.target.value = "";
                    return;
                }

                if(!el.nextElementSibling) {
                    el.closest('.signin__content-form').querySelector('button').classList.add('_active');
                    return;
                }

                el.nextElementSibling.focus();

            })
        })
    }

    if(periodMobileBtn) {
        periodMobileBtn.addEventListener('click', e => {
            periodMobileMenu.style.display = 'block';
        })

        closeMobilePeriodBtn.addEventListener('click', e=> {
            periodMobileMenu.style.display = 'none';
            // document.body.classList.remove('');
        })
    }

    let acc = document.querySelectorAll(".acc-title");
    for (let i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            const faqItems = document.querySelectorAll('.faq__question');
            if(faqItems) {
                for (let j = 0; j < faqItems.length; j++) {
                    faqItems[j].style.maxHeight = null;
                }
            }
            this.classList.toggle("active");
            this.closest('.acc-wrap').classList.toggle("active");
            var panel = this.closest('.acc-wrap').querySelector('.acc-body');
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});

