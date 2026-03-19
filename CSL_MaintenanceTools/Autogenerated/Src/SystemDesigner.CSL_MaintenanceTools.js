define("SystemDesigner", ["RightUtilities", "ProcessModuleUtilities", "SystemDesignerResources"],
	function (RightUtilities, ProcessModuleUtilities, resources) {
		return {
			attributes: {
				"CanManageSolution": { dataValueType: Terrasoft.DataValueType.BOOLEAN }
			},
			methods: {

                // Call the internal Creatio Web Service to clear the Redis cache
                callFlushWS: function() {
					ProcessModuleUtilities.callService({
						serviceName: "ServiceModel/AppInstallerService.svc",
						methodName: "ClearRedisDb",
                      	timeout: 30
					}, this.callBack, this);
				},
				
				// Call the internal Creatio Web Service to restart the Application
				callAppRestartWS: function() {
					ProcessModuleUtilities.callService({
						serviceName: "ServiceModel/AppInstallerService.svc",
						methodName: "UnloadAppDomain",
                      	timeout: 30
					}, this.callBack, this);
				},
				
				callBack: function(config, success,result) {
					if (!success && result.responseText)
					{
						var message = JSON.parse(result.responseText).errorInfo.message;
						this.Terrasoft.utils.showInformation(message);
					}
				},

				// Method called when clicking on the "Clear Redis Cache" button in the system designer
				onRedisFlush: function () {
					var hasRights = this.get("CanManageSolution");
					if (!this.Ext.isEmpty(hasRights)) {
						this.inputBoxGenerator(this.get("Resources.Strings.ClearingCacheInfo"), this.callFlushWS);
					} else {
						RightUtilities.checkCanExecuteOperation({
							operation: "CanManageSolution"
						}, function (result) {
							this.set("CanManageSolution", result);
							this.inputBoxGenerator(this.get("Resources.Strings.ClearingCacheInfo"),  this.callFlushWS);
						}, this);
					}
					return false;
				},

                // Method called when clicking on the "Restart Application" button in the system designer
				onAppRestart: function () {
					var hasRights = this.get("CanManageSolution");
					if (!this.Ext.isEmpty(hasRights)) {
						this.inputBoxGenerator(this.get("Resources.Strings.RestartingAppInfo"), this.callAppRestartWS);
					} else {
						RightUtilities.checkCanExecuteOperation({
							operation: "CanManageSolution"
						}, function (result) {
							this.set("CanManageSolution", result);
							this.inputBoxGenerator(this.get("Resources.Strings.RestartingAppInfo"), this.callAppRestartWS);
						}, this);
					}
					return false;
				},
				
				// Pop-up information dialog
				inputBoxGenerator: function (inputMessage, webService) {
					if (this.get("CanManageSolution") === true) {
						Terrasoft.utils.inputBox(
							inputMessage,
							function(returnCode, controlData) {
								if (returnCode === "yes") {
									webService();
								}
							},
							[
								{
									className: "Terrasoft.Button",
									caption: this.get("Resources.Strings.ContinueButtonCaption"),
									returnCode: "yes"
								},
								"cancel"
							],
							this,
							{},
							{
								defaultButton: 0,
							}
						);
					} else {
						var message = this.get("Resources.Strings.RightsErrorMessage");
						this.Terrasoft.utils.showInformation(message);
						this.hideBodyMask();
					}
				}
		},
			diff: [

				// Add the button to refresh the Redis cache on the system designer
				{
					"operation": "insert",
					"propertyName": "items",
					"parentName": "ConfigurationTile",
					"name": "FlushRedis",
					"index": 2,
					"values": {
						"caption": { "bindTo": "Resources.Strings.FlushRedisButton" },
						"click": { "bindTo": "onRedisFlush" }
					}
				},

				// Add the button to restart the Application on the system designer
				{
					"operation": "insert",
					"propertyName": "items",
					"parentName": "ConfigurationTile",
					"name": "RestartApp",
					"index": 3,
					"values": {
						"caption": { "bindTo": "Resources.Strings.RestartAppButton" },
						"click": { "bindTo": "onAppRestart" }
					}
				}
			]
		};
	});