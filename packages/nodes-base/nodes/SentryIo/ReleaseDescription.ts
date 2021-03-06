import {
	INodeProperties,
} from 'n8n-workflow';

export const releaseOperations = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'release',
				],
			},
		},
		options: [
			{
				name: 'Create',
				value: 'create',
				description: 'Create a release',
			},
			{
				name: 'Get',
				value: 'get',
				description: 'Get release by version identifier',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get all releases',
			},
		],
		default: 'get',
		description: 'The operation to perform',
	},
] as INodeProperties[];

export const releaseFields = [
	/* -------------------------------------------------------------------------- */
	/*                                release:getAll                                */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Organization Slug',
		name: 'organizationSlug',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getOrganizations',
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'release',
				],
				operation: [
					'getAll',
				],
			},
		},
		required: true,
		description: 'The slug of the organization the releases belong to',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'release',
				],
			},
		},
		default: false,
		description: 'If all results should be returned or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		displayOptions: {
			show: {
				operation: [
					'getAll',
				],
				resource: [
					'release',
				],
				returnAll: [
					false,
				],
			},
		},
		typeOptions: {
			minValue: 1,
			maxValue: 500,
		},
		default: 100,
		description: 'How many results to return',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'release',
				],
				operation: [
					'getAll',
				],
			},
		},
		options: [
			{
				displayName: 'Query',
				name: 'query',
				type: 'string',
				default: '',
				description: 'This parameter can be used to create a ???starts with??? filter for the version',
			},
		],
	},
	/* -------------------------------------------------------------------------- */
	/*                                release:get                                   */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Organization Slug',
		name: 'organizationSlug',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getOrganizations',
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'release',
				],
				operation: [
					'get',
				],
			},
		},
		required: true,
		description: 'The slug of the organization the release belongs to',
	},
	{
		displayName: 'Version',
		name: 'version',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'release',
				],
				operation: [
					'get',
				],
			},
		},
		required: true,
		description: 'The version identifier of the release',
	},
	/* -------------------------------------------------------------------------- */
	/*                                release:create                               */
	/* -------------------------------------------------------------------------- */
	{
		displayName: 'Organization Slug',
		name: 'organizationSlug',
		type: 'options',
		typeOptions: {
			loadOptionsMethod: 'getOrganizations',
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'release',
				],
				operation: [
					'create',
				],
			},
		},
		required: true,
		description: 'The slug of the organization the release belongs to',
	},
	{
		displayName: 'Version',
		name: 'version',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'release',
				],
				operation: [
					'create',
				],
			},
		},
		required: true,
		description: ' a version identifier for this release. Can be a version number, a commit hash etc',
	},
	{
		displayName: 'URL',
		name: 'url',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'release',
				],
				operation: [
					'create',
				],
			},
		},
		required: true,
		description: 'A URL that points to the release. This can be the path to an online interface to the sourcecode for instance',
	},
	{
		displayName: 'Projects',
		name: 'projects',
		type: 'multiOptions',
		typeOptions: {
			loadOptionsMethod: 'getProjects',
		},
		default: '',
		displayOptions: {
			show: {
				resource: [
					'release',
				],
				operation: [
					'create',
				],
			},
		},
		required: true,
		description: 'A list of project slugs that are involved in this release',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'release',
				],
				operation: [
					'create',
				],
			},
		},
		options: [
			{
				displayName: 'Date released',
				name: 'dateReleased',
				type: 'dateTime',
				default: '',
				description: 'an optional date that indicates when the release went live. If not provided the current time is assumed',
			},
			{
				displayName: 'Commits',
				name: 'commits',
				description: 'an optional list of commit data to be associated with the release',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: [
					{
						name: 'commitProperties',
						displayName: 'Commit Properties',
						values: [
							{
								displayName: 'Id',
								name: 'id',
								type: 'string',
								default: '',
								description: 'the sha of the commit',
								required: true,
							},
							{
								displayName: 'Author Email',
								name: 'authorEmail',
								type: 'string',
								default: '',
								description: 'Authors email',
							},
							{
								displayName: 'Author Name',
								name: 'authorName',
								type: 'string',
								default: '',
								description: 'Name of author',
							},
							{
								displayName: 'Message',
								name: 'message',
								type: 'string',
								default: '',
								description: 'Message of commit',
							},
							{
								displayName: 'Patch Set',
								name: 'patchSet',
								description: 'A list of the files that have been changed in the commit. Specifying the patch_set is necessary to power suspect commits and suggested assignees',
								type: 'fixedCollection',
								typeOptions: {
									multipleValues: true,
								},
								default: {},
								options: [
									{
										name: 'patchSetProperties',
										displayName: 'Patch Set Properties',
										values: [
											{
												displayName: 'Path',
												name: 'path',
												type: 'string',
												default: '',
												description: 'he path to the file. Both forward and backward slashes are supported',
												required: true,
											},
											{
												displayName: 'Type',
												name: 'type',
												type: 'options',
												default: '',
												description: 'he types of changes that happend in that commit',
												options: [
													{
														name: 'Add',
														value: 'add',
													},
													{
														name: 'Modify',
														value: 'modify',
													},
													{
														name: 'Delete',
														value: 'delete',
													},
												],
											},
										],
									},
								],
							},
							{
								displayName: 'Repository',
								name: 'repository',
								type: 'string',
								default: '',
								description: 'Repository name',
							},
							{
								displayName: 'Timestamp',
								name: 'timestamp',
								type: 'dateTime',
								default: '',
								description: 'Timestamp of commit',
							},
						],
					},
				],
			},
			{
				displayName: 'Refs',
				name: 'refs',
				description: 'an optional way to indicate the start and end commits for each repository included in a release',
				type: 'fixedCollection',
				typeOptions: {
					multipleValues: true,
				},
				default: {},
				options: [
					{
						name: 'refProperties',
						displayName: 'Ref Properties',
						values: [
							{
								displayName: 'Commit',
								name: 'commit',
								type: 'string',
								default: '',
								description: 'the head sha of the commit',
								required: true,
							},
							{
								displayName: 'Repository',
								name: 'repository',
								type: 'string',
								default: '',
								description: 'Repository name',
								required: true,
							},
							{
								displayName: 'Previous Commit',
								name: 'previousCommit',
								type: 'string',
								default: '',
								description: 'the sha of the HEAD of the previous release',
							},
						],
					},
				],
			},
		],
	},
] as INodeProperties[];
