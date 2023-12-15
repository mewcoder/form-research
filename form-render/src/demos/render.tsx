import { Button } from "antd";
import FormRender, { useForm } from "form-render";

const schema0 = {
  type: "object",
  properties: {
    input1: {
      title: "简单输入框",
      type: "string",
      required: true,
    },
    select1: {
      title: "单选",
      type: "string",
      props: {
        options: [
          { label: "早", value: "a" },
          { label: "中", value: "b" },
          { label: "晚", value: "c" },
        ],
      },
    },
  },
};

const schema = {
  type: "object",
  displayType: "column", // row / column
  column: 1,
  properties: {
    input1: {
      title: "输入框",
      type: "string",
    },
    obj: {
      type: "object",
      widget: "card", // collapse / card / lineTitle / subInline
      displayType: "column",
      title: "对象",
      column: 3,
      properties: {
        input1: {
          title: "输入框 A",
          type: "string",
        },
        obj: {
          type: "object",
          widget: "subInline", // collapse / card / lineTitle / subInline
          displayType: "column",
          title: "对象111",
          column: 2,
          properties: {
            input1: {
              title: "输入框 A",
              type: "string",
            },
          },
        },
      },
    },
    list: {
      title: "数组",
      type: "array",
      widget: "TableList", // simpleList / cardList / TableList
      props: {
        hasBackground: true,
      },
      items: {
        type: "object",
        column: 3,
        properties: {
          input1: {
            title: "输入框 A",
            type: "string",
          },
          input2: {
            title: "输入框 B",
            type: "string",
          },
          list: {
            title: "数组",
            type: "array",
            widget: "simpleList", // simpleList / cardList / TableList
            props: {
              hasBackground: true,
            },
            items: {
              type: "object",
              column: 3,
              properties: {
                input1: {
                  title: "输入框 A",
                  type: "string",
                },
              },
            },
          },
        },
      },
    },
    list2: {
      title: "数组",
      type: "array",
      widget: "simpleList", // simpleList / cardList / TableList
      props: {
        hasBackground: true,
      },
      items: {
        type: "object",
        column: 3,
        properties: {
          input1: {
            title: "输入框 A",
            type: "string",
          },
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  return (
    <div className="demo">
      <FormRender form={form} schema={schema} />
      <Button type="primary" onClick={form.submit}>
        提交
      </Button>
    </div>
  );
};

export default Demo;
