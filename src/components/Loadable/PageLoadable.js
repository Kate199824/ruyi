import Loadable from 'react-loadable';
import PageLoading from '../LoadingSpin';

export default function(loader) {
  return Loadable({
    loader,
    loading: PageLoading
  });
}
