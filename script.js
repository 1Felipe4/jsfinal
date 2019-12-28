function acc(name, display, price, selected){
  this.name = name;
  this.display = display;
  this.price = price;
  this.selected = selected;
}

function item(name, display, price){
  this.name = name;
  this.display = display;
  this.price = "$" +price.toFixed(2);
  this.priceDble = price;
}

function option(code, name, display, perks, price){
  this.code = code;
  this.name = name;
  this.price = price;
  this.display = display;
  this.perks = perks;
}

function car(type, design, color, rimType, interior, opt, ac1, ac2, ac3, ac4, ac5){
  console.log(ac1);
    this.type = type;
    this.design = design;
    this.color= color;
    this.rimType = rimType;
    this.interior = interior;
    this.option = opt;
    this.ac = [ac1, ac2, ac3, ac4, ac5];

    this.changeAc = function(ac){
      if(!(ac[0] instanceof acc)){
        let a1 =new acc("ac1", "BMW M Performance Floor Mats", 267, ac[0]);
        let a2 =new acc("ac2", "BMW All Weather Floor Mats", 190, ac[1]);
        let a3 =new acc("ac3", "BMW Luggage Compartment Mat", 186, ac[2]);
        let a4 =new acc("ac4", "BMW Floor Liners", 259, this.ac[3]);
        let a5 = new acc("ac5", "BMW Floating Center Caps", 101, ac[4]);

        this.ac = [a1, a2, a3, a4, a5];
      }
      else{
        this.ac =[ac1,ac2, ac3,ac4,ac5];
      }
    }

    this.changeOption = function(o){
      if(o instanceof option){
        if(o.code == 'e'){
          this.option = executive;
        }
        else if(o.code == "p"){
          this.option = premium;
        }
        else if(o.code =="c"){
          this.option = convenience;
          }
      }
      else{
      if(o == 'e'){
        this.option = executive;
      }
      else if(o == "p"){
        this.option = premium;
      }
      else{
        this.option = convenience;
        }
      }
    }

    this.designOptions = function(){
      if(this.type=== "x7"){
        let d1 = new item("luxury", "X7 Luxury Design", 45000)
        let d2 = new item("mSport", "X7 Motor Sport Design", 50000)
        return [d1, d2];
      }
      else if(this.type=== "x4"){
        let d1 = new item("xLine", "X4 xLine Design", 30000)
        let d2 = new item("mSport", "X4 Motor Sport Design", 35000)
        return[d1, d2];
      }
      else if(this.type=== "x1"){
        let d1 = new item("xLine", "X1 xLine Design", 10000)
        let d2 = new item("mSport", "X1 Motor Sport Design", 15000)
        return[d1, d2];
      }
    }

    this.colorOptions= function(){
      if(this.type ==="x7"){
        let c1 = new item("white", "Alpine White", 0);
        let c2 = new item("blue", "Mediterrian Blue", 2000);
        let c3 = new item("amtrin", "Amtrin Red", 2000)
        return[c1, c2, c3];
        }
      else if(this.type ==="x1"){
        if(this.design.name === "xLine"){
          let c1 = new item("white", "Alpine White", 0);
          let c2 = new item("blue", "Bright Blue", 500);
          let c3 = new item("orange", "Orange", 600)
          return[c1, c2, c3];
        }else{
          let c1 = new item("white", "Alpine White", 0);
          let c2 = new item("blue", "Bright Blue", 500);
          let c3 = new item("grey", "Dark Grey", 600)
          return[c1, c2, c3];
        }
      }
      else if(this.type === "x4"){
        let c1 = new item("white", "Alpine White", 0);
        let c2 = new item("black", "Mineral Black", 1000);
        let c3 = new item("red", "Red", 1200)
        return[c1, c2, c3];
      }
      }

    this.interiorOptions= function(){
        if(this.type ==="x7"){
          let in1 = new item("white", "Soft White", 1000);
          let in2 = new item("black", "Leather Black", 500);
          let in3 = new item("coffee", "Soft Coffee", 1000)
          return[in1, in2, in3];
          }
          else if(this.type ==="x1"){
            let in1 = new item("white", "Soft White", 1000);
            let in2 = new item("black", "Leather Black", 500);
            let in3 = new item("mocha", "Soft Mocha", 1000)
            return[in1, in2, in3];
            }
            else if(this.type === "x4"){
              let in1 = new item("mocha", "Soft Mocha", 1000);
              let in2 = new item("black", "Leather Black", 500);
              let in3 = new item("red", "Soft Red", 1000)
              return[in1, in2, in3];
            }
        }

    this.rimOptions= function(){
      if(this.type ==="x7"){
        if(this.design.name ==="luxury"){
          let r1 = new item("21-Y-ferric", '21" Y Shaped Ferric Gray Rims', 0);
          let r2 = new item("22-V", '22" V Shaped Rims', 500)
          let r3 = new item("22-multi", '22" Multi Pattern Rims', 700)
            return[r1, r2, r3]
          }
          else{
            let r1 = new item("21-dbl", '21" Double Pattern Rims', 0);
            let r2 = new item("22-V", '22" V Shaped Rims', 500)
            let r3 = new item("22-Y", '22" Y Shaped Rims', 600)
            return[r1, r2, r3]
          }
        }
        else if(this.type ==="x1"){
          if(this.design.name ==="xLine"){
            let r1 = new item("18-Y", '18" Y Shaped Rims', 0);
            let r2 = new item("19-Y", '19" Y Shaped Rims', 500);
            let r3 = new item("18-dbl", '18" Double Pattern Rims', 500);
            return[r1, r2, r3]
          }
          else{
            let r1 = new item("18-M", '18" M Shaped Rims', 0);
            let r2 = new item("18-M", '18" M Shaped Rims', 0);
            let r3 = new item("19-M", '19" M Rims', 500);
            return[r1, r2, r3]
            return["18-M", "18-M", "19-M"]
          }
        }
        else if(this.type ==="x4"){
          if(this.design.name ==="xLine"){
            let r1 = new item("19-Y-ferric", '19" Y Shaped Ferric Gray Rims', 0);
            let r2 = new item("19-Y-ferric", '19" Y Shaped Ferric Gray Rims', 0);
            let r3 = new item("20-Y-bicolor", '20" Y Shaped Rims', 700);
            return[r1, r2, r3]
          }
          else{
            let r1 = new item("19-M-bicolor", '19" M Shaped Rims', 0);
            let r2 = new item("19-M-bicolor", '19" M Shaped Rims', 0);
            let r3 = new item("20-M-bicolor", '20" M Shaped Rims', 1000);
            return[r1, r2, r3];
          }
        }

    }

    this.changeDesign = function(d){
          var dO = this.designOptions();
          let j = 0;
        if(d instanceof item){
          for(var i = 0; i<dO.length;i++){
            if(d.name===dO[i].name){this.design = dO[i];}
            else{j++};
        }}
        else{for(var i = 0; i<dO.length;i++){
          if(d===dO[i].name){this.design = dO[i];}
          else{j++};
        }
        if(j==2){
          this.design = dO[0];
        }}

    }

    this.changeColor = function(c){
      var cO = this.colorOptions();
      let j = 0;
    if(c instanceof item){
      for(var i = 0; i < cO.length;i++){
        if(c.name===cO[i].name){
          this.color = cO[i];}
          else{j++;}
      }
      if(j === 3){this.color = cO[0]}
    }
    else{
      for(var i = 0; i < cO.length;i++){
        if(c===cO[i].name){this.color = cO[i];}
        else{j++;}
        }
      if(j === 3){this.color = cO[0]}
    }
    }

    this.changeRim = function(r){
      var rO = this.rimOptions();
      let j = 0;
      if(r instanceof item){
        for(var i = 0; i < rO.length;i++){
          if(r.name===rO[i].name){
            this.rimType = rO[i];}
            else{j++;}
        }
        if(j === 3){this.rimType = rO[0]}
      }
      else{
        for(var i = 0; i < rO.length;i++){
          if(r===rO[i].name){this.rimType =rO[i];}
          else{j++;}
          }
        if(j === 3){this.rimType = rO[0]}
      }

    }

    this.changeInterior = function(n){
      var inO = this.interiorOptions();
      let j = 0;
    if(n instanceof item){
      for(let i = 0; i < inO.length;i++){
        if(n.name==inO[i].name){
          this.interior = inO[i];
        }else{
          j++;
        }
      }
    }
    else{
      for(let i = 0; i < inO.length;i++){
        if(n==inO[i].name){
          this.interior = inO[i];
        }else{
          j++;
        }
      }
    }
    if(j === 3){
      this.interior = inO[0];
    }
    }

    this.colorImg = function(){
    document.getElementById("cPic").src=("images/" +this.type + "-" + this.design.name + "-"  + this.color.name + "-" + this.rimType.name + ".png")
    return "images/" +this.type + "-" + this.design.name + "-"  + this.color + "-" + this.rimType + ".png"

  };

    this.designImg = function(){
    this.cookie();
    document.getElementById('dPic').src=("images/" + this.type + "-" +  this.design.name + ".png");
    return this.type + "-" +  this.design.name+ ".png"};

    this.interiorImg = function(){
    document.getElementById('iPic').src=("images/" + this.type + "-interior-" + this.interior.name + ".png");
    return this.type + "-interior-" + this.interior+ ".png"};

    this.total = function(){
      return  this.color.display + " " + this.design.display + " with " + this.rimType.display + " and " + this.interior.display +  " interior " +
      "Total: $" + (this.design.priceDble + this.color.priceDble + this.rimType.priceDble + this.interior.priceDble);
    }

    this.cookie = function(){
      var d = new Date();
      d.setTime(d.getTime()+(10*24*60*60*1000));
      var expires = "expires=" + d.toUTCString();
      this.changeOption(this.option)
      document.cookie = ("type=" + this.type + ";"  +expires + ";");
      document.cookie = ("design=" + this.design.name + ";"  +expires + ";");
      document.cookie = ("color=" + this.color.name + ";"  +expires + ";");
      document.cookie = ("rimType=" + this.rimType.name + ";"  +expires + ";");
      document.cookie = ("interior=" +this.interior.name + ";"  +expires + ";");
      document.cookie = ("option=" +this.option.name + ";"  +expires + ";");
      document.cookie = ("ac1=" +this.ac[0].selected + ";"  +expires + ";");
      document.cookie = ("ac2=" +this.ac[1].selected + ";"  +expires + ";");
      document.cookie = ("ac3=" +this.ac[2].selected + ";"  +expires + ";");
      document.cookie = ("ac4=" +this.ac[3].selected + ";"  +expires + ";");
      document.cookie = ("ac5=" +this.ac[4].selected + ";"  +expires + ";");
      document.cookie = ("expires=" + expires + ";" +expires + ";");
      document.cookie = ("path=/;");

      return"type=" + this.type + ";design=" +this.design+ ";color=" + this.color +
      ";rimType=" + this.rimType + ";interior=" + this.interior + ";" + expires + ";path=/";

  }


}

