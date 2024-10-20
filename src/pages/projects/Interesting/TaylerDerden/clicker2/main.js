var money = 0,
	clickGain = 1,
	autoGain = 1,
	interval;

var element = {
	clicker   : document.getElementById("main-clicker"),
	money     : document.getElementById("money"),
}

function addMoney() { 
  money += clickGain;
}
function updateMoney(check=true) {
  text = "$" + money;
  element.money.innerHTML = text;
  if(check){checkPrices();}
}
function autoMoney(amount) {
  clearInterval(interval);
  interval = setInterval(function(){ money = money + autoGain; updateMoney(); }, 200 / amount);
}

function checkPrices() {
	for(let i=0;i<shop.length;i++){
		if(money >= shop[i].price){
			shop[i].element.disabled = false;
		}
	}
}
function onBuy(obj) {

	money -= obj.price;
	updateMoney(check=false);
	for(let i=0;i<shop.length;i++){
		shop[i].element.disabled = true;
	}
}


class ShopElement{	
	constructor (id,newprice_func,onclick_func) {
        this.id = id;
		this.element = document.getElementById(id);
		this.element.onclick = this.purchase.bind(this);
		this.text_element = this.element.getElementsByTagName("b")[0];
		
		this._updatePrice = newprice_func;
		this._onClick = onclick_func;
		
		this.price = 0;
		this.purchaseLvl = 1;
		this.updatePrice();
	}
	onClick(){this._onClick(this);}
	updatePrice(){this._updatePrice(this);}
	updateText(){
		this.text_element.innerHTML = "<b>" +'$'+this.price+': ' + "</b>";}
	
	
	update(){
		this.updatePrice();
		this.updateText(); 
	}
	purchase(){
		this.purchaseLvl += 1;
		this.onClick();
		onBuy(this);
		this.update()
		checkPrices();
	}
	
}


function newPrice1(obj){obj.price = clickGain * 25 * obj.purchaseLvl;}
function newPrice2(obj){obj.price = 200 * obj.purchaseLvl;}
function newPrice3(obj){obj.price = autoGain * 30 * obj.purchaseLvl + 500;}
function onClick1(obj){clickGain*=2;}
function onClick2(obj){autoMoney(this.purchaseLvl);}
function onClick3(obj){autoGain*=2;}




shop = [
	new ShopElement("b1",newPrice1,onClick1),
	new ShopElement("b2",newPrice2,onClick2),
	new ShopElement("b3",newPrice3,onClick3),
];

updateMoney(); 
for (let i=0;i<shop.length;i++){
	shop[i].update()
}

element.clicker.onclick = function() { 
	element.clicker.disabled = true;
	addMoney(); updateMoney(); 
	element.clicker.disabled = false;
};