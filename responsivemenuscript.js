function activemenu(){
    const hamburguer = document.getElementById('menu_responsive');
    const mainMenu = document.getElementById('main_menu');
    
    hamburguer.addEventListener('click',() =>{
        if(mainMenu.classList.contains('menu-active'))
        {
            mainMenu.className = mainMenu.className.replace('menu-active','');
        }
        else
        {
            mainMenu.classList.add('menu-active');
        }
    });
};

let counter = 0;

function message() {
    const btncontact = document.getElementById('contactresponsive');

    btncontact.addEventListener('click',() => {
        switch(counter)
        {
            case 0: alert('Soy una Prueba no me Molestes.');
            counter = 1;break;
            case 1:alert('Basta de apretarme, no hago nada.');
            counter = 2; break;
            case 2: alert('No aprendes a las buenas.'); counter = 3; break;
            case 3: alert("Basta!, me largo."); btncontact.style.display = 'none'; break;
        }
    });
};

message();
activemenu();