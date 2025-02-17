let FromNode = async ({ inFolderName, inFileName, inItemName, inRowPK, inProjectName }) => {
    try {
        let LocalReturnObject = { KTF: false, KResult: "", JsonData: {} };

        let inFetchPostData = {
            FileNameOnly: inFileName,
            FolderName: inFolderName,
            ItemName: inItemName,
            JsonPk: inRowPK,
            Screenname: "Create"
        };

        // let jVarLocalFetchUrl = `/${inProjectName}/API/Data/FromFolder/FromFile/Items/FromDataFolder/RowData`;
        let jVarLocalFetchUrl = `/bin/Vouchers/DataOnly`;

        let jVarLocalFetchHeaders = {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inFetchPostData)
        };

        const response = await fetch(jVarLocalFetchUrl);
        const data = await response.json();

        if (data.KTF === false) {
            LocalReturnObject.KReason = data;
            return await LocalReturnObject;
        };

        LocalReturnObject.JsonData = data;

        LocalReturnObject.KTF = true;
        return await LocalReturnObject;

    } catch (error) {
        console.log("error:", error);
    }

};

export { FromNode };