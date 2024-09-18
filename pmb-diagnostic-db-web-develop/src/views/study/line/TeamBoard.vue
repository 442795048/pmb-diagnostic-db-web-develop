<template>
	<div class="team-board common-card">
		<div class="team-name">Team</div>
		<div class="team-desc">Demand FTE: {{ demand }} / Supply FTE: {{ demand }}</div>
		<!-- <div class="team-containe">
			<div class="team-container-card-user" v-for="member in teamMembers" :key="member.id">
				<div>
					<svg class="member-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
						<path fill="currentColor"
							d="M288 320a224 224 0 1 0 448 0 224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z" />
					</svg>
				</div>
				<div class="team-info">
					<div>Staff Name: <span>{{ member.name }}</span></div>
					<div>Role: <span>{{ member.role }}</span></div>
				</div>
			</div>
		</div> -->
		<el-table ref="dataTableRef" :data="teamMembers" stripe class="common-table">
			<el-table-column label="Staff Name" prop="staffName" />
			<el-table-column label="Role" prop="role" />
			<el-table-column label="Active Id" prop="activityId" />
		</el-table>
	</div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";

import StudyAPI, { StudyTableQuery, StudyList } from "@/api/study";
defineOptions({
	name: "TeamBoard",
});
const props = defineProps({
	studyName: {
		type: [String],
		default: ''
	}
});
const selectTeams = () =>{
	StudyAPI.getAllTeams(props.studyName).then((data)=>{
		teamMembers.value = data.memberList
		demand.value = data.demand
		staff.value = data.staff
	})
}
onMounted(() => {
	selectTeams()
	console.log('TeamBoard', props.studyName)
})
// 假设的团队成员数据
const teamMembers = ref([

]);

const demand = ref('')
const staff = ref('')
</script>

<style lang="scss" scoped>
.team-board {
	padding: 20px;
	.common-table.el-table{
		height: auto;
	}
}
.team-name,
.team-desc {
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 14px;
	color: #4a4a4a;
	margin-bottom: 10px;
}

.team-desc {
	font-size: 12px;
}

.team-containe {
	column-gap: 10px;
	display: flex;
	align-items: center;
	justify-content: center;

	.team-container-card-user {
		display: flex;
		flex-direction: column;
		align-items: center;

		.member-svg {
			width: 5em;
			height: 5em;
			color: #854040;
		}
	}

	.team-info {
		font-size: 12px;

		span {
			margin-left: 2px;
		}
	}

}
</style>
