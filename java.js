let texto=document.getElementByld("texto");
let posicion=0;
function MutationObserver(){
    posicion+=10;
    texto.style.marginleft=posicion+"px";
    if(posicion>600){
        posicion=0;
    }
}
sentiterval(mover , 30);