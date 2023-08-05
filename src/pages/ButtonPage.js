import Button from '../components/Button';
import { GoDeviceDesktop, GoCodeOfConduct } from 'react-icons/go'

function ButtonPage() {

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div className="button-page">
      <div>
        <Button success rounded onClick={handleClick}>
          <GoCodeOfConduct />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger>Buy Now!</Button>
      </div>
      <div>
        <Button warning>
          <GoDeviceDesktop />
          See Deal!
        </Button>
      </div>
      <div>
        <Button secondary>Hide Ads!</Button>
      </div>
      <div>
        <Button primary rounded>Something!</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
