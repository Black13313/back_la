<script setup lang="ts">
import {ref} from "vue";

const options = ref<any[]>([
  {value: 'admin', name: 'ແອັດມິນ'},
  {value: 'staff', name: 'ພະນັກງານ'},
])
const emit = defineEmits(['selected'])

const filterOptions = (input: string, item: any) => {
  return item.name.indexOf(input) >= 0
}

const onSelected = (val: string) => {
  emit('selected', val)
}
</script>

<template>
  <a-select :options="options"
            :field-names="{label: 'name', value: 'value'}"
            :filter-option="filterOptions"
            allow-clear
            clear-icon
            show-search
            @change="onSelected"/>
</template>

<style scoped>

</style>