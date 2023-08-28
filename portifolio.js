function abrirMenu(){

	let menu = document.querySelector('.mobile-menu')

	if(menu.classList.contains('open')){

		menu.classList.remove('open')
		document.querySelector('.icon').classList.remove('fa-solid', 'fa-x', 'red')
		document.querySelector('.icon').classList.add('fa-solid', 'fa-bars')

	}else{

		menu.classList.add('open')
		document.querySelector('.icon').classList.remove('fa-solid', 'fa-bars')
		document.querySelector('.icon').classList.add('fa-solid', 'fa-x', 'red')

	}
}

function abrirGuia1(){
	window.location.href = "https://632df51cfbe18d3cab8fa59a--projetoseduardofleury.netlify.app/"
}

function abrirGuia2(){
	window.location.href = "https://edufleury.github.io/Cidade/" 
}

function abrirGuia3(){
	window.location.href = "https://edufleury.github.io/PagCaptura/"
}

function abrirGuia4(){
	window.location.href = "https://edufleury.github.io/App_clima/"
}

function abrirGuia5(){
	window.location.href = "https://edufleury.github.io/CatPage/"
}

function abrirGuia6(){
	window.location.href = "https://edufleury.github.io/App_Orcamento/"
}

function abrirGuia7(){
	window.location.href = "https://github.com/EduFleury/Api-GitHub"
}

function abrirGuia8(){
	window.location.href = "https://github.com/EduFleury/Organo-Edu"
}

function abrirGuia9(){
	window.location.href = "https://github.com/EduFleury/chess-system-Java"
}

function abrirGuia10(){
	window.location.href = "https://github.com/EduFleury/Buscador-de-Cep"
}

function ilustracao(){
	window.location.href = "https://storyset.com/technology"
}

function ilustracaodois(){
	window.location.href = "https://storyset.com/technology"
}