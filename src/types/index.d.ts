import { Class, JsonArray, JsonObject, JsonValue, ObservableLike, Primitive, TypedArray } from "type-fest";

export type TJson = JsonObject | JsonArray;

export type TJ2TOptions = {
  // 缩进单位，值为空格数
  indentUnit?: number;

  // 使用tab缩进
  indentWithTabs?: boolean;

  // 全部字段可选
  allOptional?: boolean;
};

export type TAny = Primitive | Class | TypedArray | JsonObject | JsonArray | JsonValue | ObservableLike;
