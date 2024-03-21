<script setup lang="ts">
import {MailOutlined} from '@ant-design/icons-vue';
import {userStore} from "../../stores/user.ts";
import {reactive, ref, UnwrapRef} from "vue";
import {UserModel} from "../../models/UserModel.ts";
import {message} from "ant-design-vue";
import UserModalForm from './user.modal.vue'
import UserDrawerForm from './user.drawer.vue'

const user = userStore()
const columns = [
  {
    title: 'Full name',
    dataIndex: 'fullName',
    key: 'fullName',
  },
  {
    title: 'E-mail',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'Action',
    key: 'action',
  },
]
let editableData: UnwrapRef<UserModel> = reactive({
  email: '',
  password: ''
});

const isShowModalForm = ref<boolean>(false)
let userToEdit = ref<UserModel>({})

const edit = (user: UserModel) => {
  userToEdit.value = user
  isShowModalForm.value = true
}
const onDelete = async (key?: string) => {

}

const onCancel = (data: any[]) => {
  console.log(data);
  isShowModalForm.value = false
}


const save = (email: string) => {
  const u = user.users.find((u: any) => u.email === email)
  u.fullName = editableData.fullName
  message.success('ສໍາເລັດ')
  clearForm()
}


const cancel = () => {
  clearForm()
}

const clearForm = () => {
  editableData = {
    email: '',
    password: ''
  }
}

const getTagColor = (val: string) => {
  if (val === 'ACTIVE') return 'green'
  if (val === 'INACTIVE') return 'red'
  if (val === 'admin') return 'orange'
  if (val === 'staff') return 'blue'
}
</script>

<template>
  <div>
    <a-table :dataSource="user.users" :columns="columns">
      <template #headerCell="{ column }">
        <template v-if="column.key === 'email'">
          <span><MailOutlined/> {{ column.title }}</span>
        </template>
      </template>

      <template #bodyCell="{ column, record }">

        <template v-if="column.key === 'fullName'">
          <template v-if="editableData && editableData.email === record.email">
            <a-input v-model:value="editableData.fullName"/>
          </template>
          <template v-else>{{ record.fullName }}</template>
        </template>

        <template v-if="column.key === 'role'">
          <span v-if="!record.role">-</span>
          <template v-else>
            <a-tag :color="getTagColor(record.role)">{{ record.role }}</a-tag>
          </template>
        </template>
        <template v-if="column.key === 'status'">
          <a-tag :color="getTagColor(record.status)">{{ record.status }}</a-tag>
        </template>
        <template v-if="column.key === 'action'">
          <template v-if="editableData && editableData.email === record.email">
            <a-typography-link @click="save(record.email)">Save</a-typography-link>
            <a-divider type="vertical"/>
            <a-popconfirm title="Sure to cancel?" @confirm="cancel">
              <a>Cancel</a>
            </a-popconfirm>
          </template>
          <template v-else>
            <a @click="edit(record)">Edit</a>
            <a-divider type="vertical"/>
            <a-popconfirm
              title="Sure to delete?"
              @cancel="onCancel"
              @confirm="onDelete(record.key)">
              <a>Delete</a>
            </a-popconfirm>
          </template>
        </template>
      </template>
    </a-table>

<!--    <UserModalForm :open="isShowModalForm"
                   :edit-data="userToEdit"
                   @cancel="onCancel"/>-->

    <UserDrawerForm :open="isShowModalForm"
                    :edit-data="userToEdit"
                    @cancel="onCancel"/>
  </div>
</template>