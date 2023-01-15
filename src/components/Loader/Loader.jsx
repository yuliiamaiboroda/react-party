import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from 'components/Loader/Loader.styled';

export default function Loader() {
  return (
    <Wrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#394EBE"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </Wrapper>
  );
}
