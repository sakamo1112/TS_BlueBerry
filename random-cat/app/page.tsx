import { connection } from "next/server";
import { CatImage } from "./cat-image";
import { fetchImage} from "./fetch_image";

export default async function Home() {
  // ビルド時にfetchImageの結果が固定されないようにする
  await connection();
  // APIから画像情報を取得
  const image = await fetchImage();
  // 取得した画像情報をコンソールに表示
  console.log("Home: 画像情報を取得しました。", image);
  return <CatImage url={image.url} />;
}
