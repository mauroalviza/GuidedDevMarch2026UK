{
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "Tabs",
			"values": {
				"styleType": "default",
				"selectedTabTitleColor": "auto",
				"tabTitleColor": "auto",
				"underlineSelectedTabColor": "auto",
				"headerBackgroundColor": "auto",
				"allowToggleClose": true,
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 2,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "merge",
			"name": "GeneralTabContainer",
			"values": {
				"adaptive": {
					"small": {
						"columns": [
							"1fr"
						]
					},
					"medium": {
						"columns": [
							"1fr",
							"1fr"
						]
					},
					"large": {
						"columns": [
							"3fr",
							"7fr"
						]
					}
				}
			}
		},
		{
			"operation": "merge",
			"name": "AreaProfileContainer",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1,
					"adaptive": {
						"small": {
							"column": 1,
							"row": 1,
							"colSpan": 1,
							"rowSpan": 1
						},
						"medium": {
							"column": 1,
							"row": 1,
							"colSpan": 1,
							"rowSpan": 1
						},
						"large": {
							"column": 1,
							"row": 1,
							"colSpan": 1,
							"rowSpan": 1
						}
					}
				}
			}
		},
		{
			"operation": "merge",
			"name": "Feed",
			"values": {
				"dataSourceName": "ContactDS",
				"entitySchemaName": "Contact"
			}
		},
		{
			"operation": "merge",
			"name": "AttachmentsContainer",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "merge",
			"name": "AttachmentsHeaderContainer",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "merge",
			"name": "AttachmentFileList",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 2,
					"rowSpan": 1
				}
			}
		},
		{
			"operation": "insert",
			"name": "ContactCompactProfile",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"type": "crt.ContactCompactProfile",
				"referenceColumn": "$Id",
				"readonly": false
			},
			"parentName": "MainContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "ContactProfileLabel",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"type": "crt.Label",
				"caption": "#ResourceString(ContactProfileLabel_caption)#",
				"labelType": "headline-3",
				"labelThickness": "default",
				"labelEllipsis": false,
				"labelColor": "#0D2E4E",
				"visible": true
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "Account",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 2,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.ContactDS_Account",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$ContactDS_Account",
				"visible": true,
				"readonly": false,
				"placeholder": "#ResourceString(Account_placeholder)#"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 1
		},
		{
			"operation": "insert",
			"name": "FullJobTitle",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 3,
					"rowSpan": 1
				},
				"type": "crt.Input",
				"label": "$Resources.Strings.ContactDS_JobTitle",
				"control": "$ContactDS_JobTitle",
				"placeholder": "#ResourceString(FullJobTitle_placeholder)#",
				"readonly": false,
				"multiline": false,
				"labelPosition": "auto",
				"visible": true
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 2
		},
		{
			"operation": "insert",
			"name": "ContactCommunicationOptions",
			"values": {
				"type": "crt.CommunicationOptions",
				"readonly": false,
				"showNoDataPlaceholder": true,
				"labelPosition": "auto",
				"columnCount": 1,
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 4,
					"rowSpan": 1
				},
				"items": "$CommunicationOptions",
				"masterRecordColumnValue": "$Id",
				"masterRecordColumnName": "Contact"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 3
		},
		{
			"operation": "insert",
			"name": "ContactCommunicationOptionsAddButton",
			"values": {
				"type": "crt.Button",
				"caption": "#ResourceString(ContactCommunicationOptionsAddButton_caption)#",
				"icon": "add-button-icon",
				"iconPosition": "left-icon",
				"color": "default",
				"size": "small",
				"clicked": {
					"request": "crt.AddCommunicationOptionsRequest",
					"params": {
						"viewElementName": "ContactCommunicationOptions"
					}
				},
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 5,
					"rowSpan": 1
				},
				"visible": true
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 4
		},
		{
			"operation": "insert",
			"name": "ContactInfoFieldsContainer",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 2,
					"rowSpan": 1,
					"adaptive": {
						"small": {
							"column": 1,
							"row": 2,
							"colSpan": 1,
							"rowSpan": 1
						},
						"medium": {
							"column": 2,
							"row": 1,
							"colSpan": 1,
							"rowSpan": 1
						},
						"large": {
							"column": 2,
							"row": 1,
							"colSpan": 1,
							"rowSpan": 1
						}
					}
				},
				"type": "crt.GridContainer",
				"padding": {
					"top": "medium",
					"bottom": "medium",
					"right": "medium",
					"left": "medium"
				},
				"color": "primary",
				"borderRadius": "medium",
				"gap": {
					"rowGap": "medium"
				},
				"alignItems": "stretch",
				"items": []
			},
			"parentName": "GeneralTabContainer",
			"propertyName": "items",
			"index": 1
		},
		{
			"operation": "insert",
			"name": "ContactInfoLabel",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"type": "crt.Label",
				"caption": "#ResourceString(ContactInfoLabel_caption)#",
				"labelType": "headline-3",
				"labelThickness": "default",
				"labelEllipsis": false,
				"labelColor": "#0D2E4E",
				"visible": true
			},
			"parentName": "ContactInfoFieldsContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "Type",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 2,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.ContactDS_Type",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$ContactDS_Type",
				"placeholder": "#ResourceString(Type_placeholder)#"
			},
			"parentName": "ContactInfoFieldsContainer",
			"propertyName": "items",
			"index": 1
		},
		{
			"operation": "insert",
			"name": "Owner",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 3,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.ContactDS_Owner",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$ContactDS_Owner",
				"visible": true,
				"readonly": false,
				"placeholder": "#ResourceString(Owner_placeholder)#"
			},
			"parentName": "ContactInfoFieldsContainer",
			"propertyName": "items",
			"index": 2
		},
		{
			"operation": "insert",
			"name": "Dear",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 4,
					"rowSpan": 1
				},
				"type": "crt.Input",
				"label": "$Resources.Strings.ContactDS_Dear",
				"control": "$ContactDS_Dear",
				"placeholder": "#ResourceString(Dear_placeholder)#",
				"readonly": false,
				"multiline": false,
				"labelPosition": "auto",
				"visible": true
			},
			"parentName": "ContactInfoFieldsContainer",
			"propertyName": "items",
			"index": 3
		},
		{
			"operation": "insert",
			"name": "Gender",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 5,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.ContactDS_Gender",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$ContactDS_Gender",
				"visible": true,
				"readonly": false,
				"placeholder": "#ResourceString(Gender_placeholder)#"
			},
			"parentName": "ContactInfoFieldsContainer",
			"propertyName": "items",
			"index": 4
		},
		{
			"operation": "insert",
			"name": "SalutationType",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 6,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.ContactDS_SalutationType",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$ContactDS_SalutationType",
				"visible": true,
				"readonly": false,
				"placeholder": "#ResourceString(SalutationType_placeholder)#"
			},
			"parentName": "ContactInfoFieldsContainer",
			"propertyName": "items",
			"index": 5
		},
		{
			"operation": "insert",
			"name": "Language",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 7,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.ContactDS_Language",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$ContactDS_Language",
				"visible": true,
				"readonly": false,
				"placeholder": "#ResourceString(Language_placeholder)#"
			},
			"parentName": "ContactInfoFieldsContainer",
			"propertyName": "items",
			"index": 6
		},
		{
			"operation": "insert",
			"name": "ContactAddressesDetailContainer",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 3,
					"rowSpan": 1,
					"adaptive": {
						"small": {
							"column": 1,
							"row": 3,
							"colSpan": 1,
							"rowSpan": 1
						},
						"medium": {
							"column": 1,
							"row": 2,
							"colSpan": 1,
							"rowSpan": 1
						},
						"large": {
							"column": 1,
							"row": 2,
							"colSpan": 1,
							"rowSpan": 1
						}
					}
				},
				"type": "crt.GridContainer",
				"padding": {
					"top": "none",
					"bottom": "medium",
					"right": "medium",
					"left": "medium"
				},
				"color": "primary",
				"borderRadius": "medium",
				"gap": {
					"rowGap": "medium"
				},
				"alignItems": "stretch",
				"items": [],
				"visible": true
			},
			"parentName": "GeneralTabContainer",
			"propertyName": "items",
			"index": 2
		},
		{
			"operation": "insert",
			"name": "AddressesExpansionPanel",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"type": "crt.ExpansionPanel",
				"tools": [],
				"items": [],
				"title": "#ResourceString(AddressesExpansionPanel_title)#",
				"expanded": true,
				"padding": {
					"top": "small",
					"bottom": "small",
					"left": "none",
					"right": "none"
				},
				"visible": true,
				"alignItems": "stretch"
			},
			"parentName": "ContactAddressesDetailContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "AddressToolsContainer",
			"values": {
				"type": "crt.FlexContainer",
				"justifyContent": "end",
				"direction": "row",
				"gap": "none",
				"styles": {
					"overflow-x": "hidden"
				},
				"alignItems": "center",
				"items": []
			},
			"parentName": "AddressesExpansionPanel",
			"propertyName": "tools",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "AddAddressesButton",
			"values": {
				"type": "crt.Button",
				"caption": "#ResourceString(AddAddressesButton_caption)#",
				"color": "default",
				"disabled": false,
				"size": "medium",
				"iconPosition": "only-icon",
				"visible": true,
				"icon": "add-button-icon",
				"clicked": {
					"request": "crt.CreateListItemRequest",
					"params": {
						"viewElementName": "ContactAddressDetailList"
					}
				}
			},
			"parentName": "AddressToolsContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "AddressesContainer",
			"values": {
				"type": "crt.GridContainer",
				"gap": {
					"rowGap": "small"
				},
				"alignItems": "stretch",
				"items": []
			},
			"parentName": "AddressesExpansionPanel",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "ContactAddressDetailList",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"type": "crt.List",
				"itemLayout": {},
				"scrollable": false,
				"items": "$ContactAddressDetailList",
				"itemSelected": {
					"request": "crt.OpenAddressOnMapRequest",
					"params": {
						"query": [
							"$ContactAddressDS_Address",
							"$ContactAddressDS_City",
							"$ContactAddressDS_Region",
							"$ContactAddressDS_Zip",
							"$ContactAddressDS_Country"
						]
					}
				}
			},
			"parentName": "AddressesContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "ContactAddressDetailListItem",
			"values": {
				"type": "crt.AddressListItem",
				"body": [
					{
						"value": "$ContactAddressDS_Address"
					},
					{
						"value": "$ContactAddressDS_City"
					},
					{
						"value": "$ContactAddressDS_Region"
					},
					{
						"value": "$ContactAddressDS_Zip"
					},
					{
						"value": "$ContactAddressDS_Country"
					}
				],
				"title": "$ContactAddressDS_AddressType",
				"icon": null,
				"subtitles": [],
				"actions": [
					{
						"type": "crt.Button",
						"caption": "",
						"size": "small",
						"iconPosition": "only-icon",
						"icon": "more-button-icon",
						"menuDisplayType": "popup",
						"menuItems": [
							{
								"type": "crt.MenuItem",
								"caption": "#ResourceString(DetailEditMenu_caption)#",
								"clicked": {
									"request": "crt.UpdateListItemRequest"
								}
							},
							{
								"type": "crt.MenuItem",
								"caption": "#ResourceString(DetailDeleteMenu_caption)#",
								"clicked": {
									"request": "crt.DeleteListItemRequest"
								}
							}
						]
					}
				]
			},
			"parentName": "ContactAddressDetailList",
			"propertyName": "itemLayout",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "ContactJobExperienceContainer",
			"values": {
				"type": "crt.GridContainer",
				"padding": {
					"top": "none",
					"bottom": "medium",
					"right": "medium",
					"left": "medium"
				},
				"color": "primary",
				"borderRadius": "medium",
				"gap": {
					"rowGap": "medium"
				},
				"alignItems": "stretch",
				"items": [],
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 4,
					"rowSpan": 1,
					"adaptive": {
						"small": {
							"column": 1,
							"row": 4,
							"colSpan": 1,
							"rowSpan": 1
						},
						"medium": {
							"column": 2,
							"row": 2,
							"colSpan": 1,
							"rowSpan": 1
						},
						"large": {
							"column": 2,
							"row": 2,
							"colSpan": 1,
							"rowSpan": 1
						}
					}
				},
				"visible": true
			},
			"parentName": "GeneralTabContainer",
			"propertyName": "items",
			"index": 3
		},
		{
			"operation": "insert",
			"name": "JobExperienceExpansionPanel",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"type": "crt.ExpansionPanel",
				"tools": [],
				"items": [],
				"title": "#ResourceString(JobExperienceExpansionPanel_title)#",
				"expanded": true,
				"padding": {
					"top": "small",
					"bottom": "small",
					"left": "none",
					"right": "none"
				},
				"visible": true,
				"alignItems": "stretch"
			},
			"parentName": "ContactJobExperienceContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "JobExperienceToolsContainer",
			"values": {
				"type": "crt.FlexContainer",
				"justifyContent": "end",
				"direction": "row",
				"gap": "none",
				"styles": {
					"overflow-x": "hidden"
				},
				"alignItems": "center",
				"items": []
			},
			"parentName": "JobExperienceExpansionPanel",
			"propertyName": "tools",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "AddJobExperinceButton",
			"values": {
				"type": "crt.Button",
				"caption": "#ResourceString(AddJobExperinceButton_caption)#",
				"color": "default",
				"disabled": false,
				"size": "medium",
				"iconPosition": "only-icon",
				"visible": true,
				"icon": "add-button-icon",
				"clicked": {
					"request": "crt.CreateListItemRequest",
					"params": {
						"viewElementName": "ContactJobExperienceDetailList"
					}
				}
			},
			"parentName": "JobExperienceToolsContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "JobExperinceContainer",
			"values": {
				"type": "crt.GridContainer",
				"gap": {
					"rowGap": "small"
				},
				"alignItems": "stretch",
				"items": []
			},
			"parentName": "JobExperienceExpansionPanel",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "ContactJobExperienceDetailList",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"type": "crt.List",
				"itemLayout": {},
				"scrollable": false,
				"items": "$JobExperienceDetailList"
			},
			"parentName": "JobExperinceContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "ContactJobExperienceDetailListItem",
			"values": {
				"type": "crt.ListItem",
				"body": [
					{
						"value": "$JobExperienceDetailListDS_Account"
					},
					{
						"value": "$JobExperienceDetailListDS_Job"
					},
					{
						"value": "$JobExperienceDetailListDS_Department"
					},
					{
						"value": "$JobExperienceDetailListDS_Primary"
					},
					{
						"value": "$JobExperienceDetailListDS_StartDate"
					}
				],
				"title": null,
				"icon": null,
				"subtitles": [],
				"actions": [
					{
						"type": "crt.Button",
						"caption": "",
						"size": "small",
						"iconPosition": "only-icon",
						"icon": "more-button-icon",
						"menuDisplayType": "popup",
						"menuItems": [
							{
								"type": "crt.MenuItem",
								"caption": "#ResourceString(DetailEditMenu_caption)#",
								"clicked": {
									"request": "crt.UpdateListItemRequest"
								}
							},
							{
								"type": "crt.MenuItem",
								"caption": "#ResourceString(DetailDeleteMenu_caption)#",
								"clicked": {
									"request": "crt.DeleteListItemRequest"
								}
							}
						]
					}
				]
			},
			"parentName": "ContactJobExperienceDetailList",
			"propertyName": "itemLayout",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "TimelineTab",
			"values": {
				"type": "crt.TabContainer",
				"items": [],
				"caption": "#ResourceString(TimelineTab_caption)#",
				"iconPosition": "only-text",
				"visible": "$PrimaryModelMode | crt.IsEqual : 'update'"
			},
			"parentName": "Tabs",
			"propertyName": "items",
			"index": 1
		},
		{
			"operation": "insert",
			"name": "TimelineTabContainer",
			"values": {
				"type": "crt.GridContainer",
				"gap": {
					"rowGap": "small"
				},
				"alignItems": "stretch",
				"items": [],
				"padding": {
					"bottom": "medium"
				}
			},
			"parentName": "TimelineTab",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "ContactTimelineTabContainer",
			"values": {
				"type": "crt.GridContainer",
				"padding": {
					"top": "none",
					"bottom": "none",
					"right": "none",
					"left": "none"
				},
				"color": "primary",
				"borderRadius": "medium",
				"gap": {
					"rowGap": "medium"
				},
				"alignItems": "stretch",
				"items": [],
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				}
			},
			"parentName": "TimelineTabContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "Timeline",
			"values": {
				"layoutConfig": {
					"column": 1,
					"row": 1
				},
				"itemPadding": {
					"left": "medium",
					"right": "medium",
					"top": "medium",
					"bottom": "medium"
				},
				"type": "crt.Timeline",
				"items": [],
				"masterSchemaId": "$Id",
				"caption": "#ResourceString(Timeline_caption)#",
				"timelineName": "Timeline",
				"tools": [],
				"filters": [],
				"filterValues": "$Timeline_AllTileFilters"
			},
			"parentName": "ContactTimelineTabContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "TimelineTile_Email",
			"values": {
				"type": "crt.TimelineTile",
				"linkedColumn": "Contact",
				"sortedByColumn": "SendDate",
				"ownerColumn": "SenderContact",
				"data": {
					"uId": "c449d832-a4cc-4b01-b9d5-8a12c42a9f89",
					"schemaName": "Activity",
					"schemaType": "Email",
					"filter": {
						"columnName": "Type",
						"columnValue": "e2831dec-cfc0-df11-b00f-001d60e938c6"
					}
				},
				"visible": true,
				"filters": "$TimelineTile_Email_Items"
			},
			"parentName": "Timeline",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "TimelineTile_Call",
			"values": {
				"type": "crt.TimelineTile",
				"linkedColumn": "Contact",
				"sortedByColumn": "StartDate",
				"ownerColumn": "CreatedBy",
				"data": {
					"uId": "2f81fa05-11ae-400d-8e07-5ef6a620d1ad",
					"schemaName": "Call",
					"schemaType": null,
					"filter": null,
					"columns": [
						{
							"columnName": "StartDate"
						},
						{
							"columnName": "EndDate"
						},
						{
							"columnName": "Direction"
						},
						{
							"columnName": "Duration"
						}
					]
				},
				"visible": true,
				"filters": "$TimelineTile_Call_Items"
			},
			"parentName": "Timeline",
			"propertyName": "items",
			"index": 1
		},
		{
			"operation": "insert",
			"name": "TimelineTile_SysFile",
			"values": {
				"type": "crt.TimelineTile",
				"sortedByColumn": "CreatedOn",
				"data": {
					"schemaType": "SysFile"
				},
				"visible": true,
				"ownerColumn": "CreatedBy",
				"filters": "$TimelineTile_SysFile_Items"
			},
			"parentName": "Timeline",
			"propertyName": "items",
			"index": 2
		},
		{
			"operation": "insert",
			"name": "TimelineTile_Feed",
			"values": {
				"type": "crt.TimelineTile",
				"sortedByColumn": "CreatedOn",
				"data": {
					"schemaType": "Feed"
				},
				"visible": true,
				"linkedColumn": "Contact",
				"ownerColumn": "CreatedBy"
			},
			"parentName": "Timeline",
			"propertyName": "items",
			"index": 3
		},
		{
			"operation": "merge",
			"name": "AttachmentFileList",
			"values": {
				"masterRecordColumnValue": "$Id",
				"recordColumnName": "Contact"
			}
		}
	],
	"viewModelConfigDiff": [
		{
			"operation": "merge",
			"path": [
				"attributes"
			],
			"values": {
				"Id": {
					"modelConfig": {
						"path": "ContactDS.Id"
					}
				},
				"ContactDS_Account": {
					"modelConfig": {
						"path": "ContactDS.Account"
					}
				},
				"ContactDS_JobTitle": {
					"modelConfig": {
						"path": "ContactDS.JobTitle"
					}
				},
				"CommunicationOptions": {
					"isCollection": true,
					"modelConfig": {
						"path": "ContactCommunicationOptionsDS",
						"sortingConfig": {
							"default": [
								{
									"columnName": "CreatedOn",
									"direction": "asc"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"ContactCommunicationOptionsDS_CreatedOn": {
								"modelConfig": {
									"path": "ContactCommunicationOptionsDS.CreatedOn"
								}
							},
							"ContactCommunicationOptionsDS_Number": {
								"modelConfig": {
									"path": "ContactCommunicationOptionsDS.Number"
								}
							},
							"ContactCommunicationOptionsDS_Primary": {
								"modelConfig": {
									"path": "ContactCommunicationOptionsDS.Primary"
								}
							},
							"ContactCommunicationOptionsDS_NonActual": {
								"modelConfig": {
									"path": "ContactCommunicationOptionsDS.NonActual"
								}
							},
							"ContactCommunicationOptionsDS_CommunicationType": {
								"modelConfig": {
									"path": "ContactCommunicationOptionsDS.CommunicationType"
								}
							},
							"ContactCommunicationOptionsDS_CommunicationTypeDisplayFormat": {
								"modelConfig": {
									"path": "ContactCommunicationOptionsDS.CommunicationTypeDisplayFormat"
								}
							},
							"ContactCommunicationOptionsDS_CommunicationTypeName": {
								"modelConfig": {
									"path": "ContactCommunicationOptionsDS.CommunicationTypeName"
								}
							},
							"ContactCommunicationOptionsDS_Id": {
								"modelConfig": {
									"path": "ContactCommunicationOptionsDS.Id"
								}
							}
						}
					}
				},
				"ContactDS_Type": {
					"modelConfig": {
						"path": "ContactDS.Type"
					}
				},
				"ContactDS_Owner": {
					"modelConfig": {
						"path": "ContactDS.Owner"
					}
				},
				"ContactDS_Dear": {
					"modelConfig": {
						"path": "ContactDS.Dear"
					}
				},
				"ContactDS_Gender": {
					"modelConfig": {
						"path": "ContactDS.Gender"
					}
				},
				"ContactDS_SalutationType": {
					"modelConfig": {
						"path": "ContactDS.SalutationType"
					}
				},
				"ContactDS_Language": {
					"modelConfig": {
						"path": "ContactDS.Language"
					}
				},
				"ContactAddressDetailList": {
					"isCollection": true,
					"modelConfig": {
						"path": "ContactAddressDS",
						"sortingConfig": {
							"default": [
								{
									"columnName": "AddressType",
									"direction": "asc"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"ContactAddressDS_AddressType": {
								"modelConfig": {
									"path": "ContactAddressDS.AddressType"
								}
							},
							"ContactAddressDS_Address": {
								"modelConfig": {
									"path": "ContactAddressDS.Address"
								}
							},
							"ContactAddressDS_City": {
								"modelConfig": {
									"path": "ContactAddressDS.City"
								}
							},
							"ContactAddressDS_Region": {
								"modelConfig": {
									"path": "ContactAddressDS.Region"
								}
							},
							"ContactAddressDS_Country": {
								"modelConfig": {
									"path": "ContactAddressDS.Country"
								}
							},
							"ContactAddressDS_Zip": {
								"modelConfig": {
									"path": "ContactAddressDS.Zip"
								}
							},
							"ContactAddressDS_Id": {
								"modelConfig": {
									"path": "ContactAddressDS.Id"
								}
							}
						}
					}
				},
				"JobExperienceDetailList": {
					"isCollection": true,
					"modelConfig": {
						"path": "JobExperienceDetailListDS",
						"sortingConfig": {
							"default": [
								{
									"columnName": "Account",
									"direction": "asc"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"JobExperienceDetailListDS_Account": {
								"modelConfig": {
									"path": "JobExperienceDetailListDS.Account"
								}
							},
							"JobExperienceDetailListDS_Job": {
								"modelConfig": {
									"path": "JobExperienceDetailListDS.Job"
								}
							},
							"JobExperienceDetailListDS_Department": {
								"modelConfig": {
									"path": "JobExperienceDetailListDS.Department"
								}
							},
							"JobExperienceDetailListDS_Primary": {
								"modelConfig": {
									"path": "JobExperienceDetailListDS.Primary"
								}
							},
							"JobExperienceDetailListDS_StartDate": {
								"modelConfig": {
									"path": "JobExperienceDetailListDS.StartDate"
								}
							},
							"JobExperienceDetailListDS_Id": {
								"modelConfig": {
									"path": "JobExperienceDetailListDS.Id"
								}
							}
						}
					}
				},
				"Timeline_AllTileFilters": {
					"from": [],
					"converter": "crt.ToTileFilterGroup"
				}
			}
		}
	],
	"modelConfigDiff": [
		{
			"operation": "merge",
			"path": [],
			"values": {
				"primaryDataSourceName": "ContactDS",
				"dependencies": {
					"ContactAddressDS": [
						{
							"attributePath": "Contact",
							"relationPath": "ContactDS.Id"
						}
					],
					"JobExperienceDetailListDS": [
						{
							"attributePath": "Contact",
							"relationPath": "ContactDS.Id"
						}
					]
				}
			}
		},
		{
			"operation": "merge",
			"path": [
				"dataSources",
				"AttachmentListDS",
				"config"
			],
			"values": {
				"entitySchemaName": "ContactFile"
			}
		},
		{
			"operation": "merge",
			"path": [
				"dataSources"
			],
			"values": {
				"ContactDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "Contact",
						"loadParameters": {
							"options": {
								"pagingConfig": {
									"rowCount": 1,
									"rowsOffset": -1
								},
								"sortingConfig": {
									"columns": []
								}
							}
						},
						"allowCopyingRecords": false
					}
				},
				"ContactCommunicationOptionsDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "ContactCommunication",
						"attributes": {
							"CreatedOn": {
								"path": "CreatedOn"
							},
							"Number": {
								"path": "Number"
							},
							"Primary": {
								"path": "Primary"
							},
							"NonActual": {
								"path": "NonActual"
							},
							"CommunicationType": {
								"path": "CommunicationType"
							},
							"CommunicationTypeDisplayFormat": {
								"type": "ForwardReference",
								"path": "CommunicationType.DisplayFormat"
							},
							"CommunicationTypeName": {
								"type": "ForwardReference",
								"path": "CommunicationType.Name"
							}
						}
					}
				},
				"ContactAddressDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "ContactAddress",
						"attributes": {
							"Address": {
								"path": "Address"
							},
							"City": {
								"path": "City"
							},
							"Region": {
								"path": "Region"
							},
							"Zip": {
								"path": "Zip"
							},
							"Country": {
								"path": "Country"
							},
							"AddressType": {
								"path": "AddressType"
							}
						}
					}
				},
				"JobExperienceDetailListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "ContactCareer",
						"attributes": {
							"Account": {
								"path": "Account"
							},
							"Job": {
								"path": "Job"
							},
							"Department": {
								"path": "Department"
							},
							"Primary": {
								"path": "Primary"
							},
							"StartDate": {
								"path": "StartDate"
							}
						}
					}
				}
			}
		}
	]
}