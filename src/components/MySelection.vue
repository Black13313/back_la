<script setup lang="ts">
import {onMounted, ref, watch} from "vue";

const props = defineProps({
  type: String,
  value: String,
})
const options = ref<any>({
  role: [
    {value: 'admin', name: 'ແອັດມິນ'},
    {value: 'staff', name: 'ພະນັກງານ'},
  ],
  status: [
    {value: 'ACTIVE', name: 'Active'},
    {value: 'INACTIVE', name: 'Inactive'},
  ]
})
const emit = defineEmits(['selected'])
const selected = ref<string>()

onMounted(() => {
  if (props.value) selected.value = props.value
})

const filterOptions = (input: string, item: any) => {
  return item.name.indexOf(input) >= 0
}

const onSelected = (val: string) => {
  emit('selected', val)
}

watch(() => props.value, (val: string) => {
  console.log(val);
  if (val) selected.value = val
})
</script>

<template>
  <a-select v-model:value="selected"
            :options="options[type]"
            :field-names="{label: 'name', value: 'value'}"
            :filter-option="filterOptions"
            allow-clear
            clear-icon
            show-search
            @change="onSelected"/>
</template>

<style scoped>

</style>