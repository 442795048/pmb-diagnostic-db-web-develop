<template>
	<div class="tips-content">
		<div class="name">{{ title }}</div>
		<div v-if="date && !isTBD" class="date">{{ date }}</div>
		<div v-if="isTBD" class="date">(TBD)</div>
		<div v-if="linkName" class="linkname" @click="handleLink(linkTo)">{{ linkName }}</div>
		<!-- 提示 -->
		<div v-if="options && options.length" class="tips-box">
			<div class="tips" v-for="tips in options">
				<div v-if="tips.isSplit" class="split-line" />
				<template v-else>
					<span class="tips-dot" />
					<span class="tips-label">{{ tips.label }}</span>
					<span>:</span>
					<span class="tips-value">{{ tips.value }}</span>
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		default: ''
	},
	isTBD: {
		type: Boolean,
		default: false
	},
	date: {
		type: String,
		default: ''
	},
	linkName: {
		type: String,
		default: ''
	},
	linkTo: {
		type: String,
		default: ''
	},
	options: {
		type: Array as any,
		default: () => {
			return []
		}
	}
});
const handleLink = (link: any) => {
	window.open(link)
}
</script>
<style lang="scss" scoped>
</style>
<style lang="scss">
.strory-chart-tips {
	z-index: 9999;
	padding: 0;
	.tips-content{
		padding: 5px 0;
	}
	.name,.date,.linkname{
		padding: 0 10px;
	}
	.linkname{
		cursor: pointer;
		color: #0095FF;
		text-decoration: underline;
	}
	.name{
		font-weight: bold;
	}
	.tips-box {
		margin-top: 8px;
		border-top: 1px solid #D9D9D9;
		padding-top: 10px;
		max-height: 200px;
		overflow: auto;
		padding: 10px 10px 0;
	}
	.split-line{
		border-top: 1px dashed #D9D9D9;
		height: 0;
		margin: 8px 0;
		width: 100%;
	}
	.tips {
		display: flex;
		align-items: center;
		gap: 3px;
		position: relative;

		.tips-dot {
			width: 5px;
			height: 5px;
			border-radius: 50%;
			background: #4a4a4a;
			margin-right: 3px;
		}
	}
}
</style>