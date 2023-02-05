import { createContext, useReducer, ReactNode, Dispatch } from 'react'

import { ChatMessageProps } from 'components/ChatMessage'

type InitialStateType = {
  messages: ChatMessageProps[]
}

type ActionType = {
  type: 'SEND_MESSAGE'
  payload: ChatMessageProps
}

type ChatProviderProps = {
  children: ReactNode
}

type ContextType = {
  state: InitialStateType
  dispatch: Dispatch<ActionType>
}

const initialState: InitialStateType = {
  messages: [
    { message: 'hahaha obviously 😎', isFriend: true },
    { message: '🎧 I like the music you are listening to', isFriend: false },
    { message: 'my favorite song :)', isFriend: true }
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
