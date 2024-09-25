<template>
	<div ref="timeAxis" class="time-axis" :class="{ isAll: yearType == 'ALL' }">
		<!-- :style="{ width: `${stepConfig.groupWidth}px` }" -->
		<div
			class="time-axis-group"
			v-for="(group, groupIndex) in yearList"
			:key="groupIndex"
		>
			<div v-for="(item, index) in group" :key="index" class="time-axis-item"
				:class="{ isEven: groupIndex % 2 === 0, isEventBorder: index % 12 === 0 }">
				<span class="year">{{ item.year }}</span>
				<span class="mouth">{{ item.month }}</span>
				<span class="mark" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineExpose } from 'vue'
const props = defineProps({
	yearList: {
		type: Array as any,
		default: () => {
			return []
		}
	},
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
	&.isAll{
		padding: 0;
		.time-axis-group {
			grid-template-columns: repeat(36, 1fr);
			.time-axis-item {
				.year, .mouth {
					font-size: 13px;
					zoom: 0.8;
				}
			}
		}
	}
	.time-axis-group {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		width: 100%;
	}

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