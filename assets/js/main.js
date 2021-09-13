const button_menu = document.getElementById('button_menu');
const button_account = document.getElementById('button_account');
const button_data = document.getElementById('button_data');
const button_list = document.getElementById('button_list');
const button_shopping = document.getElementById('button_shopping');
const button_settings = document.getElementById('button_settings');

const menu = document.getElementById('menu');

activitys = document.getElementsByClassName('activity');

activity_menu = document.getElementById('activity_menu');
activity_account = document.getElementById('activity_account');
activity_data = document.getElementById('activity_data');
activity_list = document.getElementById('activity_list');
activity_shopping = document.getElementById('activity_shopping');
activity_settings = document.getElementById('activity_settings');

let box_shopping = document.getElementById('box_shopping');
let container_settings = document.getElementById('container_settings');

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

button_settings.addEventListener('click',(e) => {
    this.disable_activitys();
    activity_settings.style.display = 'flex';
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
    container_settings.style.height = `${this.tamVentana()[1] - (this.tamVentana()[1]*0.25)}px`
}

window.onresize = () => {
    box_shopping.style.height = `${this.tamVentana()[1] - (this.tamVentana()[1]*0.3)}px`;
    container_settings.style.height = `${this.tamVentana()[1] - (this.tamVentana()[1]*0.25)}px`
}