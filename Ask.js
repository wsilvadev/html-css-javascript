var tv ={
    cn:"FOX",
    ep: "The Friends",
    setTv: function(){
        var best = "The best channel and episode of your choice is: " + this.cn +" and  "+ this.ep;
        return best;
    }
};
   
   var a = prompt("what channel do you prefer?");
tv.cn = a;

if (tv.cn === "FOX"){
    document.write("wow! you also like the Fox channel. very good!");
}
else {

