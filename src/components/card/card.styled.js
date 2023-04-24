import styled from 'styled-components';
import { LogoSVG } from '../../images/svg';

const CardCont = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-self: center;
  justify-self: center;
  align-items: center;
  width: 380px;
  height: 460px;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

const Logo = styled(LogoSVG)`
  margin-top: 20px;
  margin-left: 20px;
`;

const BG = styled.img`
  position: absolute;
  top: 28px;
  left: 36px;
  z-index: 0;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  width: 380px;
  height: 8px;
  margin-top: 172px;

  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

const AvatarCont = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  top: -40px;
  width: 80px;
  height: 80px;

  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;

const Avatar = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

const Tweets = styled.p`
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-top: 62px;
`;

const Followers = styled.p`
  color: #ebd8ff;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  margin-top: 16px;
`;

const FollowBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;
  gap: 6px;
  width: 196px;
  height: 50px;
  margin-top: 26px;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;

  background: ${props => (props.active ? '#5CD3A8' : '#ebd8ff')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
`;

export {
  CardCont,
  BG,
  Line,
  Logo,
  AvatarCont,
  Avatar,
  FollowBtn,
  Tweets,
  Followers,
};
