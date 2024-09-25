import { active } from "sortablejs"

const tips1 = [
	{ label: 'Sample Type ', value: 'Tissue' },
	{ label: 'Sample Specifiction', value: '10mL' },
	{ label: 'Sample number before', value: '1234' },
	{ label: 'Sample number after', value: '5678' },
	{ label: 'Data specification for set 1', value: 'case' },
	{ label: 'Data size before for set 1', value: '50' },
	{ label: 'Data size after for set 1', value: '60' },
	{ label: 'Data specification for set 2', value: '5MB' },
	{ label: 'Data size before for set 2', value: '23' },
	{ label: 'Data size after for set 2', value: '44' },
	{ label: 'HGR comment', value: 'comment' }
]
const tips5 = [
	{ label: 'Sample Type ', value: 'Tissue' },
	{ label: 'Sample Specifiction', value: '10mL' },
	{ label: 'Sample number before', value: '1234' },
	{ label: 'Sample number after', value: '5678' },
	{ label: 'Data specification for set 1', value: 'case' },
	{ label: 'Data size before for set 1', value: '50' },
	{ label: 'Data size after for set 1', value: '60' },
	{ label: 'Data specification for set 2', value: '5MB' },
	{ label: 'Data size before for set 2', value: '23' },
	{ label: 'Data size after for set 2', value: '44' },
	{ label: 'HGR comment', value: 'comment' },
	{ isSplit: true, },
	{ label: 'Sample Type ', value: 'Blood' },
	{ label: 'Sample Specifiction', value: '10mL' },
	{ label: 'Sample number before', value: '1234' },
	{ label: 'Sample number after', value: '5678' },
	{ label: 'Data specification for set 1', value: 'case' },
	{ label: 'Data size before for set 1', value: '50' },
	{ label: 'Data size after for set 1', value: '60' },
	{ label: 'Data specification for set 2', value: '5MB' },
	{ label: 'Data size before for set 2', value: '23' },
	{ label: 'Data size after for set 2', value: '44' },
	{ label: 'HGR comment', value: 'comment' }
]
const tips2 = [
	{ label: 'Issue Summary', value: 'Test Summary' },
	{ label: 'Details', value: 'Test Details' },
	{ label: 'Impact', value: 'Test Impact' },
	{ label: 'Issue Severity Level', value: 'Suggestion' },
	{ label: 'Testing Lab', value: 'Test Testing Lab' },
	{ label: 'Actions/Mitigation', value: 'Mitigation' }
]
const tips3 = [
	{ label: 'Brief', value: 'Test Brief' },
	{ label: 'Detail', value: 'Test Detail' },
	{ label: 'outcome', value: 'Test outcome' },
	{ label: 'Note', value: 'Test Note' }
]
export const MOCK_TREE = [
  {
    code: 'Study Level 1 (unique)',
    label: 'Study Level 1 (unique)',
		type: 'level1',
    children: [
      { label: 'Pre-PH3ID', code: 'level1-1', srotName: 'PH3ID', date: '2022-01-30', color: '#a30014', linkName: 'linkName1', linkTo: 'https://www.baidu.com', index: 1 },
      { label: 'LSPC', code: 'level1-2', date: '2022-06-25', color: '#a30014', linkName: 'linkName2', linkTo: 'https://www.baidu.com', index: 2  },
      { label: 'CSP Available', code: 'level1-3', srotName: 'CSP', date: '2022-12-26', color: '#a30014', linkName: 'linkName3', linkTo: 'https://www.baidu.com', index: 3  },
      { label: 'HGR initial submission', code: 'level1-4', srotName: 'HGR Submit', date: '2023-06-04', color: '#a30014', linkName: 'linkName4', linkTo: 'https://www.baidu.com', index: 4  },
      { label: 'HGR initial approval', code: 'level1-5', srotName: 'HGR Approval', date: '2023-08-25', color: '#a30014', linkName: 'linkName5', linkTo: 'https://www.baidu.com', index: 5  },
      { label: 'FSI', code: 'level1-6', date: '2023-12-01', color: '#a30014', linkName: 'linkName6', linkTo: 'https://www.baidu.com', index: 6  },
      { label: 'LSI', code: 'level1-7', date: '2024-01-30', color: '#a30014', isActive: true, linkName: 'linkName7', linkTo: 'https://www.baidu.com', index: 7  },
      { label: 'NDA-S', code: 'level1-8', date: '2024-05-08', color: '#a30014', linkName: 'linkName8', linkTo: 'https://www.baidu.com', index: 8  },
      { label: 'NDA-A', code: 'level1-9', date: '2024-11-24', color: '#a30014', linkName: 'linkName10', linkTo: 'https://www.baidu.com', index: 9  }
    ]
  },
  {
    code: 'Study Level 2 (working package)',
    label: 'Study Level 2 (working package)',
		type: 'level2',
    children: [
      {
        label: 'Assay A',
        code: 'Assay A',
				isAssay: true,
				activeIndex: 1,
        children: [
          { label: 'Assay selection', code: 'Assay selection', srotName: 'Assay', date: '2022-03-02', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
          { label: 'Lab selection', code: 'Lab selection', srotName: 'Lab S2', date: '2022-08-22', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
          { label: 'Lab readiness', code: 'Lab readiness', srotName: 'Lab R2', date: '2023-10-22', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
          { label: 'FST', code: 'FST', date: '2023-12-01', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
          { label: 'LST', code: 'LST', date: '2024-03-22', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
          { label: 'Data Recon Completion', code: 'Data Recon Completion', srotName: 'Recon', date: '2024-05-30', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
          { label: 'DCO', code: 'DCO', date: '2024-08-11', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
          { label: 'DBL', code: 'DBL', date: '2024-11-01', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
          { label: 'activity1', code: 'activity1', startDate: '2024-03-11', endDate: '2024-05-23', color: '#f59a23', status: 'Track', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com', disabled: true, activeIndex: 1 },
          { label: 'activity2', code: 'activity2', startDate: '2024-09-11', endDate: '2024-12-30' , color: '#f59a23', status: 'Risk', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com', disabled: true, activeIndex: 1 },
				]
      },
			{
        label: 'Assay B',
        code: 'Assay B',
				isAssay: true,
				activeIndex: 2,
        children: [
          { label: 'Assay selection', code: 'Assay selection2', date: '2022-02-02', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2, },
          { label: 'Lab selection', code: 'Lab selection2', srotName: 'Lab S2', date: '2022-04-07', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2 },
          { label: 'Lab readiness', code: 'Lab readiness2', srotName: 'Lab R2', date: '2022-10-22', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2 },
          { label: 'FST', code: 'FST2', date: '2023-02-18', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2 },
          { label: 'LST', code: 'LST2', date: '2023-06-22', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2 },
          { label: 'Data Recon Completion', code: 'Data Recon Completion2', srotName: 'Recon', date: '', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2 },
          { label: 'DCO', code: 'DCO2', date: '', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2 },
          { label: 'DBL', code: 'DBL2', date: '', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2 },
          { label: 'activity3', code: 'activity3', startDate: '2024-05-11', endDate: '2024-06-11', color: '#f59a23', status: 'Delay', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com', disabled: true, activeIndex: 2 },
          { label: 'activity4', code: 'activity4', startDate: '2024-05-18', endDate: '2024-07-30', color: '#f59a23', status: 'Hold', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com', disabled: true, activeIndex: 2 },
        ]
      }
    ]
  },
  {
    code: 'Study Level 3 (CDx)',
    label: 'Study Level 3 (CDx)',
		type: 'level3',
    children: [
			{
        label: 'Assay A',
        code: 'Assay A',
				isAssay: true,
				activeIndex: 1,
        children: [
          { label: 'CDx Assay selection date', code: 'CDx Assay selection date', srotName: 'CDx Assay', date: '2022-02-02', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
					{ label: 'CDx Contract date', code: 'CDx Contract date', srotName: 'CDx Contract', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
					{ label: 'AV completion date', code: 'AV completion date', srotName: 'AV', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
					{ label: 'Type testing completion date', srotName: 'Type', code: 'Type testing completion date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
					{ label: 'CDx HGR Approval Date', srotName: 'CDx HGR', code: 'CDx HGR Approval Date', date: '2023-04-02', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
					{ label: 'Ring study & Reader precision date', srotName: 'Ring', code: 'Ring study & Reader precision date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
					{ label: 'Clinical IVD trial completion date', srotName: 'Clinical', code: 'Clinical IVD trial completion date', date: '2023-11-02', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
					{ label: 'CDx Lab readiness date', srotName: 'CDx Lab', code: 'CDx Lab readiness date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
					{ label: 'Bridging study initiation date', srotName: 'Bridging initiation', code: 'Bridging study initiation date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
					{ label: 'Bridging study completion date', srotName: 'Bridging completion', code: 'Bridging study completion date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
					{ label: 'CDx submission date', srotName: 'CDx submission', code: 'CDx submission date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
					{ label: 'CDx approval date', srotName: 'CDx approval', code: 'CDx approval date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
        ]
      },
			{
        label: 'Assay B',
        code: 'Assay B',
				isAssay: true,
				activeIndex: 2, 
        children: [
					{ label: 'CDx Assay selection date', srotName: 'CDx Assay', code: 'CDx Assay selection date', date: '2022-02-02', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2  },
					{ label: 'CDx Contract date', srotName: 'CDx Contract', code: 'CDx Contract date', date: '2022-04-02', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2    },
					{ label: 'AV completion date', srotName: 'AV', code: 'AV completion date', date: '2022-06-12', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2    },
					{ label: 'Type testing completion date', srotName: 'Ring', code: 'Type testing completion date', date: '2022-08-12', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2    },
					{ label: 'CDx HGR Approval Date', srotName: 'CDx HGR', code: 'CDx HGR Approval Date', date: '2022-12-22', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2    },
					{ label: 'Ring study & Reader precision date', srotName: 'Ring', code: 'Ring study & Reader precision date', date: '2023-02-22', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2    },
					{ label: 'Clinical IVD trial completion date', srotName: 'Clinical', code: 'Clinical IVD trial completion date', date: '2023-05-02', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2    },
					{ label: 'CDx Lab readiness date', srotName: 'CDx Lab', code: 'CDx Lab readiness date', date: '2023-08-15', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2    },
					{ label: 'Bridging study initiation date', srotName: 'Bridging initiation', code: 'Bridging study initiation date', date: '2023-12-11', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2    },
					{ label: 'Bridging study completion date', srotName: 'Bridging completion', code: 'Bridging study completion date', date: '2024-03-23', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2    },
					{ label: 'CDx submission date', srotName: 'CDx submission', code: 'CDx submission date', date: '2024-06-18', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2    },
					{ label: 'CDx approval date', srotName: 'CDx approval', code: 'CDx approval date', date: '2024-09-05', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 2    },
        ]
      }
    ]
  },
  {
    code: 'Study Level 4 (HGR)',
    label: 'Study Level 4 (HGR)',
		type: 'level4',
    children: [
			{ label: 'HGR initial submission', srotName: 'HGR submission', code: 'HGR initial submission', date: '2023-08-15', count: 11, color: '#830051', options: tips5, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
      { label: 'HGR change application 1', srotName: 'HGR app 1', code: 'HGR change application 1', date: '2023-12-25', count: 11, color: '#830051', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
      { label: 'HGR change application 2', srotName: 'HGR app 2', code: 'HGR change application 2', date: '2024-03-16', count: 22, color: '#830051', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'HGR final report', srotName: 'HGR final', code: 'HGR final report', date: '2024-06-12', count: 11, color: '#830051', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
    ]

  },
  {
    code: 'Study Level 5 (Issue log)',
    label: 'Study Level 5 (Issue log)',
		type: 'level5',
    children: [
      { label: 'Issue Category', srotName: 'Category', code: 'Category', startDate: '2023-04-02', endDate: '2024-05-02', color: '#cccccc', options: tips2, linkName: 'linkName8', linkTo: 'https://www.baidu.com', type: 'level5',  },
      { label: 'Issue Category', srotName: 'Category1', code: 'Category1', startDate: '2024-03-28', endDate: '2024-04-15', color: '#cccccc', options: tips2, linkName: 'linkName8', linkTo: 'https://www.baidu.com', type: 'level5', }
    ]
  },
  {
    code: 'Study Level 6 (Other events)',
    label: 'Study Level 6 (Other events)',
		type: 'level6',
    children: [
			{ label: 'mm1', srotName: 'mm1', code: 'mm1', date: '2024-11-15', count: 11, color: '#909399', status: 'Track', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'activity1', gl: { i: 1, j: 0, k: 8 }, hide: true, code: 'activity1', startDate: '', endDate: '', color: '#f59a23', status: 'Delay', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'activity2', hide: true,  gl: { i: 1, j: 0, k: 9 }, code: 'activity2', startDate: '', endDate: '', color: '#f59a23', status: 'Hold', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'activity3', hide: true, gl: { i: 1, j: 1, k: 8 }, code: 'activity3', startDate: '', endDate: '', color: '#f59a23', status: 'Delay', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'activity4', hide: true, gl: { i: 1, j: 1, k: 9 }, code: 'activity4', startDate: '', endDate: '', color: '#f59a23', status: 'Hold', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
      { label: 'activity5', code: 'activity5', startDate: '2024-04-05', endDate: '2024-12-11', color: '#ffff80', status: 'Delay', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' }
    ]
  }
]

export const MOCK_TREE1 = [
  {
    code: 'Study Level 1 (unique)',
    label: 'Study Level 1 (unique)',
		type: 'level1',
    children: [
      { label: 'Pre-PH3ID', code: 'level1-1', srotName: 'PH3ID', date: '2022-01-30', color: '#a30014', linkName: 'linkName1', linkTo: 'https://www.baidu.com', index: 1 },
      { label: 'LSPC', code: 'level1-2', date: '2022-06-25', color: '#a30014', linkName: 'linkName2', linkTo: 'https://www.baidu.com', index: 2  },
      { label: 'CSP Available', code: 'level1-3', srotName: 'CSP', date: '2022-12-26', color: '#a30014', linkName: 'linkName3', linkTo: 'https://www.baidu.com', index: 3  },
      { label: 'HGR initial submission', code: 'level1-4', srotName: 'HGR Submit', date: '2023-06-04', color: '#a30014', linkName: 'linkName4', linkTo: 'https://www.baidu.com', index: 4  },
      { label: 'HGR initial approval', code: 'level1-5', srotName: 'HGR Approval', date: '2023-11-15', color: '#a30014', linkName: 'linkName5', linkTo: 'https://www.baidu.com', index: 5  },
      { label: 'FSI', code: 'level1-6', date: '2023-08-19', color: '#a30014', linkName: 'linkName6', linkTo: 'https://www.baidu.com', index: 6  },
      { label: 'LSI', code: 'level1-7', date: '2024-01-30', color: '#a30014', isActive: true, linkName: 'linkName7', linkTo: 'https://www.baidu.com', index: 7  },
      { label: 'NDA-S', code: 'level1-8', date: '2024-05-08', color: '#a30014', linkName: 'linkName8', linkTo: 'https://www.baidu.com', index: 8  },
      { label: 'NDA-A', code: 'level1-9', date: '2024-11-24', color: '#a30014', linkName: 'linkName10', linkTo: 'https://www.baidu.com', index: 9  }
    ]
  },
  {
    code: 'Study Level 2 (working package)',
    label: 'Study Level 2 (working package)',
		type: 'level2',
    children: [
      { label: 'Assay selection', code: 'Assay selection', srotName: 'Assay', date: '2022-03-02', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'Lab selection', code: 'Lab selection', srotName: 'Lab S2', date: '2022-08-22', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'Lab readiness', code: 'Lab readiness', srotName: 'Lab R2', date: '2023-10-22', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'FST', code: 'FST', date: '2023-12-01', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'LST', code: 'LST', date: '2024-03-22', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'Data Recon Completion', code: 'Data Recon Completion', srotName: 'Recon', date: '2024-05-30', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'DCO', code: 'DCO', date: '2024-08-11', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'DBL', code: 'DBL', date: '2024-11-01', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
    ]
  },
  {
    code: 'Study Level 3 (CDx)',
    label: 'Study Level 3 (CDx)',
		type: 'level3',
    children: [
			{ label: 'CDx Assay selection date', code: 'CDx Assay selection date', srotName: 'CDx Assay', date: '2022-02-02', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'CDx Contract date', code: 'CDx Contract date', srotName: 'CDx Contract', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'AV completion date', code: 'AV completion date', srotName: 'AV', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'Type testing completion date', srotName: 'Type', code: 'Type testing completion date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'CDx HGR Approval Date', srotName: 'CDx HGR', code: 'CDx HGR Approval Date', date: '2023-04-02', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'Ring study & Reader precision date', srotName: 'Ring', code: 'Ring study & Reader precision date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'Clinical IVD trial completion date', srotName: 'Clinical', code: 'Clinical IVD trial completion date', date: '2023-11-02', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'CDx Lab readiness date', srotName: 'CDx Lab', code: 'CDx Lab readiness date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'Bridging study initiation date', srotName: 'Bridging initiation', code: 'Bridging study initiation date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'Bridging study completion date', srotName: 'Bridging completion', code: 'Bridging study completion date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'CDx submission date', srotName: 'CDx submission', code: 'CDx submission date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'CDx approval date', srotName: 'CDx approval', code: 'CDx approval date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
		]
  },
  {
    code: 'Study Level 4 (HGR)',
    label: 'Study Level 4 (HGR)',
		type: 'level4',
    children: [
			{ label: 'HGR initial submission', srotName: 'HGR submission', code: 'HGR initial submission', date: '2023-11-15', count: 11, color: '#830051', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
      { label: 'HGR change application 1', srotName: 'HGR app 1', code: 'HGR change application 1', date: '2023-12-25', count: 11, color: '#830051', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
      { label: 'HGR change application 2', srotName: 'HGR app 2', code: 'HGR change application 2', date: '2024-03-16', count: 22, color: '#830051', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'HGR final report', srotName: 'HGR final', code: 'HGR final report', date: '2023-08-12', count: 11, color: '#830051', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
    ]

  },
  {
    code: 'Study Level 5 (Issue log)',
    label: 'Study Level 5 (Issue log)',
		type: 'level5',
    children: [
      { label: 'Issue Category', srotName: 'Category', code: 'Category', startDate: '2023-04-02', endDate: '2024-05-02', color: '#cccccc', options: tips2, linkName: 'linkName8', linkTo: 'https://www.baidu.com', type: 'level5',  },
      { label: 'Issue Category', srotName: 'Category1', code: 'Category1', startDate: '2024-03-28', endDate: '2024-04-15', color: '#cccccc', options: tips2, linkName: 'linkName8', linkTo: 'https://www.baidu.com', type: 'level5', }
    ]
  },
  {
    code: 'Study Level 6 (Other events)',
    label: 'Study Level 6 (Other events)',
		type: 'level6',
    children: [
			{ label: 'mm1', srotName: 'mm1', code: 'mm1', date: '2024-11-15', count: 11, color: '#909399', status: 'Track', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'activity1', gl: { i: 1, j: 0, k: 8 }, hide: true, code: 'activity1', startDate: '', endDate: '', color: '#f59a23', status: 'Delay', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'activity2', hide: true,  gl: { i: 1, j: 0, k: 9 }, code: 'activity2', startDate: '', endDate: '', color: '#f59a23', status: 'Hold', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'activity3', hide: true, gl: { i: 1, j: 1, k: 8 }, code: 'activity3', startDate: '', endDate: '', color: '#f59a23', status: 'Delay', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'activity4', hide: true, gl: { i: 1, j: 1, k: 9 }, code: 'activity4', startDate: '', endDate: '', color: '#f59a23', status: 'Hold', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
      { label: 'activity5', code: 'activity5', startDate: '2024-04-05', endDate: '2024-12-11', color: '#ffff80', status: 'Delay', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' }
    ]
  }
]

export const MOCK_TREE2 = [
  {
    code: 'Study Level 1 (unique)',
    label: 'Study Level 1 (unique)',
		type: 'level1',
    children: [
      { label: 'Pre-PH3ID', code: 'level1-1', srotName: 'PH3ID', date: '2022-01-30', color: '#a30014', linkName: 'linkName1', linkTo: 'https://www.baidu.com', index: 1 },
      { label: 'LSPC', code: 'level1-2', date: '2022-06-25', color: '#a30014', linkName: 'linkName2', linkTo: 'https://www.baidu.com', index: 2  },
      { label: 'CSP Available', code: 'level1-3', srotName: 'CSP', date: '2022-12-26', color: '#a30014', linkName: 'linkName3', linkTo: 'https://www.baidu.com', index: 3  },
      { label: 'HGR initial submission', code: 'level1-4', srotName: 'HGR Submit', date: '2023-06-04', color: '#a30014', linkName: 'linkName4', linkTo: 'https://www.baidu.com', index: 4  },
      { label: 'HGR initial approval', code: 'level1-5', srotName: 'HGR Approval', date: '2023-11-15', color: '#a30014', linkName: 'linkName5', linkTo: 'https://www.baidu.com', index: 5  },
      { label: 'FSI', code: 'level1-61111', date: '2024-01-30', color: '#a30014', isActive: true, linkName: 'linkName6', linkTo: 'https://www.baidu.com', index: 6  },
      { label: 'LSI', code: 'level1-7111', date: '2022-08-30', color: '#a30014', linkName: 'linkName7', linkTo: 'https://www.baidu.com', index: 7  },
      { label: 'NDA-S', code: 'level1-8', date: '2024-05-08', color: '#a30014', linkName: 'linkName8', linkTo: 'https://www.baidu.com', index: 8  },
      { label: 'NDA-A', code: 'level1-9', date: '2024-11-24', color: '#a30014', linkName: 'linkName10', linkTo: 'https://www.baidu.com', index: 9  }
    ]
  },
  {
    code: 'Study Level 2 (working package)',
    label: 'Study Level 2 (working package)',
		type: 'level2',
    children: [
      { label: 'Assay selection', code: 'Assay selection', srotName: 'Assay', date: '2022-03-02', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'Lab selection', code: 'Lab selection', srotName: 'Lab S2', date: '2022-08-22', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'Lab readiness', code: 'Lab readiness', srotName: 'Lab R2', date: '2023-10-22', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'FST', code: 'FST', date: '2023-12-01', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'LST', code: 'LST', date: '2024-03-22', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'Data Recon Completion', code: 'Data Recon Completion', srotName: 'Recon', date: '2024-05-30', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'DCO', code: 'DCO', date: '2024-08-11', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'DBL', code: 'DBL', date: '2024-11-01', color: '#f59a23', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
    ]
  },
  {
    code: 'Study Level 3 (CDx)',
    label: 'Study Level 3 (CDx)',
		type: 'level3',
    children: [
			{ label: 'CDx Assay selection date', code: 'CDx Assay selection date', srotName: 'CDx Assay', date: '2022-02-02', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1 },
			{ label: 'CDx Contract date', code: 'CDx Contract date', srotName: 'CDx Contract', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'AV completion date', code: 'AV completion date', srotName: 'AV', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'Type testing completion date', srotName: 'Type', code: 'Type testing completion date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'CDx HGR Approval Date', srotName: 'CDx HGR', code: 'CDx HGR Approval Date', date: '2023-04-02', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'Ring study & Reader precision date', srotName: 'Ring', code: 'Ring study & Reader precision date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'Clinical IVD trial completion date', srotName: 'Clinical', code: 'Clinical IVD trial completion date', date: '2023-11-02', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'CDx Lab readiness date', srotName: 'CDx Lab', code: 'CDx Lab readiness date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'Bridging study initiation date', srotName: 'Bridging initiation', code: 'Bridging study initiation date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'Bridging study completion date', srotName: 'Bridging completion', code: 'Bridging study completion date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'CDx submission date', srotName: 'CDx submission', code: 'CDx submission date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
			{ label: 'CDx approval date', srotName: 'CDx approval', code: 'CDx approval date', date: 'TBD', color: '#000080', linkName: 'linkName8', linkTo: 'https://www.baidu.com', activeIndex: 1  },
		]
  },
  {
    code: 'Study Level 4 (HGR)',
    label: 'Study Level 4 (HGR)',
		type: 'level4',
    children: [
			{ label: 'HGR initial submission', srotName: 'HGR submission', code: 'HGR initial submission', date: '2023-11-15', count: 11, color: '#830051', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
      { label: 'HGR change application 1', srotName: 'HGR app 1', code: 'HGR change application 1', date: '2023-12-25', count: 11, color: '#830051', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
      { label: 'HGR change application 2', srotName: 'HGR app 2', code: 'HGR change application 2', date: '2024-03-16', count: 22, color: '#830051', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'HGR final report', srotName: 'HGR final', code: 'HGR final report', date: '2023-08-12', count: 11, color: '#830051', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
    ]

  },
  {
    code: 'Study Level 5 (Issue log)',
    label: 'Study Level 5 (Issue log)',
		type: 'level5',
    children: [
      { label: 'Issue Category', srotName: 'Category', code: 'Category', startDate: '2023-04-02', endDate: '2024-05-02', color: '#cccccc', options: tips2, linkName: 'linkName8', linkTo: 'https://www.baidu.com', type: 'level5',  },
      { label: 'Issue Category', srotName: 'Category1', code: 'Category1', startDate: '2024-03-28', endDate: '2024-04-15', color: '#cccccc', options: tips2, linkName: 'linkName8', linkTo: 'https://www.baidu.com', type: 'level5', }
    ]
  },
  {
    code: 'Study Level 6 (Other events)',
    label: 'Study Level 6 (Other events)',
		type: 'level6',
    children: [
			{ label: 'mm1', srotName: 'mm1', code: 'mm1', date: '2024-11-15', count: 11, color: '#909399', status: 'Track', options: tips1, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'activity1', gl: { i: 1, j: 0, k: 8 }, hide: true, code: 'activity1', startDate: '', endDate: '', color: '#f59a23', status: 'Delay', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'activity2', hide: true,  gl: { i: 1, j: 0, k: 9 }, code: 'activity2', startDate: '', endDate: '', color: '#f59a23', status: 'Hold', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'activity3', hide: true, gl: { i: 1, j: 1, k: 8 }, code: 'activity3', startDate: '', endDate: '', color: '#f59a23', status: 'Delay', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
			{ label: 'activity4', hide: true, gl: { i: 1, j: 1, k: 9 }, code: 'activity4', startDate: '', endDate: '', color: '#f59a23', status: 'Hold', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' },
      { label: 'activity5', code: 'activity5', startDate: '2024-04-05', endDate: '2024-12-11', color: '#ffff80', status: 'Delay', options: tips3, linkName: 'linkName8', linkTo: 'https://www.baidu.com' }
    ]
  }
]



export const MOCK_TREE6 = {
	level1Datas: [
		{ label: 'Pre-PH3ID' },
		{ label: 'LSPC' },
		{ label: 'CSP Available' },
		{ label: 'HGR initial submission' },
		{ label: 'HGR initial approval' },
		{ label: 'FSI' },
		{ label: 'LSI' },
		{ label: 'NDA-S' },
		{ label: 'NDA-A' }
	],
	level2Datas: [
		{ label: 'Assay selection' },
		{ label: 'Lab selection' },
		{ label: 'Lab readiness' },
		{ label: 'FST' },
		{ label: 'LST' },
		{ label: 'Data Recon Completion' },
		{ label: 'DCO' },
		{ label: 'DBL' },
	],
	level3Datas: [
		{ label: 'CDx Assay selection date' },
		{ label: 'CDx Contract date' },
		{ label: 'AV completion date' },
		{ label: 'Type testing completion date' },
		{ label: 'CDx HGR Approval Date' },
		{ label: 'Ring study & Reader precision date' },
		{ label: 'Clinical IVD trial completion date' },
		{ label: 'CDx Lab readiness date' },
		{ label: 'Bridging study initiation date' },
		{ label: 'Bridging study completion date' },
		{ label: 'CDx submission date' },
		{ label: 'CDx approval date' }
	],
	level4Datas: [],
	level5Datas: [],
	level6Datas: []
}
