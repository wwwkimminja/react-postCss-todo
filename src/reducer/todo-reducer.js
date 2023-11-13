import { v4 as uuidv4 } from 'uuid'
export function todoReducer(items, action) {
  switch (action.type) {
    case 'updated': {
      const { id, state } = action;
      return items.map((item) => {
        if (item.id === id) {
          return { ...item, state }
        } else {
          return { ...item }
        }
      })

    }
    case 'added': {
      const { content } = action;
      return [...items, {
        id: uuidv4(),
        state: "doing",
        content,
      }]
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id)
    }
    default: {
      throw Error(`Unknown action type: ${action.type}`)

    }
  }

}
