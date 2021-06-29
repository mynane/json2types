import { Class, JsonArray, JsonObject, JsonValue, ObservableLike, Primitive, TypedArray } from "type-fest";

export type TJson = JsonObject | JsonArray;

export type TJTTOptions = {
  // 缩进单位，值为空格数
  indentUnit?: number;

  // 使用tab缩进
  indentWithTabs?: boolean;

  // 是否导出
  useExport?: boolean;
};

export type TAny = Primitive | Class | TypedArray | JsonObject | JsonArray | JsonValue | ObservableLike;
