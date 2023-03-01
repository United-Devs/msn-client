import { Flex, Heading, Text } from '@chakra-ui/react'

const Paragraph = ({ text }: { text: string }) => (
  <Text fontWeight="semibold" fontSize="1.6rem" lineHeight="2.4rem" mb={10}>
    {text}
  </Text>
)

const PrivacyPolicy = () => (
  <Flex flexDir="column" minH="100vh" bg="white" color="black" p="3rem 2rem">
    <Heading mb={8} fontSize="2.4rem">
      POLÍTICA DE PRIVACIDADE
    </Heading>

    <Paragraph
      text="A presente Política de Privacidade tem como objetivo esclarecer aos
      usuários do nosso aplicativo de chat sobre as informações que coletamos,
      como as usamos e quais medidas de segurança adotamos para protegê-las."
    />

    <Paragraph text="Informações Coletadas Quando você baixa e utiliza o nosso aplicativo de chat, podemos coletar informações pessoais, tais como seu nome de usuário, endereço de e-mail, foto de perfil e outros dados que você escolher compartilhar conosco. Além disso, também coletamos informações sobre o seu uso do aplicativo, incluindo as mensagens enviadas e recebidas" />

    <Paragraph
      text="Uso das Informações Coletadas As informações coletadas serão usadas
      principalmente para oferecer e melhorar o nosso aplicativo de chat,
      incluindo o atendimento ao cliente e o suporte técnico. Também podemos
      usar essas informações para fins de análise de dados, pesquisa e
      marketing."
    />

    <Paragraph
      text="Segurança das Informações Adotamos medidas de segurança rigorosas para
      proteger as informações coletadas e evitar o acesso não autorizado por
      terceiros. Isso inclui o uso de criptografia de ponta a ponta nas
      mensagens trocadas no aplicativo, bem como o armazenamento seguro das
      informações pessoais dos usuários em servidores protegidos."
    />

    <Paragraph
      text="Direitos dos Usuários Os usuários têm o direito de acessar, corrigir e
      excluir suas informações pessoais a qualquer momento. Para fazer isso,
      basta entrar em contato conosco através das informações de contato
      fornecidas no aplicativo."
    />

    <Paragraph
      text="Alterações na Política de Privacidade Nós nos reservamos o direito de
      alterar a presente Política de Privacidade a qualquer momento. Qualquer
      alteração será publicada em nosso aplicativo e/ou site e entrará em vigor
      imediatamente após sua publicação."
    />

    <Paragraph
      text="Se você tiver alguma dúvida ou preocupação sobre a presente Política de
      Privacidade, entre em contato conosco através da seção de Ajuda do nosso
      aplicativo ou envie um e-mail para [insira o endereço de e-mail de suporte
      aqui]. Nós faremos o possível para responder a todas as suas perguntas e
      solucionar quaisquer problemas o mais rápido possível."
    />

    <Paragraph
      text=" Aceitação da Política de Privacidade Ao baixar e utilizar o nosso
      aplicativo de chat, você concorda com a presente Política de Privacidade e
      autoriza a coleta, uso e armazenamento de suas informações pessoais de
      acordo com as condições descritas aqui. Se você não concordar com a
      presente Política de Privacidade, por favor, não baixe nem utilize o nosso
      aplicativo de chat."
    />
  </Flex>
)

export default PrivacyPolicy
