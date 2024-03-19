class X{
    um(){
        console.log("um");
    }
}
class Y extends X{
    dois(){
        this.um();
        console.log("dois");
    }
}
class Z extends Y{
    tres(){
        this.dois();
        console.log("tres");
    }
}

const z = new Z();
z.tres();
