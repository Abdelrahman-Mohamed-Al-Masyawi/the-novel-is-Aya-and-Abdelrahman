import { useMemo } from "react";
import { getGalleryImages } from "../utils/galleryLoader.js";

export default function useGalleryImages(folder) {
  return useMemo(() => getGalleryImages(folder), [folder]);
}
