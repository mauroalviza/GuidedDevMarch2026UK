define("UsrYacht_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "24bfc80c-73d8-426e-80fa-b1dc41dce02b",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "ButtonCalculateAvgPrice",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(ButtonCalculateAvgPrice_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"menuItems": [],
					"clickMode": "menu",
					"visible": true,
					"icon": "actions-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItemCalculatePrice",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItemCalculatePrice_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAverageTicketPriceProcess",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"notificationText": "#ResourceString(MenuItemCalculatePrice_clicked_params_notificationText)#",
							"recordIdProcessParameterName": "YachtIdParameter"
						}
					},
					"icon": "calculator-icon"
				},
				"parentName": "ButtonCalculateAvgPrice",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "copilot-rewrite-friendly-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_mgw30tp",
					"control": "$PDS_UsrPrice_mgw30tp",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_sr8l17v",
					"control": "$PDS_UsrTicketPrice_sr8l17v",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_nehkj0f",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_nehkj0f",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_r42dzyu",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_r42dzyu",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_zsm165q",
					"control": "$PDS_UsrComment_zsm165q",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_abqa1l4",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_abqa1l4",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PassgenresCountint",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCountInt_3ukw51z",
					"control": "$PDS_UsrPassengersCountInt_3ukw51z",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ManagerEmail",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(ManagerEmail_label)#",
					"control": "$PDS_UsrManagerEmail_0i4g6gq",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Country",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_81bvidw",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCountry_81bvidw",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_17vuate",
					"control": "$PDS_UsrNumber_17vuate",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "City",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_bdymh14",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCity_bdymh14",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "CategoriesMultiSelect",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(CategoriesMultiSelect_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacht",
					"selectSchemaName": "UsrYachtCategoriesStorage",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_g7l7op4",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_g7l7op4_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_vwxfkxh",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_g7l7op4",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_ucomed8",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_vwxfkxh",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_i0zehif",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_i0zehif_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_ucomed8",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_3mt4cgj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_3mt4cgj_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_o74l8srDS"
						}
					}
				},
				"parentName": "FlexContainer_ucomed8",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_z1po19t",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_z1po19t_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_ucomed8",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_usapu3w",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_usapu3w_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "YachtRentalGridDetail"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_z1po19t",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_rkdhquf",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_rkdhquf_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_z1po19t",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_r1kpkmf",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_r1kpkmf_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_r1kpkmf_GridDetail_o74l8sr",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_o74l8sr"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_r1kpkmf_SearchValue",
							"GridDetailSearchFilter_r1kpkmf_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_ucomed8",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_ynskqbs",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_g7l7op4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "YachtRentalGridDetail",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_o74l8sr",
					"activeRow": "$GridDetail_o74l8sr_ActiveRow",
					"selectionState": "$GridDetail_o74l8sr_SelectionState",
					"_selectionOptions": {
						"attribute": "GridDetail_o74l8sr_SelectionState"
					},
					"primaryColumnName": "GridDetail_o74l8srDS_Id",
					"columns": [
						{
							"id": "5bcb5f2a-4886-0839-75d7-1ff4339202f0",
							"code": "GridDetail_o74l8srDS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_o74l8srDS_UsrStartDate)#",
							"dataValueType": 8,
							"width": 192
						},
						{
							"id": "b5fdf870-ab42-df13-1df6-05fca33c8c2e",
							"code": "GridDetail_o74l8srDS_UsrEndDate",
							"caption": "#ResourceString(GridDetail_o74l8srDS_UsrEndDate)#",
							"dataValueType": 8,
							"width": 145
						},
						{
							"id": "b4139d1c-92f1-6135-1e8e-a30f1bdeb763",
							"code": "GridDetail_o74l8srDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_o74l8srDS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "9578ecbe-2578-8f55-8e4c-448574c22bca",
							"code": "GridDetail_o74l8srDS_UsrComment",
							"caption": "#ResourceString(GridDetail_o74l8srDS_UsrComment)#",
							"dataValueType": 28
						}
					],
					"placeholder": false,
					"bulkActions": []
				},
				"parentName": "GridContainer_ynskqbs",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_o74l8sr_AddTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Add tag",
					"icon": "tag-icon",
					"clicked": {
						"request": "crt.AddTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_o74l8srDS",
							"filters": "$GridDetail_o74l8sr | crt.ToCollectionFilters : 'GridDetail_o74l8sr' : $GridDetail_o74l8sr_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_o74l8sr_SelectionState"
						}
					},
					"items": []
				},
				"parentName": "YachtRentalGridDetail",
				"propertyName": "bulkActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_o74l8sr_RemoveTagsBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Remove tag",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.RemoveTagsInRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_o74l8srDS",
							"filters": "$GridDetail_o74l8sr | crt.ToCollectionFilters : 'GridDetail_o74l8sr' : $GridDetail_o74l8sr_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_o74l8sr_SelectionState"
						}
					}
				},
				"parentName": "GridDetail_o74l8sr_AddTagsBulkAction",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_o74l8sr_ExportToExcelBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Export to Excel",
					"icon": "export-button-icon",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "YachtRentalGridDetail",
							"filters": "$GridDetail_o74l8sr | crt.ToCollectionFilters : 'GridDetail_o74l8sr' : $GridDetail_o74l8sr_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_o74l8sr_SelectionState"
						}
					}
				},
				"parentName": "YachtRentalGridDetail",
				"propertyName": "bulkActions",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_o74l8sr_MergeBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Merge",
					"icon": "merge-icon",
					"clicked": {
						"request": "crt.MergeRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_o74l8srDS",
							"selectionState": "$GridDetail_o74l8sr_SelectionState"
						}
					}
				},
				"parentName": "YachtRentalGridDetail",
				"propertyName": "bulkActions",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetail_o74l8sr_DeleteBulkAction",
				"values": {
					"type": "crt.MenuItem",
					"caption": "Delete",
					"icon": "delete-button-icon",
					"clicked": {
						"request": "crt.DeleteRecordsRequest",
						"params": {
							"dataSourceName": "GridDetail_o74l8srDS",
							"filters": "$GridDetail_o74l8sr | crt.ToCollectionFilters : 'GridDetail_o74l8sr' : $GridDetail_o74l8sr_SelectionState | crt.SkipIfSelectionEmpty : $GridDetail_o74l8sr_SelectionState"
						}
					}
				},
				"parentName": "YachtRentalGridDetail",
				"propertyName": "bulkActions",
				"index": 3
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_mgw30tp": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 200,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrDriveType_nehkj0f": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_nehkj0f_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrManager_abqa1l4": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_abqa1l4_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrComment_zsm165q": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrPassengersCount_4e9hma6": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						}
					},
					"PDS_UsrStatus_r42dzyu": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_r42dzyu_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrNumber_17vuate": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrCountry_81bvidw": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCountry_81bvidw_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCity_bdymh14": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"PDS_UsrCity_bdymh14_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrTicketPrice_sr8l17v": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrPassengersCountInt_3ukw51z": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCountInt"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 2,
									"message": "#ResourceString(PassengersCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrManagerEmail_0i4g6gq": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_0i4g6gq"
						}
					},
					"GridDetail_o74l8sr": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_o74l8srDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_r1kpkmf_GridDetail_o74l8sr",
									"loadOnChange": true
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_o74l8srDS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_o74l8srDS.UsrStartDate"
									}
								},
								"GridDetail_o74l8srDS_UsrEndDate": {
									"modelConfig": {
										"path": "GridDetail_o74l8srDS.UsrEndDate"
									}
								},
								"GridDetail_o74l8srDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_o74l8srDS.CreatedOn"
									}
								},
								"GridDetail_o74l8srDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_o74l8srDS.UsrComment"
									}
								},
								"GridDetail_o74l8srDS_Id": {
									"modelConfig": {
										"path": "GridDetail_o74l8srDS.Id"
									}
								}
							}
						}
					},
					"CategoriesMultiSelect_List_Items_Predefined_Filter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_o74l8srDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrManagerEmail_0i4g6gq": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_o74l8srDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrComment": {
									"path": "UsrComment"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_mgw30tp;
					console.log("Price = " + price);
					request.$context.PDS_UsrComment_zsm165q = "comment from JS code!";
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPrice_mgw30tp' || 		        // if price changed
					   request.attributeName === 'PDS_UsrPassengersCountInt_3ukw51z' ) { 		// or Passenger count changed
						let price = await request.$context.PDS_UsrPrice_mgw30tp;
						let passengers = await request.$context.PDS_UsrPassengersCountInt_3ukw51z;
						let ticket_price = price / passengers;
						request.$context.PDS_UsrTicketPrice_sr8l17v = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});