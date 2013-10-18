//Master View Component Constructor
function MasterView() {
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white'
	});
	var header = Ti.UI.createImageView({
		top:'0',
		image:'/Logo de la Aplicacion Movils.png',
		backgroundColor:'#272822',
		width:'100%',
		height:'15%'
	});
	
	var fondo = Ti.UI.createImageView({
		image:'/catedral.jpg',
		fullScreen:true,
		width:'100%',
		height:'100%'
	});
	//some dummy data for our table view
	var tableData = [
		{title:'Lugares', price:'Valle Del Mantaro', price:'Valle Del Mantaro', hasChild:true, color: '#000', leftImage:'/KS_nav_ui.png'},
		{title:'Eventos', price:'Selva Central', hasChild:true, color: '#000', leftImage:'/KS_nav_ui.png'},
		{title:'Rutas', price:'Alto Andino', hasChild:true, color: '#000', leftImage:'/KS_nav_ui.png'},
		{title:'Mas Información', price:'Inicio', hasChild:true, color: '#000', leftImage:'/KS_nav_ui.png'},
	];
	
	var table = Ti.UI.createTableView({
		data:tableData,
		top:'195'
	});
	
	self.add(fondo);
	self.add(header);
	self.add(table);
	
	
	//add behavior
	table.addEventListener('click', function(e) {
		self.fireEvent('itemSelected', {
			name:e.rowData.title,
			price:e.rowData.price
		});
	});
	
	return self;
};

module.exports = MasterView;