var x;

var y;

function carD(type){
  var ac1 =new acc("ac1", "BMW M Performance Floor Mats", 267, false);
  var ac2 =new acc("ac2", "BMW All Weather Floor Mats", 190, false);
  var ac3 =new acc("ac3", "BMW Luggage Compartment Mat", 186, false);
  var ac4 =new acc("ac4", "BMW Floor Liners", 259, false);
  var ac5 = new acc("ac5", "BMW Floating Center Caps", 101, false);


if(type=== "x7"){
  let d1 = new item("luxury", "X7 Luxury Design", 45000)
  let c1 = new item("white", "Alpine White", 0);
  let r1 = new item("21-Y-ferric", '21" Y Shaped Ferric Gray Rims', 0);
  let in1 = new item("white", "Soft White", 1000);
x =new car("x7",  d1, c1, r1, in1, premium, ac1, ac2, ac3, ac4, ac5)

  }
else if (type ==="x1") {
  let d1 = new item("xLine", "X1 xLine Design", 10000)
  let c1 = new item("white", "Alpine White", 0);
  let r1 = new item("18-Y", '18" Y Shaped Rims', 0);
    let in1 = new item("white", "Soft White", 1000);
  x = new car("x1", d1, c1, r1, in1, convenience, ac1, ac2, ac3, ac4, ac5)
}
else{
  let d1 = new item("xLine", "X4 xLine Design", 30000)
  let c1 = new item("white", "Alpine White", 0);
    let r1 = new item("18-M", '18" M Shaped Rims', 0);
  let in1 = new item("mocha", "Soft Mocha", 1000);
  x = new car("x4",  d1, c1, r1, in1, convenience, ac1, ac2, ac3, ac4, ac5)
}
x.cookie();
selected("type", "cDesign");
}

