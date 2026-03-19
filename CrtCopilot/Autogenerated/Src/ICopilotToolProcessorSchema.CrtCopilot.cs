namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotToolProcessorSchema

	/// <exclude/>
	public class ICopilotToolProcessorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotToolProcessorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotToolProcessorSchema(ICopilotToolProcessorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("45ff5045-0bfb-49fc-bfdd-55d44048d58c");
			Name = "ICopilotToolProcessor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("ed753793-30d5-4797-a3f9-3019dcc6e358");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,117,82,77,75,228,64,16,61,143,224,127,40,226,101,4,73,238,58,6,118,131,184,129,149,21,103,246,36,30,106,146,154,73,67,127,132,174,14,172,136,255,125,43,233,100,190,28,79,73,85,191,247,234,213,135,69,67,220,98,69,80,120,194,160,92,90,184,86,105,23,46,47,62,46,47,102,29,43,187,133,229,59,7,50,119,39,177,32,181,166,74,56,150,211,71,178,228,85,181,199,156,200,165,79,20,176,198,128,123,196,138,188,71,118,155,144,62,88,161,54,134,108,72,75,27,200,111,196,15,167,69,131,161,112,166,213,212,151,72,95,196,167,84,34,22,5,209,184,242,180,149,52,236,8,183,80,142,181,86,206,233,103,239,68,131,157,31,192,170,7,89,212,160,38,244,119,224,217,199,64,216,201,139,237,198,213,124,11,207,221,90,171,42,62,102,89,6,11,238,140,65,255,158,79,137,23,10,157,183,12,8,65,36,161,114,82,234,95,128,141,243,16,26,2,110,169,82,27,69,53,96,28,25,160,173,7,63,54,112,186,83,205,78,101,23,45,122,52,96,101,79,247,73,164,150,50,124,78,242,31,67,0,170,143,210,69,54,224,206,211,198,42,73,94,142,229,190,160,125,52,159,175,14,172,11,106,74,247,184,215,63,107,118,178,11,154,39,127,249,120,126,69,36,252,236,148,174,201,75,83,114,30,88,39,215,111,61,239,43,14,30,233,48,156,151,15,182,51,228,113,173,105,49,162,99,111,253,205,244,205,230,112,208,248,77,47,58,59,195,137,205,45,171,134,12,230,211,100,225,30,108,167,245,117,60,154,217,111,197,97,194,63,201,202,113,75,57,252,146,77,104,26,28,161,214,60,63,62,188,233,238,100,44,167,169,27,24,165,150,34,213,239,130,227,55,90,60,211,120,216,255,79,142,174,200,214,241,214,134,248,51,30,247,81,82,114,255,1,233,14,133,124,167,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("45ff5045-0bfb-49fc-bfdd-55d44048d58c"));
		}

		#endregion

	}

	#endregion

}

