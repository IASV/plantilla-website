const button_menu = document.getElementById('button_menu');
const button_account = document.getElementById('button_account');
const button_data = document.getElementById('button_data');
const button_list = document.getElementById('button_list');
const button_shopping = document.getElementById('button_shopping');
const button_settings = document.getElementById('button_settings');
const button_up = document.getElementById('button_up');
const button_light = document.getElementById('button_light');
const button_hide_title = document.getElementById('button_hide_title');
const button_input = document.getElementById('input_file');

let button_current = button_account;

const menu = document.getElementById('menu');

const head_menu = document.getElementById('head_menu');

const body_color = document.getElementById('body');

activitys = document.getElementsByClassName('activity');

activity_menu = document.getElementById('activity_menu');
activity_account = document.getElementById('activity_account');
activity_data = document.getElementById('activity_data');
activity_list = document.getElementById('activity_list');
activity_shopping = document.getElementById('activity_shopping');
activity_settings = document.getElementById('activity_settings');

let activity_current = activity_account;

let button_light_active = false;

button_menu.addEventListener('click', (e) => {
    active_menu = menu.classList.toggle('activate_menu');
    if(active_menu) activity_menu.classList.add('activity_close');
    else activity_menu.classList.remove('activity_close');
});

button_account.addEventListener('click', (e) => {
    this.disable_activitys();
    this.button_action(activity_account, button_account);
    size_activity();
});

button_data.addEventListener('click', (e) => {    
    this.disable_activitys();
    this.button_action(activity_data, button_data);
    size_activity();
});

button_list.addEventListener('click', (e) => {
    this.disable_activitys();
    this.button_action(activity_list, button_list);
    size_activity();
});

button_shopping.addEventListener('click', (e) => {
    this.disable_activitys();
    this.button_action(activity_shopping, button_shopping);
    size_activity();
});

button_settings.addEventListener('click',(e) => {
    this.disable_activitys();
    this.button_action(activity_settings, button_settings);
    this.size_activity();
});

button_up.addEventListener('click', (e) => {
    activity_current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
});

button_light.addEventListener('click',(e) => {
    head_menu.classList.toggle('light_style_header');
    menu.classList.toggle('light_style_menu');
    if(!button_light_active) {                
        button_current.classList.replace('active_button','active_button_light');  
        button_up.classList.replace('button_up', 'light_style_button_up');  
        body_color.classList.replace('body', 'light_style_body_color');     
        button_light_active = true;
    } else {
        button_current.classList.replace('active_button_light','active_button');
        button_up.classList.replace('light_style_button_up', 'button_up');
        body_color.classList.replace('light_style_body_color', 'body');
        button_light_active = false;
    }
});

button_hide_title.addEventListener('click',(e) => {
    body_color.classList.toggle('hide_title');
});

function previewFile() {
    let preview = document.querySelector('#img');
    let preview2 = document.querySelector('#img2');
    let file    = document.querySelector('#input_file').files[0];
    let reader  = new FileReader();

    reader.onloadend = function () {
      preview.src = reader.result;
      preview2.src = reader.result;
    }
  
    if (file) {
      reader.readAsDataURL(file);      
    } else {
      preview.src = "assets/img/userPhoto.png";
      preview2.src = "assets/img/userPhoto.png";
    }
  }

function disable_activitys () {
    for (let activity = 0; activity < activitys.length; activity++) {
        const element = activitys[activity];
        element.style.display = 'none';
    }
}

function size_activity () {
    activity_current.style.display = 'flex';
    activity_current.style.height = `${this.tamVentana()[1] - (this.tamVentana()[1]*0.1)}px`;    
}

function button_action (activity, button) {
    activity_current = activity;
   
    if(!button_light_active) 
        button_current.classList.remove('active_button');
    else 
        button_current.classList.remove('active_button_light');
    
    button_current = button;
    
    if(!button_light_active) 
        button_current.classList.add('active_button');
    else 
        button_current.classList.add('active_button_light');
    
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
    button_account.classList.add('active_button');
    activity_current.style.display = 'flex';;
    activity_current.style.height = `${this.tamVentana()[1] - (this.tamVentana()[1]*0.1)}px`;        
}

window.onresize = () => {
    activity_current.style.height = `${this.tamVentana()[1] - (this.tamVentana()[1]*0.1)}px`;
}