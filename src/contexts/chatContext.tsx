import { createContext, useReducer } from 'react'

import { ChatMessageProps } from 'components/ChatMessage'

type InitialStateType = {
  messages: ChatMessageProps[]
}

type ActionType = {
  type: 'SEND_MESSAGE'
  payload: ChatMessageProps
}

type ChatProviderProps = {
  children: React.ReactNode
}

type ContextType = {
  state: InitialStateType
  dispatch: React.Dispatch<ActionType>
}

const initialState: InitialStateType = {
  messages: [
    { message: 'Olá, como andas? 😁', isFriend: true },
    { message: 'Com as pernas 👍🏻', isFriend: false }
  ]
}

export const ChatContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => null
})

const chatReducer = (state: InitialStateType, action: ActionType) => {
  if (action.type === 'SEND_MESSAGE') {
    state.messages?.push(action.payload)
    return { ...state }
  }

  return state
}

export function ChatProvider({ children }: ChatProviderProps) {
  const [state, dispatch] = useReducer(chatReducer, initialState)

  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  )
}
