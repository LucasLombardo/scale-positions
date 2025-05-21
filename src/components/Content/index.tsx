import Portrait from "./Portrait";
import Landscape from "./Landscape";
import { useOrientation } from "../../hooks";
import { Orientation } from "../../constants";

export default function Content() {
  const orientation = useOrientation();
  return orientation === Orientation.LANDSCAPE ? <Landscape /> : <Portrait />;
}
