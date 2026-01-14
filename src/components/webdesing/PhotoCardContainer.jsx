import {
  imageAirfilter,
  imageBlogr,
  imageBuilder,
  imageCamp,
  imageExpress,
  imageEyecam,
  imageFaceit,
  imageLoopstudios,
  imagePhoton,
  imageTodo,
  imageTransfer,
} from "@/assets";
import { PhotoCardGrid } from "../shared";

export default function PhotoCardContainer({ items }) {
  return (
    <>
      <PhotoCardGrid items={items} />
    </>
  );
}
