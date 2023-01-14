import { ThreeDots } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        top: '50%',
        left: '50%',
        zIndex: '1000',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
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
    </div>
  );
}
