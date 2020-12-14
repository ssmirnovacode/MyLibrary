import $ from '../core';

$.prototype.modal = function(created) { // 'created' pàrameter checks if modal was created dynamically
    for (let i=0; i < this.length; i++) {
        const target = this[i].getAttribute('data-target');
        $(this[i]).click( (e) => {
            e.preventDefault();
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden';
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`); // now we check only the btns inside our i-element
        closeElements.forEach(elem => {
            $(elem).click( () => {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove(); // avoiding dynamic modals to mount up (making the background darker and darker)
                }
            });       
        });

        $(target). click( e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500);
                document.body.style.overflow = '';
                if (created) {
                    document.querySelector(target).remove(); 
                }
            }
        });
    }

    
};

$('[data-toggle="modal"]').modal(); // initializing it on all the modal triggers

$.prototype.createModal = function({text, btns} = {}) {
    for (let i=0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1)); //we slice the # out of the attr

        //btns = {count: num, settings: [[text, classNames=[], close, callback]]}
        const buttons = [];
        for (let j=0; j < btns.count; j++) {
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btns.settings[j][1]); //btns.settings[j][1] - classNames
            btn.textContent = btns.settings[j][0]; // btns.settings[j][0] - text
            if (btns.settings[j][2]) { //btns.settings[j][2] - close true/false
                btn.setAttribute('data-close', true);
            } 
            if (btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function')  { //btns.settings[j][3] - callback
                btn.addEventListener('click', btns.settings[j][3]);
            }

            buttons.push(btn);
        }

        modal.innerHTML = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <button class="close" data-close>
                        <span>&times;</span>
                    </button>
                    <div class="modal-header">
                        <div class="modal-title">${text.title}</div>
                    </div>
                    <div class="modal-body">${text.body}</div>
                    <div class="modal-footer">
                           
                    </div>
                </div>
            </div>
        `;

        modal.querySelector('.modal-footer').append(...buttons); // spead operator will unwrap and add all btns
        document.body.appendChild(modal);
        $(this[i]).modal(true); // binds modal() method to the dynamically created modal
        $(this[i].getAttribute('data-target')).fadeIn(500); // calling the modal
    }
};