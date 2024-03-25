import { canales, templateCard, section } from '../src/utils/constants.js';
import Card from '../src/components/Card.js';


canales.forEach(item =>{
    item = new Card ({name:item.nombre, channelTelsur:item.channelTelsur, severidad:item.criticidad, link:item.src}, templateCard);
    const cardList = item.generateCard()
    section.append(cardList)


})