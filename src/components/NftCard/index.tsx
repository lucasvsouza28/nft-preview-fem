import {
  styled,
} from '../../../stitches.config'

import ethereumSvg from '../../assets/icon-ethereum.svg'
import clockSvg from '../../assets/icon-clock.svg'

type Nft = {
  id: string,
  name: string,
  description: string,
  price: number,
  daysLeft: number,
  image: string,
  creator: {
    avatar: string,
    name: string
  }
};

type NftCardProps = {
  nft: Nft
};

export const NftCard = ({
  nft,
}: NftCardProps) => {
  return (
    <Container>
      <NftImage
        src={nft.image}
      />

      <Name>
        {nft.name} #{nft.id}
      </Name>

      <Description>
        {nft.description}
      </Description>

      <PriceContainer

      >
        <Price>
          <img src={ethereumSvg} />

          {nft.price} ETH
        </Price>
        <DaysLeft>
          <img src={clockSvg} />
          {nft.daysLeft} days left
        </DaysLeft>

      </PriceContainer>

      <Divider />

      <CreatorInfo>
        <UserAvatar
          src={nft.creator.avatar}
        />
        <Box>
          <Span secondary>
            Creation of
          </Span>
          <Span primary>
            {' ' + nft.creator.name}
          </Span>
        </Box>
      </CreatorInfo>
    </Container>
  )
}

const Box = styled('div', {});

const Span = styled('span', {
  variants: {
    primary: {
      true: {
        color: '$text_primary'
      }
    },
    secondary: {
      true: {
        color: '$text_secondary'
      }
    }
  }
});

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',

  width: '350px',

  borderRadius: '8px',
  background: '$bg_element',
  padding: '1.5rem',

  transform: 'scale(.99)',

  '&:hover': {
    boxShadow: `0 0 6px 0 $1`,
    transform: 'scale(1)'
  },

  transition: 'all .2s ease'
});

const NftImage = styled('img', {
  width: '100%',
  height: '300px',
  objectFit: 'cover',
  borderRadius: '8px',
});

const Name = styled('h1', {
  fontWeight: 'bold',
  fontSize: '1.2rem',
});

const Description = styled('p', {
  fontWeight: 'lighter',
  color: '$text_secondary'
});

const PriceContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Price = styled('span', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.3rem',

  color: '$text_active',
  fontWeight: 'bold',
});

const UserAvatar = styled('img', {
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  border: '1px solid #FFF',
});

const DaysLeft = styled('span', {
  display: 'flex',
  gap: '0.3rem',
  alignItems: 'flex-start',

  color: '$text_secondary',
  fontWeight: 'bold'
});

const Divider = styled('hr', {
  height: '1px',
  border: 'none',
  background: '$text_secondary',
  opacity: '0.2'
});

const CreatorInfo = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});


