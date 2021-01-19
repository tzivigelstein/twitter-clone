import styled from '@emotion/styled'

export const AvatarPlaceholder = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  animation: reflect 1s linear infinite;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(8%, #bebebe),
    color-stop(18%, #fff),
    color-stop(33%, #bebebe)
  );
  background: -webkit-linear-gradient(left, #bebebe 8%, #fff 18%, #bebebe 33%);
  background: linear-gradient(to right, #bebebe 8%, #fff 18%, #bebebe 33%);
  -webkit-background-size: 300% 32px;
  transform: rotate(135deg);

  @keyframes reflect {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`
