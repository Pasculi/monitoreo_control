export default class Card{
  //Para generar una car se necesita el selector, en este caso del template
  constructor(selector) {
    this._selector = selector;
  }
  _getTemplate() {
    /* this._templateCard = this._selector; */
    console.log('Gtet template')
    /* console.log(this._selector) */

  }
}