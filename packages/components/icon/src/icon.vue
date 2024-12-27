<template>
    <i :class="bem.b()" :style="style">
        <slot></slot>
    </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { createNamespace } from '../../../utils/create';
import { iconProps } from './icon';

defineOptions({
    name: 're-icon'
})

const bem = createNamespace('icon')
const props = defineProps(iconProps)

// 计算属性  计算样式
const style = computed(() => {
    if(!props.color && !props.size) return {}
    console.log('1', props);
    

    return {
        ...(props.size ? {"font-size": props.size + "px"} : {}),
        ...(props.color ? {"color": props.color} : {})
    }
})

</script>