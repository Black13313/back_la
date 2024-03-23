<template>
<div>
  <div>
    <h1>
      ສັນຍາ
    </h1>
  </div>
  <div class="mb-12">
    <a-input-search
        placeholder="ຄົ້ນຫາ"
        enter-button
    />
  </div>
    <div>
        <a-table :columns="table_contract" :data-source="data">
          <template #bodyCell="{ column, record, text }">
            <template v-if="column.key === 'operation'">
              <div class="flex gap-2">
                <div>
                  <a-button class="text-white bg-blue-600">
                    <EyeOutlined />
                  </a-button>
                </div>
                <div>
                  <a-button class="bg-red-600 text-white">
                    <DeleteOutlined />
                  </a-button>
                </div>
                <div>
                  <a-button>
                    <ExportOutlined />
                  </a-button>
                </div>
              </div>
            </template>
          </template>
        </a-table>
    </div>
</div>
</template>
<script setup lang="ts">
import table_contract from "./table_contract.js";
import {EyeOutlined, DeleteOutlined, ExportOutlined } from "@ant-design/icons-vue";

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