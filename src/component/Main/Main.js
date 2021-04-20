import CardMap from '../CardMap/CardMap';
import Input from '../Input/Input';
import CaruselBox from '../KaruselBox';

import ShopMenu from '../ShopMenu/ShopMenu';

function Main() {
  return (
    <div className="App">
      <CaruselBox/>
      <ShopMenu/>
      <Input/>
      <CardMap/>
    </div>
  );
}

export default Main;