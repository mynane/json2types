import { JsonArray, JsonObject } from "type-fest";
import { TAny, TJ2TOptions, TJson } from "./types";
import { assert, firstCharToUpcase, isArray, isEmpty, isObject } from "./utils";

const defaultConfs = {
  indentUnit: 2,
  indentWithTabs: false,
  useExport: true,
};

enum EIndents {
  space = " ",
  tabs = "\t",
}

type TDefaultConfs = typeof defaultConfs;

class JSON2TYPES {
  private options: TDefaultConfs;
  public indents: string;

  constructor(options: TJ2TOptions) {
    this.options = { ...defaultConfs, ...(options ?? {}) };
    const { indentUnit, indentWithTabs } = this.options;

    this.indents = (indentWithTabs ? EIndents.tabs : EIndents.space).repeat(indentUnit);
  }

  private parse(target: TJson, name: string) {
    const _loopObject = (input: JsonObject, key: string, indents: number): string => {
      let res = "{\n";
      for (const _key of Object.keys(input)) {
        const value = input[_key];
        res += `${this.indents.repeat(indents)}${_key}?: ${_loop(value, key, indents)};\n`;
      }

      return `${res}${this.indents.repeat(indents - 1)}}`;
    };

    const _loopArray = (input: JsonArray, key: string, indents: number): string => {
      const res = [];
      const temp = {};
      for (const value of input) {
        if (isObject(value)) {
          Object.assign(temp, value);
        } else {
          res.push(_loop(value, key, indents + indents));
        }
      }

      if (!isEmpty(temp)) {
        res.push(_loop(temp, key, indents + indents));
      }

      return res.join("|") + "[]";
    };

    const _loop = (input: TAny, key: string, indents: number): string => {
      if (isObject(input)) {
        return _loopObject(input, key, indents);
      } else if (isArray(input)) {
        return _loopArray(input, key, indents);
      }

      return typeof input;
    };

    return this.options.useExport
      ? `export type T${firstCharToUpcase(name)} = ${_loop(target, "demo", 1)}`
      : _loop(target, "demo", 1);
  }

  public formart(target: TJson, name = "demo", options?: Partial<TDefaultConfs>) {
    assert(isObject(target) || isArray(target), "input 应该是一个json对象");
    this.options = { ...this.options, ...(options ?? {}) };
    return this.parse(target, name);
  }
}

export default JSON2TYPES;
