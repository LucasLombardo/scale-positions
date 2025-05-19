import Portrait from './Portrait';
import Landscape from './Landscape';
import { useOrientation } from '../../hooks';

export default function Content() {
  const orientation = useOrientation();
  return orientation === 'landscape' ? <Landscape /> : <Portrait />;
}