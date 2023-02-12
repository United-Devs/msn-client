type ChatList = {
  id: number
  status: 'online' | 'offline'
  name: string
  src: string
  statusText?: string
  notification?: number
  alert?: boolean
  song?: string
}

export const chatList: ChatList[] = [
  {
    id: 1,
    status: 'online',
    name: 'Marcos Mendes',
    src: 'https://github.com/iamdevmarcos.png',
    statusText: 'Não ligo para a sua presença',
    notification: 8,
    alert: true
  },
  {
    id: 2,
    status: 'online',
    name: 'Bruno Cesar Nunes',
    src: 'https://github.com/BrunoNunes96.png',
    song: 'Bruto Rústico e Sistemático - João Carreiro & Capataz'
  },
  {
    id: 3,
    status: 'offline',
    name: 'Clayton Rafael',
    src: 'https://github.com/Claytonrss.png',
    statusText: 'MSD Forever S2',
    notification: 2
  },
  {
    id: 4,
    status: 'online',
    name: 'Anderson Santana',
    src: 'https://github.com/ander0308.png',
    statusText: 'I Hate Design'
  },
  {
    id: 5,
    status: 'offline',
    name: 'Daniel Gaias Malagurti',
    src: 'https://github.com/Malagurti.png',
    song: 'Highway to Hell - AC/DC'
  }
]
