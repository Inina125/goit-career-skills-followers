import PropTypes from 'prop-types';
import bgImage from '../../images/bg.png';
import {
  Avatar,
  AvatarCont,
  BG,
  CardCont,
  FollowBtn,
  Followers,
  Line,
  Logo,
  Tweets,
} from './card.styled';

const Card = ({ active, item, toggleFollowing }) => {
  let followersCount = item.followers;
  if (active) {
    followersCount++;
  }

  return (
    <CardCont>
      <BG alt="" src={bgImage} />
      <Logo />
      <Line>
        <AvatarCont>
          <Avatar alt="Avatar" src={item.avatar} />
        </AvatarCont>
      </Line>
      <Tweets>{item.tweets} tweets</Tweets>
      <Followers>{followersCount.toLocaleString()} followers</Followers>
      <FollowBtn onClick={() => toggleFollowing(item.id)} active={active}>
        {active ? 'Following' : 'Follow'}
      </FollowBtn>
    </CardCont>
  );
};

Card.propTypes = {
  active: PropTypes.bool.isRequired,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    tweets: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
  }),
  toggleFollowing: PropTypes.func,
};

export default Card;
