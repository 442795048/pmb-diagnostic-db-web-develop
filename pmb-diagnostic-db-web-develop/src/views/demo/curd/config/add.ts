import DeptAPI from "@/api/dept";
import RoleAPI from "@/api/role";
import UserAPI, { UserForm } from "@/api/user";
import type { IModalConfig } from "@/components/CURD/types";

const modalConfig: IModalConfig<UserForm> = {
  pageName: "sys:user",
  dialog: {
    title: "新增用户",
    width: 800,
    draggable: true,
  },
  form: {
    labelWidth: 100,
  },
  formAction: UserAPI.add,
  beforeSubmit(data) {
    console.log("提交之前处理", data);
  },
  formItems: [
    {
      label: "用户名",
      prop: "username",
      rules: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
      type: "input",
      attrs: {
        placeholder: "请输入用户名",
      },
    },
    {
      label: "用户昵称",
      prop: "nickname",
      rules: [{ required: true, message: "用户昵称不能为空", trigger: "blur" }],
      type: "input",
      attrs: {
        placeholder: "请输入用户昵称",
      },
    },
    {
      label: "所属部门",
      prop: "deptId",
      rules: [{ required: true, message: "所属部门不能为空", trigger: "blur" }],
      type: "tree-select",
      attrs: {
        placeholder: "请选择所属部门",
        data: [],
        filterable: true,
        "check-strictly": true,
        "render-after-expand": false,
      },
      async initFn(formItem) {
        formItem.attrs.data = await DeptAPI.getOptions();
      },
    },
    {
      type: "custom",
      label: "性别",
      prop: "gender",
    },
    {
      label: "角色",
      prop: "roleIds",
      rules: [{ required: true, message: "用户角色不能为空", trigger: "blur" }],
      type: "select",
      attrs: {
        placeholder: "请选择",
        multiple: true,
      },
      options: [],
      async initFn(formItem) {
        this.options = await RoleAPI.getOptions();
      },
    },
    {
      type: "input",
      label: "手机号码",
      prop: "mobile",
      rules: [
        {
          pattern: /^1[3|4|5|6|7|8|9][0-9]\d{8}$/,
          message: "请输入正确的手机号码",
          trigger: "blur",
        },
      ],
      attrs: {
        placeholder: "请输入手机号码",
        maxlength: 11,
      },
    },
    {
      label: "邮箱",
      prop: "email",
      rules: [
        {
          pattern: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
          message: "请输入正确的邮箱地址",
          trigger: "blur",
        },
      ],
      type: "input",
      attrs: {
        placeholder: "请输入邮箱",
        maxlength: 50,
      },
    },
    {
      label: "状态",
      prop: "status",
      type: "radio",
      options: [
        { label: "正常", value: 1 },
        { label: "禁用", value: 0 },
      ],
      initialValue: 1,
    },
  ],
};

export default modalConfig;
