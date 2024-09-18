<template>
	<svg-icon class="fullscreen-icon" @click="screenfullClick"
		:icon-class="isFullscreen ? 'fullscreen-exit' : 'fullscreen'" />
</template>

<script setup lang="ts">
import screenfull from 'screenfull'
import { ref, defineExpose, watch } from 'vue'
const { isFullscreen: userFullScreenFlag } = useFullscreen();
const props = defineProps({
	domId: {
		type: String,
		default: ""
	}
});

onMounted(() => {
	screenfull.on('change', () => {
		isFullscreen.value = screenfull.isFullscreen
		emits('handleScreenFull', isFullscreen.value)
	});
})

const emits = defineEmits(['handleScreenFull'])

watch(userFullScreenFlag, (val) => {
	isFullscreen.value = val
	emits('handleScreenFull', isFullscreen.value)
})

// 是否全屏
const isFullscreen = ref(false)

//  点击切换全屏
const screenfullClick = () => {
	const element = document.querySelector(`#${props.domId}`)
	screenfull.toggle(element)
}

defineExpose({
	screenfullClick
})
</script>

<style lang="scss" scoped>
.fullscreen-icon {
	cursor: pointer;
}
</style>