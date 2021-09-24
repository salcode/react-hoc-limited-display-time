export default function reducer(state, action) {
  switch (action.type) {
    case 'setMyValue':
      return {
        ...state,
        myValue: action.value,
      };
    default:
      return state;
  }
}