function selected(cookie, id){
  document.getElementById('selected').innerText = getCookie(cookie) + " Selected"
  document.getElementById(id).disabled = false;
}

function rebuild(){
    let ac1 = (getCookie("ac1") == 'true');
    let ac2 = (getCookie("ac2") == 'true');
    let ac3 = (getCookie("ac3") == 'true');
    let ac4 = (getCookie("ac4") == 'true');
    let ac5 = (getCookie("ac5") == 'true');
    console.log(ac1 +  "r");

    let type = getCookie("type");
    let design = getCookie("design");
    let color= getCookie("color");
    let rimType = getCookie("rimType");
    let interior = getCookie("interior");
    let option = getCookie("option");

    x = new car(type, design, color, rimType, interior, option, ac1, ac2, ac3, ac4, ac5);

    x.changeAc(x.ac);
    x.changeColor(x.color);
    x.changeDesign(x.design);
    x.changeRim(x.rimType);
    x.changeInterior(x.interior);
    x.changeOption(x.option);
}

function build2(){
  let ac1 = (getCookie("ac1") == 'true');
  let ac2 = (getCookie("ac2") == 'true');
  let ac3 = (getCookie("ac3") == 'true');
  let ac4 = (getCookie("ac4") == 'true');
  let ac5 = (getCookie("ac5") == 'true');
  console.log(ac1 +  "r");

  let type = getCookie("type");
  let design = getCookie("design");
  let color= getCookie("color");
  let rimType = getCookie("rimType");
  let interior = getCookie("interior");
  let option = getCookie("option");

  x = new car(type, design, color, rimType, interior, option, ac1, ac2, ac3, ac4, ac5);
  x.changeAc(x.ac);
  x.changeColor(x.color);
  x.changeDesign(x.design);
  x.changeRim(x.rimType);
  x.changeInterior(x.interior);
    x.changeColor(color); x.changeRim(rimType);
    y = new car(type, design, color, rimType, interior, option);
    y.changeColor(color); y.changeRim(rimType);
}

