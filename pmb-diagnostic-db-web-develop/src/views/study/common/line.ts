import { color } from "echarts"

export const phaseOptions = [
  { label: 'Phase I', value: 'PhaseI' },
  { label: 'PhaseII a', value: 'PhaseIIa' },
  { label: 'Phase Iib', value: 'PhaseIib' },
  { label: 'Phase II', value: 'PhaseII' },
  { label: 'PhaseIII', value: 'PhaseIII' },
  { label: 'PhaseIV', value: 'PhaseIV' }
]

export const tumorTypeOptions = [
  { label: 'BC', value: 'BC' },
  { label: 'PC', value: 'PC' },
  { label: 'OC', value: 'OC' },
  { label: 'PanC', value: 'PanC' }
]

export const indicationOptions = [
  { label: 'mCSPC', value: 'mCSPC' },
  { label: 'TNBC', value: 'TNBC' },
  { label: 'etc', value: 'etc' }
]

export const lineOptions = [
  { label: '1L', value: '1L' },
  { label: '2L', value: '2L' },
  { label: '3L', value: '3L' }
]

export const designOptions = [
  { label: 'ITT', value: 'ITT' },
  { label: 'Patient selected', value: 'patientSelected' }
]

export const statusOptions = [
  { label: 'Planned', value: 'planned' },
  { label: 'Setup', value: 'setup' },
  { label: 'Ongoing', value: 'ongoing' },
  { label: 'On hold', value: 'onHold' },
  { label: 'close out', value: 'closeOut' },
  { label: 'Approved', value: 'Approved' },
]

export const sortNameConfig:any = {
	'Pre-PH3ID': 'PH3ID',
	'LSPC': 'LSPC',
	'CSP Available': 'CSP',
	'HGR initial submission': 'HGR submission',
	'HGR initial approval': 'HGR approval',
	'FSI': 'FSI',
	'LSI': 'LSI',
	'NDA-S': 'NDA-S',
	'NDA-A': 'NDA-A',
	'Assay selection': 'Assay selection',
	'Lab selection': 'Lab selection',
	'Lab readiness': 'Lab readiness',
	'FST': 'FST',
	'LST': 'LST',
	'Data Recon Completion': 'Data Recon',
	'DCO': 'DCO',
	'DBL': 'DBL',
	'CDx Assay selection date': 'CDx Assay',
	'CDx Contract date': 'CDx Contract',
	'AV completion date': 'AV',
	'Type testing completion date': 'Type',
	'CDx HGR Approval Date': 'CDx HGR',
	'Ring study & Reader precision date': 'Ring & Reader',
	'Clinical IVD trial completion date': 'Clinical',
	'CDx Lab readiness date': 'CDx Lab',
	'Bridging study initiation date': 'Bridging initiation',
	'Bridging study completion date': 'Bridging completion',
	'CDx submission date': 'CDx submission',
	'CDx approval date':  'CDx approval'
}