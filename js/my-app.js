// Initialize your app
var app = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:true
	},
	cache:false,
	cacheDuration: 0,
	modalTitle: 'CoffeeApp',
	dialog: {
		title: 'CoffeeApp',
		buttonOk: 'Aceptar',
  	},
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/producto/',
    	url: 'producto.html',
    	name: 'producto',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		}
	]
});

// Export selectors engine
var $$ = Dom7;


$$('#btnComprar').on('click', function () {
  app.dialog.alert('¡ Tu compra fue realizada correctamente !');
});


$$('#btnConfirmar').on('click', function () {
  app.dialog.confirm('¿Seguro desea procesar su compra?', function () {
    app.dialog.alert('¡ Tu compra fue realizada correctamente !');
  });
});


$$('#btnLogin').on('click', function () {
	var Usuario = $$('#username').val();
	var Password = $$('#password').val();
	
  	if(Usuario == "jframos" && Password == "123"){
		app.dialog.alert('¡ Bienvenido a Coffee Shop !');
		app.loginScreen.close(".modal-login");
		
	}else{
		app.dialog.alert('Lo sentimos, sus datos son incorrectos');
	}
	
	
});