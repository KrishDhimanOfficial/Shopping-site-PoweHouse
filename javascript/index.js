const product_action_btn = document.querySelectorAll('.action-btn button i');

product_action_btn.forEach(btn =>{
    btn.addEventListener('mouseover', ()=>{
        btn.classList.add('fa-beat');
    });
    btn.addEventListener('mouseout', ()=>{
        btn.classList.remove('fa-beat');
    });
});
