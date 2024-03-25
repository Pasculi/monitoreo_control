import { canales, templateCard, section } from '../src/utils/constants.js';
import Card from '../src/components/Card.js';


canales.forEach(item =>{
    item = new Card ({nombre:item.nombre, channelTelsur:item.channelTelsur, criticidad:item.criticidad, src:item.src}, templateCard);
    const cardList = item.generateCard()
    section.append(cardList)


})