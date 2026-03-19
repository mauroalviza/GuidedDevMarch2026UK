namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UpdateAccountSectionLogoInstallScriptSchema

	/// <exclude/>
	public class UpdateAccountSectionLogoInstallScriptSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UpdateAccountSectionLogoInstallScriptSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UpdateAccountSectionLogoInstallScriptSchema(UpdateAccountSectionLogoInstallScriptSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9205c831-ef23-4ca9-a32c-7d0e0526bf68");
			Name = "UpdateAccountSectionLogoInstallScript";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("9c9dce71-61f1-4751-aabc-14d22fc356f0");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,82,201,110,219,48,20,60,43,64,254,129,213,73,6,66,193,146,181,216,77,91,192,212,18,24,104,122,113,210,107,193,74,207,142,0,138,84,185,184,21,146,252,123,101,201,107,182,3,9,240,241,189,153,225,12,57,173,65,53,180,0,116,7,82,82,37,86,218,77,4,95,85,107,35,169,174,4,191,188,120,188,188,176,140,170,248,26,45,91,165,161,190,62,156,79,71,36,188,87,119,51,174,43,93,129,234,26,186,150,198,252,102,85,129,10,70,149,66,247,77,73,53,204,139,66,24,174,151,80,108,25,191,139,181,88,112,165,41,99,203,66,86,141,70,159,209,226,172,144,253,131,194,104,33,209,99,143,104,53,178,218,116,48,72,2,45,5,103,45,186,49,85,137,126,209,29,108,171,110,69,105,24,44,74,244,21,113,248,219,95,59,118,150,133,211,40,159,134,56,204,124,15,7,126,16,227,217,156,248,216,75,103,227,40,31,231,99,18,68,246,232,250,3,2,193,202,157,244,94,243,57,188,239,77,102,179,104,18,227,108,26,231,56,24,71,9,158,199,19,130,227,32,159,231,126,158,122,100,238,127,12,79,223,197,78,201,44,244,39,105,140,199,89,68,112,16,146,4,19,127,154,224,212,243,146,60,244,98,207,39,131,244,30,125,48,124,35,58,204,193,57,112,238,21,200,46,102,62,56,142,204,217,113,180,245,213,178,172,62,183,22,169,189,127,157,132,243,198,33,217,118,89,60,64,77,111,41,167,107,144,238,13,232,161,76,218,31,221,231,114,236,131,255,246,213,75,162,254,245,86,181,66,206,167,3,139,155,131,46,30,114,41,234,148,56,111,100,56,218,203,179,36,104,35,249,128,241,220,239,27,42,17,219,219,117,68,236,36,221,181,13,148,137,96,166,230,63,41,51,240,101,107,228,55,199,30,204,181,79,148,12,243,110,246,199,80,166,156,109,155,155,213,141,110,71,232,233,9,157,95,190,250,0,71,109,71,242,37,232,19,222,3,227,213,139,124,119,10,78,7,233,6,156,85,199,3,163,147,55,110,183,110,61,255,7,120,217,183,194,185,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9205c831-ef23-4ca9-a32c-7d0e0526bf68"));
		}

		#endregion

	}

	#endregion

}

