class Torre{
    constructor(x,y,largura, altura){
        this.body = Bodies.rectangle(x,y,largura, altura, {isStatic:true})
        World.add(world, this.body);
        this.imagem = loadImage("torre.png");
    }
    //método para mostrar 
    show(){
        var pos = this.body.position;
        //coloca imagens 
        image (this.imagem, pos.x,pos.y, 150, 310)
    }

}