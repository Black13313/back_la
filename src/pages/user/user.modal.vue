<script setup lang="ts">
import RoleSelection from "../../components/RoleSelection.vue";
import MySelection from "../../components/MySelection.vue";
import {onMounted, reactive, ref, watch} from "vue";
import {UserModel} from "../../models/UserModel.ts";
import {FormInstance, message} from "ant-design-vue";
import {userStore} from "../../stores/user.ts";

const props = defineProps({
  open: {
    type: Boolean,
    default: false,
  },
  editData: {
    type: Object
  }
})
const emit = defineEmits(['cancel'])
const formState: UserModel = reactive({})
const formRef = ref<FormInstance>()
const rules = {
  fullName: [
    {required: true, message: 'Please enter your full name', trigger: 'change'},
    {min: 5, message: 'Please enter more than 5 chars', trigger: 'change'},
    {max: 10, message: 'Please enter more less then 10 chars', trigger: 'change'},
  ],
  role: {required: true, message: 'Please choose an role', trigger: 'change'},
  status: {required: true, message: 'Please choose an status', trigger: 'change'},
}
const user = userStore()

const onSave = () => {
  formRef.value!.validateFields()
    .then(() => {
      user.updateUser(formState)
      message.success('ສໍາເລັດ')
      clearForm()
    }).catch(() => {
    console.log('error')
  })
}

const clearForm = () => {
  Object.assign(formState, {
    fullName: '',
    email: '',
    role: undefined,
    status: undefined,
  })
  emit('cancel')
}

const onCancel = () => {
  emit('cancel', [{
    name: 'Vixar',
    age: '29'
  }])
}

watch(() => props.editData, (val: any) => {
  if (val) {
    formState.fullName = val.fullName
    formState.email = val.email
    formState.role = val.role
    formState.status = val.status
  }
})
</script>

<template>
  <a-modal :open="open"
           title="User Form"
           cancel-text="ຍົກເລີກ"
           ok-text="ບັນທຶກ"
           @ok="onSave"
           @cancel="onCancel">

    <a-form layout="vertical"
            ref="formRef"
            :model="formState"
            :rules="rules">

      <a-form-item name="fullName" label="ຊື່ ແລະ ນາມສະກຸນ">
        <a-input v-model:value="formState.fullName"/>
      </a-form-item>

      <a-form-item label="ອີເມວ">
        <a-input v-model:value="formState.email" readonly/>
      </a-form-item>

      <a-form-item name="role" label="ສິດນໍາໃຊ້">
        <!--<RoleSelection/>-->
        <MySelection type="role"
                     :value="formState.role"
                     @selected="(val: string) => formState.role = val"/>
      </a-form-item>

      <a-form-item name="status" label="ສະຖານະ">
        <MySelection type="status"
                     :value="formState.status"
                     @selected="(val: string) => formState.status = val"/>
      </a-form-item>
    </a-form>

  </a-modal>
</template>

<style scoped>

</style>