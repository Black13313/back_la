<script setup lang="ts">
import { EyeOutlined} from "@ant-design/icons-vue";
import tables_document_lance from "./tables_document_lance.ts";
import { ref } from 'vue';
const open = ref<boolean>(false);

const showModal = () => {
  open.value = true;
};

const handleOk = (e: MouseEvent) => {
  console.log(e);
  open.value = false;
};

const data = [
  {
    id: '1',
    title: 'Back ky',
    money: '1.000.000',
    date: '4/03/2024',
    end_date: '14/06/2024'
  },
];
</script>

<template>
<div>
  <h1>ຈັດການເອກະສານຟີຣແລຣນ</h1>
  <div>
<div>
  <a-table :columns="tables_document_lance" :data-source="data">
    <template #bodyCell="{ column, record, text }">
      <template v-if="column.key === 'operation'">
        <div class="flex gap-2">
          <div>
            <a-button class="text-white bg-blue-600" @click="showModal">
              <EyeOutlined />
            </a-button>
          </div>
        </div>
      </template>
    </template>

  </a-table>
</div>

    <div>
      <a-modal v-model:open="open" title="Basic Modal" @ok="handleOk">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>