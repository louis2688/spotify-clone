export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
//   token: null,
  token:
    'BQCllN2ubwkukfeHgsMC5VK-U-yYeMHml5WU9HX4uIJKD1FUt6…jtMeF617sXj2CsFw3iLO8f1dJkb41Cpf729HpOvwRre6ukiHq',
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'SET_PLAYLISTS':
      return {
        ...state,
        playlists: action.playlists,
      };
    case 'SET_DISCOVER_WEEKLY':
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
