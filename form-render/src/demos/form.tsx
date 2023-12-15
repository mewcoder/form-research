import { Button, Select, Form, Input } from "antd";

const App = () => {
  const [form] = Form.useForm();

  return (
    <>
      <Form form={form} layout="vertical" labelWrap>
        <Form.Item label="输入框" name="input1" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="选择框" name="select1">
          <Select
            options={[
              { label: "早", value: "a" },
              { label: "中", value: "b" },
              { label: "晚", value: "c" },
            ]}
          />
        </Form.Item>
      </Form>
      <Button type="primary" onClick={form.submit}>
        提交
      </Button>
    </>
  );
};

export default App;
