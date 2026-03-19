{
	"viewConfigDiff": [
		{
			"operation": "merge",
			"name": "MainContainer",
			"values": {
				"columns": [
					"1fr"
				]
			}
		},
		{
			"operation": "merge",
			"name": "Tabs",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 2,
					"rowSpan": 1
				},
				"styleType": "default",
				"selectedTabTitleColor": "auto",
				"tabTitleColor": "auto",
				"underlineSelectedTabColor": "auto",
				"headerBackgroundColor": "auto",
				"allowToggleClose": true
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
			"name": "FeedTabContainer",
			"values": {
				"columns": [
					"1fr"
				]
			}
		},
		{
			"operation": "merge",
			"name": "Feed",
			"values": {
				"dataSourceName": "AccountDS",
				"entitySchemaName": "Account",
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
			"name": "AccountCompactProfile",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"type": "crt.AccountCompactProfile",
				"referenceColumn": "$Id",
				"readonly": false
			},
			"parentName": "MainContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "ProfileLabel",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"type": "crt.Label",
				"caption": "#ResourceString(ProfileLabel_caption)#",
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
			"name": "Owner",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 2,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.AccountDS_Owner",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$AccountDS_Owner",
				"visible": true,
				"readonly": false,
				"placeholder": "#ResourceString(Owner_placeholder)#"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 1
		},
		{
			"operation": "insert",
			"name": "PrimaryContact",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 3,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.AccountDS_PrimaryContact",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$AccountDS_PrimaryContact",
				"visible": true,
				"readonly": false,
				"placeholder": "#ResourceString(PrimaryContact_placeholder)#"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 2
		},
		{
			"operation": "insert",
			"name": "AccountCategory",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 4,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.AccountDS_AccountCategory",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$AccountDS_AccountCategory",
				"visible": true,
				"readonly": false,
				"placeholder": "#ResourceString(AccountCategory_placeholder)#"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 3
		},
		{
			"operation": "insert",
			"name": "Industry",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 5,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.AccountDS_Industry",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$AccountDS_Industry",
				"visible": true,
				"readonly": false,
				"placeholder": "#ResourceString(Industry_placeholder)#"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 4
		},
		{
			"operation": "insert",
			"name": "AccountCommunicationOptions",
			"values": {
				"type": "crt.CommunicationOptions",
				"readonly": false,
				"showNoDataPlaceholder": true,
				"labelPosition": "auto",
				"columnCount": 1,
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 6,
					"rowSpan": 1
				},
				"masterRecordColumnValue": "$Id",
				"masterRecordColumnName": "Account",
				"items": "$CommunicationOptions"
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 5
		},
		{
			"operation": "insert",
			"name": "AccountCommunicationOptionsAddButton",
			"values": {
				"type": "crt.Button",
				"caption": "#ResourceString(AccountCommunicationOptionsAddButton_caption)#",
				"icon": "add-button-icon",
				"iconPosition": "left-icon",
				"color": "default",
				"size": "small",
				"clicked": {
					"request": "crt.AddCommunicationOptionsRequest",
					"params": {
						"viewElementName": "AccountCommunicationOptions"
					}
				},
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 7,
					"rowSpan": 1
				},
				"visible": true
			},
			"parentName": "AreaProfileContainer",
			"propertyName": "items",
			"index": 6
		},
		{
			"operation": "insert",
			"name": "AccountInfoContainer",
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
			"name": "AccountInfoLabel",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 1,
					"rowSpan": 1
				},
				"type": "crt.Label",
				"caption": "#ResourceString(AccountInfoLabel_caption)#",
				"labelType": "headline-3",
				"labelThickness": "default",
				"labelEllipsis": false,
				"labelColor": "#0D2E4E",
				"visible": true
			},
			"parentName": "AccountInfoContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "AlternativeName",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 2,
					"rowSpan": 1
				},
				"type": "crt.Input",
				"label": "$Resources.Strings.AccountDS_AlternativeName",
				"control": "$AccountDS_AlternativeName",
				"placeholder": "#ResourceString(AlternativeName_placeholder)#",
				"readonly": false,
				"multiline": false,
				"labelPosition": "auto",
				"visible": true
			},
			"parentName": "AccountInfoContainer",
			"propertyName": "items",
			"index": 1
		},
		{
			"operation": "insert",
			"name": "AnnualRevenue",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 3,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.AccountDS_AnnualRevenue",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$AccountDS_AnnualRevenue",
				"placeholder": "#ResourceString(AnnualRevenue_placeholder)#"
			},
			"parentName": "AccountInfoContainer",
			"propertyName": "items",
			"index": 2
		},
		{
			"operation": "insert",
			"name": "Ownership",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 4,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.AccountDS_Ownership",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$AccountDS_Ownership",
				"visible": true,
				"readonly": false,
				"placeholder": "#ResourceString(Ownership_placeholder)#"
			},
			"parentName": "AccountInfoContainer",
			"propertyName": "items",
			"index": 3
		},
		{
			"operation": "insert",
			"name": "EmployeesNumber",
			"values": {
				"layoutConfig": {
					"column": 1,
					"colSpan": 1,
					"row": 5,
					"rowSpan": 1
				},
				"type": "crt.ComboBox",
				"label": "$Resources.Strings.AccountDS_EmployeesNumber",
				"ariaLabel": "",
				"isAddAllowed": true,
				"showValueAsLink": true,
				"labelPosition": "auto",
				"control": "$AccountDS_EmployeesNumber",
				"placeholder": "#ResourceString(EmployeesNumber_placeholder)#"
			},
			"parentName": "AccountInfoContainer",
			"propertyName": "items",
			"index": 4
		},
		{
			"operation": "insert",
			"name": "AccountAddressesDetailContainer",
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
				}
			},
			"parentName": "AccountAddressesDetailContainer",
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
						"viewElementName": "AccountAddressDetailList"
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
			"name": "AccountAddressDetailList",
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
				"items": "$AccountAddressDetailList",
				"itemSelected": {
					"request": "crt.OpenAddressOnMapRequest",
					"params": {
						"query": [
							"$AccountAddressDetailListDS_Address",
							"$AccountAddressDetailListDS_City",
							"$AccountAddressDetailListDS_Region",
							"$AccountAddressDetailListDS_Zip",
							"$AccountAddressDetailListDS_Country"
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
			"name": "AccountAddressDetailListItem",
			"values": {
				"type": "crt.AddressListItem",
				"body": [
					{
						"value": "$AccountAddressDetailListDS_Address"
					},
					{
						"value": "$AccountAddressDetailListDS_City"
					},
					{
						"value": "$AccountAddressDetailListDS_Region"
					},
					{
						"value": "$AccountAddressDetailListDS_Zip"
					},
					{
						"value": "$AccountAddressDetailListDS_Country"
					}
				],
				"title": "$AccountAddressDetailListDS_AddressType",
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
			"parentName": "AccountAddressDetailList",
			"propertyName": "itemLayout",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "AccountContactsContainer",
			"values": {
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
			"index": 3
		},
		{
			"operation": "insert",
			"name": "ContactsExpansionPanel",
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
				"title": "#ResourceString(ContactsExpansionPanel_title)#",
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
			"parentName": "AccountContactsContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "ContactsToolsContainer",
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
			"parentName": "ContactsExpansionPanel",
			"propertyName": "tools",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "AddContactsButton",
			"values": {
				"type": "crt.Button",
				"caption": "#ResourceString(AddContactsButton_caption)#",
				"color": "default",
				"disabled": false,
				"size": "medium",
				"iconPosition": "only-icon",
				"visible": true,
				"icon": "add-button-icon",
				"clicked": {
					"request": "crt.CreateRecordRequest",
					"params": {
						"entityName": "Contact",
						"defaultValues": [
							{
								"attributeName": "Account",
								"value": "$Id"
							}
						]
					}
				}
			},
			"parentName": "ContactsToolsContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "ContactsContainer",
			"values": {
				"type": "crt.GridContainer",
				"gap": {
					"rowGap": "small"
				},
				"alignItems": "stretch",
				"items": []
			},
			"parentName": "ContactsExpansionPanel",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "AccountContactsDetailList",
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
				"items": "$AccountContactsDetailList"
			},
			"parentName": "ContactsContainer",
			"propertyName": "items",
			"index": 0
		},
		{
			"operation": "insert",
			"name": "AccountContactsDetailListItem",
			"values": {
				"type": "crt.ListItem",
				"body": [
					{
						"value": "$AccountContactsDetailListDS_Name"
					},
					{
						"value": "$AccountContactsDetailListDS_Job"
					},
					{
						"value": "$AccountContactsDetailListDS_MobilePhone"
					},
					{
						"value": "$AccountContactsDetailListDS_Email"
					},
					{
						"value": "$AccountContactsDetailListDS_Address"
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
									"request": "crt.UpdateRecordRequest",
									"params": {
										"entityName": "Contact",
										"recordId": "$AccountContactsDetailListDS_Id"
									}
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
			"parentName": "AccountContactsDetailList",
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
				"visible": true
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
			"name": "AccountTimelineTabContainer",
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
			"parentName": "AccountTimelineTabContainer",
			"propertyName": "items",
			"index": 0
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
			"index": 0
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
			"index": 1
		},
		{
			"operation": "merge",
			"name": "AttachmentFileList",
			"values": {
				"masterRecordColumnValue": "$Id",
				"recordColumnName": "Account"
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
						"path": "AccountDS.Id"
					}
				},
				"AccountDS_Owner": {
					"modelConfig": {
						"path": "AccountDS.Owner"
					}
				},
				"AccountDS_PrimaryContact": {
					"modelConfig": {
						"path": "AccountDS.PrimaryContact"
					}
				},
				"AccountDS_AccountCategory": {
					"modelConfig": {
						"path": "AccountDS.AccountCategory"
					}
				},
				"AccountDS_Industry": {
					"modelConfig": {
						"path": "AccountDS.Industry"
					}
				},
				"CommunicationOptions": {
					"isCollection": true,
					"modelConfig": {
						"path": "AccountCommunicationOptionsDS",
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
							"AccountCommunicationOptionsDS_CreatedOn": {
								"modelConfig": {
									"path": "AccountCommunicationOptionsDS.CreatedOn"
								}
							},
							"AccountCommunicationOptionsDS_Number": {
								"modelConfig": {
									"path": "AccountCommunicationOptionsDS.Number"
								}
							},
							"AccountCommunicationOptionsDS_Primary": {
								"modelConfig": {
									"path": "AccountCommunicationOptionsDS.Primary"
								}
							},
							"AccountCommunicationOptionsDS_NonActual": {
								"modelConfig": {
									"path": "AccountCommunicationOptionsDS.NonActual"
								}
							},
							"AccountCommunicationOptionsDS_CommunicationType": {
								"modelConfig": {
									"path": "AccountCommunicationOptionsDS.CommunicationType"
								}
							},
							"AccountCommunicationOptionsDS_CommunicationTypeDisplayFormat": {
								"modelConfig": {
									"path": "AccountCommunicationOptionsDS.CommunicationTypeDisplayFormat"
								}
							},
							"AccountCommunicationOptionsDS_CommunicationTypeName": {
								"modelConfig": {
									"path": "AccountCommunicationOptionsDS.CommunicationTypeName"
								}
							},
							"AccountCommunicationOptionsDS_Id": {
								"modelConfig": {
									"path": "AccountCommunicationOptionsDS.Id"
								}
							}
						}
					}
				},
				"AccountDS_AlternativeName": {
					"modelConfig": {
						"path": "AccountDS.AlternativeName"
					}
				},
				"AccountDS_AnnualRevenue": {
					"modelConfig": {
						"path": "AccountDS.AnnualRevenue"
					}
				},
				"AccountDS_Ownership": {
					"modelConfig": {
						"path": "AccountDS.Ownership"
					}
				},
				"AccountDS_EmployeesNumber": {
					"modelConfig": {
						"path": "AccountDS.EmployeesNumber"
					}
				},
				"AccountAddressDetailList": {
					"isCollection": true,
					"modelConfig": {
						"path": "AccountAddressDetailListDS",
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
							"AccountAddressDetailListDS_AddressType": {
								"modelConfig": {
									"path": "AccountAddressDetailListDS.AddressType"
								}
							},
							"AccountAddressDetailListDS_Address": {
								"modelConfig": {
									"path": "AccountAddressDetailListDS.Address"
								}
							},
							"AccountAddressDetailListDS_City": {
								"modelConfig": {
									"path": "AccountAddressDetailListDS.City"
								}
							},
							"AccountAddressDetailListDS_Region": {
								"modelConfig": {
									"path": "AccountAddressDetailListDS.Region"
								}
							},
							"AccountAddressDetailListDS_Country": {
								"modelConfig": {
									"path": "AccountAddressDetailListDS.Country"
								}
							},
							"AccountAddressDetailListDS_Zip": {
								"modelConfig": {
									"path": "AccountAddressDetailListDS.Zip"
								}
							},
							"AccountAddressDetailListDS_Id": {
								"modelConfig": {
									"path": "AccountAddressDetailListDS.Id"
								}
							}
						}
					}
				},
				"AccountContactsDetailList": {
					"isCollection": true,
					"modelConfig": {
						"path": "AccountContactsDetailListDS",
						"sortingConfig": {
							"default": [
								{
									"columnName": "Name",
									"direction": "asc"
								}
							]
						}
					},
					"viewModelConfig": {
						"attributes": {
							"AccountContactsDetailListDS_Name": {
								"modelConfig": {
									"path": "AccountContactsDetailListDS.Name"
								}
							},
							"AccountContactsDetailListDS_Job": {
								"modelConfig": {
									"path": "AccountContactsDetailListDS.Job"
								}
							},
							"AccountContactsDetailListDS_MobilePhone": {
								"modelConfig": {
									"path": "AccountContactsDetailListDS.MobilePhone"
								}
							},
							"AccountContactsDetailListDS_Email": {
								"modelConfig": {
									"path": "AccountContactsDetailListDS.Email"
								}
							},
							"AccountContactsDetailListDS_Address": {
								"modelConfig": {
									"path": "AccountContactsDetailListDS.Address"
								}
							},
							"AccountContactsDetailListDS_Id": {
								"modelConfig": {
									"path": "AccountContactsDetailListDS.Id"
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
				"primaryDataSourceName": "AccountDS",
				"dependencies": {
					"AccountAddressDetailListDS": [
						{
							"attributePath": "Account",
							"relationPath": "AccountDS.Id"
						}
					],
					"AccountContactsDetailListDS": [
						{
							"attributePath": "Account",
							"relationPath": "AccountDS.Id"
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
				"entitySchemaName": "AccountFile"
			}
		},
		{
			"operation": "merge",
			"path": [
				"dataSources"
			],
			"values": {
				"AccountDS": {
					"type": "crt.EntityDataSource",
					"scope": "page",
					"config": {
						"entitySchemaName": "Account",
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
				"AccountCommunicationOptionsDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "AccountCommunication",
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
				"AccountAddressDetailListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "AccountAddress",
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
				"AccountContactsDetailListDS": {
					"type": "crt.EntityDataSource",
					"scope": "viewElement",
					"config": {
						"entitySchemaName": "Contact",
						"attributes": {
							"Name": {
								"path": "Name"
							},
							"Job": {
								"path": "Job"
							},
							"MobilePhone": {
								"path": "MobilePhone"
							},
							"Email": {
								"path": "Email"
							},
							"Address": {
								"path": "Address"
							}
						}
					}
				}
			}
		}
	]
}