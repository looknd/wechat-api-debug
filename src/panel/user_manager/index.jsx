import BoardGroup from './board_group';
import { state } from '../../store';


const UserManager = {
  components: {
    'board-user-group': BoardGroup,
  },

  computed: {
    send_resp: () => state.send_resp,

    board: function () {
      let ids = state.currentSubnavId.split('/');
      ids.unshift('board');
      return ids.join('-');
    },
  },

  template: (/* .vue */
  <component :is="board"></component>
  )/* .vue */,
};


export default UserManager;
