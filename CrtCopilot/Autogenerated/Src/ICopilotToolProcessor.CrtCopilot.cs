namespace Creatio.Copilot
{
	using System;
	using System.Collections.Generic;
	using Creatio.Copilot.Metadata;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion.Responses;

	#region Interface: ICopilotToolProcessor

	internal interface ICopilotToolProcessor
	{

		#region Methods: Public

		/// <summary>
		/// Returns a tool context for the specified actions and intents.
		/// </summary>
		/// <param name="actionItems">Action items.</param>
		/// <param name="intents">Intents.</param>
		/// <returns>Tool context.</returns>
		[Obsolete("Use ICopilotToolContextBuilder instead")]
		CopilotToolContext GetToolContext(IEnumerable<CopilotActionMetaItem> actionItems,
			IEnumerable<CopilotIntentSchema> intents = null);

		List<CopilotMessage> HandleToolCalls(ChatCompletionResponse completionResponse, CopilotSession session,
			CopilotToolContext toolContext);

		#endregion

	}

	#endregion

}

