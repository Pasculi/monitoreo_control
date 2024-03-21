export class Card{
    constructor(data, selector, section){
        this._selector = selector;
        this._data = data;
        this._section = section
        console.log(this._data)
        
    }
    _getTemplate(){
         const cardTemplete =  document.querySelector(this._selector).content;
         console.log(cardTemplete)
         const cardNode = cardTemplete.querySelector('.card').cloneNode(true)
         return cardNode;
    }
    generateCard(){
        this._node = this._getTemplate();
        this._node.querySelector('.card__nombre').textContent = this._data.nombre;
        this._node.querySelector('.card__logo-channel').src = this._data.src;
        this._node.querySelector('.card__logo-channel').alt = this._data.name;
        this._node.querySelector('.card__numero').textContent = this._data.channelTelsur;
        this._node.querySelector('.card__severidad').textContent = this._data.criticidad;
        
        console.log(this._node)
        return this._node
    }
}