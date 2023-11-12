export default function (state: any, action: any) {
  switch (action.type) {
    case "edit":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      throw new Error();
  }
}
