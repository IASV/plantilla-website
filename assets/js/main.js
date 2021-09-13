button_menu = document.getElementById('button_menu');
button_account = document.getElementById('button_account');
button_data = document.getElementById('button_data');
button_list = document.getElementById('button_list');
button_shopping = document.getElementById('button_shopping');

menu = document.getElementById('menu');

activitys = document.getElementsByClassName('activity');

activity_menu = document.getElementById('activity_menu');
activity_account = document.getElementById('activity_account');
activity_data = document.getElementById('activity_data');
activity_list = document.getElementById('activity_list');
activity_shopping = document.getElementById('activity_shopping');

box_shopping = document.getElementById('box_shopping');

button_menu.addEventListener('click', (e) => {
    active_menu = menu.classList.toggle('activate_menu');
    if(active_menu) activity_menu.classList.add('activity_close');
    else activity_menu.classList.remove('activity_close');
});

button_account.addEventListener('click', (e) => {
    this.disable_activitys();
    activity_account.style.display = 'flex';
});

button_data.addEventListener('click', (e) => {    
    this.disable_activitys();
    activity_data.style.display = 'flex';
});

button_list.addEventListener('click', (e) => {
    this.disable_activitys();
    activity_list.style.display = 'flex';
});

button_shopping.addEventListener('click', (e) => {
    this.disable_activitys();
    activity_shopping.style.display = 'flex';
});

function disable_activitys () {
    for (let activity = 0; activity < activitys.length; activity++) {
        const element = activitys[activity];
        element.style.display = 'none';
    }
}

function tamVentana() {
    var tam = [0, 0];
    if (typeof window.innerWidth != 'undefined')
    {
      tam = [window.innerWidth,window.innerHeight];
    }
    else if (typeof document.documentElement != 'undefined'
        && typeof document.documentElement.clientWidth !=
        'undefined' && document.documentElement.clientWidth != 0)
    {
      tam = [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight
      ];
    }
    else   {
      tam = [
          document.getElementsByTagName('body')[0].clientWidth,
          document.getElementsByTagName('body')[0].clientHeight
      ];
    }
    return tam;
  }

window.onload = () => {
    this.disable_activitys();
    activity_account.style.display = 'flex';;
    box_shopping.style.height = `${this.tamVentana()[1] - (this.tamVentana()[1]*0.3)}px`;
}

window.onresize = () => {
    box_shopping.style.height = `${this.tamVentana()[1] - (this.tamVentana()[1]*0.3)}px`;
}