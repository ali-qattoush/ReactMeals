
export function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];

    case "UPDATE":
      return state.map((item) =>
        item.name === action.payload.name
          ? { ...item, amount: item.amount + action.payload.amount }
          : item
      );
    
    case "DELETE":
        return state.filter(item => item.name !== action.payload.name);

    default:
      return state;
  }
}
