<<<<<<< HEAD
// Lite Modal https://github.com/DarylPinto/lite-modal
// -----------
// The light-weight vanilla JS modal script
// @author Daryl Pinto https://github.com/DarylPinto

(function(g){

// Decrease character count with some handy aliases
var d = document;
var wait = g.setTimeout;
var qs = d.querySelector.bind(d);

// Run callback on every element matched by selector
function qsaEach(selector, callback) {
	[].slice.call(d.querySelectorAll(selector)).forEach(callback);
}

// Add/Remove Class function since el.classList is not supported in IE9
function addClass(el, target_class){
	if(el.className.indexOf(target_class) == -1) el.className += ' '+target_class;
}
function removeClass(el, target_class){
	el.className = el.className.replace(new RegExp(target_class, 'g'), '').trim();
}

// Add CSS
var style = d.createElement('style');

var css = '' +
	'#modal-bg{' +
		'background-color:rgba(0,0,0,.5);' +
		'position:fixed;' +
		'top:0;' +
		'left:0;' +
		'transition:.3s opacity;' +
		'height:100vh;' +
		'width:100vw;' +
		'z-index:100;' +
		'display:none' +
	'}' +

	'#modal-bg.bg-fade{' +
		'opacity:0' +
	'}' +

	'#modal-header{' +
		'height: 5vh;'+
		'background-color: #ddd;'+
		'padding:10px 20px 10px 20px;'+
	'}' +

	'#modal-content{' +
		'overflow-y: auto;' +
		'max-height:40vh;' +
	'}' +

	'#modal-footer{' +
		'position:fixed;' +
		'height:5vh;' +
		'bottom:0px;' +
		'width:100%;' +
		'padding-bottom: 5px;'+
		'padding-top: 5px;'+
		'background-color: #ddd;' +
	'}' +

	'.lite-modal{' +
		'position:absolute;' +
		'top:100px;' +
		'left:50%;' +
		'height:50vh;' +
		'width:60%;' +
		'transform:translate(-50%,0%);' +
		'display:none;' +
		'background-color: white;' +
		'box-shadow: 0 0 10px rgba(0,0,0,0.2);' +
	'}' +

	'#modal-bg.modal-on,.lite-modal.modal-on{' +
		'display:block' +
	'}';

style.textContent = css;
d.head.appendChild(style);

// On content load
d.addEventListener('DOMContentLoaded', function(){

	// Create modal background
	var bg = d.createElement('div');
	bg.id = 'modal-bg';
	bg.className = 'bg-fade';
	d.body.appendChild(bg);

	// Move modals into modal background
	qsaEach('.lite-modal', function(el){
		bg.appendChild(el);
	});

	// Clicking modal background closes modal
	bg.addEventListener('click', function(){
		liteModal.close();
	});

	// Escape key closes modal
	d.addEventListener('keydown', function(e) {
		if(e.keyCode == 27) liteModal.close();
	});

	// Prevent event bubbling (clicking within modal shouldn't close it)
	qsaEach('.lite-modal', function(el){
		el.addEventListener('click', function(event){
			event.stopPropagation();
		});
	});

});

// Modal open/close functions
g.liteModal = {
	open: function(selector){
		qsaEach('#modal-bg,#modal-bg '+selector, function(el){
			addClass(el, 'modal-on');
		});
		wait(function(){
			removeClass(qs('#modal-bg'), 'bg-fade');
		}, 20);
	},

	close: function(){
		addClass(qs('#modal-bg'), 'bg-fade');
		wait(function(){
			qsaEach('#modal-bg,.lite-modal', function(el){
				removeClass(el, 'modal-on');
			});
			// Pause any modal media elements
			qsaEach('#modal-bg *', function(el){
				if(typeof el.pause == 'function') el.pause();
			});
		}, 310);
	}

}

})(window);
=======
// Lite Modal https://github.com/DarylPinto/lite-modal
// -----------
// The light-weight vanilla JS modal script
// @author Daryl Pinto https://github.com/DarylPinto

(function(g){

// Decrease character count with some handy aliases
var d = document;
var wait = g.setTimeout;
var qs = d.querySelector.bind(d);

// Run callback on every element matched by selector
function qsaEach(selector, callback) {
	[].slice.call(d.querySelectorAll(selector)).forEach(callback);
}

// Add/Remove Class function since el.classList is not supported in IE9
function addClass(el, target_class){
	if(el.className.indexOf(target_class) == -1) el.className += ' '+target_class;
}
function removeClass(el, target_class){
	el.className = el.className.replace(new RegExp(target_class, 'g'), '').trim();
}

// Add CSS
var style = d.createElement('style');

var css = '' +
	'#modal-bg{' +
		'background-color:rgba(0,0,0,.5);' +
		'position:fixed;' +
		'top:0;' +
		'left:0;' +
		'transition:.3s opacity;' +
		'height:100vh;' +
		'width:100vw;' +
		'z-index:100;' +
		'display:none' +
	'}' +

	'#modal-bg.bg-fade{' +
		'opacity:0' +
	'}' +

	'#modal-header{' +
		'height: 5vh;'+
		'background-color: #ddd;'+
		'padding:10px 20px 10px 20px;'+
	'}' +

	'#modal-content{' +
		'overflow-y: auto;' +
		'max-height:40vh;' +
	'}' +

	'#modal-footer{' +
		'position:fixed;' +
		'height:5vh;' +
		'bottom:0px;' +
		'width:100%;' +
		'padding-bottom: 5px;'+
		'padding-top: 5px;'+
		'background-color: #ddd;' +
	'}' +

	'.lite-modal{' +
		'position:absolute;' +
		'top:100px;' +
		'left:50%;' +
		'height:50vh;' +
		'width:60%;' +
		'transform:translate(-50%,0%);' +
		'display:none;' +
		'background-color: white;' +
		'box-shadow: 0 0 10px rgba(0,0,0,0.2);' +
	'}' +

	'#modal-bg.modal-on,.lite-modal.modal-on{' +
		'display:block' +
	'}';

style.textContent = css;
d.head.appendChild(style);

// On content load
d.addEventListener('DOMContentLoaded', function(){

	// Create modal background
	var bg = d.createElement('div');
	bg.id = 'modal-bg';
	bg.className = 'bg-fade';
	d.body.appendChild(bg);

	// Move modals into modal background
	qsaEach('.lite-modal', function(el){
		bg.appendChild(el);
	});

	// Clicking modal background closes modal
	bg.addEventListener('click', function(){
		liteModal.close();
	});

	// Escape key closes modal
	d.addEventListener('keydown', function(e) {
		if(e.keyCode == 27) liteModal.close();
	});

	// Prevent event bubbling (clicking within modal shouldn't close it)
	qsaEach('.lite-modal', function(el){
		el.addEventListener('click', function(event){
			event.stopPropagation();
		});
	});

});

// Modal open/close functions
g.liteModal = {
	open: function(selector){
		qsaEach('#modal-bg,#modal-bg '+selector, function(el){
			addClass(el, 'modal-on');
		});
		wait(function(){
			removeClass(qs('#modal-bg'), 'bg-fade');
		}, 20);
	},

	close: function(){
		addClass(qs('#modal-bg'), 'bg-fade');
		wait(function(){
			qsaEach('#modal-bg,.lite-modal', function(el){
				removeClass(el, 'modal-on');
			});
			// Pause any modal media elements
			qsaEach('#modal-bg *', function(el){
				if(typeof el.pause == 'function') el.pause();
			});
		}, 310);
	}

}

})(window);
>>>>>>> 056b6ff91a612d664487faaced7f580809852a02
