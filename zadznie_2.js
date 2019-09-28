/*Задания сделал так как понял материал и само задание если не верно,
	просьба выслать правильный вариант*/

function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}

jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

jQuery.prototype.text = function(){
	this.each(element => element.style.display = 'none')
  return this;
}

jQuery.prototype.class = function(name){
	this.each(element => element.className = name)
  return this;
}

const $ = (e) => new jQuery(e);

$('p').click(e => console.log(e)).class('name').text("Просто текст")