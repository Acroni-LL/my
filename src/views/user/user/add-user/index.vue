<template>
  <div class="add-container">
    <el-card>
      <el-form ref="addUser" :inline="true" :model="family">
        <el-row>
          <el-button size="small" type="primary" @click="addParent"
            >添加一个家长</el-button
          >
          <el-button size="small" type="success" @click="addChild"
            >添加一个孩子</el-button
          >
        </el-row>
        <el-row style="margin-top: 20px" />

        <el-collapse v-model="activeNamesP">
          <el-collapse-item
            v-for="(item, index) in family.parent"
            :key="`${index}-p`"
            :title="`添加家长${index + 1}`"
            :name="index"
          >
            <el-form-item label="姓名">
              <el-input v-model="item.name" size="small" clearable />
            </el-form-item>
            <el-form-item label="电话号码" prop="phone">
              <el-input v-model="item.phone" size="small" clearable />
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="item.sex" clearable>
                <el-option :value="1" label="男">男</el-option>
                <el-option :value="2" label="女">女</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="会员">
              <el-select v-model="item.vip" clearable size="small">
                <el-option :value="1" label="是">是</el-option>
                <el-option :value="2" label="不是">不是</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="备注">
              <el-input
                v-model="item.remark"
                type="text"
                size="small"
                placeholder="请输入内容"
                maxlength="30"
                show-word-limit
              />
            </el-form-item>
            <el-form-item>
              <el-button
                v-if="index != 0"
                type="warning"
                icon="el-icon-delete"
                circle
                @click="deleteRow('parent', index)"
              />
            </el-form-item>
          </el-collapse-item>
        </el-collapse>

        <!--        <el-row v-for="(item,index) in family.parent " :key="`${index}-p`">
                  <el-form-item label="姓名" prop="name">
                    <el-input v-model="item.name" size="small" clearable />
                  </el-form-item>
                  <el-form-item label="电话号码" prop="phone">
                    <el-input v-model="item.phone" size="small" clearable maxlength="11" />
                  </el-form-item>
                  <el-form-item label="性别" prop="sex">
                    <el-select v-model="item.sex" clearable>
                      <el-option :value="1" label="男">男</el-option>
                      <el-option :value="1" label="女">女</el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="会员" prop="vip">
                    <el-select v-model="item.vip" clearable size="small">
                      <el-option :value="1" label="是">是</el-option>
                      <el-option :value="2" label="不是">不是</el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="备注">
                    <el-input
                      v-model="item.remark"
                      type="text"
                      size="small"
                      placeholder="请输入内容"
                      maxlength="30"
                      show-word-limit
                    />
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      v-if="index!=0"
                      type="warning"
                      icon="el-icon-delete"
                      circle
                      @click="deleteRow('parent',index)"
                    />
                  </el-form-item>
                </el-row>-->
        <el-collapse v-model="activeNamesC">
          <el-collapse-item
            v-for="(item, index) in family.child"
            :key="`${index}-p`"
            :title="`添加孩子${index + 1}`"
            :name="index"
          >
            <el-form-item label="姓名">
              <el-input v-model="item.name" size="small" clearable />
            </el-form-item>
            <el-form-item label="生日">
              <el-date-picker v-model="item.birthday" size="small" clearable />
            </el-form-item>
            <el-form-item label="性别">
              <el-select v-model="item.sex" clearable size="small">
                <el-option :value="1" label="男">男</el-option>
                <el-option :value="2" label="女">女</el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="卡号">
              <el-input v-model="item.cardNo" size="small" clearable />
            </el-form-item>
            <el-form-item>
              <el-button
                v-if="index != 0"
                type="warning"
                icon="el-icon-delete"
                circle
                @click="deleteRow('child', index)"
              />
            </el-form-item>
          </el-collapse-item>
        </el-collapse>
        <!--        <el-row v-for="(item,index) in family.child" :key="`${index}-c`">
                  <el-form-item label="姓名" prop="name">
                    <el-input v-model="item.name" size="small" clearable />
                  </el-form-item>
                  <el-form-item label="生日" prop="birthday">
                    <el-date-picker v-model="item.birthday" size="small" clearable />
                  </el-form-item>
                  <el-form-item label="性别" prop="sex">
                    <el-select v-model="item.sex" clearable size="small">
                      <el-option :value="1" label="男">男</el-option>
                      <el-option :value="1" label="女">女</el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="卡号" prop="cardNo">
                    <el-input v-model="item.cardNo" size="small" clearable />
                  </el-form-item>
                  <el-form-item>
                    <el-button
                      v-if="index!=0"
                      type="warning"
                      icon="el-icon-delete"
                      circle
                      @click="deleteRow('child',index)"
                    />
                  </el-form-item>
                </el-row>-->
      </el-form>
      <div class="send-button">
        <el-button
          size="medium"
          type="primary"
          style="margin-right: 10px"
          @click="reSet"
          >重置</el-button
        >
        <el-button size="medium" type="primary" @click="send">提交</el-button>
      </div>
    </el-card>
  </div>
