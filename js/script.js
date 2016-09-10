var body = document.querySelector('body');
var question = '. Вопрос №';
var answer = ['1', '2', '3'];
var form, caption;

var testPage = {

	tittle: function() {
		var h3 = document.createElement('h3');
		document.body.appendChild(h3);
		h3.innerHTML = "Тест по программированию";
	},

	form: function() {
		form = document.createElement('form');
		document.body.appendChild(form);
	},

	caption:  function(captionQuestion) {
		captionElement = document.createElement('h4');
		captionElement.innerHTML = captionQuestion;
		form.appendChild(captionElement);
	},
	
	button: function() {
		var submit = document.createElement('input');
		form.appendChild(submit);
		submit.setAttribute('type','submit');
		submit.setAttribute('value','Проверить мои результаты');
		submit.setAttribute('id','results');
	},

	label: function(element) {
		var label = document.createElement('label');
		label.innerHTML = "<input type = checkbox name=answer" + element+">" + "Вариант ответа №" + element;
		form.appendChild(label);
	}
}

testPage.tittle();
testPage.form();
testPage.button();


var ind = [];

for (var i = 1; i < 4; i++) {
	var captionQuestion =  i + question + i;
	testPage.caption(captionQuestion);
	testPage.label(answer[0]);
	testPage.label(answer[1]);
	testPage.label(answer[2]);
}