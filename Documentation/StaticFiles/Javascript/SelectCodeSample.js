var langgory;
var category;
var p;

function setLanguage(indexl) {
	langgory = indexl;
	$(".sigBlockJS").css("display", indexl == 0 ? "block" : "none");
	$(".sigBlockCS").css("display", indexl == 1 ? "block" : "none");
	$(".sigBlockBoo").css("display", indexl == 2 ? "block" : "none");
	
	$(".codeExampleJS").css("display", indexl == 0 ? "block" : "none");
	$(".codeExampleCS").css("display", indexl == 1 ? "block" : "none");
	$(".codeExampleBoo").css("display", indexl == 2 ? "block" : "none");
}

function setCategory(indexc) {
	category = indexc;
    $(".classRuntime").css("display", indexc == 0 ? "block" : "none");
    $(".enumRuntime").css("display", indexc == 1 ? "block" : "none");
    $(".attrRuntime").css("display", indexc == 2 ? "block" : "none");
    $(".classEditor").css("display", indexc == 3 ? "block" : "none");
    $(".enumEditor").css("display", indexc == 4 ? "block" : "none");
    $(".attrEditor").css("display", indexc == 5 ? "block" : "none");
}