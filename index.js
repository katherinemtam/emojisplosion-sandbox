import { getElementById } from 'domutils';
import { emojisplosion, emojisplosions } from 'emojisplosion';

const button = getElementById('button');

button.addEventListener('click', () => {
 
  emojisplosion({
    className: 'my-emoji-styles',
  });

});