</template>

<script>
import { v4 as uuid } from "uuid";
import { addUser } from "@/api/user/user";

export default {
  name: "AddUser",
  data() {
    const checkPhone = (rule, value, callback) => {
      const moblie = /^1(3|4|5|6|7|8|9)\d{9}$/;
      if (!moblie.test(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    return {
      family: {
        parent: [
          // phone 手机号，master主账户，vip状态，money余额，name姓名，
          {
            phone: "",
            master: "",
            vip: "",
            name: "",
            remark: "",
            sex: "",
            masterId: "",
          },
        ],
        child: [{ name: "", sex: "", birthday: "", cardNo: "", masterId: "" }],
      },
      rules: {
        name: [{ required: true, message: "请输入用户姓名", trigger: "blur" }],
        phone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { validator: checkPhone, trigger: "blur" },
        ],
        sex: [{ required: true, message: "请输入手机号码", trigger: "blur" }],
        vip: [{ required: true, message: "请选择用户状态", trigger: "blur" }],
        birthday: [{ required: true, message: "请选择生日", trigger: "blur" }],
        cardNo: [{ required: true, message: "输入卡号", trigger: "blur" }],
      },
      activeNamesP: 0,
      activeNamesC: 0,
    };
  },
  methods: {
    // 添加家长
    addParent() {
      // 此处默认第一位家长为主账户，在此处生成uuid
      this.family.parent[0].master = uuid();
      this.family.parent.push({
        phone: "",
        master: "",
        vip: "",
        name: "",
        remark: "",
        sex: "",
        masterId: "",
      });
      this.family.parent[this.family.parent.length - 1].masterId =
        this.family.parent[0].master;
    },
    // 添加孩子
    addChild() {
      this.family.child[0].masterId = this.family.parent[0].masterId;
      this.family.child.push({
        name: "",
        sex: "",
        birthday: "",
        cardNo: "",
        masterId: "",
      });
    },
    // 删除家长行或孩子行
    deleteRow(type, index) {
      if (type === "parent") {
        this.family.parent = this.family.parent.filter(
          (item, i) => i !== index
        );
      } else if (type === "child") {
        this.family.child = this.family.child.filter((item, i) => i !== index);
      }
    },
    // 重置行
    reSet() {
      this.$refs.addUser.resetFields();
      this.family.parent = [
        {
          phone: "",
          master: "",
          vip: "",
          name: "",
          remark: "",
          sex: "",
          masterId: "",
        },
      ];
      this.family.child = [
        { name: "", sex: "", birthday: "", cardNo: "", masterId: "" },
      ];
    },
    // 提交数据
    send() {
      // console.log(this.$route)
      // eslint-disable-next-line no-unused-vars
      this.$refs.addUser.validate(async (validate) => {
        console.log(this.family);
        try {
          await addUser(this.family);
        } catch (e) {
          console.log(e);
        } finally {
          this.reSet();
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.add {
  &-container {
    padding: 5px;

    .send-button {
      display: flex;
      margin-top: 15px;
      justify-content: flex-end;
    }

    ::v-deep .el-collapse-item__content {
      padding-bottom: unset;
    }
  }
}
</style>
