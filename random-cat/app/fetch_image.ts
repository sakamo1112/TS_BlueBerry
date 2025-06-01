"use server";

import { CAT_API_KEY } from "./env";

type Image = {
    url: string;
}

export async function fetchImage(): Promise<Image> {
    // fetch: HTTPリクエストでリソースを取得するブラウザ標準のAPI
    const res = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: {"x-api-key": CAT_API_KEY},
    });
    // 取得したレスポンスをJSONとしてパース
    const images: unknown = await res.json();
    console.log("fetchImage: 画像情報を取得しました。", images);
    if (!isImageArray(images)) {
    throw new Error("取得したデータが正しくありません。");
    }
    if (!images[0]) {
    throw new Error("取得したデータが空です。");
    }
    return images[0];
}

function isImageArray(value: unknown): value is Image[] {
    // valueが配列であることを確認
    if (!Array.isArray(value)) {
        return false;
    }
    //配列の要素が全てImage型であることを確認
    if (!value.every(isImage)) {
        return false;
    }
    return true;
}

function isImage(value: unknown): value is Image {
    //valueがオブジェクトであることを確認
    if (typeof value !== "object" || value === null) {
        return false;
    }
    //valueにulfフィールドが存在することを確認
    if (typeof (value as Image).url !== "string") {
        return false;
    }
    return true;
}