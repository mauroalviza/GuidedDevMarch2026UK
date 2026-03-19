namespace Creatio.Copilot
{
    using System;
    using System.Linq;
    using Creatio.Copilot.Actions;
    using Terrasoft.Common;
    using Terrasoft.Core;
    using Terrasoft.Core.Factories;
    using Terrasoft.Core.Process;

    #region Class: CancelProcessExecutionAction

    public class CancelProcessExecutionAction : BaseExecutableCodeAction, IUserConnectionRequired
    {

        #region Fields: Private

        private UserConnection _userConnection;

        #endregion

        #region Methods: Protected

        /// <inheritdoc />
        protected override bool GetIsEnabled() {
            return true;
        }

        #endregion

        #region Methods: Public

        /// <inheritdoc/>
        public override LocalizableString GetCaption() {
            return new LocalizableString("Cancel process execution");
        }

        /// <inheritdoc/>
        public override LocalizableString GetDescription() {
            return new LocalizableString("Cancel process execution");
        }

        /// <inheritdoc/>
        public override CopilotActionExecutionResult Execute(ActionExecutionOptions options) {
            var sessionManager = ClassFactory.Get<ICopilotSessionManager>();
            CopilotSession session = sessionManager.FindById(options.CopilotSessionUId);
            if (session?.ProcessElementId is Guid elementUId && elementUId != Guid.Empty) {
                try {
                    Process process = _userConnection.ProcessEngine.FindProcessByProcessElementUId(elementUId);
                    if (process != null) {
                        _userConnection.ProcessEngine.ProcessExecutor.CancelExecutionAsync(process.UId);
                    }
                } catch (Exception e) {
                    return new CopilotActionExecutionResult {
                        Status = CopilotActionExecutionStatus.Failed,
                        ErrorMessage = $"Unable to cancel process execution due to an exception: {e.Message}"
                    };
                }
            } else {
                return new CopilotActionExecutionResult {
                    Status = CopilotActionExecutionStatus.Failed,
                    ErrorMessage = "Unable to cancel process execution because the skill is running outside of the process."
                };
            }
            return new CopilotActionExecutionResult {
                Status = CopilotActionExecutionStatus.Completed,
                Response = "Process execution cancelled.",
                ResponseOptions = new ActionResponseOptions {
                    ContentType = CopilotContentType.Cancellation,
                    OmitAssistantResponse = true
                }
            };
        }

        /// <inheritdoc/>
        public void SetUserConnection(UserConnection userConnection) {
            _userConnection = userConnection;
        }

        #endregion

    }

    #endregion

}

