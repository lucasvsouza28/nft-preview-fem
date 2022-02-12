import {
  styled,
  global,
  theme,
  lightTheme,
} from '../stitches.config'

import equilibriumJpg from './assets/image-equilibrium.jpg'
import userAvatarJpg from './assets/image-avatar.png'

import { BsSunFill, BsMoonFill } from 'react-icons/bs'
import { useState } from 'react'
import { NftCard } from './components/NftCard'

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => setCurrentTheme(currentTheme === lightTheme ? theme : lightTheme)

  const nft = {
    id: '3429',
    name: 'Equilibrium',
    description: 'Our equilibrium collection promotes balance and calm',
    price: 0.041,
    daysLeft: 3,
    image: equilibriumJpg,
    creator: {
      avatar: userAvatarJpg,
      name: 'Jules Wyvern'
    }
  };

  global()

  return (
    <Container
      className={currentTheme}
    >
      <Box>
        <Box
          css={{
            textAlign: 'right',
          }}
        >
          <ToggleThemeButton
            onClick={toggleTheme}
          >
            {
              currentTheme === lightTheme ? (
                <BsMoonFill color={currentTheme.colors.text_primary} />
              ) : (
                <BsSunFill color={currentTheme.colors.text_primary} />
              )
            }
          </ToggleThemeButton>
        </Box>

        <NftCard nft={nft} />
      </Box>
    </Container>
  )
}

const Box = styled('div', {});
const ToggleThemeButton = styled('button', {
  background: 'transparent',
  border: 'none',
  outline: 'none',

  '&:active': {
    transform: 'scale(0.95)'
  }
});
const Container = styled('div', {
  display: 'grid',
  placeItems: 'center',
  height: '100vh',
  width: '100wh',

  background: '$bg_body',
  color: '$text_primary',
});

export default App