function build2_O(){
    var type = getCookie("type");
    var design = getCookie("design");
    var color= getCookie("color");
    var rimType = getCookie("rimType");
    var interior = getCookie("interior");
    let option = getCookie("option");
    x = new car(type, design, color, rimType, interior, option);
    x.changeOption(x.option);
    y = new car(type, design, color, rimType, interior, option);
    y.changeOption(y.option);
}


function designPage(){
  rebuild();
  let dO = x.designOptions();
  document.getElementById("d1D").innerText = dO[0].display;
  document.getElementById("d1P").innerText = dO[0].price;
  document.getElementById("d2D").innerText = dO[1].display;
  document.getElementById("d2P").innerText = dO[1].price;
  x.changeDesign();
  x.designImg();

}

function compare(){
  if(x.color.name != y.color.name){
    document.getElementById('ad1').innerText = x.color.display + " Paint\n+$" + x.color.price;
    document.getElementById('re1').innerText = y.color.display + " Paint\n-$" + y.color.price;
    document.getElementById("sa1").innerText = "";
  }else{
    document.getElementById('ad1').innerText = "";
    document.getElementById('re1').innerText = "";
    document.getElementById("sa1").innerText = x.color.display + " Paint\n$ " + x.color.price;
  }
  if(x.rimType.name != y.rimType.name){
    let add2 = document.createElement("P");
    document.getElementById('ad2').innerText =x.rimType.display + "\n+" + x.rimType.price;
    document.getElementById('re2').innerText =y.rimType.display + "\n-$" + y.rimType.price;
    document.getElementById("sa2").innerText = "";

  }
  else{
    document.getElementById('ad2').innerText ="";
    document.getElementById('re2').innerText ="";
    document.getElementById("sa2").innerText = x.rimType.display  + "\n " + x.rimType.price;
  }
}

