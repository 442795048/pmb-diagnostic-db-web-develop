<template>
	<div ref="timeAxis" class="time-axis" :class="{ isAll: yearType == 'ALL' }">
		<div
			v-for="(item, index) in stepConfig.timeAxis"
			:key="index"
			class="time-axis-item"
			:style="getStyle(item)"
		>
			<span class="year">{{ item.year }}</span>
			<span class="mouth">{{ item.month }}</span>
			<span class="mark" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineExpose } from 'vue'
const props = defineProps({
	stepConfig: {
		type: Object as any,
		default: () => {
			return {}
		}
	},
	yearType: {
		type: String,
		default: ''
	}
});
const timeAxis = ref<any>(null)
const getTimeAxisWidth = () => {
	return timeAxis.value.getBoundingClientRect().width
}
const getStyle: any = (item: any) => {
	const allDay = item.allDay
	const monthWidth = allDay.length * props.stepConfig.stepWidth
	return {
		width: `${monthWidth}px`
	}
}
defineExpose({
	getTimeAxisWidth
})
</script>
<style lang="scss" scoped>
.time-axis {
	display: flex;
	height: 50px;
	border-top: 1px solid #B2B4B4;
	border-bottom: 1px solid #B2B4B4;
	background: #fff;

	.time-axis-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		font-size: 12px;
		font-weight: bold;
		padding: 12px 0 6px;
		line-height: 1;
		color: #3C4242;
		.mark {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 0px;
			height: 4px;
			border-left: 1px solid #B2B4B4;
		}

		&.isEven {

			border: none;
		}

		&.isEventBorder {
			border-left: 1px solid #B2B4B4;

			&:first-child {
				border: none
			}
		}
	}
}
</style>