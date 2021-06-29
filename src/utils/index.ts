import { JsonArray, JsonObject } from "type-fest";
import { TAny } from "../types";

export const assert = (condition = true, message = "") => {
  if (!condition) {
    throw new Error(message);
  }
};

/**
 * 获取数据类型
 * @param target
 * @returns
 */
export const getObjectType = (target: TAny) => Object.prototype.toString.call(target).slice(8, -1);

/**
 * 判断是否是对象
 * @param target
 * @returns
 */
export const isObject = (target: TAny): target is JsonObject => getObjectType(target) === "Object";

/**
 * 判断是否是数组
 * @param target
 * @returns
 */
export const isArray = (target: TAny): target is JsonArray => getObjectType(target) === "Array";

/**
 * 判断是否是字符串类型
 * @param target
 * @returns
 */
export const isString = (target: TAny): target is string => getObjectType(target) === "String";

/**
 * 判断是否是空 （空数组，空字符串，空数据）
 * @param target
 * @returns
 */
export const isEmpty = (target: TAny) => {
  if (
    (isString(target) && !target) ||
    (isArray(target) && !target.length) ||
    (isObject(target) && !Object.keys(target).length)
  ) {
    return true;
  }

  return false;
};

/**
 * 字符串首字母大写
 * @param target
 * @returns
 */
export const firstCharToUpcase = (target = ""): string => {
  const [firstChar, ...next] = target;

  return firstChar.toLocaleUpperCase() + next.join("");
};
