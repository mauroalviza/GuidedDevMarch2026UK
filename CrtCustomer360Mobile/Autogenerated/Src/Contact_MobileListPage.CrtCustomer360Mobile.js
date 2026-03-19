{
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "MainContainer",
			"values": {
				"gap": {
					"rowGap": "small"
				},
				"visible": true,
				"color": "transparent",
				"borderRadius": "none",
				"padding": {
					"top": "none",
					"right": "small",
					"bottom": "none",
					"left": "small"
				},
				"alignItems": "stretch"
			}
		},
		{
			"operation": "merge",
			"name": "HeaderContainer",
			"values": {
				"padding": {
					"left": "small",
					"top": 4,
					"bottom": 4,
					"right": "small"
				},
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"visible": true,
				"color": "transparent",
				"borderRadius": "none",
				"alignItems": "stretch",
				"justifyContent": "start"
			}
		},
		{
			"operation": "merge",
			"name": "FolderTreeActions",
			"values": {
				"sourceSchemaName": "ContactFolder",
				"visible": true,
				"rootSchemaName": "Contact"
			}
		},
		{
			"operation": "merge",
			"name": "QuickFilterGroup",
			"values": {
				"_filterOptions": {
					"expose": [
						{
							"attribute": "QuickFilterGroup_Filters",
							"converters": [
								{
									"converter": "crt.QuickFilterGroupAttributeConverter",
									"args": [
										{
											"target": {
												"viewAttributeName": "Items"
											}
										}
									]
								}
							]
						}
					],
					"from": "QuickFilterGroup_Value"
				}
			}
		},
		{
			"operation": "merge",
			"name": "ListContainer",
			"values": {
				"borderRadius": "large",
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 2,
					"rowSpan": 1
				},
				"visible": true,
				"padding": {
					"top": "none",
					"right": "none",
					"bottom": "none",
					"left": "none"
				},
				"alignItems": "stretch",
				"gap": {
					"rowGap": "none"
				}
			}
		},
		{
			"operation": "merge",
			"name": "List",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"visible": true
			}
		},
		{
			"operation": "merge",
			"name": "ListItem",
			"values": {
				"body": [
					{
						"value": "$PDS_Account"
					},
					{
						"value": "$PDS_JobTitle"
					},
					{
						"value": "$PDS_MobilePhone"
					}
				],
				"title": "$PDS_Name",
				"icon": "$PDS_Photo"
			}
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"attributes",
				"QuickFilterGroup_Value"
			],
			"values": {
				"modelConfig": {}
			}
		},
		{
			"operation": "merge",
			"path": [
				"attributes",
				"Items",
				"viewModelConfig",
				"attributes"
			],
			"values": {
				"PDS_Account": {
					"modelConfig": {
						"path": "PDS.Account"
					}
				},
				"PDS_JobTitle": {
					"modelConfig": {
						"path": "PDS.JobTitle"
					}
				},
				"PDS_MobilePhone": {
					"modelConfig": {
						"path": "PDS.MobilePhone"
					}
				},
				"PDS_Name": {
					"modelConfig": {
						"path": "PDS.Name"
					}
				},
				"PDS_Photo": {
					"modelConfig": {
						"path": "PDS.Photo"
					}
				},
				"PDS_Id": {
					"modelConfig": {
						"path": "PDS.Id"
					}
				}
			}
		},
		{
			"operation": "merge",
			"path": [
				"attributes",
				"Items",
				"modelConfig",
				"sortingConfig"
			],
			"values": {
				"default": [
					{
						"columnName": "Name",
						"direction": "asc"
					}
				]
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"dataSources",
				"PDS",
				"config"
			],
			"values": {
				"attributes": {
					"Account": {
						"path": "Account"
					},
					"JobTitle": {
						"path": "JobTitle"
					},
					"MobilePhone": {
						"path": "MobilePhone"
					},
					"Name": {
						"path": "Name"
					},
					"Photo": {
						"path": "Photo"
					}
				},
				"entitySchemaName": "Contact"
			}
		}
	]
}