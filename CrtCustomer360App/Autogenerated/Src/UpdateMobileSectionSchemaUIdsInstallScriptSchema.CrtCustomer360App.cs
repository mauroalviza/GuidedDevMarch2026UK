namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UpdateMobileSectionSchemaUIdsInstallScriptSchema

	/// <exclude/>
	public class UpdateMobileSectionSchemaUIdsInstallScriptSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UpdateMobileSectionSchemaUIdsInstallScriptSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UpdateMobileSectionSchemaUIdsInstallScriptSchema(UpdateMobileSectionSchemaUIdsInstallScriptSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("b03c6789-7a08-42a2-810f-5fabb1ed1a93");
			Name = "UpdateMobileSectionSchemaUIdsInstallScript";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("9c9dce71-61f1-4751-aabc-14d22fc356f0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,205,82,93,107,219,48,20,125,118,161,255,65,248,201,129,42,216,137,252,145,117,25,88,254,40,129,101,12,210,236,117,168,178,146,10,28,201,88,114,55,83,242,223,167,216,77,214,164,73,183,189,237,65,18,186,186,58,231,222,115,15,16,100,195,84,69,40,3,247,172,174,137,146,43,61,76,164,88,241,117,83,19,205,165,184,190,122,190,190,178,26,197,197,26,44,90,165,217,230,246,112,127,253,165,102,151,226,195,76,104,174,57,83,38,193,164,84,205,67,201,41,160,37,81,10,44,171,130,104,54,151,15,188,100,11,70,119,132,11,250,200,54,100,57,43,212,130,214,188,210,224,3,152,205,132,210,164,44,251,64,246,147,209,70,203,26,60,119,120,86,85,243,39,3,2,106,70,10,41,202,22,220,53,188,0,223,9,165,178,17,218,212,60,151,69,83,178,89,1,166,64,176,31,221,179,99,103,153,31,5,121,228,67,63,27,121,16,141,80,8,39,49,30,65,47,157,184,65,238,230,46,70,129,61,184,125,135,128,74,161,9,189,72,48,66,153,27,34,20,192,113,140,92,136,38,185,15,35,47,245,96,50,114,19,140,18,55,73,19,244,62,193,75,7,159,185,210,95,201,154,45,79,8,92,47,143,34,156,102,48,196,73,2,209,216,139,97,148,224,28,102,113,238,7,113,60,241,81,18,255,85,7,151,8,66,63,72,16,206,2,3,155,198,16,229,105,4,113,26,133,16,227,56,138,198,129,55,9,163,176,35,232,40,250,177,62,73,3,220,79,136,57,75,197,106,99,38,209,15,22,52,71,215,193,110,126,150,101,117,238,104,129,218,203,104,74,56,78,236,253,211,246,190,152,19,97,42,173,135,119,76,247,97,220,126,49,22,118,236,195,24,236,155,83,162,78,2,139,175,128,115,32,25,230,76,211,199,188,150,155,20,59,103,172,50,216,87,119,242,205,208,222,183,21,43,18,89,54,27,241,141,148,13,251,184,19,235,147,99,159,55,177,61,0,211,105,167,231,48,219,84,186,61,224,90,191,65,23,76,191,194,187,136,116,115,206,17,47,205,29,193,145,39,230,172,72,169,216,254,113,219,29,219,63,201,240,214,208,255,169,12,111,125,251,175,50,236,54,179,182,191,0,16,175,102,46,0,5,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("b03c6789-7a08-42a2-810f-5fabb1ed1a93"));
		}

		#endregion

	}

	#endregion

}

