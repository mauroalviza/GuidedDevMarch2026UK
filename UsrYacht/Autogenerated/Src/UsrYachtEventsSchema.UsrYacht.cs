namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrYachtEventsSchema

	/// <exclude/>
	public class UsrYachtEventsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrYachtEventsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrYachtEventsSchema(UsrYachtEventsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("82e30182-14c5-458f-b04f-ace92fa10d92");
			Name = "UsrYachtEvents";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("407ec24e-fdf3-4eea-8397-1eff1ca9ca1d");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,82,93,107,27,49,16,124,15,228,63,44,247,116,7,70,36,175,73,27,168,29,39,4,66,91,122,231,66,41,125,144,117,235,179,130,62,14,73,231,212,45,249,239,93,73,118,226,156,83,200,130,241,105,53,154,157,25,214,112,141,190,231,2,161,65,231,184,183,171,192,102,214,172,100,55,56,30,164,53,167,39,127,79,79,128,106,240,210,116,80,111,125,64,125,121,216,58,124,168,181,53,255,189,116,200,230,38,200,32,209,191,7,195,230,27,52,97,15,253,153,218,219,212,187,151,36,194,160,43,107,177,70,205,63,147,7,248,8,197,194,187,31,92,172,67,81,253,202,111,250,97,169,164,0,161,184,247,144,174,222,32,129,11,152,114,143,111,220,100,146,157,253,3,62,187,33,193,178,69,216,88,217,194,23,83,243,13,217,40,237,242,1,69,0,143,166,69,55,129,76,56,197,21,121,74,180,159,92,231,1,171,23,186,3,230,88,75,82,193,158,217,246,52,88,93,190,134,101,94,216,70,59,228,186,204,231,42,227,71,216,22,133,212,92,65,239,164,136,17,165,71,236,22,67,179,237,177,157,89,53,104,243,157,171,1,63,236,144,87,101,76,241,107,132,23,227,193,114,5,101,38,186,130,243,179,84,213,107,196,200,80,44,100,119,126,198,141,64,133,45,9,8,110,64,162,61,198,249,224,226,42,208,50,122,222,97,131,186,87,60,68,201,6,31,225,222,10,174,228,31,190,84,88,39,92,153,141,44,60,58,90,86,67,177,211,166,178,111,232,237,224,4,97,172,35,146,9,28,143,137,245,188,39,121,191,138,9,20,71,3,60,75,177,220,249,198,218,169,236,242,169,168,88,99,119,2,170,119,184,32,245,185,193,110,172,211,60,148,35,119,52,248,28,40,197,244,91,212,215,71,137,199,10,107,103,31,83,10,243,223,2,251,104,116,207,51,134,63,189,28,119,159,244,247,20,117,254,3,130,23,141,36,230,3,0,0 };
		}

		protected override void InitializeLocalizableStrings() {
			base.InitializeLocalizableStrings();
			SetLocalizableStringsDefInheritance();
			LocalizableStrings.Add(CreateValueIsTooBigLocalizableString());
		}

		protected virtual SchemaLocalizableString CreateValueIsTooBigLocalizableString() {
			SchemaLocalizableString localizableString = new SchemaLocalizableString() {
				UId = new Guid("8c20fc71-d327-a242-27ee-ff681402fe71"),
				Name = "ValueIsTooBig",
				CreatedInPackageId = new Guid("407ec24e-fdf3-4eea-8397-1eff1ca9ca1d"),
				CreatedInSchemaUId = new Guid("82e30182-14c5-458f-b04f-ace92fa10d92"),
				ModifiedInSchemaUId = new Guid("82e30182-14c5-458f-b04f-ace92fa10d92")
			};
			return localizableString;
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("82e30182-14c5-458f-b04f-ace92fa10d92"));
		}

		#endregion

	}

	#endregion

}

