import Portrait from "@components/Content/Portrait";
import Landscape from "@components/Content/Landscape";
import { useOrientation } from "@hooks/useOrientation";
import { Orientation } from "@constants/settings";

export default function Content() {
  const orientation = useOrientation();
  return orientation === Orientation.LANDSCAPE ? <Landscape /> : <Portrait />;
}
