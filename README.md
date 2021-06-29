# json-ts-types

将 json 数据转化为 ts 的 types 结构

### 安装：

use npm:

```bash
npm i --save-dev json-ts-types
```

use yarn:

```bash
yarn add -D json-ts-types
```

### 使用

数据：

```javascript
const data = {
  data: [
    {
      id: "xxx",
      type: "text",
      name: "name",
      enabled: true,
      corp_id: "xxx",
      is_default: true,
      create_ts: 1607413075,
      update_ts: 1614065954,
    },
    {
      id: "xxx",
      type: "text",
      name: "tb_nick",
      enabled: true,
      corp_id: "xxx",
      is_default: true,
      create_ts: 1608172135,
      update_ts: 1620440673,
    },
    {
      id: "xxx",
      type: "text",
      name: "jd_nick",
      enabled: true,
      corp_id: "xxx",
      is_default: true,
      create_ts: 1620985673,
      update_ts: 1621410474,
    },
  ],
};
```

例子：

```javascript
const jtt = new JsonTsTypes();
console.log(jtt.formart(data));
```

输出：

```ts
export type TDemo = {
  data?: {
    id?: string;
    type?: string;
    name?: string;
    enabled?: boolean;
    corp_id?: string;
    is_default?: boolean;
    create_ts?: number;
    update_ts?: number;
  }[];
};
```

#### 如何使用

初始化：

```ts
type TJTTOptions = {
  // 缩进单位，值为空格数, 默认2
  indentUnit?: number;

  // 是否使用tab缩进， 默认false
  indentWithTabs?: boolean;

  // 是否导出 默认 export
  useExport?: boolean;
};

const jtt = newJsonTsTypes(options?: TJTTOptions)
```

使用：

```ts
const result = jtt.formart(data, name?: string, options?: TJTTOptions)
```
