export default class Card{
  //Para generar una car se necesita el selector, en este caso del template
  constructor(data, selector) {
    this._selector = selector;
    this._name = data.nombre;
    this._channelTelsur = data.channelTelsur;
    this._severidad = data.criticidad;
    this._src = data.src;
    
  }
  _getTemplate() {
    this._templateCard = this._selector.content;
    this._cardElement = this._templateCard.querySelector('.card').cloneNode(true);
    return this._cardElement;
    
  }
  generateCard(){
    this._nodeCard = this._getTemplate();
    this._nodeCard.querySelector('.card__nombre').textContent = this._name;    
    this._nodeCard.querySelector('.card__logo-channel').src = this._src;
    this._nodeCard.querySelector('.card__logo-channel').alt = this._name;
    this._nodeCard.querySelector('.card__numero').textContent = this._channelTelsur;
    this._nodeCard.querySelector('.card__severidad').textContent = `Severidad: ${this._severidad}`;
    return this._nodeCard;
  }
}