function compareO(){
  if(x.option.name != y.option.name){
    document.getElementById('ad1').innerText = x.option.name + " Package\n+$" + x.option.price;
    document.getElementById('re1').innerText = y.option.name + " Package\n-$" + y.option.price;
    document.getElementById("sa1").innerText = "";
  }else{
    document.getElementById('ad1').innerText = "";
    document.getElementById('re1').innerText = "";
    document.getElementById("sa1").innerText = x.option.name + " Package\n$ " + x.option.price;
  }
}

function changeDesign(d){
  x.changeDesign(d);
  x.designImg();
  selected("design", "cExterior");
}

function changeColor(c){
  x.changeColor(c);
  x.colorImg();

}

function changeRim(r){
  x.changeRim(r);
  x.colorImg();

}

function changeInterior(d){
  x.changeInterior(d);
  x.cookie();
  x.interiorImg();
  selected("interior", "cOption");
}

function changeOption(o){
  x.changeOption(o);

  document.getElementById('selected').innerText = x.option.name + " Selected"
}

function exteriorPage(){
  build2();
  let cO = x.colorOptions();
  document.getElementById("c1D").innerText = cO[0].display;
  document.getElementById("c1P").innerText = cO[0].price;
  document.getElementById("c2D").innerText = cO[1].display;
  document.getElementById("c2P").innerText = cO[1].price;
  document.getElementById("c3D").innerText = cO[2].display;
  document.getElementById("c3P").innerText = cO[2].price;


  let rO = x.rimOptions();
  document.getElementById("r1D").innerText = rO[0].display;
  document.getElementById("r1P").innerText = rO[0].price;
  document.getElementById("r2D").innerText = rO[1].display;
  document.getElementById("r2P").innerText = rO[1].price;
  document.getElementById("r3D").innerText = rO[2].display;
  document.getElementById("r3P").innerText = rO[2].price;
  x.changeDesign(x.design);
  changeColor(x.color);
  changeRim(x.rimType);

  // Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

  // Get the <span> element that closes the modal
  var nxt = document.getElementsByClassName("close")[0];
  var bck= document.getElementsByClassName("close")[1];

  // When the user clicks the button, open the modal
  btn.onclick = function() {
    modal.style.display = "block";
    compare();
  }

  // When the user clicks on <span> (x), close the modal
  nxt.onclick = function() {
    modal.style.display = "none";
    x.cookie();


  }

  bck.onclick = function() {
    modal.style.display = "none";
    x.cookie();


  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
}

function interiorPage(){
  rebuild();
  let inO = x.interiorOptions();
  document.getElementById("n1D").innerText = inO[0].display;
  document.getElementById("n1P").innerText = inO[0].price;
  document.getElementById("n2D").innerText = inO[1].display;
  document.getElementById("n2P").innerText = inO[1].price;
  document.getElementById("n3D").innerText = inO[2].display;
  document.getElementById("n3P").innerText = inO[2].price;
  x.changeDesign(x.design);
  x.changeColor(x.color);
  x.changeRim(x.rimType);
  x.changeInterior();
  x.interiorImg();

}

function accessory(type){
  var n = document.getElementsByClassName("interior");
  var w = document.getElementsByClassName("wheels");
  if(type == "all"){
    document.getElementById('a').style.borderBottom = "solid";
    document.getElementById('n').style.borderBottom = "none";
    document.getElementById('W').style.borderBottom = "none";
    for(let i = 0;i<n.length;i++){
      n[i].style.display ="block"
    }
    for(let i = 0;i<w.length;i++){
      w[i].style.display ="block";
    }
  }else if(type =="interior"){
    document.getElementById('a').style.borderBottom = "none";
    document.getElementById('n').style.borderBottom = "solid";
    document.getElementById('W').style.borderBottom = "none";
    for(let i = 0;i<n.length;i++){
      n[i].style.display ="block";

    }
    for(let i = 0;i<w.length;i++){
      w[i].style.display ="none";
    }

  }else if(type =="wheels"){
    document.getElementById('a').style.borderBottom = "none";
    document.getElementById('n').style.borderBottom = "none";
    document.getElementById('W').style.borderBottom = "solid";
    for(let i = 0;i<n.length;i++){
      n[i].style.display ="none";

    }
    for(let i = 0;i<w.length;i++){
      w[i].style.display ="block";
    }
  }
}

var convenience = new option('c', "Convenience",
"Enhance your everyday drive with features designed for a seamless experience.",
["Comfort Access keyless entry", "Lumbar support", "SiriusXM Satellite Radio"], 900 );

var premium = new option('p',"Premium",
"Drive in comfort with added heating elements, navigational aids, and more.",
["Comfort Access keyless entry", "Head-up Display", "Gesture Control", "Lumbar support", "Heated front seats",
"SiriusXM Satellite Radio", "Heated Steering Wheel"], 1250);

var executive = new option('e',"Executive",
"A collection for the driver who strives for the ultimate BMW driving experience.",
["Active Park Distance Control", "Lumbar support",
"Heated front seats", "Adaptive Full LED Lights",
"Head-up Display", "SiriusXM Satellite Radio",
"Gesture Control", "Automatic High Beams",
"Comfort Access keyless entry", "Ambient Lighting",
"Heated Steering Wheel", "Parking Assistant Plus", "Surround View w/ 3D View"], 5100)

function selectAcc(id){
  switch (id) {
      case "ac1":x.ac[0].selected = document.getElementById(id).classList.toggle("selected");
      break;
      case "ac2":x.ac[1].selected = document.getElementById(id).classList.toggle("selected");
      break;
      case "ac3":x.ac[2].selected = document.getElementById(id).classList.toggle("selected");
      break;
      case "ac4":x.ac[3].selected = document.getElementById(id).classList.toggle("selected");
      break;
      case "ac5":x.ac[4].selected = document.getElementById(id).classList.toggle("selected");
      break;

  }
}

function optionsPage(){
build2_O();
rebuild();

var oNames = document.getElementsByClassName("oName");
var oDisplay = document.getElementsByClassName("oDisplay");
var oPerks = document.getElementsByClassName("oPerks");
var oPrice = document.getElementsByClassName("oPrice");

oNames[0].innerText = convenience.name;
oNames[1].innerText = premium.name;
oNames[2].innerText = executive.name;

addUlPerks(oPerks[0], convenience.perks);
addUlPerks(oPerks[1], premium.perks);
addUlPerks(oPerks[2], executive.perks);

oDisplay[0].innerText = convenience.display;
oDisplay[1].innerText = premium.display;
oDisplay[2].innerText = executive.display;

oPrice[0].innerText = "$" + convenience.price;
oPrice[1].innerText = "$" + premium.price;
oPrice[2].innerText = "$" + executive.price;

// Get the modal
var modal = document.getElementById("modal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var nxt = document.getElementsByClassName("close")[0];
var bck= document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
  compareO();
}

// When the user clicks on <span> (x), close the modal
nxt.onclick = function() {
  modal.style.display = "none";
  x.cookie();
}

bck.onclick = function() {
  modal.style.display = "none";
  x.cookie();
  }
}

function accessoryPage(){


  rebuild();
  x.changeAc([false, false, false, false, false]);
  x.cookie();
  let n = document.getElementsByClassName("interior");
  let w = document.getElementsByClassName("wheels");

  n[0].innerText =x.ac[0].display + " $" + x.ac[0].price;
  n[1].innerText =x.ac[1].display + " $" + x.ac[1].price;
  n[2].innerText =x.ac[2].display + " $" + x.ac[2].price;
  n[3].innerText =x.ac[3].display + " $" + x.ac[3].price;
  w[0].innerText =x.ac[4].display + " $" + x.ac[4].price;
}

function summaryPage(){
rebuild();
summaryTable();
x.colorImg();
}

function summaryTable(){

  var title = document.getElementsByClassName("Summary-Title");
  title[0].innerText = x.design.display;
  title[1].innerText = x.color.display + " Paint";
  title[2].innerText = x.rimType.display;
  title[3].innerText = x.interior.display;
  title[4].innertext = x.option.name;
  var j = document.createElement('H4');
  j.style.margin = "0px 0px 0px 0px";
  j.style.padding = "0px 0px 0px 0px";
  j.innerText = "Accessories";
  j.style.marginBottom = "0px"
  title[5].appendChild(j);


  var cost = document.getElementsByClassName("Summary-Cost");
  cost[0].innerText = x.design.price;
  cost[1].innerText = x.color.price;
  cost[2].innerText = x.rimType.price;
  cost[3].innerText = x.interior.price;
  cost[4].innertext = "$" + x.option.price.toFixed(2);
  var h = document.createElement('P');
  h.style.padding = "0px 0px 0px 0px"
  h.style.margin = "0px 0px 0px 0px"
  h.innerText = "Accessories";
  cost[5].appendChild(h);
  let acsSum = sumAccess();

  title[6].innerText = "Grand Total";
  cost[6].innerText = "$" +  (x.design.priceDble + x.color.priceDble + x.rimType.priceDble + x.interior.priceDble + x.option.price + acsSum).toFixed(2);
}

function sumAccess(){
  let acs = x.ac;
  let index = [];
  var title = document.getElementsByClassName("Summary-Title");
  var cost = document.getElementsByClassName("Summary-Cost");
  for(let i = 0; i < acs.length; i++){
    if(acs[i].selected == true){
      index.push(i);
    }
  }
console.log(index);
  for(let i = 0; i < index.length;i++ ){
    let j = document.createElement('H5');
    j.innerText = acs[index[i]].display;
    j.style.padding = "3px";
    j.style.margin= "3px";
    j.style.marginLeft = "3px";
    title[5].appendChild(j);

  }
  let sum = 0;
  for(let i = 0; i < index.length;i++ ){
    let j = document.createElement('H5');
    j.innerText = "$" + acs[index[i]].price.toFixed(2);
    j.style.padding = "3px";
    j.style.margin= "3px";
    j.style.marginLeft = "3px";
    cost[5].appendChild(j);
    sum+= acs[index[i]].price;
  }

return sum;

}

function addUlPerks(where, what){
  for(let i = 0;i<what.length;i++){
    let l = document.createElement("LI");
    l.innerText = what[i];
    where.appendChild(l);
  }
}

function setButtons(){
  let dO = x.designOptions();

  document.getElementById("d1D").innerText = dO[0].display;
  document.getElementById("d1P").innerText = dO[0].price;
  document.getElementById("d2D").innerText = dO[1].display;
  document.getElementById("d2P").innerText = dO[1].price;


  let cO = x.colorOptions();

  document.getElementById("c1D").innerText = cO[0].display;
  document.getElementById("c1P").innerText = cO[0].price;
  document.getElementById("c2D").innerText = cO[1].display;
  document.getElementById("c2P").innerText = cO[1].price;
  document.getElementById("c3D").innerText = cO[2].display;
  document.getElementById("c3P").innerText = cO[2].price;



  let rO = x.rimOptions();
  document.getElementById("r1D").innerText = rO[0].display;
  document.getElementById("r1P").innerText = rO[0].price;
  document.getElementById("r2D").innerText = rO[1].display;
  document.getElementById("r2P").innerText = rO[1].price;
  document.getElementById("r3D").innerText = rO[2].display;
  document.getElementById("r3P").innerText = rO[2].price;


  let inO = x.interiorOptions();
  document.getElementById("n1D").innerText = inO[0].display;
  document.getElementById("n1P").innerText = inO[0].price;
  document.getElementById("n2D").innerText = inO[1].display;
  document.getElementById("n2P").innerText = inO[1].price;
  document.getElementById("n3D").innerText = inO[2].display;
  document.getElementById("n3P").innerText = inO[2].price;


}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

var slideIndex = 0;
function showSlides() {
    var i;
   var slides = document.getElementsByClassName("type_sel");
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";

   setTimeout(showSlides, 2000); // Change image every 2 seconds
 }
