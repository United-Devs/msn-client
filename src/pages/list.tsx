import { Heading } from '@chakra-ui/react'
import Contact from 'components/Contact'
import MyProfile from 'components/MyProfile'

const List = () => (
  <>
    <MyProfile />
    <Heading
      p="16px 24px"
      fontWeight={700}
      fontSize="16px"
      lineHeight="24px"
      color="#0A0A0A"
    >
      Contatos
    </Heading>
    <Contact
      name="Marcos Mendes"
      src="https://github.com/iamdevmarcos.png"
      status="Não ligo para a sua presença"
      notification={8}
      alert
    />

    <Contact
      name="Bruno Cesar Nunes"
      src="https://github.com/BrunoNunes96.png"
      song="Bruto Rústico e Sistemático - João Carreiro & Capataz"
    />

    <Contact
      name="Clayton Rafael"
      src="https://github.com/Claytonrss.png"
      status="MSD Forever S2"
      notification={2}
    />

    <Contact
      name="Anderson Santana"
      src="https://github.com/ander0308.png"
      status="I Hate Design"
    />

    <Contact
      name="Daniel Gaias Malagurti"
      src="https://github.com/Malagurti.png"
      song="Highway to Hell - AC/DC"
    />
  </>
)

export default List
