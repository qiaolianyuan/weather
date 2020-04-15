document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 +'px'

window.onresize = function  () {
	document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 +'px' //ipnone6 上1rem=50px  设计图750px 就写7.5rem
}