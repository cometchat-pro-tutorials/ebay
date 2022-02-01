import { useHistory } from 'react-router';

import HomeSectionTitle from './HomeSectionTitle';
import HomeProductItem from './HomeProductItem';

import * as storageService from '../../services/storage';
import * as STORAGE_KEYS from '../../constants/storage-keys';

import * as routeService from '../../services/route';
import * as ROUTES from '../../constants/routes';

const HomeProducts = ({ products }) => {

  const history = useHistory();

  if (!products || !products.length) return <></>;

  const onProductClicked = product => () => {
    if (product) {
      storageService.save({ key: STORAGE_KEYS.PRODUCT, payload: JSON.stringify(product) });
      routeService.navigate({ route: ROUTES.DETAIL, push: history.push });
    }
  };

  return (
    <div className="home__product">
      <HomeSectionTitle title={'Daily Deals'} />
      <div className="home__productc">
        {products.map(product => <HomeProductItem key={product.id} product={product} onProductClicked={onProductClicked} />)}
      </div>
    </div>
  );
}

export default HomeProducts;